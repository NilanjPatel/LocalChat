/**
 * API Service
 * Handles HTTP REST API calls to the server
 */

import Logger from './Logger';
import { Conversation, Message } from '../types';

interface HealthResponse {
    status: string;
    timestamp: string;
}

interface UsersResponse {
    users: Array<{
        userId: number;
        username: string;
        isOnline: number;
        lastSeen: string;
    }>;
}

interface ConversationsResponse {
    conversations: Conversation[];
}

interface MessagesResponse {
    messages: Message[];
}

class APIService {
    private static instance: APIService;
    private readonly module = 'APIService';
    private serverAddress: string | null = null;

    private constructor() {
        Logger.info(this.module, 'APIService initialized');
    }

    public static getInstance(): APIService {
        if (!APIService.instance) {
            APIService.instance = new APIService();
        }
        return APIService.instance;
    }

    /**
     * Set server address
     */
    public setServerAddress(address: string): void {
        // Ensure the address has http:// prefix
        if (!address.startsWith('http://') && !address.startsWith('https://')) {
            address = `http://${address}`;
        }

        // Remove trailing slash
        address = address.replace(/\/$/, '');

        this.serverAddress = address;
        Logger.info(this.module, 'Server address set', { address: this.serverAddress });
    }

    /**
     * Get base URL for API calls
     */
    private getBaseURL(): string {
        if (!this.serverAddress) {
            throw new Error('Server address not set. Call setServerAddress() first.');
        }
        return this.serverAddress;
    }

    /**
     * Generic fetch wrapper with error handling
     */
    private async fetch<T>(
        endpoint: string,
        options: RequestInit = {}
    ): Promise<T> {
        const url = `${this.getBaseURL()}${endpoint}`;
        Logger.debug(this.module, 'Making API request', { url, method: options.method || 'GET' });

        try {
            const response = await fetch(url, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            Logger.debug(this.module, 'API request successful', { url });
            return data as T;
        } catch (error) {
            Logger.error(this.module, 'API request failed', { url, error });
            throw error;
        }
    }

    /**
     * Check server health
     */
    public async checkHealth(): Promise<HealthResponse> {
        Logger.debug(this.module, 'Checking server health');
        return this.fetch<HealthResponse>('/api/health');
    }

    /**
     * Get all users
     */
    public async getUsers(): Promise<UsersResponse> {
        Logger.debug(this.module, 'Fetching all users');
        return this.fetch<UsersResponse>('/api/users');
    }

    /**
     * Get conversations for a user
     */
    public async getConversations(userId: number): Promise<ConversationsResponse> {
        Logger.debug(this.module, 'Fetching conversations', { userId });
        return this.fetch<ConversationsResponse>(`/api/conversations/${userId}`);
    }

    /**
     * Get messages between two users
     */
    public async getMessages(
        userId: number,
        otherUserId: number
    ): Promise<MessagesResponse> {
        Logger.debug(this.module, 'Fetching messages', { userId, otherUserId });
        return this.fetch<MessagesResponse>(
            `/api/messages?user_id=${userId}&other_user_id=${otherUserId}`
        );
    }

    /**
     * Test connection to server
     */
    public async testConnection(serverAddress: string): Promise<boolean> {
        try {
            const originalAddress = this.serverAddress;
            this.setServerAddress(serverAddress);

            const response = await this.checkHealth();
            const isHealthy = response.status === 'ok';

            Logger.info(this.module, 'Connection test', {
                serverAddress,
                success: isHealthy
            });

            // Restore original address if test failed
            if (!isHealthy && originalAddress) {
                this.serverAddress = originalAddress;
            }

            return isHealthy;
        } catch (error) {
            Logger.error(this.module, 'Connection test failed', {
                serverAddress,
                error
            });
            return false;
        }
    }

    /**
     * Validate server address format
     */
    public validateServerAddress(address: string): boolean {
        try {
            // Add http:// if not present
            if (!address.startsWith('http://') && !address.startsWith('https://')) {
                address = `http://${address}`;
            }

            const url = new URL(address);
            return !!(url.protocol && url.hostname);
        } catch (error) {
            Logger.warn(this.module, 'Invalid server address', { address });
            return false;
        }
    }

    /**
     * Get current server address
     */
    public getServerAddress(): string | null {
        return this.serverAddress;
    }

    /**
     * Clear server address
     */
    public clearServerAddress(): void {
        Logger.info(this.module, 'Clearing server address');
        this.serverAddress = null;
    }
}

export default APIService.getInstance();
