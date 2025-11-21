/**
 * ChatWindow Component
 * Displays messages and message input area
 */

import React, { useEffect, useState, useCallback, useRef } from 'react';
import Logger from '../../utils/Logger';
import { Message, AppSettings } from '../../types';
import '../styles/chat-window.css';

interface Props {
    messages: Message[];
    currentUserId: number;
    otherUserId: number;
    otherUsername: string;
    onSendMessage: (content: string) => Promise<void>;
    onDeleteConversation: (userId: number) => Promise<void>;
    isLoading: boolean;
    settings: AppSettings;
}

interface LocalState {
    messageInput: string;
    isSending: boolean;
}

const ChatWindow: React.FC<Props> = ({
                                         messages,
                                         currentUserId,
                                         otherUserId,
                                         otherUsername,
                                         onSendMessage,
                                         onDeleteConversation,
                                         isLoading,
                                         settings
                                     }) => {
    const logger = Logger;
    const module = 'ChatWindow';

    const [localState, setLocalState] = useState<LocalState>({
        messageInput: '',
        isSending: false
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messageInputRef = useRef<HTMLInputElement>(null);

    /**
     * Auto-scroll to bottom when messages change
     */
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    /**
     * Focus message input on mount
     */
    useEffect(() => {
        messageInputRef.current?.focus();
    }, []);

    /**
     * Scroll to bottom of messages
     */
    const scrollToBottom = (): void => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    /**
     * Handle message submit
     */
    const handleMessageSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const content = localState.messageInput.trim();

            if (!content) {
                logger.debug(module, 'Attempt to send empty message');
                return;
            }

            logger.info(module, 'Submitting message', {
                length: content.length,
                to: otherUserId
            });

            try {
                setLocalState((prev) => ({ ...prev, isSending: true }));
                await onSendMessage(content);
                setLocalState((prev) => ({
                    ...prev,
                    messageInput: '',
                    isSending: false
                }));
                messageInputRef.current?.focus();
            } catch (error) {
                logger.error(module, 'Failed to send message', error);
                setLocalState((prev) => ({ ...prev, isSending: false }));
            }
        },
        [localState.messageInput, onSendMessage, otherUserId]
    );

    /**
     * Handle input change with character count
     */
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        logger.debug(module, 'Message input changed', { length: value.length });
        setLocalState((prev) => ({ ...prev, messageInput: value }));
    }, []);

    /**
     * Format timestamp
     */
    const formatTime = (dateString: string): string => {
        try {
            const date = new Date(dateString);
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } catch {
            return '';
        }
    };

    /**
     * Render message with read receipt
     */
    const renderMessage = (msg: Message): JSX.Element => {
        const isOwn = msg.senderId === currentUserId;
        const showReadReceipt = settings.readReceipts && msg.isRead && isOwn;

        return (
            <div
                key={msg.id}
                className={`message-bubble ${isOwn ? 'own' : 'other'}`}
                data-message-id={msg.id}
            >
                <div className="message-content">
                    <p className="message-text">{msg.content}</p>
                    <span className="message-time">{formatTime(msg.createdAt)}</span>
                    {showReadReceipt && (
                        <span className="read-receipt" title={msg.readAt || 'Read'}>
              ✓✓
            </span>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="chat-window">
            {/* Header */}
            <div className="chat-header">
                <div className="chat-header-left">
                    <div className="chat-user-avatar">
                        {otherUsername[0].toUpperCase()}
                    </div>
                    <div className="chat-user-info">
                        <h3 className="chat-username">{otherUsername}</h3>
                        <small className="chat-status">Online</small>
                    </div>
                </div>
                <div className="chat-header-right">
                    <button
                        className="btn-icon delete-btn"
                        onClick={() => onDeleteConversation(otherUserId)}
                        title="Delete conversation"
                        aria-label="Delete conversation"
                    >
                        🗑️
                    </button>
                </div>
            </div>

            {/* Messages Container */}
            <div className="messages-container">
                {isLoading ? (
                    <div className="loading-indicator">
                        <div className="spinner"></div>
                        <p>Loading messages...</p>
                    </div>
                ) : messages.length === 0 ? (
                    <div className="empty-chat">
                        <div className="empty-icon">💬</div>
                        <p>Start a conversation!</p>
                        <small>Your first message will appear here</small>
                    </div>
                ) : (
                    <>
                        {messages.map((msg) => renderMessage(msg))}
                        <div ref={messagesEndRef} />
                    </>
                )}
            </div>

            {/* Message Input */}
            <div className="message-input-area">
                <form onSubmit={handleMessageSubmit} className="message-form">
                    <div className="input-wrapper">
                        <input
                            ref={messageInputRef}
                            type="text"
                            className="message-input"
                            placeholder="Type a message..."
                            value={localState.messageInput}
                            onChange={handleInputChange}
                            disabled={localState.isSending}
                            maxLength={5000}
                            autoFocus
                        />
                        <button
                            type="submit"
                            className="btn-send"
                            disabled={localState.isSending || !localState.messageInput.trim()}
                            title="Send message (Enter)"
                        >
                            {localState.isSending ? '...' : '📤'}
                        </button>
                    </div>
                    <div className="char-counter">
                        <span>{localState.messageInput.length}</span>/5000
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatWindow;