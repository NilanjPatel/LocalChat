/**
 * ChatScreen Component
 * Main chat interface with conversations and messages
 */

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Logger from '../../utils/Logger';
import NotificationService from '../../services/NotificationService';
import StateManager from '../../services/StateManager';
import { socketIOService } from '../../services/SocketIOService';
import {
    ApplicationState,
    Message,
    Conversation,
    AppSettings
} from '../../types';
import ConversationsList from '../features/ConversationsList';
import ChatWindow from '../features/ChatWindow';
import SettingsModal from '../features/SettingsModal';
import '../styles/chat-screen.css';

interface Props {
    appState: ApplicationState;
    settings: AppSettings;
    onLogout: () => Promise<void>;
    onSettingsSave: (settings: AppSettings) => Promise<void>;
}

interface LocalState {
    conversations: Conversation[];
    currentMessages: Message[];
    showSettings: boolean;
    searchQuery: string;
    isLoadingMessages: boolean;
}

const ChatScreen: React.FC<Props> = ({
                                         appState,
                                         settings,
                                         onLogout,
                                         onSettingsSave
                                     }) => {
    const logger = Logger;
    const module = 'ChatScreen';

    const [localState, setLocalState] = useState<LocalState>({
        conversations: [],
        currentMessages: [],
        showSettings: false,
        searchQuery: '',
        isLoadingMessages: false
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    /**
     * Load conversations on mount
     */
    useEffect(() => {
        logger.info(module, 'ChatScreen mounted');
        loadConversations();
    }, []);

    /**
     * Load messages when current chat changes
     */
    useEffect(() => {
        if (appState.currentChatUserId) {
            loadMessages();
        } else {
            setLocalState((prev) => ({ ...prev, currentMessages: [] }));
        }
    }, [appState.currentChatUserId]);

    /**
     * Update badge when unread count changes
     */
    useEffect(() => {
        NotificationService.updateBadge(appState.unreadCount);
    }, [appState.unreadCount]);

    /**
     * Load conversations from server
     */
    const loadConversations = async (): Promise<void> => {
        try {
            if (!appState.userId || !appState.serverAddress) {
                logger.warn(module, 'Missing user info for loading conversations');
                return;
            }

            logger.info(module, 'Loading conversations', { userId: appState.userId });

            const response = await fetch(
                `${appState.serverAddress}/api/conversations/${appState.userId}`
            );

            if (!response.ok) {
                throw new Error(`Failed to load conversations: ${response.status}`);
            }

            const conversations: Conversation[] = await response.json();
            logger.info(module, 'Conversations loaded', { count: conversations.length });

            setLocalState((prev) => ({ ...prev, conversations }));
        } catch (error) {
            logger.error(module, 'Failed to load conversations', error);
            NotificationService.showToast('Failed to load conversations', 'error');
        }
    };

    /**
     * Load messages for current conversation
     */
    const loadMessages = async (): Promise<void> => {
        try {
            if (!appState.currentChatUserId || !appState.userId || !appState.serverAddress) {
                logger.warn(module, 'Missing info for loading messages');
                return;
            }

            logger.info(module, 'Loading messages', {
                currentChatUserId: appState.currentChatUserId,
                userId: appState.userId
            });

            setLocalState((prev) => ({ ...prev, isLoadingMessages: true }));

            const response = await fetch(
                `${appState.serverAddress}/api/messages?user1=${appState.userId}&user2=${appState.currentChatUserId}&limit=50`
            );

            if (!response.ok) {
                throw new Error(`Failed to load messages: ${response.status}`);
            }

            const messages: Message[] = await response.json();
            logger.info(module, 'Messages loaded', { count: messages.length });

            setLocalState((prev) => ({ ...prev, currentMessages: messages }));

            // Auto-read messages
            setTimeout(() => {
                if (appState.userId && appState.currentChatUserId) {
                    socketIOService.markAsRead(appState.userId, appState.currentChatUserId);
                }
            }, 500);
        } catch (error) {
            logger.error(module, 'Failed to load messages', error);
            NotificationService.showToast('Failed to load messages', 'error');
        } finally {
            setLocalState((prev) => ({ ...prev, isLoadingMessages: false }));
        }
    };

    /**
     * Send message
     */
    const handleSendMessage = useCallback(
        async (content: string) => {
            try {
                if (!appState.currentChatUserId || !appState.userId) {
                    logger.warn(module, 'Missing user info for sending message');
                    return;
                }

                if (!content.trim()) {
                    logger.debug(module, 'Attempt to send empty message');
                    return;
                }

                logger.info(module, 'Sending message', {
                    from: appState.userId,
                    to: appState.currentChatUserId,
                    contentLength: content.length
                });

                await socketIOService.sendMessage(
                    appState.userId,
                    appState.currentChatUserId,
                    content
                );

                // Play success sound
                await NotificationService.playSuccessSound();
            } catch (error) {
                logger.error(module, 'Failed to send message', error);
                NotificationService.showToast('Failed to send message', 'error');
            }
        },
        [appState.userId, appState.currentChatUserId]
    );

    /**
     * Delete conversation
     */
    const handleDeleteConversation = useCallback(
        async (otherUserId: number) => {
            try {
                if (!appState.userId) {
                    logger.warn(module, 'Missing user ID for delete');
                    return;
                }

                if (!window.confirm('Delete this conversation? Messages will be removed.')) {
                    logger.debug(module, 'Delete conversation cancelled by user');
                    return;
                }

                logger.info(module, 'Deleting conversation', {
                    user1: appState.userId,
                    user2: otherUserId
                });

                socketIOService.deleteConversation(appState.userId, otherUserId);

                // Clear current chat
                StateManager.setCurrentChatUserId(null);

                // Reload conversations
                await loadConversations();

                NotificationService.showToast('Conversation deleted', 'success');
            } catch (error) {
                logger.error(module, 'Failed to delete conversation', error);
                NotificationService.showToast('Failed to delete conversation', 'error');
            }
        },
        [appState.userId]
    );

    /**
     * Handle logout
     */
    const handleLogoutClick = useCallback(async () => {
        if (window.confirm('Are you sure you want to logout?')) {
            logger.info(module, 'User initiating logout');
            await onLogout();
        }
    }, [onLogout]);

    /**
     * Handle search query change
     */
    const handleSearchChange = useCallback((query: string) => {
        logger.debug(module, 'Search query changed', { query });
        setLocalState((prev) => ({ ...prev, searchQuery: query }));
    }, []);

    /**
     * Filter conversations based on search
     */
    const filteredConversations = localState.conversations.filter((conv) =>
        conv.other_username.toLowerCase().includes(localState.searchQuery.toLowerCase())
    );

    return (
        <div className="chat-screen">
            <div className="chat-layout">
                {/* Sidebar */}
                <aside className="sidebar">
                    <div className="sidebar-header">
                        <h2>Local Chat</h2>
                        <div className="user-info">
                            <span className="user-badge">{appState.username?.[0].toUpperCase()}</span>
                            <div className="user-status">
                                <span className="username">{appState.username}</span>
                                <span className={`connection-status ${appState.isConnected ? 'connected' : 'disconnected'}`}>
                  {appState.isConnected ? '🟢 Connected' : '🔴 Disconnected'}
                </span>
                            </div>
                        </div>
                    </div>

                    {/* Unread Badge */}
                    {appState.unreadCount > 0 && (
                        <div className="unread-indicator">
                            📬 {appState.unreadCount} unread
                        </div>
                    )}

                    {/* Search */}
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            value={localState.searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                        />
                    </div>

                    {/* Conversations List */}
                    <ConversationsList
                        conversations={filteredConversations}
                        selectedUserId={appState.currentChatUserId}
                        onSelectConversation={(userId) => {
                            logger.debug(module, 'Conversation selected', { userId });
                            StateManager.setCurrentChatUserId(userId);
                        }}
                    />

                    {/* Footer */}
                    <div className="sidebar-footer">
                        <button
                            className="btn btn-secondary btn-small"
                            onClick={() => setLocalState((prev) => ({ ...prev, showSettings: true }))}
                        >
                            ⚙️ Settings
                        </button>
                        <button
                            className="btn btn-secondary btn-small"
                            onClick={handleLogoutClick}
                        >
                            🚪 Logout
                        </button>
                    </div>
                </aside>

                {/* Main Chat Area */}
                <main className="chat-area">
                    {appState.currentChatUserId ? (
                        <ChatWindow
                            messages={localState.currentMessages}
                            currentUserId={appState.userId || 0}
                            otherUserId={appState.currentChatUserId}
                            otherUsername={
                                localState.conversations.find(
                                    (c) => c.other_user_id === appState.currentChatUserId
                                )?.other_username || 'User'
                            }
                            onSendMessage={handleSendMessage}
                            onDeleteConversation={handleDeleteConversation}
                            isLoading={localState.isLoadingMessages}
                            settings={settings}
                        />
                    ) : (
                        <div className="no-conversation-selected">
                            <div className="empty-state-icon">💭</div>
                            <h3>Select a conversation to start chatting</h3>
                            <p>or start a new conversation with an online user</p>
                        </div>
                    )}
                </main>
            </div>

            {/* Settings Modal */}
            <SettingsModal
                isOpen={localState.showSettings}
                settings={settings}
                onClose={() => setLocalState((prev) => ({ ...prev, showSettings: false }))}
                onSave={onSettingsSave}
            />

            {/* Ref for auto-scroll */}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatScreen;