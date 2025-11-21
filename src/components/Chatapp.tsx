/**
 * ChatApp - Main Application Component
 * Root component that orchestrates all services and UI components
 */

import React, { useEffect, useState, useCallback } from 'react';
import Logger from '../utils/Logger';
import StorageService from '../services/StorageService';
import NotificationService from '../services/NotificationService';
import StateManager from '../services/StateManager';
import { socketIOService } from '../services/SocketIOService';
import {
    ApplicationState,
    ScreenType,
    Message,
    LoginResponse,
    AppSettings,
    DEFAULT_SETTINGS
} from '../types';
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';
import LoadingScreen from './screens/LoadingScreen';
import '../styles/app.css';

interface Props {}

interface LocalState {
    appState: ApplicationState;
    settings: AppSettings;
    isInitializing: boolean;
    initError: string | null;
}

const ChatApp: React.FC<Props> = () => {
    const logger = Logger;
    const module = 'ChatApp';
    const [localState, setLocalState] = useState<LocalState>({
        appState: StateManager.getState(),
        settings: DEFAULT_SETTINGS,
        isInitializing: true,
        initError: null
    });

    /**
     * Initialize app on mount
     */
    useEffect(() => {
        logger.info(module, 'ChatApp mounted, initializing...');
        initializeApp();

        return () => {
            logger.info(module, 'ChatApp unmounting');
        };
    }, []);

    /**
     * Subscribe to state changes
     */
    useEffect(() => {
        const unsubscribe = StateManager.subscribe((state) => {
            logger.debug(module, 'State changed', StateManager.getStateSummary());
            setLocalState((prev) => ({ ...prev, appState: state }));
        });

        return unsubscribe;
    }, []);

    /**
     * Initialize application
     */
    const initializeApp = async (): Promise<void> => {
        try {
            logger.info(module, 'Starting app initialization');

            // Load settings
            const settings = await StorageService.getSettings();
            setLocalState((prev) => ({ ...prev, settings }));
            logger.info(module, 'Settings loaded');

            // Check if user is logged in
            const isLoggedIn = await StorageService.isLoggedIn();

            if (isLoggedIn) {
                logger.info(module, 'User is logged in, reconnecting...');
                await reconnectUser();
            } else {
                logger.info(module, 'User not logged in, showing login screen');
                StateManager.setUIScreen(ScreenType.LOGIN);
            }

            setLocalState((prev) => ({ ...prev, isInitializing: false }));
        } catch (error) {
            logger.error(module, 'Initialization error', error);
            setLocalState((prev) => ({
                ...prev,
                isInitializing: false,
                initError: 'Failed to initialize app'
            }));
        }
    };

    /**
     * Reconnect existing user
     */
    const reconnectUser = async (): Promise<void> => {
        try {
            const data = await StorageService.get(['username', 'serverAddress', 'userId']);

            if (!data.username || !data.serverAddress) {
                logger.warn(module, 'Missing connection data');
                StateManager.setUIScreen(ScreenType.LOGIN);
                return;
            }

            logger.info(module, 'Reconnecting user', { username: data.username });

            // Update state
            StateManager.setUsername(data.username);
            StateManager.setServerAddress(data.serverAddress);
            StateManager.setIsLoading(true);

            // Initialize socket connection
            await socketIOService.initialize(data.serverAddress);

            // Login
            const response = await socketIOService.login(data.username);
            handleLoginSuccess(response);

            // Setup socket listeners
            setupSocketListeners();

            StateManager.setUIScreen(ScreenType.CHAT);
        } catch (error) {
            logger.error(module, 'Reconnection failed', error);
            StateManager.setUIScreen(ScreenType.LOGIN);
            NotificationService.showToast('Failed to reconnect', 'error');
        } finally {
            StateManager.setIsLoading(false);
        }
    };

    /**
     * Handle login
     */
    const handleLogin = async (username: string, serverAddress: string): Promise<void> => {
        try {
            logger.info(module, 'Logging in', { username });
            StateManager.setIsLoading(true);

            // Initialize socket
            await socketIOService.initialize(serverAddress);

            // Perform login
            const response = await socketIOService.login(username);
            handleLoginSuccess(response);

            // Save credentials
            await StorageService.saveCredentials(username, serverAddress);
            await StorageService.saveUserId(response.userId);

            // Setup listeners
            setupSocketListeners();

            // Transition to chat screen
            StateManager.setUIScreen(ScreenType.CHAT);

            logger.info(module, 'Login successful');
            NotificationService.showToast(`Welcome, ${username}!`, 'success');
        } catch (error) {
            logger.error(module, 'Login failed', error);
            const errorMessage = error instanceof Error ? error.message : 'Login failed';
            NotificationService.showToast(errorMessage, 'error');
            throw error;
        } finally {
            StateManager.setIsLoading(false);
        }
    };

    /**
     * Handle login success
     */
    const handleLoginSuccess = (response: LoginResponse): void => {
        logger.info(module, 'Login success', {
            userId: response.userId,
            username: response.username
        });

        StateManager.setUserId(response.userId);
        StateManager.setUsername(response.username);
        StateManager.setUnreadCount(response.unreadCount);
        StateManager.setIsConnected(true);

        // Update badge
        NotificationService.updateBadge(response.unreadCount);
    };

    /**
     * Setup socket event listeners
     */
    const setupSocketListeners = (): void => {
        logger.info(module, 'Setting up socket listeners');

        // New message received
        socketIOService.on('new_message', (message: Message) => {
            logger.info(module, 'New message received', {
                senderId: message.senderId,
                messageId: message.id
            });

            const currentState = StateManager.getState();
            StateManager.addMessage(message.senderId, message);
            StateManager.incrementUnreadCount();

            // Send notification
            if (localState.settings) {
                NotificationService.notifyMessageReceived(
                    {
                        userId: message.senderId,
                        username: 'User', // Will update with actual username
                        message: message.content
                    },
                    localState.settings
                );
            }

            // Auto-read if current chat
            if (currentState.currentChatUserId === message.senderId) {
                setTimeout(() => {
                    if (currentState.userId) {
                        socketIOService.markAsRead(currentState.userId, message.senderId);
                    }
                }, 500);
            }
        });

        // Message sent confirmation
        socketIOService.on('message_sent', (data) => {
            logger.debug(module, 'Message sent confirmation', { messageId: data.messageId });
        });

        // Messages read by recipient
        socketIOService.on('messages_read', (data) => {
            logger.info(module, 'Messages read by recipient', {
                recipientId: data.recipientId
            });

            StateManager.updateMessageReadStatus(data.recipientId, []);
        });

        // User online
        socketIOService.on('user_online', (data) => {
            logger.info(module, 'User online', { userId: data.userId, username: data.username });

            StateManager.addOnlineUser(data.userId, {
                id: data.userId,
                username: data.username,
                createdAt: new Date().toISOString(),
                online: true,
                socketId: ''
            });
        });

        // User offline
        socketIOService.on('user_offline', (data) => {
            logger.info(module, 'User offline', { userId: data.userId });
            StateManager.removeOnlineUser(data.userId);
        });

        // Conversation deleted
        socketIOService.on('conversation_deleted', (data) => {
            logger.info(module, 'Conversation deleted', { conversationId: data.conversationId });
            // UI should handle this
        });

        // Connection changed
        socketIOService.on('connection-changed', (isConnected: boolean) => {
            logger.info(module, 'Connection status changed', { isConnected });
            StateManager.setIsConnected(isConnected);

            if (isConnected) {
                NotificationService.showToast('Connected to server', 'success');
            } else {
                NotificationService.showToast('Disconnected from server', 'error');
            }
        });

        // Error
        socketIOService.on('error', (error) => {
            logger.error(module, 'Socket error', error);
            NotificationService.showToast(error.message || 'An error occurred', 'error');
        });
    };

    /**
     * Handle logout
     */
    const handleLogout = async (): Promise<void> => {
        try {
            logger.info(module, 'Logging out');

            socketIOService.disconnect();
            await StorageService.clearAll();
            StateManager.clearState();

            StateManager.setUIScreen(ScreenType.LOGIN);
            NotificationService.showToast('Logged out successfully', 'success');

            logger.info(module, 'Logout successful');
        } catch (error) {
            logger.error(module, 'Logout error', error);
        }
    };

    /**
     * Render current screen
     */
    const renderScreen = (): JSX.Element => {
        if (localState.isInitializing) {
            return <LoadingScreen message="Initializing..." />;
        }

        if (localState.initError) {
            return (
                <div className="error-screen">
                    <h2>Error</h2>
                    <p>{localState.initError}</p>
                    <button onClick={() => window.location.reload()}>Retry</button>
                </div>
            );
        }

        if (localState.appState.currentChatUserId === null && !socketIOService.getIsConnected()) {
            return (
                <LoginScreen
                    onLogin={handleLogin}
                    isLoading={localState.appState.isLoading}
                />
            );
        }

        return (
            <ChatScreen
                appState={localState.appState}
                settings={localState.settings}
                onLogout={handleLogout}
                onSettingsSave={async (settings) => {
                    await StorageService.saveSettings(settings);
                    setLocalState((prev) => ({ ...prev, settings }));
                }}
            />
        );
    };

    return (
        <div className="chat-app">
            {renderScreen()}
        </div>
    );
};

export default ChatApp;