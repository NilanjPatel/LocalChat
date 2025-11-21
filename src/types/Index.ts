/**
 * Type Definitions and Interfaces
 * Central location for all TypeScript types used in the extension
 */

// ============== USER TYPES ==============
export interface User {
    id: number;
    username: string;
    createdAt: string;
}

export interface OnlineUser extends User {
    online: boolean;
    socketId: string;
}

// ============== MESSAGE TYPES ==============
export interface Message {
    id: number;
    senderId: number;
    recipientId: number;
    content: string;
    isRead: 0 | 1;
    readAt: string | null;
    createdAt: string;
}

export interface MessagePayload {
    senderId: number;
    recipientId: number;
    content: string;
}

// ============== CONVERSATION TYPES ==============
export interface Conversation {
    otherUserId: number;
    otherUsername: string;
    lastMessageAt: string;
    messageCount: number;
    unreadCount: number;
    conversationId: string;
}

export interface ConversationState {
    [userId: number]: {
        messages: Message[];
        metadata: Conversation;
    };
}

// ============== APPLICATION STATE ==============
export interface ApplicationState {
    userId: number | null;
    username: string | null;
    serverAddress: string | null;
    currentChatUserId: number | null;
    onlineUsers: Map<number, OnlineUser>;
    conversations: ConversationState;
    unreadCount: number;
    isConnected: boolean;
    isLoading: boolean;
}

// ============== AUTHENTICATION ==============
export interface LoginCredentials {
    username: string;
    serverAddress: string;
}

export interface LoginResponse {
    userId: number;
    username: string;
    unreadCount: number;
}

// ============== SOCKET.IO EVENTS ==============
export interface SocketEvents {
    // Incoming events
    'new_message': (data: Message) => void;
    'message_sent': (data: { messageId: number; createdAt: string }) => void;
    'messages_read': (data: {
        senderId: number;
        recipientId: number;
        conversationId: string;
        readAt: string;
    }) => void;
    'user_online': (data: { userId: number; username: string }) => void;
    'user_offline': (data: { userId: number }) => void;
    'conversation_deleted': (data: { conversationId: string }) => void;
    'error': (data: { message: string }) => void;
    'login_success': (data: LoginResponse) => void;
}

// ============== SETTINGS ==============
export interface AppSettings {
    notificationSound: boolean;
    desktopNotifications: boolean;
    readReceipts: boolean;
    doNotDisturb: boolean;
    doNotDisturbStart?: string;
    doNotDisturbEnd?: string;
}

export const DEFAULT_SETTINGS: AppSettings = {
    notificationSound: true,
    desktopNotifications: true,
    readReceipts: true,
    doNotDisturb: false
};

// ============== NOTIFICATION ==============
export interface NotificationData {
    userId: number;
    username: string;
    message?: string;
}

// ============== API RESPONSES ==============
export interface ApiResponse<T> {
    data?: T;
    error?: string;
    status: number;
}

export interface PaginationParams {
    limit?: number;
    offset?: number;
}

// ============== UI STATE ==============
export enum ScreenType {
    LOGIN = 'LOGIN',
    CHAT = 'CHAT',
    LOADING = 'LOADING'
}

export interface UIState {
    currentScreen: ScreenType;
    selectedConversationId: number | null;
    isModalOpen: boolean;
    modalType?: 'SETTINGS' | 'CONFIRM_DELETE';
    errorMessage?: string;
    successMessage?: string;
}

// ============== EVENT EMITTER ==============
export interface EventEmitterMap {
    'state-changed': (state: ApplicationState) => void;
    'message-received': (message: Message) => void;
    'conversation-updated': (conversation: Conversation) => void;
    'connection-changed': (isConnected: boolean) => void;
    'unread-count-changed': (count: number) => void;
    'ui-state-changed': (state: UIState) => void;
}