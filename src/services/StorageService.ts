/**
 * Storage Service
 * Handles Chrome storage API for persisting user data and settings
 */

import Logger from './Logger';
import { AppSettings, DEFAULT_SETTINGS } from '../types';

interface StorageData {
    userId?: number;
    username?: string;
    serverAddress?: string;
    settings?: AppSettings;
    lastLoginTimestamp?: number;
}

class StorageService {
    private static instance: StorageService;
    private readonly module = 'StorageService';

    // Storage keys
    private readonly KEYS = {
        USER_ID: 'userId',
        USERNAME: 'username',
        SERVER_ADDRESS: 'serverAddress',
        SETTINGS: 'settings',
        LAST_LOGIN: 'lastLoginTimestamp'
    };

    private constructor() {
        Logger.info(this.module, 'StorageService initialized');
    }

    public static getInstance(): StorageService {
        if (!StorageService.instance) {
            StorageService.instance = new StorageService();
        }
        return StorageService.instance;
    }

    /**
     * Save user credentials
     */
    public async saveCredentials(
        userId: number,
        username: string,
        serverAddress: string
    ): Promise<void> {
        try {
            Logger.debug(this.module, 'Saving credentials', { userId, username, serverAddress });

            const data: StorageData = {
                userId,
                username,
                serverAddress,
                lastLoginTimestamp: Date.now()
            };

            await chrome.storage.local.set(data);
            Logger.info(this.module, 'Credentials saved successfully');
        } catch (error) {
            Logger.error(this.module, 'Failed to save credentials', error);
            throw error;
        }
    }

    /**
     * Get saved credentials
     */
    public async getCredentials(): Promise<{
        userId: number | null;
        username: string | null;
        serverAddress: string | null;
    }> {
        try {
            Logger.debug(this.module, 'Getting saved credentials');

            const result = await chrome.storage.local.get([
                this.KEYS.USER_ID,
                this.KEYS.USERNAME,
                this.KEYS.SERVER_ADDRESS
            ]);

            const credentials = {
                userId: result[this.KEYS.USER_ID] || null,
                username: result[this.KEYS.USERNAME] || null,
                serverAddress: result[this.KEYS.SERVER_ADDRESS] || null
            };

            Logger.debug(this.module, 'Retrieved credentials', {
                hasUserId: !!credentials.userId,
                hasUsername: !!credentials.username,
                hasServerAddress: !!credentials.serverAddress
            });

            return credentials;
        } catch (error) {
            Logger.error(this.module, 'Failed to get credentials', error);
            return { userId: null, username: null, serverAddress: null };
        }
    }

    /**
     * Clear saved credentials
     */
    public async clearCredentials(): Promise<void> {
        try {
            Logger.info(this.module, 'Clearing credentials');

            await chrome.storage.local.remove([
                this.KEYS.USER_ID,
                this.KEYS.USERNAME,
                this.KEYS.SERVER_ADDRESS,
                this.KEYS.LAST_LOGIN
            ]);

            Logger.info(this.module, 'Credentials cleared');
        } catch (error) {
            Logger.error(this.module, 'Failed to clear credentials', error);
            throw error;
        }
    }

    /**
     * Save user settings
     */
    public async saveSettings(settings: AppSettings): Promise<void> {
        try {
            Logger.debug(this.module, 'Saving settings', settings);

            await chrome.storage.local.set({
                [this.KEYS.SETTINGS]: settings
            });

            Logger.info(this.module, 'Settings saved successfully');
        } catch (error) {
            Logger.error(this.module, 'Failed to save settings', error);
            throw error;
        }
    }

    /**
     * Get saved settings
     */
    public async getSettings(): Promise<AppSettings> {
        try {
            Logger.debug(this.module, 'Getting settings');

            const result = await chrome.storage.local.get(this.KEYS.SETTINGS);
            const settings = result[this.KEYS.SETTINGS] || DEFAULT_SETTINGS;

            Logger.debug(this.module, 'Retrieved settings', settings);
            return settings;
        } catch (error) {
            Logger.error(this.module, 'Failed to get settings', error);
            return DEFAULT_SETTINGS;
        }
    }

    /**
     * Update specific setting
     */
    public async updateSetting<K extends keyof AppSettings>(
        key: K,
        value: AppSettings[K]
    ): Promise<void> {
        try {
            Logger.debug(this.module, 'Updating setting', { key, value });

            const settings = await this.getSettings();
            settings[key] = value;
            await this.saveSettings(settings);

            Logger.info(this.module, 'Setting updated successfully', { key });
        } catch (error) {
            Logger.error(this.module, 'Failed to update setting', error);
            throw error;
        }
    }

    /**
     * Clear all storage
     */
    public async clearAll(): Promise<void> {
        try {
            Logger.info(this.module, 'Clearing all storage');
            await chrome.storage.local.clear();
            Logger.info(this.module, 'All storage cleared');
        } catch (error) {
            Logger.error(this.module, 'Failed to clear storage', error);
            throw error;
        }
    }

    /**
     * Get last login timestamp
     */
    public async getLastLoginTimestamp(): Promise<number | null> {
        try {
            const result = await chrome.storage.local.get(this.KEYS.LAST_LOGIN);
            return result[this.KEYS.LAST_LOGIN] || null;
        } catch (error) {
            Logger.error(this.module, 'Failed to get last login timestamp', error);
            return null;
        }
    }

    /**
     * Check if user has saved credentials
     */
    public async hasSavedCredentials(): Promise<boolean> {
        const credentials = await this.getCredentials();
        return !!(credentials.userId && credentials.username && credentials.serverAddress);
    }

    /**
     * Export all storage data (for debugging)
     */
    public async exportAllData(): Promise<StorageData> {
        try {
            Logger.debug(this.module, 'Exporting all storage data');
            const data = await chrome.storage.local.get(null);
            return data as StorageData;
        } catch (error) {
            Logger.error(this.module, 'Failed to export data', error);
            return {};
        }
    }
}

export default StorageService.getInstance();
