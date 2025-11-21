/**
 * State Manager Service
 * Manages application state with event emitter pattern
 */

import Logger from './Logger';
import {
    ApplicationState,
    OnlineUser,
    Conversation,
    Message,
    AppSettings,
    DEFAULT_SETTINGS,
    ScreenType,
    UIState
} from '../types';

type StateListener = (state: ApplicationState) => void;
type UIStateListener = (state: UIState) => void;

class StateManager {
    private static instance: StateManager;
    private readonly module = 'StateManager';

    private state: ApplicationState = {
        userId: null,
        username: null,
        serverAddress: null,
        currentChatUserId: null,
        onlineUsers: new Map(),
        conversations: {},
        unreadCount: 0,
        isConnected: false,
        isLoading: false
    };

    private uiState: UIState = {
        currentScreen: ScreenType.LOGIN,
        selectedConversationId: null,
        isModalOpen: false
    };

    private stateListeners: Set<StateListener> = new Set();
    private uiStateListeners: Set<UIStateListener> = new Set();

    private constructor() {
        Logger.info(this.module, 'StateManager initialized');
    }

    public static getInstance(): StateManager {
        if (!StateManager.instance) {
            StateManager.instance = new StateManager();
        }
        return StateManager.instance;
    }

    /**
     * Get current application state
     */
    public getState(): ApplicationState {
        return { ...this.state };
    }

    /**
     * Get current UI state
     */
    public getUIState(): UIState {
        return { ...this.uiState };
    }

    /**
     * Set user ID
     */
    public setUserId(userId: number): void {
        Logger.debug(this.module, 'Setting user ID', { userId });
        this.setState({ userId });
    }

    /**
     * Set username
     */
    public setUsername(username: string): void {
        Logger.debug(this.module, 'Setting username', { username });
        this.setState({ username });
    }

    /**
     * Set server address
     */
    public setServerAddress(serverAddress: string): void {
        Logger.debug(this.module, 'Setting server address', { serverAddress });
        this.setState({ serverAddress });
    }

    /**
     * Set current chat user
     */
    public setCurrentChatUserId(userId: number | null): void {
        Logger.debug(this.module, 'Setting current chat user', { userId });
        this.setState({ currentChatUserId: userId });
    }

    /**
     * Set connection status
     */
    public setIsConnected(isConnected: boolean): void {
        Logger.info(this.module, 'Setting connection status', { isConnected });
        this.setState({ isConnected });
    }

    /**
     * Set loading status
     */
    public setIsLoading(isLoading: boolean): void {
        Logger.debug(this.module, 'Setting loading status', { isLoading });
        this.setState({ isLoading });
    }

    /**
     * Add or update online user
     */
    public addOnlineUser(userId: number, user: OnlineUser): void {
        Logger.debug(this.module, 'Adding online user', { userId, username: user.username });
        const newUsers = new Map(this.state.onlineUsers);
        newUsers.set(userId, user);
        this.setState({ onlineUsers: newUsers });
    }

    /**
     * Remove online user
     */
    public removeOnlineUser(userId: number): void {
        Logger.debug(this.module, 'Removing online user', { userId });
        const newUsers = new Map(this.state.onlineUsers);
        newUsers.delete(userId);
        this.setState({ onlineUsers: newUsers });
    }

    /**
     * Add or update conversation
     */
    public addConversation(userId: number, conversation: Conversation): void {
        Logger.debug(this.module, 'Adding conversation', {
            userId,
            otherUserId: conversation.otherUserId
        });

        this.setState({
            conversations: {
                ...this.state.conversations,
                [userId]: {
                    messages: this.state.conversations[userId]?.messages || [],
                    metadata: conversation
                }
            }
        });
    }

    /**
     * Add message to conversation
     */
    public addMessage(fromUserId: number, message: Message): void {
        Logger.debug(this.module, 'Adding message', {
            fromUserId,
            messageId: message.id
        });

        const conversations = { ...this.state.conversations };
        if (!conversations[fromUserId]) {
            conversations[fromUserId] = { messages: [], metadata: {} as any };
        }

        conversations[fromUserId].messages.push(message);

        this.setState({ conversations });
    }

    /**
     * Update message read status
     */
    public updateMessageReadStatus(fromUserId: number, messageIds: number[]): void {
        Logger.debug(this.module, 'Updating message read status', {
            fromUserId,
            count: messageIds.length
        });

        const conversations = { ...this.state.conversations };
        if (conversations[fromUserId]) {
            conversations[fromUserId].messages = conversations[fromUserId].messages.map(
                (msg) => {
                    if (messageIds.includes(msg.id)) {
                        return { ...msg, isRead: 1, readAt: new Date().toISOString() };
                    }
                    return msg;
                }
            );
        }

        this.setState({ conversations });
    }

    /**
     * Set unread count
     */
    public setUnreadCount(count: number): void {
        Logger.debug(this.module, 'Setting unread count', { count });
        this.setState({ unreadCount: count });
    }

    /**
     * Increment unread count
     */
    public incrementUnreadCount(): void {
        const newCount = this.state.unreadCount + 1;
        Logger.debug(this.module, 'Incrementing unread count', { newCount });
        this.setState({ unreadCount: newCount });
    }

    /**
     * Decrement unread count
     */
    public decrementUnreadCount(count: number = 1): void {
        const newCount = Math.max(0, this.state.unreadCount - count);
        Logger.debug(this.module, 'Decrementing unread count', { newCount });
        this.setState({ unreadCount: newCount });
    }

    /**
     * Clear all state
     */
    public clearState(): void {
        Logger.info(this.module, 'Clearing all state');
        this.state = {
            userId: null,
            username: null,
            serverAddress: null,
            currentChatUserId: null,
            onlineUsers: new Map(),
            conversations: {},
            unreadCount: 0,
            isConnected: false,
            isLoading: false
        };

        this.notifyStateChanged();
    }

    /**
     * Set UI screen
     */
    public setUIScreen(screen: ScreenType): void {
        Logger.debug(this.module, 'Setting UI screen', { screen });
        this.updateUIState({ currentScreen: screen });
    }

    /**
     * Set selected conversation
     */
    public setSelectedConversation(conversationId: number | null): void {
        Logger.debug(this.module, 'Setting selected conversation', { conversationId });
        this.updateUIState({ selectedConversationId: conversationId });
    }

    /**
     * Open modal
     */
    public openModal(modalType: 'SETTINGS' | 'CONFIRM_DELETE'): void {
        Logger.debug(this.module, 'Opening modal', { modalType });
        this.updateUIState({ isModalOpen: true, modalType });
    }

    /**
     * Close modal
     */
    public closeModal(): void {
        Logger.debug(this.module, 'Closing modal');
        this.updateUIState({ isModalOpen: false, modalType: undefined });
    }

    /**
     * Set error message
     */
    public setErrorMessage(message: string): void {
        Logger.warn(this.module, 'Setting error message', { message });
        this.updateUIState({ errorMessage: message });
    }

    /**
     * Clear error message
     */
    public clearErrorMessage(): void {
        Logger.debug(this.module, 'Clearing error message');
        this.updateUIState({ errorMessage: undefined });
    }

    /**
     * Set success message
     */
    public setSuccessMessage(message: string): void {
        Logger.info(this.module, 'Setting success message', { message });
        this.updateUIState({ successMessage: message });
    }

    /**
     * Clear success message
     */
    public clearSuccessMessage(): void {
        Logger.debug(this.module, 'Clearing success message');
        this.updateUIState({ successMessage: undefined });
    }

    /**
     * Subscribe to state changes
     */
    public subscribe(listener: StateListener): () => void {
        Logger.debug(this.module, 'New state listener subscribed');
        this.stateListeners.add(listener);

        // Return unsubscribe function
        return () => {
            this.stateListeners.delete(listener);
            Logger.debug(this.module, 'State listener unsubscribed');
        };
    }

    /**
     * Subscribe to UI state changes
     */
    public subscribeUIState(listener: UIStateListener): () => void {
        Logger.debug(this.module, 'New UI state listener subscribed');
        this.uiStateListeners.add(listener);

        // Return unsubscribe function
        return () => {
            this.uiStateListeners.delete(listener);
            Logger.debug(this.module, 'UI state listener unsubscribed');
        };
    }

    /**
     * Internal: Update state
     */
    private setState(partial: Partial<ApplicationState>): void {
        this.state = { ...this.state, ...partial };
        this.notifyStateChanged();
    }

    /**
     * Internal: Update UI state
     */
    private updateUIState(partial: Partial<UIState>): void {
        this.uiState = { ...this.uiState, ...partial };
        this.notifyUIStateChanged();
    }

    /**
     * Internal: Notify all listeners
     */
    private notifyStateChanged(): void {
        this.stateListeners.forEach((listener) => {
            try {
                listener(this.getState());
            } catch (error) {
                Logger.error(this.module, 'Error in state listener', error);
            }
        });
    }

    /**
     * Internal: Notify UI state listeners
     */
    private notifyUIStateChanged(): void {
        this.uiStateListeners.forEach((listener) => {
            try {
                listener(this.getUIState());
            } catch (error) {
                Logger.error(this.module, 'Error in UI state listener', error);
            }
        });
    }

    /**
     * Debug: Get state summary
     */
    public getStateSummary(): object {
        return {
            userId: this.state.userId,
            username: this.state.username,
            isConnected: this.state.isConnected,
            isLoading: this.state.isLoading,
            onlineUsersCount: this.state.onlineUsers.size,
            conversationsCount: Object.keys(this.state.conversations).length,
            unreadCount: this.state.unreadCount,
            currentChatUserId: this.state.currentChatUserId
        };
    }
}

export default StateManager.getInstance();