/**
 * Socket.IO Service
 * Handles real-time communication with the server
 */

import { io, Socket } from 'socket.io-client';
import Logger from './Logger';
import {
    LoginResponse,
    SocketEvents
} from '../types';

type EventCallback<K extends keyof SocketEvents> = SocketEvents[K];

class SocketIOService {
    private readonly module = 'SocketIOService';
    private socket: Socket | null = null;
    private isConnected = false;
    private eventListeners: Map<string, Set<Function>> = new Map();
    private serverAddress: string | null = null;
    private reconnectAttempts = 0;
    private maxReconnectAttempts = 5;
    private reconnectDelay = 1000;

    /**
     * Initialize Socket.IO connection
     */
    async initialize(serverAddress: string): Promise<void> {
        Logger.info(this.module, 'Initializing Socket.IO connection', { serverAddress });

        this.serverAddress = serverAddress;
        this.createConnection();
    }

    /**
     * Create Socket.IO connection
     */
    private createConnection(): void {
        if (!this.serverAddress) {
            Logger.error(this.module, 'Server address not set');
            return;
        }

        try {
            this.socket = io(this.serverAddress, {
                reconnection: true,
                reconnectionDelay: this.reconnectDelay,
                reconnectionDelayMax: 5000,
                reconnectionAttempts: this.maxReconnectAttempts,
                path: '/socket.io/',
                transports: ['websocket', 'polling']
            });

            this.setupEventHandlers();
            Logger.info(this.module, 'Socket.IO connection created');
        } catch (error) {
            Logger.error(this.module, 'Failed to create Socket.IO connection', { error });
            throw error;
        }
    }

    /**
     * Setup core Socket.IO event handlers
     */
    private setupEventHandlers(): void {
        if (!this.socket) return;

        this.socket.on('connect', () => {
            Logger.info(this.module, 'Socket.IO connected to server');
            this.isConnected = true;
            this.reconnectAttempts = 0;
            this.emit('connection-changed', true);
        });

        this.socket.on('disconnect', () => {
            Logger.warn(this.module, 'Socket.IO disconnected from server');
            this.isConnected = false;
            this.emit('connection-changed', false);
        });

        this.socket.on('connect_error', (error: any) => {
            Logger.error(this.module, 'Socket.IO connection error', {
                message: error.message,
                type: error.type
            });
            this.reconnectAttempts++;
        });

        this.socket.on('error', (error: any) => {
            Logger.error(this.module, 'Socket.IO error', { error });
            this.emit('error', { message: error?.message || 'Unknown error' });
        });
    }

    /**
     * Login with username
     */
    async login(username: string): Promise<LoginResponse> {
        return new Promise((resolve, reject) => {
            if (!this.socket) {
                Logger.error(this.module, 'Socket not initialized');
                reject(new Error('Socket not initialized'));
                return;
            }

            Logger.debug(this.module, 'Emitting login event', { username });

            this.socket.emit('login', { username }, (response: LoginResponse) => {
                Logger.info(this.module, 'Login successful', { userId: response.userId });
                resolve(response);
            });

            // Timeout after 10 seconds
            setTimeout(() => {
                reject(new Error('Login timeout'));
            }, 10000);
        });
    }

    /**
     * Send a message
     */
    sendMessage(
        senderId: number,
        recipientId: number,
        content: string
    ): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this.socket) {
                Logger.error(this.module, 'Socket not initialized');
                reject(new Error('Socket not initialized'));
                return;
            }

            Logger.debug(this.module, 'Sending message', {
                senderId,
                recipientId,
                contentLength: content.length
            });

            this.socket.emit(
                'send_message',
                { sender_id: senderId, recipient_id: recipientId, content },
                (response: any) => {
                    if (response?.error) {
                        Logger.error(this.module, 'Message send error', { error: response.error });
                        reject(new Error(response.error));
                    } else {
                        Logger.debug(this.module, 'Message sent successfully', { messageId: response?.message_id });
                        resolve();
                    }
                }
            );

            // Timeout after 5 seconds
            setTimeout(() => {
                reject(new Error('Message send timeout'));
            }, 5000);
        });
    }

    /**
     * Mark messages as read
     */
    markAsRead(recipientId: number, senderId: number): void {
        if (!this.socket) {
            Logger.error(this.module, 'Socket not initialized');
            return;
        }

        Logger.debug(this.module, 'Marking messages as read', { recipientId, senderId });

        this.socket.emit('mark_as_read', {
            recipient_id: recipientId,
            sender_id: senderId
        });
    }

    /**
     * Delete conversation
     */
    deleteConversation(user1Id: number, user2Id: number): void {
        if (!this.socket) {
            Logger.error(this.module, 'Socket not initialized');
            return;
        }

        Logger.info(this.module, 'Deleting conversation', { user1Id, user2Id });

        this.socket.emit('delete_conversation', {
            user1_id: user1Id,
            user2_id: user2Id
        });
    }

    /**
     * Register event listener
     */
    on<K extends keyof SocketEvents>(
        event: K,
        callback: EventCallback<K>
    ): void {
        Logger.debug(this.module, 'Registering event listener', { event });

        if (!this.eventListeners.has(event)) {
            this.eventListeners.set(event, new Set());

            // Register with Socket.IO if needed
            if (this.socket && event !== 'connection-changed' && event !== 'error') {
                this.socket.on(
                    this.convertEventName(event),
                    (...args: any[]) => {
                        const callbacks = this.eventListeners.get(event as string) || new Set();
                        callbacks.forEach((cb) => {
                            try {
                                cb(...args);
                            } catch (error) {
                                Logger.error(this.module, 'Event callback error', { event, error });
                            }
                        });
                    }
                );
            }
        }

        const callbacks = this.eventListeners.get(event) || new Set();
        callbacks.add(callback as Function);
    }

    /**
     * Unregister event listener
     */
    off<K extends keyof SocketEvents>(
        event: K,
        callback?: EventCallback<K>
    ): void {
        Logger.debug(this.module, 'Unregistering event listener', { event });

        if (!callback) {
            this.eventListeners.delete(event);
        } else {
            const callbacks = this.eventListeners.get(event) || new Set();
            callbacks.delete(callback as Function);
        }
    }

    /**
     * Emit event to listeners
     */
    private emit<K extends keyof SocketEvents>(
        event: K,
        ...args: Parameters<EventCallback<K>>
    ): void {
        const callbacks = this.eventListeners.get(event as string) || new Set();
        callbacks.forEach((callback) => {
            try {
                (callback as Function)(...args);
            } catch (error) {
                Logger.error(this.module, 'Event callback error', { event, error });
            }
        });
    }

    /**
     * Convert event names (camelCase to snake_case for server)
     */
    private convertEventName(event: string): string {
        const conversions: Record<string, string> = {
            'new_message': 'new_message',
            'message_sent': 'message_sent',
            'messages_read': 'messages_read',
            'user_online': 'user_online',
            'user_offline': 'user_offline',
            'conversation_deleted': 'conversation_deleted',
            'login_success': 'login_success',
            'error': 'error'
        };

        return conversions[event] || event;
    }

    /**
     * Check if connected
     */
    getIsConnected(): boolean {
        return this.isConnected && !!this.socket?.connected;
    }

    /**
     * Disconnect from server
     */
    disconnect(): void {
        Logger.info(this.module, 'Disconnecting Socket.IO');

        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }

        this.isConnected = false;
        this.eventListeners.clear();
    }

    /**
     * Reconnect to server
     */
    async reconnect(): Promise<void> {
        Logger.info(this.module, 'Attempting reconnection');

        if (this.socket) {
            this.socket.connect();
        } else if (this.serverAddress) {
            this.createConnection();
        }
    }

    /**
     * Debug: Get connection status
     */
    getStatus(): object {
        return {
            isConnected: this.isConnected,
            serverAddress: this.serverAddress,
            reconnectAttempts: this.reconnectAttempts,
            listenerCount: this.eventListeners.size,
            socketId: this.socket?.id || null
        };
    }
}

// Export singleton instance
export const socketIOService = new SocketIOService();