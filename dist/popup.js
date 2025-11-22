/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 54:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Conversations List Styles
 */

.conversations-list {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.conversations-header {
    padding: var(--spacing-md);
    background: var(--bg-tertiary);
    border-bottom: 1px solid var(--border-color);
}

.conversations-header h3 {
    font-size: var(--font-size-sm);
    color: var(--text-primary);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.conversations-items {
    flex: 1;
    overflow-y: auto;
}

.conversation-item {
    padding: var(--spacing-md) var(--spacing-sm);
    cursor: pointer;
    border-bottom: 1px solid var(--border-light);
    transition: background 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xs);
}

.conversation-item:hover {
    background: rgba(74, 144, 226, 0.05);
}

.conversation-item.active {
    background: var(--primary-color);
    color: white;
}

.conversation-avatar {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-full);
    background: var(--primary-light);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: var(--font-size-md);
    position: relative;
}

.conversation-item.active .conversation-avatar {
    background: white;
    color: var(--primary-color);
}

.conversation-online-indicator {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-radius: var(--radius-full);
    background: var(--online-color);
    border: 2px solid var(--bg-secondary);
}

.conversation-item.active .conversation-online-indicator {
    border-color: var(--primary-color);
}

.conversation-info {
    text-align: center;
    width: 100%;
}

.conversation-name {
    font-size: var(--font-size-xs);
    font-weight: 500;
    color: var(--text-primary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.conversation-item.active .conversation-name {
    color: white;
}

.conversation-preview {
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
}

.conversation-item.active .conversation-preview {
    color: rgba(255, 255, 255, 0.9);
}

.conversation-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--font-size-xs);
    margin-top: var(--spacing-xs);
    width: 100%;
}

.conversation-time {
    color: var(--text-light);
}

.conversation-item.active .conversation-time {
    color: rgba(255, 255, 255, 0.8);
}

.unread-badge {
    background: var(--danger-color);
    color: white;
    font-size: var(--font-size-xs);
    font-weight: bold;
    padding: 2px 6px;
    border-radius: var(--radius-full);
    min-width: 18px;
    text-align: center;
}

.conversation-item.active .unread-badge {
    background: white;
    color: var(--primary-color);
}

/* Empty State */
.conversations-empty {
    padding: var(--spacing-lg);
    text-align: center;
    color: var(--text-secondary);
}

.conversations-empty-icon {
    font-size: 36px;
    margin-bottom: var(--spacing-sm);
    opacity: 0.5;
}

.conversations-empty p {
    font-size: var(--font-size-sm);
}
`, "",{"version":3,"sources":["webpack://./src/components/styles/conversations-list.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,0BAA0B;IAC1B,8BAA8B;IAC9B,4CAA4C;AAChD;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;IAC1B,gBAAgB;IAChB,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,OAAO;IACP,gBAAgB;AACpB;;AAEA;IACI,4CAA4C;IAC5C,eAAe;IACf,4CAA4C;IAC5C,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,gCAAgC;IAChC,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,+BAA+B;IAC/B,qCAAqC;AACzC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;IAChB,0BAA0B;IAC1B,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,4BAA4B;IAC5B,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,8BAA8B;IAC9B,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,8BAA8B;IAC9B,iBAAiB;IACjB,gBAAgB;IAChB,iCAAiC;IACjC,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;AAC/B;;AAEA,gBAAgB;AAChB;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,8BAA8B;AAClC","sourcesContent":["/**\n * Conversations List Styles\n */\n\n.conversations-list {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.conversations-header {\n    padding: var(--spacing-md);\n    background: var(--bg-tertiary);\n    border-bottom: 1px solid var(--border-color);\n}\n\n.conversations-header h3 {\n    font-size: var(--font-size-sm);\n    color: var(--text-primary);\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n}\n\n.conversations-items {\n    flex: 1;\n    overflow-y: auto;\n}\n\n.conversation-item {\n    padding: var(--spacing-md) var(--spacing-sm);\n    cursor: pointer;\n    border-bottom: 1px solid var(--border-light);\n    transition: background 0.2s;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--spacing-xs);\n}\n\n.conversation-item:hover {\n    background: rgba(74, 144, 226, 0.05);\n}\n\n.conversation-item.active {\n    background: var(--primary-color);\n    color: white;\n}\n\n.conversation-avatar {\n    width: 40px;\n    height: 40px;\n    border-radius: var(--radius-full);\n    background: var(--primary-light);\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: var(--font-size-md);\n    position: relative;\n}\n\n.conversation-item.active .conversation-avatar {\n    background: white;\n    color: var(--primary-color);\n}\n\n.conversation-online-indicator {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 10px;\n    height: 10px;\n    border-radius: var(--radius-full);\n    background: var(--online-color);\n    border: 2px solid var(--bg-secondary);\n}\n\n.conversation-item.active .conversation-online-indicator {\n    border-color: var(--primary-color);\n}\n\n.conversation-info {\n    text-align: center;\n    width: 100%;\n}\n\n.conversation-name {\n    font-size: var(--font-size-xs);\n    font-weight: 500;\n    color: var(--text-primary);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.conversation-item.active .conversation-name {\n    color: white;\n}\n\n.conversation-preview {\n    font-size: var(--font-size-xs);\n    color: var(--text-secondary);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-width: 100%;\n}\n\n.conversation-item.active .conversation-preview {\n    color: rgba(255, 255, 255, 0.9);\n}\n\n.conversation-meta {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: var(--font-size-xs);\n    margin-top: var(--spacing-xs);\n    width: 100%;\n}\n\n.conversation-time {\n    color: var(--text-light);\n}\n\n.conversation-item.active .conversation-time {\n    color: rgba(255, 255, 255, 0.8);\n}\n\n.unread-badge {\n    background: var(--danger-color);\n    color: white;\n    font-size: var(--font-size-xs);\n    font-weight: bold;\n    padding: 2px 6px;\n    border-radius: var(--radius-full);\n    min-width: 18px;\n    text-align: center;\n}\n\n.conversation-item.active .unread-badge {\n    background: white;\n    color: var(--primary-color);\n}\n\n/* Empty State */\n.conversations-empty {\n    padding: var(--spacing-lg);\n    text-align: center;\n    color: var(--text-secondary);\n}\n\n.conversations-empty-icon {\n    font-size: 36px;\n    margin-bottom: var(--spacing-sm);\n    opacity: 0.5;\n}\n\n.conversations-empty p {\n    font-size: var(--font-size-sm);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 66:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Loading Screen Styles
 */

.loading-screen {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--bg-primary);
    padding: var(--spacing-lg);
}

.loading-spinner {
    width: 48px;
    height: 48px;
    border: 4px solid var(--border-color);
    border-top-color: var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: var(--spacing-lg);
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.loading-text {
    font-size: var(--font-size-md);
    color: var(--text-secondary);
    text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/components/styles/loading-screen.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;IAC7B,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,qCAAqC;IACrC,sCAAsC;IACtC,kBAAkB;IAClB,kCAAkC;IAClC,gCAAgC;AACpC;;AAEA;IACI;QACI,yBAAyB;IAC7B;AACJ;;AAEA;IACI,8BAA8B;IAC9B,4BAA4B;IAC5B,kBAAkB;AACtB","sourcesContent":["/**\n * Loading Screen Styles\n */\n\n.loading-screen {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background: var(--bg-primary);\n    padding: var(--spacing-lg);\n}\n\n.loading-spinner {\n    width: 48px;\n    height: 48px;\n    border: 4px solid var(--border-color);\n    border-top-color: var(--primary-color);\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n    margin-bottom: var(--spacing-lg);\n}\n\n@keyframes spin {\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n.loading-text {\n    font-size: var(--font-size-md);\n    color: var(--text-secondary);\n    text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 100:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Chat Screen Styles
 */

.chat-screen {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: var(--bg-primary);
}

/* Header */
.chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-md);
    background: var(--primary-color);
    color: white;
    box-shadow: var(--shadow-sm);
}

.chat-header-left {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.user-avatar {
    width: 32px;
    height: 32px;
    border-radius: var(--radius-full);
    background: white;
    color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: var(--font-size-sm);
}

.user-info h2 {
    font-size: var(--font-size-md);
    font-weight: 500;
}

.user-info p {
    font-size: var(--font-size-xs);
    opacity: 0.9;
}

.chat-header-right {
    display: flex;
    gap: var(--spacing-sm);
}

.icon-button {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: var(--spacing-sm);
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: background 0.2s;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-button:hover {
    background: rgba(255, 255, 255, 0.3);
}

/* Main Content */
.chat-main {
    flex: 1;
    display: flex;
    overflow: hidden;
}

.conversations-sidebar {
    width: 140px;
    background: var(--bg-secondary);
    border-right: 1px solid var(--border-color);
    overflow-y: auto;
}

.chat-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: var(--bg-primary);
}

/* Empty State */
.empty-state {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    padding: var(--spacing-lg);
    text-align: center;
}

.empty-state-icon {
    font-size: 48px;
    margin-bottom: var(--spacing-md);
    opacity: 0.5;
}

.empty-state h3 {
    font-size: var(--font-size-lg);
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

.empty-state p {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
}

/* Connection Status */
.connection-status {
    padding: var(--spacing-xs) var(--spacing-md);
    background: var(--warning-color);
    color: white;
    text-align: center;
    font-size: var(--font-size-xs);
}

.connection-status.connected {
    background: var(--secondary-color);
}

.connection-status.disconnected {
    background: var(--danger-color);
}
`, "",{"version":3,"sources":["webpack://./src/components/styles/chat-screen.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA,WAAW;AACX;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,0BAA0B;IAC1B,gCAAgC;IAChC,YAAY;IACZ,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,iBAAiB;IACjB,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,0BAA0B;IAC1B,+BAA+B;IAC/B,eAAe;IACf,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;AACxC;;AAEA,iBAAiB;AACjB;IACI,OAAO;IACP,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,+BAA+B;IAC/B,2CAA2C;IAC3C,gBAAgB;AACpB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA,gBAAgB;AAChB;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,4BAA4B;IAC5B,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;IAC1B,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA,sBAAsB;AACtB;IACI,4CAA4C;IAC5C,gCAAgC;IAChC,YAAY;IACZ,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,+BAA+B;AACnC","sourcesContent":["/**\n * Chat Screen Styles\n */\n\n.chat-screen {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background: var(--bg-primary);\n}\n\n/* Header */\n.chat-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--spacing-md);\n    background: var(--primary-color);\n    color: white;\n    box-shadow: var(--shadow-sm);\n}\n\n.chat-header-left {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-sm);\n}\n\n.user-avatar {\n    width: 32px;\n    height: 32px;\n    border-radius: var(--radius-full);\n    background: white;\n    color: var(--primary-color);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: var(--font-size-sm);\n}\n\n.user-info h2 {\n    font-size: var(--font-size-md);\n    font-weight: 500;\n}\n\n.user-info p {\n    font-size: var(--font-size-xs);\n    opacity: 0.9;\n}\n\n.chat-header-right {\n    display: flex;\n    gap: var(--spacing-sm);\n}\n\n.icon-button {\n    background: rgba(255, 255, 255, 0.2);\n    color: white;\n    padding: var(--spacing-sm);\n    border-radius: var(--radius-sm);\n    cursor: pointer;\n    transition: background 0.2s;\n    width: 32px;\n    height: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.icon-button:hover {\n    background: rgba(255, 255, 255, 0.3);\n}\n\n/* Main Content */\n.chat-main {\n    flex: 1;\n    display: flex;\n    overflow: hidden;\n}\n\n.conversations-sidebar {\n    width: 140px;\n    background: var(--bg-secondary);\n    border-right: 1px solid var(--border-color);\n    overflow-y: auto;\n}\n\n.chat-content {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background: var(--bg-primary);\n}\n\n/* Empty State */\n.empty-state {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: var(--text-secondary);\n    padding: var(--spacing-lg);\n    text-align: center;\n}\n\n.empty-state-icon {\n    font-size: 48px;\n    margin-bottom: var(--spacing-md);\n    opacity: 0.5;\n}\n\n.empty-state h3 {\n    font-size: var(--font-size-lg);\n    color: var(--text-primary);\n    margin-bottom: var(--spacing-sm);\n}\n\n.empty-state p {\n    font-size: var(--font-size-sm);\n    color: var(--text-secondary);\n}\n\n/* Connection Status */\n.connection-status {\n    padding: var(--spacing-xs) var(--spacing-md);\n    background: var(--warning-color);\n    color: white;\n    text-align: center;\n    font-size: var(--font-size-xs);\n}\n\n.connection-status.connected {\n    background: var(--secondary-color);\n}\n\n.connection-status.disconnected {\n    background: var(--danger-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 159:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Global Styles
 * Base styles for the entire application
 */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Color Palette */
    --primary-color: #4A90E2;
    --primary-dark: #357ABD;
    --primary-light: #6BA5E7;
    --secondary-color: #50C878;
    --danger-color: #E74C3C;
    --warning-color: #F39C12;

    /* Neutral Colors */
    --bg-primary: #FFFFFF;
    --bg-secondary: #F5F7FA;
    --bg-tertiary: #E8ECF1;
    --text-primary: #2C3E50;
    --text-secondary: #7F8C8D;
    --text-light: #BDC3C7;

    /* Border Colors */
    --border-color: #DDE2E8;
    --border-light: #ECF0F1;

    /* Status Colors */
    --online-color: #2ECC71;
    --offline-color: #95A5A6;
    --unread-color: #E74C3C;

    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;

    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-full: 50%;

    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.15);
    --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.2);

    /* Font */
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    --font-size-xs: 11px;
    --font-size-sm: 12px;
    --font-size-md: 14px;
    --font-size-lg: 16px;
    --font-size-xl: 18px;
}

body {
    font-family: var(--font-family);
    font-size: var(--font-size-md);
    color: var(--text-primary);
    background-color: var(--bg-primary);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/* Scrollbar Styles */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: var(--bg-secondary);
    border-radius: var(--radius-sm);
}

::-webkit-scrollbar-thumb {
    background: var(--border-color);
    border-radius: var(--radius-sm);
}

::-webkit-scrollbar-thumb:hover {
    background: var(--text-secondary);
}

/* Button Reset */
button {
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
}

/* Input Reset */
input, textarea {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: 1px solid var(--border-color);
}

/* Common Utility Classes */
.text-center {
    text-align: center;
}

.text-left {
    text-align: left;
}

.text-right {
    text-align: right;
}

.flex {
    display: flex;
}

.flex-column {
    display: flex;
    flex-direction: column;
}

.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.mt-sm { margin-top: var(--spacing-sm); }
.mt-md { margin-top: var(--spacing-md); }
.mt-lg { margin-top: var(--spacing-lg); }

.mb-sm { margin-bottom: var(--spacing-sm); }
.mb-md { margin-bottom: var(--spacing-md); }
.mb-lg { margin-bottom: var(--spacing-lg); }

.p-sm { padding: var(--spacing-sm); }
.p-md { padding: var(--spacing-md); }
.p-lg { padding: var(--spacing-lg); }
`, "",{"version":3,"sources":["webpack://./src/styles/global.css"],"names":[],"mappings":"AAAA;;;EAGE;;AAEF;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,uBAAuB;IACvB,wBAAwB;IACxB,0BAA0B;IAC1B,uBAAuB;IACvB,wBAAwB;;IAExB,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,yBAAyB;IACzB,qBAAqB;;IAErB,kBAAkB;IAClB,uBAAuB;IACvB,uBAAuB;;IAEvB,kBAAkB;IAClB,uBAAuB;IACvB,wBAAwB;IACxB,uBAAuB;;IAEvB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;;IAElB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;;IAElB,YAAY;IACZ,yCAAyC;IACzC,0CAA0C;IAC1C,0CAA0C;;IAE1C,SAAS;IACT,2GAA2G;IAC3G,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,+BAA+B;IAC/B,8BAA8B;IAC9B,0BAA0B;IAC1B,mCAAmC;IACnC,gBAAgB;IAChB,mCAAmC;IACnC,kCAAkC;AACtC;;AAEA,qBAAqB;AACrB;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,+BAA+B;IAC/B,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;IAC/B,+BAA+B;AACnC;;AAEA;IACI,iCAAiC;AACrC;;AAEA,iBAAiB;AACjB;IACI,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;;AAEA,gBAAgB;AAChB;IACI,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,qCAAqC;AACzC;;AAEA,2BAA2B;AAC3B;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA,SAAS,6BAA6B,EAAE;AACxC,SAAS,6BAA6B,EAAE;AACxC,SAAS,6BAA6B,EAAE;;AAExC,SAAS,gCAAgC,EAAE;AAC3C,SAAS,gCAAgC,EAAE;AAC3C,SAAS,gCAAgC,EAAE;;AAE3C,QAAQ,0BAA0B,EAAE;AACpC,QAAQ,0BAA0B,EAAE;AACpC,QAAQ,0BAA0B,EAAE","sourcesContent":["/**\n * Global Styles\n * Base styles for the entire application\n */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    /* Color Palette */\n    --primary-color: #4A90E2;\n    --primary-dark: #357ABD;\n    --primary-light: #6BA5E7;\n    --secondary-color: #50C878;\n    --danger-color: #E74C3C;\n    --warning-color: #F39C12;\n\n    /* Neutral Colors */\n    --bg-primary: #FFFFFF;\n    --bg-secondary: #F5F7FA;\n    --bg-tertiary: #E8ECF1;\n    --text-primary: #2C3E50;\n    --text-secondary: #7F8C8D;\n    --text-light: #BDC3C7;\n\n    /* Border Colors */\n    --border-color: #DDE2E8;\n    --border-light: #ECF0F1;\n\n    /* Status Colors */\n    --online-color: #2ECC71;\n    --offline-color: #95A5A6;\n    --unread-color: #E74C3C;\n\n    /* Spacing */\n    --spacing-xs: 4px;\n    --spacing-sm: 8px;\n    --spacing-md: 16px;\n    --spacing-lg: 24px;\n    --spacing-xl: 32px;\n\n    /* Border Radius */\n    --radius-sm: 4px;\n    --radius-md: 8px;\n    --radius-lg: 12px;\n    --radius-full: 50%;\n\n    /* Shadows */\n    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);\n    --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.15);\n    --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.2);\n\n    /* Font */\n    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\n    --font-size-xs: 11px;\n    --font-size-sm: 12px;\n    --font-size-md: 14px;\n    --font-size-lg: 16px;\n    --font-size-xl: 18px;\n}\n\nbody {\n    font-family: var(--font-family);\n    font-size: var(--font-size-md);\n    color: var(--text-primary);\n    background-color: var(--bg-primary);\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n/* Scrollbar Styles */\n::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n}\n\n::-webkit-scrollbar-track {\n    background: var(--bg-secondary);\n    border-radius: var(--radius-sm);\n}\n\n::-webkit-scrollbar-thumb {\n    background: var(--border-color);\n    border-radius: var(--radius-sm);\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: var(--text-secondary);\n}\n\n/* Button Reset */\nbutton {\n    font-family: inherit;\n    font-size: inherit;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background: none;\n}\n\n/* Input Reset */\ninput, textarea {\n    font-family: inherit;\n    font-size: inherit;\n    outline: none;\n    border: 1px solid var(--border-color);\n}\n\n/* Common Utility Classes */\n.text-center {\n    text-align: center;\n}\n\n.text-left {\n    text-align: left;\n}\n\n.text-right {\n    text-align: right;\n}\n\n.flex {\n    display: flex;\n}\n\n.flex-column {\n    display: flex;\n    flex-direction: column;\n}\n\n.flex-center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.flex-between {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.mt-sm { margin-top: var(--spacing-sm); }\n.mt-md { margin-top: var(--spacing-md); }\n.mt-lg { margin-top: var(--spacing-lg); }\n\n.mb-sm { margin-bottom: var(--spacing-sm); }\n.mb-md { margin-bottom: var(--spacing-md); }\n.mb-lg { margin-bottom: var(--spacing-lg); }\n\n.p-sm { padding: var(--spacing-sm); }\n.p-md { padding: var(--spacing-md); }\n.p-lg { padding: var(--spacing-lg); }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 287:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 304:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Chat Window Styles
 */

.chat-window {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--bg-primary);
}

/* Chat Header */
.chat-window-header {
    padding: var(--spacing-md);
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.chat-window-header-left {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.chat-window-avatar {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-full);
    background: var(--primary-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: var(--font-size-md);
}

.chat-window-user-info h3 {
    font-size: var(--font-size-md);
    color: var(--text-primary);
    font-weight: 500;
}

.chat-window-user-info .status {
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 4px;
}

.status-indicator {
    width: 6px;
    height: 6px;
    border-radius: var(--radius-full);
    background: var(--offline-color);
}

.status-indicator.online {
    background: var(--online-color);
}

/* Messages Area */
.messages-area {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-md);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    background: #F8F9FA;
}

.message {
    display: flex;
    flex-direction: column;
    max-width: 75%;
}

.message.sent {
    align-self: flex-end;
}

.message.received {
    align-self: flex-start;
}

.message-bubble {
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    word-wrap: break-word;
    position: relative;
}

.message.sent .message-bubble {
    background: var(--primary-color);
    color: white;
    border-bottom-right-radius: 4px;
}

.message.received .message-bubble {
    background: white;
    color: var(--text-primary);
    border: 1px solid var(--border-light);
    border-bottom-left-radius: 4px;
}

.message-text {
    font-size: var(--font-size-sm);
    line-height: 1.4;
    margin: 0;
}

.message-meta {
    font-size: var(--font-size-xs);
    color: var(--text-light);
    margin-top: var(--spacing-xs);
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
}

.message.sent .message-meta {
    color: rgba(255, 255, 255, 0.8);
    justify-content: flex-end;
}

.message.received .message-meta {
    color: var(--text-secondary);
}

.read-status {
    font-size: var(--font-size-xs);
}

.read-status.read {
    color: #4CAF50;
}

/* Input Area */
.input-area {
    padding: var(--spacing-md);
    background: var(--bg-primary);
    border-top: 1px solid var(--border-color);
    display: flex;
    gap: var(--spacing-sm);
}

.message-input {
    flex: 1;
    padding: var(--spacing-sm) var(--spacing-md);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    resize: none;
    max-height: 80px;
    overflow-y: auto;
}

.message-input:focus {
    border-color: var(--primary-color);
    outline: none;
}

.send-button {
    background: var(--primary-color);
    color: white;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
    min-width: 60px;
}

.send-button:hover:not(:disabled) {
    background: var(--primary-dark);
}

.send-button:disabled {
    background: var(--text-light);
    cursor: not-allowed;
}

/* Typing Indicator */
.typing-indicator {
    padding: var(--spacing-xs) var(--spacing-md);
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
    font-style: italic;
}
`, "",{"version":3,"sources":["webpack://./src/components/styles/chat-window.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,6BAA6B;AACjC;;AAEA,gBAAgB;AAChB;IACI,0BAA0B;IAC1B,+BAA+B;IAC/B,4CAA4C;IAC5C,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,gCAAgC;IAChC,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,UAAU;IACV,WAAW;IACX,iCAAiC;IACjC,gCAAgC;AACpC;;AAEA;IACI,+BAA+B;AACnC;;AAEA,kBAAkB;AAClB;IACI,OAAO;IACP,gBAAgB;IAChB,0BAA0B;IAC1B,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;AAClB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,4CAA4C;IAC5C,+BAA+B;IAC/B,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,8BAA8B;IAC9B,wBAAwB;IACxB,6BAA6B;IAC7B,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,+BAA+B;IAC/B,yBAAyB;AAC7B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,cAAc;AAClB;;AAEA,eAAe;AACf;IACI,0BAA0B;IAC1B,6BAA6B;IAC7B,yCAAyC;IACzC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,OAAO;IACP,4CAA4C;IAC5C,qCAAqC;IACrC,+BAA+B;IAC/B,8BAA8B;IAC9B,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;IAClC,aAAa;AACjB;;AAEA;IACI,gCAAgC;IAChC,YAAY;IACZ,4CAA4C;IAC5C,+BAA+B;IAC/B,8BAA8B;IAC9B,gBAAgB;IAChB,eAAe;IACf,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA,qBAAqB;AACrB;IACI,4CAA4C;IAC5C,8BAA8B;IAC9B,4BAA4B;IAC5B,kBAAkB;AACtB","sourcesContent":["/**\n * Chat Window Styles\n */\n\n.chat-window {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    background: var(--bg-primary);\n}\n\n/* Chat Header */\n.chat-window-header {\n    padding: var(--spacing-md);\n    background: var(--bg-secondary);\n    border-bottom: 1px solid var(--border-color);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.chat-window-header-left {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-sm);\n}\n\n.chat-window-avatar {\n    width: 36px;\n    height: 36px;\n    border-radius: var(--radius-full);\n    background: var(--primary-color);\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: var(--font-size-md);\n}\n\n.chat-window-user-info h3 {\n    font-size: var(--font-size-md);\n    color: var(--text-primary);\n    font-weight: 500;\n}\n\n.chat-window-user-info .status {\n    font-size: var(--font-size-xs);\n    color: var(--text-secondary);\n    display: flex;\n    align-items: center;\n    gap: 4px;\n}\n\n.status-indicator {\n    width: 6px;\n    height: 6px;\n    border-radius: var(--radius-full);\n    background: var(--offline-color);\n}\n\n.status-indicator.online {\n    background: var(--online-color);\n}\n\n/* Messages Area */\n.messages-area {\n    flex: 1;\n    overflow-y: auto;\n    padding: var(--spacing-md);\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-sm);\n    background: #F8F9FA;\n}\n\n.message {\n    display: flex;\n    flex-direction: column;\n    max-width: 75%;\n}\n\n.message.sent {\n    align-self: flex-end;\n}\n\n.message.received {\n    align-self: flex-start;\n}\n\n.message-bubble {\n    padding: var(--spacing-sm) var(--spacing-md);\n    border-radius: var(--radius-md);\n    word-wrap: break-word;\n    position: relative;\n}\n\n.message.sent .message-bubble {\n    background: var(--primary-color);\n    color: white;\n    border-bottom-right-radius: 4px;\n}\n\n.message.received .message-bubble {\n    background: white;\n    color: var(--text-primary);\n    border: 1px solid var(--border-light);\n    border-bottom-left-radius: 4px;\n}\n\n.message-text {\n    font-size: var(--font-size-sm);\n    line-height: 1.4;\n    margin: 0;\n}\n\n.message-meta {\n    font-size: var(--font-size-xs);\n    color: var(--text-light);\n    margin-top: var(--spacing-xs);\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-xs);\n}\n\n.message.sent .message-meta {\n    color: rgba(255, 255, 255, 0.8);\n    justify-content: flex-end;\n}\n\n.message.received .message-meta {\n    color: var(--text-secondary);\n}\n\n.read-status {\n    font-size: var(--font-size-xs);\n}\n\n.read-status.read {\n    color: #4CAF50;\n}\n\n/* Input Area */\n.input-area {\n    padding: var(--spacing-md);\n    background: var(--bg-primary);\n    border-top: 1px solid var(--border-color);\n    display: flex;\n    gap: var(--spacing-sm);\n}\n\n.message-input {\n    flex: 1;\n    padding: var(--spacing-sm) var(--spacing-md);\n    border: 1px solid var(--border-color);\n    border-radius: var(--radius-md);\n    font-size: var(--font-size-sm);\n    resize: none;\n    max-height: 80px;\n    overflow-y: auto;\n}\n\n.message-input:focus {\n    border-color: var(--primary-color);\n    outline: none;\n}\n\n.send-button {\n    background: var(--primary-color);\n    color: white;\n    padding: var(--spacing-sm) var(--spacing-md);\n    border-radius: var(--radius-md);\n    font-size: var(--font-size-sm);\n    font-weight: 500;\n    cursor: pointer;\n    transition: background 0.2s;\n    min-width: 60px;\n}\n\n.send-button:hover:not(:disabled) {\n    background: var(--primary-dark);\n}\n\n.send-button:disabled {\n    background: var(--text-light);\n    cursor: not-allowed;\n}\n\n/* Typing Indicator */\n.typing-indicator {\n    padding: var(--spacing-xs) var(--spacing-md);\n    font-size: var(--font-size-xs);\n    color: var(--text-secondary);\n    font-style: italic;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var m = __webpack_require__(961);
if (true) {
  exports.H = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else // removed by dead control flow
{ var i; }


/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 383:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Login Screen Styles
 */

.login-screen {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-md);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-container {
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-lg);
    width: 100%;
    max-width: 400px;
}

.login-header {
    text-align: center;
    margin-bottom: var(--spacing-lg);
}

.login-header h1 {
    font-size: var(--font-size-xl);
    color: var(--text-primary);
    margin-bottom: var(--spacing-xs);
}

.login-header p {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
}

.form-group label {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--text-primary);
}

.form-group input {
    padding: var(--spacing-sm) var(--spacing-md);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-md);
    transition: border-color 0.2s;
}

.form-group input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.1);
}

.form-group input::placeholder {
    color: var(--text-light);
}

.error-message {
    background: #FEE;
    border: 1px solid var(--danger-color);
    color: var(--danger-color);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-sm);
}

.login-button {
    background: var(--primary-color);
    color: white;
    padding: var(--spacing-md);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-md);
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
}

.login-button:hover:not(:disabled) {
    background: var(--primary-dark);
}

.login-button:disabled {
    background: var(--text-light);
    cursor: not-allowed;
}

.login-footer {
    margin-top: var(--spacing-lg);
    text-align: center;
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
}
`, "",{"version":3,"sources":["webpack://./src/components/styles/login-screen.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,0BAA0B;IAC1B,6DAA6D;AACjE;;AAEA;IACI,6BAA6B;IAC7B,+BAA+B;IAC/B,0BAA0B;IAC1B,4BAA4B;IAC5B,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;IAC1B,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA;IACI,4CAA4C;IAC5C,qCAAqC;IACrC,+BAA+B;IAC/B,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA;IACI,kCAAkC;IAClC,6CAA6C;AACjD;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,qCAAqC;IACrC,0BAA0B;IAC1B,4CAA4C;IAC5C,+BAA+B;IAC/B,8BAA8B;IAC9B,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;IAChC,YAAY;IACZ,0BAA0B;IAC1B,+BAA+B;IAC/B,8BAA8B;IAC9B,gBAAgB;IAChB,eAAe;IACf,iCAAiC;AACrC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,8BAA8B;IAC9B,4BAA4B;AAChC","sourcesContent":["/**\n * Login Screen Styles\n */\n\n.login-screen {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: var(--spacing-md);\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n.login-container {\n    background: var(--bg-primary);\n    border-radius: var(--radius-lg);\n    padding: var(--spacing-lg);\n    box-shadow: var(--shadow-lg);\n    width: 100%;\n    max-width: 400px;\n}\n\n.login-header {\n    text-align: center;\n    margin-bottom: var(--spacing-lg);\n}\n\n.login-header h1 {\n    font-size: var(--font-size-xl);\n    color: var(--text-primary);\n    margin-bottom: var(--spacing-xs);\n}\n\n.login-header p {\n    font-size: var(--font-size-sm);\n    color: var(--text-secondary);\n}\n\n.login-form {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-md);\n}\n\n.form-group {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-xs);\n}\n\n.form-group label {\n    font-size: var(--font-size-sm);\n    font-weight: 500;\n    color: var(--text-primary);\n}\n\n.form-group input {\n    padding: var(--spacing-sm) var(--spacing-md);\n    border: 1px solid var(--border-color);\n    border-radius: var(--radius-sm);\n    font-size: var(--font-size-md);\n    transition: border-color 0.2s;\n}\n\n.form-group input:focus {\n    border-color: var(--primary-color);\n    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.1);\n}\n\n.form-group input::placeholder {\n    color: var(--text-light);\n}\n\n.error-message {\n    background: #FEE;\n    border: 1px solid var(--danger-color);\n    color: var(--danger-color);\n    padding: var(--spacing-sm) var(--spacing-md);\n    border-radius: var(--radius-sm);\n    font-size: var(--font-size-sm);\n    margin-bottom: var(--spacing-sm);\n}\n\n.login-button {\n    background: var(--primary-color);\n    color: white;\n    padding: var(--spacing-md);\n    border-radius: var(--radius-sm);\n    font-size: var(--font-size-md);\n    font-weight: 500;\n    cursor: pointer;\n    transition: background-color 0.2s;\n}\n\n.login-button:hover:not(:disabled) {\n    background: var(--primary-dark);\n}\n\n.login-button:disabled {\n    background: var(--text-light);\n    cursor: not-allowed;\n}\n\n.login-footer {\n    margin-top: var(--spacing-lg);\n    text-align: center;\n    font-size: var(--font-size-xs);\n    color: var(--text-secondary);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(287);
} else // removed by dead control flow
{}


/***/ }),

/***/ 551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(540),ca=__webpack_require__(982);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;
function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Sg(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}
function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null)}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a}}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a)}
function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function mh(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q}}
function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(uh);G(uh,b)}function zh(){E(uh);E(vh);E(wh)}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c))}function Bh(a){vh.current===a&&(E(uh),E(vh))}var L=Uf(0);
function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Dh=[];
function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e)}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else{if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a}return O}
function Vh(a,b){return"function"===typeof b?b(a):b}
function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function Yh(){}
function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e)}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a)}function ai(a,b,c){return c(function(){ei(b)&&fi(a)})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1)}
function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return[b.memoizedState,a]}
function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d)}
function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d)}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b()}finally{C=c,Gh.transition=d}}function wi(){return Uh().memoizedState}
function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d)}}
function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d))}}
function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return[d.memoizedState,a]},useRef:function(a){var b=
Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return[a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Ei={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d))}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null)}
function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}
function Ki(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b)};return c}
function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a))}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d)}
function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return jj(a,b,c,d,f,e)}
function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo)}
function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1))}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c)}
function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(L,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Aj=function(){};
Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304)}else{if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Mj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Nj=!1;
function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Nj;Nj=!1;return n}
function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f)}e=e.next}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling}
function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c)}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling}
function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a)}catch(t){W(a,a.return,t)}try{Pj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
a),ek(a)}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function hk(a,b,c){V=a;ik(a,b,c)}
function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f,b,c),f=f.sibling;V=e;Jj=h;U=l}kk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a,b,c)}}
function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}sh(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Rj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Rj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Rj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg())}
function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Fk(c,Gk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else{b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h)}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a)}
function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d))}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg())}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg()}}function Hj(){fj=ej.current;E(ej)}
function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj()}c=c.return}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}fh=null}return a}
function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Ih=!1}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return}while(null!==f)}Sk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z)}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e)}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y)}function Lk(){for(;null!==Y&&!cc();)Uk(Y)}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null}
function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else{c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d)}finally{ok.transition=e,C=d}return null}
function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c,a,e);dc();K=h;C=g;ok.transition=f}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode,d);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else{a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,ok.transition=b}}return!1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b))}
function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return}}
function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b)}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c))}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c)}
function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c)}var Vk;
Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c)}b=b.child}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Xi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b)}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a)};function ll(a){this._internalRoot=a}
ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null)};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null)});b[uf]=null}};function ml(a){this._internalRoot=a}
ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function nl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a)}}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a)}}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d)});return k}
function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a)}}fl(b,g,a,e)}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()))}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c)}}),il(a,1)}};
Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c)}il(a,134217728)}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d)}il(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Qk;Hb=Rk;
var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};exports.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Rk(a)};exports.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new ml(b)};exports.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Qk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};exports.version="18.3.1-next-f1338f8080-20240426";


/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 856:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Settings Modal Styles
 */

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal {
    background: var(--bg-primary);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    width: 90%;
    max-width: 360px;
    max-height: 80%;
    display: flex;
    flex-direction: column;
}

.modal-header {
    padding: var(--spacing-md) var(--spacing-lg);
    border-bottom: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal-header h2 {
    font-size: var(--font-size-lg);
    color: var(--text-primary);
    font-weight: 500;
}

.modal-close-button {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    width: 28px;
    height: 28px;
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s;
}

.modal-close-button:hover {
    background: var(--border-color);
    color: var(--text-primary);
}

.modal-body {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-lg);
}

.settings-section {
    margin-bottom: var(--spacing-lg);
}

.settings-section:last-child {
    margin-bottom: 0;
}

.settings-section h3 {
    font-size: var(--font-size-md);
    color: var(--text-primary);
    font-weight: 500;
    margin-bottom: var(--spacing-md);
}

.setting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-md) 0;
    border-bottom: 1px solid var(--border-light);
}

.setting-item:last-child {
    border-bottom: none;
}

.setting-label {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
}

.setting-label-text {
    font-size: var(--font-size-sm);
    color: var(--text-primary);
    font-weight: 500;
}

.setting-label-description {
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
}

.toggle-switch {
    position: relative;
    width: 44px;
    height: 24px;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--border-color);
    border-radius: 24px;
    transition: 0.3s;
}

.toggle-slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
}

.toggle-switch input:checked + .toggle-slider {
    background-color: var(--primary-color);
}

.toggle-switch input:checked + .toggle-slider:before {
    transform: translateX(20px);
}

.modal-footer {
    padding: var(--spacing-md) var(--spacing-lg);
    border-top: 1px solid var(--border-color);
    display: flex;
    gap: var(--spacing-sm);
    justify-content: flex-end;
}

.modal-button {
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-sm);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
}

.modal-button.primary {
    background: var(--primary-color);
    color: white;
}

.modal-button.primary:hover:not(:disabled) {
    background: var(--primary-dark);
}

.modal-button.secondary {
    background: var(--bg-secondary);
    color: var(--text-primary);
}

.modal-button.secondary:hover {
    background: var(--border-color);
}

.modal-button:disabled {
    background: var(--text-light);
    cursor: not-allowed;
    opacity: 0.6;
}

.danger-zone {
    margin-top: var(--spacing-lg);
    padding-top: var(--spacing-lg);
    border-top: 1px solid var(--border-color);
}

.danger-button {
    background: var(--danger-color);
    color: white;
    width: 100%;
    padding: var(--spacing-md);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-sm);
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
}

.danger-button:hover {
    opacity: 0.9;
}
`, "",{"version":3,"sources":["webpack://./src/components/styles/settings-modal.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,+BAA+B;IAC/B,4BAA4B;IAC5B,UAAU;IACV,gBAAgB;IAChB,eAAe;IACf,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,4CAA4C;IAC5C,4CAA4C;IAC5C,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA;IACI,+BAA+B;IAC/B,4BAA4B;IAC5B,WAAW;IACX,YAAY;IACZ,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,+BAA+B;IAC/B,0BAA0B;AAC9B;;AAEA;IACI,OAAO;IACP,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;IAC1B,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,4BAA4B;IAC5B,4CAA4C;AAChD;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,qCAAqC;IACrC,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,4CAA4C;IAC5C,yCAAyC;IACzC,aAAa;IACb,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;IACI,4CAA4C;IAC5C,+BAA+B;IAC/B,8BAA8B;IAC9B,gBAAgB;IAChB,eAAe;IACf,2BAA2B;AAC/B;;AAEA;IACI,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;IAC/B,0BAA0B;AAC9B;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,8BAA8B;IAC9B,yCAAyC;AAC7C;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,WAAW;IACX,0BAA0B;IAC1B,+BAA+B;IAC/B,8BAA8B;IAC9B,gBAAgB;IAChB,eAAe;IACf,wBAAwB;AAC5B;;AAEA;IACI,YAAY;AAChB","sourcesContent":["/**\n * Settings Modal Styles\n */\n\n.modal-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1000;\n}\n\n.modal {\n    background: var(--bg-primary);\n    border-radius: var(--radius-lg);\n    box-shadow: var(--shadow-lg);\n    width: 90%;\n    max-width: 360px;\n    max-height: 80%;\n    display: flex;\n    flex-direction: column;\n}\n\n.modal-header {\n    padding: var(--spacing-md) var(--spacing-lg);\n    border-bottom: 1px solid var(--border-color);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.modal-header h2 {\n    font-size: var(--font-size-lg);\n    color: var(--text-primary);\n    font-weight: 500;\n}\n\n.modal-close-button {\n    background: var(--bg-secondary);\n    color: var(--text-secondary);\n    width: 28px;\n    height: 28px;\n    border-radius: var(--radius-sm);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    transition: background 0.2s;\n}\n\n.modal-close-button:hover {\n    background: var(--border-color);\n    color: var(--text-primary);\n}\n\n.modal-body {\n    flex: 1;\n    overflow-y: auto;\n    padding: var(--spacing-lg);\n}\n\n.settings-section {\n    margin-bottom: var(--spacing-lg);\n}\n\n.settings-section:last-child {\n    margin-bottom: 0;\n}\n\n.settings-section h3 {\n    font-size: var(--font-size-md);\n    color: var(--text-primary);\n    font-weight: 500;\n    margin-bottom: var(--spacing-md);\n}\n\n.setting-item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--spacing-md) 0;\n    border-bottom: 1px solid var(--border-light);\n}\n\n.setting-item:last-child {\n    border-bottom: none;\n}\n\n.setting-label {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-xs);\n}\n\n.setting-label-text {\n    font-size: var(--font-size-sm);\n    color: var(--text-primary);\n    font-weight: 500;\n}\n\n.setting-label-description {\n    font-size: var(--font-size-xs);\n    color: var(--text-secondary);\n}\n\n.toggle-switch {\n    position: relative;\n    width: 44px;\n    height: 24px;\n}\n\n.toggle-switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.toggle-slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: var(--border-color);\n    border-radius: 24px;\n    transition: 0.3s;\n}\n\n.toggle-slider:before {\n    position: absolute;\n    content: \"\";\n    height: 18px;\n    width: 18px;\n    left: 3px;\n    bottom: 3px;\n    background-color: white;\n    border-radius: 50%;\n    transition: 0.3s;\n}\n\n.toggle-switch input:checked + .toggle-slider {\n    background-color: var(--primary-color);\n}\n\n.toggle-switch input:checked + .toggle-slider:before {\n    transform: translateX(20px);\n}\n\n.modal-footer {\n    padding: var(--spacing-md) var(--spacing-lg);\n    border-top: 1px solid var(--border-color);\n    display: flex;\n    gap: var(--spacing-sm);\n    justify-content: flex-end;\n}\n\n.modal-button {\n    padding: var(--spacing-sm) var(--spacing-lg);\n    border-radius: var(--radius-sm);\n    font-size: var(--font-size-sm);\n    font-weight: 500;\n    cursor: pointer;\n    transition: background 0.2s;\n}\n\n.modal-button.primary {\n    background: var(--primary-color);\n    color: white;\n}\n\n.modal-button.primary:hover:not(:disabled) {\n    background: var(--primary-dark);\n}\n\n.modal-button.secondary {\n    background: var(--bg-secondary);\n    color: var(--text-primary);\n}\n\n.modal-button.secondary:hover {\n    background: var(--border-color);\n}\n\n.modal-button:disabled {\n    background: var(--text-light);\n    cursor: not-allowed;\n    opacity: 0.6;\n}\n\n.danger-zone {\n    margin-top: var(--spacing-lg);\n    padding-top: var(--spacing-lg);\n    border-top: 1px solid var(--border-color);\n}\n\n.danger-button {\n    background: var(--danger-color);\n    color: white;\n    width: 100%;\n    padding: var(--spacing-md);\n    border-radius: var(--radius-sm);\n    font-size: var(--font-size-sm);\n    font-weight: 500;\n    cursor: pointer;\n    transition: opacity 0.2s;\n}\n\n.danger-button:hover {\n    opacity: 0.9;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 877:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Main Application Stylesheet
 * Comprehensive styling for all components
 */

:root {
    --primary-color: #007bff;
    --primary-hover: #0056b3;
    --secondary-color: #6c757d;
    --danger-color: #dc3545;
    --success-color: #28a745;
    --warning-color: #ffc107;
    --info-color: #17a2b8;

    --text-primary: #212529;
    --text-secondary: #6c757d;
    --text-light: #f8f9fa;

    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --bg-tertiary: #e9ecef;

    --border-color: #dee2e6;
    --border-radius: 8px;

    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.15);
    --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.2);

    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 12px;
    --spacing-lg: 16px;
    --spacing-xl: 24px;
    --spacing-2xl: 32px;

    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
    --font-size-sm: 12px;
    --font-size-base: 14px;
    --font-size-lg: 16px;
    --font-size-xl: 20px;
    --font-size-2xl: 24px;

    --transition: all 0.3s ease;
}

/* ==================== RESET & GLOBALS ==================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%;
}

body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    color: var(--text-primary);
    background-color: var(--bg-primary);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

/* ==================== COMPONENTS ==================== */

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    border: none;
    border-radius: var(--border-radius);
    font-size: var(--font-size-base);
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
    white-space: nowrap;
    user-select: none;
}

.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
    border: 2px solid var(--primary-color);
}

.btn-primary:hover:not(:disabled) {
    background-color: var(--primary-hover);
    border-color: var(--primary-hover);
    box-shadow: var(--shadow-md);
}

.btn-secondary {
    background-color: var(--secondary-color);
    color: white;
    border: 2px solid var(--secondary-color);
}

.btn-secondary:hover:not(:disabled) {
    background-color: #5a6268;
    border-color: #5a6268;
}

.btn-small {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-sm);
}

.btn-large {
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: var(--font-size-lg);
    width: 100%;
}

.btn-link {
    background: none;
    border: none;
    color: var(--primary-color);
    cursor: pointer;
    font-size: var(--font-size-sm);
    padding: var(--spacing-sm);
    text-decoration: underline;
}

.btn-link:hover {
    color: var(--primary-hover);
}

.btn-icon {
    background: none;
    border: none;
    cursor: pointer;
    font-size: var(--font-size-xl);
    padding: var(--spacing-sm);
    border-radius: 4px;
    transition: var(--transition);
}

.btn-icon:hover {
    background-color: var(--bg-tertiary);
}

/* Forms */
.form-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
}

.form-group label {
    font-weight: 500;
    color: var(--text-primary);
}

.form-group input,
.form-group textarea {
    padding: var(--spacing-md);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
}

.form-group input:disabled,
.form-group textarea:disabled {
    background-color: var(--bg-secondary);
    color: var(--text-secondary);
    cursor: not-allowed;
}

.help-text {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
}

/* Badges */
.unread-badge,
.user-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    padding: 0 var(--spacing-xs);
    background-color: var(--danger-color);
    color: white;
    border-radius: 50%;
    font-weight: bold;
    font-size: var(--font-size-sm);
}

/* Error/Success Messages */
.error-message {
    padding: var(--spacing-md);
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    border-radius: var(--border-radius);
    font-size: var(--font-size-sm);
}

.success-message {
    padding: var(--spacing-md);
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    border-radius: var(--border-radius);
    font-size: var(--font-size-sm);
}

.status-message {
    padding: var(--spacing-md);
    background-color: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
    border-radius: var(--border-radius);
    font-size: var(--font-size-sm);
}

/* Loading Spinner */
.spinner {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-top-color: var(--primary-color);
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Empty State */
.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-2xl);
    text-align: center;
    color: var(--text-secondary);
}

.empty-state-icon {
    font-size: 48px;
    margin-bottom: var(--spacing-lg);
}

.empty-state p {
    margin-bottom: var(--spacing-sm);
}

/* ==================== LAYOUT ==================== */

.chat-app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

/* ==================== LOGIN SCREEN ==================== */

.login-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: var(--spacing-lg);
}

.login-container {
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg);
    padding: var(--spacing-2xl);
    width: 100%;
    max-width: 400px;
}

.login-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
}

.logo {
    font-size: 48px;
    margin-bottom: var(--spacing-md);
}

.login-header h1 {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-sm);
}

.subtitle {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.advanced-options {
    background-color: var(--bg-secondary);
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
    margin-top: var(--spacing-md);
}

.info-box {
    background-color: #d1ecf1;
    border: 1px solid #bee5eb;
    border-radius: var(--border-radius);
    padding: var(--spacing-md);
    font-size: var(--font-size-sm);
}

.info-box h4 {
    margin-bottom: var(--spacing-sm);
    color: #0c5460;
}

.info-box ul {
    list-style: none;
    padding-left: var(--spacing-md);
}

.info-box li {
    margin-bottom: var(--spacing-xs);
}

.info-box code {
    background-color: #f8f9fa;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: monospace;
    font-size: var(--font-size-sm);
}

.login-footer {
    text-align: center;
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    margin-top: var(--spacing-lg);
}

/* ==================== LOADING SCREEN ==================== */

.loading-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-lg);
    color: white;
}

.loading-message {
    font-size: var(--font-size-lg);
    font-weight: 500;
}

/* ==================== CHAT SCREEN ==================== */

.chat-screen {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: var(--bg-primary);
}

.chat-layout {
    display: flex;
    width: 100%;
    height: 100%;
}

/* Sidebar */
.sidebar {
    width: 300px;
    background-color: var(--bg-primary);
    border-right: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.sidebar-header {
    padding: var(--spacing-lg);
    border-bottom: 1px solid var(--border-color);
}

.sidebar-header h2 {
    font-size: var(--font-size-xl);
    margin-bottom: var(--spacing-md);
}

.user-info {
    display: flex;
    gap: var(--spacing-md);
    align-items: center;
}

.user-status {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    flex: 1;
}

.username {
    font-weight: 600;
    font-size: var(--font-size-base);
}

.connection-status {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
}

.connection-status.connected {
    color: var(--success-color);
}

.connection-status.disconnected {
    color: var(--danger-color);
}

.unread-indicator {
    background-color: #fff3cd;
    border: 1px solid #ffeeba;
    color: #856404;
    padding: var(--spacing-md);
    margin: var(--spacing-md);
    border-radius: var(--border-radius);
    text-align: center;
    font-weight: 500;
}

.search-box {
    padding: var(--spacing-md);
}

.search-box input {
    width: 100%;
}

.conversations-list {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-sm);
}

.conversations-list.empty {
    display: flex;
    align-items: center;
    justify-content: center;
}

.conversation-item {
    display: flex;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    position: relative;
}

.conversation-item:hover {
    background-color: var(--bg-secondary);
}

.conversation-item.active {
    background-color: #e3f2fd;
    border-left: 3px solid var(--primary-color);
}

.conversation-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    font-weight: bold;
    flex-shrink: 0;
}

.conversation-content {
    flex: 1;
    overflow: hidden;
}

.conversation-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: var(--spacing-xs);
}

.conversation-name {
    font-size: var(--font-size-base);
    font-weight: 600;
    margin: 0;
}

.conversation-time {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
}

.conversation-meta {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    margin: 0;
}

.sidebar-footer {
    padding: var(--spacing-lg);
    border-top: 1px solid var(--border-color);
    display: flex;
    gap: var(--spacing-md);
}

.sidebar-footer .btn {
    flex: 1;
}

/* Chat Area */
.chat-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-secondary);
}

.no-conversation-selected {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
}

/* ==================== CHAT WINDOW ==================== */

.chat-window {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-lg);
    background-color: var(--bg-primary);
    border-bottom: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
}

.chat-header-left {
    display: flex;
    gap: var(--spacing-md);
    align-items: center;
}

.chat-user-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    font-weight: bold;
}

.chat-user-info h3 {
    font-size: var(--font-size-lg);
    margin: 0;
}

.chat-status {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
}

.messages-container {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.loading-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-md);
    color: var(--text-secondary);
}

.empty-chat {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--text-secondary);
}

.empty-icon {
    font-size: 64px;
    margin-bottom: var(--spacing-lg);
}

.message-bubble {
    display: flex;
    margin-bottom: var(--spacing-md);
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.message-bubble.own {
    justify-content: flex-end;
}

.message-bubble.other {
    justify-content: flex-start;
}

.message-content {
    max-width: 70%;
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    word-wrap: break-word;
}

.message-bubble.own .message-content {
    background-color: var(--primary-color);
    color: white;
}

.message-bubble.other .message-content {
    background-color: var(--bg-tertiary);
    color: var(--text-primary);
}

.message-text {
    margin: 0 0 var(--spacing-xs) 0;
    line-height: 1.4;
}

.message-time {
    font-size: var(--font-size-sm);
    opacity: 0.7;
}

.read-receipt {
    margin-left: var(--spacing-xs);
    font-weight: bold;
}

/* Message Input */
.message-input-area {
    background-color: var(--bg-primary);
    border-top: 1px solid var(--border-color);
    padding: var(--spacing-lg);
}

.message-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.input-wrapper {
    display: flex;
    gap: var(--spacing-sm);
}

.message-input {
    flex: 1;
    padding: var(--spacing-md);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: var(--font-size-base);
    font-family: var(--font-family);
}

.message-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
}

.btn-send {
    padding: var(--spacing-md) var(--spacing-lg);
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: var(--font-size-lg);
    transition: var(--transition);
}

.btn-send:hover:not(:disabled) {
    background-color: var(--primary-hover);
}

.btn-send:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.char-counter {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    text-align: right;
}

/* ==================== MODALS ==================== */

.settings-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.settings-modal {
    background-color: var(--bg-primary);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-lg);
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-lg);
    border-bottom: 1px solid var(--border-color);
}

.modal-header h2 {
    margin: 0;
}

.btn-close {
    background: none;
    border: none;
    font-size: var(--font-size-xl);
    cursor: pointer;
    color: var(--text-secondary);
    padding: var(--spacing-sm);
}

.btn-close:hover {
    color: var(--text-primary);
}

.modal-content {
    padding: var(--spacing-lg);
}

.settings-group {
    margin-bottom: var(--spacing-lg);
}

.setting-item {
    display: flex;
    gap: var(--spacing-md);
    align-items: flex-start;
    cursor: pointer;
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    transition: var(--transition);
}

.setting-item:hover {
    background-color: var(--bg-secondary);
}

.setting-item input[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin-top: 2px;
    cursor: pointer;
}

.setting-label {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    flex: 1;
}

.setting-label strong {
    color: var(--text-primary);
}

.setting-label small {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
}

.settings-info {
    background-color: var(--bg-secondary);
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
}

.settings-info p {
    margin-bottom: var(--spacing-md);
    font-weight: 600;
}

.settings-info ul {
    list-style: none;
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
}

.settings-info li {
    margin-bottom: var(--spacing-sm);
}

.debug-section {
    margin-top: var(--spacing-lg);
    padding-top: var(--spacing-lg);
    border-top: 1px solid var(--border-color);
    text-align: center;
}

.debug-section small {
    display: block;
    color: var(--text-secondary);
    margin-top: var(--spacing-sm);
}

.modal-footer {
    display: flex;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    border-top: 1px solid var(--border-color);
    justify-content: flex-end;
}

.modal-footer .btn {
    min-width: 100px;
}

/* ==================== RESPONSIVE ==================== */

@media (max-width: 768px) {
    .chat-layout {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        height: 200px;
        border-right: none;
        border-bottom: 1px solid var(--border-color);
    }

    .message-content {
        max-width: 85%;
    }

    .settings-modal {
        width: 90%;
    }
}

/* ==================== SCROLLBAR ==================== */

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-track {
    background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
    background: var(--border-color);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--text-secondary);
}`, "",{"version":3,"sources":["webpack://./src/styles/app.css"],"names":[],"mappings":"AAAA;;;EAGE;;AAEF;IACI,wBAAwB;IACxB,wBAAwB;IACxB,0BAA0B;IAC1B,uBAAuB;IACvB,wBAAwB;IACxB,wBAAwB;IACxB,qBAAqB;;IAErB,uBAAuB;IACvB,yBAAyB;IACzB,qBAAqB;;IAErB,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;;IAEtB,uBAAuB;IACvB,oBAAoB;;IAEpB,yCAAyC;IACzC,0CAA0C;IAC1C,2CAA2C;;IAE3C,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;;IAEnB,sGAAsG;IACtG,oBAAoB;IACpB,sBAAsB;IACtB,oBAAoB;IACpB,oBAAoB;IACpB,qBAAqB;;IAErB,2BAA2B;AAC/B;;AAEA,8DAA8D;;AAE9D;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,+BAA+B;IAC/B,gCAAgC;IAChC,0BAA0B;IAC1B,mCAAmC;IACnC,gBAAgB;IAChB,mCAAmC;AACvC;;AAEA,yDAAyD;;AAEzD,YAAY;AACZ;IACI,oBAAoB;IACpB,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,4CAA4C;IAC5C,YAAY;IACZ,mCAAmC;IACnC,gCAAgC;IAChC,gBAAgB;IAChB,eAAe;IACf,6BAA6B;IAC7B,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,sCAAsC;AAC1C;;AAEA;IACI,sCAAsC;IACtC,kCAAkC;IAClC,4BAA4B;AAChC;;AAEA;IACI,wCAAwC;IACxC,YAAY;IACZ,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,4CAA4C;IAC5C,8BAA8B;AAClC;;AAEA;IACI,4CAA4C;IAC5C,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,2BAA2B;IAC3B,eAAe;IACf,8BAA8B;IAC9B,0BAA0B;IAC1B,0BAA0B;AAC9B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,8BAA8B;IAC9B,0BAA0B;IAC1B,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,oCAAoC;AACxC;;AAEA,UAAU;AACV;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA;;IAEI,0BAA0B;IAC1B,qCAAqC;IACrC,mCAAmC;IACnC,+BAA+B;IAC/B,gCAAgC;IAChC,6BAA6B;AACjC;;AAEA;;IAEI,aAAa;IACb,kCAAkC;IAClC,6CAA6C;AACjD;;AAEA;;IAEI,qCAAqC;IACrC,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA,WAAW;AACX;;IAEI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,4BAA4B;IAC5B,qCAAqC;IACrC,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,8BAA8B;AAClC;;AAEA,2BAA2B;AAC3B;IACI,0BAA0B;IAC1B,yBAAyB;IACzB,cAAc;IACd,yBAAyB;IACzB,mCAAmC;IACnC,8BAA8B;AAClC;;AAEA;IACI,0BAA0B;IAC1B,yBAAyB;IACzB,cAAc;IACd,yBAAyB;IACzB,mCAAmC;IACnC,8BAA8B;AAClC;;AAEA;IACI,0BAA0B;IAC1B,yBAAyB;IACzB,cAAc;IACd,yBAAyB;IACzB,mCAAmC;IACnC,8BAA8B;AAClC;;AAEA,oBAAoB;AACpB;IACI,qBAAqB;IACrB,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,sCAAsC;IACtC,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,KAAK,yBAAyB,EAAE;AACpC;;AAEA,gBAAgB;AAChB;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,2BAA2B;IAC3B,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;AAEA,qDAAqD;;AAErD;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA,2DAA2D;;AAE3D;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,6DAA6D;IAC7D,0BAA0B;AAC9B;;AAEA;IACI,iBAAiB;IACjB,mCAAmC;IACnC,4BAA4B;IAC5B,2BAA2B;IAC3B,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,+BAA+B;IAC/B,gCAAgC;AACpC;;AAEA;IACI,4BAA4B;IAC5B,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,qCAAqC;IACrC,mCAAmC;IACnC,0BAA0B;IAC1B,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,mCAAmC;IACnC,0BAA0B;IAC1B,8BAA8B;AAClC;;AAEA;IACI,gCAAgC;IAChC,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,+BAA+B;AACnC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,4BAA4B;IAC5B,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA,6DAA6D;;AAE7D;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,6DAA6D;AACjE;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA,0DAA0D;;AAE1D;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;AAChB;;AAEA,YAAY;AACZ;IACI,YAAY;IACZ,mCAAmC;IACnC,2CAA2C;IAC3C,aAAa;IACb,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;IAC1B,4CAA4C;AAChD;;AAEA;IACI,8BAA8B;IAC9B,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,OAAO;AACX;;AAEA;IACI,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,cAAc;IACd,0BAA0B;IAC1B,yBAAyB;IACzB,mCAAmC;IACnC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,OAAO;IACP,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,0BAA0B;IAC1B,gCAAgC;IAChC,mCAAmC;IACnC,eAAe;IACf,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,yBAAyB;IACzB,2CAA2C;AAC/C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,qDAAqD;IACrD,YAAY;IACZ,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,OAAO;IACP,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA;IACI,8BAA8B;IAC9B,4BAA4B;IAC5B,SAAS;AACb;;AAEA;IACI,0BAA0B;IAC1B,yCAAyC;IACzC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,OAAO;AACX;;AAEA,cAAc;AACd;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,qCAAqC;AACzC;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,4BAA4B;AAChC;;AAEA,0DAA0D;;AAE1D;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,0BAA0B;IAC1B,mCAAmC;IACnC,4CAA4C;IAC5C,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,qDAAqD;IACrD,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,4BAA4B;IAC5B,8BAA8B;AAClC;;AAEA;IACI,OAAO;IACP,gBAAgB;IAChB,0BAA0B;IAC1B,aAAa;IACb,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,gCAAgC;AACpC;;AAEA;IACI;QACI,UAAU;QACV,2BAA2B;IAC/B;IACA;QACI,UAAU;QACV,wBAAwB;IAC5B;AACJ;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,cAAc;IACd,0BAA0B;IAC1B,mCAAmC;IACnC,qBAAqB;AACzB;;AAEA;IACI,sCAAsC;IACtC,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,0BAA0B;AAC9B;;AAEA;IACI,+BAA+B;IAC/B,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;AACrB;;AAEA,kBAAkB;AAClB;IACI,mCAAmC;IACnC,yCAAyC;IACzC,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,OAAO;IACP,0BAA0B;IAC1B,qCAAqC;IACrC,mCAAmC;IACnC,gCAAgC;IAChC,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,6CAA6C;AACjD;;AAEA;IACI,4CAA4C;IAC5C,sCAAsC;IACtC,YAAY;IACZ,YAAY;IACZ,mCAAmC;IACnC,eAAe;IACf,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;IAC9B,4BAA4B;IAC5B,iBAAiB;AACrB;;AAEA,qDAAqD;;AAErD;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,mCAAmC;IACnC,4BAA4B;IAC5B,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI;QACI,UAAU;QACV,2BAA2B;IAC/B;IACA;QACI,UAAU;QACV,wBAAwB;IAC5B;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,0BAA0B;IAC1B,4CAA4C;AAChD;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,8BAA8B;IAC9B,eAAe;IACf,4BAA4B;IAC5B,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;IACf,0BAA0B;IAC1B,mCAAmC;IACnC,6BAA6B;AACjC;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,OAAO;AACX;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,4BAA4B;IAC5B,8BAA8B;AAClC;;AAEA;IACI,qCAAqC;IACrC,mCAAmC;IACnC,0BAA0B;IAC1B,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,8BAA8B;IAC9B,4BAA4B;AAChC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,6BAA6B;IAC7B,8BAA8B;IAC9B,yCAAyC;IACzC,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,0BAA0B;IAC1B,yCAAyC;IACzC,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;AACpB;;AAEA,yDAAyD;;AAEzD;IACI;QACI,sBAAsB;IAC1B;;IAEA;QACI,WAAW;QACX,aAAa;QACb,kBAAkB;QAClB,4CAA4C;IAChD;;IAEA;QACI,cAAc;IAClB;;IAEA;QACI,UAAU;IACd;AACJ;;AAEA,wDAAwD;;AAExD;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;AACrC","sourcesContent":["/**\n * Main Application Stylesheet\n * Comprehensive styling for all components\n */\n\n:root {\n    --primary-color: #007bff;\n    --primary-hover: #0056b3;\n    --secondary-color: #6c757d;\n    --danger-color: #dc3545;\n    --success-color: #28a745;\n    --warning-color: #ffc107;\n    --info-color: #17a2b8;\n\n    --text-primary: #212529;\n    --text-secondary: #6c757d;\n    --text-light: #f8f9fa;\n\n    --bg-primary: #ffffff;\n    --bg-secondary: #f8f9fa;\n    --bg-tertiary: #e9ecef;\n\n    --border-color: #dee2e6;\n    --border-radius: 8px;\n\n    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);\n    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.15);\n    --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.2);\n\n    --spacing-xs: 4px;\n    --spacing-sm: 8px;\n    --spacing-md: 12px;\n    --spacing-lg: 16px;\n    --spacing-xl: 24px;\n    --spacing-2xl: 32px;\n\n    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;\n    --font-size-sm: 12px;\n    --font-size-base: 14px;\n    --font-size-lg: 16px;\n    --font-size-xl: 20px;\n    --font-size-2xl: 24px;\n\n    --transition: all 0.3s ease;\n}\n\n/* ==================== RESET & GLOBALS ==================== */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n}\n\nbody {\n    font-family: var(--font-family);\n    font-size: var(--font-size-base);\n    color: var(--text-primary);\n    background-color: var(--bg-primary);\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n}\n\n/* ==================== COMPONENTS ==================== */\n\n/* Buttons */\n.btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-sm);\n    padding: var(--spacing-sm) var(--spacing-md);\n    border: none;\n    border-radius: var(--border-radius);\n    font-size: var(--font-size-base);\n    font-weight: 500;\n    cursor: pointer;\n    transition: var(--transition);\n    white-space: nowrap;\n    user-select: none;\n}\n\n.btn:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n}\n\n.btn-primary {\n    background-color: var(--primary-color);\n    color: white;\n    border: 2px solid var(--primary-color);\n}\n\n.btn-primary:hover:not(:disabled) {\n    background-color: var(--primary-hover);\n    border-color: var(--primary-hover);\n    box-shadow: var(--shadow-md);\n}\n\n.btn-secondary {\n    background-color: var(--secondary-color);\n    color: white;\n    border: 2px solid var(--secondary-color);\n}\n\n.btn-secondary:hover:not(:disabled) {\n    background-color: #5a6268;\n    border-color: #5a6268;\n}\n\n.btn-small {\n    padding: var(--spacing-xs) var(--spacing-sm);\n    font-size: var(--font-size-sm);\n}\n\n.btn-large {\n    padding: var(--spacing-md) var(--spacing-lg);\n    font-size: var(--font-size-lg);\n    width: 100%;\n}\n\n.btn-link {\n    background: none;\n    border: none;\n    color: var(--primary-color);\n    cursor: pointer;\n    font-size: var(--font-size-sm);\n    padding: var(--spacing-sm);\n    text-decoration: underline;\n}\n\n.btn-link:hover {\n    color: var(--primary-hover);\n}\n\n.btn-icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    font-size: var(--font-size-xl);\n    padding: var(--spacing-sm);\n    border-radius: 4px;\n    transition: var(--transition);\n}\n\n.btn-icon:hover {\n    background-color: var(--bg-tertiary);\n}\n\n/* Forms */\n.form-group {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-sm);\n    margin-bottom: var(--spacing-lg);\n}\n\n.form-group label {\n    font-weight: 500;\n    color: var(--text-primary);\n}\n\n.form-group input,\n.form-group textarea {\n    padding: var(--spacing-md);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius);\n    font-family: var(--font-family);\n    font-size: var(--font-size-base);\n    transition: var(--transition);\n}\n\n.form-group input:focus,\n.form-group textarea:focus {\n    outline: none;\n    border-color: var(--primary-color);\n    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);\n}\n\n.form-group input:disabled,\n.form-group textarea:disabled {\n    background-color: var(--bg-secondary);\n    color: var(--text-secondary);\n    cursor: not-allowed;\n}\n\n.help-text {\n    font-size: var(--font-size-sm);\n    color: var(--text-secondary);\n}\n\n/* Badges */\n.unread-badge,\n.user-badge {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 24px;\n    height: 24px;\n    padding: 0 var(--spacing-xs);\n    background-color: var(--danger-color);\n    color: white;\n    border-radius: 50%;\n    font-weight: bold;\n    font-size: var(--font-size-sm);\n}\n\n/* Error/Success Messages */\n.error-message {\n    padding: var(--spacing-md);\n    background-color: #f8d7da;\n    color: #721c24;\n    border: 1px solid #f5c6cb;\n    border-radius: var(--border-radius);\n    font-size: var(--font-size-sm);\n}\n\n.success-message {\n    padding: var(--spacing-md);\n    background-color: #d4edda;\n    color: #155724;\n    border: 1px solid #c3e6cb;\n    border-radius: var(--border-radius);\n    font-size: var(--font-size-sm);\n}\n\n.status-message {\n    padding: var(--spacing-md);\n    background-color: #d1ecf1;\n    color: #0c5460;\n    border: 1px solid #bee5eb;\n    border-radius: var(--border-radius);\n    font-size: var(--font-size-sm);\n}\n\n/* Loading Spinner */\n.spinner {\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    border: 2px solid rgba(0, 0, 0, 0.1);\n    border-top-color: var(--primary-color);\n    border-radius: 50%;\n    animation: spin 0.6s linear infinite;\n}\n\n@keyframes spin {\n    to { transform: rotate(360deg); }\n}\n\n/* Empty State */\n.empty-state {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: var(--spacing-2xl);\n    text-align: center;\n    color: var(--text-secondary);\n}\n\n.empty-state-icon {\n    font-size: 48px;\n    margin-bottom: var(--spacing-lg);\n}\n\n.empty-state p {\n    margin-bottom: var(--spacing-sm);\n}\n\n/* ==================== LAYOUT ==================== */\n\n.chat-app {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n/* ==================== LOGIN SCREEN ==================== */\n\n.login-screen {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    padding: var(--spacing-lg);\n}\n\n.login-container {\n    background: white;\n    border-radius: var(--border-radius);\n    box-shadow: var(--shadow-lg);\n    padding: var(--spacing-2xl);\n    width: 100%;\n    max-width: 400px;\n}\n\n.login-header {\n    text-align: center;\n    margin-bottom: var(--spacing-2xl);\n}\n\n.logo {\n    font-size: 48px;\n    margin-bottom: var(--spacing-md);\n}\n\n.login-header h1 {\n    font-size: var(--font-size-2xl);\n    margin-bottom: var(--spacing-sm);\n}\n\n.subtitle {\n    color: var(--text-secondary);\n    font-size: var(--font-size-sm);\n}\n\n.login-form {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-lg);\n}\n\n.advanced-options {\n    background-color: var(--bg-secondary);\n    border-radius: var(--border-radius);\n    padding: var(--spacing-lg);\n    margin-top: var(--spacing-md);\n}\n\n.info-box {\n    background-color: #d1ecf1;\n    border: 1px solid #bee5eb;\n    border-radius: var(--border-radius);\n    padding: var(--spacing-md);\n    font-size: var(--font-size-sm);\n}\n\n.info-box h4 {\n    margin-bottom: var(--spacing-sm);\n    color: #0c5460;\n}\n\n.info-box ul {\n    list-style: none;\n    padding-left: var(--spacing-md);\n}\n\n.info-box li {\n    margin-bottom: var(--spacing-xs);\n}\n\n.info-box code {\n    background-color: #f8f9fa;\n    padding: 2px 6px;\n    border-radius: 3px;\n    font-family: monospace;\n    font-size: var(--font-size-sm);\n}\n\n.login-footer {\n    text-align: center;\n    color: var(--text-secondary);\n    font-size: var(--font-size-sm);\n    margin-top: var(--spacing-lg);\n}\n\n/* ==================== LOADING SCREEN ==================== */\n\n.loading-screen {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n.loading-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--spacing-lg);\n    color: white;\n}\n\n.loading-message {\n    font-size: var(--font-size-lg);\n    font-weight: 500;\n}\n\n/* ==================== CHAT SCREEN ==================== */\n\n.chat-screen {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    background-color: var(--bg-primary);\n}\n\n.chat-layout {\n    display: flex;\n    width: 100%;\n    height: 100%;\n}\n\n/* Sidebar */\n.sidebar {\n    width: 300px;\n    background-color: var(--bg-primary);\n    border-right: 1px solid var(--border-color);\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.sidebar-header {\n    padding: var(--spacing-lg);\n    border-bottom: 1px solid var(--border-color);\n}\n\n.sidebar-header h2 {\n    font-size: var(--font-size-xl);\n    margin-bottom: var(--spacing-md);\n}\n\n.user-info {\n    display: flex;\n    gap: var(--spacing-md);\n    align-items: center;\n}\n\n.user-status {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-xs);\n    flex: 1;\n}\n\n.username {\n    font-weight: 600;\n    font-size: var(--font-size-base);\n}\n\n.connection-status {\n    font-size: var(--font-size-sm);\n    color: var(--text-secondary);\n}\n\n.connection-status.connected {\n    color: var(--success-color);\n}\n\n.connection-status.disconnected {\n    color: var(--danger-color);\n}\n\n.unread-indicator {\n    background-color: #fff3cd;\n    border: 1px solid #ffeeba;\n    color: #856404;\n    padding: var(--spacing-md);\n    margin: var(--spacing-md);\n    border-radius: var(--border-radius);\n    text-align: center;\n    font-weight: 500;\n}\n\n.search-box {\n    padding: var(--spacing-md);\n}\n\n.search-box input {\n    width: 100%;\n}\n\n.conversations-list {\n    flex: 1;\n    overflow-y: auto;\n    padding: var(--spacing-sm);\n}\n\n.conversations-list.empty {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.conversation-item {\n    display: flex;\n    gap: var(--spacing-md);\n    padding: var(--spacing-md);\n    margin-bottom: var(--spacing-sm);\n    border-radius: var(--border-radius);\n    cursor: pointer;\n    transition: var(--transition);\n    position: relative;\n}\n\n.conversation-item:hover {\n    background-color: var(--bg-secondary);\n}\n\n.conversation-item.active {\n    background-color: #e3f2fd;\n    border-left: 3px solid var(--primary-color);\n}\n\n.conversation-avatar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background: linear-gradient(135deg, #667eea, #764ba2);\n    color: white;\n    font-weight: bold;\n    flex-shrink: 0;\n}\n\n.conversation-content {\n    flex: 1;\n    overflow: hidden;\n}\n\n.conversation-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    margin-bottom: var(--spacing-xs);\n}\n\n.conversation-name {\n    font-size: var(--font-size-base);\n    font-weight: 600;\n    margin: 0;\n}\n\n.conversation-time {\n    font-size: var(--font-size-sm);\n    color: var(--text-secondary);\n}\n\n.conversation-meta {\n    font-size: var(--font-size-sm);\n    color: var(--text-secondary);\n    margin: 0;\n}\n\n.sidebar-footer {\n    padding: var(--spacing-lg);\n    border-top: 1px solid var(--border-color);\n    display: flex;\n    gap: var(--spacing-md);\n}\n\n.sidebar-footer .btn {\n    flex: 1;\n}\n\n/* Chat Area */\n.chat-area {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--bg-secondary);\n}\n\n.no-conversation-selected {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: var(--text-secondary);\n}\n\n/* ==================== CHAT WINDOW ==================== */\n\n.chat-window {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.chat-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: var(--spacing-lg);\n    background-color: var(--bg-primary);\n    border-bottom: 1px solid var(--border-color);\n    box-shadow: var(--shadow-sm);\n}\n\n.chat-header-left {\n    display: flex;\n    gap: var(--spacing-md);\n    align-items: center;\n}\n\n.chat-user-avatar {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background: linear-gradient(135deg, #667eea, #764ba2);\n    color: white;\n    font-weight: bold;\n}\n\n.chat-user-info h3 {\n    font-size: var(--font-size-lg);\n    margin: 0;\n}\n\n.chat-status {\n    color: var(--text-secondary);\n    font-size: var(--font-size-sm);\n}\n\n.messages-container {\n    flex: 1;\n    overflow-y: auto;\n    padding: var(--spacing-lg);\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-md);\n}\n\n.loading-indicator {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: var(--spacing-md);\n    color: var(--text-secondary);\n}\n\n.empty-chat {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    color: var(--text-secondary);\n}\n\n.empty-icon {\n    font-size: 64px;\n    margin-bottom: var(--spacing-lg);\n}\n\n.message-bubble {\n    display: flex;\n    margin-bottom: var(--spacing-md);\n    animation: slideIn 0.3s ease-out;\n}\n\n@keyframes slideIn {\n    from {\n        opacity: 0;\n        transform: translateY(10px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n.message-bubble.own {\n    justify-content: flex-end;\n}\n\n.message-bubble.other {\n    justify-content: flex-start;\n}\n\n.message-content {\n    max-width: 70%;\n    padding: var(--spacing-md);\n    border-radius: var(--border-radius);\n    word-wrap: break-word;\n}\n\n.message-bubble.own .message-content {\n    background-color: var(--primary-color);\n    color: white;\n}\n\n.message-bubble.other .message-content {\n    background-color: var(--bg-tertiary);\n    color: var(--text-primary);\n}\n\n.message-text {\n    margin: 0 0 var(--spacing-xs) 0;\n    line-height: 1.4;\n}\n\n.message-time {\n    font-size: var(--font-size-sm);\n    opacity: 0.7;\n}\n\n.read-receipt {\n    margin-left: var(--spacing-xs);\n    font-weight: bold;\n}\n\n/* Message Input */\n.message-input-area {\n    background-color: var(--bg-primary);\n    border-top: 1px solid var(--border-color);\n    padding: var(--spacing-lg);\n}\n\n.message-form {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-sm);\n}\n\n.input-wrapper {\n    display: flex;\n    gap: var(--spacing-sm);\n}\n\n.message-input {\n    flex: 1;\n    padding: var(--spacing-md);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius);\n    font-size: var(--font-size-base);\n    font-family: var(--font-family);\n}\n\n.message-input:focus {\n    outline: none;\n    border-color: var(--primary-color);\n    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);\n}\n\n.btn-send {\n    padding: var(--spacing-md) var(--spacing-lg);\n    background-color: var(--primary-color);\n    color: white;\n    border: none;\n    border-radius: var(--border-radius);\n    cursor: pointer;\n    font-size: var(--font-size-lg);\n    transition: var(--transition);\n}\n\n.btn-send:hover:not(:disabled) {\n    background-color: var(--primary-hover);\n}\n\n.btn-send:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n}\n\n.char-counter {\n    font-size: var(--font-size-sm);\n    color: var(--text-secondary);\n    text-align: right;\n}\n\n/* ==================== MODALS ==================== */\n\n.settings-modal-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1000;\n}\n\n.settings-modal {\n    background-color: var(--bg-primary);\n    border-radius: var(--border-radius);\n    box-shadow: var(--shadow-lg);\n    width: 100%;\n    max-width: 500px;\n    max-height: 90vh;\n    overflow-y: auto;\n    animation: slideUp 0.3s ease-out;\n}\n\n@keyframes slideUp {\n    from {\n        opacity: 0;\n        transform: translateY(20px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n.modal-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: var(--spacing-lg);\n    border-bottom: 1px solid var(--border-color);\n}\n\n.modal-header h2 {\n    margin: 0;\n}\n\n.btn-close {\n    background: none;\n    border: none;\n    font-size: var(--font-size-xl);\n    cursor: pointer;\n    color: var(--text-secondary);\n    padding: var(--spacing-sm);\n}\n\n.btn-close:hover {\n    color: var(--text-primary);\n}\n\n.modal-content {\n    padding: var(--spacing-lg);\n}\n\n.settings-group {\n    margin-bottom: var(--spacing-lg);\n}\n\n.setting-item {\n    display: flex;\n    gap: var(--spacing-md);\n    align-items: flex-start;\n    cursor: pointer;\n    padding: var(--spacing-md);\n    border-radius: var(--border-radius);\n    transition: var(--transition);\n}\n\n.setting-item:hover {\n    background-color: var(--bg-secondary);\n}\n\n.setting-item input[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n    margin-top: 2px;\n    cursor: pointer;\n}\n\n.setting-label {\n    display: flex;\n    flex-direction: column;\n    gap: var(--spacing-xs);\n    flex: 1;\n}\n\n.setting-label strong {\n    color: var(--text-primary);\n}\n\n.setting-label small {\n    color: var(--text-secondary);\n    font-size: var(--font-size-sm);\n}\n\n.settings-info {\n    background-color: var(--bg-secondary);\n    border-radius: var(--border-radius);\n    padding: var(--spacing-lg);\n    margin-bottom: var(--spacing-lg);\n}\n\n.settings-info p {\n    margin-bottom: var(--spacing-md);\n    font-weight: 600;\n}\n\n.settings-info ul {\n    list-style: none;\n    font-size: var(--font-size-sm);\n    color: var(--text-secondary);\n}\n\n.settings-info li {\n    margin-bottom: var(--spacing-sm);\n}\n\n.debug-section {\n    margin-top: var(--spacing-lg);\n    padding-top: var(--spacing-lg);\n    border-top: 1px solid var(--border-color);\n    text-align: center;\n}\n\n.debug-section small {\n    display: block;\n    color: var(--text-secondary);\n    margin-top: var(--spacing-sm);\n}\n\n.modal-footer {\n    display: flex;\n    gap: var(--spacing-md);\n    padding: var(--spacing-lg);\n    border-top: 1px solid var(--border-color);\n    justify-content: flex-end;\n}\n\n.modal-footer .btn {\n    min-width: 100px;\n}\n\n/* ==================== RESPONSIVE ==================== */\n\n@media (max-width: 768px) {\n    .chat-layout {\n        flex-direction: column;\n    }\n\n    .sidebar {\n        width: 100%;\n        height: 200px;\n        border-right: none;\n        border-bottom: 1px solid var(--border-color);\n    }\n\n    .message-content {\n        max-width: 85%;\n    }\n\n    .settings-modal {\n        width: 90%;\n    }\n}\n\n/* ==================== SCROLLBAR ==================== */\n\n::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n}\n\n::-webkit-scrollbar-track {\n    background: var(--bg-secondary);\n}\n\n::-webkit-scrollbar-thumb {\n    background: var(--border-color);\n    border-radius: 4px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n    background: var(--text-secondary);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 961:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) // removed by dead control flow
{}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(551);
} else // removed by dead control flow
{}


/***/ }),

/***/ 982:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(463);
} else // removed by dead control flow
{}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(338);
;// ./src/services/Logger.ts
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
class Logger {
    constructor() {
        this.logs = [];
        this.isDevelopment = true;
        this.maxLogs = 500;
        this.isDevelopment = true;
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    formatConsoleMessage(level, module, message) {
        const timestamp = new Date().toLocaleTimeString();
        return `[${timestamp}] [${level}] [${module}] ${message}`;
    }
    debug(module, message, data) {
        this.log(LogLevel.DEBUG, module, message, data);
        if (this.isDevelopment) {
            console.debug(this.formatConsoleMessage(LogLevel.DEBUG, module, message), data);
        }
    }
    info(module, message, data) {
        this.log(LogLevel.INFO, module, message, data);
        console.log(this.formatConsoleMessage(LogLevel.INFO, module, message), data);
    }
    warn(module, message, data) {
        this.log(LogLevel.WARN, module, message, data);
        console.warn(this.formatConsoleMessage(LogLevel.WARN, module, message), data);
    }
    error(module, message, data) {
        this.log(LogLevel.ERROR, module, message, data);
        console.error(this.formatConsoleMessage(LogLevel.ERROR, module, message), data);
    }
    log(level, module, message, data) {
        const entry = {
            timestamp: new Date().toISOString(),
            level,
            module,
            message,
            data
        };
        this.logs.push(entry);
        if (this.logs.length > this.maxLogs) {
            this.logs = this.logs.slice(-this.maxLogs);
        }
    }
    getLogs() {
        return [...this.logs];
    }
    clearLogs() {
        this.logs = [];
        this.info('Logger', 'Logs cleared');
    }
    exportLogs() {
        return JSON.stringify(this.logs, null, 2);
    }
    downloadLogs() {
        const logsJson = this.exportLogs();
        const blob = new Blob([logsJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chat-logs-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
}
/* harmony default export */ const services_Logger = (Logger.getInstance());

;// ./src/types/index.ts
const DEFAULT_SETTINGS = {
    notificationSound: true,
    desktopNotifications: true,
    readReceipts: true,
    doNotDisturb: false
};
var ScreenType;
(function (ScreenType) {
    ScreenType["LOGIN"] = "LOGIN";
    ScreenType["CHAT"] = "CHAT";
    ScreenType["LOADING"] = "LOADING";
})(ScreenType || (ScreenType = {}));

;// ./src/services/StorageService.ts


class StorageService {
    constructor() {
        this.module = 'StorageService';
        this.KEYS = {
            USER_ID: 'userId',
            USERNAME: 'username',
            SERVER_ADDRESS: 'serverAddress',
            SETTINGS: 'settings',
            LAST_LOGIN: 'lastLoginTimestamp'
        };
        services_Logger.info(this.module, 'StorageService initialized');
    }
    static getInstance() {
        if (!StorageService.instance) {
            StorageService.instance = new StorageService();
        }
        return StorageService.instance;
    }
    async saveCredentials(userId, username, serverAddress) {
        try {
            services_Logger.debug(this.module, 'Saving credentials', { userId, username, serverAddress });
            const data = {
                userId,
                username,
                serverAddress,
                lastLoginTimestamp: Date.now()
            };
            await chrome.storage.local.set(data);
            services_Logger.info(this.module, 'Credentials saved successfully');
        }
        catch (error) {
            services_Logger.error(this.module, 'Failed to save credentials', error);
            throw error;
        }
    }
    async getCredentials() {
        try {
            services_Logger.debug(this.module, 'Getting saved credentials');
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
            services_Logger.debug(this.module, 'Retrieved credentials', {
                hasUserId: !!credentials.userId,
                hasUsername: !!credentials.username,
                hasServerAddress: !!credentials.serverAddress
            });
            return credentials;
        }
        catch (error) {
            services_Logger.error(this.module, 'Failed to get credentials', error);
            return { userId: null, username: null, serverAddress: null };
        }
    }
    async clearCredentials() {
        try {
            services_Logger.info(this.module, 'Clearing credentials');
            await chrome.storage.local.remove([
                this.KEYS.USER_ID,
                this.KEYS.USERNAME,
                this.KEYS.SERVER_ADDRESS,
                this.KEYS.LAST_LOGIN
            ]);
            services_Logger.info(this.module, 'Credentials cleared');
        }
        catch (error) {
            services_Logger.error(this.module, 'Failed to clear credentials', error);
            throw error;
        }
    }
    async saveSettings(settings) {
        try {
            services_Logger.debug(this.module, 'Saving settings', settings);
            await chrome.storage.local.set({
                [this.KEYS.SETTINGS]: settings
            });
            services_Logger.info(this.module, 'Settings saved successfully');
        }
        catch (error) {
            services_Logger.error(this.module, 'Failed to save settings', error);
            throw error;
        }
    }
    async getSettings() {
        try {
            services_Logger.debug(this.module, 'Getting settings');
            const result = await chrome.storage.local.get(this.KEYS.SETTINGS);
            const settings = result[this.KEYS.SETTINGS] || DEFAULT_SETTINGS;
            services_Logger.debug(this.module, 'Retrieved settings', settings);
            return settings;
        }
        catch (error) {
            services_Logger.error(this.module, 'Failed to get settings', error);
            return DEFAULT_SETTINGS;
        }
    }
    async updateSetting(key, value) {
        try {
            services_Logger.debug(this.module, 'Updating setting', { key, value });
            const settings = await this.getSettings();
            settings[key] = value;
            await this.saveSettings(settings);
            services_Logger.info(this.module, 'Setting updated successfully', { key });
        }
        catch (error) {
            services_Logger.error(this.module, 'Failed to update setting', error);
            throw error;
        }
    }
    async clearAll() {
        try {
            services_Logger.info(this.module, 'Clearing all storage');
            await chrome.storage.local.clear();
            services_Logger.info(this.module, 'All storage cleared');
        }
        catch (error) {
            services_Logger.error(this.module, 'Failed to clear storage', error);
            throw error;
        }
    }
    async getLastLoginTimestamp() {
        try {
            const result = await chrome.storage.local.get(this.KEYS.LAST_LOGIN);
            return result[this.KEYS.LAST_LOGIN] || null;
        }
        catch (error) {
            services_Logger.error(this.module, 'Failed to get last login timestamp', error);
            return null;
        }
    }
    async hasSavedCredentials() {
        const credentials = await this.getCredentials();
        return !!(credentials.userId && credentials.username && credentials.serverAddress);
    }
    async exportAllData() {
        try {
            services_Logger.debug(this.module, 'Exporting all storage data');
            const data = await chrome.storage.local.get(null);
            return data;
        }
        catch (error) {
            services_Logger.error(this.module, 'Failed to export data', error);
            return {};
        }
    }
}
/* harmony default export */ const services_StorageService = (StorageService.getInstance());

;// ./src/services/NotificationService.ts

class NotificationService {
    constructor() {
        this.module = 'NotificationService';
        this.audioElement = null;
        this.notificationAudio = chrome.runtime.getURL('assets/notification.mp3');
        services_Logger.info(this.module, 'NotificationService initialized');
        this.initializeAudio();
        this.requestNotificationPermission();
    }
    static getInstance() {
        if (!NotificationService.instance) {
            NotificationService.instance = new NotificationService();
        }
        return NotificationService.instance;
    }
    initializeAudio() {
        try {
            this.audioElement = new Audio(this.notificationAudio);
            this.audioElement.preload = 'auto';
            services_Logger.debug(this.module, 'Audio element initialized');
        }
        catch (error) {
            services_Logger.warn(this.module, 'Failed to initialize audio element', error);
        }
    }
    requestNotificationPermission() {
        if ('Notification' in window) {
            if (Notification.permission === 'default') {
                Notification.requestPermission()
                    .then((permission) => {
                    services_Logger.info(this.module, 'Notification permission requested', { permission });
                })
                    .catch((error) => {
                    services_Logger.warn(this.module, 'Failed to request notification permission', error);
                });
            }
        }
    }
    async playNotificationSound() {
        try {
            if (!this.audioElement) {
                services_Logger.warn(this.module, 'Audio element not initialized');
                return;
            }
            this.audioElement.currentTime = 0;
            await this.audioElement.play();
            services_Logger.debug(this.module, 'Notification sound played');
        }
        catch (error) {
            services_Logger.warn(this.module, 'Failed to play notification sound', error);
        }
    }
    showDesktopNotification(data, settings) {
        if (!settings.desktopNotifications) {
            services_Logger.debug(this.module, 'Desktop notifications disabled');
            return;
        }
        if (!('Notification' in window)) {
            services_Logger.warn(this.module, 'Notifications not supported in this browser');
            return;
        }
        if (Notification.permission !== 'granted') {
            services_Logger.warn(this.module, 'Notification permission not granted');
            return;
        }
        try {
            const title = `Message from ${data.senderUsername}`;
            const options = {
                icon: chrome.runtime.getURL('images/icon128.png'),
                badge: chrome.runtime.getURL('images/icon48.png'),
                tag: `message-${data.senderId}`,
                requireInteraction: false
            };
            if (data.messageContent) {
                options.body = data.messageContent;
            }
            const notification = new Notification(title, options);
            notification.addEventListener('click', () => {
                services_Logger.debug(this.module, 'Notification clicked');
                chrome.action.openPopup();
            });
            services_Logger.info(this.module, 'Desktop notification shown', { senderId: data.senderId });
        }
        catch (error) {
            services_Logger.error(this.module, 'Failed to show desktop notification', error);
        }
    }
    async notifyMessageReceived(data, settings) {
        services_Logger.info(this.module, 'Notifying message received', {
            senderId: data.senderId,
            username: data.senderUsername
        });
        if (settings.notificationSound) {
            await this.playNotificationSound();
        }
        this.showDesktopNotification(data, settings);
        this.updateBadge();
    }
    updateBadge(count) {
        try {
            if (count !== undefined && count > 0) {
                chrome.action.setBadgeText({ text: count.toString() });
                chrome.action.setBadgeBackgroundColor({ color: '#FF6B6B' });
                services_Logger.debug(this.module, 'Badge updated', { count });
            }
            else {
                chrome.action.setBadgeText({ text: '' });
                services_Logger.debug(this.module, 'Badge cleared');
            }
        }
        catch (error) {
            services_Logger.warn(this.module, 'Failed to update badge', error);
        }
    }
    clearNotifications() {
        try {
            chrome.notifications.getAll((notifications) => {
                Object.keys(notifications).forEach((notificationId) => {
                    chrome.notifications.clear(notificationId);
                });
            });
            services_Logger.debug(this.module, 'All notifications cleared');
        }
        catch (error) {
            services_Logger.warn(this.module, 'Failed to clear notifications', error);
        }
    }
    async playSuccessSound() {
        await this.playNotificationSound();
    }
    async playErrorSound() {
        try {
            if (!this.audioElement)
                return;
            this.audioElement.currentTime = 0;
            await this.audioElement.play();
            services_Logger.debug(this.module, 'Error sound played');
        }
        catch (error) {
            services_Logger.warn(this.module, 'Failed to play error sound', error);
        }
    }
    showToast(message, type = 'info') {
        services_Logger.debug(this.module, 'Toast shown', { message, type });
        const event = new CustomEvent('toast', {
            detail: { message, type }
        });
        window.dispatchEvent(event);
    }
    muteNotifications(durationMs) {
        services_Logger.info(this.module, 'Notifications muted for', { durationMs });
        const event = new CustomEvent('mute-notifications', {
            detail: { durationMs }
        });
        window.dispatchEvent(event);
    }
}
/* harmony default export */ const services_NotificationService = (NotificationService.getInstance());

;// ./src/services/StateManager.ts


class StateManager {
    constructor() {
        this.module = 'StateManager';
        this.state = {
            userId: null,
            username: null,
            serverAddress: null,
            currentChatUserId: null,
            onlineUsers: new Map(),
            conversations: {},
            unreadCount: 0,
            isConnected: false,
            isLoading: false
        };
        this.uiState = {
            currentScreen: ScreenType.LOGIN,
            selectedConversationId: null,
            isModalOpen: false
        };
        this.stateListeners = new Set();
        this.uiStateListeners = new Set();
        services_Logger.info(this.module, 'StateManager initialized');
    }
    static getInstance() {
        if (!StateManager.instance) {
            StateManager.instance = new StateManager();
        }
        return StateManager.instance;
    }
    getState() {
        return { ...this.state };
    }
    getUIState() {
        return { ...this.uiState };
    }
    setUserId(userId) {
        services_Logger.debug(this.module, 'Setting user ID', { userId });
        this.setState({ userId });
    }
    setUsername(username) {
        services_Logger.debug(this.module, 'Setting username', { username });
        this.setState({ username });
    }
    setServerAddress(serverAddress) {
        services_Logger.debug(this.module, 'Setting server address', { serverAddress });
        this.setState({ serverAddress });
    }
    setCurrentChatUserId(userId) {
        services_Logger.debug(this.module, 'Setting current chat user', { userId });
        this.setState({ currentChatUserId: userId });
    }
    setIsConnected(isConnected) {
        services_Logger.info(this.module, 'Setting connection status', { isConnected });
        this.setState({ isConnected });
    }
    setIsLoading(isLoading) {
        services_Logger.debug(this.module, 'Setting loading status', { isLoading });
        this.setState({ isLoading });
    }
    addOnlineUser(userId, user) {
        services_Logger.debug(this.module, 'Adding online user', { userId, username: user.username });
        const newUsers = new Map(this.state.onlineUsers);
        newUsers.set(userId, user);
        this.setState({ onlineUsers: newUsers });
    }
    removeOnlineUser(userId) {
        services_Logger.debug(this.module, 'Removing online user', { userId });
        const newUsers = new Map(this.state.onlineUsers);
        newUsers.delete(userId);
        this.setState({ onlineUsers: newUsers });
    }
    addConversation(userId, conversation) {
        services_Logger.debug(this.module, 'Adding conversation', {
            userId,
            otherUserId: conversation.otherUserId
        });
        this.setState({
            conversations: {
                ...this.state.conversations,
                [userId]: {
                    messages: this.state.conversations[userId]?.messages || [],
                    metadata: conversation
                }
            }
        });
    }
    addMessage(fromUserId, message) {
        services_Logger.debug(this.module, 'Adding message', {
            fromUserId,
            messageId: message.id
        });
        const conversations = { ...this.state.conversations };
        if (!conversations[fromUserId]) {
            conversations[fromUserId] = { messages: [], metadata: {} };
        }
        conversations[fromUserId].messages.push(message);
        this.setState({ conversations });
    }
    updateMessageReadStatus(fromUserId, messageIds) {
        services_Logger.debug(this.module, 'Updating message read status', {
            fromUserId,
            count: messageIds.length
        });
        const conversations = { ...this.state.conversations };
        if (conversations[fromUserId]) {
            conversations[fromUserId].messages = conversations[fromUserId].messages.map((msg) => {
                if (messageIds.includes(msg.id)) {
                    return { ...msg, isRead: 1, readAt: new Date().toISOString() };
                }
                return msg;
            });
        }
        this.setState({ conversations });
    }
    setUnreadCount(count) {
        services_Logger.debug(this.module, 'Setting unread count', { count });
        this.setState({ unreadCount: count });
    }
    incrementUnreadCount() {
        const newCount = this.state.unreadCount + 1;
        services_Logger.debug(this.module, 'Incrementing unread count', { newCount });
        this.setState({ unreadCount: newCount });
    }
    decrementUnreadCount(count = 1) {
        const newCount = Math.max(0, this.state.unreadCount - count);
        services_Logger.debug(this.module, 'Decrementing unread count', { newCount });
        this.setState({ unreadCount: newCount });
    }
    clearState() {
        services_Logger.info(this.module, 'Clearing all state');
        this.state = {
            userId: null,
            username: null,
            serverAddress: null,
            currentChatUserId: null,
            onlineUsers: new Map(),
            conversations: {},
            unreadCount: 0,
            isConnected: false,
            isLoading: false
        };
        this.notifyStateChanged();
    }
    setUIScreen(screen) {
        services_Logger.debug(this.module, 'Setting UI screen', { screen });
        this.updateUIState({ currentScreen: screen });
    }
    setSelectedConversation(conversationId) {
        services_Logger.debug(this.module, 'Setting selected conversation', { conversationId });
        this.updateUIState({ selectedConversationId: conversationId });
    }
    openModal(modalType) {
        services_Logger.debug(this.module, 'Opening modal', { modalType });
        this.updateUIState({ isModalOpen: true, modalType });
    }
    closeModal() {
        services_Logger.debug(this.module, 'Closing modal');
        this.updateUIState({ isModalOpen: false, modalType: undefined });
    }
    setErrorMessage(message) {
        services_Logger.warn(this.module, 'Setting error message', { message });
        this.updateUIState({ errorMessage: message });
    }
    clearErrorMessage() {
        services_Logger.debug(this.module, 'Clearing error message');
        this.updateUIState({ errorMessage: undefined });
    }
    setSuccessMessage(message) {
        services_Logger.info(this.module, 'Setting success message', { message });
        this.updateUIState({ successMessage: message });
    }
    clearSuccessMessage() {
        services_Logger.debug(this.module, 'Clearing success message');
        this.updateUIState({ successMessage: undefined });
    }
    subscribe(listener) {
        services_Logger.debug(this.module, 'New state listener subscribed');
        this.stateListeners.add(listener);
        return () => {
            this.stateListeners.delete(listener);
            services_Logger.debug(this.module, 'State listener unsubscribed');
        };
    }
    subscribeUIState(listener) {
        services_Logger.debug(this.module, 'New UI state listener subscribed');
        this.uiStateListeners.add(listener);
        return () => {
            this.uiStateListeners.delete(listener);
            services_Logger.debug(this.module, 'UI state listener unsubscribed');
        };
    }
    setState(partial) {
        this.state = { ...this.state, ...partial };
        this.notifyStateChanged();
    }
    updateUIState(partial) {
        this.uiState = { ...this.uiState, ...partial };
        this.notifyUIStateChanged();
    }
    notifyStateChanged() {
        this.stateListeners.forEach((listener) => {
            try {
                listener(this.getState());
            }
            catch (error) {
                services_Logger.error(this.module, 'Error in state listener', error);
            }
        });
    }
    notifyUIStateChanged() {
        this.uiStateListeners.forEach((listener) => {
            try {
                listener(this.getUIState());
            }
            catch (error) {
                services_Logger.error(this.module, 'Error in UI state listener', error);
            }
        });
    }
    getStateSummary() {
        return {
            userId: this.state.userId,
            username: this.state.username,
            isConnected: this.state.isConnected,
            isLoading: this.state.isLoading,
            onlineUsersCount: this.state.onlineUsers.size,
            conversationsCount: Object.keys(this.state.conversations).length,
            unreadCount: this.state.unreadCount,
            currentChatUserId: this.state.currentChatUserId
        };
    }
}
/* harmony default export */ const services_StateManager = (StateManager.getInstance());

;// ./src/services/SocketIOService.ts

class SocketIOService {
    constructor() {
        this.module = 'SocketIOService';
        this.socket = null;
        this.isConnected = false;
        this.eventListeners = new Map();
        this.serverAddress = null;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.reconnectDelay = 1000;
    }
    async initialize(serverAddress) {
        services_Logger.info(this.module, 'Initializing Socket.IO connection', { serverAddress });
        if (typeof window.io === 'undefined') {
            services_Logger.debug(this.module, 'Loading Socket.IO library');
            await this.loadSocketIOLibrary();
        }
        this.serverAddress = serverAddress;
        this.createConnection();
    }
    loadSocketIOLibrary() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.socket.io/4.5.4/socket.io.min.js';
            script.onload = () => {
                services_Logger.debug(this.module, 'Socket.IO library loaded successfully');
                resolve();
            };
            script.onerror = () => {
                services_Logger.error(this.module, 'Failed to load Socket.IO library');
                reject(new Error('Failed to load Socket.IO library'));
            };
            document.head.appendChild(script);
        });
    }
    createConnection() {
        if (!this.serverAddress) {
            services_Logger.error(this.module, 'Server address not set');
            return;
        }
        try {
            const io = window.io;
            this.socket = io(this.serverAddress, {
                reconnection: true,
                reconnectionDelay: this.reconnectDelay,
                reconnectionDelayMax: 5000,
                reconnectionAttempts: this.maxReconnectAttempts,
                path: '/socket.io/'
            });
            this.setupEventHandlers();
            services_Logger.info(this.module, 'Socket.IO connection created');
        }
        catch (error) {
            services_Logger.error(this.module, 'Failed to create Socket.IO connection', { error });
            throw error;
        }
    }
    setupEventHandlers() {
        if (!this.socket)
            return;
        this.socket.on('connect', () => {
            services_Logger.info(this.module, 'Socket.IO connected to server');
            this.isConnected = true;
            this.reconnectAttempts = 0;
            this.emit('connection-changed', true);
        });
        this.socket.on('disconnect', () => {
            services_Logger.warn(this.module, 'Socket.IO disconnected from server');
            this.isConnected = false;
            this.emit('connection-changed', false);
        });
        this.socket.on('connect_error', (error) => {
            services_Logger.error(this.module, 'Socket.IO connection error', {
                message: error.message,
                type: error.type
            });
            this.reconnectAttempts++;
        });
        this.socket.on('error', (error) => {
            services_Logger.error(this.module, 'Socket.IO error', { error });
            this.emit('error', { message: error?.message || 'Unknown error' });
        });
    }
    async login(username) {
        return new Promise((resolve, reject) => {
            if (!this.socket) {
                services_Logger.error(this.module, 'Socket not initialized');
                reject(new Error('Socket not initialized'));
                return;
            }
            services_Logger.debug(this.module, 'Emitting login event', { username });
            this.socket.emit('login', { username }, (response) => {
                services_Logger.info(this.module, 'Login successful', { userId: response.userId });
                resolve(response);
            });
            setTimeout(() => {
                reject(new Error('Login timeout'));
            }, 10000);
        });
    }
    sendMessage(senderId, recipientId, content) {
        return new Promise((resolve, reject) => {
            if (!this.socket) {
                services_Logger.error(this.module, 'Socket not initialized');
                reject(new Error('Socket not initialized'));
                return;
            }
            services_Logger.debug(this.module, 'Sending message', {
                senderId,
                recipientId,
                contentLength: content.length
            });
            this.socket.emit('send_message', { sender_id: senderId, recipient_id: recipientId, content }, (response) => {
                if (response?.error) {
                    services_Logger.error(this.module, 'Message send error', { error: response.error });
                    reject(new Error(response.error));
                }
                else {
                    services_Logger.debug(this.module, 'Message sent successfully', { messageId: response?.message_id });
                    resolve();
                }
            });
            setTimeout(() => {
                reject(new Error('Message send timeout'));
            }, 5000);
        });
    }
    markAsRead(recipientId, senderId) {
        if (!this.socket) {
            services_Logger.error(this.module, 'Socket not initialized');
            return;
        }
        services_Logger.debug(this.module, 'Marking messages as read', { recipientId, senderId });
        this.socket.emit('mark_as_read', {
            recipient_id: recipientId,
            sender_id: senderId
        });
    }
    deleteConversation(user1Id, user2Id) {
        if (!this.socket) {
            services_Logger.error(this.module, 'Socket not initialized');
            return;
        }
        services_Logger.info(this.module, 'Deleting conversation', { user1Id, user2Id });
        this.socket.emit('delete_conversation', {
            user1_id: user1Id,
            user2_id: user2Id
        });
    }
    on(event, callback) {
        services_Logger.debug(this.module, 'Registering event listener', { event });
        if (!this.eventListeners.has(event)) {
            this.eventListeners.set(event, new Set());
            if (this.socket && event !== 'connection-changed' && event !== 'error') {
                this.socket.on(this.convertEventName(event), (...args) => {
                    const callbacks = this.eventListeners.get(event) || new Set();
                    callbacks.forEach((cb) => {
                        try {
                            cb(...args);
                        }
                        catch (error) {
                            services_Logger.error(this.module, 'Event callback error', { event, error });
                        }
                    });
                });
            }
        }
        const callbacks = this.eventListeners.get(event) || new Set();
        callbacks.add(callback);
    }
    off(event, callback) {
        services_Logger.debug(this.module, 'Unregistering event listener', { event });
        if (!callback) {
            this.eventListeners.delete(event);
        }
        else {
            const callbacks = this.eventListeners.get(event) || new Set();
            callbacks.delete(callback);
        }
    }
    emit(event, ...args) {
        const callbacks = this.eventListeners.get(event) || new Set();
        callbacks.forEach((callback) => {
            try {
                callback(...args);
            }
            catch (error) {
                services_Logger.error(this.module, 'Event callback error', { event, error });
            }
        });
    }
    convertEventName(event) {
        const conversions = {
            'new_message': 'new_message',
            'message_sent': 'message_sent',
            'messages_read': 'messages_read',
            'user_online': 'user_online',
            'user_offline': 'user_offline',
            'conversation_deleted': 'conversation_deleted',
            'login_success': 'login_success',
            'error': 'error'
        };
        return conversions[event] || event;
    }
    getIsConnected() {
        return this.isConnected && !!this.socket?.connected;
    }
    disconnect() {
        services_Logger.info(this.module, 'Disconnecting Socket.IO');
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
        this.isConnected = false;
        this.eventListeners.clear();
    }
    async reconnect() {
        services_Logger.info(this.module, 'Attempting reconnection');
        if (this.socket) {
            this.socket.connect();
        }
        else if (this.serverAddress) {
            this.createConnection();
        }
    }
    getStatus() {
        return {
            isConnected: this.isConnected,
            serverAddress: this.serverAddress,
            reconnectAttempts: this.reconnectAttempts,
            listenerCount: this.eventListeners.size,
            socketId: this.socket?.id || null
        };
    }
}
const socketIOService = new SocketIOService();

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(159);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/styles/login-screen.css
var login_screen = __webpack_require__(383);
;// ./src/components/styles/login-screen.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(login_screen/* default */.A, options);




       /* harmony default export */ const styles_login_screen = (login_screen/* default */.A && login_screen/* default */.A.locals ? login_screen/* default */.A.locals : undefined);

;// ./src/components/screens/LoginScreen.tsx



const LoginScreen = ({ onLogin, isLoading }) => {
    const logger = services_Logger;
    const module = 'LoginScreen';
    const [formState, setFormState] = (0,react.useState)({
        username: '',
        serverAddress: 'http://localhost:5000',
        error: null,
        showAdvanced: false
    });
    const validateForm = () => {
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
    const handleSubmit = (0,react.useCallback)(async (e) => {
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
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Login failed';
            logger.error(module, 'Login error', error);
            setFormState((prev) => ({
                ...prev,
                error: errorMessage
            }));
        }
    }, [formState, onLogin]);
    const handleInputChange = (0,react.useCallback)((e) => {
        const { name, value } = e.target;
        logger.debug(module, 'Input changed', { field: name });
        setFormState((prev) => ({
            ...prev,
            [name]: value,
            error: null
        }));
    }, []);
    const toggleAdvanced = (0,react.useCallback)(() => {
        logger.debug(module, 'Toggling advanced settings');
        setFormState((prev) => ({
            ...prev,
            showAdvanced: !prev.showAdvanced
        }));
    }, []);
    return (react.createElement("div", { className: "login-screen" },
        react.createElement("div", { className: "login-container" },
            react.createElement("div", { className: "login-header" },
                react.createElement("div", { className: "logo" }, "\uD83D\uDCAC"),
                react.createElement("h1", null, "Local Chat"),
                react.createElement("p", { className: "subtitle" }, "Connect with your team")),
            react.createElement("form", { onSubmit: handleSubmit, className: "login-form" },
                react.createElement("div", { className: "form-group" },
                    react.createElement("label", { htmlFor: "username" }, "Username"),
                    react.createElement("input", { id: "username", type: "text", name: "username", value: formState.username, onChange: handleInputChange, placeholder: "Enter your name", disabled: isLoading, maxLength: 50, autoFocus: true })),
                react.createElement("div", { className: "form-group" },
                    react.createElement("label", { htmlFor: "serverAddress" }, "Server Address"),
                    react.createElement("input", { id: "serverAddress", type: "text", name: "serverAddress", value: formState.serverAddress, onChange: handleInputChange, placeholder: "http://192.168.x.x:5000", disabled: isLoading }),
                    react.createElement("small", { className: "help-text" }, "Enter the address of the local chat server")),
                formState.error && (react.createElement("div", { className: "error-message", role: "alert" },
                    "\u26A0\uFE0F ",
                    formState.error)),
                react.createElement("button", { type: "submit", className: "btn btn-primary btn-large", disabled: isLoading }, isLoading ? (react.createElement(react.Fragment, null,
                    react.createElement("span", { className: "spinner" }),
                    "Connecting...")) : ('Connect')),
                react.createElement("button", { type: "button", className: "btn-link", onClick: toggleAdvanced },
                    formState.showAdvanced ? '▼ Hide' : '▶ Show',
                    " Advanced Options"),
                formState.showAdvanced && (react.createElement("div", { className: "advanced-options" },
                    react.createElement("div", { className: "info-box" },
                        react.createElement("h4", null, "Connection Tips"),
                        react.createElement("ul", null,
                            react.createElement("li", null,
                                "For local machine: ",
                                react.createElement("code", null, "http://localhost:5000")),
                            react.createElement("li", null,
                                "For network: Find server IP and use ",
                                react.createElement("code", null, "http://IP:5000")),
                            react.createElement("li", null, "Username must be unique on the network"),
                            react.createElement("li", null, "Server must be running before connecting")))))),
            react.createElement("div", { className: "login-footer" },
                react.createElement("small", null, "Version 1.0.0")))));
};
/* harmony default export */ const screens_LoginScreen = (LoginScreen);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/styles/conversations-list.css
var conversations_list = __webpack_require__(54);
;// ./src/components/styles/conversations-list.css

      
      
      
      
      
      
      
      
      

var conversations_list_options = {};

conversations_list_options.styleTagTransform = (styleTagTransform_default());
conversations_list_options.setAttributes = (setAttributesWithoutAttributes_default());

      conversations_list_options.insert = insertBySelector_default().bind(null, "head");
    
conversations_list_options.domAPI = (styleDomAPI_default());
conversations_list_options.insertStyleElement = (insertStyleElement_default());

var conversations_list_update = injectStylesIntoStyleTag_default()(conversations_list/* default */.A, conversations_list_options);




       /* harmony default export */ const styles_conversations_list = (conversations_list/* default */.A && conversations_list/* default */.A.locals ? conversations_list/* default */.A.locals : undefined);

;// ./src/components/features/ConversationsList.tsx



const ConversationsList = ({ conversations, selectedUserId, onSelectConversation }) => {
    const logger = services_Logger;
    const module = 'ConversationsList';
    const handleConversationClick = (0,react.useCallback)((userId) => {
        logger.debug(module, 'Conversation item clicked', { userId });
        onSelectConversation(userId);
    }, [onSelectConversation]);
    const formatTime = (dateString) => {
        try {
            const date = new Date(dateString);
            const now = new Date();
            const diffMs = now.getTime() - date.getTime();
            const diffMins = Math.floor(diffMs / 60000);
            if (diffMins < 1)
                return 'now';
            if (diffMins < 60)
                return `${diffMins}m ago`;
            if (diffMins < 1440)
                return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return date.toLocaleDateString();
        }
        catch {
            return '';
        }
    };
    if (conversations.length === 0) {
        return (react.createElement("div", { className: "conversations-list empty" },
            react.createElement("div", { className: "empty-state" },
                react.createElement("p", null, "No conversations yet"),
                react.createElement("small", null, "Start chatting with someone!"))));
    }
    return (react.createElement("div", { className: "conversations-list" }, conversations.map((conversation) => (react.createElement("div", { key: conversation.otherUserId, className: `conversation-item ${selectedUserId === conversation.otherUserId ? 'active' : ''}`, onClick: () => handleConversationClick(conversation.otherUserId), role: "button", tabIndex: 0 },
        react.createElement("div", { className: "conversation-avatar" }, conversation.otherUsername[0].toUpperCase()),
        react.createElement("div", { className: "conversation-content" },
            react.createElement("div", { className: "conversation-header" },
                react.createElement("h4", { className: "conversation-name" }, conversation.otherUsername),
                react.createElement("span", { className: "conversation-time" }, formatTime(conversation.lastMessageAt))),
            react.createElement("p", { className: "conversation-meta" },
                conversation.messageCount,
                " messages")),
        conversation.unreadCount > 0 && (react.createElement("div", { className: "unread-badge" }, conversation.unreadCount)))))));
};
/* harmony default export */ const features_ConversationsList = (ConversationsList);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/styles/chat-window.css
var chat_window = __webpack_require__(304);
;// ./src/components/styles/chat-window.css

      
      
      
      
      
      
      
      
      

var chat_window_options = {};

chat_window_options.styleTagTransform = (styleTagTransform_default());
chat_window_options.setAttributes = (setAttributesWithoutAttributes_default());

      chat_window_options.insert = insertBySelector_default().bind(null, "head");
    
chat_window_options.domAPI = (styleDomAPI_default());
chat_window_options.insertStyleElement = (insertStyleElement_default());

var chat_window_update = injectStylesIntoStyleTag_default()(chat_window/* default */.A, chat_window_options);




       /* harmony default export */ const styles_chat_window = (chat_window/* default */.A && chat_window/* default */.A.locals ? chat_window/* default */.A.locals : undefined);

;// ./src/components/features/ChatWindow.tsx



const ChatWindow = ({ messages, currentUserId, otherUserId, otherUsername, onSendMessage, onDeleteConversation, isLoading, settings }) => {
    const logger = services_Logger;
    const module = 'ChatWindow';
    const [localState, setLocalState] = (0,react.useState)({
        messageInput: '',
        isSending: false
    });
    const messagesEndRef = (0,react.useRef)(null);
    const messageInputRef = (0,react.useRef)(null);
    (0,react.useEffect)(() => {
        scrollToBottom();
    }, [messages]);
    (0,react.useEffect)(() => {
        messageInputRef.current?.focus();
    }, []);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleMessageSubmit = (0,react.useCallback)(async (e) => {
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
        }
        catch (error) {
            logger.error(module, 'Failed to send message', error);
            setLocalState((prev) => ({ ...prev, isSending: false }));
        }
    }, [localState.messageInput, onSendMessage, otherUserId]);
    const handleInputChange = (0,react.useCallback)((e) => {
        const { value } = e.target;
        logger.debug(module, 'Message input changed', { length: value.length });
        setLocalState((prev) => ({ ...prev, messageInput: value }));
    }, []);
    const formatTime = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
        catch {
            return '';
        }
    };
    const renderMessage = (msg) => {
        const isOwn = msg.senderId === currentUserId;
        const showReadReceipt = settings.readReceipts && msg.isRead && isOwn;
        return (react.createElement("div", { key: msg.id, className: `message-bubble ${isOwn ? 'own' : 'other'}`, "data-message-id": msg.id },
            react.createElement("div", { className: "message-content" },
                react.createElement("p", { className: "message-text" }, msg.content),
                react.createElement("span", { className: "message-time" }, formatTime(msg.createdAt)),
                showReadReceipt && (react.createElement("span", { className: "read-receipt", title: msg.readAt || 'Read' }, "\u2713\u2713")))));
    };
    return (react.createElement("div", { className: "chat-window" },
        react.createElement("div", { className: "chat-header" },
            react.createElement("div", { className: "chat-header-left" },
                react.createElement("div", { className: "chat-user-avatar" }, otherUsername[0].toUpperCase()),
                react.createElement("div", { className: "chat-user-info" },
                    react.createElement("h3", { className: "chat-username" }, otherUsername),
                    react.createElement("small", { className: "chat-status" }, "Online"))),
            react.createElement("div", { className: "chat-header-right" },
                react.createElement("button", { className: "btn-icon delete-btn", onClick: () => onDeleteConversation(otherUserId), title: "Delete conversation", "aria-label": "Delete conversation" }, "\uD83D\uDDD1\uFE0F"))),
        react.createElement("div", { className: "messages-container" }, isLoading ? (react.createElement("div", { className: "loading-indicator" },
            react.createElement("div", { className: "spinner" }),
            react.createElement("p", null, "Loading messages..."))) : messages.length === 0 ? (react.createElement("div", { className: "empty-chat" },
            react.createElement("div", { className: "empty-icon" }, "\uD83D\uDCAC"),
            react.createElement("p", null, "Start a conversation!"),
            react.createElement("small", null, "Your first message will appear here"))) : (react.createElement(react.Fragment, null,
            messages.map((msg) => renderMessage(msg)),
            react.createElement("div", { ref: messagesEndRef })))),
        react.createElement("div", { className: "message-input-area" },
            react.createElement("form", { onSubmit: handleMessageSubmit, className: "message-form" },
                react.createElement("div", { className: "input-wrapper" },
                    react.createElement("input", { ref: messageInputRef, type: "text", className: "message-input", placeholder: "Type a message...", value: localState.messageInput, onChange: handleInputChange, disabled: localState.isSending, maxLength: 5000, autoFocus: true }),
                    react.createElement("button", { type: "submit", className: "btn-send", disabled: localState.isSending || !localState.messageInput.trim(), title: "Send message (Enter)" }, localState.isSending ? '...' : '📤')),
                react.createElement("div", { className: "char-counter" },
                    react.createElement("span", null, localState.messageInput.length),
                    "/5000")))));
};
/* harmony default export */ const features_ChatWindow = (ChatWindow);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/styles/settings-modal.css
var settings_modal = __webpack_require__(856);
;// ./src/components/styles/settings-modal.css

      
      
      
      
      
      
      
      
      

var settings_modal_options = {};

settings_modal_options.styleTagTransform = (styleTagTransform_default());
settings_modal_options.setAttributes = (setAttributesWithoutAttributes_default());

      settings_modal_options.insert = insertBySelector_default().bind(null, "head");
    
settings_modal_options.domAPI = (styleDomAPI_default());
settings_modal_options.insertStyleElement = (insertStyleElement_default());

var settings_modal_update = injectStylesIntoStyleTag_default()(settings_modal/* default */.A, settings_modal_options);




       /* harmony default export */ const styles_settings_modal = (settings_modal/* default */.A && settings_modal/* default */.A.locals ? settings_modal/* default */.A.locals : undefined);

;// ./src/components/features/SettingsModal.tsx



const SettingsModal = ({ isOpen, settings, onClose, onSave }) => {
    const logger = services_Logger;
    const module = 'SettingsModal';
    const [localState, setLocalState] = (0,react.useState)({
        localSettings: settings,
        isSaving: false
    });
    (0,react.useEffect)(() => {
        setLocalState((prev) => ({
            ...prev,
            localSettings: settings
        }));
    }, [settings, isOpen]);
    const handleToggleSetting = (0,react.useCallback)((key) => {
        logger.debug(module, 'Setting toggled', { key });
        setLocalState((prev) => ({
            ...prev,
            localSettings: {
                ...prev.localSettings,
                [key]: !prev.localSettings[key]
            }
        }));
    }, []);
    const handleSave = (0,react.useCallback)(async () => {
        try {
            logger.info(module, 'Saving settings', localState.localSettings);
            setLocalState((prev) => ({ ...prev, isSaving: true }));
            await onSave(localState.localSettings);
            logger.info(module, 'Settings saved successfully');
            onClose();
        }
        catch (error) {
            logger.error(module, 'Failed to save settings', error);
        }
        finally {
            setLocalState((prev) => ({ ...prev, isSaving: false }));
        }
    }, [localState.localSettings, onSave, onClose]);
    if (!isOpen)
        return null;
    return (react.createElement("div", { className: "settings-modal-overlay", onClick: onClose },
        react.createElement("div", { className: "settings-modal", onClick: (e) => e.stopPropagation() },
            react.createElement("div", { className: "modal-header" },
                react.createElement("h2", null, "Settings"),
                react.createElement("button", { className: "btn-close", onClick: onClose, "aria-label": "Close settings" }, "\u2715")),
            react.createElement("div", { className: "modal-content" },
                react.createElement("div", { className: "settings-group" },
                    react.createElement("label", { className: "setting-item" },
                        react.createElement("input", { type: "checkbox", checked: localState.localSettings.notificationSound, onChange: () => handleToggleSetting('notificationSound') }),
                        react.createElement("span", { className: "setting-label" },
                            react.createElement("strong", null, "\uD83D\uDD14 Notification Sounds"),
                            react.createElement("small", null, "Play sound when receiving messages")))),
                react.createElement("div", { className: "settings-group" },
                    react.createElement("label", { className: "setting-item" },
                        react.createElement("input", { type: "checkbox", checked: localState.localSettings.desktopNotifications, onChange: () => handleToggleSetting('desktopNotifications') }),
                        react.createElement("span", { className: "setting-label" },
                            react.createElement("strong", null, "\uD83D\uDCAC Desktop Notifications"),
                            react.createElement("small", null, "Show browser notifications for new messages")))),
                react.createElement("div", { className: "settings-group" },
                    react.createElement("label", { className: "setting-item" },
                        react.createElement("input", { type: "checkbox", checked: localState.localSettings.readReceipts, onChange: () => handleToggleSetting('readReceipts') }),
                        react.createElement("span", { className: "setting-label" },
                            react.createElement("strong", null, "\u2713\u2713 Read Receipts"),
                            react.createElement("small", null, "Show when recipient has read your message")))),
                react.createElement("div", { className: "settings-info" },
                    react.createElement("p", null,
                        react.createElement("strong", null, "About Local Chat")),
                    react.createElement("ul", null,
                        react.createElement("li", null, "Version 1.0.0"),
                        react.createElement("li", null, "Max 1000 messages per conversation"),
                        react.createElement("li", null, "Messages stored locally on server"))),
                react.createElement("div", { className: "debug-section" },
                    react.createElement("button", { className: "btn-secondary", onClick: () => services_Logger.downloadLogs() }, "\uD83D\uDCE5 Download Debug Logs"),
                    react.createElement("small", null, "Export logs for debugging"))),
            react.createElement("div", { className: "modal-footer" },
                react.createElement("button", { className: "btn btn-secondary", onClick: onClose, disabled: localState.isSaving }, "Cancel"),
                react.createElement("button", { className: "btn btn-primary", onClick: handleSave, disabled: localState.isSaving }, localState.isSaving ? 'Saving...' : 'Save Settings')))));
};
/* harmony default export */ const features_SettingsModal = (SettingsModal);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/styles/chat-screen.css
var chat_screen = __webpack_require__(100);
;// ./src/components/styles/chat-screen.css

      
      
      
      
      
      
      
      
      

var chat_screen_options = {};

chat_screen_options.styleTagTransform = (styleTagTransform_default());
chat_screen_options.setAttributes = (setAttributesWithoutAttributes_default());

      chat_screen_options.insert = insertBySelector_default().bind(null, "head");
    
chat_screen_options.domAPI = (styleDomAPI_default());
chat_screen_options.insertStyleElement = (insertStyleElement_default());

var chat_screen_update = injectStylesIntoStyleTag_default()(chat_screen/* default */.A, chat_screen_options);




       /* harmony default export */ const styles_chat_screen = (chat_screen/* default */.A && chat_screen/* default */.A.locals ? chat_screen/* default */.A.locals : undefined);

;// ./src/components/screens/ChatScreen.tsx









const ChatScreen = ({ appState, settings, onLogout, onSettingsSave }) => {
    const logger = services_Logger;
    const module = 'ChatScreen';
    const [localState, setLocalState] = (0,react.useState)({
        conversations: [],
        currentMessages: [],
        showSettings: false,
        searchQuery: '',
        isLoadingMessages: false
    });
    const messagesEndRef = (0,react.useRef)(null);
    (0,react.useEffect)(() => {
        logger.info(module, 'ChatScreen mounted');
        loadConversations();
    }, []);
    (0,react.useEffect)(() => {
        if (appState.currentChatUserId) {
            loadMessages();
        }
        else {
            setLocalState((prev) => ({ ...prev, currentMessages: [] }));
        }
    }, [appState.currentChatUserId]);
    (0,react.useEffect)(() => {
        services_NotificationService.updateBadge(appState.unreadCount);
    }, [appState.unreadCount]);
    const loadConversations = async () => {
        try {
            if (!appState.userId || !appState.serverAddress) {
                logger.warn(module, 'Missing user info for loading conversations');
                return;
            }
            logger.info(module, 'Loading conversations', { userId: appState.userId });
            const response = await fetch(`${appState.serverAddress}/api/conversations/${appState.userId}`);
            if (!response.ok) {
                throw new Error(`Failed to load conversations: ${response.status}`);
            }
            const conversations = await response.json();
            logger.info(module, 'Conversations loaded', { count: conversations.length });
            setLocalState((prev) => ({ ...prev, conversations }));
        }
        catch (error) {
            logger.error(module, 'Failed to load conversations', error);
            services_NotificationService.showToast('Failed to load conversations', 'error');
        }
    };
    const loadMessages = async () => {
        try {
            if (!appState.currentChatUserId || !appState.userId || !appState.serverAddress) {
                logger.warn(module, 'Missing info for loading messages');
                return;
            }
            logger.info(module, 'Loading messages', {
                currentChatUserId: appState.currentChatUserId,
                userId: appState.userId
            });
            setLocalState((prev) => ({ ...prev, isLoadingMessages: true }));
            const response = await fetch(`${appState.serverAddress}/api/messages?user1=${appState.userId}&user2=${appState.currentChatUserId}&limit=50`);
            if (!response.ok) {
                throw new Error(`Failed to load messages: ${response.status}`);
            }
            const messages = await response.json();
            logger.info(module, 'Messages loaded', { count: messages.length });
            setLocalState((prev) => ({ ...prev, currentMessages: messages }));
            setTimeout(() => {
                if (appState.userId && appState.currentChatUserId) {
                    socketIOService.markAsRead(appState.userId, appState.currentChatUserId);
                }
            }, 500);
        }
        catch (error) {
            logger.error(module, 'Failed to load messages', error);
            services_NotificationService.showToast('Failed to load messages', 'error');
        }
        finally {
            setLocalState((prev) => ({ ...prev, isLoadingMessages: false }));
        }
    };
    const handleSendMessage = (0,react.useCallback)(async (content) => {
        try {
            if (!appState.currentChatUserId || !appState.userId) {
                logger.warn(module, 'Missing user info for sending message');
                return;
            }
            if (!content.trim()) {
                logger.debug(module, 'Attempt to send empty message');
                return;
            }
            logger.info(module, 'Sending message', {
                from: appState.userId,
                to: appState.currentChatUserId,
                contentLength: content.length
            });
            await socketIOService.sendMessage(appState.userId, appState.currentChatUserId, content);
            await services_NotificationService.playSuccessSound();
        }
        catch (error) {
            logger.error(module, 'Failed to send message', error);
            services_NotificationService.showToast('Failed to send message', 'error');
        }
    }, [appState.userId, appState.currentChatUserId]);
    const handleDeleteConversation = (0,react.useCallback)(async (otherUserId) => {
        try {
            if (!appState.userId) {
                logger.warn(module, 'Missing user ID for delete');
                return;
            }
            if (!window.confirm('Delete this conversation? Messages will be removed.')) {
                logger.debug(module, 'Delete conversation cancelled by user');
                return;
            }
            logger.info(module, 'Deleting conversation', {
                user1: appState.userId,
                user2: otherUserId
            });
            socketIOService.deleteConversation(appState.userId, otherUserId);
            services_StateManager.setCurrentChatUserId(null);
            await loadConversations();
            services_NotificationService.showToast('Conversation deleted', 'success');
        }
        catch (error) {
            logger.error(module, 'Failed to delete conversation', error);
            services_NotificationService.showToast('Failed to delete conversation', 'error');
        }
    }, [appState.userId]);
    const handleLogoutClick = (0,react.useCallback)(async () => {
        if (window.confirm('Are you sure you want to logout?')) {
            logger.info(module, 'User initiating logout');
            await onLogout();
        }
    }, [onLogout]);
    const handleSearchChange = (0,react.useCallback)((query) => {
        logger.debug(module, 'Search query changed', { query });
        setLocalState((prev) => ({ ...prev, searchQuery: query }));
    }, []);
    const filteredConversations = localState.conversations.filter((conv) => conv.otherUsername.toLowerCase().includes(localState.searchQuery.toLowerCase()));
    return (react.createElement("div", { className: "chat-screen" },
        react.createElement("div", { className: "chat-layout" },
            react.createElement("aside", { className: "sidebar" },
                react.createElement("div", { className: "sidebar-header" },
                    react.createElement("h2", null, "Local Chat"),
                    react.createElement("div", { className: "user-info" },
                        react.createElement("span", { className: "user-badge" }, appState.username?.[0].toUpperCase()),
                        react.createElement("div", { className: "user-status" },
                            react.createElement("span", { className: "username" }, appState.username),
                            react.createElement("span", { className: `connection-status ${appState.isConnected ? 'connected' : 'disconnected'}` }, appState.isConnected ? '🟢 Connected' : '🔴 Disconnected')))),
                appState.unreadCount > 0 && (react.createElement("div", { className: "unread-indicator" },
                    "\uD83D\uDCEC ",
                    appState.unreadCount,
                    " unread")),
                react.createElement("div", { className: "search-box" },
                    react.createElement("input", { type: "text", placeholder: "Search conversations...", value: localState.searchQuery, onChange: (e) => handleSearchChange(e.target.value) })),
                react.createElement(features_ConversationsList, { conversations: filteredConversations, selectedUserId: appState.currentChatUserId, onSelectConversation: (userId) => {
                        logger.debug(module, 'Conversation selected', { userId });
                        services_StateManager.setCurrentChatUserId(userId);
                    } }),
                react.createElement("div", { className: "sidebar-footer" },
                    react.createElement("button", { className: "btn btn-secondary btn-small", onClick: () => setLocalState((prev) => ({ ...prev, showSettings: true })) }, "\u2699\uFE0F Settings"),
                    react.createElement("button", { className: "btn btn-secondary btn-small", onClick: handleLogoutClick }, "\uD83D\uDEAA Logout"))),
            react.createElement("main", { className: "chat-area" }, appState.currentChatUserId ? (react.createElement(features_ChatWindow, { messages: localState.currentMessages, currentUserId: appState.userId || 0, otherUserId: appState.currentChatUserId, otherUsername: localState.conversations.find((c) => c.otherUserId === appState.currentChatUserId)?.otherUsername || 'User', onSendMessage: handleSendMessage, onDeleteConversation: handleDeleteConversation, isLoading: localState.isLoadingMessages, settings: settings })) : (react.createElement("div", { className: "no-conversation-selected" },
                react.createElement("div", { className: "empty-state-icon" }, "\uD83D\uDCAD"),
                react.createElement("h3", null, "Select a conversation to start chatting"),
                react.createElement("p", null, "or start a new conversation with an online user"))))),
        react.createElement(features_SettingsModal, { isOpen: localState.showSettings, settings: settings, onClose: () => setLocalState((prev) => ({ ...prev, showSettings: false })), onSave: onSettingsSave }),
        react.createElement("div", { ref: messagesEndRef })));
};
/* harmony default export */ const screens_ChatScreen = (ChatScreen);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/components/styles/loading-screen.css
var loading_screen = __webpack_require__(66);
;// ./src/components/styles/loading-screen.css

      
      
      
      
      
      
      
      
      

var loading_screen_options = {};

loading_screen_options.styleTagTransform = (styleTagTransform_default());
loading_screen_options.setAttributes = (setAttributesWithoutAttributes_default());

      loading_screen_options.insert = insertBySelector_default().bind(null, "head");
    
loading_screen_options.domAPI = (styleDomAPI_default());
loading_screen_options.insertStyleElement = (insertStyleElement_default());

var loading_screen_update = injectStylesIntoStyleTag_default()(loading_screen/* default */.A, loading_screen_options);




       /* harmony default export */ const styles_loading_screen = (loading_screen/* default */.A && loading_screen/* default */.A.locals ? loading_screen/* default */.A.locals : undefined);

;// ./src/components/screens/LoadingScreen.tsx


const LoadingScreen = ({ message = 'Loading...' }) => {
    return (react.createElement("div", { className: "loading-screen" },
        react.createElement("div", { className: "loading-container" },
            react.createElement("div", { className: "spinner" }),
            react.createElement("p", { className: "loading-message" }, message))));
};
/* harmony default export */ const screens_LoadingScreen = (LoadingScreen);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/app.css
var app = __webpack_require__(877);
;// ./src/styles/app.css

      
      
      
      
      
      
      
      
      

var app_options = {};

app_options.styleTagTransform = (styleTagTransform_default());
app_options.setAttributes = (setAttributesWithoutAttributes_default());

      app_options.insert = insertBySelector_default().bind(null, "head");
    
app_options.domAPI = (styleDomAPI_default());
app_options.insertStyleElement = (insertStyleElement_default());

var app_update = injectStylesIntoStyleTag_default()(app/* default */.A, app_options);




       /* harmony default export */ const styles_app = (app/* default */.A && app/* default */.A.locals ? app/* default */.A.locals : undefined);

;// ./src/components/ChatApp.tsx











const ChatApp = () => {
    const logger = services_Logger;
    const module = 'ChatApp';
    const [localState, setLocalState] = (0,react.useState)({
        appState: services_StateManager.getState(),
        settings: DEFAULT_SETTINGS,
        isInitializing: true,
        initError: null
    });
    (0,react.useEffect)(() => {
        logger.info(module, 'ChatApp mounted, initializing...');
        initializeApp();
        return () => {
            logger.info(module, 'ChatApp unmounting');
        };
    }, []);
    (0,react.useEffect)(() => {
        const unsubscribe = services_StateManager.subscribe((state) => {
            logger.debug(module, 'State changed', services_StateManager.getStateSummary());
            setLocalState((prev) => ({ ...prev, appState: state }));
        });
        return unsubscribe;
    }, []);
    const initializeApp = async () => {
        try {
            logger.info(module, 'Starting app initialization');
            const settings = await services_StorageService.getSettings();
            setLocalState((prev) => ({ ...prev, settings }));
            logger.info(module, 'Settings loaded');
            const hasSavedCredentials = await services_StorageService.hasSavedCredentials();
            if (hasSavedCredentials) {
                logger.info(module, 'User is logged in, reconnecting...');
                await reconnectUser();
            }
            else {
                logger.info(module, 'User not logged in, showing login screen');
                services_StateManager.setUIScreen(ScreenType.LOGIN);
            }
            setLocalState((prev) => ({ ...prev, isInitializing: false }));
        }
        catch (error) {
            logger.error(module, 'Initialization error', error);
            setLocalState((prev) => ({
                ...prev,
                isInitializing: false,
                initError: 'Failed to initialize app'
            }));
        }
    };
    const reconnectUser = async () => {
        try {
            const credentials = await services_StorageService.getCredentials();
            if (!credentials.username || !credentials.serverAddress) {
                logger.warn(module, 'Missing connection data');
                services_StateManager.setUIScreen(ScreenType.LOGIN);
                return;
            }
            logger.info(module, 'Reconnecting user', { username: credentials.username });
            services_StateManager.setUsername(credentials.username);
            services_StateManager.setServerAddress(credentials.serverAddress);
            services_StateManager.setIsLoading(true);
            await socketIOService.initialize(credentials.serverAddress);
            const response = await socketIOService.login(credentials.username);
            handleLoginSuccess(response);
            setupSocketListeners();
            services_StateManager.setUIScreen(ScreenType.CHAT);
        }
        catch (error) {
            logger.error(module, 'Reconnection failed', error);
            services_StateManager.setUIScreen(ScreenType.LOGIN);
            services_NotificationService.showToast('Failed to reconnect', 'error');
        }
        finally {
            services_StateManager.setIsLoading(false);
        }
    };
    const handleLogin = async (username, serverAddress) => {
        try {
            logger.info(module, 'Logging in', { username });
            services_StateManager.setIsLoading(true);
            await socketIOService.initialize(serverAddress);
            const response = await socketIOService.login(username);
            handleLoginSuccess(response);
            await services_StorageService.saveCredentials(response.userId, username, serverAddress);
            setupSocketListeners();
            services_StateManager.setUIScreen(ScreenType.CHAT);
            logger.info(module, 'Login successful');
            services_NotificationService.showToast(`Welcome, ${username}!`, 'success');
        }
        catch (error) {
            logger.error(module, 'Login failed', error);
            const errorMessage = error instanceof Error ? error.message : 'Login failed';
            services_NotificationService.showToast(errorMessage, 'error');
            throw error;
        }
        finally {
            services_StateManager.setIsLoading(false);
        }
    };
    const handleLoginSuccess = (response) => {
        logger.info(module, 'Login success', {
            userId: response.userId,
            username: response.username
        });
        services_StateManager.setUserId(response.userId);
        services_StateManager.setUsername(response.username);
        services_StateManager.setUnreadCount(response.unreadCount);
        services_StateManager.setIsConnected(true);
        services_NotificationService.updateBadge(response.unreadCount);
    };
    const setupSocketListeners = () => {
        logger.info(module, 'Setting up socket listeners');
        socketIOService.on('new_message', (message) => {
            logger.info(module, 'New message received', {
                senderId: message.senderId,
                messageId: message.id
            });
            const currentState = services_StateManager.getState();
            services_StateManager.addMessage(message.senderId, message);
            services_StateManager.incrementUnreadCount();
            if (localState.settings) {
                services_NotificationService.notifyMessageReceived({
                    senderId: message.senderId,
                    senderUsername: 'User',
                    messageContent: message.content
                }, localState.settings);
            }
            if (currentState.currentChatUserId === message.senderId) {
                setTimeout(() => {
                    if (currentState.userId) {
                        socketIOService.markAsRead(currentState.userId, message.senderId);
                    }
                }, 500);
            }
        });
        socketIOService.on('message_sent', (data) => {
            logger.debug(module, 'Message sent confirmation', { messageId: data.messageId });
        });
        socketIOService.on('messages_read', (data) => {
            logger.info(module, 'Messages read by recipient', {
                recipientId: data.recipientId
            });
            services_StateManager.updateMessageReadStatus(data.recipientId, []);
        });
        socketIOService.on('user_online', (data) => {
            logger.info(module, 'User online', { userId: data.userId, username: data.username });
            services_StateManager.addOnlineUser(data.userId, {
                id: data.userId,
                username: data.username,
                createdAt: new Date().toISOString(),
                online: true,
                socketId: ''
            });
        });
        socketIOService.on('user_offline', (data) => {
            logger.info(module, 'User offline', { userId: data.userId });
            services_StateManager.removeOnlineUser(data.userId);
        });
        socketIOService.on('conversation_deleted', (data) => {
            logger.info(module, 'Conversation deleted', { conversationId: data.conversationId });
        });
        socketIOService.on('connection-changed', (isConnected) => {
            logger.info(module, 'Connection status changed', { isConnected });
            services_StateManager.setIsConnected(isConnected);
            if (isConnected) {
                services_NotificationService.showToast('Connected to server', 'success');
            }
            else {
                services_NotificationService.showToast('Disconnected from server', 'error');
            }
        });
        socketIOService.on('error', (error) => {
            logger.error(module, 'Socket error', error);
            services_NotificationService.showToast(error.message || 'An error occurred', 'error');
        });
    };
    const handleLogout = async () => {
        try {
            logger.info(module, 'Logging out');
            socketIOService.disconnect();
            await services_StorageService.clearAll();
            services_StateManager.clearState();
            services_StateManager.setUIScreen(ScreenType.LOGIN);
            services_NotificationService.showToast('Logged out successfully', 'success');
            logger.info(module, 'Logout successful');
        }
        catch (error) {
            logger.error(module, 'Logout error', error);
        }
    };
    const renderScreen = () => {
        if (localState.isInitializing) {
            return react.createElement(screens_LoadingScreen, { message: "Initializing..." });
        }
        if (localState.initError) {
            return (react.createElement("div", { className: "error-screen" },
                react.createElement("h2", null, "Error"),
                react.createElement("p", null, localState.initError),
                react.createElement("button", { onClick: () => window.location.reload() }, "Retry")));
        }
        if (localState.appState.currentChatUserId === null && !socketIOService.getIsConnected()) {
            return (react.createElement(screens_LoginScreen, { onLogin: handleLogin, isLoading: localState.appState.isLoading }));
        }
        return (react.createElement(screens_ChatScreen, { appState: localState.appState, settings: localState.settings, onLogout: handleLogout, onSettingsSave: async (settings) => {
                await services_StorageService.saveSettings(settings);
                setLocalState((prev) => ({ ...prev, settings }));
            } }));
    };
    return (react.createElement("div", { className: "chat-app" }, renderScreen()));
};
/* harmony default export */ const components_ChatApp = (ChatApp);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/global.css
var global = __webpack_require__(171);
;// ./src/styles/global.css

      
      
      
      
      
      
      
      
      

var global_options = {};

global_options.styleTagTransform = (styleTagTransform_default());
global_options.setAttributes = (setAttributesWithoutAttributes_default());

      global_options.insert = insertBySelector_default().bind(null, "head");
    
global_options.domAPI = (styleDomAPI_default());
global_options.insertStyleElement = (insertStyleElement_default());

var global_update = injectStylesIntoStyleTag_default()(global/* default */.A, global_options);




       /* harmony default export */ const styles_global = (global/* default */.A && global/* default */.A.locals ? global/* default */.A.locals : undefined);

;// ./src/popup.tsx





const popup_module = 'PopupIndex';
function initializeApp() {
    services_Logger.info(popup_module, 'Initializing LocalChat extension');
    const rootElement = document.getElementById('root');
    if (!rootElement) {
        services_Logger.error(popup_module, 'Root element not found');
        return;
    }
    try {
        const root = (0,client/* createRoot */.H)(rootElement);
        root.render(react.createElement(react.StrictMode, null,
            react.createElement(components_ChatApp, null)));
        services_Logger.info(popup_module, 'Application initialized successfully');
    }
    catch (error) {
        services_Logger.error(popup_module, 'Failed to initialize application', error);
    }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
}
else {
    initializeApp();
}

/******/ })()
;
//# sourceMappingURL=popup.js.map