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

var _CubY_Module = __webpack_require__(/*! ./CubY_Module */ "./src/cuby/CubY_Module.js");

var _CubY_Module2 = _interopRequireDefault(_CubY_Module);

var _CubY_XHR = __webpack_require__(/*! ./CubY_XHR */ "./src/cuby/CubY_XHR.js");

var _CubY_XHR2 = _interopRequireDefault(_CubY_XHR);

var _CubY_RAF = __webpack_require__(/*! ./CubY_RAF */ "./src/cuby/CubY_RAF.js");

var _CubY_RAF2 = _interopRequireDefault(_CubY_RAF);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var EMPTY_FUNCTION = function EMPTY_FUNCTION() {};

_CubY_RAF2.default.content();

function CubY(config) {
    var Core = new _CubY_Core2.default(config);
    var methods = {
        //Core
        getValue: Core.getValue.bind(Core),
        getBrowser: Core.getBrowser.bind(Core),
        storeValue: Core.storeValue.bind(Core),
        storeArray: Core.storeArray.bind(Core),
        setValue: Core.setValue.bind(Core),
        connect: Core.connect.bind(Core),
        react: Core.react.bind(Core),
        debug: Core.debug.bind(Core),
        readValue: Core.readValue.bind(Core),
        isObjectEmpty: Core.isObjectEmpty.bind(Core),
        createID: Core.createID.bind(Core),
        getCallerName: Core.getCallerName.bind(Core),

        //DOM
        createElement: function createElement(_tag, _id, _root) {
            return new _CubY_DOM2.default(_tag, _id, _root);
        },
        createElementNS: function createElementNS(_tag, _id, _root) {
            return new _CubY_DOM2.default(_tag, _id, _root, true);
        },
        //
        module: function module(fn, options) {
            return new _CubY_Module2.default(fn, options);
        },
        //xhr
        ajax: _CubY_XHR2.default.ajax,
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
        version: 'Privata.111618.00',
        debugInfo: [_CubY_Core2.default, _CubY_Routine2.default]
    };
    Object.assign(CubY, methods);
}

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
    function CubY_Core() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, CubY_Core);

        var self = this;
        this.init(props);
    }

    _createClass(CubY_Core, [{
        key: 'init',
        value: function init(props) {
            var self = this;
            this.dataMap = {};
            this.connectionMap = {};
            this.browser = this.getBrowser();
            window.ccaxy = this;
            this.setupDebugger(props);
        }
    }, {
        key: 'getCallerName',
        value: function getCallerName() {
            // Include this function just for fun
            console.warn('[Non-standard]: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.');
            try {
                var str = new Error().stack.toString();
                var array = str.split('at');
                var name = array[3];
                name = name.split(' ')[1];
                return name;
            } catch (e) {
                console.warn('[getCallName] feature is not supported in this client: ' + this.getBrowser());
            }
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
                if (!('remove' in Element.prototype)) {
                    Element.prototype.remove = function () {
                        if (this.parentNode) {
                            this.parentNode.removeChild(this);
                        }
                    };
                }
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
        key: 'storeArray',
        value: function storeArray() {
            var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var self = this;
            var idKey = options.idKey,
                callback = options.callback,
                pre = options.pre,
                post = options.post;

            idKey = idKey || 'id';
            var itemList = [];
            array.forEach(function (_item) {
                var key = _item[idKey];
                var item = _item;
                if (key === undefined) {
                    return;
                }
                if (pre) {
                    item = pre(_item);
                }
                item = self.storeValue(key, item, options);
                if (post) {
                    post(item);
                }
                itemList.push(item);
            });

            callback && callback(array, itemList);
            return itemList;
        }
    }, {
        key: 'setValue',
        value: function setValue(key, value) {
            return this.storeValue(key, value, { overwrite: true, forceReact: true });
        }
    }, {
        key: 'storeValue',
        value: function storeValue(_key, _value, _options, _callback) {
            var options = _options || {};
            var store = this.dataMap;
            var key = '' + _key;
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
        value: function getValue(key, options) {
            var _key = key || '';
            _key = '' + key;
            var selector = _key.charAt(0);
            var name = _key.substring(1);
            switch (selector) {
                case '#':
                    var id = this.getValue(name);
                    return this.getValue(id);
                default:
                    return this.dataMap[_key];
            }
        }
    }, {
        key: 'connect',
        value: function connect(_key) {
            if (_key === undefined) {
                console.error('[Violation]: Cannot create a connector with a invalid key.');
                return undefined;
            }
            return new CubY_Connector(_key, this);
        }
    }, {
        key: 'react',
        value: function react(key) {
            var self = this;
            var connectionMap = this.connectionMap;
            var connectorMap = connectionMap[key] || {};
            var newValue = self.getValue(key);
            var counter = 0;
            for (var id in connectorMap) {
                if (connectorMap.hasOwnProperty(id)) {
                    connectorMap[id].run(newValue);
                }
            }
        }
    }, {
        key: 'readValue',
        value: function readValue(value, defaultValue) {
            var _value = value;
            if (typeof _value === "function") {
                var output = _value();
                return output !== undefined ? output : defaultValue;
            } else {
                return _value !== undefined ? _value : defaultValue;
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
        key: 'createID',
        value: function createID() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }
    }, {
        key: 'setupDebugger',
        value: function setupDebugger(props) {
            var _ref = props || {},
                DEBUG_MODE = _ref.DEBUG_MODE,
                DEBUG_TAGS = _ref.DEBUG_TAGS;

            var debugTags = DEBUG_TAGS || [];
            switch (DEBUG_MODE) {
                case 1:
                    window.ccsyslog = [];
                    this.debug = function (str) {
                        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        var type = options.type,
                            tag = options.tag;

                        ccsyslog.push('[' + (type || 'log') + '] ' + '[' + (tag || 'LOG') + '] ' + str);
                    };
                    break;
                case 2:
                    // this.debug = function (str, options = {}) {
                    //     let {type, tag} = options;
                    //     if(debugTags.length ===0 || debugTags.indexOf(tag)>-1) {
                    //         console[(type || 'log')]('[' + (tag || 'LOG') + '] ' + str);
                    //     }
                    //
                    // };
                    this.debug = function (str) {
                        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        var type = options.type,
                            tag = options.tag,
                            detail = options.detail;

                        var payload = {
                            task: 'debug',
                            data: {
                                str: str,
                                type: type,
                                tag: tag,
                                DEBUG_TAGS: DEBUG_TAGS,
                                DEBUG_MODE: DEBUG_MODE
                            }
                        };
                        cw.sent(payload);
                        // if(debugTags.length ===0 || debugTags.indexOf(tag)>-1) {
                        //     console[(type || 'log')]('[' + (tag || 'LOG') + '] ' + str + (detail ? ('\nDetail:\n' + detail) : ''));
                        // }
                    };
                    break;
                case 3:
                    // this.debug = function (str, options = {}) {
                    //     let {type, tag, detail} = options;
                    //     if(debugTags.length ===0 || debugTags.indexOf(tag)>-1) {
                    //         console[(type || 'log')]('[' + (tag || 'LOG') + '] ' + str + (detail ? ('\nDetail:\n' + detail) : ''));
                    //     }
                    // };
                    this.debug = function (str) {
                        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        var type = options.type,
                            tag = options.tag,
                            detail = options.detail;

                        var payload = {
                            task: 'debug',
                            data: {
                                str: str,
                                type: type,
                                tag: tag,
                                detail: detail && detail.toString() || undefined,
                                DEBUG_TAGS: DEBUG_TAGS,
                                DEBUG_MODE: DEBUG_MODE
                            }
                        };
                        cw.sent(payload);
                        // if(debugTags.length ===0 || debugTags.indexOf(tag)>-1) {
                        //     console[(type || 'log')]('[' + (tag || 'LOG') + '] ' + str + (detail ? ('\nDetail:\n' + detail) : ''));
                        // }
                    };
                    break;
                default:
                    this.debug = function () {};
                    break;

            }
        }
    }]);

    return CubY_Core;
}();

var CubY_Connector = function () {
    function CubY_Connector(key, core) {
        _classCallCheck(this, CubY_Connector);

        var self = this;
        this.id = 'connector-' + CubY.createID();
        this.bindingKey = key;
        this._freq = 32;

        this.insert = function () {
            var connectorMap = core.connectionMap[self.bindingKey] || {};
            connectorMap[self.id] = self;
            core.connectionMap[self.bindingKey] = connectorMap;

            if (core.DEBUG_MODE) {
                var counter = 0;
                for (var key in connectorMap) {
                    if (connectorMap.hasOwnProperty(key)) {
                        counter++;
                    }
                }
                CubY.debug('KEY: ' + self.bindingKey + ' CONNECT #: ' + counter);
            }
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
        key: 'freq',
        value: function freq(ms) {
            this._freq = ms;
            return this;
        }
    }, {
        key: 'run',
        value: function run(newValue) {
            var self = this;
            if (this._reactTimer !== undefined) {
                cw.clearTimer(this._reactTimer);
            }
            if (self.action) {
                if (self.owner) {
                    if (self.owner.isActive) {
                        this._reactTimer = cw.setTimer(function () {
                            var t0 = performance.now();
                            self.action.call(self.owner, newValue);
                            var t1 = performance.now();
                            CubY.debug('Element ' + self.owner.id + ' took [' + (t1 - t0).toFixed(0) + 'ms] for reacting to the change of [' + self.bindingKey + ']. ', {
                                tag: 'REACT',
                                detail: self.action
                            });
                        }, this._freq);
                    }
                } else {
                    this._reactTimer = cw.setTimer(function () {
                        var t0 = performance.now();
                        self.action(newValue);
                        var t1 = performance.now();
                        CubY.debug('Reacting to the change of [' + self.bindingKey + '] took [' + (t1 - t0).toFixed(0) + 'ms]', { tag: 'REACT', detail: self.action });
                    }, this._freq);
                }
            }
        }
    }]);

    return CubY_Connector;
}();

exports.default = CubY_Core;

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

var _CubY = __webpack_require__(/*! ./CubY */ "./src/cuby/CubY.js");

var _CubY2 = _interopRequireDefault(_CubY);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by Anxin Yang on 5/26/2018.
 */

function createID() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

window.cdomList = [];
function CDOM(_tag, _id, _root, NS) {
    this.tag = this.readValue(_tag) || 'div';
    this.id = this.readValue(_id) || this.tag + '_' + createID();
    this.dom = NS === true ? document.createElementNS("http://www.w3.org/2000/svg", this.tag) : document.createElement(this.tag);
    this.NS = NS;
    this.onEvent = {};
    this.childrenList = [];
    this.attribute = {};
    this.property = {};
    this.domStyle = {};
    this.updaters = {};
    this.connectionList = [];
    this.parent;
    this.classes = [];
    this.root(_root);
    this.hasInit = false;
    this.attr('id', this.id);

    var self = this;
    this.updater = function (name) {
        var updater = this.updaters[name];
        return function () {
            if (updater) {
                updater.call(self, self.data, arguments);
            }
        };
    };
    cdomList.push(this);
}
CDOM.prototype = {
    setUpdater: function setUpdater(name, updater) {
        this.updaters[name] = updater;
        return this;
    },
    bind: function bind(key, fn) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (key) {
            var speed = options.speed;

            switch (speed) {
                case 'fastest':
                    speed = 0;
                    break;
                case 'fast':
                    speed = 16;
                    break;
                case 'normal':
                    speed = 32;
                    break;
                case 'slow':
                    speed = 64;
                    break;
                case 'slowest':
                    speed = 128;
                    break;
                case 'do not care':
                    speed = 256;
                    break;
                case 'why we need this?':
                    speed = 512;
                    break;
                case 'really?':
                    speed = 1024;
                    break;
                default:
                    speed = 32;
            }
            _CubY2.default.connect(key).to(fn).belong(this).freq(speed);
        }
        return this;
    },
    root: function root(_root) {
        if (_root) {
            _root.appendChild(this.dom);
            this.isRoot = true;
            this.activated();
        }
        return this;
    },
    append: function append(_tag, _id) {
        var tag = this.readValue(_tag);
        var id = this.readValue(_id);
        var element = _CubY2.default.createElement(tag, id);
        this.appendElement(element);
        return element;
    },
    appendNS: function appendNS(_tag, _id) {
        var tag = this.readValue(_tag);
        var id = this.readValue(_id);
        var element = _CubY2.default.createElementNS(tag, id);
        this.appendElement(element);
        return element;
    },
    appendElement: function appendElement(CubY_DOM) {
        if (CubY_DOM === undefined) {
            return;
        }
        var element = this.readValue(CubY_DOM);
        element.parent = this;

        this.childrenList.push(element);
        this.dom.appendChild(element.dom);
        if (this.isActive || this.isRoot) {
            element.activated();
        }
        return element;
    },
    attr: function attr(key, _value) {
        var value = void 0;

        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
            for (var k in key) {
                this.attr(k, key[k]);
            }
            return this;
        }

        if (key === 'init' || key === 'activated' || key === 'deactivated') {
            value = _value;
        } else {
            value = this.readValue(_value);
            if (value === false) {
                if (this.NS) {
                    this.dom.removeAttribute(null, key);
                } else {
                    this.dom.removeAttribute(key);
                }
            } else {
                if (this.NS) {
                    this.dom.setAttributeNS(null, key, value);
                } else {
                    this.dom.setAttribute(key, value);
                }
            }
        }

        if (key === 'id') {
            this.id = value;
        }
        this.attribute[key] = value;
        return this;
    },
    prop: function prop(key, _value) {
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
    },
    on: function on(eventName, _value) {
        var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        var value = _value;
        var self = this;
        if (this.onEvent[eventName + tag]) {
            this.dom.removeEventListener(eventName, this.onEvent[eventName + tag]);
        }
        this.onEvent[eventName + tag] = value;
        if (value) {
            this.dom.addEventListener(eventName, function (e) {
                self.onEvent[eventName + tag].call(self, e, self.data);
            });
        }
        return this;
    },
    style: function style(_key, _value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var self = this;
        var key = this.readValue(_key);
        var value = this.readValue(_value);
        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
            for (var k in key) {
                this.style(k, key[k], options);
            }
            return this;
        }
        var delay = options.delay;

        if (delay) {
            cw.setTimer(function () {
                self.domStyle[key] = value;
                self.dom.style[key] = value;
            }, delay);
        } else {
            this.domStyle[key] = value;
            this.dom.style[key] = value;
        }
        return this;
    },
    content: function content(_value) {
        var value = this.readValue(_value);
        this.innerHTML = value;
        this.dom.innerHTML = value;
        return this;
    },
    getContent: function getContent() {
        return this.innerHTML;
    },
    appendClass: function appendClass(_className) {
        var className = this.readValue(_className);
        var classes = this.classes || [];
        classes.push(className);
        this.dom.classList.add(className);
        this.classes = classes;
        return this;
    },
    removeClass: function removeClass(_className) {
        var className = this.readValue(_className);
        var classes = this.classes || [];
        var index = classes.indexOf(className);
        if (index < 0) {
            return this;
        }
        classes.splice(index, 1);
        this.dom.classList.remove(className);
        this.classes = classes;
        return this;
    },
    select: function select(_selector) {
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
    },
    detach: function detach() {
        BACKGROUND.appendElement(this);
        this.deactivated();
    },
    selectById: function selectById(id) {
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
    },
    selectByClassName: function selectByClassName(className) {
        var childrenList = this.childrenList;
        var targetList = [];
        for (var i = 0; i < childrenList.length; i++) {
            var child = childrenList[i];
            if (child.classes.indexOf(className) > -1) {
                targetList.push(child);
            }
        }
        return targetList;
    },
    selectByTag: function selectByTag(_tag) {
        var childrenList = this.childrenList;
        var targetList = [];
        for (var i = 0; i < childrenList.length; i++) {
            var child = childrenList[i];
            if (child.tag === _tag) {
                targetList.push(child);
            }
        }
        return targetList;
    },
    remove: function remove(_selector, _transition) {
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
    },
    removeById: function removeById(id, _transition) {
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
    },
    removeByClassName: function removeByClassName(className, _transition) {
        var childrenList = this.childrenList;
        for (var i = 0; i < childrenList.length; i++) {
            var child = childrenList[i];
            if (child.classes.indexOf(className) > -1) {
                childrenList.splice(i, 1);
                child.remove(undefined, _transition);
                i--;
            }
        }
    },
    removeByTag: function removeByTag(_tag, _transition) {
        var childrenList = this.childrenList;
        for (var i = 0; i < childrenList.length; i++) {
            var child = childrenList[i];
            if (child.tag === _tag) {
                childrenList.splice(i, 1);
                child.remove(undefined, _transition);
                i--;
            }
        }
    },
    removeAllChildren: function removeAllChildren() {
        var childrenList = this.childrenList;
        while (childrenList.length > 0) {
            var child = childrenList.pop();
            child.remove();
        }
        this.childrenList = [];
    },
    removeSelf: function removeSelf(_transition) {
        var self = this;
        this.deactivated();
        if (_transition) {
            this.deactivatedTimer = cw.setTimer(function () {
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
                    this.parent.childrenList = childrenList;
                }
            }
        }

        this.removeAllChildren();

        var idx = cdomList.indexOf(this);
        if (idx >= 0) {
            cdomList.splice(idx, 1);
        }
    },
    activated: function activated() {
        this.isActive = true;
        if (this.deactivatedTimer) {
            cw.clearTimer(this.deactivatedTimer);
        }

        this.connectionList.forEach(function (connection) {
            connection.insert();
        });

        this.childrenList.forEach(function (child) {
            child.activated();
        });

        if (this.attribute.init !== undefined && !this.hasInit) {
            this.attribute.init.call(this);
        }
        if (this.attribute.activated) {
            this.attribute.activated.call(this);
        }
        this.hasInit = true;
    },
    deactivated: function deactivated() {
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
    },
    readValue: function readValue(_value) {
        var value = _value;
        if (typeof value === "function") {
            return value.call(this, this.data);
        } else {
            return value;
        }
    }
};

var BACKGROUND = new CDOM('BACKGROUND', 'BACKGROUND');
//window.CDOM = CDOM;
exports.default = CDOM;

/***/ }),

/***/ "./src/cuby/CubY_Module.js":
/*!*********************************!*\
  !*** ./src/cuby/CubY_Module.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function CubY_Module(fn) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    this.module = fn;
    this.options = options;
}
CubY_Module.prototype = {
    content: function content(options) {
        if (typeof this.module === 'function') {
            //let _options = Object.assign({},this.options, options);
            this.module = this.module(options);
        }
        return this.module;
    }
};

exports.default = CubY_Module;

/***/ }),

/***/ "./src/cuby/CubY_RAF.js":
/*!******************************!*\
  !*** ./src/cuby/CubY_RAF.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CubY_Module = __webpack_require__(/*! ../cuby/CubY_Module */ "./src/cuby/CubY_Module.js");

var _CubY_Module2 = _interopRequireDefault(_CubY_Module);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var mod = new _CubY_Module2.default(function (obj) {
    var o = obj || window;
    o.requestAnimFrame = function () {
        return o.requestAnimationFrame || o.webkitRequestAnimationFrame || o.mozRequestAnimationFrame || o.oRequestAnimationFrame || o.msRequestAnimationFrame || function ( /* function */callback, /* DOMElement */element) {
            o.setTimeout(callback, 1000 / 60);
        };
    }();

    o.requestTimeout = function (fn, delay) {
        if (!o.requestAnimationFrame && !o.webkitRequestAnimationFrame && !(o.mozRequestAnimationFrame && o.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
        !o.oRequestAnimationFrame && !o.msRequestAnimationFrame) return setTimeout(fn, delay);

        var start = new Date().getTime(),
            handle = new Object();

        function loop() {
            var current = new Date().getTime(),
                delta = current - start;

            delta >= delay ? fn.call() : handle.value = o.requestAnimFrame(loop);
        };

        handle.value = o.requestAnimFrame(loop);
        return handle;
    };

    o.clearRequestTimeout = function (handle) {
        o.cancelAnimationFrame ? o.cancelAnimationFrame(handle.value) : o.webkitCancelAnimationFrame ? o.webkitCancelAnimationFrame(handle.value) : o.webkitCancelRequestAnimationFrame ? o.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
        o.mozCancelRequestAnimationFrame ? o.mozCancelRequestAnimationFrame(handle.value) : o.oCancelRequestAnimationFrame ? o.oCancelRequestAnimationFrame(handle.value) : o.msCancelRequestAnimationFrame ? o.msCancelRequestAnimationFrame(handle.value) : clearTimeout(handle);
    };

    /**
     * Behaves the same as setInterval except uses requestAnimationFrame() where possible for better performance
     * @param {function} fn The callback function
     * @param {int} delay The delay in milliseconds
     */
    o.requestInterval = function (fn, delay) {
        if (!o.requestAnimationFrame && !o.webkitRequestAnimationFrame && !(o.mozRequestAnimationFrame && o.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
        !o.oRequestAnimationFrame && !o.msRequestAnimationFrame) return setInterval(fn, delay);

        var start = new Date().getTime(),
            handle = new Object();

        function loop() {
            var current = new Date().getTime(),
                delta = current - start;

            if (delta >= delay) {
                fn.call();
                start = new Date().getTime();
            }

            handle.value = o.requestAnimFrame(loop);
        };

        handle.value = o.requestAnimFrame(loop);
        return handle;
    };

    /**
     * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
     * @param {int|object} fn The callback function
     */
    o.clearRequestInterval = function (handle) {
        o.cancelAnimationFrame ? o.cancelAnimationFrame(handle.value) : o.webkitCancelAnimationFrame ? o.webkitCancelAnimationFrame(handle.value) : o.webkitCancelRequestAnimationFrame ? o.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
        o.mozCancelRequestAnimationFrame ? o.mozCancelRequestAnimationFrame(handle.value) : o.oCancelRequestAnimationFrame ? o.oCancelRequestAnimationFrame(handle.value) : o.msCancelRequestAnimationFrame ? o.msCancelRequestAnimationFrame(handle.value) : clearInterval(handle);
    };
});

exports.default = mod;

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

/***/ "./src/cuby/CubY_XHR.js":
/*!******************************!*\
  !*** ./src/cuby/CubY_XHR.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CubY = __webpack_require__(/*! ./CubY */ "./src/cuby/CubY.js");

var _CubY2 = _interopRequireDefault(_CubY);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CubY_XHR = function CubY_XHR() {};

CubY_XHR.prototype.ajax = function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _ref = params || {},
        url = _ref.url,
        method = _ref.method,
        data = _ref.data,
        ref = _ref.ref,
        async = _ref.async,
        xhr = _ref.xhr,
        contentType = _ref.contentType,
        noAuth = _ref.noAuth,
        dataType = _ref.dataType,
        processData = _ref.processData,
        cache = _ref.cache,
        noJSON = _ref.noJSON,
        ajax = _ref.ajax,
        callback = _ref.callback,
        heavy = _ref.heavy;

    var header = params.header,
        onProgress = params.onProgress,
        beforeSend = params.beforeSend;

    var request = new XMLHttpRequest();
    request.open(method || 'GET', url, async === undefined ? true : async);

    for (var key in header || {}) {
        if (header.hasOwnProperty(key)) {
            request.setRequestHeader(key, header[key]);
        }
    }

    request.onload = function () {
        var data = request.responseText;
        if (request.status >= 200 && request.status < 400) {
            data = JSON.parse(request.responseText);
            callback(true, data, request.status, request);
        } else {
            callback(false, data, request.status, request);
        }
    };

    request.onerror = function () {
        var data = JSON.parse(request.responseText);
        callback(false, data, request.status, request);
    };

    request.upload.onprogress = function (e) {
        onProgress && onProgress(e);
    };

    var _data = void 0;
    switch (dataType) {
        case 'file':
            _data = data;
            break;
        case 'json':
        default:
            request.setRequestHeader('Content-Type', contentType === undefined ? "application/json; charset=utf-8" : contentType);
            _data = JSON.stringify(data);
    }

    beforeSend && beforeSend(request);

    request.send(_data);
};

exports.default = new CubY_XHR();

function temp() {
    var _ref2 = params || {},
        url = _ref2.url,
        method = _ref2.method,
        payload = _ref2.payload,
        ref = _ref2.ref,
        async = _ref2.async,
        xhr = _ref2.xhr,
        contentType = _ref2.contentType,
        noAuth = _ref2.noAuth,
        dataType = _ref2.dataType,
        processData = _ref2.processData,
        cache = _ref2.cache,
        noJSON = _ref2.noJSON,
        ajax = _ref2.ajax,
        callback = _ref2.callback,
        heavy = _ref2.heavy;

    var requestQueueNumber = _CubY2.default.getValue('requestQueueNumber') || 0;
    var queue = _CubY2.default.getValue('requestQueue') || [];
    _CubY2.default.setValue('requestQueue', queue);

    if (!_CubY2.default.ifCurrentUserIsAdmin() && noAuth !== true && (method || 'get') !== 'get') {
        return;
    }

    ref = this.getValue('currentRef');
    if (requestQueueNumber < (CCONFIG.MAX_REQUEST || 3)) {
        _CubY2.default.debug('Requesting: ' + (method || 'get') + ' ' + url, { tag: 'WEB' });
        _CubY2.default.setValue('requestQueueNumber', ++requestQueueNumber);
        $.ajax(ajax || {
            url: url,
            type: method || 'get',
            async: async || true,
            contentType: processData || "application/json; charset=utf-8",
            crossDomain: true,
            data: JSON.stringify(payload),
            dataType: dataType || "json",
            xhr: xhr,
            beforeSend: function beforeSend(xhr) {
                _CubY2.default.setValue('loading', heavy ? 'heavy' : true);
                if (_CubY2.default.getValue('Authorization')) {
                    xhr.setRequestHeader("Authorization", _CubY2.default.getValue('Authorization'));
                }
            }

        }).done(function (response, textStatus, xhr) {
            _CubY2.default.setValue('loading', false);
            if (ref !== undefined && ref !== _CubY2.default.getValue('currentRef')) {
                return;
            }
            if (typeof callback === 'function') callback(true, response, textStatus, xhr);
        }).fail(function (response, textStatus, xhr) {
            _CubY2.default.setValue('loading', false);
            var status = response.status;
            var isHandled = void 0;

            if (ref !== undefined && ref !== _CubY2.default.getValue('currentRef')) {
                return;
            }
            if (typeof callback === 'function') {
                isHandled = callback(false, response, textStatus, xhr);
            };

            if (isHandled) {
                return;
            }

            switch (status) {
                case 401:
                    _CubY2.default.storeValue('Authorized', false);
                default:
                    _CubY2.default.networkFail && _CubY2.default.networkFail(status);
            }
        }).always(function () {
            var queue = _CubY2.default.getValue('requestQueue');
            var p = queue.shift();

            p && _CubY2.default.server(p);
            var requestQueueNumber = _CubY2.default.getValue('requestQueueNumber');
            _CubY2.default.setValue('requestQueueNumber', Math.max(0, --requestQueueNumber));
        });
    } else {
        _CubY2.default.debug('Reach max request number, holding request.', { tag: 'WEB' });
        var _queue = _CubY2.default.getValue('requestQueue');
        _queue.push(params);
        _CubY2.default.setValue('requestQueue', _queue);
    }
}

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

(0, _CubY2.default)(); /**
                        * Created by Anxin Yang on 3/28/2018.
                        */

window.root = new _CubY2.default.createElement('div', 'cuby_root', document.getElementById('app'));
_CubY2.default.setValue('aa', 'bb');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YnkvQ3ViWS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VieS9DdWJZX0NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YnkvQ3ViWV9ET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YnkvQ3ViWV9Nb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YnkvQ3ViWV9SQUYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2N1YnkvQ3ViWV9Sb3V0aW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jdWJ5L0N1YllfWEhSLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0EsSUFBTSxpQkFBaUIsMEJBQU0sQ0FBN0I7O0FBR0EsbUJBQVM7O0FBRVQsU0FBUyxLQUFNLFFBQ1g7UUFBSSxPQUFPLHdCQUNYO1FBQUk7QUFFQTtrQkFBVSxLQUFLLFNBQVMsS0FDeEI7b0JBQVksS0FB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RVI7O2lCQUFLLGVBQUssT0FDVjtnQkFBSSxxQkFBcUIsZUFBSyxTQUM5QjsyQkFBSyxTQUFTLHNCQUFzQixLQUFLLElBQUksR0FBRyxFQUNuRDtBQUNKO0FBekRELFdBMERJO3VCQUFLLE1BQU0sOENBQThDLEVBQUMsS0FDMUQ7WUFBSSxTQUFRLGVBQUssU0FDakI7ZUFBTSxLQUNOO3VCQUFLLFNBQVMsZ0JBQ2pCO0FBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQy9IRDs7Ozs7Ozs7QUFFQSxXLFlBTEE7Ozs7QUFNQSxPQUFPLE9BQU8sSUFBSSxlQUFLLGNBQWMsT0FBTyxhQUFhLFNBQVMsZUFBZTtBQUNqRixlQUFLLFNBQVMsTUFBSztBQUNuQixZQUFZLFEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgQ3ViWV9Db3JlIGZyb20gJy4vQ3ViWV9Db3JlJztcclxuaW1wb3J0IENET00gZnJvbSAnLi9DdWJZX0RPTSc7XHJcbmltcG9ydCBDdWJZX1JvdXRpbmUgZnJvbSAnLi9DdWJZX1JvdXRpbmUnO1xyXG5pbXBvcnQgQ3ViWV9Nb2R1bGUgZnJvbSAnLi9DdWJZX01vZHVsZSc7XHJcbmltcG9ydCBDdWJZX1hIUiBmcm9tICcuL0N1YllfWEhSJztcclxuaW1wb3J0IEN1YllfUkFGIGZyb20gJy4vQ3ViWV9SQUYnO1xyXG5jb25zdCBFTVBUWV9GVU5DVElPTiA9ICgpPT57fTtcclxuXHJcblxyXG5DdWJZX1JBRi5jb250ZW50KCk7XHJcblxyXG5mdW5jdGlvbiBDdWJZIChjb25maWcpIHtcclxuICAgIGxldCBDb3JlID0gbmV3IEN1YllfQ29yZShjb25maWcpO1xyXG4gICAgbGV0IG1ldGhvZHMgPSB7XHJcbiAgICAgICAgLy9Db3JlXHJcbiAgICAgICAgZ2V0VmFsdWU6IENvcmUuZ2V0VmFsdWUuYmluZChDb3JlKSxcclxuICAgICAgICBnZXRCcm93c2VyOiBDb3JlLmdldEJyb3dzZXIuYmluZChDb3JlKSxcclxuICAgICAgICBzdG9yZVZhbHVlOiBDb3JlLnN0b3JlVmFsdWUuYmluZChDb3JlKSxcclxuICAgICAgICBzdG9yZUFycmF5OiBDb3JlLnN0b3JlQXJyYXkuYmluZChDb3JlKSxcclxuICAgICAgICBzZXRWYWx1ZTogQ29yZS5zZXRWYWx1ZS5iaW5kKENvcmUpLFxyXG4gICAgICAgIGNvbm5lY3Q6IENvcmUuY29ubmVjdC5iaW5kKENvcmUpLFxyXG4gICAgICAgIHJlYWN0OiBDb3JlLnJlYWN0LmJpbmQoQ29yZSksXHJcbiAgICAgICAgZGVidWc6IENvcmUuZGVidWcuYmluZChDb3JlKSxcclxuICAgICAgICByZWFkVmFsdWU6IENvcmUucmVhZFZhbHVlLmJpbmQoQ29yZSksXHJcbiAgICAgICAgaXNPYmplY3RFbXB0eTogQ29yZS5pc09iamVjdEVtcHR5LmJpbmQoQ29yZSksXHJcbiAgICAgICAgY3JlYXRlSUQ6IENvcmUuY3JlYXRlSUQuYmluZChDb3JlKSxcclxuICAgICAgICBnZXRDYWxsZXJOYW1lOiBDb3JlLmdldENhbGxlck5hbWUuYmluZChDb3JlKSxcclxuXHJcbiAgICAgICAgLy9ET01cclxuICAgICAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAoX3RhZywgX2lkLCBfcm9vdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENET00oX3RhZywgX2lkLCBfcm9vdCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVFbGVtZW50TlM6IGZ1bmN0aW9uIChfdGFnLCBfaWQsIF9yb290KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ0RPTShfdGFnLCBfaWQsIF9yb290LCB0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgbW9kdWxlOiBmdW5jdGlvbihmbiwgb3B0aW9ucyl7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ3ViWV9Nb2R1bGUoZm4sIG9wdGlvbnMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL3hoclxyXG4gICAgICAgIGFqYXg6IEN1YllfWEhSLmFqYXgsXHJcbiAgICAgICAgLy9Sb3V0aW5lXHJcbiAgICAgICAgY3JlYXRlUm91dGluZTpDdWJZX1JvdXRpbmUuY3JlYXRlUm91dGluZS5iaW5kKEN1YllfUm91dGluZSksXHJcbiAgICAgICAgZ2V0Q3VycmVudEN5Y2xlOkN1YllfUm91dGluZS5nZXRDdXJyZW50Q3ljbGUuYmluZChDdWJZX1JvdXRpbmUpLFxyXG4gICAgICAgIHJvdXRpbmU6Q3ViWV9Sb3V0aW5lLnJvdXRpbmUuYmluZChDdWJZX1JvdXRpbmUpLFxyXG4gICAgICAgIC8vQWRkT25zXHJcbiAgICAgICAgYWRkT246IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gb2JqKXtcclxuICAgICAgICAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcclxuICAgICAgICAgICAgICAgICAgICBDdWJZW2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy9PdGhlclxyXG4gICAgICAgIHZlcnNpb246ICdQcml2YXRhLjExMTYxOC4wMCcsXHJcbiAgICAgICAgZGVidWdJbmZvOiBbQ3ViWV9Db3JlLEN1YllfUm91dGluZV1cclxuICAgIH07XHJcbiAgICBPYmplY3QuYXNzaWduKEN1YlksIG1ldGhvZHMpO1xyXG59XHJcblxyXG5cclxud2luZG93LkN1YlkgPSBDdWJZO1xyXG5leHBvcnQgZGVmYXVsdCBDdWJZO1xyXG4iLCJjb25zdCBFTVBUWV9GVU5DVElPTiA9ICgpPT57fTtcclxuY2xhc3MgQ3ViWV9Db3Jle1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMgPSB7fSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW5pdChwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChwcm9wcykge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmRhdGFNYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25NYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmJyb3dzZXIgPSB0aGlzLmdldEJyb3dzZXIoKTtcclxuICAgICAgICB3aW5kb3cuY2NheHkgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2V0dXBEZWJ1Z2dlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FsbGVyTmFtZSgpe1xyXG4gICAgICAgIC8vIEluY2x1ZGUgdGhpcyBmdW5jdGlvbiBqdXN0IGZvciBmdW5cclxuICAgICAgICBjb25zb2xlLndhcm4oJ1tOb24tc3RhbmRhcmRdOiBUaGlzIGZlYXR1cmUgaXMgbm9uLXN0YW5kYXJkIGFuZCBpcyBub3Qgb24gYSBzdGFuZGFyZHMgdHJhY2suIERvIG5vdCB1c2UgaXQgb24gcHJvZHVjdGlvbiBzaXRlcyBmYWNpbmcgdGhlIFdlYjogaXQgd2lsbCBub3Qgd29yayBmb3IgZXZlcnkgdXNlci4gVGhlcmUgbWF5IGFsc28gYmUgbGFyZ2UgaW5jb21wYXRpYmlsaXRpZXMgYmV0d2VlbiBpbXBsZW1lbnRhdGlvbnMgYW5kIHRoZSBiZWhhdmlvciBtYXkgY2hhbmdlIGluIHRoZSBmdXR1cmUuJylcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgc3RyID0gbmV3IEVycm9yKCkuc3RhY2sudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gc3RyLnNwbGl0KCdhdCcpO1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IGFycmF5WzNdO1xyXG4gICAgICAgICAgICBuYW1lID0gKG5hbWUuc3BsaXQoJyAnKSlbMV07XHJcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignW2dldENhbGxOYW1lXSBmZWF0dXJlIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBjbGllbnQ6ICcgKyB0aGlzLmdldEJyb3dzZXIoKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRCcm93c2VyKCl7XHJcbiAgICAgICAgbGV0IGlzSUUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNDaHJvbWUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNPcGVyYSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKCghIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMCl7XHJcbiAgICAgICAgICAgIGlzT3BlcmEgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gJ29wZXJhJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgIHJldHVybiAnZmlyZWZveCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKC9jb25zdHJ1Y3Rvci9pLnRlc3Qod2luZG93LkhUTUxFbGVtZW50KSB8fCAoZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7XHJcbiAgICAgICAgICAgIH0pKCF3aW5kb3dbJ3NhZmFyaSddIHx8IHNhZmFyaS5wdXNoTm90aWZpY2F0aW9uKSl7XHJcbiAgICAgICAgICAgIHJldHVybiAnc2FmYXJpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpe1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG91dHB1dCA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0lFID10cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gJ2llJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWlzSUUgJiYgISF3aW5kb3cuU3R5bGVNZWRpYSl7XHJcbiAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEhd2luZG93LmNocm9tZSAmJiAhIXdpbmRvdy5jaHJvbWUud2Vic3RvcmUpe1xyXG4gICAgICAgICAgICBpc0Nocm9tZSA9IHRydWVcclxuICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigoaXNDaHJvbWUgfHwgaXNPcGVyYSkgJiYgISF3aW5kb3cuQ1NTKXtcclxuICAgICAgICAgICAgcmV0dXJuICdibGluayc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RvcmVBcnJheShhcnJheSA9IFtdLCBvcHRpb25zID0ge30pe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQge2lkS2V5LCBjYWxsYmFjaywgcHJlLCBwb3N0fSA9IG9wdGlvbnM7XHJcbiAgICAgICAgaWRLZXkgPSBpZEtleSB8fCAnaWQnO1xyXG4gICAgICAgIHZhciBpdGVtTGlzdCA9IFtdO1xyXG4gICAgICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKF9pdGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBfaXRlbVtpZEtleV07XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gX2l0ZW07XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHByZSl7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gcHJlKF9pdGVtKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0gPSBzZWxmLnN0b3JlVmFsdWUoa2V5LCBpdGVtLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgaWYocG9zdCkge1xyXG4gICAgICAgICAgICAgICAgcG9zdChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtTGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhhcnJheSwgaXRlbUxpc3QpO1xyXG4gICAgICAgIHJldHVybiBpdGVtTGlzdDtcclxuICAgIH1cclxuICAgIHNldFZhbHVlKGtleSwgdmFsdWUpe1xyXG4gICAgICAgcmV0dXJuIHRoaXMuc3RvcmVWYWx1ZShrZXksIHZhbHVlLHtvdmVyd3JpdGU6dHJ1ZSwgZm9yY2VSZWFjdDogdHJ1ZX0pXHJcbiAgICB9XHJcbiAgICBzdG9yZVZhbHVlKF9rZXksIF92YWx1ZSwgX29wdGlvbnMsIF9jYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5kYXRhTWFwO1xyXG4gICAgICAgIHZhciBrZXkgPSAnJytfa2V5O1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9jYWxsYmFjayB8fCBFTVBUWV9GVU5DVElPTjtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBzdG9yZVtrZXldO1xyXG4gICAgICAgIHZhciBzaG91bGRSZWFjdCA9IHRydWU7XHJcbiAgICAgICAgaWYoaXRlbSE9PXVuZGVmaW5lZCAmJiBpdGVtID09PSBPYmplY3QoaXRlbSkgJiYgb3B0aW9ucy5vdmVyd3JpdGUhPT10cnVlICYmICEoaXRlbSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICAgICAgICBpdGVtID0gT2JqZWN0LmFzc2lnbihpdGVtLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzaG91bGRSZWFjdCA9IChpdGVtIT09bmV3VmFsdWUpO1xyXG4gICAgICAgICAgICBpdGVtID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YU1hcFtrZXldID0gaXRlbTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soaXRlbSk7XHJcbiAgICAgICAgaWYoc2hvdWxkUmVhY3QgfHwgb3B0aW9ucy5mb3JjZVJlYWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhY3Qoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9O1xyXG4gICAgZ2V0VmFsdWUoa2V5LCBvcHRpb25zKSB7XHJcbiAgICAgICAgbGV0IF9rZXkgPSBrZXkgfHwgJycgO1xyXG4gICAgICAgIF9rZXkgPSAnJyArIGtleTtcclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfa2V5LmNoYXJBdCgwKTtcclxuICAgICAgICBsZXQgbmFtZSA9IF9rZXkuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuZ2V0VmFsdWUobmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShpZCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhTWFwW19rZXldO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdChfa2V5KXtcclxuICAgICAgICBpZihfa2V5ID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbVmlvbGF0aW9uXTogQ2Fubm90IGNyZWF0ZSBhIGNvbm5lY3RvciB3aXRoIGEgaW52YWxpZCBrZXkuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQ3ViWV9Db25uZWN0b3IoX2tleSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICByZWFjdChrZXkpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgY29ubmVjdGlvbk1hcCA9IHRoaXMuY29ubmVjdGlvbk1hcDtcclxuICAgICAgICB2YXIgY29ubmVjdG9yTWFwID0gY29ubmVjdGlvbk1hcFtrZXldIHx8IHt9O1xyXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHNlbGYuZ2V0VmFsdWUoa2V5KTtcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpZCBpbiBjb25uZWN0b3JNYXApe1xyXG4gICAgICAgICAgICBpZihjb25uZWN0b3JNYXAuaGFzT3duUHJvcGVydHkoaWQpKXtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rvck1hcFtpZF0ucnVuKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlYWRWYWx1ZSh2YWx1ZSwgZGVmYXVsdFZhbHVlKXtcclxuICAgICAgICBsZXQgX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYodHlwZW9mIF92YWx1ZSA9PT0gXCJmdW5jdGlvblwiKXtcclxuICAgICAgICAgICAgbGV0IG91dHB1dCA9IF92YWx1ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0ICE9PSB1bmRlZmluZWQgPyBvdXRwdXQgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBfdmFsdWUgIT09IHVuZGVmaW5lZCA/IF92YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpc09iamVjdEVtcHR5KG9iail7XHJcbiAgICAgICAgaWYoIW9iail7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIga2V5IGluIG9iail7XHJcbiAgICAgICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJRCgpIHtcclxuICAgICAgICBmdW5jdGlvbiBzNCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBEZWJ1Z2dlcihwcm9wcyl7XHJcbiAgICAgICAgbGV0IHtERUJVR19NT0RFLCBERUJVR19UQUdTfSA9IHByb3BzIHx8IHt9O1xyXG4gICAgICAgIGxldCBkZWJ1Z1RhZ3MgPSBERUJVR19UQUdTIHx8IFtdO1xyXG4gICAgICAgIHN3aXRjaCAoREVCVUdfTU9ERSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2NzeXNsb2cgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVidWcgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQge3R5cGUsIHRhZ30gPSBvcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjc3lzbG9nLnB1c2goJ1snICsgKHR5cGUgfHwgJ2xvZycpICsgJ10gJyArICdbJyArICh0YWcgfHwgJ0xPRycpICsgJ10gJyArIHN0cik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZGVidWcgPSBmdW5jdGlvbiAoc3RyLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQge3R5cGUsIHRhZ30gPSBvcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmKGRlYnVnVGFncy5sZW5ndGggPT09MCB8fCBkZWJ1Z1RhZ3MuaW5kZXhPZih0YWcpPi0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGVbKHR5cGUgfHwgJ2xvZycpXSgnWycgKyAodGFnIHx8ICdMT0cnKSArICddICcgKyBzdHIpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWJ1ZyA9IGZ1bmN0aW9uIChzdHIsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB7dHlwZSwgdGFnLCBkZXRhaWx9ID0gb3B0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bG9hZCA9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrOiAnZGVidWcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cjogc3RyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogdGFnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgREVCVUdfVEFHUzogREVCVUdfVEFHUyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERFQlVHX01PREU6REVCVUdfTU9ERSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGN3LnNlbnQocGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYoZGVidWdUYWdzLmxlbmd0aCA9PT0wIHx8IGRlYnVnVGFncy5pbmRleE9mKHRhZyk+LTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZVsodHlwZSB8fCAnbG9nJyldKCdbJyArICh0YWcgfHwgJ0xPRycpICsgJ10gJyArIHN0ciArIChkZXRhaWwgPyAoJ1xcbkRldGFpbDpcXG4nICsgZGV0YWlsKSA6ICcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRlYnVnID0gZnVuY3Rpb24gKHN0ciwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHt0eXBlLCB0YWcsIGRldGFpbH0gPSBvcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmKGRlYnVnVGFncy5sZW5ndGggPT09MCB8fCBkZWJ1Z1RhZ3MuaW5kZXhPZih0YWcpPi0xKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGVbKHR5cGUgfHwgJ2xvZycpXSgnWycgKyAodGFnIHx8ICdMT0cnKSArICddICcgKyBzdHIgKyAoZGV0YWlsID8gKCdcXG5EZXRhaWw6XFxuJyArIGRldGFpbCkgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYnVnID0gZnVuY3Rpb24gKHN0ciwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHt0eXBlLCB0YWcsIGRldGFpbH0gPSBvcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXlsb2FkID17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2s6ICdkZWJ1ZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyOiBzdHIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiB0YWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IChkZXRhaWwgJiYgZGV0YWlsLnRvU3RyaW5nKCkpIHx8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERFQlVHX1RBR1M6IERFQlVHX1RBR1MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBERUJVR19NT0RFOkRFQlVHX01PREUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBjdy5zZW50KHBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKGRlYnVnVGFncy5sZW5ndGggPT09MCB8fCBkZWJ1Z1RhZ3MuaW5kZXhPZih0YWcpPi0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGVbKHR5cGUgfHwgJ2xvZycpXSgnWycgKyAodGFnIHx8ICdMT0cnKSArICddICcgKyBzdHIgKyAoZGV0YWlsID8gKCdcXG5EZXRhaWw6XFxuJyArIGRldGFpbCkgOiAnJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVidWcgPSAoKT0+e307XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmNsYXNzIEN1YllfQ29ubmVjdG9ye1xyXG4gICAgY29uc3RydWN0b3Ioa2V5LCBjb3JlKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pZCA9ICAnY29ubmVjdG9yLScgKyBDdWJZLmNyZWF0ZUlEKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nS2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuX2ZyZXEgPSAzMjtcclxuXHJcbiAgICAgICAgdGhpcy5pbnNlcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb25uZWN0b3JNYXAgPSBjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XSB8fCB7fTtcclxuICAgICAgICAgICAgY29ubmVjdG9yTWFwW3NlbGYuaWRdID0gc2VsZjtcclxuICAgICAgICAgICAgY29yZS5jb25uZWN0aW9uTWFwW3NlbGYuYmluZGluZ0tleV0gPSBjb25uZWN0b3JNYXA7XHJcblxyXG4gICAgICAgICAgICBpZihjb3JlLkRFQlVHX01PREUpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGtleSBpbiBjb25uZWN0b3JNYXApe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbm5lY3Rvck1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEN1YlkuZGVidWcoJ0tFWTogJysgc2VsZi5iaW5kaW5nS2V5ICsgJyBDT05ORUNUICM6ICcgK2NvdW50ZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZihjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29yZS5jb25uZWN0aW9uTWFwW3NlbGYuYmluZGluZ0tleV1bc2VsZi5pZF0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY29yZS5jb25uZWN0aW9uTWFwW3NlbGYuYmluZGluZ0tleV1bc2VsZi5pZF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDdWJZLmlzT2JqZWN0RW1wdHkoY29yZS5jb25uZWN0aW9uTWFwW3NlbGYuYmluZGluZ0tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb3JlLmNvbm5lY3Rpb25NYXBbc2VsZi5iaW5kaW5nS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tXYXJuaW5nXTogQ29ubmVjdG9yIHJlbW92ZSBtZXRob2QgcmVmZXJlbmNlIGVycm9yLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0KCk7XHJcbiAgICB9XHJcbiAgICB0byhhY3Rpb24pe1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYmVsb25nKG93bmVyKXtcclxuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XHJcbiAgICAgICAgb3duZXIuY29ubmVjdGlvbkxpc3QucHVzaCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGZyZXEobXMpe1xyXG4gICAgICAgIHRoaXMuX2ZyZXEgPSBtcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJ1bihuZXdWYWx1ZSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKHRoaXMuX3JlYWN0VGltZXIgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGN3LmNsZWFyVGltZXIodGhpcy5fcmVhY3RUaW1lcilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLm93bmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5vd25lci5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlYWN0VGltZXIgPSBjdy5zZXRUaW1lcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFjdGlvbi5jYWxsKHNlbGYub3duZXIsIG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0MSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3ViWS5kZWJ1ZygnRWxlbWVudCAnICsgc2VsZi5vd25lci5pZCArICcgdG9vayBbJyArICh0MSAtIHQwKS50b0ZpeGVkKDApICsgJ21zXSBmb3IgcmVhY3RpbmcgdG8gdGhlIGNoYW5nZSBvZiBbJyArIHNlbGYuYmluZGluZ0tleSArICddLiAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiAnUkVBQ1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogc2VsZi5hY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLl9mcmVxKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWFjdFRpbWVyID0gY3cuc2V0VGltZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWN0aW9uKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICBDdWJZLmRlYnVnKCdSZWFjdGluZyB0byB0aGUgY2hhbmdlIG9mIFsnICsgc2VsZi5iaW5kaW5nS2V5ICsgJ10gdG9vayBbJysgKHQxLSB0MCkudG9GaXhlZCgwKSArJ21zXScsIHt0YWc6ICdSRUFDVCcsIGRldGFpbDpzZWxmLmFjdGlvbn0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sdGhpcy5fZnJlcSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1YllfQ29yZTsiLCJpbXBvcnQgQ3ViWSBmcm9tIFwiLi9DdWJZXCI7XHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDUvMjYvMjAxOC5cclxuICovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJRCgpIHtcclxuICAgIGZ1bmN0aW9uIHM0KCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxyXG4gICAgICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XHJcbn1cclxuXHJcbndpbmRvdy5jZG9tTGlzdCA9IFtdO1xyXG5mdW5jdGlvbiBDRE9NKF90YWcsIF9pZCwgX3Jvb3QsIE5TKSB7XHJcbiAgICB0aGlzLnRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpIHx8ICdkaXYnO1xyXG4gICAgdGhpcy5pZCA9IHRoaXMucmVhZFZhbHVlKF9pZCl8fCB0aGlzLnRhZyArICdfJyArIGNyZWF0ZUlEKCk7XHJcbiAgICB0aGlzLmRvbSA9IE5TID09PSB0cnVlPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLHRoaXMudGFnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy50YWcpO1xyXG4gICAgdGhpcy5OUyA9IE5TO1xyXG4gICAgdGhpcy5vbkV2ZW50ID0ge307XHJcbiAgICB0aGlzLmNoaWxkcmVuTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5hdHRyaWJ1dGUgPSB7fTtcclxuICAgIHRoaXMucHJvcGVydHkgPSB7fTtcclxuICAgIHRoaXMuZG9tU3R5bGUgPSB7fTtcclxuICAgIHRoaXMudXBkYXRlcnMgPSB7fTtcclxuICAgIHRoaXMuY29ubmVjdGlvbkxpc3QgPSBbXTtcclxuICAgIHRoaXMucGFyZW50O1xyXG4gICAgdGhpcy5jbGFzc2VzID0gW107XHJcbiAgICB0aGlzLnJvb3QoX3Jvb3QpO1xyXG4gICAgdGhpcy5oYXNJbml0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmF0dHIoJ2lkJywgdGhpcy5pZCk7XHJcblxyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy51cGRhdGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICBsZXQgdXBkYXRlciA9dGhpcy51cGRhdGVyc1tuYW1lXTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZih1cGRhdGVyKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVyLmNhbGwoc2VsZiwgc2VsZi5kYXRhLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNkb21MaXN0LnB1c2godGhpcyk7XHJcbn1cclxuQ0RPTS5wcm90b3R5cGUgPSB7XHJcbiAgICBzZXRVcGRhdGVyKG5hbWUsdXBkYXRlcil7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyc1tuYW1lXSA9IHVwZGF0ZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgYmluZChrZXksIGZuLCBvcHRpb25zID0ge30pe1xyXG4gICAgICAgIGlmKGtleSkge1xyXG4gICAgICAgICAgICBsZXQge3NwZWVkfSA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc3BlZWQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zhc3Rlc3QnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Zhc3QnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkID0gMTY7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdub3JtYWwnOlxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkID0gMzI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzbG93JzpcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZCA9IDY0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc2xvd2VzdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQgPSAxMjg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkbyBub3QgY2FyZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQgPSAyNTY7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd3aHkgd2UgbmVlZCB0aGlzPyc6XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQgPSA1MTI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyZWFsbHk/JzpcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZCA9IDEwMjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkID0gMzI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQ3ViWS5jb25uZWN0KGtleSkudG8oZm4pLmJlbG9uZyh0aGlzKS5mcmVxKHNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgcm9vdChfcm9vdCl7XHJcbiAgICAgICAgaWYoX3Jvb3Qpe1xyXG4gICAgICAgICAgICBfcm9vdC5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSb290ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgYXBwZW5kKF90YWcsX2lkKXtcclxuICAgICAgICBsZXQgdGFnID0gdGhpcy5yZWFkVmFsdWUoX3RhZyk7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5yZWFkVmFsdWUoX2lkKTtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IEN1YlkuY3JlYXRlRWxlbWVudCh0YWcsaWQpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH0sXHJcbiAgICBhcHBlbmROUyhfdGFnLF9pZCl7XHJcbiAgICAgICAgbGV0IHRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMucmVhZFZhbHVlKF9pZCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBDdWJZLmNyZWF0ZUVsZW1lbnROUyh0YWcsaWQpO1xyXG4gICAgICAgIHRoaXMuYXBwZW5kRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH0sXHJcbiAgICBhcHBlbmRFbGVtZW50KEN1YllfRE9NKSB7XHJcbiAgICAgICAgaWYgKEN1YllfRE9NID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMucmVhZFZhbHVlKEN1YllfRE9NKTtcclxuICAgICAgICBlbGVtZW50LnBhcmVudCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoZWxlbWVudC5kb20pO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlIHx8IHRoaXMuaXNSb290KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfSxcclxuICAgIGF0dHIoa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG5cclxuICAgICAgICBpZih0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgayBpbiBrZXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRyKGssa2V5W2tdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoa2V5ID09PSAnaW5pdCcgfHwga2V5ID09PSdhY3RpdmF0ZWQnIHx8IGtleSA9PT0gJ2RlYWN0aXZhdGVkJyl7XHJcbiAgICAgICAgICAgIHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLk5TKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbS5yZW1vdmVBdHRyaWJ1dGUobnVsbCwga2V5KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb20ucmVtb3ZlQXR0cmlidXRlKGtleSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuTlMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGVOUyhudWxsLCBrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGtleSA9PT0gJ2lkJyl7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHByb3Aoa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG5cclxuICAgICAgICBpZih0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgayBpbiBrZXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wKGssa2V5W2tdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoa2V5ID09PSdhY3RpdmF0ZWQnIHx8IGtleSA9PT0gJ2RlYWN0aXZhdGVkJyl7XHJcbiAgICAgICAgICAgIHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tW2tleV0gPSAgdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb3BlcnR5W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBvbihldmVudE5hbWUsX3ZhbHVlLCB0YWcgPSAnJyl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBpZih0aGlzLm9uRXZlbnRbZXZlbnROYW1lICsgdGFnXSl7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzLm9uRXZlbnRbZXZlbnROYW1lICsgdGFnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25FdmVudFtldmVudE5hbWUgKyB0YWddID0gdmFsdWU7XHJcbiAgICAgICAgaWYodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5kb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9uRXZlbnRbZXZlbnROYW1lICsgdGFnXS5jYWxsKHNlbGYsIGUsIHNlbGYuZGF0YSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHN0eWxlKF9rZXksX3ZhbHVlLCBvcHRpb25zID0ge30pe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQga2V5ID0gdGhpcy5yZWFkVmFsdWUoX2tleSk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICBpZih0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgayBpbiBrZXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZShrLGtleVtrXSwgb3B0aW9ucylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHtkZWxheX0gPSBvcHRpb25zO1xyXG4gICAgICAgIGlmKGRlbGF5KXtcclxuICAgICAgICAgICAgY3cuc2V0VGltZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kb21TdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0sIGRlbGF5KVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kb21TdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgY29udGVudChfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBnZXRDb250ZW50KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJIVE1MO1xyXG4gICAgfSxcclxuICAgIGFwcGVuZENsYXNzKF9jbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnJlYWRWYWx1ZShfY2xhc3NOYW1lKTtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcyB8fCBbXTtcclxuICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICByZW1vdmVDbGFzcyhfY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5yZWFkVmFsdWUoX2NsYXNzTmFtZSk7XHJcbiAgICAgICAgbGV0IGNsYXNzZXMgPSB0aGlzLmNsYXNzZXMgfHwgW107XHJcbiAgICAgICAgbGV0IGluZGV4ID0gY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgaWYoaW5kZXggPCAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLmRvbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZWxlY3QoX3NlbGVjdG9yKXtcclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gX3NlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBzd2l0Y2ggKHNlbGVjdG9yKXtcclxuICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeUlkKG5hbWUpO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5Q2xhc3NOYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlUYWcoX3NlbGVjdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGV0YWNoKCl7XHJcbiAgICAgICAgQkFDS0dST1VORC5hcHBlbmRFbGVtZW50KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZWQoKTtcclxuICAgIH0sXHJcbiAgICBzZWxlY3RCeUlkKGlkKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfSxcclxuICAgIHNlbGVjdEJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGxldCB0YXJnZXRMaXN0ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdFtpXTtcclxuICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSk+LTEpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH0sXHJcbiAgICBzZWxlY3RCeVRhZyhfdGFnKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldExpc3QgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH0sXHJcbiAgICByZW1vdmUoX3NlbGVjdG9yLF90cmFuc2l0aW9uKXtcclxuICAgICAgICBpZihfc2VsZWN0b3I9PT11bmRlZmluZWQgfHwgdHlwZW9mIF9zZWxlY3RvciA9PT0gJ251bWJlcicpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGYoX3NlbGVjdG9yIHx8IF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBfc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gX3NlbGVjdG9yLnN1YnN0cmluZygxKTtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlJZChuYW1lLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlDbGFzc05hbWUobmFtZSxfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQnlUYWcoX3NlbGVjdG9yLF90cmFuc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQnlJZChpZCxfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUodW5kZWZpbmVkLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSxfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSh1bmRlZmluZWQsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUJ5VGFnKF90YWcsX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKHVuZGVmaW5lZCxfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4oKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgd2hpbGUgKGNoaWxkcmVuTGlzdC5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuTGlzdC5wb3AoKTtcclxuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0ID0gW107XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlU2VsZihfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZWQoKTtcclxuICAgICAgICBpZihfdHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVkVGltZXIgPSBjdy5zZXRUaW1lcihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRvbS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSxfdHJhbnNpdGlvbilcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2VsZi5kb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucGFyZW50KXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMucGFyZW50LmNoaWxkcmVuTGlzdDtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaTxjaGlsZHJlbkxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICBpZihjaGlsZCA9PT0gdGhpcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmNoaWxkcmVuTGlzdCA9IGNoaWxkcmVuTGlzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG5cclxuICAgICAgICBsZXQgaWR4ID0gY2RvbUxpc3QuaW5kZXhPZih0aGlzKTtcclxuICAgICAgICBpZihpZHg+PTApIHtcclxuICAgICAgICAgICAgY2RvbUxpc3Quc3BsaWNlKGlkeCwgMSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWN0aXZhdGVkKCl7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy5kZWFjdGl2YXRlZFRpbWVyKXtcclxuICAgICAgICAgICAgY3cuY2xlYXJUaW1lcih0aGlzLmRlYWN0aXZhdGVkVGltZXIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNvbm5lY3Rpb24pIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5pbnNlcnQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYXR0cmlidXRlLmluaXQgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5oYXNJbml0KXtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUuaW5pdC5jYWxsKHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuYXR0cmlidXRlLmFjdGl2YXRlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlLmFjdGl2YXRlZC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhc0luaXQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGRlYWN0aXZhdGVkKCl7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNvbm5lY3Rpb24pIHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuZGVhY3RpdmF0ZWQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5hdHRyaWJ1dGUuZGVhY3RpdmF0ZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZS5kZWFjdGl2YXRlZC5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWFkVmFsdWUoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbCh0aGlzLHRoaXMuZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5sZXQgQkFDS0dST1VORCA9IG5ldyBDRE9NKCdCQUNLR1JPVU5EJywgJ0JBQ0tHUk9VTkQnKTtcclxuLy93aW5kb3cuQ0RPTSA9IENET007XHJcbmV4cG9ydCBkZWZhdWx0IENET00iLCJmdW5jdGlvbiBDdWJZX01vZHVsZShmbiwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICB0aGlzLm1vZHVsZSA9IGZuO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxufVxyXG5DdWJZX01vZHVsZS5wcm90b3R5cGUgPSB7XHJcbiAgICBjb250ZW50OiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLm1vZHVsZSA9PT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgIC8vbGV0IF9vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSx0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZSA9IHRoaXMubW9kdWxlKG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tb2R1bGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdWJZX01vZHVsZTsiLCJpbXBvcnQgQ3ViWV9Nb2R1bGUgZnJvbSBcIi4uL2N1YnkvQ3ViWV9Nb2R1bGVcIjtcclxuXHJcbmxldCBtb2QgPSBuZXcgQ3ViWV9Nb2R1bGUoZnVuY3Rpb24gKG9iaikge1xyXG4gICAgbGV0IG8gPSAob2JqIHx8IHdpbmRvdyk7XHJcbiAgICBvLnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBvLnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICBvLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICBvLm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICBvLm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgby5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoLyogZnVuY3Rpb24gKi8gY2FsbGJhY2ssIC8qIERPTUVsZW1lbnQgKi8gZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgby5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICBvLnJlcXVlc3RUaW1lb3V0ID0gZnVuY3Rpb24gKGZuLCBkZWxheSkge1xyXG4gICAgICAgIGlmICghby5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiZcclxuICAgICAgICAgICAgIW8ud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXHJcbiAgICAgICAgICAgICEoby5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiYgby5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpICYmIC8vIEZpcmVmb3ggNSBzaGlwcyB3aXRob3V0IGNhbmNlbCBzdXBwb3J0XHJcbiAgICAgICAgICAgICFvLm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiZcclxuICAgICAgICAgICAgIW8ubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZuLCBkZWxheSk7XHJcblxyXG4gICAgICAgIHZhciBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgICBoYW5kbGUgPSBuZXcgT2JqZWN0KCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvb3AoKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgICAgICBkZWx0YSA9IGN1cnJlbnQgLSBzdGFydDtcclxuXHJcbiAgICAgICAgICAgIGRlbHRhID49IGRlbGF5ID8gZm4uY2FsbCgpIDogaGFuZGxlLnZhbHVlID0gby5yZXF1ZXN0QW5pbUZyYW1lKGxvb3ApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGhhbmRsZS52YWx1ZSA9IG8ucmVxdWVzdEFuaW1GcmFtZShsb29wKTtcclxuICAgICAgICByZXR1cm4gaGFuZGxlO1xyXG4gICAgfTtcclxuXHJcbiAgICBvLmNsZWFyUmVxdWVzdFRpbWVvdXQgPSBmdW5jdGlvbiAoaGFuZGxlKSB7XHJcbiAgICAgICAgby5jYW5jZWxBbmltYXRpb25GcmFtZSA/IG8uY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKSA6XHJcbiAgICAgICAgICAgIG8ud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgPyBvLndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSkgOlxyXG4gICAgICAgICAgICAgICAgby53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyBvLndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpIDogLyogU3VwcG9ydCBmb3IgbGVnYWN5IEFQSSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIG8ubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gby5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSA/IG8ub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8ubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyBvLm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJlaGF2ZXMgdGhlIHNhbWUgYXMgc2V0SW50ZXJ2YWwgZXhjZXB0IHVzZXMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgd2hlcmUgcG9zc2libGUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gZGVsYXkgVGhlIGRlbGF5IGluIG1pbGxpc2Vjb25kc1xyXG4gICAgICovXHJcbiAgICBvLnJlcXVlc3RJbnRlcnZhbCA9IGZ1bmN0aW9uIChmbiwgZGVsYXkpIHtcclxuICAgICAgICBpZiAoIW8ucmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXHJcbiAgICAgICAgICAgICFvLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSAmJlxyXG4gICAgICAgICAgICAhKG8ubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmIG8ubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKSAmJiAvLyBGaXJlZm94IDUgc2hpcHMgd2l0aG91dCBjYW5jZWwgc3VwcG9ydFxyXG4gICAgICAgICAgICAhby5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICYmXHJcbiAgICAgICAgICAgICFvLm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoZm4sIGRlbGF5KTtcclxuXHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGhhbmRsZSA9IG5ldyBPYmplY3QoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbG9vcCgpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgICAgIGRlbHRhID0gY3VycmVudCAtIHN0YXJ0O1xyXG5cclxuICAgICAgICAgICAgaWYgKGRlbHRhID49IGRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICBmbi5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoYW5kbGUudmFsdWUgPSBvLnJlcXVlc3RBbmltRnJhbWUobG9vcCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaGFuZGxlLnZhbHVlID0gby5yZXF1ZXN0QW5pbUZyYW1lKGxvb3ApO1xyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCZWhhdmVzIHRoZSBzYW1lIGFzIGNsZWFySW50ZXJ2YWwgZXhjZXB0IHVzZXMgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkgd2hlcmUgcG9zc2libGUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxyXG4gICAgICogQHBhcmFtIHtpbnR8b2JqZWN0fSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgby5jbGVhclJlcXVlc3RJbnRlcnZhbCA9IGZ1bmN0aW9uIChoYW5kbGUpIHtcclxuICAgICAgICBvLmNhbmNlbEFuaW1hdGlvbkZyYW1lID8gby5jYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpIDpcclxuICAgICAgICAgICAgby53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSA/IG8ud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKSA6XHJcbiAgICAgICAgICAgICAgICBvLndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSA/IG8ud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSkgOiAvKiBTdXBwb3J0IGZvciBsZWdhY3kgQVBJICovXHJcbiAgICAgICAgICAgICAgICAgICAgby5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyBvLm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShoYW5kbGUudmFsdWUpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgby5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gby5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgby5tc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSA/IG8ubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlLnZhbHVlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChoYW5kbGUpO1xyXG4gICAgfTtcclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9kXHJcbiIsImNvbnN0IE1BWF9DWUNMRSA9IDEwMDtcclxuY2xhc3MgQ3ViWV9Sb3V0aW5le1xyXG4gICAgY29uc3RydWN0b3IoX3RpY2tTcGVlZCxfb3B0aW9ucyl7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcclxuICAgICAgICB0aGlzLmluaXQob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5NQVhfQ1lDTEUgPSBNQVhfQ1lDTEU7XHJcbiAgICB9XHJcbiAgICBpbml0KG9wdGlvbnMpe1xyXG4gICAgICAgIHdpbmRvdy5jciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yb3V0aW5lTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMubG9uZ2VzdFJvdXRpbmVUaW1lID0wO1xyXG4gICAgICAgIC8vc2V0VGltZW91dCh0aGlzLnN0YXJ0LmJpbmQodGhpcyksMCk7XHJcbiAgICB9O1xyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jeWNsZVN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChzZWxmLnJvdXRpbmUuYmluZCh0aGlzKSwwKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZVJvdXRpbmUobmFtZSxncm91cCkge1xyXG4gICAgICAgIGxldCBuZXdSb3V0aW5lID0gbmV3IFJvdXRpbmUobmFtZSwgZ3JvdXApO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBuZXdSb3V0aW5lLmluc2VydD0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZihuZXdSb3V0aW5lLmZyZXEhPT0xKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSb3V0aW5lLmNvdW50ZXIgKz0gc2VsZi5yb3V0aW5lTGlzdC5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxmLnJvdXRpbmVMaXN0LnB1c2gobmV3Um91dGluZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdSb3V0aW5lO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbmV3Um91dGluZS5yZW1vdmU9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gIHNlbGYucm91dGluZUxpc3QuaW5kZXhPZihuZXdSb3V0aW5lKTtcclxuICAgICAgICAgICAgc2VsZi5yb3V0aW5lTGlzdC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gbmV3Um91dGluZTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRDeWNsZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN5Y2xlO1xyXG4gICAgfVxyXG4gICAgcm91dGluZSgpe1xyXG4gICAgICAgIGxldCByb3V0aW5lTGlzdCA9IHRoaXMucm91dGluZUxpc3Q7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8cm91dGluZUxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCByb3V0aW5lID0gcm91dGluZUxpc3RbaV07XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZihyb3V0aW5lLmNoZWNrTG9jaygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGluZS5sb2NrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZS5hY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sYXN0Um91dGluZVRpbWUgPSBEYXRlLm5vdygpIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmxvbmdlc3RSb3V0aW5lVGltZTxzZWxmLmxhc3RSb3V0aW5lVGltZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvbmdlc3RSb3V0aW5lVGltZT1zZWxmLmxhc3RSb3V0aW5lVGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLmxhc3RSb3V0aW5lVGltZT4yMDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdSb3V0aW5lOicgKyByb3V0aW5lLm5hbWUgKyAnIHRvb2sgdG9vIGxvbmcgdG8gcnVuLiBbJytzZWxmLmxhc3RSb3V0aW5lVGltZSsnbXNdJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0aW5lLnVubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0scm91dGluZS5mcmVxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWNhdGNoIChlKXtcclxuICAgICAgICAgICAgICAgIC8vREVDSURFIElGIFJFTU9WRSBST1VUSU5FIExBVEVSO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZih0aGlzLmN5Y2xlID09PSBNQVhfQ1lDTEUpe1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q3ljbGVUaW1lID0gRGF0ZS5ub3coKSAtIHRoaXMuY3ljbGVTdGFydFRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGVQZXJTZWMgPSBNYXRoLmZsb29yKDEwMDAgLyB0aGlzLmxhc3RDeWNsZVRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUm91dGluZXtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsZ3JvdXApe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwIHx8ICdjb21tb24nO1xyXG4gICAgICAgIHRoaXMuZnJlcSA9IDE7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLmlzUnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNvdW50ZXI9MDtcclxuICAgICAgICB0aGlzLnJlcGVhdCA9IC0xO1xyXG4gICAgfVxyXG4gICAgbG9jaygpe1xyXG4gICAgICAgIGlmKHRoaXMucmVwZWF0PjApdGhpcy5yZXBlYXQtLTtcclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB1bmxvY2soKXtcclxuICAgICAgICBpZih0aGlzLnJlcGVhdD09PTApe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgYXR0cihrZXksdmFsdWUpe1xyXG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIGlmKGtleT09PSdmcmVxJyl7XHJcbiAgICAgICAgICAgIHRoaXNbJ2NvdW50ZXInXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHJlc2V0Q291bnRlcigpe1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMuZnJlcTtcclxuICAgIH1cclxuICAgIGNoZWNrTG9jaygpe1xyXG4gICAgICAgIGlmKHRoaXMuY291bnRlcj4wKXtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyLS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gISh0aGlzLmlzUnVubmluZyA9PT0gdHJ1ZSB8fCB0aGlzLmNvdW50ZXIgPiAwKTtcclxuICAgIH1cclxuXHJcbn1cclxuY29uc3QgX0N1YllfUm91dGluZSA9IG5ldyBDdWJZX1JvdXRpbmUoKTtcclxuZXhwb3J0IGRlZmF1bHQgX0N1YllfUm91dGluZTsiLCJpbXBvcnQgQ3ViWSBmcm9tIFwiLi9DdWJZXCI7XHJcblxyXG5jb25zdCBDdWJZX1hIUiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbn07XHJcblxyXG5DdWJZX1hIUi5wcm90b3R5cGUuYWpheCA9IGZ1bmN0aW9uIChwYXJhbXMgPSB7fSkge1xyXG4gICAgbGV0IHt1cmwsIG1ldGhvZCwgZGF0YSwgcmVmLCBhc3luYywgeGhyLCBjb250ZW50VHlwZSwgbm9BdXRoLGRhdGFUeXBlLCBwcm9jZXNzRGF0YSwgY2FjaGUsIG5vSlNPTiwgYWpheCxjYWxsYmFjaywgaGVhdnl9ID0gcGFyYW1zIHx8IHt9O1xyXG4gICAgbGV0IHtoZWFkZXIsIG9uUHJvZ3Jlc3MsIGJlZm9yZVNlbmR9ID0gcGFyYW1zO1xyXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHJlcXVlc3Qub3BlbigobWV0aG9kIHx8ICdHRVQnKSwgdXJsLCBhc3luYyA9PT0gdW5kZWZpbmVkID8gdHJ1ZTogYXN5bmMpO1xyXG5cclxuICAgIGZvcih2YXIga2V5IGluIChoZWFkZXIgfHwge30pKXtcclxuICAgICAgICBpZihoZWFkZXIuaGFzT3duUHJvcGVydHkoa2V5KSl7XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcltrZXldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHJlcXVlc3QucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayh0cnVlLCBkYXRhLCByZXF1ZXN0LnN0YXR1cywgcmVxdWVzdClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhmYWxzZSwgZGF0YSwgcmVxdWVzdC5zdGF0dXMsIHJlcXVlc3QpXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIGNhbGxiYWNrKGZhbHNlLCBkYXRhLCByZXF1ZXN0LnN0YXR1cywgcmVxdWVzdClcclxuICAgIH07XHJcblxyXG4gICAgcmVxdWVzdC51cGxvYWQub25wcm9ncmVzcyA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIG9uUHJvZ3Jlc3MgJiYgb25Qcm9ncmVzcyhlKTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IF9kYXRhO1xyXG4gICAgc3dpdGNoIChkYXRhVHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2ZpbGUnOlxyXG4gICAgICAgICAgICBfZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgY29udGVudFR5cGUgPT09IHVuZGVmaW5lZCA/IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiIDogY29udGVudFR5cGUpO1xyXG4gICAgICAgICAgICBfZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZVNlbmQgJiYgYmVmb3JlU2VuZChyZXF1ZXN0KTtcclxuXHJcbiAgICByZXF1ZXN0LnNlbmQoX2RhdGEpXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEN1YllfWEhSKCk7XHJcblxyXG5mdW5jdGlvbiB0ZW1wKCkge1xyXG4gICAgbGV0IHt1cmwsIG1ldGhvZCwgcGF5bG9hZCwgcmVmLCBhc3luYywgeGhyLCBjb250ZW50VHlwZSwgbm9BdXRoLGRhdGFUeXBlLCBwcm9jZXNzRGF0YSwgY2FjaGUsIG5vSlNPTiwgYWpheCxjYWxsYmFjaywgaGVhdnl9ID0gcGFyYW1zIHx8IHt9O1xyXG4gICAgbGV0IHJlcXVlc3RRdWV1ZU51bWJlciA9IEN1YlkuZ2V0VmFsdWUoJ3JlcXVlc3RRdWV1ZU51bWJlcicpIHx8IDA7XHJcbiAgICBsZXQgcXVldWUgPSBDdWJZLmdldFZhbHVlKCdyZXF1ZXN0UXVldWUnKSB8fCBbXTtcclxuICAgIEN1Ylkuc2V0VmFsdWUoJ3JlcXVlc3RRdWV1ZScsIHF1ZXVlKTtcclxuXHJcbiAgICBpZighQ3ViWS5pZkN1cnJlbnRVc2VySXNBZG1pbigpICYmIG5vQXV0aCAhPT0gdHJ1ZSAmJiAobWV0aG9kIHx8ICdnZXQnKSAhPT0gJ2dldCcpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZWYgPSB0aGlzLmdldFZhbHVlKCdjdXJyZW50UmVmJyk7XHJcbiAgICBpZihyZXF1ZXN0UXVldWVOdW1iZXIgPCAoQ0NPTkZJRy5NQVhfUkVRVUVTVCB8fCAzKSkge1xyXG4gICAgICAgIEN1YlkuZGVidWcoJ1JlcXVlc3Rpbmc6ICcgKyAobWV0aG9kIHx8ICdnZXQnKSArJyAnKyB1cmwsIHt0YWc6ICdXRUInfSk7XHJcbiAgICAgICAgQ3ViWS5zZXRWYWx1ZSgncmVxdWVzdFF1ZXVlTnVtYmVyJywgKytyZXF1ZXN0UXVldWVOdW1iZXIpO1xyXG4gICAgICAgICQuYWpheCgoYWpheCB8fCB7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICB0eXBlOiBtZXRob2QgfHwgJ2dldCcsXHJcbiAgICAgICAgICAgIGFzeW5jOiBhc3luYyB8fCB0cnVlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogcHJvY2Vzc0RhdGEgfHwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6IGRhdGFUeXBlIHx8IFwianNvblwiLFxyXG4gICAgICAgICAgICB4aHI6IHhocixcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgICAgICAgICAgQ3ViWS5zZXRWYWx1ZSgnbG9hZGluZycsIGhlYXZ5ID8gJ2hlYXZ5JyA6IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKEN1YlkuZ2V0VmFsdWUoJ0F1dGhvcml6YXRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBDdWJZLmdldFZhbHVlKCdBdXRob3JpemF0aW9uJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICB9KSkuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UsIHRleHRTdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICBDdWJZLnNldFZhbHVlKCdsb2FkaW5nJywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAocmVmICE9PSB1bmRlZmluZWQgJiYgcmVmICE9PSBDdWJZLmdldFZhbHVlKCdjdXJyZW50UmVmJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayh0cnVlLCByZXNwb25zZSwgdGV4dFN0YXR1cywgeGhyKVxyXG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKHJlc3BvbnNlLCB0ZXh0U3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAgICAgQ3ViWS5zZXRWYWx1ZSgnbG9hZGluZycsIGZhbHNlKTtcclxuICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgICAgbGV0IGlzSGFuZGxlZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZWYgIT09IHVuZGVmaW5lZCAmJiByZWYgIT09IEN1YlkuZ2V0VmFsdWUoJ2N1cnJlbnRSZWYnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGlzSGFuZGxlZCA9IGNhbGxiYWNrKGZhbHNlLCByZXNwb25zZSwgdGV4dFN0YXR1cywgeGhyKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYoaXNIYW5kbGVkKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgICAgICAgICAgICAgIEN1Ylkuc3RvcmVWYWx1ZSgnQXV0aG9yaXplZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgQ3ViWS5uZXR3b3JrRmFpbCAmJiBDdWJZLm5ldHdvcmtGYWlsKHN0YXR1cylcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfSkuYWx3YXlzKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxldCBxdWV1ZSA9IEN1YlkuZ2V0VmFsdWUoJ3JlcXVlc3RRdWV1ZScpO1xyXG4gICAgICAgICAgICBsZXQgcCA9IHF1ZXVlLnNoaWZ0KCk7XHJcblxyXG4gICAgICAgICAgICBwICYmIEN1Ylkuc2VydmVyKHApO1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdFF1ZXVlTnVtYmVyID0gQ3ViWS5nZXRWYWx1ZSgncmVxdWVzdFF1ZXVlTnVtYmVyJyk7XHJcbiAgICAgICAgICAgIEN1Ylkuc2V0VmFsdWUoJ3JlcXVlc3RRdWV1ZU51bWJlcicsIE1hdGgubWF4KDAsIC0tcmVxdWVzdFF1ZXVlTnVtYmVyKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBDdWJZLmRlYnVnKCdSZWFjaCBtYXggcmVxdWVzdCBudW1iZXIsIGhvbGRpbmcgcmVxdWVzdC4nLCB7dGFnOiAnV0VCJ30pO1xyXG4gICAgICAgIGxldCBxdWV1ZSA9IEN1YlkuZ2V0VmFsdWUoJ3JlcXVlc3RRdWV1ZScpO1xyXG4gICAgICAgIHF1ZXVlLnB1c2gocGFyYW1zKTtcclxuICAgICAgICBDdWJZLnNldFZhbHVlKCdyZXF1ZXN0UXVldWUnLCBxdWV1ZSk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogQ3JlYXRlZCBieSBBbnhpbiBZYW5nIG9uIDMvMjgvMjAxOC5cclxuICovXHJcbmltcG9ydCBDdWJZIGZyb20gJy4vY3VieS9DdWJZJztcclxuXHJcbkN1YlkoKTtcclxud2luZG93LnJvb3QgPSBuZXcgQ3ViWS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY3VieV9yb290JywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuQ3ViWS5zZXRWYWx1ZSgnYWEnLCdiYicpO1xyXG5hc3NldExvYWRlZCgnbWFpbicpOyJdLCJzb3VyY2VSb290IjoiIn0=