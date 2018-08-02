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
    "boxShadow": "0 0 4px 2px lightgrey"
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
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: W:/cuby-quick-start/src/cuby/CubY_Core.js: Unexpected token (209:12)\n\n\u001b[0m \u001b[90m 207 | \u001b[39m        }\n \u001b[90m 208 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_reactTimer \u001b[33m=\u001b[39m setTimeout(\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 209 | \u001b[39m            \u001b[36mif\u001b[39m(\u001b[36mtypeof\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39maction \u001b[33m===\u001b[39m \u001b[32m'function'\u001b[39m){\n \u001b[90m     | \u001b[39m            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 210 | \u001b[39m            \u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mowner){\n \u001b[90m 211 | \u001b[39m                \u001b[36mif\u001b[39m(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mowner\u001b[33m.\u001b[39misActive) {\n \u001b[90m 212 | \u001b[39m                    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39maction\u001b[33m.\u001b[39mcall(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mowner\u001b[33m,\u001b[39m newValue)\u001b[33m;\u001b[39m\u001b[0m\n");

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

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by Anxin Yang on 3/28/2018.
 */
_CubY2.default.addOn(_cardContainer2.default);
_CubY2.default.addOn(_common2.default);
//Declare layout components
var root = _CubY2.default.createElement('div', 'cuby_root', document.getElementById('app')).style(_CubY2.default.ROOT_STYLE);

var mainContentSection = _CubY2.default.createElement('div', 'mainContentSection').style({
    position: 'relative',
    minWidth: '300px',
    width: '66.66%',
    flexGrow: 1
});
var secondContentSection = _CubY2.default.createElement('div', 'secondContentSection').style({
    position: 'relative',
    minWidth: '100px',
    flexGrow: 1
});

var mainCard = _CubY2.default.createCard('mainCard');
var secondCard = _CubY2.default.createCard('secondCard');

// Place components
root.appendElement(mainContentSection);
root.appendElement(secondContentSection);

mainContentSection.appendElement(mainCard);

//setup basic listener
window.addEventListener('resize', function () {});
assetLoaded('main');

/***/ }),

/***/ "./src/styles/colors.js":
/*!******************************!*\
  !*** ./src/styles/colors.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var COLORS = {
    BACKGROUND_GRAY: '#ecf0f1'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3VieS9DdWJZLmpzIiwid2VicGFjazovLy8uL3NyYy9jdWJ5L0N1YllfRE9NLmpzIiwid2VicGFjazovLy8uL3NyYy9jdWJ5L0N1YllfUm91dGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21tb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQSxJQUFNO2tCQUVGO2NBQ0E7YUFDQTtZQUNBO1dBQ0E7Z0JBQ0E7YUFDQTtjQUNBO2NBQ0E7aUJBQWE7QUFUYjs7QUFZSixJQUFJO2dCQUNZLG9CQUFVLElBQ2xCO1lBQUksT0FBTyxLQUFLLGNBQWMsT0FBTyxJQUNoQyxNQUNMO2VBQ0g7QUFMTTtBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEo7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUNBLElB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LEdBQ2I7cUJBQ0g7QUFDRDtpQkFBSyxZQUNSOzs7O3lDQUVHO2lCQUFLLE9BQ0w7Z0JBQUcsUUFBTSxRQUNMO3FCQUFLLGFBQ1I7QUFDRDttQkFDSDs7Ozt1Q0FFRztpQkFBSyxVQUFVLEtBQ2xCOzs7O29DQUVHO2dCQUFHLEtBQUssVUFBUSxHQUNaO3FCQUNIO0FBRUQ7O21CQUFPLEVBQUUsS0FBSyxjQUFjLFFBQVEsS0FBSyxVQUM1Qzs7Ozs7OztBQUdMLElBQU0sZ0JBQWdCLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQy9HMUI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBTkE7OztBQU9BLGVBQUs7QUFDTCxlQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU8sZUFBSyxjQUFjLE9BQU8sYUFBYSxTQUFTLGVBQWUsUUFDckUsTUFBTSxlQUFLOztBQUVoQixJQUFJLG9DQUEwQixjQUFjLE9BQU8sc0JBQzlDO2NBRUc7Y0FDQTtXQUNBO2NBQVU7QUFIVixDQUZpQjtBQU96QixJQUFJLHNDQUE0QixjQUFjLE9BQU8sd0JBQXdCO2NBRXpFO2NBQ0E7Y0FBVTtBQUZWLENBRHVCOztBQU0zQixJQUFJLFdBQVcsZUFBSyxXQUFXO0FBQy9CLElBQUksYUFBYSxlQUFLLFdBQVc7O0FBRWpDO0FBQ0EsS0FBSyxjQUFjO0FBQ25CLEtBQUssY0FBYzs7QUFFbkIsbUJBQW1CLGNBQWM7O0FBR2pDO0FBQ0EsT0FBTyxpQkFBaUIsVUFBVSxZQUVqQyxDQUZEO0FBR0EsWUFBWSxROzs7Ozs7Ozs7Ozs7OztBQ3hDWixJQUFNO3FCQUNnQjtBQUFsQjtBQUVKLE9BQU8sT0FBTyxRQUFRLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z0QixJQUFNOztlQUdFO2dCQUNBO2dCQUNBO29CQUNBO2tCQUNBO2lCQUNBO2tCQUNBO2tCQUNBO29CQUNBO21CQUFXO0FBVFg7QUFESiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImNvbnN0IENBUkRfU1RZTEUgPSB7XHJcbiAgICBcImJhY2tncm91bmRcIjogXCJ3aGl0ZVwiLFxyXG4gICAgXCJoZWlnaHRcIjogXCI5OCVcIixcclxuICAgIFwid2lkdGhcIjogXCI5OCVcIixcclxuICAgIFwibGVmdFwiOiBcIjBcIixcclxuICAgIFwidG9wXCI6IFwiMFwiLFxyXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXHJcbiAgICBcInJpZ2h0XCI6IFwiMFwiLFxyXG4gICAgXCJib3R0b21cIjogXCIwXCIsXHJcbiAgICBcIm1hcmdpblwiOiBcImF1dG9cIixcclxuICAgIFwiYm94U2hhZG93XCI6IFwiMCAwIDRweCAycHggbGlnaHRncmV5XCJcclxufTtcclxuXHJcbmxldCBjYXJkID0ge1xyXG4gICAgY3JlYXRlQ2FyZDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgbGV0IGNhcmQgPSBDdWJZLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIGlkKVxyXG4gICAgICAgICAgICAuc3R5bGUoQ0FSRF9TVFlMRSk7XHJcbiAgICAgICAgcmV0dXJuIGNhcmQ7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNhcmQ7IiwiaW1wb3J0IEN1YllfQ29yZSBmcm9tICcuL0N1YllfQ29yZSc7XHJcbmltcG9ydCBDdWJZX0RPTSBmcm9tICcuL0N1YllfRE9NJztcclxuaW1wb3J0IEN1YllfUm91dGluZSBmcm9tICcuL0N1YllfUm91dGluZSc7XHJcbmNvbnN0IEVNUFRZX0ZVTkNUSU9OID0gKCk9Pnt9O1xyXG5cclxudmFyIEN1YlkgPSB7XHJcblxyXG4gICAgLy9Db3JlXHJcbiAgICBnZXRWYWx1ZTogQ3ViWV9Db3JlLmdldFZhbHVlLmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIGdldEJyb3dzZXI6IEN1YllfQ29yZS5nZXRCcm93c2VyLmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIHN0b3JlRGF0YUFycmF5OiBDdWJZX0NvcmUuc3RvcmVEYXRhQXJyYXkuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgc3RvcmVWYWx1ZTogQ3ViWV9Db3JlLnN0b3JlVmFsdWUuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgY29ubmVjdDogQ3ViWV9Db3JlLmNvbm5lY3QuYmluZChDdWJZX0NvcmUpLFxyXG4gICAgcmVhY3Q6IEN1YllfQ29yZS5yZWFjdC5iaW5kKEN1YllfQ29yZSksXHJcbiAgICBkZWJ1ZzogQ3ViWV9Db3JlLmRlYnVnLmJpbmQoQ3ViWV9Db3JlKSxcclxuICAgIHJlYWRWYWx1ZTogQ3ViWV9Db3JlLnJlYWRWYWx1ZS5iaW5kKEN1YllfQ29yZSksXHJcbiAgICBpc09iamVjdEVtcHR5OiBDdWJZX0NvcmUuaXNPYmplY3RFbXB0eS5iaW5kKEN1YllfQ29yZSksXHJcblxyXG4gICAgLy9ET01cclxuICAgIGNyZWF0ZUVsZW1lbnQ6IEN1YllfRE9NLmNyZWF0ZUVsZW1lbnQsXHJcblxyXG4gICAgLy9Sb3V0aW5lXHJcbiAgICBjcmVhdGVSb3V0aW5lOkN1YllfUm91dGluZS5jcmVhdGVSb3V0aW5lLmJpbmQoQ3ViWV9Sb3V0aW5lKSxcclxuICAgIGdldEN1cnJlbnRDeWNsZTpDdWJZX1JvdXRpbmUuZ2V0Q3VycmVudEN5Y2xlLmJpbmQoQ3ViWV9Sb3V0aW5lKSxcclxuICAgIHJvdXRpbmU6Q3ViWV9Sb3V0aW5lLnJvdXRpbmUuYmluZChDdWJZX1JvdXRpbmUpLFxyXG4gICAgLy9BZGRPbnNcclxuICAgIGFkZE9uOiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgIGZvcih2YXIga2V5IGluIG9iail7XHJcbiAgICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSl7XHJcbiAgICAgICAgICAgICAgQ3ViWVtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL090aGVyXHJcbiAgICB2ZXJzaW9uOiAnMC42Yi5uZS4wLjEwJyxcclxuICAgIGRlYnVnSW5mbzogW0N1YllfQ29yZSxDdWJZX1JvdXRpbmVdXHJcbn07XHJcblxyXG53aW5kb3cuQ3ViWSA9IEN1Ylk7XHJcbmV4cG9ydCBkZWZhdWx0IEN1Ylk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFueGluIFlhbmcgb24gNS8yNi8yMDE4LlxyXG4gKi9cclxuY2xhc3MgQ3ViWV9ET00ge1xyXG4gICAgY29uc3RydWN0b3IoX3RhZyxfaWQsX3Jvb3QpIHtcclxuICAgICAgICB0aGlzLnRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpIHx8ICdkaXYnO1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlYWRWYWx1ZShfaWQpfHwgdGhpcy50YWcgKyAnXycgKyBNYXRoLnJhbmRvbSgpKjEwMDAwKydfJytEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZyk7XHJcbiAgICAgICAgdGhpcy5kb20uc2V0QXR0cmlidXRlKCdpZCcsdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZSA9IHt9O1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSB7fTtcclxuICAgICAgICB0aGlzLmRvbVN0eWxlID0ge307XHJcbiAgICAgICAgdGhpcy51cGRhdGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLnBhcmVudDtcclxuICAgICAgICB0aGlzLmNsYXNzZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnJvb3QoX3Jvb3QpO1xyXG5cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZXIgPXRoaXMudXBkYXRlcnNbbmFtZV07XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZih1cGRhdGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlci5jYWxsKHNlbGYsIHNlbGYuZGF0YSwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzZXRVcGRhdGVyKG5hbWUsdXBkYXRlcil7XHJcbiAgICAgICAgdGhpcy51cGRhdGVyc1tuYW1lXSA9IHVwZGF0ZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBiaW5kKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICByb290KF9yb290KXtcclxuICAgICAgICBpZihfcm9vdCl7XHJcbiAgICAgICAgICAgIF9yb290LmFwcGVuZENoaWxkKHRoaXMuZG9tKTtcclxuICAgICAgICAgICAgdGhpcy5pc1Jvb3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFwcGVuZChfdGFnLF9pZCl7XHJcbiAgICAgICAgbGV0IHRhZyA9IHRoaXMucmVhZFZhbHVlKF90YWcpO1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMucmVhZFZhbHVlKF9pZCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBDdWJZLmNyZWF0ZUVsZW1lbnQodGFnLGlkKTtcclxuICAgICAgICB0aGlzLmFwcGVuZEVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBhcHBlbmRFbGVtZW50KEN1YllfRE9NKXtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMucmVhZFZhbHVlKEN1YllfRE9NKTtcclxuICAgICAgICBlbGVtZW50LnBhcmVudCA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoZWxlbWVudC5kb20pO1xyXG4gICAgICAgIGlmKHRoaXMuaXNBY3RpdmUgfHwgdGhpcy5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmF0ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBhdHRyKGtleSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGsgaW4ga2V5KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0cihrLGtleVtrXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGtleSA9PT0nYWN0aXZhdGVkJyB8fCBrZXkgPT09ICdkZWFjdGl2YXRlZCcpe1xyXG4gICAgICAgICAgICB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmRvbS5zZXRBdHRyaWJ1dGUoa2V5LHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHByb3Aoa2V5LF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG5cclxuICAgICAgICBpZih0eXBlb2Yga2V5ID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgayBpbiBrZXkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wKGssa2V5W2tdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoa2V5ID09PSdhY3RpdmF0ZWQnIHx8IGtleSA9PT0gJ2RlYWN0aXZhdGVkJyl7XHJcbiAgICAgICAgICAgIHZhbHVlID0gX3ZhbHVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVhZFZhbHVlKF92YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tW2tleV0gPSAgdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByb3BlcnR5W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIG9uKGV2ZW50TmFtZSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IF92YWx1ZTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vbltldmVudE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5kb20uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFsdWUuY2FsbChzZWxmLGUsc2VsZi5kYXRhKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc3R5bGUoX2tleSxfdmFsdWUpe1xyXG4gICAgICAgIGxldCBrZXkgPSB0aGlzLnJlYWRWYWx1ZShfa2V5KTtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnJlYWRWYWx1ZShfdmFsdWUpO1xyXG4gICAgICAgIGlmKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgZm9yKHZhciBrIGluIGtleSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0eWxlKGssa2V5W2tdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRvbVN0eWxlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRvbS5zdHlsZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBjb250ZW50KF92YWx1ZSl7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZWFkVmFsdWUoX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29udGVudCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyVGV4dDtcclxuICAgIH1cclxuICAgIGFwcGVuZENsYXNzKF9jbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLnJlYWRWYWx1ZShfY2xhc3NOYW1lKTtcclxuICAgICAgICBsZXQgY2xhc3NlcyA9IHRoaXMuY2xhc3NlcyB8fCBbXTtcclxuICAgICAgICBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcclxuICAgICAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gY2xhc3NlcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNlbGVjdChfc2VsZWN0b3Ipe1xyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IF9zZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBfc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIHN3aXRjaCAoc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEJ5SWQobmFtZSk7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QnlDbGFzc05hbWUobmFtZSk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RCeVRhZyhfc2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdEJ5SWQoaWQpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmlkID09PSBpZCl7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeUNsYXNzTmFtZShjbGFzc05hbWUpe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBsZXQgdGFyZ2V0TGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldExpc3QucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldExpc3Q7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RCeVRhZyhfdGFnKXtcclxuICAgICAgICBsZXQgY2hpbGRyZW5MaXN0ID0gdGhpcy5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgbGV0IHRhcmdldExpc3QgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC50YWcgPT09IF90YWcpe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGlzdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0TGlzdDtcclxuICAgIH1cclxuICAgIHJlbW92ZShfc2VsZWN0b3IsX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIGlmKF9zZWxlY3Rvcj09PXVuZGVmaW5lZCB8fCB0eXBlb2YgX3NlbGVjdG9yID09PSAnbnVtYmVyJyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2VsZihfc2VsZWN0b3IgfHwgX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IF9zZWxlY3Rvci5jaGFyQXQoMCk7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBfc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGxldCB0YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3Rvcil7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUlkKG5hbWUsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy4nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeUNsYXNzTmFtZShuYW1lLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVCeVRhZyhfc2VsZWN0b3IsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5SWQoaWQsX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLmNoaWxkcmVuTGlzdDtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPGNoaWxkcmVuTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICBpZihjaGlsZC5pZCA9PT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5MaXN0LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVtb3ZlKHVuZGVmaW5lZCxfdHJhbnNpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpLS07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZUJ5Q2xhc3NOYW1lKGNsYXNzTmFtZSxfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLmNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlbW92ZSh1bmRlZmluZWQsX3RyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVtb3ZlQnlUYWcoX3RhZyxfdHJhbnNpdGlvbil7XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTGlzdCA9IHRoaXMuY2hpbGRyZW5MaXN0O1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbkxpc3RbaV07XHJcbiAgICAgICAgICAgIGlmKGNoaWxkLnRhZyA9PT0gX3RhZyl7XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3Quc3BsaWNlKGksMSk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW1vdmUodW5kZWZpbmVkLF90cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGktLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZVNlbGYoX3RyYW5zaXRpb24pe1xyXG4gICAgICAgIC8qdGhpcy5jaGlsZHJlbkxpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlZCgpO1xyXG4gICAgICAgIGlmKF90cmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZWRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kb20ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0sX3RyYW5zaXRpb24pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNlbGYuZG9tLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnBhcmVudCl7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbkxpc3QgPSB0aGlzLnBhcmVudC5jaGlsZHJlbkxpc3Q7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGk8Y2hpbGRyZW5MaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gY2hpbGRyZW5MaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hpbGQgPT09IHRoaXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuTGlzdC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKmZvcih2YXIga2V5IGluIHRoaXMpe1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1trZXldXHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcbiAgICBhY3RpdmF0ZWQoKXtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLmRlYWN0aXZhdGVkVGltZXIpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWFjdGl2YXRlZFRpbWVyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uaW5zZXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmFjdGl2YXRlZCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZih0aGlzLmF0dHJpYnV0ZS5hY3RpdmF0ZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZS5hY3RpdmF0ZWQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWFjdGl2YXRlZCgpe1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChjb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGRyZW5MaXN0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmRlYWN0aXZhdGVkKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYXR0cmlidXRlLmRlYWN0aXZhdGVkKXtcclxuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGUuZGVhY3RpdmF0ZWQuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWFkVmFsdWUoX3ZhbHVlKXtcclxuICAgICAgICBsZXQgdmFsdWUgPSBfdmFsdWU7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuY2FsbCh0aGlzLHRoaXMuZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxudmFyIF9DdWJZX0RPTSA9IHtcclxuICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uIChfdGFnLCBfaWQsIF9yb290KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDdWJZX0RPTShfdGFnLCBfaWQsIF9yb290KVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBfQ3ViWV9ET00iLCJjb25zdCBNQVhfQ1lDTEUgPSAxMDA7XHJcbmNsYXNzIEN1YllfUm91dGluZXtcclxuICAgIGNvbnN0cnVjdG9yKF90aWNrU3BlZWQsX29wdGlvbnMpe1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gX29wdGlvbnMgfHwge307XHJcbiAgICAgICAgdGhpcy5pbml0KG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuTUFYX0NZQ0xFID0gTUFYX0NZQ0xFO1xyXG4gICAgfVxyXG4gICAgaW5pdChvcHRpb25zKXtcclxuICAgICAgICB3aW5kb3cuY3IgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIHRoaXMucm91dGluZUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmxvbmdlc3RSb3V0aW5lVGltZSA9MDtcclxuICAgICAgICAvL3NldFRpbWVvdXQodGhpcy5zdGFydC5iaW5kKHRoaXMpLDApO1xyXG4gICAgfTtcclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY3ljbGVTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2VsZi5yb3V0aW5lLmJpbmQodGhpcyksMCk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVSb3V0aW5lKG5hbWUsZ3JvdXApIHtcclxuICAgICAgICBsZXQgbmV3Um91dGluZSA9IG5ldyBSb3V0aW5lKG5hbWUsIGdyb3VwKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbmV3Um91dGluZS5pbnNlcnQ9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYobmV3Um91dGluZS5mcmVxIT09MSkge1xyXG4gICAgICAgICAgICAgICAgbmV3Um91dGluZS5jb3VudGVyICs9IHNlbGYucm91dGluZUxpc3QubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2VsZi5yb3V0aW5lTGlzdC5wdXNoKG5ld1JvdXRpbmUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3Um91dGluZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIG5ld1JvdXRpbmUucmVtb3ZlPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9ICBzZWxmLnJvdXRpbmVMaXN0LmluZGV4T2YobmV3Um91dGluZSk7XHJcbiAgICAgICAgICAgIHNlbGYucm91dGluZUxpc3Quc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG5ld1JvdXRpbmU7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50Q3ljbGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jeWNsZTtcclxuICAgIH1cclxuICAgIHJvdXRpbmUoKXtcclxuICAgICAgICBsZXQgcm91dGluZUxpc3QgPSB0aGlzLnJvdXRpbmVMaXN0O1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IodmFyIGk9MDtpPHJvdXRpbmVMaXN0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgcm91dGluZSA9IHJvdXRpbmVMaXN0W2ldO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYocm91dGluZS5jaGVja0xvY2soKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRpbmUubG9jaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRpbmUuYWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGFzdFJvdXRpbmVUaW1lID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sb25nZXN0Um91dGluZVRpbWU8c2VsZi5sYXN0Um91dGluZVRpbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb25nZXN0Um91dGluZVRpbWU9c2VsZi5sYXN0Um91dGluZVRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5sYXN0Um91dGluZVRpbWU+MjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUm91dGluZTonICsgcm91dGluZS5uYW1lICsgJyB0b29rIHRvbyBsb25nIHRvIHJ1bi4gWycrc2VsZi5sYXN0Um91dGluZVRpbWUrJ21zXScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGluZS51bmxvY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9LHJvdXRpbmUuZnJlcSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICAvL0RFQ0lERSBJRiBSRU1PVkUgUk9VVElORSBMQVRFUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYodGhpcy5jeWNsZSA9PT0gTUFYX0NZQ0xFKXtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEN5Y2xlVGltZSA9IERhdGUubm93KCkgLSB0aGlzLmN5Y2xlU3RhcnRUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlUGVyU2VjID0gTWF0aC5mbG9vcigxMDAwIC8gdGhpcy5sYXN0Q3ljbGVUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFJvdXRpbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLGdyb3VwKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cCB8fCAnY29tbW9uJztcclxuICAgICAgICB0aGlzLmZyZXEgPSAxO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb3VudGVyPTA7XHJcbiAgICAgICAgdGhpcy5yZXBlYXQgPSAtMTtcclxuICAgIH1cclxuICAgIGxvY2soKXtcclxuICAgICAgICBpZih0aGlzLnJlcGVhdD4wKXRoaXMucmVwZWF0LS07XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdW5sb2NrKCl7XHJcbiAgICAgICAgaWYodGhpcy5yZXBlYXQ9PT0wKXtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGF0dHIoa2V5LHZhbHVlKXtcclxuICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBpZihrZXk9PT0nZnJlcScpe1xyXG4gICAgICAgICAgICB0aGlzWydjb3VudGVyJ10gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICByZXNldENvdW50ZXIoKXtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmZyZXE7XHJcbiAgICB9XHJcbiAgICBjaGVja0xvY2soKXtcclxuICAgICAgICBpZih0aGlzLmNvdW50ZXI+MCl7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlci0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICEodGhpcy5pc1J1bm5pbmcgPT09IHRydWUgfHwgdGhpcy5jb3VudGVyID4gMCk7XHJcbiAgICB9XHJcblxyXG59XHJcbmNvbnN0IF9DdWJZX1JvdXRpbmUgPSBuZXcgQ3ViWV9Sb3V0aW5lKCk7XHJcbmV4cG9ydCBkZWZhdWx0IF9DdWJZX1JvdXRpbmU7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQW54aW4gWWFuZyBvbiAzLzI4LzIwMTguXHJcbiAqL1xyXG5pbXBvcnQgQ3ViWSBmcm9tICcuL2N1YnkvQ3ViWSc7XHJcbmltcG9ydCBjYXJkQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9jYXJkQ29udGFpbmVyJztcclxuaW1wb3J0IENPTE9SUyBmcm9tICcuL3N0eWxlcy9jb2xvcnMnO1xyXG5pbXBvcnQgQ09NTU9OX1NUWUxFIGZyb20gJy4vc3R5bGVzL2NvbW1vbic7XHJcbkN1YlkuYWRkT24oY2FyZENvbnRhaW5lcik7XHJcbkN1YlkuYWRkT24oQ09NTU9OX1NUWUxFKTtcclxuLy9EZWNsYXJlIGxheW91dCBjb21wb25lbnRzXHJcbmxldCByb290ID0gQ3ViWS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnY3VieV9yb290JywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxyXG4gICAgLnN0eWxlKEN1YlkuUk9PVF9TVFlMRSk7XHJcblxyXG5sZXQgbWFpbkNvbnRlbnRTZWN0aW9uID0gQ3ViWS5jcmVhdGVFbGVtZW50KCdkaXYnLCAnbWFpbkNvbnRlbnRTZWN0aW9uJylcclxuICAgIC5zdHlsZSh7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgbWluV2lkdGg6ICczMDBweCcsXHJcbiAgICAgICAgd2lkdGg6JzY2LjY2JScsXHJcbiAgICAgICAgZmxleEdyb3c6IDFcclxuICAgIH0pO1xyXG5sZXQgc2Vjb25kQ29udGVudFNlY3Rpb24gPSBDdWJZLmNyZWF0ZUVsZW1lbnQoJ2RpdicsICdzZWNvbmRDb250ZW50U2VjdGlvbicpLnN0eWxlKHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbWluV2lkdGg6ICcxMDBweCcsXHJcbiAgICBmbGV4R3JvdzogMVxyXG59KTtcclxuXHJcbmxldCBtYWluQ2FyZCA9IEN1YlkuY3JlYXRlQ2FyZCgnbWFpbkNhcmQnKTtcclxubGV0IHNlY29uZENhcmQgPSBDdWJZLmNyZWF0ZUNhcmQoJ3NlY29uZENhcmQnKTtcclxuXHJcbi8vIFBsYWNlIGNvbXBvbmVudHNcclxucm9vdC5hcHBlbmRFbGVtZW50KG1haW5Db250ZW50U2VjdGlvbik7XHJcbnJvb3QuYXBwZW5kRWxlbWVudChzZWNvbmRDb250ZW50U2VjdGlvbik7XHJcblxyXG5tYWluQ29udGVudFNlY3Rpb24uYXBwZW5kRWxlbWVudChtYWluQ2FyZCk7XHJcblxyXG5cclxuLy9zZXR1cCBiYXNpYyBsaXN0ZW5lclxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG5cclxufSk7XHJcbmFzc2V0TG9hZGVkKCdtYWluJyk7IiwiY29uc3QgQ09MT1JTID17XHJcbiAgICBCQUNLR1JPVU5EX0dSQVkgOiAnI2VjZjBmMScsXHJcbn07XHJcbk9iamVjdC5hc3NpZ24od2luZG93LCBDT0xPUlMpOyIsIlxyXG5jb25zdCBDT01NT05fU1RZTEUgPSB7XHJcbiAgICBST09UX1NUWUxFOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTJweCAnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBtaW5XaWR0aDogJzMwMHB4JyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IEJBQ0tHUk9VTkRfR1JBWSxcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENPTU1PTl9TVFlMRTsiXSwic291cmNlUm9vdCI6IiJ9