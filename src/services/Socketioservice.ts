/**
 * Socket.IO Service
 * Handles real-time communication with the server
 */

import { createLogger } from './Logger';
import {
    Message,
    LoginResponse,
    SocketEvents,
    LoginCredentials
} from '../types';

const logger = createLogger('SocketIOService');

type EventCallback<K extends keyof SocketEvents> = SocketEvents[K];

interface SocketIOEvent {
    event: string;
    handler: (...args: any[]) => void;
}

class SocketIOService {
    private socket: any = null;
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
        logger.info('Initializing Socket.IO connection', { serverAddress });

        // Load Socket.IO library
        if (typeof (window as any).io === 'undefined') {
            logger.debug('Loading Socket.IO library');
            await this.loadSocketIOLibrary();
        }

        this.serverAddress = serverAddress;
        this.createConnection();
    }

    /**
     * Load Socket.IO library dynamically
     */
    private loadSocketIOLibrary(): Promise<void> {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.socket.io/4.5.4/socket.io.min.js';

            script.onload = () => {
                logger.debug('Socket.IO library loaded successfully');
                resolve();
            };

            script.onerror = () => {
                logger.error('Failed to load Socket.IO library');
                reject(new Error('Failed to load Socket.IO library'));
            };

            document.head.appendChild(script);
        });
    }

    /**
     * Create Socket.IO connection
     */
    private createConnection(): void {
        if (!this.serverAddress) {
            logger.error('Server address not set');
            return;
        }

        try {
            const io = (window as any).io;

            this.socket = io(this.serverAddress, {
                reconnection: true,
                reconnectionDelay: this.reconnectDelay,
                reconnectionDelayMax: 5000,
                reconnectionAttempts: this.maxReconnectAttempts,
                path: '/socket.io/'
            });

            this.setupEventHandlers();
            logger.info('Socket.IO connection created');
        } catch (error) {
            logger.error('Failed to create Socket.IO connection', { error });
            throw error;
        }
    }

    /**
     * Setup core Socket.IO event handlers
     */
    private setupEventHandlers(): void {
        if (!this.socket) return;

        this.socket.on('connect', () => {
            logger.info('Socket.IO connected to server');
            this.isConnected = true;
            this.reconnectAttempts = 0;
            this.emit('connection-changed', true);
        });

        this.socket.on('disconnect', () => {
            logger.warn('Socket.IO disconnected from server');
            this.isConnected = false;
            this.emit('connection-changed', false);
        });

        this.socket.on('connect_error', (error: any) => {
            logger.error('Socket.IO connection error', {
                message: error.message,
                type: error.type
            });
            this.reconnectAttempts++;
        });

        this.socket.on('error', (error: any) => {
            logger.error('Socket.IO error', { error });
            this.emit('error', { message: error?.message || 'Unknown error' });
        });
    }

    /**
     * Login with username
     */
    async login(username: string): Promise<LoginResponse> {
        return new Promise((resolve, reject) => {
            if (!this.socket) {
                logger.error('Socket not initialized');
                reject(new Error('Socket not initialized'));
                return;
            }

            logger.debug('Emitting login event', { username });

            this.socket.emit('login', { username }, (response: LoginResponse) => {
                logger.info('Login successful', { userId: response.userId });
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
                logger.error('Socket not initialized');
                reject(new Error('Socket not initialized'));
                return;
            }

            logger.debug('Sending message', {
                senderId,
                recipientId,
                contentLength: content.length
            });

            this.socket.emit(
                'send_message',
                { sender_id: senderId, recipient_id: recipientId, content },
                (response: any) => {
                    if (response?.error) {
                        logger.error('Message send error', { error: response.error });
                        reject(new Error(response.error));
                    } else {
                        logger.debug('Message sent successfully', { messageId: response?.message_id });
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
            logger.error('Socket not initialized');
            return;
        }

        logger.debug('Marking messages as read', { recipientId, senderId });

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
            logger.error('Socket not initialized');
            return;
        }

        logger.info('Deleting conversation', { user1Id, user2Id });

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
        logger.debug('Registering event listener', { event });

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
                                logger.error('Event callback error', { event, error });
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
        logger.debug('Unregistering event listener', { event });

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
                logger.error('Event callback error', { event, error });
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
        logger.info('Disconnecting Socket.IO');

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
        logger.info('Attempting reconnection');

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