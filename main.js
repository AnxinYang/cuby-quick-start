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

function _interopRequireDefault(obj) {
                                                                                                     return obj && obj.__esModule ? obj : { default: obj };
}

window.root = new _CubY2.default.createElement('div', 'cuby_root', document.getElementById('app')); /**
                                                                                                     * Created by Anxin Yang on 3/28/2018.
                                                                                                     */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YnkvQ3ViWS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VieS9DdWJZX0NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YnkvQ3ViWV9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YnkvQ3ViWV9Sb3V0aW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTSxpQkFBaUIsMEJBQU0sQ0FBN0I7O0FBRUEsSUFBSTs7QUFHQTtjQUFVLG9CQUFVLFNBQVMsaUJBQzdCO2dCQUFZLG9CQUFVLFdBQVcsaUJBQ2pDO29CQUFnQixvQkFBVSxlQUFlLGlCQUN6QztnQkFBWSxvQkFBVSxXQUFXLGlCQUNqQzthQUFTLG9CQUFVLFFBQVEsaUJBQzNCO1dBQU8sb0JBQVUsTUFBTSxpQkFDdkI7V0FBTyxvQkFBVSxNQUFNLGlCQUN2QjtlQUFXLG9CQUFVLFVBQVUsaUJBQy9CO21CQUFlLG9CQUFVLGNBQWMsaUJB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RztnQkFBRyxLQUFLLFVBQVEsR0FDWjtxQkFDSDtBQUVEOzttQkFBTyxFQUFFLEtBQUssY0FBYyxRQUFRLEtBQUssVUFDNUM7Ozs7Ozs7QUFHTCxJQUFNLGdCQUFnQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUMvRzFCOzs7Ozs7OztBQUNBLE9BQU8sT0FBTyxJQUFJLGVBQUssY0FBYyxPQUFPLGFBQWEsU0FBUyxlLFNBSmxFOzs7O0FBS0EsWUFBWSxRIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEN1YllfQ29yZSBmcm9tICcuL0N1YllfQ29yZSc7XHJcbmltcG9ydCBDdWJZX0RPTSBmcm9tICcuL0N1YllfRE9NJztcclxuaW1wb3J0IEN1YllfUm91dGluZSBmcm9tICcuL0N1YllfUm91dGluZSc7XHJcbmNvbnN0IEVNUFRZX0ZVTkNUSU9OID0gKCk9Pnt9O1xyXG5cclxudmFyIEN1YlkgPSB7XHJcblxyXG4gICAgLy9Db3JlXHJcbiAgICBnZXRWYWx1ZTogQ3ViWV9Db3JlLmdldFZhbHVlLmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIGdldEJyb3dzZXI6IEN1YllfQ29yZS5nZXRCcm93c2VyLmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIHN0b3JlRGF0YUFycmF5OiBDdWJZX0NvcmUuc3RvcmVEYXRhQXJyYXkuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgc3RvcmVWYWx1ZTogQ3ViWV9Db3JlLnN0b3JlVmFsdWUuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgY29ubmVjdDogQ3ViWV9Db3JlLmNvbm5lY3QuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgcmVhY3Q6IEN1YllfQ29yZS5yZWFjdC5iaW5kKEN1YllfQ29yZSksXHJcbiAgICBkZWJ1ZzogQ3ViWV9Db3JlLmRlYnVnLmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIHJlYWRWYWx1ZTogQ3ViWV9Db3JlLnJlYWRWYWx1ZS5iaW5kKEN1YllfQ29yZSksXHJcbiAgICBpc09iamVjdEVtcHR5OiBDdWJZX0NvcmUuaXNPYmplY3RFbXB0eS5iaW5kKEN1YllfQ29yZSksXHJcblxyXG4gICAgLy9ET01cclxuICAgIGNyZWF0ZUVsZW1lbnQ6IEN1YllfRE9NLmNyZWF0ZUVsZW1lbnQsXHJcblxyXG4gICAgLy9Sb3V0aW5lXHJcbiAgICBjcmVhdGVSb3V0aW5lOkN1YllfUm91dGluZS5jcmVhdGVSb3V0aW5lLmJpbmQoQ3ViWV9Sb3V0aW5lKSxcclxuICAgIGdldEN1cnJlbnRDeWNsZTpDdWJZX1JvdXRpbmUuZ2V0Q3VycmVudEN5Y2xlLmJpbmQoQ3ViWV9Sb3V0aW5lKSxcclxuICAgIHJvdXRpbmU6Q3ViWV9Sb3V0aW5lLnJvdXRpbmUuYmluZChDdWJZX1JvdXRpbmUpLFxyXG4gICAgLy9BZGRPbnNcclxuICAgIGFkZE9uOiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgIGZvcih2YXIga2V5IGluIG9iail7XHJcbiAgICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSl7XHJcbiAgICAgICAgICAgICAgQ3ViWVtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL090aGVyXHJcbiAgICB2ZXJzaW9uOiAnMC42Yi5uZS4wLjEwJyxcclxuICAgIGRlYnVnSW5mbzogW0N1YllfQ29yZSxDdWJZX1JvdXRpbmVdXHJcbn07XHJcblxyXG53aW5kb3cuQ3ViWSA9IEN1Ylk7XHJcbmV4cG9ydCBkZWZhdWx0IEN1Ylk7XHJcbiIsImNvbnN0IEVNUFRZX0ZVTkNUSU9OID0gKCk9Pnt9O1xyXG5jbGFzcyBDdWJZX0NvcmV7XHJcbiAgICBjb25zdHJ1Y3RvcihfcHJvcHMpe1xyXG4gICAgICAgIGxldCBwcm9wcyA9IHByb3BzIHx8IHt9O1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmluaXQocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoX3Byb3BzKXtcclxuICAgICAgICBsZXQgcHJvcHMgPSBfcHJvcHMgfHwge307XHJcbiAgICAgICAgdGhpcy5kYXRhTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5icm93c2VyID0gdGhpcy5nZXRCcm93c2VyKCk7XHJcbiAgICAgICAgd2luZG93LmNjID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcm93c2VyKCl7XHJcbiAgICAgICAgbGV0IGlzSUUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDaHJvbWUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNPcGVyYSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKCghIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMCl7XHJcbiAgICAgICAgICAgIGlzT3BlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gJ29wZXJhJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnZmlyZWZveCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKC9jb25zdHJ1Y3Rvci9pLnRlc3Qod2luZG93LkhUTUxFbGVtZW50KSB8fCAoZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7XHJcbiAgICAgICAgICAgIH0pKCF3aW5kb3dbJ3NhZmFyaSddIHx8IHNhZmFyaS5wdXNoTm90aWZpY2F0aW9uKSl7XHJcbiAgICAgICAgICAgIHJldHVybiAnc2FmYXJpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpe1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG91dHB1dCA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlzSUUgPXRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiAnaWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighaXNJRSAmJiAhIXdpbmRvdy5TdHlsZU1lZGlhKXtcclxuICAgICAgICAgICAgcmV0dXJuICdlZGdlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoISF3aW5kb3cuY2hyb21lICYmICEhd2luZG93LmNocm9tZS53ZWJzdG9yZSl7XHJcbiAgICAgICAgICAgIGlzQ2hyb21lID0gdHJ1ZVxyXG4gICAgICAgICAgICByZXR1cm4gJ2Nocm9tZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKChpc0Nocm9tZSB8fCBpc09wZXJhKSAmJiAhIXdpbmRvdy5DU1Mpe1xyXG4gICAgICAgICAgICByZXR1cm4gJ2JsaW5rJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcmVEYXRhQXJyYXkoX2FycmF5LCBfaWRLZXksIF9pdGVtUHJvY2Vzc29yLCBfb3B0aW9ucywgX2NhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIGlkS2V5ID0gX2lkS2V5IHx8ICdpZCc7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gX2NhbGxiYWNrIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG4gICAgICAgIHZhciBhcnJheSA9IF9hcnJheSB8fCBbXTtcclxuICAgICAgICB2YXIgaXRlbUxpc3QgPSBbXTtcclxuICAgICAgICB2YXIgaXRlbVByb2Nlc3NvciA9IF9pdGVtUHJvY2Vzc29yIHx8IEVNUFRZX0ZVTkNUSU9OO1xyXG5cclxuICAgICAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChfaXRlbSkge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gX2l0ZW1baWRLZXldO1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwgc2VsZi5yZWFkVmFsdWUob3B0aW9ucy5za2lwRnVuLCBfaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBzZWxmLnN0b3JlVmFsdWUoa2V5LCBfaXRlbSwgX29wdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgaXRlbVByb2Nlc3NvcihpdGVtKTtcclxuICAgICAgICAgICAgaXRlbUxpc3QucHVzaChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soX2FycmF5LCBpdGVtTGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xyXG4gICAgfTtcclxuXHJcbiAgICBzdG9yZVZhbHVlKF9rZXksIF92YWx1ZSwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5kYXRhTWFwO1xyXG4gICAgICAgIHZhciBrZXkgPSBfa2V5O1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBzdG9yZVtrZXldO1xyXG4gICAgICAgIHZhciBzaG91bGRSZWFjdCA9IHRydWU7XHJcbiAgICAgICAgaWYoaXRlbSE9PXVuZGVmaW5lZCAmJiBpdGVtID09PSBPYmplY3QoaXRlbSkgJiYgb3B0aW9ucy5vdmVyd3JpdGUhPT10cnVlICYmICEoaXRlbSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICBpdGVtID0gT2JqZWN0LmFzc2lnbihpdGVtLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzaG91bGRSZWFjdCA9IChpdGVtIT09bmV3VmFsdWUpO1xyXG4gICAgICAgICAgICBpdGVtID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YU1hcFtrZXldID0gaXRlbTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soaXRlbSk7XHJcbiAgICAgICAgaWYoc2hvdWxkUmVhY3QgfHwgb3B0aW9ucy5mb3JjZVJlYWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhY3Qoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9O1xyXG4gICAgZ2V0VmFsdWUoX2tleSwgY2FzZVNlbnNpdGl2ZSkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfa2V5IHx8ICcnO1xyXG4gICAgICAgIGlmKGNhc2VTZW5zaXRpdmUhPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFNYXBba2V5XTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZm9yKHZhciBLIGluIHRoaXMuZGF0YU1hcCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRhdGFNYXAuaGFzT3duUHJvcGVydHkoSykpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKEsudG9Mb3dlckNhc2UoKT09PWtleS50b0xvd2VyQ2FzZSgpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YU1hcFtLXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0KF9rZXkpe1xyXG4gICAgICAgIGxldCBuZXdDb25lY3RvciA9IG5ldyBDdWJZX0Nvbm5lY3Rvcihfa2V5LCB0aGlzKTtcclxuICAgICAgICByZXR1cm4gbmV3Q29uZWN0b3I7XHJcbiAgICB9XHJcbiAgICByZWFjdChrZXkpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgY29ubmVjdGlvbk1hcCA9IHRoaXMuY29ubmVjdGlvbk1hcDtcclxuICAgICAgICB2YXIgY29ubmVjdG9yTWFwID0gY29ubmVjdGlvbk1hcFtrZXldIHx8IHt9O1xyXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHNlbGYuZ2V0VmFsdWUoa2V5KTtcclxuICAgICAgICBmb3IodmFyIGlkIGluIGNvbm5lY3Rvck1hcCl7XHJcbiAgICAgICAgICAgIGlmKGNvbm5lY3Rvck1hcC5oYXNPd25Qcm9wZXJ0eShpZCkpe1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdG9yTWFwW2lkXS5ydW4obmV3VmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWFkVmFsdWUoX3ZhbHVlLCBkYXRhKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbCh0aGlzLGRhdGEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNPYmplY3RFbXB0eShvYmope1xyXG4gICAgICAgIGlmKCFvYmope1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIGtleSBpbiBvYmope1xyXG4gICAgICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVidWcoc3RyKSB7XHJcbiAgICAgICAgaWYodGhpcy5nZXRWYWx1ZSgnREVCVUdfTU9ERScpKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RFQlVHOiAnICsgc3RyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmNvbnN0IF9DdWJZX0NvcmUgPSBuZXcgQ3ViWV9Db3JlKCk7XHJcbmV4cG9ydCBkZWZhdWx0IF9DdWJZX0NvcmU7XHJcblxyXG5jbGFzcyBDdWJZX0Nvbm5lY3RvcntcclxuICAgIGNvbnN0cnVjdG9yKGtleSwgY29yZSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaWQgPSAgJ2Nvbm5lY3Rvcl8nICsgTWF0aC5yYW5kb20oKSoxMDAwMCArJ18nK0RhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nS2V5ID0ga2V5O1xyXG5cclxuICAgICAgICB0aGlzLmluc2VydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbm5lY3Rvck1hcCA9IGNvcmUuY29ubmVjdGlvbk1hcFtzZWxmLmJpbmRpbmdLZXldIHx8IHt9O1xyXG4gICAgICAgICAgICBjb25uZWN0b3JNYXBbc2VsZi5pZF0gPSBzZWxmO1xyXG4gICAgICAgICAgICBjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XSA9IGNvbm5lY3Rvck1hcDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYoY29yZS5jb25uZWN0aW9uTWFwW3NlbGYuYmluZGluZ0tleV0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvcmUuY29ubmVjdGlvbk1hcFtzZWxmLmJpbmRpbmdLZXldW3NlbGYuaWRdKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvcmUuY29ubmVjdGlvbk1hcFtzZWxmLmJpbmRpbmdLZXldW3NlbGYuaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoQ3ViWS5pc09iamVjdEVtcHR5KGNvcmUuY29ubmVjdGlvbk1hcFtzZWxmLmJpbmRpbmdLZXldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY29yZS5jb25uZWN0aW9uTWFwW3NlbGYuYmluZGluZ0tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9Y2F0Y2ggKGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdbV2FybmluZ106IENvbm5lY3RvciByZW1vdmUgbWV0aG9kIHJlZmVyZW5jZSBlcnJvci4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmluc2VydCgpO1xyXG4gICAgfVxyXG4gICAgdG8oYWN0aW9uKXtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGJlbG9uZyhvd25lcil7XHJcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xyXG4gICAgICAgIG93bmVyLmNvbm5lY3Rpb25MaXN0LnB1c2godGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBydW4obmV3VmFsdWUpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBpZih0aGlzLl9yZWFjdFRpbWVyICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVhY3RUaW1lcilcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVhY3RUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNlbGYuYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5vd25lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLm93bmVyLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWN0aW9uLmNhbGwodGhpcy5vd25lciwgbmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hY3Rpb24obmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYuX3JlYWN0VGltZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSwgNTApO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gNS8yNi8yMDE4LlxyXG4gKi9cclxuY2xhc3MgQ3ViWV9ET00ge1xyXG4gICAgY29uc3RydWN0b3IoX3RhZyxfaWQsX3Jvb3QpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpIHx8ICdkaXYnO1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlYWRWYWx1ZShfaWQpfHwgdGhpcy50YWcgKyAnXycgKyBNYXRoLnJhbmRvbSgpKjEwMDAwKydfJytEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZyk7XHJcbiAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKCdpZCcsdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IHt9O1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSB7fTtcclxuICAgICAgICB0aGlzLmRvbVN0eWxlID0ge307XHJcbiAgICAgICAgdGhpcy51cGRhdGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLnBhcmVudDtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnJvb3QoX3Jvb3QpO1xyXG5cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZXIgPXRoaXMudXBkYXRlcnNbbmFtZV07XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZih1cGRhdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci5jYWxsKHNlbGYsIHNlbGYuZGF0YSwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzZXRVcGRhdGVyKG5hbWUsdXBkYXRlcil7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyc1tuYW1lXSA9IHVwZGF0ZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBiaW5kKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICByb290KF9yb290KXtcclxuICAgICAgICBpZihfcm9vdCl7XHJcbiAgICAgICAgICAgIF9yb290LmFwcGVuZENoaWxkKHRoaXMuZG9tKTtcclxuICAgICAgICAgICAgdGhpcy5pc1Jvb3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFwcGVuZChfdGFnLF9pZCl7XHJcbiAgICAgICAgbGV0IHRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMucmVhZFZhbHVlKF9pZCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBDdWJZLmNyZWF0ZUVsZW1lbnQodGFnLGlkKTtcclxuICAgICAgICB0aGlzLmFwcGVuZEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRFbGVtZW50KEN1YllfRE9NKXtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMucmVhZFZhbHVlKEN1YllfRE9NKTtcclxuICAgICAgICBlbGVtZW50LnBhcmVudCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoZWxlbWVudC5kb20pO1xyXG4gICAgICAgIGlmKHRoaXMuaXNBY3RpdmUgfHwgdGhpcy5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmF0ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBhdHRyKGtleSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGsgaW4ga2V5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0cihrLGtleVtrXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGtleSA9PT0nYWN0aXZhdGVkJyB8fCBrZXkgPT09ICdkZWFjdGl2YXRlZCcpe1xyXG4gICAgICAgICAgICB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoa2V5LHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHByb3Aoa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG5cclxuICAgICAgICBpZih0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgayBpbiBrZXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wKGssa2V5W2tdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoa2V5ID09PSdhY3RpdmF0ZWQnIHx8IGtleSA9PT0gJ2RlYWN0aXZhdGVkJyl7XHJcbiAgICAgICAgICAgIHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tW2tleV0gPSAgdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb3BlcnR5W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIG9uKGV2ZW50TmFtZSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vbltldmVudE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFsdWUuY2FsbChzZWxmLGUsc2VsZi5kYXRhKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc3R5bGUoX2tleSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCBrZXkgPSB0aGlzLnJlYWRWYWx1ZShfa2V5KTtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIGlmKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgZm9yKHZhciBrIGluIGtleSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKGssa2V5W2tdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRvbVN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjb250ZW50KF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29udGVudCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyVGV4dDtcclxuICAgIH1cclxuICAgIGFwcGVuZENsYXNzKF9jbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnJlYWRWYWx1ZShfY2xhc3NOYW1lKTtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcyB8fCBbXTtcclxuICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNlbGVjdChfc2VsZWN0b3Ipe1xyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IF9zZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBfc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5SWQobmFtZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlDbGFzc05hbWUobmFtZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeVRhZyhfc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdEJ5SWQoaWQpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeUNsYXNzTmFtZShjbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldExpc3QucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldExpc3Q7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeVRhZyhfdGFnKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldExpc3QgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH1cclxuICAgIHJlbW92ZShfc2VsZWN0b3IsX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIGlmKF9zZWxlY3Rvcj09PXVuZGVmaW5lZCB8fCB0eXBlb2YgX3NlbGVjdG9yID09PSAnbnVtYmVyJyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZihfc2VsZWN0b3IgfHwgX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IF9zZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBfc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUlkKG5hbWUsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUNsYXNzTmFtZShuYW1lLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeVRhZyhfc2VsZWN0b3IsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5SWQoaWQsX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKHVuZGVmaW5lZCxfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSxfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSh1bmRlZmluZWQsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlUYWcoX3RhZyxfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLnRhZyA9PT0gX3RhZyl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUodW5kZWZpbmVkLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZVNlbGYoX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIC8qdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlZCgpO1xyXG4gICAgICAgIGlmKF90cmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZWRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0sX3RyYW5zaXRpb24pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNlbGYuZG9tLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnBhcmVudCl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLnBhcmVudC5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hpbGQgPT09IHRoaXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKmZvcih2YXIga2V5IGluIHRoaXMpe1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1trZXldXHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcbiAgICBhY3RpdmF0ZWQoKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLmRlYWN0aXZhdGVkVGltZXIpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWFjdGl2YXRlZFRpbWVyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uaW5zZXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlZCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZih0aGlzLmF0dHJpYnV0ZS5hY3RpdmF0ZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZS5hY3RpdmF0ZWQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWFjdGl2YXRlZCgpe1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYXR0cmlidXRlLmRlYWN0aXZhdGVkKXtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUuZGVhY3RpdmF0ZWQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWFkVmFsdWUoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbCh0aGlzLHRoaXMuZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxudmFyIF9DdWJZX0RPTSA9IHtcclxuICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uIChfdGFnLCBfaWQsIF9yb290KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDdWJZX0RPTShfdGFnLCBfaWQsIF9yb290KVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBfQ3ViWV9ET00iLCJjb25zdCBNQVhfQ1lDTEUgPSAxMDA7XHJcbmNsYXNzIEN1YllfUm91dGluZXtcclxuICAgIGNvbnN0cnVjdG9yKF90aWNrU3BlZWQsX29wdGlvbnMpe1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5pbml0KG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuTUFYX0NZQ0xFID0gTUFYX0NZQ0xFO1xyXG4gICAgfVxyXG4gICAgaW5pdChvcHRpb25zKXtcclxuICAgICAgICB3aW5kb3cuY3IgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIHRoaXMucm91dGluZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmxvbmdlc3RSb3V0aW5lVGltZSA9MDtcclxuICAgICAgICAvL3NldFRpbWVvdXQodGhpcy5zdGFydC5iaW5kKHRoaXMpLDApO1xyXG4gICAgfTtcclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGVTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2VsZi5yb3V0aW5lLmJpbmQodGhpcyksMCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVSb3V0aW5lKG5hbWUsZ3JvdXApIHtcclxuICAgICAgICBsZXQgbmV3Um91dGluZSA9IG5ldyBSb3V0aW5lKG5hbWUsIGdyb3VwKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbmV3Um91dGluZS5pbnNlcnQ9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYobmV3Um91dGluZS5mcmVxIT09MSkge1xyXG4gICAgICAgICAgICAgICAgbmV3Um91dGluZS5jb3VudGVyICs9IHNlbGYucm91dGluZUxpc3QubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5yb3V0aW5lTGlzdC5wdXNoKG5ld1JvdXRpbmUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3Um91dGluZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ld1JvdXRpbmUucmVtb3ZlPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9ICBzZWxmLnJvdXRpbmVMaXN0LmluZGV4T2YobmV3Um91dGluZSk7XHJcbiAgICAgICAgICAgIHNlbGYucm91dGluZUxpc3Quc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ld1JvdXRpbmU7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50Q3ljbGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jeWNsZTtcclxuICAgIH1cclxuICAgIHJvdXRpbmUoKXtcclxuICAgICAgICBsZXQgcm91dGluZUxpc3QgPSB0aGlzLnJvdXRpbmVMaXN0O1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IodmFyIGk9MDtpPHJvdXRpbmVMaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgcm91dGluZSA9IHJvdXRpbmVMaXN0W2ldO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYocm91dGluZS5jaGVja0xvY2soKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRpbmUubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmUuYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGFzdFJvdXRpbmVUaW1lID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sb25nZXN0Um91dGluZVRpbWU8c2VsZi5sYXN0Um91dGluZVRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb25nZXN0Um91dGluZVRpbWU9c2VsZi5sYXN0Um91dGluZVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sYXN0Um91dGluZVRpbWU+MjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUm91dGluZTonICsgcm91dGluZS5uYW1lICsgJyB0b29rIHRvbyBsb25nIHRvIHJ1bi4gWycrc2VsZi5sYXN0Um91dGluZVRpbWUrJ21zXScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZS51bmxvY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9LHJvdXRpbmUuZnJlcSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICAvL0RFQ0lERSBJRiBSRU1PVkUgUk9VVElORSBMQVRFUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYodGhpcy5jeWNsZSA9PT0gTUFYX0NZQ0xFKXtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEN5Y2xlVGltZSA9IERhdGUubm93KCkgLSB0aGlzLmN5Y2xlU3RhcnRUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlUGVyU2VjID0gTWF0aC5mbG9vcigxMDAwIC8gdGhpcy5sYXN0Q3ljbGVUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFJvdXRpbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGdyb3VwKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cCB8fCAnY29tbW9uJztcclxuICAgICAgICB0aGlzLmZyZXEgPSAxO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb3VudGVyPTA7XHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSAtMTtcclxuICAgIH1cclxuICAgIGxvY2soKXtcclxuICAgICAgICBpZih0aGlzLnJlcGVhdD4wKXRoaXMucmVwZWF0LS07XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdW5sb2NrKCl7XHJcbiAgICAgICAgaWYodGhpcy5yZXBlYXQ9PT0wKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LHZhbHVlKXtcclxuICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBpZihrZXk9PT0nZnJlcScpe1xyXG4gICAgICAgICAgICB0aGlzWydjb3VudGVyJ10gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXNldENvdW50ZXIoKXtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmZyZXE7XHJcbiAgICB9XHJcbiAgICBjaGVja0xvY2soKXtcclxuICAgICAgICBpZih0aGlzLmNvdW50ZXI+MCl7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlci0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICEodGhpcy5pc1J1bm5pbmcgPT09IHRydWUgfHwgdGhpcy5jb3VudGVyID4gMCk7XHJcbiAgICB9XHJcblxyXG59XHJcbmNvbnN0IF9DdWJZX1JvdXRpbmUgPSBuZXcgQ3ViWV9Sb3V0aW5lKCk7XHJcbmV4cG9ydCBkZWZhdWx0IF9DdWJZX1JvdXRpbmU7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW54aW4gWWFuZyBvbiAzLzI4LzIwMTguXHJcbiAqL1xyXG5pbXBvcnQgQ3ViWSBmcm9tICcuL2N1YnkvQ3ViWSc7XHJcbndpbmRvdy5yb290ID0gbmV3IEN1YlkuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2N1Ynlfcm9vdCcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbmFzc2V0TG9hZGVkKCdtYWluJyk7Il0sInNvdXJjZVJvb3QiOiIifQ==