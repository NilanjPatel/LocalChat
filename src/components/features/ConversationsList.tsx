/**
 * ConversationsList Component
 * Displays list of user conversations
 */

import React, { useCallback } from 'react';
import Logger from '../../services/Logger';
import { Conversation } from '../../types';
import '../styles/conversations-list.css';

interface Props {
    conversations: Conversation[];
    selectedUserId: number | null;
    onSelectConversation: (userId: number) => void;
}

const ConversationsList: React.FC<Props> = ({
                                                conversations,
                                                selectedUserId,
                                                onSelectConversation
                                            }) => {
    const logger = Logger;
    const module = 'ConversationsList';

    const handleConversationClick = useCallback(
        (userId: number) => {
            logger.debug(module, 'Conversation item clicked', { userId });
            onSelectConversation(userId);
        },
        [onSelectConversation]
    );

    /**
     * Format last message time
     */
    const formatTime = (dateString: string): string => {
        try {
            const date = new Date(dateString);
            const now = new Date();
            const diffMs = now.getTime() - date.getTime();
            const diffMins = Math.floor(diffMs / 60000);

            if (diffMins < 1) return 'now';
            if (diffMins < 60) return `${diffMins}m ago`;
            if (diffMins < 1440) return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return date.toLocaleDateString();
        } catch {
            return '';
        }
    };

    if (conversations.length === 0) {
        return (
            <div className="conversations-list empty">
                <div className="empty-state">
                    <p>No conversations yet</p>
                    <small>Start chatting with someone!</small>
                </div>
            </div>
        );
    }

    return (
        <div className="conversations-list">
            {conversations.map((conversation) => (
                <div
                    key={conversation.other_user_id}
                    className={`conversation-item ${
                        selectedUserId === conversation.other_user_id ? 'active' : ''
                    }`}
                    onClick={() => handleConversationClick(conversation.other_user_id)}
                    role="button"
                    tabIndex={0}
                >
                    <div className="conversation-avatar">
                        {conversation.other_username[0].toUpperCase()}
                    </div>

                    <div className="conversation-content">
                        <div className="conversation-header">
                            <h4 className="conversation-name">{conversation.other_username}</h4>
                            <span className="conversation-time">
                {formatTime(conversation.last_message_at)}
              </span>
                        </div>
                        <p className="conversation-meta">
                            {conversation.message_count} messages
                        </p>
                    </div>

                    {conversation.unread_count > 0 && (
                        <div className="unread-badge">
                            {conversation.unread_count}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ConversationsList;