/**
 * Notification Service
 * Handles desktop notifications, notification sounds, and badge updates
 */

import Logger from './Logger';
import { NotificationData, AppSettings } from '../types';

class NotificationService {
    private static instance: NotificationService;
    private readonly module = 'NotificationService';
    private audioElement: HTMLAudioElement | null = null;
    private notificationAudio: string = chrome.runtime.getURL('assets/notification.mp3');

    private constructor() {
        Logger.info(this.module, 'NotificationService initialized');
        this.initializeAudio();
        this.requestNotificationPermission();
    }

    public static getInstance(): NotificationService {
        if (!NotificationService.instance) {
            NotificationService.instance = new NotificationService();
        }
        return NotificationService.instance;
    }

    /**
     * Initialize audio element for notification sound
     */
    private initializeAudio(): void {
        try {
            this.audioElement = new Audio(this.notificationAudio);
            this.audioElement.preload = 'auto';
            Logger.debug(this.module, 'Audio element initialized');
        } catch (error) {
            Logger.warn(this.module, 'Failed to initialize audio element', error);
        }
    }

    /**
     * Request permission for desktop notifications
     */
    private requestNotificationPermission(): void {
        if ('Notification' in window) {
            if (Notification.permission === 'default') {
                Notification.requestPermission()
                    .then((permission) => {
                        Logger.info(this.module, 'Notification permission requested', { permission });
                    })
                    .catch((error) => {
                        Logger.warn(this.module, 'Failed to request notification permission', error);
                    });
            }
        }
    }

    /**
     * Play notification sound
     */
    public async playNotificationSound(): Promise<void> {
        try {
            if (!this.audioElement) {
                Logger.warn(this.module, 'Audio element not initialized');
                return;
            }

            this.audioElement.currentTime = 0;
            await this.audioElement.play();
            Logger.debug(this.module, 'Notification sound played');
        } catch (error) {
            Logger.warn(this.module, 'Failed to play notification sound', error);
        }
    }

    /**
     * Show desktop notification
     */
    public showDesktopNotification(
        data: NotificationData,
        settings: AppSettings
    ): void {
        if (!settings.desktopNotifications) {
            Logger.debug(this.module, 'Desktop notifications disabled');
            return;
        }

        if (!('Notification' in window)) {
            Logger.warn(this.module, 'Notifications not supported in this browser');
            return;
        }

        if (Notification.permission !== 'granted') {
            Logger.warn(this.module, 'Notification permission not granted');
            return;
        }

        try {
            const title = `Message from ${data.senderUsername}`;
            const options: NotificationOptions = {
                icon: chrome.runtime.getURL('images/icon128.png'),
                badge: chrome.runtime.getURL('images/icon48.png'),
                tag: `message-${data.senderId}`,
                requireInteraction: false
            };

            if (data.messageContent) {
                options.body = data.messageContent;
            }

            const notification = new Notification(title, options);

            // Click handler to focus extension
            notification.addEventListener('click', () => {
                Logger.debug(this.module, 'Notification clicked');
                chrome.action.openPopup();
            });

            Logger.info(this.module, 'Desktop notification shown', { senderId: data.senderId });
        } catch (error) {
            Logger.error(this.module, 'Failed to show desktop notification', error);
        }
    }

    /**
     * Show all notifications (sound + desktop)
     */
    public async notifyMessageReceived(
        data: NotificationData,
        settings: AppSettings
    ): Promise<void> {
        Logger.info(this.module, 'Notifying message received', {
            senderId: data.senderId,
            username: data.senderUsername
        });

        // Play sound
        if (settings.notificationSound) {
            await this.playNotificationSound();
        }

        // Show desktop notification
        this.showDesktopNotification(data, settings);

        // Update badge
        this.updateBadge();
    }

    /**
     * Update extension badge with unread count
     */
    public updateBadge(count?: number): void {
        try {
            if (count !== undefined && count > 0) {
                chrome.action.setBadgeText({ text: count.toString() });
                chrome.action.setBadgeBackgroundColor({ color: '#FF6B6B' });
                Logger.debug(this.module, 'Badge updated', { count });
            } else {
                chrome.action.setBadgeText({ text: '' });
                Logger.debug(this.module, 'Badge cleared');
            }
        } catch (error) {
            Logger.warn(this.module, 'Failed to update badge', error);
        }
    }

    /**
     * Clear all notifications
     */
    public clearNotifications(): void {
        try {
            chrome.notifications.getAll((notifications) => {
                Object.keys(notifications).forEach((notificationId) => {
                    chrome.notifications.clear(notificationId);
                });
            });
            Logger.debug(this.module, 'All notifications cleared');
        } catch (error) {
            Logger.warn(this.module, 'Failed to clear notifications', error);
        }
    }

    /**
     * Play success sound (message sent)
     */
    public async playSuccessSound(): Promise<void> {
        // Use same notification sound for now
        await this.playNotificationSound();
    }

    /**
     * Play error sound
     */
    public async playErrorSound(): Promise<void> {
        // Could use a different sound in future
        try {
            if (!this.audioElement) return;
            this.audioElement.currentTime = 0;
            await this.audioElement.play();
            Logger.debug(this.module, 'Error sound played');
        } catch (error) {
            Logger.warn(this.module, 'Failed to play error sound', error);
        }
    }

    /**
     * Show toast-like notification in extension
     */
    public showToast(message: string, type: 'info' | 'success' | 'error' = 'info'): void {
        Logger.debug(this.module, 'Toast shown', { message, type });
        // This will be handled by the UI component
        // Dispatch event or update state for UI to show toast
        const event = new CustomEvent('toast', {
            detail: { message, type }
        });
        window.dispatchEvent(event);
    }

    /**
     * Mute notifications for a period
     */
    public muteNotifications(durationMs: number): void {
        Logger.info(this.module, 'Notifications muted for', { durationMs });
        // Set a flag or store in storage to mute notifications
        const event = new CustomEvent('mute-notifications', {
            detail: { durationMs }
        });
        window.dispatchEvent(event);
    }
}

export default NotificationService.getInstance();