/**
 * LoginScreen Component
 * Handles user login with username and server address
 */

import React, { useState, useCallback } from 'react';
import Logger from '../../services/Logger';
import '../styles/login-screen.css';

interface Props {
    onLogin: (username: string, serverAddress: string) => Promise<void>;
    isLoading: boolean;
}

interface FormState {
    username: string;
    serverAddress: string;
    error: string | null;
    showAdvanced: boolean;
}

const LoginScreen: React.FC<Props> = ({ onLogin, isLoading }) => {
    const logger = Logger;
    const module = 'LoginScreen';

    const [formState, setFormState] = useState<FormState>({
        username: '',
        serverAddress: 'http://localhost:5000',
        error: null,
        showAdvanced: false
    });

    /**
     * Validate form inputs
     */
    const validateForm = (): boolean => {
        logger.debug(module, 'Validating form');

        const { username, serverAddress } = formState;

        if (!username.trim()) {
            setFormState((prev) => ({
                ...prev,
                error: 'Username is required'
            }));
            logger.warn(module, 'Validation failed: empty username');
            return false;
        }

        if (username.length < 2) {
            setFormState((prev) => ({
                ...prev,
                error: 'Username must be at least 2 characters'
            }));
            logger.warn(module, 'Validation failed: username too short');
            return false;
        }

        if (!serverAddress.trim()) {
            setFormState((prev) => ({
                ...prev,
                error: 'Server address is required'
            }));
            logger.warn(module, 'Validation failed: empty server address');
            return false;
        }

        if (!serverAddress.startsWith('http://') && !serverAddress.startsWith('https://')) {
            setFormState((prev) => ({
                ...prev,
                error: 'Server address must start with http:// or https://'
            }));
            logger.warn(module, 'Validation failed: invalid server address format');
            return false;
        }

        logger.debug(module, 'Form validation passed');
        return true;
    };

    /**
     * Handle form submission
     */
    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            logger.info(module, 'Form submitted', { username: formState.username });

            if (!validateForm()) {
                return;
            }

            try {
                setFormState((prev) => ({ ...prev, error: null }));
                logger.info(module, 'Attempting login', {
                    username: formState.username,
                    serverAddress: formState.serverAddress
                });

                await onLogin(formState.username, formState.serverAddress);
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Login failed';
                logger.error(module, 'Login error', error);
                setFormState((prev) => ({
                    ...prev,
                    error: errorMessage
                }));
            }
        },
        [formState, onLogin]
    );

    /**
     * Handle input changes
     */
    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            logger.debug(module, 'Input changed', { field: name });

            setFormState((prev) => ({
                ...prev,
                [name]: value,
                error: null // Clear error when user starts typing
            }));
        },
        []
    );

    /**
     * Toggle advanced settings
     */
    const toggleAdvanced = useCallback(() => {
        logger.debug(module, 'Toggling advanced settings');
        setFormState((prev) => ({
            ...prev,
            showAdvanced: !prev.showAdvanced
        }));
    }, []);

    return (
        <div className="login-screen">
            <div className="login-container">
                {/* Header */}
                <div className="login-header">
                    <div className="logo">💬</div>
                    <h1>Local Chat</h1>
                    <p className="subtitle">Connect with your team</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="login-form">
                    {/* Username Field */}
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            value={formState.username}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            disabled={isLoading}
                            maxLength={50}
                            autoFocus
                        />
                    </div>

                    {/* Server Address Field */}
                    <div className="form-group">
                        <label htmlFor="serverAddress">Server Address</label>
                        <input
                            id="serverAddress"
                            type="text"
                            name="serverAddress"
                            value={formState.serverAddress}
                            onChange={handleInputChange}
                            placeholder="http://192.168.x.x:5000"
                            disabled={isLoading}
                        />
                        <small className="help-text">
                            Enter the address of the local chat server
                        </small>
                    </div>

                    {/* Error Message */}
                    {formState.error && (
                        <div className="error-message" role="alert">
                            ⚠️ {formState.error}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-primary btn-large"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="spinner"></span>
                                Connecting...
                            </>
                        ) : (
                            'Connect'
                        )}
                    </button>

                    {/* Advanced Toggle */}
                    <button
                        type="button"
                        className="btn-link"
                        onClick={toggleAdvanced}
                    >
                        {formState.showAdvanced ? '▼ Hide' : '▶ Show'} Advanced Options
                    </button>

                    {/* Advanced Options */}
                    {formState.showAdvanced && (
                        <div className="advanced-options">
                            <div className="info-box">
                                <h4>Connection Tips</h4>
                                <ul>
                                    <li>For local machine: <code>http://localhost:5000</code></li>
                                    <li>For network: Find server IP and use <code>http://IP:5000</code></li>
                                    <li>Username must be unique on the network</li>
                                    <li>Server must be running before connecting</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </form>

                {/* Footer */}
                <div className="login-footer">
                    <small>Version 1.0.0</small>
                </div>
            </div>

            {/* Debug Info */}
            {process.env.NODE_ENV === 'development' && (
                <div className="debug-info">
                    <button onClick={() => Logger.downloadLogs()}>
                        Download Logs
                    </button>
                </div>
            )}
        </div>
    );
};

export default LoginScreen;