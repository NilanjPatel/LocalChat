/**
 * LoadingScreen Component
 * Shows loading state with animated spinner
 */

import React from 'react';
import '../styles/loading-screen.css';

interface Props {
    message?: string;
}

const LoadingScreen: React.FC<Props> = ({ message = 'Loading...' }) => {
    return (
        <div className="loading-screen">
            <div className="loading-container">
                <div className="spinner"></div>
                <p className="loading-message">{message}</p>
            </div>
        </div>
    );
};

export default LoadingScreen;