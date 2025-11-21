/**
 * Popup Entry Point
 * Initializes React app and renders the main ChatApp component
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import ChatApp from './components/ChatApp';
import Logger from './services/Logger';
import './styles/global.css';

const module = 'PopupIndex';

// Initialize the application
function initializeApp() {
    Logger.info(module, 'Initializing LocalChat extension');

    const rootElement = document.getElementById('root');
    if (!rootElement) {
        Logger.error(module, 'Root element not found');
        return;
    }

    try {
        const root = createRoot(rootElement);
        root.render(
            <React.StrictMode>
                <ChatApp />
            </React.StrictMode>
        );
        Logger.info(module, 'Application initialized successfully');
    } catch (error) {
        Logger.error(module, 'Failed to initialize application', error);
    }
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
