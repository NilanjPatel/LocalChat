/**
 * SettingsModal Component
 * Settings dialog for user preferences
 */

import React, { useState, useEffect, useCallback } from 'react';
import Logger from '../../services/Logger';
import { AppSettings } from '../../types';
import '../styles/settings-modal.css';

interface Props {
    isOpen: boolean;
    settings: AppSettings;
    onClose: () => void;
    onSave: (settings: AppSettings) => Promise<void>;
}

interface LocalState {
    localSettings: AppSettings;
    isSaving: boolean;
}

const SettingsModal: React.FC<Props> = ({ isOpen, settings, onClose, onSave }) => {
    const logger = Logger;
    const module = 'SettingsModal';

    const [localState, setLocalState] = useState<LocalState>({
        localSettings: settings,
        isSaving: false
    });

    /**
     * Update local settings when props change
     */
    useEffect(() => {
        setLocalState((prev) => ({
            ...prev,
            localSettings: settings
        }));
    }, [settings, isOpen]);

    /**
     * Handle setting toggle
     */
    const handleToggleSetting = useCallback(
        (key: keyof AppSettings) => {
            logger.debug(module, 'Setting toggled', { key });

            setLocalState((prev) => ({
                ...prev,
                localSettings: {
                    ...prev.localSettings,
                    [key]: !prev.localSettings[key]
                }
            }));
        },
        []
    );

    /**
     * Handle save
     */
    const handleSave = useCallback(async () => {
        try {
            logger.info(module, 'Saving settings', localState.localSettings);
            setLocalState((prev) => ({ ...prev, isSaving: true }));

            await onSave(localState.localSettings);

            logger.info(module, 'Settings saved successfully');
            onClose();
        } catch (error) {
            logger.error(module, 'Failed to save settings', error);
        } finally {
            setLocalState((prev) => ({ ...prev, isSaving: false }));
        }
    }, [localState.localSettings, onSave, onClose]);

    if (!isOpen) return null;

    return (
        <div className="settings-modal-overlay" onClick={onClose}>
            <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="modal-header">
                    <h2>Settings</h2>
                    <button
                        className="btn-close"
                        onClick={onClose}
                        aria-label="Close settings"
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="modal-content">
                    <div className="settings-group">
                        <label className="setting-item">
                            <input
                                type="checkbox"
                                checked={localState.localSettings.notificationSound}
                                onChange={() => handleToggleSetting('notificationSound')}
                            />
                            <span className="setting-label">
                <strong>🔔 Notification Sounds</strong>
                <small>Play sound when receiving messages</small>
              </span>
                        </label>
                    </div>

                    <div className="settings-group">
                        <label className="setting-item">
                            <input
                                type="checkbox"
                                checked={localState.localSettings.desktopNotifications}
                                onChange={() => handleToggleSetting('desktopNotifications')}
                            />
                            <span className="setting-label">
                <strong>💬 Desktop Notifications</strong>
                <small>Show browser notifications for new messages</small>
              </span>
                        </label>
                    </div>

                    <div className="settings-group">
                        <label className="setting-item">
                            <input
                                type="checkbox"
                                checked={localState.localSettings.readReceipts}
                                onChange={() => handleToggleSetting('readReceipts')}
                            />
                            <span className="setting-label">
                <strong>✓✓ Read Receipts</strong>
                <small>Show when recipient has read your message</small>
              </span>
                        </label>
                    </div>

                    <div className="settings-info">
                        <p>
                            <strong>About Local Chat</strong>
                        </p>
                        <ul>
                            <li>Version 1.0.0</li>
                            <li>Max 1000 messages per conversation</li>
                            <li>Messages stored locally on server</li>
                        </ul>
                    </div>

                    {process.env.NODE_ENV === 'development' && (
                        <div className="debug-section">
                            <button
                                className="btn-secondary"
                                onClick={() => Logger.downloadLogs()}
                            >
                                📥 Download Debug Logs
                            </button>
                            <small>Available in development mode</small>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="modal-footer">
                    <button
                        className="btn btn-secondary"
                        onClick={onClose}
                        disabled={localState.isSaving}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={handleSave}
                        disabled={localState.isSaving}
                    >
                        {localState.isSaving ? 'Saving...' : 'Save Settings'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SettingsModal;