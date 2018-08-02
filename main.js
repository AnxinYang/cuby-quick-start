/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/cardContainer.js":
/*!*****************************************!*\
  !*** ./src/components/cardContainer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var CARD_STYLE = {
    "background": "white",
    "height": "98%",
    "width": "98%",
    "left": "0",
    "top": "0",
    "position": "absolute",
    "right": "0",
    "bottom": "0",
    "margin": "auto",
    "boxShadow": "lightgrey 0px 0px 1px 0px"
};

var card = {
    createCard: function createCard(id) {
        var card = CubY.createElement('div', id).style(CARD_STYLE);
        return card;
    }
};
exports.default = card;

/***/ }),

/***/ "./src/cuby/CubY.js":
/*!**************************!*\
  !*** ./src/cuby/CubY.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CubY_Core = __webpack_require__(/*! ./CubY_Core */ "./src/cuby/CubY_Core.js");

var _CubY_Core2 = _interopRequireDefault(_CubY_Core);

var _CubY_DOM = __webpack_require__(/*! ./CubY_DOM */ "./src/cuby/CubY_DOM.js");

var _CubY_DOM2 = _interopRequireDefault(_CubY_DOM);

var _CubY_Routine = __webpack_require__(/*! ./CubY_Routine */ "./src/cuby/CubY_Routine.js");

var _CubY_Routine2 = _interopRequireDefault(_CubY_Routine);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var EMPTY_FUNCTION = function EMPTY_FUNCTION() {};

var CubY = {

    //Core
    getValue: _CubY_Core2.default.getValue.bind(_CubY_Core2.default),
    getBrowser: _CubY_Core2.default.getBrowser.bind(_CubY_Core2.default),
    storeDataArray: _CubY_Core2.default.storeDataArray.bind(_CubY_Core2.default),
    storeValue: _CubY_Core2.default.storeValue.bind(_CubY_Core2.default),
    connect: _CubY_Core2.default.connect.bind(_CubY_Core2.default),
    react: _CubY_Core2.default.react.bind(_CubY_Core2.default),
    debug: _CubY_Core2.default.debug.bind(_CubY_Core2.default),
    readValue: _CubY_Core2.default.readValue.bind(_CubY_Core2.default),
    isObjectEmpty: _CubY_Core2.default.isObjectEmpty.bind(_CubY_Core2.default),

    //DOM
    createElement: _CubY_DOM2.default.createElement,

    //Routine
    createRoutine: _CubY_Routine2.default.createRoutine.bind(_CubY_Routine2.default),
    getCurrentCycle: _CubY_Routine2.default.getCurrentCycle.bind(_CubY_Routine2.default),
    routine: _CubY_Routine2.default.routine.bind(_CubY_Routine2.default),
    //AddOns
    addOn: function addOn(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                CubY[key] = obj[key];
            }
        }
    },
    //Other
    version: '0.6b.ne.0.10',
    debugInfo: [_CubY_Core2.default, _CubY_Routine2.default]
};

window.CubY = CubY;
exports.default = CubY;

/***/ }),

/***/ "./src/cuby/CubY_Core.js":
/*!*******************************!*\
  !*** ./src/cuby/CubY_Core.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var EMPTY_FUNCTION = function EMPTY_FUNCTION() {};

var CubY_Core = function () {
    function CubY_Core(_props) {
        _classCallCheck(this, CubY_Core);

        var props = props || {};
        var self = this;
        this.init(props);
    }

    _createClass(CubY_Core, [{
        key: 'init',
        value: function init(_props) {
            var props = _props || {};
            this.dataMap = {};
            this.connectionMap = {};
            this.browser = this.getBrowser();
            window.cc = this;
        }
    }, {
        key: 'getBrowser',
        value: function getBrowser() {
            var isIE = false;
            var isChrome = false;
            var isOpera = false;
            if (!!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
                isOpera = true;
                return 'opera';
            }
            if (typeof InstallTrigger !== 'undefined') {
                return 'firefox';
            }
            if (/constructor/i.test(window.HTMLElement) || function (p) {
                return p.toString() === "[object SafariRemoteNotification]";
            }(!window['safari'] || safari.pushNotification)) {
                return 'safari';
            }
            if (false || !!document.documentMode) {
                Object.assign = function () {
                    var output = arguments[0];
                    for (var i = 1; i < arguments.length; i++) {
                        for (var key in arguments[i]) {
                            var obj = arguments[i];
                            if (obj.hasOwnProperty(key)) output[key] = obj[key];
                        }
                    }
                    return output;
                };
                isIE = true;
                return 'ie';
            }
            if (!isIE && !!window.StyleMedia) {
                return 'edge';
            }
            if (!!window.chrome && !!window.chrome.webstore) {
                isChrome = true;
                return 'chrome';
            }
            if ((isChrome || isOpera) && !!window.CSS) {
                return 'blink';
            }
        }
    }, {
        key: 'storeDataArray',
        value: function storeDataArray(_array, _idKey, _itemProcessor, _options, _callback) {
            var self = this;
            var options = _options || {};
            var idKey = _idKey || 'id';
            var callback = _callback || EMPTY_FUNCTION;
            var array = _array || [];
            var itemList = [];
            var itemProcessor = _itemProcessor || EMPTY_FUNCTION;

            array.forEach(function (_item) {
                var key = _item[idKey];
                if (key === undefined || self.readValue(options.skipFun, _item)) {
                    return;
                }

                var item = self.storeValue(key, _item, _options);

                itemProcessor(item);
                itemList.push(item);
            });

            callback(_array, itemList);
            return itemList;
        }
    }, {
        key: 'storeValue',
        value: function storeValue(_key, _value, _options, _callback) {
            var options = _options || {};
            var store = this.dataMap;
            var key = _key;
            var callback = _callback || EMPTY_FUNCTION;
            var newValue = _value;
            var item = store[key];
            var shouldReact = true;
            if (item !== undefined && item === Object(item) && options.overwrite !== true && !(item instanceof Array)) {
                item = Object.assign(item, newValue);
            } else {
                shouldReact = item !== newValue;
                item = newValue;
            }
            this.dataMap[key] = item;

            callback(item);
            if (shouldReact || options.forceReact) {
                this.react(key);
            }
            return item;
        }
    }, {
        key: 'getValue',
        value: function getValue(_key, caseSensitive) {
            var key = _key || '';
            if (caseSensitive !== false) {
                return this.dataMap[key];
            } else {
                for (var K in this.dataMap) {
                    if (this.dataMap.hasOwnProperty(K)) {
                        if (K.toLowerCase() === key.toLowerCase()) {
                            return this.dataMap[K];
                        }
                    }
                }
                return undefined;
            }
        }
    }, {
        key: 'connect',
        value: function connect(_key) {
            var newConector = new CubY_Connector(_key, this);
            return newConector;
        }
    }, {
        key: 'react',
        value: function react(key) {
            var self = this;
            var connectionMap = this.connectionMap;
            var connectorMap = connectionMap[key] || {};
            var newValue = self.getValue(key);
            for (var id in connectorMap) {
                if (connectorMap.hasOwnProperty(id)) {
                    connectorMap[id].run(newValue);
                }
            }
        }
    }, {
        key: 'readValue',
        value: function readValue(_value, data) {
            var value = _value;
            if (typeof value === "function") {
                return value.call(this, data);
            } else {
                return value;
            }
        }
    }, {
        key: 'isObjectEmpty',
        value: function isObjectEmpty(obj) {
            if (!obj) {
                return true;
            }
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: 'debug',
        value: function debug(str) {
            if (this.getValue('DEBUG_MODE')) {
                console.log('DEBUG: ' + str);
            }
        }
    }]);

    return CubY_Core;
}();

var _CubY_Core = new CubY_Core();
exports.default = _CubY_Core;

var CubY_Connector = function () {
    function CubY_Connector(key, core) {
        _classCallCheck(this, CubY_Connector);

        var self = this;
        this.id = 'connector_' + Math.random() * 10000 + '_' + Date.now();
        this.bindingKey = key;

        this.insert = function () {
            var connectorMap = core.connectionMap[self.bindingKey] || {};
            connectorMap[self.id] = self;
            core.connectionMap[self.bindingKey] = connectorMap;
        };
        this.remove = function () {
            try {
                if (core.connectionMap[self.bindingKey]) {
                    if (core.connectionMap[self.bindingKey][self.id]) {
                        delete core.connectionMap[self.bindingKey][self.id];
                    }
                    if (CubY.isObjectEmpty(core.connectionMap[self.bindingKey])) {
                        delete core.connectionMap[self.bindingKey];
                    }
                }
            } catch (e) {
                console.warn('[Warning]: Connector remove method reference error.');
            }
        };
        this.insert();
    }

    _createClass(CubY_Connector, [{
        key: 'to',
        value: function to(action) {
            this.action = action;
            return this;
        }
    }, {
        key: 'belong',
        value: function belong(owner) {
            this.owner = owner;
            owner.connectionList.push(this);
            return this;
        }
    }, {
        key: 'run',
        value: function run(newValue) {
            var self = this;
            if (this._reactTimer !== undefined) {
                clearTimeout(this._reactTimer);
            }
            this._reactTimer = setTimeout(function () {
                if (typeof self.action === 'function') {
                    if (self.owner) {
                        if (self.owner.isActive) {
                            self.action.call(this.owner, newValue);
                        }
                    } else {
                        self.action(newValue);
                    }
                }
                self._reactTimer = undefined;
            }, 50);
        }
    }]);

    return CubY_Connector;
}();

/***/ }),

/***/ "./src/cuby/CubY_DOM.js":
/*!******************************!*\
  !*** ./src/cuby/CubY_DOM.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

/**
 * Created by Anxin Yang on 5/26/2018.
 */
var CubY_DOM = function () {
    function CubY_DOM(_tag, _id, _root) {
        _classCallCheck(this, CubY_DOM);

        this.tag = this.readValue(_tag) || 'div';
        this.id = this.readValue(_id) || this.tag + '_' + Math.random() * 10000 + '_' + Date.now();
        this.dom = document.createElement(this.tag);
        this.dom.setAttribute('id', this.id);
        this.childrenList = [];
        this.attribute = {};
        this.property = {};
        this.domStyle = {};
        this.updaters = {};
        this.connectionList = [];
        this.parent;
        this.classes = [];
        this.root(_root);

        var self = this;
        this.updater = function (name) {
            var updater = this.updaters[name];
            return function () {
                if (updater) {
                    updater.call(self, self.data, arguments);
                }
            };
        };
    }

    _createClass(CubY_DOM, [{
        key: 'setUpdater',
        value: function setUpdater(name, updater) {
            this.updaters[name] = updater;
            return this;
        }
    }, {
        key: 'bind',
        value: function bind(data) {
            this.data = data;
            return this;
        }
    }, {
        key: 'root',
        value: function root(_root) {
            if (_root) {
                _root.appendChild(this.dom);
                this.isRoot = true;
                this.activated();
            }
            return this;
        }
    }, {
        key: 'append',
        value: function append(_tag, _id) {
            var tag = this.readValue(_tag);
            var id = this.readValue(_id);
            var element = CubY.createElement(tag, id);
            this.appendElement(element);
            return element;
        }
    }, {
        key: 'appendElement',
        value: function appendElement(CubY_DOM) {
            var element = this.readValue(CubY_DOM);
            element.parent = this;

            this.childrenList.push(element);
            this.dom.appendChild(element.dom);
            if (this.isActive || this.isRoot) {
                element.activated();
            }
            return element;
        }
    }, {
        key: 'attr',
        value: function attr(key, _value) {
            var value = void 0;

            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                for (var k in key) {
                    this.attr(k, key[k]);
                }
                return this;
            }

            if (key === 'activated' || key === 'deactivated') {
                value = _value;
            } else {
                value = this.readValue(_value);
                this.dom.setAttribute(key, value);
            }

            this.attribute[key] = value;
            return this;
        }
    }, {
        key: 'prop',
        value: function prop(key, _value) {
            var value = void 0;

            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                for (var k in key) {
                    this.prop(k, key[k]);
                }
                return this;
            }

            if (key === 'activated' || key === 'deactivated') {
                value = _value;
            } else {
                value = this.readValue(_value);
                this.dom[key] = value;
            }

            this.property[key] = value;
            return this;
        }
    }, {
        key: 'on',
        value: function on(eventName, _value) {
            var value = _value;
            var self = this;
            this.on[eventName] = value;
            this.dom.addEventListener(eventName, function (e) {
                value.call(self, e, self.data);
            });
            return this;
        }
    }, {
        key: 'style',
        value: function style(_key, _value) {
            var key = this.readValue(_key);
            var value = this.readValue(_value);
            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
                for (var k in key) {
                    this.style(k, key[k]);
                }
                return this;
            }
            this.domStyle[key] = value;
            this.dom.style[key] = value;
            return this;
        }
    }, {
        key: 'content',
        value: function content(_value) {
            var value = this.readValue(_value);
            this.innerText = value;
            this.dom.innerText = value;
            return this;
        }
    }, {
        key: 'getContent',
        value: function getContent() {
            return this.innerText;
        }
    }, {
        key: 'appendClass',
        value: function appendClass(_className) {
            var className = this.readValue(_className);
            var classes = this.classes || [];
            classes.push(className);
            this.dom.classList.add(className);
            this.classes = classes;
            return this;
        }
    }, {
        key: 'select',
        value: function select(_selector) {
            var selector = _selector.charAt(0);
            var name = _selector.substring(1);
            switch (selector) {
                case '#':
                    return this.selectById(name);
                case '.':
                    return this.selectByClassName(name);
                default:
                    return this.selectByTag(_selector);
            }
        }
    }, {
        key: 'selectById',
        value: function selectById(id) {
            var childrenList = this.childrenList;
            var target = void 0;
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.id === id) {
                    target = child;
                    break;
                }
            }
            return target;
        }
    }, {
        key: 'selectByClassName',
        value: function selectByClassName(className) {
            var childrenList = this.childrenList;
            var targetList = [];
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.classes.indexOf(className) > -1) {
                    targetList.push(child);
                }
            }
            return targetList;
        }
    }, {
        key: 'selectByTag',
        value: function selectByTag(_tag) {
            var childrenList = this.childrenList;
            var targetList = [];
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.tag === _tag) {
                    targetList.push(child);
                }
            }
            return targetList;
        }
    }, {
        key: 'remove',
        value: function remove(_selector, _transition) {
            if (_selector === undefined || typeof _selector === 'number') {
                this.removeSelf(_selector || _transition);
                return;
            }
            var selector = _selector.charAt(0);
            var name = _selector.substring(1);
            var target = void 0;
            switch (selector) {
                case '#':
                    this.removeById(name, _transition);
                    break;
                case '.':
                    this.removeByClassName(name, _transition);
                    break;
                default:
                    this.removeByTag(_selector, _transition);
            }
        }
    }, {
        key: 'removeById',
        value: function removeById(id, _transition) {
            var childrenList = this.childrenList;
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.id === id) {
                    childrenList.splice(i, 1);
                    child.remove(undefined, _transition);
                    i--;
                    break;
                }
            }
        }
    }, {
        key: 'removeByClassName',
        value: function removeByClassName(className, _transition) {
            var childrenList = this.childrenList;
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.classes.indexOf(className) > -1) {
                    childrenList.splice(i, 1);
                    child.remove(undefined, _transition);
                    i--;
                }
            }
        }
    }, {
        key: 'removeByTag',
        value: function removeByTag(_tag, _transition) {
            var childrenList = this.childrenList;
            for (var i = 0; i < childrenList.length; i++) {
                var child = childrenList[i];
                if (child.tag === _tag) {
                    childrenList.splice(i, 1);
                    child.remove(undefined, _transition);
                    i--;
                }
            }
        }
    }, {
        key: 'removeSelf',
        value: function removeSelf(_transition) {
            /*this.childrenList.forEach(function (child) {
                child.remove();
            });*/
            var self = this;
            this.deactivated();
            if (_transition) {
                this.deactivatedTimer = setTimeout(function () {
                    self.dom.remove();
                }, _transition);
            } else {
                self.dom.remove();
            }
            if (this.parent) {
                var childrenList = this.parent.childrenList;
                for (var i = 0; i < childrenList.length; i++) {
                    var child = childrenList[i];
                    if (child === this) {
                        childrenList.splice(i, 1);
                    }
                }
            }
            /*for(var key in this){
                delete this[key]
            }*/
        }
    }, {
        key: 'activated',
        value: function activated() {
            this.isActive = true;
            if (this.deactivatedTimer) {
                clearTimeout(this.deactivatedTimer);
            }

            this.connectionList.forEach(function (connection) {
                connection.insert();
            });

            this.childrenList.forEach(function (child) {
                child.activated();
            });

            if (this.attribute.activated) {
                this.attribute.activated.call(this);
            }
        }
    }, {
        key: 'deactivated',
        value: function deactivated() {
            this.isActive = false;

            this.connectionList.forEach(function (connection) {
                connection.remove();
            });

            this.childrenList.forEach(function (child) {
                child.deactivated();
            });

            if (this.attribute.deactivated) {
                this.attribute.deactivated.call(this);
            }
        }
    }, {
        key: 'readValue',
        value: function readValue(_value) {
            var value = _value;
            if (typeof value === "function") {
                return value.call(this, this.data);
            } else {
                return value;
            }
        }
    }]);

    return CubY_DOM;
}();

var _CubY_DOM = {
    createElement: function createElement(_tag, _id, _root) {
        return new CubY_DOM(_tag, _id, _root);
    }
};
exports.default = _CubY_DOM;

/***/ }),

/***/ "./src/cuby/CubY_Routine.js":
/*!**********************************!*\
  !*** ./src/cuby/CubY_Routine.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var MAX_CYCLE = 100;

var CubY_Routine = function () {
    function CubY_Routine(_tickSpeed, _options) {
        _classCallCheck(this, CubY_Routine);

        var options = _options || {};
        this.init(options);
        this.MAX_CYCLE = MAX_CYCLE;
    }

    _createClass(CubY_Routine, [{
        key: 'init',
        value: function init(options) {
            window.cr = this;
            this.cycle = 0;
            this.routineList = [];
            this.longestRoutineTime = 0;
            //setTimeout(this.start.bind(this),0);
        }
    }, {
        key: 'start',
        value: function start() {
            var self = this;
            this.cycleStartTime = Date.now();
            setTimeout(self.routine.bind(this), 0);
        }
    }, {
        key: 'createRoutine',
        value: function createRoutine(name, group) {
            var newRoutine = new Routine(name, group);
            var self = this;
            newRoutine.insert = function () {
                if (newRoutine.freq !== 1) {
                    newRoutine.counter += self.routineList.length + 1;
                }

                self.routineList.push(newRoutine);
                return newRoutine;
            };
            newRoutine.remove = function () {
                var index = self.routineList.indexOf(newRoutine);
                self.routineList.splice(index, 1);
            };
            return newRoutine;
        }
    }, {
        key: 'getCurrentCycle',
        value: function getCurrentCycle() {
            return this.cycle;
        }
    }, {
        key: 'routine',
        value: function routine() {
            var routineList = this.routineList;
            var self = this;

            var _loop = function _loop() {
                var routine = routineList[i];
                try {
                    if (routine.checkLock()) {
                        routine.lock();
                        setTimeout(function () {
                            var startTime = Date.now();
                            routine.action();
                            self.lastRoutineTime = Date.now() - startTime;
                            if (self.longestRoutineTime < self.lastRoutineTime) {
                                self.longestRoutineTime = self.lastRoutineTime;
                            }
                            if (self.lastRoutineTime > 200) {
                                console.warn('Routine:' + routine.name + ' took too long to run. [' + self.lastRoutineTime + 'ms]');
                            }
                            routine.unlock();
                        }, routine.freq);
                    }
                } catch (e) {
                    //DECIDE IF REMOVE ROUTINE LATER;
                }
            };

            for (var i = 0; i < routineList.length; i++) {
                _loop();
            }
            this.cycle++;
            if (this.cycle === MAX_CYCLE) {
                this.cycle = 0;
                this.lastCycleTime = Date.now() - this.cycleStartTime;
                this.cyclePerSec = Math.floor(1000 / this.lastCycleTime);
            }
            this.start();
        }
    }]);

    return CubY_Routine;
}();

var Routine = function () {
    function Routine(name, group) {
        _classCallCheck(this, Routine);

        this.name = name;
        this.group = group || 'common';
        this.freq = 1;
        var self = this;
        this.action = function () {
            self.isRunning = true;
        };
        this.counter = 0;
        this.repeat = -1;
    }

    _createClass(Routine, [{
        key: 'lock',
        value: function lock() {
            if (this.repeat > 0) this.repeat--;
            this.isRunning = true;
        }
    }, {
        key: 'unlock',
        value: function unlock() {
            if (this.repeat === 0) {
                this.remove();
            }
            this.isRunning = false;
        }
    }, {
        key: 'attr',
        value: function attr(key, value) {
            this[key] = value;
            if (key === 'freq') {
                this['counter'] = value;
            }
            return this;
        }
    }, {
        key: 'resetCounter',
        value: function resetCounter() {
            this.counter = this.freq;
        }
    }, {
        key: 'checkLock',
        value: function checkLock() {
            if (this.counter > 0) {
                this.counter--;
            }

            return !(this.isRunning === true || this.counter > 0);
        }
    }]);

    return Routine;
}();

var _CubY_Routine = new CubY_Routine();
exports.default = _CubY_Routine;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CubY = __webpack_require__(/*! ./cuby/CubY */ "./src/cuby/CubY.js");

var _CubY2 = _interopRequireDefault(_CubY);

var _cardContainer = __webpack_require__(/*! ./components/cardContainer */ "./src/components/cardContainer.js");

var _cardContainer2 = _interopRequireDefault(_cardContainer);

var _colors = __webpack_require__(/*! ./styles/colors */ "./src/styles/colors.js");

var _colors2 = _interopRequireDefault(_colors);

var _common = __webpack_require__(/*! ./styles/common */ "./src/styles/common.js");

var _common2 = _interopRequireDefault(_common);

var _View = __webpack_require__(/*! ./services/View */ "./src/services/View.js");

var _View2 = _interopRequireDefault(_View);

var _Web = __webpack_require__(/*! ./services/Web */ "./src/services/Web.js");

var _Web2 = _interopRequireDefault(_Web);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by Anxin Yang on 3/28/2018.
 */
_CubY2.default.addOn(_View2.default);
_CubY2.default.addOn(_Web2.default);
_CubY2.default.addOn(_cardContainer2.default);
_CubY2.default.addOn(_common2.default);
//Declare layout components
window.root = _CubY2.default.createElement('div', 'cuby_root', document.getElementById('app')).style(_CubY2.default.ROOT_STYLE);

var mainContentSection = _CubY2.default.createElement('div', 'mainContentSection').style({
    position: 'relative',
    minWidth: '300px',
    width: '66.66%',
    flexGrow: 1,
    transition: '0.2s'
});
var secondContentSection = _CubY2.default.createElement('div', 'secondContentSection').style({
    position: 'relative',
    minWidth: '100px',
    flexGrow: 1,
    transition: '0.2s'
});

var mainCard = _CubY2.default.createCard('mainCard');
var secondCard = _CubY2.default.createCard('secondCard');

// Place components
root.appendElement(mainContentSection);
root.appendElement(secondContentSection);

mainContentSection.appendElement(mainCard);

// Connect store to components and events

_CubY2.default.connect('viewportSize').to(_CubY2.default.resetMainContentSectionSize).belong(mainContentSection);

//setup basic listener
window.addEventListener('resize', _CubY2.default.saveViewportSize);
assetLoaded('main');

//functions

/***/ }),

/***/ "./src/services/View.js":
/*!******************************!*\
  !*** ./src/services/View.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var View = {
    saveViewportSize: function saveViewportSize() {
        var viewportSize = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        CubY.storeValue('viewportSize', viewportSize);
    },
    resetMainContentSectionSize: function resetMainContentSectionSize(size) {
        var mainContentSection = root.select('#mainContentSection');
        var width = size.width <= 800 ? '100%' : '66.66%';
        mainContentSection.style('width', width);
    }
};

exports.default = View;

/***/ }),

/***/ "./src/services/Web.js":
/*!*****************************!*\
  !*** ./src/services/Web.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Anxin Yang on 6/23/2018.
 */

var Web_Port = {
    request: function request(method, data, url, _settings, callback) {
        var settings = _settings || {};
        $.ajax({
            url: url,
            type: method,
            async: settings.async || true,
            contentType: settings.contentType || "application/json; charset=utf-8",
            data: JSON.stringify(data),
            dataType: settings.dataType || "json",
            beforeSend: function beforeSend(xhr) {
                if (CubY.getValue('Authorization')) {
                    xhr.setRequestHeader("Authorization", CubY.getValue('Authorization'));
                }
            }

        }).done(function (response, textStatus, xhr) {
            if (typeof callback === 'function') callback(response, textStatus, xhr);
        }).fail(function (response, textStatus, xhr) {
            if (response.status === 401) {
                CubY.storeValue('isLogin', false);
            }
            if (typeof callback === 'function') callback(response, textStatus, xhr);
        });
    },

    baseUrl: 'http://anxinyang.us/php/api/todo/',

    getTodoList: function getTodoList(id, callback) {
        CubY.request('get', undefined, CubY.baseUrl + 'read.php' + (id !== undefined ? '?id=' + id : ''), undefined, function (response, textStatus, xhr) {
            if (id) {
                CubY.storeValue(id, response.data[0]);
                CubY.storeValue('currentTodo', id, { forceReact: true });
            } else {
                var todoList = CubY.storeDataArray(response.data);
                CubY.storeValue('todoList', todoList);
            }
            if (callback) {
                callback();
            }
        });
    },
    createNewTodo: function createNewTodo(data) {
        data.ref = Math.random() * 10000 + '.' + Date.now();
        CubY.request('post', data, CubY.baseUrl + 'create.php', undefined, function (response, textStatus, xhr) {
            if (response.message === 'Created') {
                CubY.getTodoList(undefined, function () {
                    CubY.storeValue('currentTodo', response.id);
                });
            }
        });
    },
    updateTodo: function updateTodo(data) {
        data.ref = Math.random() * 10000 + '.' + Date.now();
        CubY.request('put', data, CubY.baseUrl + 'update.php', undefined, function (response, textStatus, xhr) {
            if (response.message === 'Updated') {
                //CubY.storeValue('currentTodo', data.id, {forceReact: true});
                CubY.storeValue(data.id, {});
                CubY.storeValue('hint', 'Change Saved', { forceReact: true });
                // TODO: WHAT NEXT?
            }
        });
    }
};
//window.Web_Port = Web_Port;
exports.default = Web_Port;

/***/ }),

/***/ "./src/styles/colors.js":
/*!******************************!*\
  !*** ./src/styles/colors.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var COLORS = {
    BACKGROUND_GRAY: 'rgba(243,243,243,.85)'
};
Object.assign(window, COLORS);

/***/ }),

/***/ "./src/styles/common.js":
/*!******************************!*\
  !*** ./src/styles/common.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var COMMON_STYLE = {
    ROOT_STYLE: {
        width: '100vw',
        height: '100vh',
        margin: 0,
        fontFamily: 'Arial',
        fontSize: '12px ',
        display: 'flex',
        minWidth: '300px',
        flexWrap: 'wrap',
        background: BACKGROUND_GRAY,
        overflowX: 'hidden'
    }
};
exports.default = COMMON_STYLE;

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VieS9DdWJZLmpzIiwid2VicGFjazovLy8uL3NyYy9jdWJ5L0N1YllfQ29yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VieS9DdWJZX0RPTS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VieS9DdWJZX1JvdXRpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9XZWIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21tb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQSxJQUFNO2tCQUVGO2NBQ0E7YUFDQTtZQUNBO1dBQ0E7Z0JBQ0E7YUFDQTtjQUNBO2NBQ0E7aUJBQWE7QUFUYjs7QUFZSixJQUFJO2dCQUNZLG9CQUFVLElBQ2xCO1lBQUksT0FBTyxLQUFLLGNBQWMsT0FBTyxJQUNoQyxNQUNMO2VBQ0g7QUFMTTtBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEo7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUNBLElBQU0saUJBQWlCLDBCQUFNLENBQTdCOztBQUVBLElBQUk7O0FBR0E7Y0FBVSxvQkFBVSxTQUFTLGlCQUM3QjtnQkFBWSxvQkFBVSxXQUFXLGlCQUNqQztvQkFBZ0Isb0JBQVUsZUFBZSxpQkFDekM7Z0JBQVksb0JBQVUsV0FBVyxpQkFDakM7YUFBUyxvQkFBVSxRQUFRLGlCQUMzQjtXQUFPLG9CQUFVLE1BQU0saUJBQ3ZCO1dBQU8sb0JBQVUsTUFBTSxpQkFDdkI7ZUFBVyxvQkFBVSxVQUFVLGlCQUMvQjttQkFBZSxvQkFBVSxjQUFjLGlCQUV2Qzs7QUFDQTttQkFBZSxtQkFFZjs7QUFDQTttQkFBYyx1QkFBYSxjQUFjLG9CQUN6QztxQkFBZ0IsdUJBQWEsZ0JBQWdCLG9CQUM3QzthQUFRLHVCQUFhLFFBQVEsb0JBQzdCO0FBQ0E7V0FBTyxlQUFVLEtBQ2Y7YUFBSSxJQUFJLE9BQU8sS0FDWDtnQkFBRyxJQUFJLGVBQWUsTUFDbEI7cUJBQUssT0FBTyxJQUNmO0FBQ0o7QUFDRjtBQUNEO0FBQ0E7YUFDQTtlQUFXLHFDQTlCSjtBQUVQOztBQStCSixPQUFPLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENkLElBQU0saUJBQWlCLDBCQUFNLENBQTdCOzs0QkFFSTt1QkFBWSxRQUFPOzhCQUNmOztZQUFJLFFBQVEsU0FDWjtZQUFJLE9BQ0o7YUFBSyxLQUNSOzs7OztxQ0FHRztnQkFBSSxRQUFRLFVBQ1o7aUJBQUssVUFDTDtpQkFBSyxnQkFDTDtpQkFBSyxVQUFVLEtBQ2Y7bUJBQU8sS0FDVjs7OztxQ0FHRztnQkFBSSxPQUNKO2dCQUFJLFdBQ0o7Z0JBQUksVUFDSjtnQkFBSSxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsQ0FBQyxJQUFJLFVBQVcsQ0FBQyxDQUFDLE9BQU8sU0FBUyxVQUFVLFVBQVUsUUFBUSxZQUFZLEdBQzNGOzBCQUNBO3VCQUNIO0FBQ0Q7Z0JBQUcsT0FBTyxtQkFBbUIsYUFDekI7dUJBQ0g7QUFDRDtnQkFBRyxlQUFlLEtBQUssT0FBTywwQkFBMkIsR0FDakQ7dUJBQU8sRUFBRSxlQUNaO0FBRnlDLGFBQUMsQ0FFeEMsQ0FBQyxPQUFPLGFBQWEsT0FBTyxtQkFDL0I7dUJBQ0g7QUFDRDtnQkFBRyxTQUFTLENBQUMsQ0FBQyxTQUFTLGNBQ25CO3VCQUFPLFNBQVMsWUFDWjt3QkFBSSxTQUFTLFVBQ2I7eUJBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxVQUFVLFFBQVEsS0FDbEM7NkJBQUssSUFBSSxPQUFPLFVBQVUsSUFDdEI7Z0NBQUksTUFBTSxVQUNWO2dDQUFJLElBQUksZUFBZSxNQUNuQixPQUFPLE9BQU8sSUFDckI7QUFDSjtBQUNEOzJCQUNIO0FBQ0Q7dUJBQ0E7dUJBQ0g7QUFDRDtnQkFBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sWUFDakI7dUJBQ0g7QUFDRDtnQkFBRyxDQUFDLENBQUMsT0FBTyxVQUFVLENBQUMsQ0FBQyxPQUFPLE9BQU8sVUFDbEM7MkJBQ0E7dUJBQ0g7QUFDRDtnQkFBRyxDQUFDLFlBQVksWUFBWSxDQUFDLENBQUMsT0FBTyxLQUNqQzt1QkFDSDtBQUNKOzs7OzRGQUdHO2dCQUFJLE9BQ0o7Z0JBQUksVUFBVSxZQUNkO2dCQUFJLFFBQVEsVUFDWjtnQkFBSSxXQUFXLGFBQ2Y7Z0JBQUksUUFBUSxVQUNaO2dCQUFJLFdBQ0o7Z0JBQUksZ0JBQWdCLGtCQUVwQjs7a0JBQU0sUUFBUSxVQUFVLE9BQ3BCO29CQUFJLE1BQU0sTUFDVjtvQkFBSSxRQUFRLGFBQWEsS0FBSyxVQUFVLFFBQVEsU0FBUyxRQUNyRDtBQUNIO0FBRUQ7O29CQUFJLE9BQU8sS0FBSyxXQUFXLEtBQUssT0FFaEM7OzhCQUNBO3lCQUFTLEtBQ1o7QUFFRDs7cUJBQVMsUUFDVDttQkFDSDs7OztzRUFHRztnQkFBSSxVQUFVLFlBQ2Q7Z0JBQUksUUFBUSxLQUNaO2dCQUFJLE1BQ0o7Z0JBQUksV0FBVyxhQUNmO2dCQUFJLFdBQ0o7Z0JBQUksT0FBTyxNQUNYO2dCQUFJLGNBQ0o7Z0JBQUcsU0FBTyxhQUFhLFNBQVMsT0FBTyxTQUFTLFFBQVEsY0FBWSxRQUFRLEVBQUUsZ0JBQWdCLFFBQzFGO3VCQUFPLE9BQU8sT0FBTyxNQUN4QjtBQUZELG1CQUdJOzhCQUFlLFNBQ2Y7dUJBQ0g7QUFDRDtpQkFBSyxRQUFRLE9BRWI7O3FCQUNBO2dCQUFHLGVBQWUsUUFBUSxZQUN0QjtxQkFBSyxNQUNSO0FBQ0Q7bUJBQ0g7Ozs7c0RBRUc7Z0JBQUksTUFBTSxRQUNWO2dCQUFHLGtCQUFnQixPQUNmO3VCQUFPLEtBQUssUUFDZjtBQUZELG1CQUdJO3FCQUFJLElBQUksS0FBSyxLQUFLLFNBQ2Q7d0JBQUcsS0FBSyxRQUFRLGVBQWUsSUFDM0I7NEJBQUcsRUFBRSxrQkFBZ0IsSUFBSSxlQUNyQjttQ0FBTyxLQUFLLFFBQ2Y7QUFDSjtBQUNKO0FBQ0Q7dUJBQ0g7QUFFSjs7OztzQ0FHRztnQkFBSSxjQUFjLElBQUksZUFBZSxNQUNyQzttQkFDSDs7OzttQ0FFRztnQkFBSSxPQUNKO2dCQUFJLGdCQUFnQixLQUNwQjtnQkFBSSxlQUFlLGNBQWMsUUFDakM7Z0JBQUksV0FBVyxLQUFLLFNBQ3BCO2lCQUFJLElBQUksTUFBTSxjQUNWO29CQUFHLGFBQWEsZUFBZSxLQUMzQjtpQ0FBYSxJQUFJLElBQ3BCO0FBQ0o7QUFDSjs7OztnREFFRztnQkFBSSxRQUNKO2dCQUFHLE9BQU8sVUFBVSxZQUNoQjt1QkFBTyxNQUFNLEtBQUssTUFDckI7QUFGRCxtQkFHSTt1QkFDSDtBQUNKOzs7OzJDQUVHO2dCQUFHLENBQUMsS0FDQTt1QkFDSDtBQUNEO2lCQUFJLElBQUksT0FBTyxLQUNYO29CQUFHLElBQUksZUFBZSxNQUNsQjsyQkFDSDtBQUNKO0FBQ0Q7bUJBQ0g7Ozs7bUNBR0c7Z0JBQUcsS0FBSyxTQUFTLGVBQ2I7d0JBQVEsSUFBSSxZQUNmO0FBQ0o7Ozs7Ozs7QUFFTCxJQUFNLGFBQWEsSUFBSTs7O2lDQUluQjs0QkFBWSxLQUFLLE1BQUs7OEJBQ2xCOztZQUFJLE9BQ0o7YUFBSyxLQUFNLGVBQWUsS0FBSyxXQUFTLFFBQU8sTUFBSSxLQUNuRDthQUFLLGFBRUw7O2FBQUssU0FBUyxZQUNWO2dCQUFJLGVBQWUsS0FBSyxjQUFjLEtBQUssZUFDM0M7eUJBQWEsS0FBSyxNQUNsQjtpQkFBSyxjQUFjLEtBQUssY0FDM0I7QUFDRDthQUFLLFNBQVMsWUFDVjtnQkFDSTtvQkFBRyxLQUFLLGNBQWMsS0FBSyxhQUN2Qjt3QkFBRyxLQUFLLGNBQWMsS0FBSyxZQUFZLEtBQUssS0FDeEM7K0JBQU8sS0FBSyxjQUFjLEtBQUssWUFBWSxLQUM5QztBQUNEO3dCQUFJLEtBQUssY0FBYyxLQUFLLGNBQWMsS0FBSyxjQUMzQzsrQkFBTyxLQUFLLGNBQWMsS0FDN0I7QUFDSjtBQUNKO0FBVEQsY0FTQyxPQUFPLEdBQ0o7d0JBQVEsS0FDWDtBQUNKO0FBQ0Q7YUFDSDs7Ozs7bUNBRUc7aUJBQUssU0FDTDttQkFDSDs7OztzQ0FFRztpQkFBSyxRQUNMO2tCQUFNLGVBQWUsS0FDckI7bUJBQ0g7Ozs7c0NBRUc7Z0JBQUksT0FDSjtnQkFBRyxLQUFLLGdCQUFnQixXQUNwQjs2QkFBYSxLQUNoQjtBQUNEO2lCQUFLLHlCQUF5QixZQUMxQjtvQkFBSSxPQUFPLEtBQUssV0FBVyxZQUN2Qjt3QkFBSSxLQUFLLE9BQ0w7NEJBQUksS0FBSyxNQUFNLFVBQ1g7aUNBQUssT0FBTyxLQUFLLEtBQUssT0FDekI7QUFDSjtBQUpELDJCQUtJOzZCQUFLLE9BQ1I7QUFDSjtBQUNEO3FCQUFLLGNBQ1I7QUFYa0IsZUFZdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNU5MOzs7MkJBSUk7c0JBQVksTUFBSyxLQUFJLE9BQU87OEJBQ3hCOzthQUFLLE1BQU0sS0FBSyxVQUFVLFNBQzFCO2FBQUssS0FBSyxLQUFLLFVBQVUsUUFBTyxLQUFLLE1BQU0sTUFBTSxLQUFLLFdBQVMsUUFBTSxNQUFJLEtBQ3pFO2FBQUssTUFBTSxTQUFTLGNBQWMsS0FDbEM7YUFBSyxJQUFJLGFBQWEsTUFBSyxLQUMzQjthQUFLLGVBQ0w7YUFBSyxZQUNMO2FBQUssV0FDTDthQUFLLFdBQ0w7YUFBSyxXQUNMO2FBQUssaUJBQ0w7YUFDQTthQUFLLFVBQ0w7YUFBSyxLQUVMOztZQUFJLE9BQ0o7YUFBSyxVQUFVLFVBQVUsTUFDckI7Z0JBQUksVUFBUyxLQUFLLFNBQ2xCO21CQUFPLFlBQ0g7b0JBQUcsU0FDQzs0QkFBUSxLQUFLLE1BQU0sS0FBSyxNQUMzQjtBQUNKO0FBQ0o7QUFDSjs7Ozs7a0RBRUc7aUJBQUssU0FBUyxRQUNkO21CQUNIOzs7O21DQUVHO2lCQUFLLE9BQ0w7bUJBQ0g7Ozs7b0NBRUc7Z0JBQUcsT0FDQztzQkFBTSxZQUFZLEtBQ2xCO3FCQUFLLFNBQ0w7cUJBQ0g7QUFDRDttQkFDSDs7OzswQ0FFRztnQkFBSSxNQUFNLEtBQUssVUFDZjtnQkFBSSxLQUFLLEtBQUssVUFDZDtnQkFBSSxVQUFVLEtBQUssY0FBYyxLQUNqQztpQkFBSyxjQUNMO21CQUNIOzs7O2dEQUVHO2dCQUFJLFVBQVUsS0FBSyxVQUNuQjtvQkFBUSxTQUVSOztpQkFBSyxhQUFhLEtBQ2xCO2lCQUFLLElBQUksWUFBWSxRQUNyQjtnQkFBRyxLQUFLLFlBQVksS0FBSyxRQUNyQjt3QkFDSDtBQUNEO21CQUNIOzs7OzBDQUVHO2dCQUFJLGFBRUo7O2dCQUFHLFFBQU8sc0RBQVEsVUFDZDtxQkFBSSxJQUFJLEtBQUssS0FDVDt5QkFBSyxLQUFLLEdBQUUsSUFDZjtBQUNEO3VCQUNIO0FBRUQ7O2dCQUFHLFFBQU8sZUFBZSxRQUFRLGVBQzdCO3dCQUNIO0FBRkQsbUJBR0k7d0JBQVEsS0FBSyxVQUNiO3FCQUFLLElBQUksYUFBYSxLQUN6QjtBQUVEOztpQkFBSyxVQUFVLE9BQ2Y7bUJBQ0g7Ozs7MENBRUc7Z0JBQUksYUFFSjs7Z0JBQUcsUUFBTyxzREFBUSxVQUNkO3FCQUFJLElBQUksS0FBSyxLQUNUO3lCQUFLLEtBQUssR0FBRSxJQUNmO0FBQ0Q7dUJBQ0g7QUFFRDs7Z0JBQUcsUUFBTyxlQUFlLFFBQVEsZUFDN0I7d0JBQ0g7QUFGRCxtQkFHSTt3QkFBUSxLQUFLLFVBQ2I7cUJBQUssSUFBSSxPQUNaO0FBRUQ7O2lCQUFLLFNBQVMsT0FDZDttQkFDSDs7Ozs4Q0FFRztnQkFBSSxRQUNKO2dCQUFJLE9BQ0o7aUJBQUssR0FBRyxhQUNSO2lCQUFLLElBQUksaUJBQWlCLFdBQVUsVUFBVSxHQUMxQztzQkFBTSxLQUFLLE1BQUssR0FBRSxLQUNyQjtBQUNEO21CQUNIOzs7OzRDQUVHO2dCQUFJLE1BQU0sS0FBSyxVQUNmO2dCQUFJLFFBQVEsS0FBSyxVQUNqQjtnQkFBRyxRQUFPLHNEQUFRLFVBQ2Q7cUJBQUksSUFBSSxLQUFLLEtBQ1Q7eUJBQUssTUFBTSxHQUFFLElBQ2hCO0FBQ0Q7dUJBQ0g7QUFDRDtpQkFBSyxTQUFTLE9BQ2Q7aUJBQUssSUFBSSxNQUFNLE9BQ2Y7bUJBQ0g7Ozs7d0NBRUc7Z0JBQUksUUFBUSxLQUFLLFVBQ2pCO2lCQUFLLFlBQ0w7aUJBQUssSUFBSSxZQUNUO21CQUNIOzs7O3FDQUVHO21CQUFPLEtBQ1Y7Ozs7Z0RBRUc7Z0JBQUksWUFBWSxLQUFLLFVBQ3JCO2dCQUFJLFVBQVUsS0FBSyxXQUNuQjtvQkFBUSxLQUNSO2lCQUFLLElBQUksVUFBVSxJQUNuQjtpQkFBSyxVQUNMO21CQUNIOzs7OzBDQUVHO2dCQUFJLFdBQVcsVUFBVSxPQUN6QjtnQkFBSSxPQUFPLFVBQVUsVUFDckI7b0JBQ0k7cUJBQ0k7MkJBQU8sS0FBSyxXQUNoQjtxQkFDSTsyQkFBTyxLQUFLLGtCQUNoQjtBQUNJOzJCQUFPLEtBQUssWUFFdkI7Ozs7O3VDQUVHO2dCQUFJLGVBQWUsS0FDbkI7Z0JBQUksY0FDSjtpQkFBSSxJQUFJLElBQUksR0FBRyxJQUFFLGFBQWEsUUFBTyxLQUNqQztvQkFBSSxRQUFRLGFBQ1o7b0JBQUcsTUFBTSxPQUFPLElBQ1o7NkJBQ0E7QUFDSDtBQUNKO0FBQ0Q7bUJBQ0g7Ozs7cURBRUc7Z0JBQUksZUFBZSxLQUNuQjtnQkFBSSxhQUNKO2lCQUFJLElBQUksSUFBSSxHQUFHLElBQUUsYUFBYSxRQUFPLEtBQ2pDO29CQUFJLFFBQVEsYUFDWjtvQkFBRyxNQUFNLFFBQVEsUUFBUSxhQUFXLENBQUMsR0FDakM7K0JBQVcsS0FDZDtBQUNKO0FBQ0Q7bUJBQ0g7Ozs7MENBRUc7Z0JBQUksZUFBZSxLQUNuQjtnQkFBSSxhQUNKO2lCQUFJLElBQUksSUFBSSxHQUFHLElBQUUsYUFBYSxRQUFPLEtBQ2pDO29CQUFJLFFBQVEsYUFDWjtvQkFBRyxNQUFNLFFBQVEsTUFDYjsrQkFBVyxLQUNkO0FBQ0o7QUFDRDttQkFDSDs7Ozt1REFFRztnQkFBRyxjQUFZLGFBQWEsT0FBTyxjQUFjLFVBQzdDO3FCQUFLLFdBQVcsYUFDaEI7QUFDSDtBQUNEO2dCQUFJLFdBQVcsVUFBVSxPQUN6QjtnQkFBSSxPQUFPLFVBQVUsVUFDckI7Z0JBQUksY0FDSjtvQkFDSTtxQkFDSTt5QkFBSyxXQUFXLE1BQ2hCO0FBQ0o7cUJBQ0k7eUJBQUssa0JBQWtCLE1BQ3ZCO0FBQ0o7QUFDSTt5QkFBSyxZQUFZLFdBRTVCOzs7OztvREFFRztnQkFBSSxlQUFlLEtBQ25CO2lCQUFJLElBQUksSUFBSSxHQUFHLElBQUUsYUFBYSxRQUFPLEtBQ2pDO29CQUFJLFFBQVEsYUFDWjtvQkFBRyxNQUFNLE9BQU8sSUFDWjtpQ0FBYSxPQUFPLEdBQ3BCOzBCQUFNLE9BQU8sV0FDYjtBQUNBO0FBQ0g7QUFDSjtBQUNKOzs7O2tFQUVHO2dCQUFJLGVBQWUsS0FDbkI7aUJBQUksSUFBSSxJQUFJLEdBQUcsSUFBRSxhQUFhLFFBQU8sS0FDakM7b0JBQUksUUFBUSxhQUNaO29CQUFHLE1BQU0sUUFBUSxRQUFRLGFBQVcsQ0FBQyxHQUNqQztpQ0FBYSxPQUFPLEdBQ3BCOzBCQUFNLE9BQU8sV0FDYjtBQUNIO0FBQ0o7QUFDSjs7Ozt1REFFRztnQkFBSSxlQUFlLEtBQ25CO2lCQUFJLElBQUksSUFBSSxHQUFHLElBQUUsYUFBYSxRQUFPLEtBQ2pDO29CQUFJLFFBQVEsYUFDWjtvQkFBRyxNQUFNLFFBQVEsTUFDYjtpQ0FBYSxPQUFPLEdBQ3BCOzBCQUFNLE9BQU8sV0FDYjtBQUNIO0FBQ0o7QUFDSjs7OztnREFFRztBQUdBOzs7Z0JBQUksT0FDSjtpQkFDQTtnQkFBRyxhQUNDO3FCQUFLLDhCQUE4QixZQUMvQjt5QkFBSyxJQUNSO0FBRnVCLG1CQUczQjtBQUpELG1CQUtJO3FCQUFLLElBQ1I7QUFDRDtnQkFBRyxLQUFLLFFBQ0o7b0JBQUksZUFBZSxLQUFLLE9BQ3hCO3FCQUFJLElBQUksSUFBSSxHQUFHLElBQUUsYUFBYSxRQUFPLEtBQ2pDO3dCQUFJLFFBQVEsYUFDWjt3QkFBRyxVQUFVLE1BQ1Q7cUNBQWEsT0FBTyxHQUN2QjtBQUNKO0FBQ0o7QUFDRDtBQUdIOzs7Ozs7b0NBRUc7aUJBQUssV0FDTDtnQkFBRyxLQUFLLGtCQUNKOzZCQUFhLEtBQ2hCO0FBRUQ7O2lCQUFLLGVBQWUsUUFBUSxVQUFVLFlBQ2xDOzJCQUNIO0FBRUQ7O2lCQUFLLGFBQWEsUUFBUSxVQUFVLE9BQ2hDO3NCQUNIO0FBRUQ7O2dCQUFHLEtBQUssVUFBVSxXQUNkO3FCQUFLLFVBQVUsVUFBVSxLQUM1QjtBQUNKOzs7O3NDQUVHO2lCQUFLLFdBRUw7O2lCQUFLLGVBQWUsUUFBUSxVQUFVLFlBQ2xDOzJCQUNIO0FBRUQ7O2lCQUFLLGFBQWEsUUFBUSxVQUFVLE9BQ2hDO3NCQUNIO0FBRUQ7O2dCQUFHLEtBQUssVUFBVSxhQUNkO3FCQUFLLFVBQVUsWUFBWSxLQUM5QjtBQUNKOzs7OzBDQUVHO2dCQUFJLFFBQ0o7Z0JBQUcsT0FBTyxVQUFVLFlBQ2hCO3VCQUFPLE1BQU0sS0FBSyxNQUFLLEtBQzFCO0FBRkQsbUJBR0k7dUJBQ0g7QUFDSjs7Ozs7OztBQUVMLElBQUk7bUJBQ2UsdUJBQVUsTUFBTSxLQUFLLE9BQ2hDO2VBQU8sSUFBSSxTQUFTLE1BQU0sS0FDN0I7QUFIVztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RUSixJQUFNLFlBQVk7OytCQUVkOzBCQUFZLFlBQVcsVUFBUzs4QkFDNUI7O1lBQUksVUFBVSxZQUNkO2FBQUssS0FDTDthQUFLLFlBQ1I7Ozs7O3NDQUVHO21CQUFPLEtBQ1A7aUJBQUssUUFDTDtpQkFBSyxjQUNMO2lCQUFLLHFCQUNMO0FBQ0g7Ozs7Z0NBRUc7Z0JBQUksT0FDSjtpQkFBSyxpQkFBaUIsS0FDdEI7dUJBQVcsS0FBSyxRQUFRLEtBQUssT0FDaEM7Ozs7bURBRUc7Z0JBQUksYUFBYSxJQUFJLFFBQVEsTUFDN0I7Z0JBQUksT0FDSjt1QkFBVyxTQUFRLFlBQ2Y7b0JBQUcsV0FBVyxTQUFPLEdBQ2pCOytCQUFXLFdBQVcsS0FBSyxZQUFZLFNBQzFDO0FBRUQ7O3FCQUFLLFlBQVksS0FDakI7dUJBQ0g7QUFDRDt1QkFBVyxTQUFRLFlBQ2Y7b0JBQUksUUFBUyxLQUFLLFlBQVksUUFDOUI7cUJBQUssWUFBWSxPQUFPLE9BQzNCO0FBQ0Q7bUJBQ0g7Ozs7MENBRUc7bUJBQU8sS0FDVjs7OztrQ0FFRztnQkFBSSxjQUFjLEtBQ2xCO2dCQUFJLE9BQU87O3lDQUVQO29CQUFJLFVBQVUsWUFDZDtvQkFDSTt3QkFBRyxRQUFRLGFBQ1A7Z0NBQ0E7bUNBQVcsWUFDUDtnQ0FBSSxZQUFZLEtBQ2hCO29DQUNBO2lDQUFLLGtCQUFrQixLQUFLLFFBQzVCO2dDQUFHLEtBQUsscUJBQW1CLEtBQUssaUJBQzVCO3FDQUFLLHFCQUFtQixLQUMzQjtBQUNEO2dDQUFHLEtBQUssa0JBQWdCLEtBQ3BCO3dDQUFRLEtBQUssYUFBYSxRQUFRLE9BQU8sNkJBQTJCLEtBQUssa0JBQzVFO0FBQ0Q7b0NBQ0g7QUFYRCwyQkFXRSxRQUNMO0FBQ0o7QUFoQkQsa0JBZ0JDLE9BQU8sR0FDSjtBQUNIO0FBdkJBO0FBR0w7O2lCQUFJLElBQUksSUFBRSxHQUFFLElBQUUsWUFBWSxRQUFPLEtBQUk7QUFxQnBDO0FBQ0Q7aUJBQ0E7Z0JBQUcsS0FBSyxVQUFVLFdBQ2Q7cUJBQUssUUFDTDtxQkFBSyxnQkFBZ0IsS0FBSyxRQUFRLEtBQ2xDO3FCQUFLLGNBQWMsS0FBSyxNQUFNLE9BQU8sS0FDeEM7QUFDRDtpQkFDSDs7Ozs7OzswQkFHRDtxQkFBWSxNQUFLLE9BQU07OEJBQ25COzthQUFLLE9BQ0w7YUFBSyxRQUFRLFNBQ2I7YUFBSyxPQUNMO1lBQUksT0FDSjthQUFLLFNBQVMsWUFDVjtpQkFBSyxZQUNSO0FBQ0Q7YUFBSyxVQUNMO2FBQUssU0FBUyxDQUNqQjs7Ozs7K0JBRUc7Z0JBQUcsS0FBSyxTQUFPLEdBQUUsS0FDakI7aUJBQUssWUFDUjs7OztpQ0FFRztnQkFBRyxLQUFLLFdBQVMsR0FDYjtxQkFDSDtBQUNEO2lCQUFLLFlBQ1I7Ozs7eUNBRUc7aUJBQUssT0FDTDtnQkFBRyxRQUFNLFFBQ0w7cUJBQUssYUFDUjtBQUNEO21CQUNIOzs7O3VDQUVHO2lCQUFLLFVBQVUsS0FDbEI7Ozs7b0NBRUc7Z0JBQUcsS0FBSyxVQUFRLEdBQ1o7cUJBQ0g7QUFFRDs7bUJBQU8sRUFBRSxLQUFLLGNBQWMsUUFBUSxLQUFLLFVBQzVDOzs7Ozs7O0FBR0wsSUFBTSxnQkFBZ0IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDL0cxQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBUkE7OztBQVNBLGVBQUs7QUFDTCxlQUFLO0FBQ0wsZUFBSztBQUNMLGVBQUs7QUFDTDtBQUNBLE9BQU8sT0FBTyxlQUFLLGNBQWMsT0FBTyxhQUFhLFNBQVMsZUFBZSxRQUN4RSxNQUFNLGVBQUs7O0FBRWhCLElBQUksb0NBQTBCLGNBQWMsT0FBTyxzQkFDOUM7Y0FFRztjQUNBO1dBQ0E7Y0FDQTtnQkFBVztBQUpYLENBRmlCO0FBUXpCLElBQUksc0NBQTRCLGNBQWMsT0FBTyx3QkFBd0I7Y0FFekU7Y0FDQTtjQUNBO2dCQUFXO0FBSFgsQ0FEdUI7O0FBTzNCLElBQUksV0FBVyxlQUFLLFdBQVc7QUFDL0IsSUFBSSxhQUFhLGVBQUssV0FBVzs7QUFFakM7QUFDQSxLQUFLLGNBQWM7QUFDbkIsS0FBSyxjQUFjOztBQUVuQixtQkFBbUIsY0FBYzs7QUFFakM7O0FBRUEsZUFBSyxRQUFRLGdCQUFnQixHQUFHLGVBQUssNkJBQTZCLE9BQU87O0FBRXpFO0FBQ0EsT0FBTyxpQkFBaUIsVUFBVSxlQUFLO0FBQ3ZDLFlBQVk7O0FBRVosVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREEsSUFBTTtBQUFPLGtEQUVMO1lBQUk7bUJBQ08sT0FDUDtvQkFBUSxPQUVaO0FBSEk7YUFHQyxXQUFXLGdCQUNuQjtBQUNEO0FBUlMsc0VBUW1CLE1BQ3hCO1lBQUkscUJBQXFCLEtBQUssT0FDOUI7WUFBSSxRQUFRLEtBQUssU0FBUyxNQUFJLFNBQzlCOzJCQUFtQixNQUFNLFNBQzVCO0FBWlE7QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RKOzs7O0FBSUEsSUFBSTtBQUFXLDhCQUNILFFBQVEsTUFBTSxLQUFLLFdBQVcsVUFDbEM7WUFBSSxXQUFXLGFBQ2Y7VUFBRTtpQkFFRTtrQkFDQTttQkFBTyxTQUFTLFNBQ2hCO3lCQUFhLFNBQVMsZUFDdEI7a0JBQU0sS0FBSyxVQUNYO3NCQUFVLFNBQVMsWUFDbkI7d0JBQVksb0JBQVUsS0FDbEI7b0JBQUksS0FBSyxTQUFTLGtCQUNkO3dCQUFJLGlCQUFpQixpQkFBaUIsS0FBSyxTQUM5QztBQUNKO0FBWEU7O0FBQ0gsV0FZRCxLQUFLLFVBQVUsVUFBVSxZQUFZLEtBQ3BDO2dCQUFHLE9BQU8sYUFBYSxZQUFXLFNBQVMsVUFBVSxZQUN4RDtBQWZELFdBZUcsS0FBSyxVQUFVLFVBQVUsWUFBWSxLQUNwQztnQkFBRyxTQUFTLFdBQVcsS0FDbkI7cUJBQUssV0FBVyxXQUNuQjtBQUNEO2dCQUFHLE9BQU8sYUFBYSxZQUFXLFNBQVMsVUFBVSxZQUN4RDtBQUNKO0FBQ0Q7O2FBRUE7O2lCQUFhLHFCQUFTLElBQUksVUFDdEI7YUFBSyxRQUFRLE9BQU8sV0FBVyxLQUFLLFVBQVUsY0FBYSxPQUFLLFlBQVcsU0FBTyxLQUFJLEtBQUksV0FBVyxVQUFVLFVBQVUsWUFBWSxLQUNqSTtnQkFBRyxJQUNDO3FCQUFLLFdBQVcsSUFBSSxTQUFTLEtBQzdCO3FCQUFLLFdBQVcsZUFBZSxJQUFJLEVBQUMsWUFDdkM7QUFIRCxtQkFJSTtvQkFBSSxXQUFXLEtBQUssZUFBZSxTQUNuQztxQkFBSyxXQUFXLFlBQ25CO0FBQ0Q7Z0JBQUcsVUFDQztBQUNIO0FBQ0o7QUFDSjtBQUNEO21CQUFlLHVCQUFVLE1BQ3JCO2FBQUssTUFBTSxLQUFLLFdBQVMsUUFBUSxNQUFNLEtBQ3ZDO2FBQUssUUFBUSxRQUFRLE1BQU0sS0FBSyxVQUFVLGNBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxLQUM5RjtnQkFBRyxTQUFTLFlBQVksV0FDcEI7cUJBQUssWUFBWSxXQUFVLFlBQ3ZCO3lCQUFLLFdBQVcsZUFBZSxTQUNsQztBQUNKO0FBQ0o7QUFDSjtBQUNEO2dCQUFZLG9CQUFVLE1BQ2xCO2FBQUssTUFBTSxLQUFLLFdBQVMsUUFBUSxNQUFNLEtBQ3ZDO2FBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLGNBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxLQUM3RjtnQkFBRyxTQUFTLFlBQVksV0FDcEI7QUFDQTtxQkFBSyxXQUFXLEtBQUssSUFDckI7cUJBQUssV0FBVyxRQUFRLGdCQUFnQixFQUFDLFlBQ3pDO0FBQ0g7QUFDSjtBQUNKO0FBN0RVO0FBQ1g7QUE4REo7Ozs7Ozs7Ozs7Ozs7OztBQ25FQSxJQUFNO3FCQUNnQjtBQUFsQjtBQUVKLE9BQU8sT0FBTyxRQUFRLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z0QixJQUFNOztlQUdFO2dCQUNBO2dCQUNBO29CQUNBO2tCQUNBO2lCQUNBO2tCQUNBO2tCQUNBO29CQUNBO21CQUFXO0FBVFg7QUFESiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IENBUkRfU1RZTEUgPSB7XHJcbiAgICBcImJhY2tncm91bmRcIjogXCJ3aGl0ZVwiLFxyXG4gICAgXCJoZWlnaHRcIjogXCI5OCVcIixcclxuICAgIFwid2lkdGhcIjogXCI5OCVcIixcclxuICAgIFwibGVmdFwiOiBcIjBcIixcclxuICAgIFwidG9wXCI6IFwiMFwiLFxyXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXHJcbiAgICBcInJpZ2h0XCI6IFwiMFwiLFxyXG4gICAgXCJib3R0b21cIjogXCIwXCIsXHJcbiAgICBcIm1hcmdpblwiOiBcImF1dG9cIixcclxuICAgIFwiYm94U2hhZG93XCI6IFwibGlnaHRncmV5IDBweCAwcHggMXB4IDBweFwiXHJcbn07XHJcblxyXG5sZXQgY2FyZCA9IHtcclxuICAgIGNyZWF0ZUNhcmQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGxldCBjYXJkID0gQ3ViWS5jcmVhdGVFbGVtZW50KCdkaXYnLCBpZClcclxuICAgICAgICAgICAgLnN0eWxlKENBUkRfU1RZTEUpO1xyXG4gICAgICAgIHJldHVybiBjYXJkO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjYXJkOyIsImltcG9ydCBDdWJZX0NvcmUgZnJvbSAnLi9DdWJZX0NvcmUnO1xyXG5pbXBvcnQgQ3ViWV9ET00gZnJvbSAnLi9DdWJZX0RPTSc7XHJcbmltcG9ydCBDdWJZX1JvdXRpbmUgZnJvbSAnLi9DdWJZX1JvdXRpbmUnO1xyXG5jb25zdCBFTVBUWV9GVU5DVElPTiA9ICgpPT57fTtcclxuXHJcbnZhciBDdWJZID0ge1xyXG5cclxuICAgIC8vQ29yZVxyXG4gICAgZ2V0VmFsdWU6IEN1YllfQ29yZS5nZXRWYWx1ZS5iaW5kKEN1YllfQ29yZSksXHJcbiAgICBnZXRCcm93c2VyOiBDdWJZX0NvcmUuZ2V0QnJvd3Nlci5iaW5kKEN1YllfQ29yZSksXHJcbiAgICBzdG9yZURhdGFBcnJheTogQ3ViWV9Db3JlLnN0b3JlRGF0YUFycmF5LmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIHN0b3JlVmFsdWU6IEN1YllfQ29yZS5zdG9yZVZhbHVlLmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIGNvbm5lY3Q6IEN1YllfQ29yZS5jb25uZWN0LmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIHJlYWN0OiBDdWJZX0NvcmUucmVhY3QuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgZGVidWc6IEN1YllfQ29yZS5kZWJ1Zy5iaW5kKEN1YllfQ29yZSksXHJcbiAgICByZWFkVmFsdWU6IEN1YllfQ29yZS5yZWFkVmFsdWUuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgaXNPYmplY3RFbXB0eTogQ3ViWV9Db3JlLmlzT2JqZWN0RW1wdHkuYmluZChDdWJZX0NvcmUpLFxyXG5cclxuICAgIC8vRE9NXHJcbiAgICBjcmVhdGVFbGVtZW50OiBDdWJZX0RPTS5jcmVhdGVFbGVtZW50LFxyXG5cclxuICAgIC8vUm91dGluZVxyXG4gICAgY3JlYXRlUm91dGluZTpDdWJZX1JvdXRpbmUuY3JlYXRlUm91dGluZS5iaW5kKEN1YllfUm91dGluZSksXHJcbiAgICBnZXRDdXJyZW50Q3ljbGU6Q3ViWV9Sb3V0aW5lLmdldEN1cnJlbnRDeWNsZS5iaW5kKEN1YllfUm91dGluZSksXHJcbiAgICByb3V0aW5lOkN1YllfUm91dGluZS5yb3V0aW5lLmJpbmQoQ3ViWV9Sb3V0aW5lKSxcclxuICAgIC8vQWRkT25zXHJcbiAgICBhZGRPbjogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICBmb3IodmFyIGtleSBpbiBvYmope1xyXG4gICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGtleSkpe1xyXG4gICAgICAgICAgICAgIEN1Yllba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy9PdGhlclxyXG4gICAgdmVyc2lvbjogJzAuNmIubmUuMC4xMCcsXHJcbiAgICBkZWJ1Z0luZm86IFtDdWJZX0NvcmUsQ3ViWV9Sb3V0aW5lXVxyXG59O1xyXG5cclxud2luZG93LkN1YlkgPSBDdWJZO1xyXG5leHBvcnQgZGVmYXVsdCBDdWJZO1xyXG4iLCJjb25zdCBFTVBUWV9GVU5DVElPTiA9ICgpPT57fTtcclxuY2xhc3MgQ3ViWV9Db3Jle1xyXG4gICAgY29uc3RydWN0b3IoX3Byb3BzKXtcclxuICAgICAgICBsZXQgcHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0KHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gX3Byb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuZGF0YU1hcCA9IHt9O1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbk1hcCA9IHt9O1xyXG4gICAgICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuZ2V0QnJvd3NlcigpO1xyXG4gICAgICAgIHdpbmRvdy5jYyA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJvd3Nlcigpe1xyXG4gICAgICAgIGxldCBpc0lFID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ2hyb21lID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzT3BlcmEgPSBmYWxzZTtcclxuICAgICAgICBpZigoISF3aW5kb3cub3ByICYmICEhb3ByLmFkZG9ucykgfHwgISF3aW5kb3cub3BlcmEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCcgT1BSLycpID49IDApe1xyXG4gICAgICAgICAgICBpc09wZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcC50b1N0cmluZygpID09PSBcIltvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXVwiO1xyXG4gICAgICAgICAgICB9KSghd2luZG93WydzYWZhcmknXSB8fCBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKXtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc0lFID10cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2llJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWlzSUUgJiYgISF3aW5kb3cuU3R5bGVNZWRpYSl7XHJcbiAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEhd2luZG93LmNocm9tZSAmJiAhIXdpbmRvdy5jaHJvbWUud2Vic3RvcmUpe1xyXG4gICAgICAgICAgICBpc0Nocm9tZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoaXNDaHJvbWUgfHwgaXNPcGVyYSkgJiYgISF3aW5kb3cuQ1NTKXtcclxuICAgICAgICAgICAgcmV0dXJuICdibGluayc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlRGF0YUFycmF5KF9hcnJheSwgX2lkS2V5LCBfaXRlbVByb2Nlc3NvciwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBpZEtleSA9IF9pZEtleSB8fCAnaWQnO1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgYXJyYXkgPSBfYXJyYXkgfHwgW107XHJcbiAgICAgICAgdmFyIGl0ZW1MaXN0ID0gW107XHJcbiAgICAgICAgdmFyIGl0ZW1Qcm9jZXNzb3IgPSBfaXRlbVByb2Nlc3NvciB8fCBFTVBUWV9GVU5DVElPTjtcclxuXHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoX2l0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9pdGVtW2lkS2V5XTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IHNlbGYucmVhZFZhbHVlKG9wdGlvbnMuc2tpcEZ1biwgX2l0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZi5zdG9yZVZhbHVlKGtleSwgX2l0ZW0sIF9vcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1Qcm9jZXNzb3IoaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKF9hcnJheSwgaXRlbUxpc3QpO1xyXG4gICAgICAgIHJldHVybiBpdGVtTGlzdDtcclxuICAgIH07XHJcblxyXG4gICAgc3RvcmVWYWx1ZShfa2V5LCBfdmFsdWUsIF9vcHRpb25zLCBfY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZGF0YU1hcDtcclxuICAgICAgICB2YXIga2V5ID0gX2tleTtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBfY2FsbGJhY2sgfHwgRU1QVFlfRlVOQ1RJT047XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIHZhciBpdGVtID0gc3RvcmVba2V5XTtcclxuICAgICAgICB2YXIgc2hvdWxkUmVhY3QgPSB0cnVlO1xyXG4gICAgICAgIGlmKGl0ZW0hPT11bmRlZmluZWQgJiYgaXRlbSA9PT0gT2JqZWN0KGl0ZW0pICYmIG9wdGlvbnMub3ZlcndyaXRlIT09dHJ1ZSAmJiAhKGl0ZW0gaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgICAgICAgICAgaXRlbSA9IE9iamVjdC5hc3NpZ24oaXRlbSwgbmV3VmFsdWUpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc2hvdWxkUmVhY3QgPSAoaXRlbSE9PW5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgaXRlbSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFNYXBba2V5XSA9IGl0ZW07XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKGl0ZW0pO1xyXG4gICAgICAgIGlmKHNob3VsZFJlYWN0IHx8IG9wdGlvbnMuZm9yY2VSZWFjdCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWN0KGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfTtcclxuICAgIGdldFZhbHVlKF9rZXksIGNhc2VTZW5zaXRpdmUpIHtcclxuICAgICAgICB2YXIga2V5ID0gX2tleSB8fCAnJztcclxuICAgICAgICBpZihjYXNlU2Vuc2l0aXZlIT09ZmFsc2Upe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhTWFwW2tleV07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGZvcih2YXIgSyBpbiB0aGlzLmRhdGFNYXApe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kYXRhTWFwLmhhc093blByb3BlcnR5KEspKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihLLnRvTG93ZXJDYXNlKCk9PT1rZXkudG9Mb3dlckNhc2UoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFNYXBbS107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdChfa2V5KXtcclxuICAgICAgICBsZXQgbmV3Q29uZWN0b3IgPSBuZXcgQ3ViWV9Db25uZWN0b3IoX2tleSwgdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NvbmVjdG9yO1xyXG4gICAgfVxyXG4gICAgcmVhY3Qoa2V5KXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25NYXAgPSB0aGlzLmNvbm5lY3Rpb25NYXA7XHJcbiAgICAgICAgdmFyIGNvbm5lY3Rvck1hcCA9IGNvbm5lY3Rpb25NYXBba2V5XSB8fCB7fTtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBzZWxmLmdldFZhbHVlKGtleSk7XHJcbiAgICAgICAgZm9yKHZhciBpZCBpbiBjb25uZWN0b3JNYXApe1xyXG4gICAgICAgICAgICBpZihjb25uZWN0b3JNYXAuaGFzT3duUHJvcGVydHkoaWQpKXtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvck1hcFtpZF0ucnVuKG5ld1ZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVhZFZhbHVlKF92YWx1ZSwgZGF0YSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGwodGhpcyxkYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlzT2JqZWN0RW1wdHkob2JqKXtcclxuICAgICAgICBpZighb2JqKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gb2JqKXtcclxuICAgICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGtleSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYnVnKHN0cikge1xyXG4gICAgICAgIGlmKHRoaXMuZ2V0VmFsdWUoJ0RFQlVHX01PREUnKSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdERUJVRzogJyArIHN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5jb25zdCBfQ3ViWV9Db3JlID0gbmV3IEN1YllfQ29yZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBfQ3ViWV9Db3JlO1xyXG5cclxuY2xhc3MgQ3ViWV9Db25uZWN0b3J7XHJcbiAgICBjb25zdHJ1Y3RvcihrZXksIGNvcmUpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmlkID0gICdjb25uZWN0b3JfJyArIE1hdGgucmFuZG9tKCkqMTAwMDAgKydfJytEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ0tleSA9IGtleTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnNlcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25uZWN0b3JNYXAgPSBjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XSB8fCB7fTtcclxuICAgICAgICAgICAgY29ubmVjdG9yTWFwW3NlbGYuaWRdID0gc2VsZjtcclxuICAgICAgICAgICAgY29yZS5jb25uZWN0aW9uTWFwW3NlbGYuYmluZGluZ0tleV0gPSBjb25uZWN0b3JNYXA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmKGNvcmUuY29ubmVjdGlvbk1hcFtzZWxmLmJpbmRpbmdLZXldKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XVtzZWxmLmlkXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XVtzZWxmLmlkXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEN1YlkuaXNPYmplY3RFbXB0eShjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvcmUuY29ubmVjdGlvbk1hcFtzZWxmLmJpbmRpbmdLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignW1dhcm5pbmddOiBDb25uZWN0b3IgcmVtb3ZlIG1ldGhvZCByZWZlcmVuY2UgZXJyb3IuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5pbnNlcnQoKTtcclxuICAgIH1cclxuICAgIHRvKGFjdGlvbil7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBiZWxvbmcob3duZXIpe1xyXG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgICAgICBvd25lci5jb25uZWN0aW9uTGlzdC5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcnVuKG5ld1ZhbHVlKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYodGhpcy5fcmVhY3RUaW1lciAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3JlYWN0VGltZXIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlYWN0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYub3duZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5vd25lci5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjdGlvbi5jYWxsKHRoaXMub3duZXIsIG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWN0aW9uKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLl9yZWFjdFRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0sIDUwKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDUvMjYvMjAxOC5cclxuICovXHJcbmNsYXNzIEN1YllfRE9NIHtcclxuICAgIGNvbnN0cnVjdG9yKF90YWcsX2lkLF9yb290KSB7XHJcbiAgICAgICAgdGhpcy50YWcgPSB0aGlzLnJlYWRWYWx1ZShfdGFnKSB8fCAnZGl2JztcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWFkVmFsdWUoX2lkKXx8IHRoaXMudGFnICsgJ18nICsgTWF0aC5yYW5kb20oKSoxMDAwMCsnXycrRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy50YWcpO1xyXG4gICAgICAgIHRoaXMuZG9tLnNldEF0dHJpYnV0ZSgnaWQnLHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGUgPSB7fTtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0ge307XHJcbiAgICAgICAgdGhpcy5kb21TdHlsZSA9IHt9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25MaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5wYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gW107XHJcbiAgICAgICAgdGhpcy5yb290KF9yb290KTtcclxuXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVyID10aGlzLnVwZGF0ZXJzW25hbWVdO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYodXBkYXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIuY2FsbChzZWxmLCBzZWxmLmRhdGEsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc2V0VXBkYXRlcihuYW1lLHVwZGF0ZXIpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlcnNbbmFtZV0gPSB1cGRhdGVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYmluZChkYXRhKXtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcm9vdChfcm9vdCl7XHJcbiAgICAgICAgaWYoX3Jvb3Qpe1xyXG4gICAgICAgICAgICBfcm9vdC5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb290ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhcHBlbmQoX3RhZyxfaWQpe1xyXG4gICAgICAgIGxldCB0YWcgPSB0aGlzLnJlYWRWYWx1ZShfdGFnKTtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLnJlYWRWYWx1ZShfaWQpO1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gQ3ViWS5jcmVhdGVFbGVtZW50KHRhZyxpZCk7XHJcbiAgICAgICAgdGhpcy5hcHBlbmRFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgYXBwZW5kRWxlbWVudChDdWJZX0RPTSl7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLnJlYWRWYWx1ZShDdWJZX0RPTSk7XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnQgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKGVsZW1lbnQuZG9tKTtcclxuICAgICAgICBpZih0aGlzLmlzQWN0aXZlIHx8IHRoaXMuaXNSb290KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgYXR0cihrZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWU7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgZm9yKHZhciBrIGluIGtleSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dHIoayxrZXlba10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihrZXkgPT09J2FjdGl2YXRlZCcgfHwga2V5ID09PSAnZGVhY3RpdmF0ZWQnKXtcclxuICAgICAgICAgICAgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKGtleSx2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBwcm9wKGtleSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGsgaW4ga2V5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcChrLGtleVtrXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGtleSA9PT0nYWN0aXZhdGVkJyB8fCBrZXkgPT09ICdkZWFjdGl2YXRlZCcpe1xyXG4gICAgICAgICAgICB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbVtrZXldID0gIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBvbihldmVudE5hbWUsX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMub25bZXZlbnROYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmNhbGwoc2VsZixlLHNlbGYuZGF0YSlcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHN0eWxlKF9rZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5yZWFkVmFsdWUoX2tleSk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICBpZih0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgayBpbiBrZXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZShrLGtleVtrXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kb21TdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uc3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgY29udGVudChfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5pbm5lclRleHQgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGdldENvbnRlbnQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbm5lclRleHQ7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRDbGFzcyhfY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5yZWFkVmFsdWUoX2NsYXNzTmFtZSk7XHJcbiAgICAgICAgbGV0IGNsYXNzZXMgPSB0aGlzLmNsYXNzZXMgfHwgW107XHJcbiAgICAgICAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IGNsYXNzZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZWxlY3QoX3NlbGVjdG9yKXtcclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gX3NlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeUlkKG5hbWUpO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5Q2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlUYWcoX3NlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeUlkKGlkKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlDbGFzc05hbWUoY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldExpc3QgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5jbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKT4tMSl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMaXN0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRMaXN0O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlUYWcoX3RhZyl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXRMaXN0ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQudGFnID09PSBfdGFnKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldExpc3QucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldExpc3Q7XHJcbiAgICB9XHJcbiAgICByZW1vdmUoX3NlbGVjdG9yLF90cmFuc2l0aW9uKXtcclxuICAgICAgICBpZihfc2VsZWN0b3I9PT11bmRlZmluZWQgfHwgdHlwZW9mIF9zZWxlY3RvciA9PT0gJ251bWJlcicpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGYoX3NlbGVjdG9yIHx8IF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gX3NlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlJZChuYW1lLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlDbGFzc05hbWUobmFtZSxfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlUYWcoX3NlbGVjdG9yLF90cmFuc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeUlkKGlkLF90cmFuc2l0aW9uKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSh1bmRlZmluZWQsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeUNsYXNzTmFtZShjbGFzc05hbWUsX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5jbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKT4tMSl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUodW5kZWZpbmVkLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5VGFnKF90YWcsX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKHVuZGVmaW5lZCxfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVTZWxmKF90cmFuc2l0aW9uKXtcclxuICAgICAgICAvKnRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZWQoKTtcclxuICAgICAgICBpZihfdHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVkVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZG9tLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9LF90cmFuc2l0aW9uKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZWxmLmRvbS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnQpe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5wYXJlbnQuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIGlmKGNoaWxkID09PSB0aGlzKXtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLypmb3IodmFyIGtleSBpbiB0aGlzKXtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNba2V5XVxyXG4gICAgICAgIH0qL1xyXG4gICAgfVxyXG4gICAgYWN0aXZhdGVkKCl7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy5kZWFjdGl2YXRlZFRpbWVyKXtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVhY3RpdmF0ZWRUaW1lcilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY29ubmVjdGlvbikge1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLmluc2VydCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5hY3RpdmF0ZWQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5hdHRyaWJ1dGUuYWN0aXZhdGVkKXtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUuYWN0aXZhdGVkLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVhY3RpdmF0ZWQoKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY29ubmVjdGlvbikge1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5kZWFjdGl2YXRlZCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZih0aGlzLmF0dHJpYnV0ZS5kZWFjdGl2YXRlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlLmRlYWN0aXZhdGVkLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVhZFZhbHVlKF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGwodGhpcyx0aGlzLmRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbnZhciBfQ3ViWV9ET00gPSB7XHJcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAoX3RhZywgX2lkLCBfcm9vdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ3ViWV9ET00oX3RhZywgX2lkLCBfcm9vdClcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgX0N1YllfRE9NIiwiY29uc3QgTUFYX0NZQ0xFID0gMTAwO1xyXG5jbGFzcyBDdWJZX1JvdXRpbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihfdGlja1NwZWVkLF9vcHRpb25zKXtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuaW5pdChvcHRpb25zKTtcclxuICAgICAgICB0aGlzLk1BWF9DWUNMRSA9IE1BWF9DWUNMRTtcclxuICAgIH1cclxuICAgIGluaXQob3B0aW9ucyl7XHJcbiAgICAgICAgd2luZG93LmNyID0gdGhpcztcclxuICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICB0aGlzLnJvdXRpbmVMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5sb25nZXN0Um91dGluZVRpbWUgPTA7XHJcbiAgICAgICAgLy9zZXRUaW1lb3V0KHRoaXMuc3RhcnQuYmluZCh0aGlzKSwwKTtcclxuICAgIH07XHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmN5Y2xlU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHNlbGYucm91dGluZS5iaW5kKHRoaXMpLDApO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlUm91dGluZShuYW1lLGdyb3VwKSB7XHJcbiAgICAgICAgbGV0IG5ld1JvdXRpbmUgPSBuZXcgUm91dGluZShuYW1lLCBncm91cCk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIG5ld1JvdXRpbmUuaW5zZXJ0PSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKG5ld1JvdXRpbmUuZnJlcSE9PTEpIHtcclxuICAgICAgICAgICAgICAgIG5ld1JvdXRpbmUuY291bnRlciArPSBzZWxmLnJvdXRpbmVMaXN0Lmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGYucm91dGluZUxpc3QucHVzaChuZXdSb3V0aW5lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld1JvdXRpbmU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBuZXdSb3V0aW5lLnJlbW92ZT0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAgc2VsZi5yb3V0aW5lTGlzdC5pbmRleE9mKG5ld1JvdXRpbmUpO1xyXG4gICAgICAgICAgICBzZWxmLnJvdXRpbmVMaXN0LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBuZXdSb3V0aW5lO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudEN5Y2xlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3ljbGU7XHJcbiAgICB9XHJcbiAgICByb3V0aW5lKCl7XHJcbiAgICAgICAgbGV0IHJvdXRpbmVMaXN0ID0gdGhpcy5yb3V0aW5lTGlzdDtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTxyb3V0aW5lTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IHJvdXRpbmUgPSByb3V0aW5lTGlzdFtpXTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmKHJvdXRpbmUuY2hlY2tMb2NrKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0aW5lLmxvY2soKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lLmFjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxhc3RSb3V0aW5lVGltZSA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYubG9uZ2VzdFJvdXRpbmVUaW1lPHNlbGYubGFzdFJvdXRpbmVUaW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubG9uZ2VzdFJvdXRpbmVUaW1lPXNlbGYubGFzdFJvdXRpbmVUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYubGFzdFJvdXRpbmVUaW1lPjIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1JvdXRpbmU6JyArIHJvdXRpbmUubmFtZSArICcgdG9vayB0b28gbG9uZyB0byBydW4uIFsnK3NlbGYubGFzdFJvdXRpbmVUaW1lKydtc10nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmUudW5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxyb3V0aW5lLmZyZXEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAgICAgLy9ERUNJREUgSUYgUkVNT1ZFIFJPVVRJTkUgTEFURVI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmKHRoaXMuY3ljbGUgPT09IE1BWF9DWUNMRSl7XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDeWNsZVRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5jeWNsZVN0YXJ0VGltZTtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZVBlclNlYyA9IE1hdGguZmxvb3IoMTAwMCAvIHRoaXMubGFzdEN5Y2xlVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBSb3V0aW5le1xyXG4gICAgY29uc3RydWN0b3IobmFtZSxncm91cCl7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXAgfHwgJ2NvbW1vbic7XHJcbiAgICAgICAgdGhpcy5mcmVxID0gMTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaXNSdW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY291bnRlcj0wO1xyXG4gICAgICAgIHRoaXMucmVwZWF0ID0gLTE7XHJcbiAgICB9XHJcbiAgICBsb2NrKCl7XHJcbiAgICAgICAgaWYodGhpcy5yZXBlYXQ+MCl0aGlzLnJlcGVhdC0tO1xyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHVubG9jaygpe1xyXG4gICAgICAgIGlmKHRoaXMucmVwZWF0PT09MCl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBhdHRyKGtleSx2YWx1ZSl7XHJcbiAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgaWYoa2V5PT09J2ZyZXEnKXtcclxuICAgICAgICAgICAgdGhpc1snY291bnRlciddID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcmVzZXRDb3VudGVyKCl7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5mcmVxO1xyXG4gICAgfVxyXG4gICAgY2hlY2tMb2NrKCl7XHJcbiAgICAgICAgaWYodGhpcy5jb3VudGVyPjApe1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXItLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhKHRoaXMuaXNSdW5uaW5nID09PSB0cnVlIHx8IHRoaXMuY291bnRlciA+IDApO1xyXG4gICAgfVxyXG5cclxufVxyXG5jb25zdCBfQ3ViWV9Sb3V0aW5lID0gbmV3IEN1YllfUm91dGluZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBfQ3ViWV9Sb3V0aW5lOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gMy8yOC8yMDE4LlxyXG4gKi9cclxuaW1wb3J0IEN1YlkgZnJvbSAnLi9jdWJ5L0N1YlknO1xyXG5pbXBvcnQgY2FyZENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvY2FyZENvbnRhaW5lcic7XHJcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi9zdHlsZXMvY29sb3JzJztcclxuaW1wb3J0IENPTU1PTl9TVFlMRSBmcm9tICcuL3N0eWxlcy9jb21tb24nO1xyXG5pbXBvcnQgVmlldyBmcm9tICcuL3NlcnZpY2VzL1ZpZXcnO1xyXG5pbXBvcnQgV2ViIGZyb20gJy4vc2VydmljZXMvV2ViJztcclxuQ3ViWS5hZGRPbihWaWV3KTtcclxuQ3ViWS5hZGRPbihXZWIpO1xyXG5DdWJZLmFkZE9uKGNhcmRDb250YWluZXIpO1xyXG5DdWJZLmFkZE9uKENPTU1PTl9TVFlMRSk7XHJcbi8vRGVjbGFyZSBsYXlvdXQgY29tcG9uZW50c1xyXG53aW5kb3cucm9vdCA9IEN1YlkuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2N1Ynlfcm9vdCcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcclxuICAgIC5zdHlsZShDdWJZLlJPT1RfU1RZTEUpO1xyXG5cclxubGV0IG1haW5Db250ZW50U2VjdGlvbiA9IEN1YlkuY3JlYXRlRWxlbWVudCgnZGl2JywgJ21haW5Db250ZW50U2VjdGlvbicpXHJcbiAgICAuc3R5bGUoe1xyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIG1pbldpZHRoOiAnMzAwcHgnLFxyXG4gICAgICAgIHdpZHRoOic2Ni42NiUnLFxyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgIHRyYW5zaXRpb246JzAuMnMnXHJcbiAgICB9KTtcclxubGV0IHNlY29uZENvbnRlbnRTZWN0aW9uID0gQ3ViWS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnc2Vjb25kQ29udGVudFNlY3Rpb24nKS5zdHlsZSh7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG1pbldpZHRoOiAnMTAwcHgnLFxyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICB0cmFuc2l0aW9uOicwLjJzJ1xyXG59KTtcclxuXHJcbmxldCBtYWluQ2FyZCA9IEN1YlkuY3JlYXRlQ2FyZCgnbWFpbkNhcmQnKTtcclxubGV0IHNlY29uZENhcmQgPSBDdWJZLmNyZWF0ZUNhcmQoJ3NlY29uZENhcmQnKTtcclxuXHJcbi8vIFBsYWNlIGNvbXBvbmVudHNcclxucm9vdC5hcHBlbmRFbGVtZW50KG1haW5Db250ZW50U2VjdGlvbik7XHJcbnJvb3QuYXBwZW5kRWxlbWVudChzZWNvbmRDb250ZW50U2VjdGlvbik7XHJcblxyXG5tYWluQ29udGVudFNlY3Rpb24uYXBwZW5kRWxlbWVudChtYWluQ2FyZCk7XHJcblxyXG4vLyBDb25uZWN0IHN0b3JlIHRvIGNvbXBvbmVudHMgYW5kIGV2ZW50c1xyXG5cclxuQ3ViWS5jb25uZWN0KCd2aWV3cG9ydFNpemUnKS50byhDdWJZLnJlc2V0TWFpbkNvbnRlbnRTZWN0aW9uU2l6ZSkuYmVsb25nKG1haW5Db250ZW50U2VjdGlvbik7XHJcblxyXG4vL3NldHVwIGJhc2ljIGxpc3RlbmVyXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBDdWJZLnNhdmVWaWV3cG9ydFNpemUpO1xyXG5hc3NldExvYWRlZCgnbWFpbicpO1xyXG5cclxuLy9mdW5jdGlvbnNcclxuIiwiY29uc3QgVmlldyA9IHtcclxuICAgIHNhdmVWaWV3cG9ydFNpemUoKSB7XHJcbiAgICAgICAgbGV0IHZpZXdwb3J0U2l6ZSA9IHtcclxuICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgQ3ViWS5zdG9yZVZhbHVlKCd2aWV3cG9ydFNpemUnLCB2aWV3cG9ydFNpemUpO1xyXG4gICAgfSxcclxuICAgIHJlc2V0TWFpbkNvbnRlbnRTZWN0aW9uU2l6ZShzaXplKSB7XHJcbiAgICAgICAgbGV0IG1haW5Db250ZW50U2VjdGlvbiA9IHJvb3Quc2VsZWN0KCcjbWFpbkNvbnRlbnRTZWN0aW9uJyk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gc2l6ZS53aWR0aCA8PSA4MDA/JzEwMCUnOic2Ni42NiUnO1xyXG4gICAgICAgIG1haW5Db250ZW50U2VjdGlvbi5zdHlsZSgnd2lkdGgnLCB3aWR0aCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWV3OyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gNi8yMy8yMDE4LlxyXG4gKi9cclxuXHJcbnZhciBXZWJfUG9ydCA9IHtcclxuICAgIHJlcXVlc3QobWV0aG9kLCBkYXRhLCB1cmwsIF9zZXR0aW5ncywgY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgc2V0dGluZ3MgPSBfc2V0dGluZ3MgfHwge307XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHR5cGU6IG1ldGhvZCxcclxuICAgICAgICAgICAgYXN5bmM6IHNldHRpbmdzLmFzeW5jIHx8IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBzZXR0aW5ncy5jb250ZW50VHlwZSB8fCBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBzZXR0aW5ncy5kYXRhVHlwZSB8fCBcImpzb25cIixcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgICAgICAgICAgaWYgKEN1YlkuZ2V0VmFsdWUoJ0F1dGhvcml6YXRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBDdWJZLmdldFZhbHVlKCdBdXRob3JpemF0aW9uJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSwgdGV4dFN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyljYWxsYmFjayhyZXNwb25zZSwgdGV4dFN0YXR1cywgeGhyKVxyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKHJlc3BvbnNlLCB0ZXh0U3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpe1xyXG4gICAgICAgICAgICAgICAgQ3ViWS5zdG9yZVZhbHVlKCdpc0xvZ2luJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyljYWxsYmFjayhyZXNwb25zZSwgdGV4dFN0YXR1cywgeGhyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYmFzZVVybDogJ2h0dHA6Ly9hbnhpbnlhbmcudXMvcGhwL2FwaS90b2RvLycsXHJcblxyXG4gICAgZ2V0VG9kb0xpc3Q6IGZ1bmN0aW9uKGlkLCBjYWxsYmFjayl7XHJcbiAgICAgICAgQ3ViWS5yZXF1ZXN0KCdnZXQnLCB1bmRlZmluZWQsIEN1YlkuYmFzZVVybCArICdyZWFkLnBocCcrIChpZCE9PXVuZGVmaW5lZD8oJz9pZD0nK2lkKTonJyksdW5kZWZpbmVkLCBmdW5jdGlvbiAocmVzcG9uc2UsIHRleHRTdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICBpZihpZCl7XHJcbiAgICAgICAgICAgICAgICBDdWJZLnN0b3JlVmFsdWUoaWQsIHJlc3BvbnNlLmRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgQ3ViWS5zdG9yZVZhbHVlKCdjdXJyZW50VG9kbycsIGlkLCB7Zm9yY2VSZWFjdDp0cnVlfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvZG9MaXN0ID0gQ3ViWS5zdG9yZURhdGFBcnJheShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIEN1Ylkuc3RvcmVWYWx1ZSgndG9kb0xpc3QnLCB0b2RvTGlzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZU5ld1RvZG86IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZGF0YS5yZWYgPSBNYXRoLnJhbmRvbSgpKjEwMDAwICsgJy4nICsgRGF0ZS5ub3coKTtcclxuICAgICAgICBDdWJZLnJlcXVlc3QoJ3Bvc3QnLCBkYXRhLCBDdWJZLmJhc2VVcmwgKyAnY3JlYXRlLnBocCcsdW5kZWZpbmVkLCBmdW5jdGlvbiAocmVzcG9uc2UsIHRleHRTdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5tZXNzYWdlID09PSAnQ3JlYXRlZCcpe1xyXG4gICAgICAgICAgICAgICAgQ3ViWS5nZXRUb2RvTGlzdCh1bmRlZmluZWQsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEN1Ylkuc3RvcmVWYWx1ZSgnY3VycmVudFRvZG8nLCByZXNwb25zZS5pZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVRvZG86IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZGF0YS5yZWYgPSBNYXRoLnJhbmRvbSgpKjEwMDAwICsgJy4nICsgRGF0ZS5ub3coKTtcclxuICAgICAgICBDdWJZLnJlcXVlc3QoJ3B1dCcsIGRhdGEsIEN1YlkuYmFzZVVybCArICd1cGRhdGUucGhwJyx1bmRlZmluZWQsIGZ1bmN0aW9uIChyZXNwb25zZSwgdGV4dFN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm1lc3NhZ2UgPT09ICdVcGRhdGVkJyl7XHJcbiAgICAgICAgICAgICAgICAvL0N1Ylkuc3RvcmVWYWx1ZSgnY3VycmVudFRvZG8nLCBkYXRhLmlkLCB7Zm9yY2VSZWFjdDogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgQ3ViWS5zdG9yZVZhbHVlKGRhdGEuaWQsIHt9KTtcclxuICAgICAgICAgICAgICAgIEN1Ylkuc3RvcmVWYWx1ZSgnaGludCcsICdDaGFuZ2UgU2F2ZWQnLCB7Zm9yY2VSZWFjdDp0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBXSEFUIE5FWFQ/XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuLy93aW5kb3cuV2ViX1BvcnQgPSBXZWJfUG9ydDtcclxuZXhwb3J0IGRlZmF1bHQgV2ViX1BvcnQ7IiwiY29uc3QgQ09MT1JTID17XHJcbiAgICBCQUNLR1JPVU5EX0dSQVkgOiAncmdiYSgyNDMsMjQzLDI0MywuODUpJyxcclxufTtcclxuT2JqZWN0LmFzc2lnbih3aW5kb3csIENPTE9SUyk7IiwiXHJcbmNvbnN0IENPTU1PTl9TVFlMRSA9IHtcclxuICAgIFJPT1RfU1RZTEU6IHtcclxuICAgICAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcxMnB4ICcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIG1pbldpZHRoOiAnMzAwcHgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgICAgYmFja2dyb3VuZDogQkFDS0dST1VORF9HUkFZLFxyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbidcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ09NTU9OX1NUWUxFOyJdLCJzb3VyY2VSb290IjoiIn0=