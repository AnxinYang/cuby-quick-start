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
        key: 'setValue',
        value: function setValue(key, value) {
            for (var _len = arguments.length, options = Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
                options[_key2 - 2] = arguments[_key2];
            }

            var overwrite = options.overwrite,
                callback = options.callback,
                forceReact = options.forceReact;

            debugger;
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
                            self.action.call(self.owner, newValue);
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

function _interopRequireDefault(obj) {
                                                                                                     return obj && obj.__esModule ? obj : { default: obj };
}

window.root = new _CubY2.default.createElement('div', 'cuby_root', document.getElementById('app')); /**
                                                                                                     * Created by Anxin Yang on 3/28/2018.
                                                                                                     */

_CubY2.default.setValue('aa', 'bb', 'cc', 'd');
assetLoaded('main');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YnkvQ3ViWS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VieS9DdWJZX0NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YnkvQ3ViWV9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YnkvQ3ViWV9Sb3V0aW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTSxpQkFBaUIsMEJBQU0sQ0FBN0I7O0FBRUEsSUFBSTs7QUFHQTtjQUFVLG9CQUFVLFNBQVMsaUJBQzdCO2dCQUFZLG9CQUFVLFdBQVcsaUJBQ2pDO29CQUFnQixvQkFBVSxlQUFlLGlCQUN6QztnQkFBWSxvQkFBVSxXQUFXLGlCQUNqQzthQUFTLG9CQUFVLFFBQVEsaUJBQzNCO1dBQU8sb0JBQVUsTUFBTSxpQkFDdkI7V0FBTyxvQkFBVSxNQUFNLGlCQUN2QjtlQUFXLG9CQUFVLFVBQVUsaUJBQy9CO21CQUFlLG9CQUFVLGNBQWMsaUJB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Ujs7Ozt5Q0FFRztpQkFBSyxPQUNMO2dCQUFHLFFBQU0sUUFDTDtxQkFBSyxhQUNSO0FBQ0Q7bUJBQ0g7Ozs7dUNBRUc7aUJBQUssVUFBVSxLQUNsQjs7OztvQ0FFRztnQkFBRyxLQUFLLFVBQVEsR0FDWjtxQkFDSDtBQUVEOzttQkFBTyxFQUFFLEtBQUssY0FBYyxRQUFRLEtBQUssVUFDNUM7Ozs7Ozs7QUFHTCxJQUFNLGdCQUFnQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUMvRzFCOzs7Ozs7OztBQUNBLE9BQU8sT0FBTyxJQUFJLGVBQUssY0FBYyxPQUFPLGFBQWEsU0FBUyxlLFNBSmxFOzs7O0FBS0EsZUFBSyxTQUFTLE1BQUssTUFBTSxNQUFNO0FBQy9CLFlBQVksUSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBDdWJZX0NvcmUgZnJvbSAnLi9DdWJZX0NvcmUnO1xyXG5pbXBvcnQgQ3ViWV9ET00gZnJvbSAnLi9DdWJZX0RPTSc7XHJcbmltcG9ydCBDdWJZX1JvdXRpbmUgZnJvbSAnLi9DdWJZX1JvdXRpbmUnO1xyXG5jb25zdCBFTVBUWV9GVU5DVElPTiA9ICgpPT57fTtcclxuXHJcbnZhciBDdWJZID0ge1xyXG5cclxuICAgIC8vQ29yZVxyXG4gICAgZ2V0VmFsdWU6IEN1YllfQ29yZS5nZXRWYWx1ZS5iaW5kKEN1YllfQ29yZSksXHJcbiAgICBnZXRCcm93c2VyOiBDdWJZX0NvcmUuZ2V0QnJvd3Nlci5iaW5kKEN1YllfQ29yZSksXHJcbiAgICBzdG9yZURhdGFBcnJheTogQ3ViWV9Db3JlLnN0b3JlRGF0YUFycmF5LmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIHN0b3JlVmFsdWU6IEN1YllfQ29yZS5zdG9yZVZhbHVlLmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIGNvbm5lY3Q6IEN1YllfQ29yZS5jb25uZWN0LmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIHJlYWN0OiBDdWJZX0NvcmUucmVhY3QuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgZGVidWc6IEN1YllfQ29yZS5kZWJ1Zy5iaW5kKEN1YllfQ29yZSksXHJcbiAgICByZWFkVmFsdWU6IEN1YllfQ29yZS5yZWFkVmFsdWUuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgaXNPYmplY3RFbXB0eTogQ3ViWV9Db3JlLmlzT2JqZWN0RW1wdHkuYmluZChDdWJZX0NvcmUpLFxyXG5cclxuICAgIC8vRE9NXHJcbiAgICBjcmVhdGVFbGVtZW50OiBDdWJZX0RPTS5jcmVhdGVFbGVtZW50LFxyXG5cclxuICAgIC8vUm91dGluZVxyXG4gICAgY3JlYXRlUm91dGluZTpDdWJZX1JvdXRpbmUuY3JlYXRlUm91dGluZS5iaW5kKEN1YllfUm91dGluZSksXHJcbiAgICBnZXRDdXJyZW50Q3ljbGU6Q3ViWV9Sb3V0aW5lLmdldEN1cnJlbnRDeWNsZS5iaW5kKEN1YllfUm91dGluZSksXHJcbiAgICByb3V0aW5lOkN1YllfUm91dGluZS5yb3V0aW5lLmJpbmQoQ3ViWV9Sb3V0aW5lKSxcclxuICAgIC8vQWRkT25zXHJcbiAgICBhZGRPbjogZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICBmb3IodmFyIGtleSBpbiBvYmope1xyXG4gICAgICAgICAgaWYob2JqLmhhc093blByb3BlcnR5KGtleSkpe1xyXG4gICAgICAgICAgICAgIEN1Yllba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy9PdGhlclxyXG4gICAgdmVyc2lvbjogJzAuNmIubmUuMC4xMCcsXHJcbiAgICBkZWJ1Z0luZm86IFtDdWJZX0NvcmUsQ3ViWV9Sb3V0aW5lXVxyXG59O1xyXG5cclxud2luZG93LkN1YlkgPSBDdWJZO1xyXG5leHBvcnQgZGVmYXVsdCBDdWJZO1xyXG4iLCJjb25zdCBFTVBUWV9GVU5DVElPTiA9ICgpPT57fTtcclxuY2xhc3MgQ3ViWV9Db3Jle1xyXG4gICAgY29uc3RydWN0b3IoX3Byb3BzKXtcclxuICAgICAgICBsZXQgcHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pbml0KHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KF9wcm9wcyl7XHJcbiAgICAgICAgbGV0IHByb3BzID0gX3Byb3BzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuZGF0YU1hcCA9IHt9O1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbk1hcCA9IHt9O1xyXG4gICAgICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuZ2V0QnJvd3NlcigpO1xyXG4gICAgICAgIHdpbmRvdy5jYyA9IHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnJvd3Nlcigpe1xyXG4gICAgICAgIGxldCBpc0lFID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzQ2hyb21lID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzT3BlcmEgPSBmYWxzZTtcclxuICAgICAgICBpZigoISF3aW5kb3cub3ByICYmICEhb3ByLmFkZG9ucykgfHwgISF3aW5kb3cub3BlcmEgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCcgT1BSLycpID49IDApe1xyXG4gICAgICAgICAgICBpc09wZXJhID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcC50b1N0cmluZygpID09PSBcIltvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXVwiO1xyXG4gICAgICAgICAgICB9KSghd2luZG93WydzYWZhcmknXSB8fCBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKXtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhcmd1bWVudHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc0lFID10cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2llJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWlzSUUgJiYgISF3aW5kb3cuU3R5bGVNZWRpYSl7XHJcbiAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEhd2luZG93LmNocm9tZSAmJiAhIXdpbmRvdy5jaHJvbWUud2Vic3RvcmUpe1xyXG4gICAgICAgICAgICBpc0Nocm9tZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoaXNDaHJvbWUgfHwgaXNPcGVyYSkgJiYgISF3aW5kb3cuQ1NTKXtcclxuICAgICAgICAgICAgcmV0dXJuICdibGluayc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlRGF0YUFycmF5KF9hcnJheSwgX2lkS2V5LCBfaXRlbVByb2Nlc3NvciwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xyXG4gICAgICAgIHZhciBpZEtleSA9IF9pZEtleSB8fCAnaWQnO1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgYXJyYXkgPSBfYXJyYXkgfHwgW107XHJcbiAgICAgICAgdmFyIGl0ZW1MaXN0ID0gW107XHJcbiAgICAgICAgdmFyIGl0ZW1Qcm9jZXNzb3IgPSBfaXRlbVByb2Nlc3NvciB8fCBFTVBUWV9GVU5DVElPTjtcclxuXHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoX2l0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IF9pdGVtW2lkS2V5XTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IHNlbGYucmVhZFZhbHVlKG9wdGlvbnMuc2tpcEZ1biwgX2l0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZi5zdG9yZVZhbHVlKGtleSwgX2l0ZW0sIF9vcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGl0ZW1Qcm9jZXNzb3IoaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW1MaXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrKF9hcnJheSwgaXRlbUxpc3QpO1xyXG4gICAgICAgIHJldHVybiBpdGVtTGlzdDtcclxuICAgIH07XHJcbiAgICBzZXRWYWx1ZShrZXksIHZhbHVlLCAuLi5vcHRpb25zKXtcclxuICAgICAgICBsZXQge292ZXJ3cml0ZSwgY2FsbGJhY2ssIGZvcmNlUmVhY3R9ID0gb3B0aW9ucztcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgIH1cclxuICAgIHN0b3JlVmFsdWUoX2tleSwgX3ZhbHVlLCBfb3B0aW9ucywgX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLmRhdGFNYXA7XHJcbiAgICAgICAgdmFyIGtleSA9IF9rZXk7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gX2NhbGxiYWNrIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICB2YXIgaXRlbSA9IHN0b3JlW2tleV07XHJcbiAgICAgICAgdmFyIHNob3VsZFJlYWN0ID0gdHJ1ZTtcclxuICAgICAgICBpZihpdGVtIT09dW5kZWZpbmVkICYmIGl0ZW0gPT09IE9iamVjdChpdGVtKSAmJiBvcHRpb25zLm92ZXJ3cml0ZSE9PXRydWUgJiYgIShpdGVtIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBPYmplY3QuYXNzaWduKGl0ZW0sIG5ld1ZhbHVlKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3VsZFJlYWN0ID0gKGl0ZW0hPT1uZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBuZXdWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwW2tleV0gPSBpdGVtO1xyXG5cclxuICAgICAgICBjYWxsYmFjayhpdGVtKTtcclxuICAgICAgICBpZihzaG91bGRSZWFjdCB8fCBvcHRpb25zLmZvcmNlUmVhY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFjdChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH07XHJcbiAgICBnZXRWYWx1ZShfa2V5LCBjYXNlU2Vuc2l0aXZlKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9rZXkgfHwgJyc7XHJcbiAgICAgICAgaWYoY2FzZVNlbnNpdGl2ZSE9PWZhbHNlKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YU1hcFtrZXldO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBmb3IodmFyIEsgaW4gdGhpcy5kYXRhTWFwKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0YU1hcC5oYXNPd25Qcm9wZXJ0eShLKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoSy50b0xvd2VyQ2FzZSgpPT09a2V5LnRvTG93ZXJDYXNlKCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhTWFwW0tdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3QoX2tleSl7XHJcbiAgICAgICAgbGV0IG5ld0NvbmVjdG9yID0gbmV3IEN1YllfQ29ubmVjdG9yKF9rZXksIHRoaXMpO1xyXG4gICAgICAgIHJldHVybiBuZXdDb25lY3RvcjtcclxuICAgIH1cclxuICAgIHJlYWN0KGtleSl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjb25uZWN0aW9uTWFwID0gdGhpcy5jb25uZWN0aW9uTWFwO1xyXG4gICAgICAgIHZhciBjb25uZWN0b3JNYXAgPSBjb25uZWN0aW9uTWFwW2tleV0gfHwge307XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gc2VsZi5nZXRWYWx1ZShrZXkpO1xyXG4gICAgICAgIGZvcih2YXIgaWQgaW4gY29ubmVjdG9yTWFwKXtcclxuICAgICAgICAgICAgaWYoY29ubmVjdG9yTWFwLmhhc093blByb3BlcnR5KGlkKSl7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0b3JNYXBbaWRdLnJ1bihuZXdWYWx1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlYWRWYWx1ZShfdmFsdWUsIGRhdGEpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5jYWxsKHRoaXMsZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc09iamVjdEVtcHR5KG9iail7XHJcbiAgICAgICAgaWYoIW9iail7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIga2V5IGluIG9iail7XHJcbiAgICAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZWJ1ZyhzdHIpIHtcclxuICAgICAgICBpZih0aGlzLmdldFZhbHVlKCdERUJVR19NT0RFJykpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnREVCVUc6ICcgKyBzdHIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuY29uc3QgX0N1YllfQ29yZSA9IG5ldyBDdWJZX0NvcmUoKTtcclxuZXhwb3J0IGRlZmF1bHQgX0N1YllfQ29yZTtcclxuXHJcbmNsYXNzIEN1YllfQ29ubmVjdG9ye1xyXG4gICAgY29uc3RydWN0b3Ioa2V5LCBjb3JlKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pZCA9ICAnY29ubmVjdG9yXycgKyBNYXRoLnJhbmRvbSgpKjEwMDAwICsnXycrRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmJpbmRpbmdLZXkgPSBrZXk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5zZXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY29ubmVjdG9yTWFwID0gY29yZS5jb25uZWN0aW9uTWFwW3NlbGYuYmluZGluZ0tleV0gfHwge307XHJcbiAgICAgICAgICAgIGNvbm5lY3Rvck1hcFtzZWxmLmlkXSA9IHNlbGY7XHJcbiAgICAgICAgICAgIGNvcmUuY29ubmVjdGlvbk1hcFtzZWxmLmJpbmRpbmdLZXldID0gY29ubmVjdG9yTWFwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZihjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29yZS5jb25uZWN0aW9uTWFwW3NlbGYuYmluZGluZ0tleV1bc2VsZi5pZF0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY29yZS5jb25uZWN0aW9uTWFwW3NlbGYuYmluZGluZ0tleV1bc2VsZi5pZF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDdWJZLmlzT2JqZWN0RW1wdHkoY29yZS5jb25uZWN0aW9uTWFwW3NlbGYuYmluZGluZ0tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tXYXJuaW5nXTogQ29ubmVjdG9yIHJlbW92ZSBtZXRob2QgcmVmZXJlbmNlIGVycm9yLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0KCk7XHJcbiAgICB9XHJcbiAgICB0byhhY3Rpb24pe1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYmVsb25nKG93bmVyKXtcclxuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XHJcbiAgICAgICAgb3duZXIuY29ubmVjdGlvbkxpc3QucHVzaCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJ1bihuZXdWYWx1ZSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKHRoaXMuX3JlYWN0VGltZXIgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZWFjdFRpbWVyKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZWFjdFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZi5hY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLm93bmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYub3duZXIuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hY3Rpb24uY2FsbChzZWxmLm93bmVyLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFjdGlvbihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5fcmVhY3RUaW1lciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW54aW4gWWFuZyBvbiA1LzI2LzIwMTguXHJcbiAqL1xyXG5jbGFzcyBDdWJZX0RPTSB7XHJcbiAgICBjb25zdHJ1Y3RvcihfdGFnLF9pZCxfcm9vdCkge1xyXG4gICAgICAgIHRoaXMudGFnID0gdGhpcy5yZWFkVmFsdWUoX3RhZykgfHwgJ2Rpdic7XHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVhZFZhbHVlKF9pZCl8fCB0aGlzLnRhZyArICdfJyArIE1hdGgucmFuZG9tKCkqMTAwMDArJ18nK0RhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMudGFnKTtcclxuICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoJ2lkJyx0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlID0ge307XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHt9O1xyXG4gICAgICAgIHRoaXMuZG9tU3R5bGUgPSB7fTtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMucGFyZW50O1xyXG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucm9vdChfcm9vdCk7XHJcblxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnVwZGF0ZXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlciA9dGhpcy51cGRhdGVyc1tuYW1lXTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHVwZGF0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVyLmNhbGwoc2VsZiwgc2VsZi5kYXRhLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHNldFVwZGF0ZXIobmFtZSx1cGRhdGVyKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZXJzW25hbWVdID0gdXBkYXRlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGJpbmQoZGF0YSl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJvb3QoX3Jvb3Qpe1xyXG4gICAgICAgIGlmKF9yb290KXtcclxuICAgICAgICAgICAgX3Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5kb20pO1xyXG4gICAgICAgICAgICB0aGlzLmlzUm9vdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKF90YWcsX2lkKXtcclxuICAgICAgICBsZXQgdGFnID0gdGhpcy5yZWFkVmFsdWUoX3RhZyk7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5yZWFkVmFsdWUoX2lkKTtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IEN1YlkuY3JlYXRlRWxlbWVudCh0YWcsaWQpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGFwcGVuZEVsZW1lbnQoQ3ViWV9ET00pe1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5yZWFkVmFsdWUoQ3ViWV9ET00pO1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50ID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QucHVzaChlbGVtZW50KTtcclxuICAgICAgICB0aGlzLmRvbS5hcHBlbmRDaGlsZChlbGVtZW50LmRvbSk7XHJcbiAgICAgICAgaWYodGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmlzUm9vdCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2YXRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG5cclxuICAgICAgICBpZih0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgayBpbiBrZXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyKGssa2V5W2tdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoa2V5ID09PSdhY3RpdmF0ZWQnIHx8IGtleSA9PT0gJ2RlYWN0aXZhdGVkJyl7XHJcbiAgICAgICAgICAgIHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnNldEF0dHJpYnV0ZShrZXksdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcHJvcChrZXksX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWU7XHJcblxyXG4gICAgICAgIGlmKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgZm9yKHZhciBrIGluIGtleSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3AoayxrZXlba10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihrZXkgPT09J2FjdGl2YXRlZCcgfHwga2V5ID09PSAnZGVhY3RpdmF0ZWQnKXtcclxuICAgICAgICAgICAgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5kb21ba2V5XSA9ICB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJvcGVydHlba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgb24oZXZlbnROYW1lLF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm9uW2V2ZW50TmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSxmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB2YWx1ZS5jYWxsKHNlbGYsZSxzZWxmLmRhdGEpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdHlsZShfa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IGtleSA9IHRoaXMucmVhZFZhbHVlKF9rZXkpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgaWYodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGsgaW4ga2V5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUoayxrZXlba10pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZG9tU3R5bGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNvbnRlbnQoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBnZXRDb250ZW50KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJUZXh0O1xyXG4gICAgfVxyXG4gICAgYXBwZW5kQ2xhc3MoX2NsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucmVhZFZhbHVlKF9jbGFzc05hbWUpO1xyXG4gICAgICAgIGxldCBjbGFzc2VzID0gdGhpcy5jbGFzc2VzIHx8IFtdO1xyXG4gICAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gICAgICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSBjbGFzc2VzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0KF9zZWxlY3Rvcil7XHJcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gX3NlbGVjdG9yLmNoYXJBdCgwKTtcclxuICAgICAgICBsZXQgbmFtZSA9IF9zZWxlY3Rvci5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlJZChuYW1lKTtcclxuICAgICAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeUNsYXNzTmFtZShuYW1lKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5VGFnKF9zZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0QnlJZChpZCl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuaWQgPT09IGlkKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIHNlbGVjdEJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXRMaXN0ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk+LTEpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH1cclxuICAgIHNlbGVjdEJ5VGFnKF90YWcpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLnRhZyA9PT0gX3RhZyl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMaXN0LnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXRMaXN0O1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKF9zZWxlY3RvcixfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgaWYoX3NlbGVjdG9yPT09dW5kZWZpbmVkIHx8IHR5cGVvZiBfc2VsZWN0b3IgPT09ICdudW1iZXInKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVTZWxmKF9zZWxlY3RvciB8fCBfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlbGVjdG9yID0gX3NlbGVjdG9yLmNoYXJBdCgwKTtcclxuICAgICAgICBsZXQgbmFtZSA9IF9zZWxlY3Rvci5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgbGV0IHRhcmdldDtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJ5SWQobmFtZSxfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJ5Q2xhc3NOYW1lKG5hbWUsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUJ5VGFnKF9zZWxlY3RvcixfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlJZChpZCxfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUodW5kZWZpbmVkLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlDbGFzc05hbWUoY2xhc3NOYW1lLF90cmFuc2l0aW9uKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk+LTEpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKHVuZGVmaW5lZCxfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVCeVRhZyhfdGFnLF90cmFuc2l0aW9uKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQudGFnID09PSBfdGFnKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSh1bmRlZmluZWQsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlU2VsZihfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgLyp0aGlzLmNoaWxkcmVuTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5yZW1vdmUoKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmRlYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgaWYoX3RyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlZFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSxfdHJhbnNpdGlvbilcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2VsZi5kb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucGFyZW50KXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMucGFyZW50LmNoaWxkcmVuTGlzdDtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBpZihjaGlsZCA9PT0gdGhpcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qZm9yKHZhciBrZXkgaW4gdGhpcyl7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV1cclxuICAgICAgICB9Ki9cclxuICAgIH1cclxuICAgIGFjdGl2YXRlZCgpe1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMuZGVhY3RpdmF0ZWRUaW1lcil7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlYWN0aXZhdGVkVGltZXIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNvbm5lY3Rpb24pIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5pbnNlcnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYXR0cmlidXRlLmFjdGl2YXRlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlLmFjdGl2YXRlZC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRlYWN0aXZhdGVkKCl7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNvbm5lY3Rpb24pIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZWQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5hdHRyaWJ1dGUuZGVhY3RpdmF0ZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZS5kZWFjdGl2YXRlZC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlYWRWYWx1ZShfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5jYWxsKHRoaXMsdGhpcy5kYXRhKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG52YXIgX0N1YllfRE9NID0ge1xyXG4gICAgY3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKF90YWcsIF9pZCwgX3Jvb3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEN1YllfRE9NKF90YWcsIF9pZCwgX3Jvb3QpXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IF9DdWJZX0RPTSIsImNvbnN0IE1BWF9DWUNMRSA9IDEwMDtcclxuY2xhc3MgQ3ViWV9Sb3V0aW5le1xyXG4gICAgY29uc3RydWN0b3IoX3RpY2tTcGVlZCxfb3B0aW9ucyl7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB0aGlzLmluaXQob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5NQVhfQ1lDTEUgPSBNQVhfQ1lDTEU7XHJcbiAgICB9XHJcbiAgICBpbml0KG9wdGlvbnMpe1xyXG4gICAgICAgIHdpbmRvdy5jciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3V0aW5lTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMubG9uZ2VzdFJvdXRpbmVUaW1lID0wO1xyXG4gICAgICAgIC8vc2V0VGltZW91dCh0aGlzLnN0YXJ0LmJpbmQodGhpcyksMCk7XHJcbiAgICB9O1xyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jeWNsZVN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChzZWxmLnJvdXRpbmUuYmluZCh0aGlzKSwwKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVJvdXRpbmUobmFtZSxncm91cCkge1xyXG4gICAgICAgIGxldCBuZXdSb3V0aW5lID0gbmV3IFJvdXRpbmUobmFtZSwgZ3JvdXApO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBuZXdSb3V0aW5lLmluc2VydD0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZihuZXdSb3V0aW5lLmZyZXEhPT0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSb3V0aW5lLmNvdW50ZXIgKz0gc2VsZi5yb3V0aW5lTGlzdC5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxmLnJvdXRpbmVMaXN0LnB1c2gobmV3Um91dGluZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdSb3V0aW5lO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbmV3Um91dGluZS5yZW1vdmU9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gIHNlbGYucm91dGluZUxpc3QuaW5kZXhPZihuZXdSb3V0aW5lKTtcclxuICAgICAgICAgICAgc2VsZi5yb3V0aW5lTGlzdC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3Um91dGluZTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRDeWNsZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN5Y2xlO1xyXG4gICAgfVxyXG4gICAgcm91dGluZSgpe1xyXG4gICAgICAgIGxldCByb3V0aW5lTGlzdCA9IHRoaXMucm91dGluZUxpc3Q7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8cm91dGluZUxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCByb3V0aW5lID0gcm91dGluZUxpc3RbaV07XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZihyb3V0aW5lLmNoZWNrTG9jaygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGluZS5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZS5hY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXN0Um91dGluZVRpbWUgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmxvbmdlc3RSb3V0aW5lVGltZTxzZWxmLmxhc3RSb3V0aW5lVGltZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvbmdlc3RSb3V0aW5lVGltZT1zZWxmLmxhc3RSb3V0aW5lVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmxhc3RSb3V0aW5lVGltZT4yMDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdSb3V0aW5lOicgKyByb3V0aW5lLm5hbWUgKyAnIHRvb2sgdG9vIGxvbmcgdG8gcnVuLiBbJytzZWxmLmxhc3RSb3V0aW5lVGltZSsnbXNdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lLnVubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0scm91dGluZS5mcmVxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIC8vREVDSURFIElGIFJFTU9WRSBST1VUSU5FIExBVEVSO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZih0aGlzLmN5Y2xlID09PSBNQVhfQ1lDTEUpe1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q3ljbGVUaW1lID0gRGF0ZS5ub3coKSAtIHRoaXMuY3ljbGVTdGFydFRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGVQZXJTZWMgPSBNYXRoLmZsb29yKDEwMDAgLyB0aGlzLmxhc3RDeWNsZVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUm91dGluZXtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsZ3JvdXApe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwIHx8ICdjb21tb24nO1xyXG4gICAgICAgIHRoaXMuZnJlcSA9IDE7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmlzUnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvdW50ZXI9MDtcclxuICAgICAgICB0aGlzLnJlcGVhdCA9IC0xO1xyXG4gICAgfVxyXG4gICAgbG9jaygpe1xyXG4gICAgICAgIGlmKHRoaXMucmVwZWF0PjApdGhpcy5yZXBlYXQtLTtcclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB1bmxvY2soKXtcclxuICAgICAgICBpZih0aGlzLnJlcGVhdD09PTApe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgYXR0cihrZXksdmFsdWUpe1xyXG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIGlmKGtleT09PSdmcmVxJyl7XHJcbiAgICAgICAgICAgIHRoaXNbJ2NvdW50ZXInXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJlc2V0Q291bnRlcigpe1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMuZnJlcTtcclxuICAgIH1cclxuICAgIGNoZWNrTG9jaygpe1xyXG4gICAgICAgIGlmKHRoaXMuY291bnRlcj4wKXtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyLS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gISh0aGlzLmlzUnVubmluZyA9PT0gdHJ1ZSB8fCB0aGlzLmNvdW50ZXIgPiAwKTtcclxuICAgIH1cclxuXHJcbn1cclxuY29uc3QgX0N1YllfUm91dGluZSA9IG5ldyBDdWJZX1JvdXRpbmUoKTtcclxuZXhwb3J0IGRlZmF1bHQgX0N1YllfUm91dGluZTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDMvMjgvMjAxOC5cclxuICovXHJcbmltcG9ydCBDdWJZIGZyb20gJy4vY3VieS9DdWJZJztcclxud2luZG93LnJvb3QgPSBuZXcgQ3ViWS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY3VieV9yb290JywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuQ3ViWS5zZXRWYWx1ZSgnYWEnLCdiYicsICdjYycsICdkJyk7XHJcbmFzc2V0TG9hZGVkKCdtYWluJyk7Il0sInNvdXJjZVJvb3QiOiIifQ==