/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

chrome.runtime.onInstalled.addListener((details) => {
    console.log('LocalChat extension installed', details);
    if (details.reason === 'install') {
        console.log('First time installation');
    }
    else if (details.reason === 'update') {
        console.log('Extension updated to version', chrome.runtime.getManifest().version);
    }
});
chrome.action.onClicked.addListener(() => {
    console.log('Extension icon clicked');
});
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    console.log('Background received message:', message);
    if (message.type === 'PING') {
        sendResponse({ type: 'PONG', timestamp: Date.now() });
    }
    return true;
});
const keepAlive = () => setInterval(chrome.runtime.getPlatformInfo, 20000);
chrome.runtime.onStartup.addListener(keepAlive);
keepAlive();
console.log('LocalChat background service worker initialized');

/******/ })()
;
//# sourceMappingURL=background.js.map