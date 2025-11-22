/**
 * Background Service Worker
 * Handles extension lifecycle and background tasks
 */

// Extension installed
chrome.runtime.onInstalled.addListener((details) => {
    console.log('LocalChat extension installed', details);

    if (details.reason === 'install') {
        // First install
        console.log('First time installation');
    } else if (details.reason === 'update') {
        // Extension updated
        console.log('Extension updated to version', chrome.runtime.getManifest().version);
    }
});

// Extension icon clicked
chrome.action.onClicked.addListener(() => {
    console.log('Extension icon clicked');
});

// Message listener for cross-extension communication
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    console.log('Background received message:', message);

    if (message.type === 'PING') {
        sendResponse({ type: 'PONG', timestamp: Date.now() });
    }

    return true; // Keep message channel open for async response
});

// Keep service worker alive (Manifest V3 workaround)
const keepAlive = () => setInterval(chrome.runtime.getPlatformInfo, 20000);
chrome.runtime.onStartup.addListener(keepAlive);
keepAlive();

console.log('LocalChat background service worker initialized');
