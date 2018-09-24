webpackJsonp([5],{

/***/ 1131:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 1131;

/***/ }),

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(1438);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ }),

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Euler1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Euler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_exectimer__ = __webpack_require__(66);








var Tick = __WEBPACK_IMPORTED_MODULE_7__util_exectimer__["default"].Tick;

var Euler1 = function (_Euler) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Euler1, _Euler);

    function Euler1() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Euler1);

        var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Euler1.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Euler1)).call(this));

        _this.n = 1;
        _this.total = 0;
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Euler1, [{
        key: 'step',
        value: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function step() {
            var tick;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function step$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!(this.n < 1000)) {
                                _context.next = 10;
                                break;
                            }

                            tick = new Tick('step');

                            tick.start();

                            if (this.n % 3 === 0 || this.n % 5 === 0) this.total += this.n;

                            tick.stop();
                            _context.next = 7;
                            return this.total;

                        case 7:
                            this.n++;
                            _context.next = 0;
                            break;

                        case 10:
                            return _context.abrupt('return', this.total);

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, step, this);
        })
    }]);

    return Euler1;
}(__WEBPACK_IMPORTED_MODULE_6__Euler__["default"]);



/***/ }),

/***/ 1138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Euler144; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Euler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_quadratic__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_exectimer__ = __webpack_require__(66);










// import { decorate } from 'core-decorators';

var Tick = __WEBPACK_IMPORTED_MODULE_8__util_exectimer__["default"].Tick;

var Point = function Point(x, y, z) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, Point);

    this.x = x;
    this.y = y;
    this.z = z;
};

var Euler144 = function (_Euler) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Euler144, _Euler);

    function Euler144() {
        __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, Euler144);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Euler144.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Euler144)).call(this));

        _this.p1 = new Point(0.0, 10.1);
        _this.p1 = new Point(1.4, -9.6);
        _this.x1 = 0.0;
        _this.y1 = 10.1;
        _this.x2 = 1.4;
        _this.y2 = -9.6;
        _this.ans = 1;
        return _this;
    }

    /**
     * This is currently not supported by Babylon:
     *  @decorate(Tick.wrap)
     *  *step() {}
     */


    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Euler144, [{
        key: 'step',
        value: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function step() {
            var tick, m0, m1, tempX, tempY, X, m2, b;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function step$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (false) {
                                _context.next = 26;
                                break;
                            }

                            tick = new Tick('step');

                            tick.start();
                            m0 = (this.y2 - this.y1) / (this.x2 - this.x1);
                            m1 = Euler144.deriv(this.x2, this.y2);
                            tempX = this.x2;
                            tempY = this.y2;
                            X = (m0 - m1) / (1 + m0 * m1);
                            m2 = (m1 - X) / (1 + X * m1);
                            b = this.y2 - m2 * this.x2;

                            this.x2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__util_quadratic__["default"])(m2, b, this.x2);
                            this.y2 = m2 * this.x2 + b;
                            this.verbose('Hit ' + this.x2 + ', ' + this.y2);
                            this.x1 = tempX;
                            this.y1 = tempY;

                            // new point is inside hole

                            if (!(this.y2 > 0 && this.x2 > -.01 && this.x2 < .01)) {
                                _context.next = 20;
                                break;
                            }

                            tick.stop();
                            return _context.abrupt('return', {
                                x1: this.x1,
                                y1: this.y1,
                                x2: this.x2,
                                y2: this.y2,
                                ans: this.ans
                            });

                        case 20:
                            this.ans++;
                            tick.stop();
                            _context.next = 24;
                            return {
                                x1: this.x1,
                                y1: this.y1,
                                x2: this.x2,
                                y2: this.y2,
                                ans: this.ans
                            };

                        case 24:
                            _context.next = 0;
                            break;

                        case 26:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, step, this);
        })
    }, {
        key: 'run',
        value: function run() {
            this.start();

            var stepper = this.step();

            var step = void 0;
            do {
                step = stepper.next();
                this.verbose('step: ' + step.value);
            } while (!step.done);

            this.end();

            var stepTimer = __WEBPACK_IMPORTED_MODULE_8__util_exectimer__["default"].timers.step;

            this.info('Took ' + stepTimer.count() + ' steps');
            this.info('Took ' + stepTimer.parse(stepTimer.duration()));
            this.info('Solution: ' + this.ans);

            return this.ans;
        }
    }], [{
        key: 'deriv',
        value: function deriv(x, y) {
            return -4 * x / y;
        }
    }]);

    return Euler144;
}(__WEBPACK_IMPORTED_MODULE_6__Euler__["default"]);



/***/ }),

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Euler2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Euler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_exectimer__ = __webpack_require__(66);










var Tick = __WEBPACK_IMPORTED_MODULE_7__util_exectimer__["default"].Tick;

var Euler2 = function (_Euler) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Euler2, _Euler);

    function Euler2() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Euler2);

        var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Euler2.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Euler2)).call(this));

        _this.num1 = 1;
        _this.num2 = 1;
        _this.sum = 0;
        _this.max = 4000000;
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Euler2, [{
        key: 'step',
        value: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function step() {
            var tick;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function step$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!(this.num2 < this.max)) {
                                _context.next = 12;
                                break;
                            }

                            tick = new Tick('step');

                            tick.start();
                            if (this.num2 % 2 == 0) {
                                this.sum += this.num2;
                            }
                            this.num3 = this.num2;
                            this.num2 = this.num1 + this.num2;
                            this.num1 = this.num3;
                            tick.stop();
                            _context.next = 10;
                            return this.num2;

                        case 10:
                            _context.next = 0;
                            break;

                        case 12:
                            return _context.abrupt('return', this.sum);

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, step, this);
        })
    }, {
        key: 'run',
        value: function run() {
            this.start();

            var stepper = this.step();

            var step = void 0;
            do {
                step = stepper.next();
                this.verbose('step: ' + step.value);
            } while (!step.done);

            this.end();

            var stepTimer = __WEBPACK_IMPORTED_MODULE_7__util_exectimer__["default"].timers.step;

            this.info('Took ' + stepTimer.count() + ' steps');
            this.info('Took ' + stepTimer.parse(stepTimer.duration()));
            console.log('The Sum of all even Fibonacci numbers below ' + this.max + ' is ' + this.sum);

            return this.sum;
        }
    }]);

    return Euler2;
}(__WEBPACK_IMPORTED_MODULE_6__Euler__["default"]);



/***/ }),

/***/ 1140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["isPrime"] = isPrime;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Euler3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Euler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_exectimer__ = __webpack_require__(66);










var Tick = __WEBPACK_IMPORTED_MODULE_7__util_exectimer__["default"].Tick;

function isPrime(n) {
    var i = 2;
    var sqrtN = Math.sqrt(n).toFixed(0);

    while (i <= sqrtN) {
        if (n % i === 0) {
            return false;
        } else {
            i++;
        }
    }

    return true;
}

var Euler3 = function (_Euler) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Euler3, _Euler);

    function Euler3() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Euler3);

        var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Euler3.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Euler3)).call(this));

        _this.num = 600851475143;
        _this.factors = [];
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Euler3, [{
        key: 'step',
        value: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function step() {
            var n, i, tick;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function step$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            n = this.num;
                            i = 2;

                        case 2:
                            if (!(!isPrime(n) && n > 2)) {
                                _context.next = 15;
                                break;
                            }

                            tick = new Tick('step');

                            tick.start();

                            if (!(n % i === 0)) {
                                _context.next = 11;
                                break;
                            }

                            _context.next = 8;
                            return i;

                        case 8:
                            this.factors.push(i);
                            n = n / i;
                            i = 2;

                        case 11:
                            i++;

                            tick.stop();
                            _context.next = 2;
                            break;

                        case 15:

                            this.factors.push(n);

                            if (!(this.factors.reduce(function (acc, x) {
                                return acc * x;
                            }, 1) !== this.num)) {
                                _context.next = 18;
                                break;
                            }

                            throw new Error('Something went terribly wrong!');

                        case 18:

                            this.solution = n;
                            return _context.abrupt('return', this.solution);

                        case 20:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, step, this);
        })
    }]);

    return Euler3;
}(__WEBPACK_IMPORTED_MODULE_6__Euler__["default"]);



/***/ }),

/***/ 1141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Euler4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Euler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_exectimer__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util__ = __webpack_require__(1147);










var Euler4 = function (_Euler) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Euler4, _Euler);

    function Euler4() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Euler4);

        return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Euler4.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Euler4)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Euler4, [{
        key: 'step',
        value: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function step() {
            var x, y, tick, is;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function step$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            x = 999;

                        case 1:
                            if (!(x >= 900)) {
                                _context.next = 22;
                                break;
                            }

                            y = 999;

                        case 3:
                            if (!(y >= 900)) {
                                _context.next = 19;
                                break;
                            }

                            tick = new __WEBPACK_IMPORTED_MODULE_7__util_exectimer__["Tick"]('step');

                            tick.start();

                            this.i = x * y;

                            is = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util__["isPalindrome"])(String(this.i));


                            tick.stop();

                            if (!is) {
                                _context.next = 14;
                                break;
                            }

                            this.solution = this.i;
                            return _context.abrupt('return', this.i);

                        case 14:
                            _context.next = 16;
                            return this.i;

                        case 16:
                            y--;
                            _context.next = 3;
                            break;

                        case 19:
                            x--;
                            _context.next = 1;
                            break;

                        case 22:
                            return _context.abrupt('return', this.solution);

                        case 23:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, step, this);
        })
    }]);

    return Euler4;
}(__WEBPACK_IMPORTED_MODULE_6__Euler__["default"]);



/***/ }),

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Euler5; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Euler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_exectimer__ = __webpack_require__(66);









var Euler5 = function (_Euler) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Euler5, _Euler);

    function Euler5() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Euler5);

        return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Euler5.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Euler5)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Euler5, [{
        key: 'step',
        value: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function step() {
            var tick;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function step$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            tick = new __WEBPACK_IMPORTED_MODULE_7__util_exectimer__["Tick"]('step');

                            tick.start();

                            this.solution = 2 * 3 * 4 * 5 * 6 * 7 * 11 * 13 * 17 * 19;

                            tick.stop();

                            return _context.abrupt('return', this.solution);

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, step, this);
        })
    }]);

    return Euler5;
}(__WEBPACK_IMPORTED_MODULE_6__Euler__["default"]);



/***/ }),

/***/ 1143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Euler6; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Euler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_exectimer__ = __webpack_require__(66);









var Euler6 = function (_Euler) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Euler6, _Euler);

    function Euler6() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Euler6);

        return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Euler6.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Euler6)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Euler6, [{
        key: 'step',
        value: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function step() {
            var n1, n2, sum1, sum2, sum3, tick, _tick;

            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function step$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            n1 = 1;
                            n2 = 1;
                            sum1 = 0;
                            sum2 = 0;
                            sum3 = void 0;

                        case 5:
                            if (!(n1 <= 100)) {
                                _context.next = 15;
                                break;
                            }

                            tick = new __WEBPACK_IMPORTED_MODULE_7__util_exectimer__["Tick"]('step');

                            tick.start();

                            sum1 += Math.pow(n1, 2);
                            n1++;

                            tick.stop();

                            _context.next = 13;
                            return sum1;

                        case 13:
                            _context.next = 5;
                            break;

                        case 15:
                            if (!(n2 <= 100)) {
                                _context.next = 25;
                                break;
                            }

                            _tick = new __WEBPACK_IMPORTED_MODULE_7__util_exectimer__["Tick"]('step');

                            _tick.start();

                            sum2 += n2;
                            n2++;

                            _tick.stop();

                            _context.next = 23;
                            return sum2;

                        case 23:
                            _context.next = 15;
                            break;

                        case 25:
                            sum2 = sum2 * sum2;
                            sum3 = sum2 - sum1;

                            this.solution = sum3;

                            return _context.abrupt('return', this.solution);

                        case 29:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, step, this);
        })
    }]);

    return Euler6;
}(__WEBPACK_IMPORTED_MODULE_6__Euler__["default"]);



/***/ }),

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Euler83; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_slicedToArray__ = __webpack_require__(1457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_es__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Euler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_exectimer__ = __webpack_require__(66);












var Tick = __WEBPACK_IMPORTED_MODULE_9__util_exectimer__["default"].Tick;

var solutionMap5x5 = [[1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 1, 1], [0, 0, 0, 1, 0], [0, 0, 0, 1, 1]];
var solution5x5 = 2297;
// const solution = require('../data/solutions.json')['83'];
// console.log(solution5x5);
// console.log(solution);  // 425185
/**
 * G = cost from A to square
 * H = extimated cost from square to B
 * F = score, G + H
 */

var up = function up(_ref) {
    var _ref2 = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
        row = _ref2[0],
        col = _ref2[1];

    return [row - 1, col];
};
var down = function down(_ref3) {
    var _ref4 = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
        row = _ref4[0],
        col = _ref4[1];

    return [row + 1, col];
};
var left = function left(_ref5) {
    var _ref6 = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_slicedToArray___default()(_ref5, 2),
        row = _ref6[0],
        col = _ref6[1];

    return [row, col - 1];
};
var right = function right(_ref7) {
    var _ref8 = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_slicedToArray___default()(_ref7, 2),
        row = _ref8[0],
        col = _ref8[1];

    return [row, col + 1];
};

var Euler83 = function (_Euler) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Euler83, _Euler);

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Euler83, null, [{
        key: 'parseMatrix',
        value: function parseMatrix(matrix) {
            return matrix.toString().trim().split('\n').map(function (line) {
                return line.split(',').map(function (c) {
                    return parseInt(c);
                });
            });
        }
        // map;

    }]);

    function Euler83(matrix) {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Euler83);

        var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Euler83.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Euler83)).call(this));

        _this.position = [0, 0];
        _this.min = 18;
        _this.rows = 5;
        _this.cols = 5;
        _this.endPosition = [4, 4];
        _this.moves = 0;
        _this.open = [];
        _this.closed = [];
        _this.solution = 0;


        _this.weightMap = matrix;
        _this.rows = matrix.length;
        _this.cols = matrix[0].length;

        _this.heuristicMap = [];
        for (var i = 0; i < _this.rows; i++) {
            var row = [];
            for (var j = 0; j < _this.cols; j++) {
                row.push(_this.min * (5 - i + (5 - j) - 1));
            }
            _this.heuristicMap.push(row);
        }

        _this.solution += _this.weightMap[0][0]; // add starting position weight

        // add first points to open
        var p1 = {
            position: [0, 1],
            g: _this.weightMap[0][1],
            h: _this.heuristicMap[0][1]
        };
        p1.f = p1.g + p1.h;

        var p2 = {
            position: [1, 0],
            g: _this.weightMap[1][0],
            h: _this.heuristicMap[1][0]
        };
        p2.f = p2.g + p2.h;

        if (p1.f <= p2.f) {
            _this.open.push(p1, p2);
        } else {
            _this.open.push(p2, p1);
        }

        // add starting point to closed list
        var start = {
            position: [0, 0],
            g: _this.weightMap[0][0],
            h: _this.heuristicMap[0][0]
        };
        start.f = start.g + start.h;
        _this.closed.push(start);
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Euler83, [{
        key: 'step',
        value: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function step() {
            var tick, next;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function step$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!(this.position !== this.endPosition)) {
                                _context.next = 20;
                                break;
                            }

                            tick = new Tick('step');

                            tick.start();

                            next = this.open.splice(0, 1)[0];

                            this.info('Next: ' + next.position);
                            this.solution += next.g;
                            this.closed.push(next);

                            if (!(next.position[0] === this.endPosition[0] && next.position[1] === this.endPosition[1])) {
                                _context.next = 11;
                                break;
                            }

                            // done
                            tick.stop();

                            this.info('Reached end!');

                            return _context.abrupt('return', this.solution);

                        case 11:

                            // add new points, if possible (in sorted position)
                            this.addToOpen(up(next.position));
                            this.addToOpen(down(next.position));
                            this.addToOpen(left(next.position));
                            this.addToOpen(right(next.position));

                            _context.next = 17;
                            return next;

                        case 17:
                            tick.stop();
                            _context.next = 0;
                            break;

                        case 20:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, step, this);
        })
    }, {
        key: 'addToOpen',
        value: function addToOpen(_ref9) {
            var _ref10 = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_slicedToArray___default()(_ref9, 2),
                row = _ref10[0],
                col = _ref10[1];

            if (!this.canGo([row, col])) return false;
            if (this.open.map(function (point) {
                return point.position;
            }).indexOf([row, col]) > -1) return false;

            var point = {
                position: [row, col],
                g: this.weightMap[row][col],
                h: this.heuristicMap[row][col]
            };
            point.f = point.g + point.h;

            var index = __WEBPACK_IMPORTED_MODULE_7_lodash_es__["a" /* default */].sortedIndexBy(this.open, point, 'f');
            this.open.splice(index, 0, point);
        }
    }, {
        key: 'canGo',
        value: function canGo(_ref11) {
            var _ref12 = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_slicedToArray___default()(_ref11, 2),
                row = _ref12[0],
                col = _ref12[1];

            // out of bounds check
            if (row < 0 || col < 0 || row >= this.rows || col >= this.cols) {
                return false;
            }

            // check if in closed list
            var closedLength = this.closed.length;
            for (var i = 0; i < closedLength; i++) {
                if (this.closed[i].position[0] === row && this.closed[i].position[1] === col) {
                    return false;
                }
            }

            return true;
        }
    }]);

    return Euler83;
}(__WEBPACK_IMPORTED_MODULE_8__Euler__["default"]);



/***/ }),

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Euler83; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_es__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Euler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_exectimer__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mathjs__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_mathjs__);











var Tick = __WEBPACK_IMPORTED_MODULE_8__util_exectimer__["default"].Tick;


/**
 * @returns {Boolean}
 */
function repeats(a, b, c, d) {
    return __WEBPACK_IMPORTED_MODULE_6_lodash_es__["a" /* default */].uniq([a, b, c, d]).length !== 4;
}

function permute(array) {
    var returnMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var p = -1;
    var j;
    var k;
    var f;
    var r;
    var l = array.length;
    // number of permutations
    var q = __WEBPACK_IMPORTED_MODULE_9_mathjs___default.a.factorial(l);
    var i = l + 1;

    var x = [new Array(l), new Array(l), new Array(l), new Array(l)];

    for (j = q, k = l + 1, i = -1; ++i < l; x[2][i] = i, x[1][i] = x[0][i] = j /= --k) {}

    for (r = new Array(q); ++p < q;) {
        for (r[p] = new Array(l), i = -1; ++i < l; ! --x[1][i] && (x[1][i] = x[0][i], x[2][i] = (x[2][i] + 1) % l), r[p][i] = returnMap ? x[3][i] : array[x[3][i]]) {
            for (x[3][i] = x[2][i], f = 0; !f; f = !f) {
                for (j = i; j; x[3][--j] == x[2][i] && (x[3][i] = x[2][i] = (x[2][i] + 1) % l, f = 1)) {}
            }
        }
    }

    return r;
}

var operators = ['+', '-', '*', '/'];

var Euler83 = function (_Euler) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Euler83, _Euler);

    function Euler83() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Euler83);

        var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Euler83.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Euler83)).call(this));

        _this.methods = [{
            key: 'bruteForce1',
            name: 'Brute Force 1',
            description: 'My first brute force attempt'
        }];
        _this.solution = {
            numConsecutive: 28,
            a: 1,
            b: 2,
            c: 3,
            d: 4
        };


        _this.method = _this[_this.methods[0].key];
        return _this;
    }

    // brute force, get's the job done, but takes about 300s


    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Euler83, [{
        key: 'bruteForce1',
        value: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function bruteForce1() {
            var _this2 = this;

            var _a, _b, _c, _loop, _d, _ret;

            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function bruteForce1$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _a = 1;

                        case 1:
                            if (!(_a <= 6)) {
                                _context2.next = 25;
                                break;
                            }

                            _b = 2;

                        case 3:
                            if (!(_b <= 7)) {
                                _context2.next = 22;
                                break;
                            }

                            _c = 3;

                        case 5:
                            if (!(_c <= 8)) {
                                _context2.next = 19;
                                break;
                            }

                            _loop = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _loop(_d) {
                                var tick, numPermutations, targets, numConsecutive, i;
                                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _loop$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                if (!repeats(_a, _b, _c, _d)) {
                                                    _context.next = 2;
                                                    break;
                                                }

                                                return _context.abrupt('return', 'continue');

                                            case 2:
                                                // each sequence
                                                tick = new Tick('step');

                                                tick.start();

                                                numPermutations = permute([_a, _b, _c, _d]);
                                                targets = [];


                                                __WEBPACK_IMPORTED_MODULE_6_lodash_es__["a" /* default */].forEach(numPermutations, function (np) {
                                                    __WEBPACK_IMPORTED_MODULE_6_lodash_es__["a" /* default */].forEach(operators, function (op1) {
                                                        __WEBPACK_IMPORTED_MODULE_6_lodash_es__["a" /* default */].forEach(operators, function (op2) {
                                                            __WEBPACK_IMPORTED_MODULE_6_lodash_es__["a" /* default */].forEach(operators, function (op3) {
                                                                targets.push(__WEBPACK_IMPORTED_MODULE_9_mathjs___default.a.eval(np[0] + ' ' + op1 + ' ' + np[1] + ' ' + op2 + ' ' + np[2] + ' ' + op3 + ' ' + np[3]));
                                                                targets.push(__WEBPACK_IMPORTED_MODULE_9_mathjs___default.a.eval('(' + np[0] + ' ' + op1 + ' ' + np[1] + ') ' + op2 + ' (' + np[2] + ' ' + op3 + ' ' + np[3] + ')'));
                                                                targets.push(__WEBPACK_IMPORTED_MODULE_9_mathjs___default.a.eval(np[0] + ' ' + op1 + ' (' + np[1] + ' ' + op2 + ' ' + np[2] + ' ' + op3 + ' ' + np[3] + ')'));
                                                                targets.push(__WEBPACK_IMPORTED_MODULE_9_mathjs___default.a.eval(np[0] + ' ' + op1 + ' (' + np[1] + ' ' + op2 + ' ' + np[2] + ') ' + op3 + ' ' + np[3]));
                                                                targets.push(__WEBPACK_IMPORTED_MODULE_9_mathjs___default.a.eval(np[0] + ' ' + op1 + ' ' + np[1] + ' ' + op2 + ' (' + np[2] + ' ' + op3 + ' ' + np[3] + ')'));
                                                            });
                                                        });
                                                    });
                                                });

                                                // filter & sort
                                                targets = __WEBPACK_IMPORTED_MODULE_6_lodash_es__["a" /* default */].chain(targets).filter(function (target) {
                                                    return __WEBPACK_IMPORTED_MODULE_9_mathjs___default.a.isInteger(target) && target > 0;
                                                }).uniq().thru(function (targets) {
                                                    return targets.sort(function (a, b) {
                                                        return a - b;
                                                    });
                                                }).value();

                                                numConsecutive = 1;
                                                i = 0;

                                            case 10:
                                                if (!(i < targets.length)) {
                                                    _context.next = 19;
                                                    break;
                                                }

                                                if (!(targets[i] + 1 === targets[i + 1])) {
                                                    _context.next = 15;
                                                    break;
                                                }

                                                numConsecutive++;
                                                _context.next = 16;
                                                break;

                                            case 15:
                                                return _context.abrupt('break', 19);

                                            case 16:
                                                i++;
                                                _context.next = 10;
                                                break;

                                            case 19:

                                                if (numConsecutive > _this2.solution.numConsecutive) {
                                                    _this2.solution = { numConsecutive: numConsecutive, a: _a, b: _b, c: _c, d: _d };
                                                }

                                                _this2.info('[' + _a + ', ' + _b + ', ' + _c + ', ' + _d + ']: ' + numConsecutive);

                                                _context.next = 23;
                                                return numConsecutive;

                                            case 23:

                                                tick.stop();

                                            case 24:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _loop, _this2);
                            });
                            _d = 4;

                        case 8:
                            if (!(_d <= 9)) {
                                _context2.next = 16;
                                break;
                            }

                            return _context2.delegateYield(_loop(_d), 't0', 10);

                        case 10:
                            _ret = _context2.t0;

                            if (!(_ret === 'continue')) {
                                _context2.next = 13;
                                break;
                            }

                            return _context2.abrupt('continue', 13);

                        case 13:
                            _d++;
                            _context2.next = 8;
                            break;

                        case 16:
                            _c++;
                            _context2.next = 5;
                            break;

                        case 19:
                            _b++;
                            _context2.next = 3;
                            break;

                        case 22:
                            _a++;
                            _context2.next = 1;
                            break;

                        case 25:

                            this.info('Solution: [' + a + ', ' + b + ', ' + c + ', ' + d + ']: ' + numConsecutive);

                            return _context2.abrupt('return', this.solution);

                        case 27:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, bruteForce1, this);
        })
    }, {
        key: 'step',
        value: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function step() {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function step$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            return _context3.delegateYield(this.method(), 't0', 1);

                        case 1:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, step, this);
        })
    }]);

    return Euler83;
}(__WEBPACK_IMPORTED_MODULE_7__Euler__["default"]);



/***/ }),

/***/ 1146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Euler98; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_keys__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_get_iterator__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_es__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Euler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_exectimer__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mathjs__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_mathjs__);

// import fs from 'fs';
// import path from 'path';












var Tick = __WEBPACK_IMPORTED_MODULE_10__util_exectimer__["default"].Tick;

// import {permute} from './util/array';

// CARE = 1296 = 36^2
// RACE = 9216 = 96^2

function groupPairs(items) {
    var pairs = [];

    __WEBPACK_IMPORTED_MODULE_8_lodash_es__["a" /* default */].forEach(items, function (item1, i) {
        __WEBPACK_IMPORTED_MODULE_8_lodash_es__["a" /* default */].forEach(items, function (item2, j) {
            if (j <= i) return;

            pairs.push([item1, item2]);
        });
    });

    return pairs;
}

function getSquarePairs(upToLength) {
    var i = 1;
    var limit = __WEBPACK_IMPORTED_MODULE_11_mathjs___default.a.pow(10, upToLength);
    var pairs = {};

    while (true) {
        var square = i * i;
        if (square > limit) break;

        var hash = ('' + square).split('').sort().join('');

        if (!pairs[hash]) pairs[hash] = [];
        pairs[hash].push(square);

        i++;
    }

    var take2 = function take2(array) {
        return __WEBPACK_IMPORTED_MODULE_8_lodash_es__["a" /* default */].partialRight(__WEBPACK_IMPORTED_MODULE_8_lodash_es__["a" /* default */].take, 2)(array);
    };
    return __WEBPACK_IMPORTED_MODULE_8_lodash_es__["a" /* default */].chain(pairs).filter(function (group) {
        return group.length > 1;
    }).flatMap(function (group) {
        if (group.length === 2) return [group];

        return groupPairs(group);
    }).value();
}

/**
 * @param {String} word
 * @param {String} number
 */
function getLetterMapping(word, number) {
    word = word.split('');
    number = number.split('');
    var mapping = {};

    for (var i = 0; i < word.length; i++) {
        // make sure that letters are only assigned a single value
        var previousMapping = mapping[word[i]];
        if (previousMapping && previousMapping !== number[i]) {
            return false;
        }

        mapping[word[i]] = number[i];
    }

    // make sure two different letters aren't assigned the same value
    var accumulator = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_get_iterator___default()(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_object_keys___default()(mapping)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (accumulator[mapping[key]]) return false;

            accumulator[mapping[key]] = true;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return mapping;
}

function mapWord(word, mapping) {
    var number = [];
    __WEBPACK_IMPORTED_MODULE_8_lodash_es__["a" /* default */].forEach(word.split(''), function (letter) {
        number.push(mapping[letter]);
    });
    return parseInt(number.join(''));
}

var Euler98 = function (_Euler) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Euler98, _Euler);

    function Euler98() {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Euler98);

        var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Euler98.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Euler98)).call(this));

        _this.solution = 0;


        _this.words = Euler98.parseWords(fs.readFileSync(path.join(__dirname, '..', 'data/words98.txt'), 'utf8'));
        return _this;
    }

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Euler98, [{
        key: 'step',
        value: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function step() {
            var _this2 = this;

            var self, wordPairs, maxLength, squarePairs;
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function step$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            self = this;
                            // get groups of anagramic pairs

                            wordPairs = __WEBPACK_IMPORTED_MODULE_8_lodash_es__["a" /* default */].chain(this.words)
                            // group by words converted to strings of their sorted letters ('SHOE' => 'EHOS')
                            .groupBy(function (word) {
                                return word.split('').sort().join('');
                            })
                            // filter out any groups of only one word (no pairs)
                            .filter(function (group) {
                                return group.length > 1;
                            })
                            // split groups of 3+ into all possible pairs
                            .flatMap(function (group) {
                                if (group.length === 2) return [group];

                                return groupPairs(group);
                            }).value();


                            this.verbose(wordPairs);

                            _context.next = 5;
                            return wordPairs;

                        case 5:
                            maxLength = 0;

                            // get the lengths of words we have

                            __WEBPACK_IMPORTED_MODULE_8_lodash_es__["a" /* default */].forEach(wordPairs, function (group) {
                                var length = group[0].length;
                                if (length > maxLength) maxLength = length;
                            });

                            squarePairs = __WEBPACK_IMPORTED_MODULE_8_lodash_es__["a" /* default */].groupBy(getSquarePairs(maxLength), function (pair) {
                                return ('' + pair[0]).length;
                            });


                            this.verbose(squarePairs);

                            _context.next = 11;
                            return squarePairs;

                        case 11:

                            __WEBPACK_IMPORTED_MODULE_8_lodash_es__["a" /* default */].forEach(wordPairs, function (wordPair) {
                                var length = wordPair[0].length;
                                __WEBPACK_IMPORTED_MODULE_8_lodash_es__["a" /* default */].forEach(squarePairs[length], function (squarePair) {
                                    var tick = new Tick('step');
                                    tick.start();

                                    var mapping0 = getLetterMapping(wordPair[0], '' + squarePair[0]);
                                    if (mapping0 === false) return;

                                    var mappedNum = mapWord(wordPair[1], mapping0);

                                    if (squarePair[1] === mappedNum) {
                                        self.info('Pair found: ' + wordPair[0] + ' -> ' + squarePair[0] + ', ' + wordPair[1] + ' -> ' + squarePair[1]);
                                        if (squarePair[0] > _this2.solution) _this2.solution = squarePair[0];
                                        if (squarePair[1] > _this2.solution) _this2.solution = squarePair[1];
                                    }

                                    tick.stop();

                                    // yield {wordPair, squarePair};
                                });
                            });

                            return _context.abrupt('return', this.solution);

                        case 13:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, step, this);
        })
    }, {
        key: 'run',
        value: function run() {
            this.start();

            var stepper = this.step();

            var step = void 0;
            do {
                var tick = new Tick('step');
                tick.start();
                step = stepper.next();
                tick.stop();
                this.verbose('step: ' + step.value);
            } while (!step.done);

            this.end();

            var stepTimer = __WEBPACK_IMPORTED_MODULE_10__util_exectimer__["default"].timers.step;

            this.info('Took ' + stepTimer.count() + ' steps');
            this.info('Took ' + stepTimer.parse(stepTimer.duration()));
            this.info('Soluion: ' + this.solution);

            return this.sum;
        }
    }], [{
        key: 'parseWords',
        value: function parseWords(str) {
            return str.split(',').map(function (word) {
                return word.replace(/"/g, '');
            });
        }
    }]);

    return Euler98;
}(__WEBPACK_IMPORTED_MODULE_9__Euler__["default"]);


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),

/***/ 1147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quadratic__ = __webpack_require__(811);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quadratic", function() { return __WEBPACK_IMPORTED_MODULE_0__quadratic__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ispalindrome__ = __webpack_require__(1148);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isPalindrome", function() { return __WEBPACK_IMPORTED_MODULE_1__ispalindrome__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sieve_of_atkin__ = __webpack_require__(1149);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sieveOfAtkin", function() { return __WEBPACK_IMPORTED_MODULE_2__sieve_of_atkin__["default"]; });




/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = isPalindrome;
/**
 * @author Awk34
 */
function isPalindrome(str) {
    if (typeof str !== 'string') str = String(str);

    var len = Math.floor(str.length / 2);

    for (var i = 0; i < len; i++) {
        if (str[i] !== str[str.length - i - 1]) return false;
    }

    return true;
}

/***/ }),

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = SieveOfAtkin;
/**
 * @param {Number} limit=1000 - end of the sieve
 */
function SieveOfAtkin() {
    var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

    var sieve = new Array(limit + 1);
    var limitSqrt = Math.sqrt(limit).toFixed(0);

    // there may be more efficient data structure
    // arrangements than this (there are!) but
    // this is the algorithm in Wikipedia
    // initialize results array
    sieve.fill(false);
    // the sieve works only forintegers > 3, so
    // set these trivially to their proper values
    sieve[0] = false;
    sieve[1] = false;
    sieve[2] = true;
    sieve[3] = true;

    // loop through all possible integer values forx and y
    // up to the square root of the max prime forthe sieve
    // we don't need any larger values forx or y since the
    // max value forx or y will be the square root of n
    // in the quadratics
    // the theorem showed that the quadratics will produce all
    // primes that also satisfy their wheel factorizations, so
    // we can produce the value of n from the quadratic first
    // and then filter n through the wheel quadratic
    // there may be more efficient ways to do this, but this
    // is the design in the Wikipedia article
    // loop through all integers forx and y forcalculating
    // the quadratics
    for (var x = 1; x <= limitSqrt; x++) {
        for (var y = 1; y <= limitSqrt; y++) {
            // first quadratic using m = 12 and r in R1 = {r : 1, 5}
            var n = 4 * x * x + y * y;
            if (n <= limit && (n % 12 == 1 || n % 12 == 5)) {
                sieve[n] = !sieve[n];
            }
            // second quadratic using m = 12 and r in R2 = {r : 7}
            n = 3 * x * x + y * y;
            if (n <= limit && n % 12 == 7) {
                sieve[n] = !sieve[n];
            }
            // third quadratic using m = 12 and r in R3 = {r : 11}
            n = 3 * x * x - y * y;
            if (x > y && n <= limit && n % 12 == 11) {
                sieve[n] = !sieve[n];
            }
            // note that R1 union R2 union R3 is the set R
            // R = {r : 1, 5, 7, 11}
            // which is all values 0 < r < 12 where r is
            // a relative prime of 12
            // Thus all primes become candidates
        }
    }
    // remove all perfect squares since the quadratic
    // wheel factorization filter removes only some of them
    for (var _n = 5; _n <= limitSqrt; _n++) {
        if (sieve[_n]) {
            var _x2 = _n * _n;
            for (var i = _x2; i <= limit; i += _x2) {
                sieve[i] = false;
            }
        }
    }

    return sieve;
}

/***/ }),

/***/ 1150:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n * Project Euler - 1\n */\n\npublic class euler1 {\n\tpublic static void main(String [] args) {\n\t\tClock clock = new Clock();\n\t\tclock.startNanos();\n\t\tint ans=0;\n\n\t\tfor(int n=1; n<1000; n++)\n\t\t\tif(n%3==0 || n%5==0)\n\t\t\t\tans += n;\n\n\t\tclock.getTimeNanos();\n\t\tSystem.out.println(ans);\n\t}\n}\n/*\nIf we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.\n\nFind the sum of all the multiples of 3 or 5 below 1000.\n*/"

/***/ }),

/***/ 1151:
/***/ (function(module, exports) {

module.exports = "//************************\n//* Andrew Koroluk       *\n//* Project Euler - 10   *\n//************************\n\npublic class euler10 {\n\tpublic static void main (String[] args) {\n\t\tlong sum=0;\n\t\tfor(int i=2;i<2000000;i++)\n\t\t\tif(isPrime (i))\n\t\t\t\tsum+=i;\n\t\tSystem.out.println (\"The Answer to PE #10 is \"+sum);\n\t}\n\n\tpublic static boolean isPrime(int num) {\n\t\tboolean prime = true;\n\t\tint limit = (int)Math.sqrt((double)num);\n\n\t\tfor ( int i = 2; i <= limit; i++ )\n\t\t\tif ( num % i == 0 ) {\n\t\t\t\tprime = false;\n\t\t\t\tbreak;\n\t\t\t}\n\t\treturn prime;\n\t}\n}"

/***/ }),

/***/ 1152:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\n\npublic class euler100 {\n\tpublic static void main(String[] args) {\n\t\tBigInteger b = new BigInteger(\"85\");\n\t\tBigInteger n = new BigInteger(\"120\");\n\t\twhile(n.compareTo(BigInteger.TEN.pow(12)) == -1) {\n\t\t\tBigInteger b1 = b;\n\t\t\tBigInteger n1 = n;\n\t\t\tb = (b1.multiply(new BigInteger(\"3\")).add(n1.multiply(new BigInteger(\"2\")))).subtract(new BigInteger(\"2\"));\n\t\t\tn = (b1.multiply(new BigInteger(\"4\")).add(n1.multiply(new BigInteger(\"3\")))).subtract(new BigInteger(\"3\"));\n\t\t}\n\t\tSystem.out.println(b);\t//756872327473\n\t}\n}"

/***/ }),

/***/ 1153:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler101 {\n\tstatic double[] y_j;\n\tstatic int nsize = 10;\n\tpublic static void main(String[] args) {\n\t\ty_j = new double[nsize];\n\t\tfor(int i=0; i<nsize; i++)\n\t\t\ty_j[i] = f(i+1);\n\t\t\n\t\tSystem.out.println(P(2));\n\t\t//if(true) return;\n\t\t\n\t\tdouble ans = 0;\n\t\tfor(double x=1; x<=nsize; x++) {\n\t\t\tdouble P = P(x+1);\n\t\t\tSystem.out.println(\"f(\"+x+\") = \" + f(x) + \", P(\"+(x+1)+\") = \" + P );\n\t\t\tans += P;\n\t\t}\n\t\tSystem.out.println(\"Answer: \"+ans);\t//37076114526\n\t}\n\tstatic double P(double x) {\n\t\tdouble sum = 0;\n\t\t\n\t\tfor(int j=1; j<=x-1; j++) {\n\t\t\t//System.out.println(\"P_\"+j+\"(\"+x+\")\");\n\t\t\tsum += P_j(j, x);\n\t\t}\n\t\t\n\t\treturn sum;\t\t\n\t}\n\tstatic double P_j(int j, double x) {\n\t\tdouble ans = y_j[j-1];\n\t\tfor(int k=1; k<=x-1; k++) {\n\t\t\tif(k==j) continue;\n\t\t\tans *= (double)(x-k)/(j-k);\n\t\t}\n\t\treturn ans;\n\t}\n\tstatic double f(double n) {\n\t\treturn 1 - n + n*n - p(n,3) + p(n, 4) - p(n, 5) + p(n, 6) - p(n, 7) + p(n, 8) - p(n, 9) + p(n, 10);\n\t\t//return n*n*n;\n\t}\n\tstatic double p(double a, double p) {\n\t\treturn Math.pow(a, p);\n\t}\n}"

/***/ }),

/***/ 1154:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.util.ArrayList;\n\npublic class euler102 {\n\tpublic static void main(String[] args) {\n\t\tlong time = System.currentTimeMillis();\n\t\tArrayList<ArrayList<Integer>> file = new ArrayList<ArrayList<Integer>>();\n\t\tString in=\"\";\n\t\ttry {\n\t\t\tBufferedReader r = new BufferedReader(new FileReader(\"triangle2.txt\"));\n\t\t\tfor(int i=0; i<1000; i++) {\n\t\t\t\tArrayList<Integer> temp = new ArrayList<Integer>();\n\t\t\t\tin = r.readLine();\n\t\t\t\tString str = \"\";\n\t\t\t\tfor(int x=0, pos=0; pos<6; x++) {\n\t\t\t\t\tif(in.charAt(x)==',') {\n\t\t\t\t\t\ttemp.add(Integer.parseInt(str));\n\t\t\t\t\t\tpos++;\n\t\t\t\t\t\tstr = \"\";\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tstr += Character.toString(in.charAt(x));\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tfile.add(temp);\n\t\t\t}\n\t\t\tr.close();\n\t\t} catch (Exception e1) { e1.printStackTrace(); }\n\t\tSystem.out.println(\"File input took \"+(System.currentTimeMillis()-time)+\" ms.\\n\");\n\t\ttime = System.currentTimeMillis();\n\t\t\n\t\tint ans=0;\n\t\tPoint d = new Point(0,0);\n\t\t\n\t\tfor(int i=0; i<file.size(); i++) {\n\t\t\tArrayList<Integer> temp = file.get(i);\n\t\t\tPoint a = new Point(temp.get(0), temp.get(1));\n\t\t\tPoint b = new Point(temp.get(2), temp.get(3));\n\t\t\tPoint c = new Point(temp.get(4), temp.get(5));\n\t\t\tif( area(a,b,d) + area(b,c,d) + area(a,c,d) == area(a,b,c) ) ans++;\n\t\t}\n\t\tSystem.out.println(\"Answer: \"+ans);\t//228\n\t\tSystem.out.println(\"Calculation took \"+(System.currentTimeMillis()-time)+\" ms.\");\n\t}\n\tstatic double area(Point a, Point b, Point c) {\n\t\treturn Math.abs((a.x-b.x)*(a.y-c.y)-(a.y-b.y)*(a.x-c.x));\n\t}\n}"

/***/ }),

/***/ 1155:
/***/ (function(module, exports) {

module.exports = "/*\r\nWas stupidly easy, solved with pen & paper\r\n\r\nLet S(A) represent the sum of elements in set A of size n. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:\r\n\r\nS(B)  S(C); that is, sums of subsets cannot be equal.\r\nIf B contains more elements than C then S(B)  S(C).\r\nIf S(A) is minimised for a given n, we shall call it an optimum special sum set. The first five optimum special sum sets are given below.\r\n\r\nn = 1: {1}\r\nn = 2: {1, 2}\r\nn = 3: {2, 3, 4}\r\nn = 4: {3, 5, 6, 7}\r\nn = 5: {6, 9, 11, 12, 13}\r\n\r\nIt seems that for a given optimum set, A = {a1, a2, ... , an}, the next optimum set is of the form B = {b, a1+b, a2+b, ... ,an+b}, where b is the \"middle\" element on the previous row.\r\n\r\nBy applying this \"rule\" we would expect the optimum set for n = 6 to be A = {11, 17, 20, 22, 23, 24}, with S(A) = 117. However, this is not the optimum set, as we have merely applied an algorithm to provide a near optimum set. The optimum set for n = 6 is A = {11, 18, 19, 20, 22, 25}, with S(A) = 115 and corresponding set string: 111819202225.\r\n\r\nGiven that A is an optimum special sum set for n = 7, find its set string.\r\n\r\nNOTE: This problem is related to problems 105 and 106.\r\n\r\n\r\nAnswer:\r\n20313839404245\r\n */"

/***/ }),

/***/ 1156:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler104 {\n\tpublic static void main(String[] args) {\n\t\tlong f1 = 1;\n\t\tlong f2 = 1;\n\t\tint k = 2;\n\t\t\n\t\twhile(k<=2749) {\n\t\t\tlong newF = (f1 + f2) % 1000000000;\n\t\t\tf1 = f2;\n\t\t\tf2 = newF;\n\t\t\tk++;\n\t\t}\n\t\t\n\t\tloop:\n\t\twhile (true) {\n\t\t\tlong newF = (f1 + f2) % 1000000000;\n\t\t\tf1 = f2;\n\t\t\tf2 = newF;\n\t\t\tk++;\n\t\t\t\n\t\t\tif(isPandigital(newF)) {\n\t\t\t\tSystem.out.println(k);\n\t\t\t\tdouble t = (k * 0.20898764024997873 - 0.3494850021680094);\n\t\t        if (isPandigital((long)Math.pow(10, t - (long)t + 8)))\n\t\t            break loop;\n\t\t\t}\n\t\t}\n\t\t\n\t\tSystem.out.println(\"Answer: \" + k);\t//329468\n\t}\n\tprivate static boolean goFish(String s) {\n\t\tString p1 = \"\";\n\t\tString p2 = \"\";\n\t\t\n\t\tp1 = s.substring(0, 9);\n\t\tp2 = s.substring(s.length()-9);\n\t\t\n\t\tif(isPandigital( Integer.parseInt(p1)) && isPandigital( Integer.parseInt(p2))) return true;\n\t\telse return false;\n\t}\n\tprivate static boolean isPandigital(int i) {\n\t\tString s = Integer.toString(i);\n\t\tfor(int x=1; x<=s.length(); x++) {\n\t\t\tif(!s.contains(Integer.toString(x))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t\t\n\t\treturn true;\n\t}\n\tprivate static boolean isPandigital(long i) {\n\t\tString s = Long.toString(i);\n\t\tfor(int x=1; x<=s.length(); x++) {\n\t\t\tif(!s.contains(Integer.toString(x))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t\t\n\t\treturn true;\n\t}\n}"

/***/ }),

/***/ 1157:
/***/ (function(module, exports) {

module.exports = "\n/*\n * Andrew Koroluk\n */\n\nimport java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.ArrayList;\nimport java.util.Scanner;\n\npublic class euler105 {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(read(\"sets.txt\"));\n\t}\n\tpublic static ArrayList<String> read(String in) {\n\t\tScanner s;\n\t\ttry {\n\t\t\ts = new Scanner(new File(in));\n\t\t} catch (FileNotFoundException e) {\n\t\t\te.printStackTrace(); return null;\n\t\t}\n\t\t\n\t\tArrayList<String> ans = new ArrayList<String>();\n\t\twhile(s.hasNextLine()) {\n\t\t\tString str = s.next();\n\t\t\tans.add(str);\n\t\t}\n\t\ts.close();\n\t\treturn ans;\n\t}\n}"

/***/ }),

/***/ 1158:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler108 {\n\tpublic static void main(String[] args) {\n\t\tlong n = 1;\n\t\tlong ans = 0;\n\t\tlong[] primes = LongPrimeSieve.sieve(20000);\n\t\t\n\t\twhile(true) {\n\t\t\tif( (NumDivisors2(n, primes)+1)/2 > 1000) {\n\t\t\t\tSystem.out.println(\"Ans: \" + n);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tn++;\n\t\t}\n\t}\n\tprivate static long NumDivisors2(long number, long[] primelist) {\n\t\t//finds the number of divisors of number^2\n\t    long nod = 1;\n\t    long exponent;\n\t    long remain = number;\n\t \n\t    for (int i = 0; i < primelist.length; i++) {\n\t        // In case there is a remainder this is a prime factor as well\n\t        // The exponent of that factor is 1\n\t        if (primelist[i] * primelist[i] > number) {\n\t            return nod * 2;\n\t        }\n\t \n\t        exponent = 1;\n\t        while (remain % primelist[i] == 0) {\n\t            exponent+=2;\n\t            remain = remain / primelist[i];\n\t        }\n\t        nod *= exponent;\n\t \n\t        //If there is no remainder, return the count\n\t        if (remain == 1) {\n\t            return nod;\n\t        }\n\t    }\n\t    return nod;\n\t}\n}"

/***/ }),

/***/ 1159:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler11 {\n\tpublic static void main(String[] args) {\n\t\tint[][] array = {{\t 8, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91,  8},\n\t\t\t\t\t\t{\t49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48,  4, 56, 62, 00},\n\t\t\t\t\t\t{\t81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30,  3, 49, 13, 36, 65},\n\t\t\t\t\t\t{\t52, 70, 95, 23,  4, 60, 11, 42, 69, 24, 68, 56,  1, 32, 56, 71, 37,  2, 36, 91},\n\t\t\t\t\t\t{\t22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80},\n\t\t\t\t\t\t{\t24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50},\n\t\t\t\t\t\t{\t32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70},\n\t\t\t\t\t\t{\t67, 26, 20, 68,  2, 62, 12, 20, 95, 63, 94, 39, 63,  8, 40, 91, 66, 49, 94, 21},\n\t\t\t\t\t\t{\t24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72},\n\t\t\t\t\t\t{\t21, 36, 23,  9, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95},\n\t\t\t\t\t\t{\t78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14,  9, 53, 56, 92},\n\t\t\t\t\t\t{\t16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57},\n\t\t\t\t\t\t{\t86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58},\n\t\t\t\t\t\t{\t19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40},\n\t\t\t\t\t\t{\t04, 52,  8, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66},\n\t\t\t\t\t\t{\t88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69},\n\t\t\t\t\t\t{\t04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18,  8, 46, 29, 32, 40, 62, 76, 36},\n\t\t\t\t\t\t{\t20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16},\n\t\t\t\t\t\t{\t20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54},\n\t\t\t\t\t\t{\t01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48}};\n\t\tint ans = 0;\n\n\t\t/***** Horizontal *****/\n\t\tfor(int i=0; i<20; i++) {\n\t\t\tfor(int j=0; j<17; j++) {\n\t\t\t\tif((array[i][j] * array[i][j+1] * array[i][j+2] * array[i][j+3])>ans) {\n\t\t\t\t\tans = (array[i][j] * array[i][j+1] * array[i][j+2] * array[i][j+3]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(ans);\n\n\t\t/***** Vertical *****/\n\t\tfor(int j=0; j<20; j++) {\n\t\t\tfor(int i=0; i<17; i++) {\n\t\t\t\tif((array[i][j] * array[i+1][j] * array[i+2][j] * array[i+3][j])>ans) {\n\t\t\t\t\tans = (array[i][j] * array[i+1][j] * array[i+2][j] * array[i+3][j]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(ans);\n\n\t\t/***** Diagonal 1 *****/\n\t\tfor(int i=0; i<17; i++) {\n\t\t\tfor(int j=0; j<17; j++) {\n\t\t\t\tif((array[i][j] * array[i+1][j+1] * array[i+2][j+2] * array[i+3][j+3])>ans) {\n\t\t\t\t\tans = (array[i][j] * array[i+1][j+1] * array[i+2][j+2] * array[i+3][j+3]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(ans);\n\t\t/***** Diagonal 2 *****/\n\t\tfor(int j=19; j>=3; j--) {\n\t\t\tfor(int i=0; i<17; i++) {\n\t\t\t\tif((array[i][j] * array[i+1][j-1] * array[i+2][j-2] * array[i+3][j-3])>ans) {\n\t\t\t\t\tans = (array[i][j] * array[i+1][j-1] * array[i+2][j-2] * array[i+3][j-3]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(ans);\n\t}\n}\n\n\n\n\n\n\n\n/*\nIn the 20x20 grid below, four numbers along a diagonal line have been marked in red.\n\n08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08\n49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00\n81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65\n52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91\n22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80\n24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50\n32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70\n67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21\n24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72\n21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95\n78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92\n16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57\n86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58\n19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40\n04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66\n88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69\n04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36\n20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16\n20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54\n01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48\nThe product of these numbers is 26 x 63 x 78 x 14 = 1788696.\n\nWhat is the greatest product of four adjacent numbers in any direction (up, down, left, right, or diagonally) in the 2020 grid?\n*/"

/***/ }),

/***/ 1160:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler110 {\n\tpublic static void main(String[] args) {\n\t\tlong n = 1;\n\t\tlong ans = 0;\n\t\tlong[] primes = LongPrimeSieve.sieve(100000);\n\t\tSystem.out.println(\"Done Sieveing.\");\n\t\t\n\t\twhile(true) {\n\t\t\tif( (NumDivisors2(n, primes)+1)/2 > 4000000) {\n\t\t\t\tSystem.out.println(\"Ans: \" + n);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tn++;\n\t\t}\n\t}\n\tprivate static long NumDivisors2(long number, long[] primelist) {\n\t\t//finds the number of divisors of number^2\n\t    long nod = 1;\n\t    long exponent;\n\t    long remain = number;\n\t \n\t    for (int i = 0; i < primelist.length; i++) {\n\t        // In case there is a remainder this is a prime factor as well\n\t        // The exponent of that factor is 1\n\t        if (primelist[i] * primelist[i] > number) {\n\t            return nod * 2;\n\t        }\n\t \n\t        exponent = 1;\n\t        while (remain % primelist[i] == 0) {\n\t            exponent+=2;\n\t            remain = remain / primelist[i];\n\t        }\n\t        nod *= exponent;\n\t \n\t        //If there is no remainder, return the count\n\t        if (remain == 1) {\n\t            return nod;\n\t        }\n\t    }\n\t    return nod;\n\t}\n}"

/***/ }),

/***/ 1161:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler112 {\n\tpublic static void main(String[] args) {\n\t\tClock clock = new Clock();\n\t\tint bouncy=0, n=1;\n\t\twhile( true ) {\n\t\t\tn++;\n\t\t\tif( isBouncy(n) ) bouncy++;\n\t\t\t//System.out.println( (double) bouncy/n*100 );\n\t\t\tif( (double) bouncy/n*100 == 99.0 ) break;\n\t\t}\n\t\tclock.getTimeSeconds();\n\t\tSystem.out.println(n);\t//1587000\n\t\tSystem.out.println(bouncy);\t//1571130\n\t}\n\tstatic boolean isBouncy(int n) {\n\t\t//int[] s = toIntArray(Integer.toString(n));\n\t\t//if( s.length < 3 ) return false;\n\t\tif( isIncreasing(n) || isDecreasing(n) ) return false;\n\t\treturn true;\n\t}\n\tstatic boolean isIncreasing(int n) {\n\t\tint[] s = toIntArray(Integer.toString(n));\n\t\tfor(int i=1; i<s.length; i++)\n\t\t\tif(s[i-1]>s[i]) return false;\n\t\treturn true;\n\t}\n\tstatic boolean isDecreasing(int n) {\n\t\tint[] s = toIntArray(Integer.toString(n));\n\t\tfor(int i=1; i<s.length; i++)\n\t\t\tif(s[i-1]<s[i]) return false;\n\t\treturn true;\n\t}\n\tprivate static int[] toIntArray(String s) {\n\t\tint[] a = new int[s.length()];\n\t\tfor(int i=0; i<a.length; i++)\n\t\t\ta[i] = Integer.parseInt( Character.toString( s.charAt(i) ) );\n\t\treturn a;\n\t}\n}"

/***/ }),

/***/ 1162:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\nimport java.util.ArrayList;\nimport java.util.Collections;\n\npublic class euler119 {\n\tpublic static void main(String[] args) {\n\t\tArrayList<BigInteger> a = new ArrayList<BigInteger>();\n\t\t\n\t\tfor(int b=2; b<600; b++) {\n\t\t\tfor(int p=2; p<50; p++) {\n\t\t\t\tBigInteger x = Utils.pwr( new BigInteger(Integer.toString(b)), p );\n\t\t\t\tif(digSum(x).compareTo( new BigInteger(Integer.toString(b)) ) == 0) a.add(x);\n\t\t\t\tif(a.size()>33) break;\n\t\t\t}\n\t\t}\n\t\t\n\t\tCollections.sort(a);\n\t\t\n\t\tSystem.out.println(a.get(29));\t//248155780267521\n\t}\n\tstatic long digSum(long a) {\n\t\tString s = Long.toString(a);\n\t\tlong ans = 0;\n\t\tfor(int i=0; i<s.length(); i++)\n\t\t\tans += Integer.parseInt(Character.toString(s.charAt(i)));\n\t\treturn ans;\n\t}\n\tstatic BigInteger digSum(BigInteger a) {\n\t\tString s = a.toString();\n\t\tBigInteger ans = BigInteger.ZERO;\n\t\tfor(int i=0; i<s.length(); i++)\n\t\t\tans = ans.add( new BigInteger(Character.toString(s.charAt(i))) );\n\t\treturn ans;\n\t}\n}"

/***/ }),

/***/ 1163:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.Scanner;\n\nclass Tri {\n\tpublic int divisors(int var) {\n\t\tint div=0;\n\t\tfor(int i=1; i<=Math.sqrt(var); i++) {\n\t\t\tif(var%i==0) {\n\t\t\t\tdiv+=2;\n\t\t\t}\n\t\t}\n\t\tif(var%Math.sqrt(var)==0) {\n\t\t\tdiv--;\n\t\t}\n\t\treturn div;\n\t}\n}\n\npublic class euler12 {\n    public static void main(String[] args) {\n\t\tTri tri = new Tri();\n\t\tint prev=0, num=0;\n\n\t\tfor(int i=1; num<=76577000; i++) {\n\t\t\tnum = prev + i;\n\t\t\tprev = num;\n\t\t\tSystem.out.print(num + \" - \" + tri.divisors(num));\n\t\t\tnew Scanner(System.in).nextLine();\n\t\t\tif(tri.divisors(num)>500) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n    }\n}\n\n/*\nThe sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:\n\n1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...\n\nLet us list the factors of the first seven triangle numbers:\n\n 1: 1\n 3: 1,3\n 6: 1,2,3,6\n10: 1,2,5,10\n15: 1,3,5,15\n21: 1,3,7,21\n28: 1,2,4,7,14,28\nWe can see that 28 is the first triangle number to have over five divisors.\n\nWhat is the value of the first triangle number to have over five hundred divisors?\n*/"

/***/ }),

/***/ 1164:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler120 {\n\tpublic static void main(String[] args) {\t\t\n\t\tint ans = 0;\n\t\tfor(int a=3; a<=1000; a++)\n\t\t\tans += rMax(a);\n\t\tSystem.out.println(ans);\t//333082500\n\t}\n\tstatic int rMax(int a) {\n\t\tif(a%2==0) return (a*a)-(2*a);\n\t\telse return (a*a)-a;\n\t}\n}\n/*\nLet r be the remainder when (a-1)^n + (a+1)^n is divided by a2.\n\nFor example, if a = 7 and n = 3, then r = 42: 6^3 + 8^3 = 728 === 42 mod 49.\nAnd as n varies, so too will r, but for a = 7 it turns out that rmax = 42.\n\nFor 3  a  1000, find  rmax.\n*/"

/***/ }),

/***/ 1165:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.ArrayList;\n\npublic class euler125 {\n\tpublic static void main(String[] args) {\n\t\tlong limit = Utils.pwr(10,8);\n\t\tArrayList<Long> a = new ArrayList<Long>();\n\t\t\t\t \n\t\tfor(long i=1; i<limit; i++) {\n\t\t\tlong x = i*i;\n\t\t\tfor(long j=i+1; j<limit; j++) {\n\t\t\t\tx += j*j;\n\t\t\t\tif(x>=limit) break;\n\t\t\t\tif(Utils.isPalindrome(x))\n\t\t\t\t\ta.add(x);\n\t\t\t}\n\t\t}\n\t\t\n\t\tUtils.removeDuplicates(a);\n\t\tSystem.out.println(Utils.sum(a)+\" \"+a);\t//2906969179\n\t}\n}"

/***/ }),

/***/ 1166:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\nimport java.util.ArrayList;\nimport java.util.Scanner;\nimport java.io.File;\nimport java.io.FileNotFoundException;\n\npublic class euler13 {\n    public static void main(String[] args) {\n    \tArrayList<BigInteger> array = read(new File(\"euler13.txt\"));\n    \tBigInteger sum = BigInteger.ZERO;\n\n    \tfor(int i=0; i<array.size(); i++)\n    \t\tsum = sum.add( array.get(i) );\n\n    \tString str = sum.toString();\n\n    \tSystem.out.println(str.substring(0,10));\n    }\n    public static ArrayList<BigInteger> read(File f) {\n\t\tScanner s;\n\t\ttry {\n\t\t\ts = new Scanner(f);\n\t\t} catch (FileNotFoundException e) {\n\t\t\te.printStackTrace();\n\t\t\treturn null;\n\t\t}\n\t\t\n\t\tArrayList<BigInteger> ans = new ArrayList<BigInteger>();\n\t\twhile(s.hasNextLine()) {\n\t\t\tString str = s.next();\n\t\t\tans.add(new BigInteger(str));\n\t\t}\n\t\ts.close();\n\t\treturn ans;\n\t}\n}\n\n/*\nWork out the first ten digits of the sum of the following one-hundred 50-digit numbers.\n<euler13.txt>\n*/"

/***/ }),

/***/ 1167:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler131 {\t\n\tpublic static void main(String[] args) {\t\t\n\t\tint limit;\n\t\tint ans = 0;\n\t\t\n\t\tfor(int x=1; ; x++) {\n\t\t\tif( (x+1)*(x+1)*(x+1) - x*x*x > 1000000 ) {\n\t\t\t\tlimit = x;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t\t\n\t\tfor(int x=1; x<=limit; x++) {\n\t\t\tif( Utils.isPrime((x+1)*(x+1)*(x+1) - x*x*x)) {\n\t\t\t\tans++;\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(ans);\t//173\n\t}\n}"

/***/ }),

/***/ 1168:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\n//import java.util.Scanner;\n\npublic class euler14 {\n\tpublic static void main(String[] args) {\n\t\t//Scanner reader = new Scanner(System.in);\n\n\t\tlong chain = 0;\n\t\tlong[] array = new long[2];\n\t\tfor(long i=1000000; i>837790; i--) {\n\t\t\t/*if(i==997023) {\n\t\t\t\tlong n = i;\n\t\t\t\tSystem.out.print(n + \" - \");\n\t\t\t\twhile(n!=1) {\n\t\t\t\t\tif(n%2==0) {\t//if even\n\t\t\t\t\t\tn *= .5;\n\t\t\t\t\t\tSystem.out.println(n);\n\t\t\t\t\t\treader.nextLine();\n\t\t\t\t\t}\n\t\t\t\t\telse {\t\t\t//if odd\n\t\t\t\t\t\tn = n*3 +1;\n\t\t\t\t\t\tSystem.out.println(n);\n\t\t\t\t\t\treader.nextLine();\n\t\t\t\t\t}\n\t\t\t\t\tchain++;\n\t\t\t\t}\n\t\t\t\tSystem.out.println(chain);\n\n\t\t\t\tif(chain>array[1]) {\n\t\t\t\t\tarray[0] = i;\n\t\t\t\t\tarray[1] = chain;\n\t\t\t\t}\n\t\t\t\tchain = 0;\n\t\t\t}*/\n\n\t\t\tlong n = i;\n\t\t\tSystem.out.print(n + \" - \");\n\t\t\twhile(n!=1) {\n\t\t\t\tif(n<=0) {\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t\tif(n%2==0) {\t//if even\n\t\t\t\t\tn *= .5;\n\t\t\t\t}\n\t\t\t\telse {\t\t\t//if odd\n\t\t\t\t\tn = n*3 +1;\n\t\t\t\t}\n\t\t\t\tchain++;\n\t\t\t}\n\t\t\tSystem.out.println(chain);\n\n\t\t\tif(chain>array[1]) {\n\t\t\t\tarray[0] = i;\n\t\t\t\tarray[1] = chain;\n\t\t\t}\n\t\t\tchain = 0;\n\t\t}\n\t\tSystem.out.println(array[0]+\" - \"+array[1]);\n\t}\n}\n\n/*\nThe following iterative sequence is defined for the set of positive integers:\n\nn  n/2 (n is even)\nn  3n + 1 (n is odd)\n\nUsing the rule above and starting with 13, we generate the following sequence:\n\n13  40  20  10  5  16  8  4  2  1\nIt can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.\n\nWhich starting number, under one million, produces the longest chain?\n\nNOTE: Once the chain starts the terms are allowed to go above one million.\n*/"

/***/ }),

/***/ 1169:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler144 {\n\tpublic static void main(String[] args) {\n\t\tClock clock = new Clock();\n\t\t\n\t\tdouble x1 = 0;\n\t\tdouble y1 = 10.1;\n\t\tdouble x2 = 1.4;\n\t\tdouble y2 = -9.6;\n\t\tint ans=1;\n\t\t\n\t\twhile(true) {\n\t\t\tdouble m0 = (y2-y1)/(x2-x1);\n\t\t\tdouble m1 = deriv(x2,y2);\n\t\t\tdouble tempX=x2, tempY=y2;\n\t\t\tdouble X = (m0-m1)/(1+m0*m1);\n\t\t\tdouble m2 = (m1-X)/(1+X*m1);\n\t\t\t//System.out.println(m2);\n\t\t\t\n\t\t\t//System.out.println(\"quadratic(m(\"+x1+\",\"+y1+\",\"+x2+\",\"+y2+\"),(\"+y1+\"-\"+m2+\"*\"+x1+\"))\");\n\t\t\tdouble b = (y2-m2*x2);\n\t\t\tx2 = quadratic(m2, b, x2);\n\t\t\ty2 = m2*x2 + b;\n\t\t\tSystem.out.println(x2+\", \"+y2);\n\t\t\tx1=tempX;\n\t\t\ty1=tempY;\n\n\t\t\tif(y2>0 && x2>-.01 && x2<.01) break;\n\t\t\tans++;\n\t\t}\n\t\tclock.getTimeMillis();\n\t\tSystem.out.println(ans);\n\t\t\n\t\t\n\t}\n\tstatic double deriv(double x, double y) {\n\t\treturn -4*x/y;\n\t}\n\tstatic double quadratic(double m2, double n, double x2) {\n\t\tdouble a = 4 + m2*m2;\n\t\tdouble b = 2*m2*n;\n\t\tdouble c = n*n - 100;\n\t\t\n\t\tdouble ans1 =  (-b + Math.sqrt(b*b - 4*a*c))/(2*a);\n\t\tdouble ans2 =  (-b - Math.sqrt(b*b - 4*a*c))/(2*a);\n\t    double dx1 = x2 - ans1;\n        double dx2 = x2 - ans2;\n        dx1 = dx1>0 ? dx1 : -dx1;\n        dx2 = dx2>0 ? dx2 : -dx2;\n        \n        if(dx1>dx2) return ans1;\n        else return ans2;\n\t}\n}"

/***/ }),

/***/ 1170:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler145 {\n\tpublic static void main(String[] args) {\n\t\tint sum=0;\n\t\t\t\t \n\t\tfor(int i=1; i<10; i++) {\n\t\t\tif(i%4==1)\n\t\t\t\tcontinue;\n\t\t\telse if(i%2==0)\n\t\t\t\tsum +=  20*( Utils.pwr(30, (i/2)-1) );\n\t\t\telse if(i%4==3)\n\t\t\t\tsum += 100*( Utils.pwr(500, i/4) );\n\t\t}\n\t\t \n\t\tSystem.out.println(sum);\t//608720\n\t}\n}"

/***/ }),

/***/ 1171:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\n//import java.util.Scanner;\nimport java.math.BigInteger;\n\npublic class euler15 {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(Utils.nCr(new BigInteger(\"40\"), new BigInteger(\"20\")));\n\t}\n}\n\n/*\nStarting in the top left corner of a 2x2 grid, there are 6 routes (without backtracking) to the bottom right corner.\n\nHow many routes are there through a 20x20 grid?\n*/"

/***/ }),

/***/ 1172:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\n\npublic class euler16 {\n    public static void main(String... args) {\n        BigInteger a = new BigInteger(\"4\");\n        a = a.pow(500);\n        System.out.println(a);\n\n        String str = a.toString(10);\n        System.out.println();\n\n        long sum = 0;\n        for(int i=0; i<=301; i++) {\n\t\t\tsum+=Character.digit(str.charAt(i), 10);\n\t\t}\n\t\tSystem.out.println(sum);\n    }\n}\n\n/*\n215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.\n\nWhat is the sum of the digits of the number 21000?\n*/"

/***/ }),

/***/ 1173:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler17 {\n\tpublic static void main(String[] args) {\n\t\tInteger letters = 0,\n\t\toneto99 = 106;\t\t\t\t\t\t\t//There are 106 letters in 1 - 19\n\n\t\tfor(Integer i=20; i<=99; i++) {\n\t\t\tif((i>=20&&i<40)||(i>=80&&i<100)) {\t//twenty,thirty,eighty,ninety\n\t\t\t\toneto99 += 6;\n\t\t\t}\n\t\t\telse if(i>=40&&i<70) {\t\t\t\t//forty,fifty,sixty\n\t\t\t\toneto99 += 5;\n\t\t\t}\n\t\t\telse if(i>=70&&i<80) {\t\t\t\t//seventy\n\t\t\t\toneto99 += 7;\n\t\t\t}\n\n\t\t\t//1 - 9\n\t\t\tif(i%10==1 || i%10==2 || i%10==6) {\n\t\t\t\toneto99+=3;\n\t\t\t}\n\t\t\telse if(i%10==4 || i%10==5 || i%10==9) {\n\t\t\t\toneto99+=4;\n\t\t\t}\n\t\t\telse if(i%10==3 || i%10==7 || i%10==8) {\n\t\t\t\toneto99+=5;\n\t\t\t}\n\t\t}\n\n\t\tSystem.out.println(\"There are \"+oneto99+\" letters in One - Ninety-Nine\");\t//854\n\n\t\tfor(Integer i=100; i<1000; i++) {\n\t\t\t//100 - 900\n\t\t\tif((i>=100&&i<300)||(i>=600&&i<700)) {\n\t\t\t\tletters += 10;\n\t\t\t}\n\t\t\telse if((i>=300&&i<400)||(i>=700&&i<900)) {\n\t\t\t\tletters += 12;\n\t\t\t}\n\t\t\telse if((i>=400&&i<600)||i>=900) {\n\t\t\t\tletters += 11;\n\t\t\t}\n\n\t\t\t//and\n\t\t\tif(i>100 && i%100!=0) {\n\t\t\t\tletters += 3;\n\t\t\t}\n\t\t}\n\n\t\tletters += oneto99*10;\n\t\tletters += 11; //1000\n\t\tSystem.out.println(letters);\n\t}\n}\n\n/*\nIf the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.\n\nIf all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?\n\nNOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of \"and\" when writing out numbers is in compliance with British usage.\n*/\n\n"

/***/ }),

/***/ 1174:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\n//import java.util.Scanner;\n//import java.math.BigInteger;\n\npublic class euler18 {\n\tprivate static int[][] a;\n\tpublic static void main(String[] args) {\n\t\tint[][] array ={{75, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00},\n\t\t\t\t \t\t{95, 64, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00},\n\t\t\t\t \t\t{17, 47, 82, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00},\n\t\t\t\t \t\t{18, 35, 87, 10, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00},\n\t\t\t\t \t\t{20, 04, 82, 47, 65, 00, 00, 00, 00, 00, 00, 00, 00, 00, 00},\n\t\t\t\t \t\t{19, 01, 23, 75, 03, 34, 00, 00, 00, 00, 00, 00, 00, 00, 00},\n\t\t\t\t \t\t{88, 02, 77, 73, 07, 63, 67, 00, 00, 00, 00, 00, 00, 00, 00},\n\t\t\t\t \t\t{99, 65, 04, 28, 06, 16, 70, 92, 00, 00, 00, 00, 00, 00, 00},\n\t\t\t\t \t\t{41, 41, 26, 56, 83, 40, 80, 70, 33, 00, 00, 00, 00, 00, 00},\n\t\t\t\t \t\t{41, 48, 72, 33, 47, 32, 37, 16, 94, 29, 00, 00, 00, 00, 00},\n\t\t\t\t \t\t{53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14, 00, 00, 00, 00},\n\t\t\t\t \t\t{70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57, 00, 00, 00},\n\t\t\t\t \t\t{91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48, 00, 00},\n\t\t\t\t \t\t{63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31, 00},\n\t\t\t\t \t\t{04, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60, 04, 23}};\n\t\ta=array;\n\t\tfor(int i=1; i<=14; i++) {\n\t\t\tflattenRow(i);\n\t\t}\n\t\tfindBiggest();\n\t\tSystem.out.println(a[1][0]);\n\t\tfor(int i=0; i<a.length; i++) {\n\t\t\tUtils.print(a[i]);\n\t\t}\n\t}\n\tstatic void flattenCell(int row, int col) {\n\t\tif(row==0) return;\n\t\tif(col==0) {a[row][col] += a[row-1][col]; return;}\n\t\tif(col==14) {a[row][col] += a[row-1][col-1]; return;}\n\t\t\n\t\tif(a[row-1][col-1]>a[row-1][col]) {\n\t\t\ta[row][col] += a[row-1][col-1];\n\t\t}\n\t\telse {\n\t\t\ta[row][col] += a[row-1][col];\n\t\t}\n\t}\n\tstatic void flattenRow(int row) {\n\t\tfor(int i=0; i<=14; i++) {\n\t\t\tflattenCell(row, i);\n\t\t}\n\t}\n\tstatic void findBiggest() {\n\t\tint ans=0;\n\t\tfor(int i=0; i<=14; i++) {\n\t\t\tif(a[14][i]>ans) ans=a[14][i];\n\t\t}\n\t\tSystem.out.println(ans);\n\t}\n}\n\n/*\nBy starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.\n\n3\n7 4\n2 4 6\n8 5 9 3\n\nThat is, 3 + 7 + 4 + 9 = 23.\n\nFind the maximum total from top to bottom of the triangle below:\n\n75\n95 64\n17 47 82\n18 35 87 10\n20 04 82 47 65\n19 01 23 75 03 34\n88 02 77 73 07 63 67\n99 65 04 28 06 16 70 92\n41 41 26 56 83 40 80 70 33\n41 48 72 33 47 32 37 16 94 29\n53 71 44 65 25 43 91 52 97 51 14\n70 11 33 28 77 73 17 78 39 68 17 57\n91 71 52 38 17 14 91 43 58 50 27 29 48\n63 66 04 68 89 53 67 30 73 16 69 87 40 31\n04 62 98 27 23 09 70 98 73 93 38 53 60 04 23\n\nNOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)\n*/"

/***/ }),

/***/ 1175:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nclass euler19 {\n\tpublic static boolean isLeap(int year) {\n\t\tif( year%400 == 0 ) {\n\t\t\treturn true;\n\t\t}\n\t\telse if( year%100 == 0 ) {\n\t\t\treturn false;\n\t\t}\n\t\telse if( year%4 == 0 ) {\n\t\t\treturn true;\n\t\t}\n\t\telse return false;\n\t}\n\tpublic static void main(String[] args) {\n\t\tint ans = 0;\n\t\tint year = 1900;\n\t\tint month = 1;\n\t\tint[] monthdays = {0,31,28,31,30,31,30,31,31,30,31,30,31};\n\t\tint weekday = 1;\n\n\t\tfor(; year<=2000; year++) {\n\t\t\tfor(; month<=12; month++) {\n\t\t\t\tint daysnumber = monthdays[month];\n\t\t\t\tif(month==2 && isLeap(year))\n\t\t\t\t\tdaysnumber++;\n\t\t\t\tfor(int i=0; i<daysnumber; i++) {\n\t\t\t\t\tif(year>1900 && i==0 && weekday==7) {\n\t\t\t\t\t\tans++;\n\t\t\t\t\t\tSystem.out.println(\"Year=\"+year+\" & Day=\"+i+\" & Weekday=\"+weekday);\n\t\t\t\t\t}\n\t\t\t\t\tweekday++;\n\t\t\t\t\tif(weekday>7)\n\t\t\t\t\t\tweekday=1;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmonth=1;\n\t\t}\n\t\tSystem.out.println(ans+\" Sundays fell on the first of the month during the 20th Century.\");\n\t}\n}\n\n/*\nYou are given the following information, but you may prefer to do some research for yourself.\n\n- 1 Jan 1900 was a Monday.\n- Thirty days has September, April, June and November.\n- All the rest have thirty-one.\n- except February, Which has twenty-eight, rain or shine.\n\t- And on leap years, it has twenty-nine.\n- A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.\n\nHow many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?\n*/"

/***/ }),

/***/ 1176:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler2 {\n\tpublic static void main(String [] args) {\n\t\tint num1=1, num2=1, num3, sum=0, max;\n\t\tmax = 4000000;\n\n\t\twhile(num2 < max) {\n\t\t\tif(num2%2==0) {\n\t\t\t\tsum += num2;\n\t\t\t\tSystem.out.println(num2);\n\t\t\t}\n\t\t\tnum3 = num2;\n\t\t\tnum2 = num1 + num2;\n\t\t\tnum1 = num3;\n\t\t}\n\n\t\tSystem.out.println(\"The Sum of all even Fibonacci numbers below \" + max + \" is \" + sum);\n\t}\n}"

/***/ }),

/***/ 1177:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\n\npublic class euler20 {\n    public static void main(String[] args) {\n        BigInteger a = new BigInteger(\"1\");\n        //BigInteger lim= new BigInteger(\"1\");\n        BigInteger i= new BigInteger(\"100\");\n\t\tfor(int j=1; j<=99; j++) {\n\t\t\tBigInteger jj = new BigInteger(Integer.toString(j));\n\t\t\ta = a.multiply(i.subtract(jj));\n\t\t}\n\n\t\tSystem.out.println(a);\n\n\t\tString str = a.toString(10);\n        System.out.println();\n\n        int sum = 0;\n        for(int x=0; x<=155; x++) {\n\t\t\tsum+=Character.digit(str.charAt(x), 10);\n\t\t}\n\t\tSystem.out.println(sum);\n    }\n}\n\n/*\nn! means n x (n - 1) x ... x 3 x 2 x 1\n\nFind the sum of the digits in the number 100!\n*/"

/***/ }),

/***/ 1178:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.Random;\n\npublic class euler205 {\n\tpublic static void main(String[] args) {\n\t\tClock clock = new Clock();\n\t\tdouble ans = 0;\t\t\n\t\tRandom rand = new Random();\n\t\tint trials = 1000000000;\n\t\tint win=0;\n\t\t\n\t\tfor(int i=1; i<=trials; i++) {\n\t\t\tint peter=0, colin=0;\n\t\t\tfor(int p=1; p<=9; p++)\n\t\t\t\tpeter += rand.nextInt(4)+1;\n\t\t\tfor(int c=1; c<=6; c++)\n\t\t\t\tcolin += rand.nextInt(6)+1;\n\t\t\tif(peter>colin) win++;\n\t\t}\n\t\t\n\t\tans = (double)win/trials;\n\t\tclock.getTimeSeconds();\n\t\tSystem.out.println(ans);\t//0.5731441\n\t} \n}"

/***/ }),

/***/ 1179:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler206 {\n\tpublic static void main(String[] args) {\n\t\tlong \tstart = 1000000000,\n\t\t\t\tend   = 1389026723;\n\t\t\n\t\tfor(long x = start+30; x<end; x+=100)\n\t\t\tif(test(x*x)) System.out.println(x);\n\t\tfor(long x = start+70; x<end; x+=100)\n\t\t\tif(test(x*x)) System.out.println(x);\n\t\t\n\t\t//1389019170\n\t}\n\tprivate static boolean test(long l) {\n\t\tString s = Long.toString(l);\n\t\tchar c = '1';\n\t\tfor(int i=0; i<s.length()-2; i+=2) {\n\t\t\tif(s.charAt(i) != c) return false;\n\t\t\tc = Character.toChars( c+1 )[0];\n\t\t}\n\t\tif(s.charAt(18) != '0') return false;\n\t\t\n\t\treturn true;\n\t}\n}"

/***/ }),

/***/ 1180:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\n//import java.math.BigInteger;\n\npublic class euler21 {\n\tboolean alreadythere(int[] a, int val) {\n\t\tfor(int i=0; i<a.length; i++) {\n\t\t\tif(a[i]==val)\n\t\t\t\treturn false;\n\t\t}\n\t\treturn true;\n\t}\n\tpublic static void main(String[] anabelle) {\n\t\tUtils utils = new Utils();\n\t\tshort[][] a = new short[10000][10000];\n\n\t\tfor(short i=1; i<=10000; i++) {\n\t\t\ta[0][i-1]=i;\n\t\t\ta[1][i-1]=utils.sumOfDivisors(i);\n\t\t}\n\n\t\t//System.out.println(a[0][10000-1] +\" \"+ a[1][10000-1]);\n\n\t\tint ans=0;\n\n\t\tfor(short i=1; i<=10000; i++) {\n\t\t\tfor(short j=1; j<=10000; j++) {\n\t\t\t\tif(i==j) continue;\n\t\t\t\tif(a[1][i-1]==a[0][j-1]&&a[0][i-1]==a[1][j-1]) {\n\t\t\t\t\tSystem.out.println(a[0][i-1] +\" \"+ a[1][i-1]);\n\t\t\t\t\tSystem.out.println(a[0][j-1] +\" \"+ a[1][j-1]);\n\t\t\t\t\tans+=a[0][i-1]+a[0][j-1];\n\t\t\t\t\tSystem.out.println(ans);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tSystem.out.println(\"Answer: \"+ans/2);\n\t}\n}\n\n/*\nLet d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).\nIf d(a) = b and d(b) = a, where a != b, then a and b are an amicable pair and each of a and b are called amicable numbers.\n\nFor example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.\n\nEvaluate the sum of all the amicable numbers under 10000.\n*/"

/***/ }),

/***/ 1181:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.Scanner;\nimport java.io.*;\n\nclass Sort {\n\tvoid QuickSort(String a[], int lo0, int hi0) {\n\t\tint lo = lo0;\n\t\tint hi = hi0;\n\t\tString mid;\n\n\t\tif (hi0 > lo0) {\n\n\t\t\t/*\n\t\t\t * Arbitrarily establishing partition element as the midpoint of the\n\t\t\t * array.\n\t\t\t */\n\t\t\tmid = a[(lo0 + hi0) / 2];\n\n\t\t\t// loop through the array until indices cross\n\t\t\twhile (lo <= hi) {\n\t\t\t\t/*\n\t\t\t\t * find the first element that is greater than or equal to the\n\t\t\t\t * partition element starting from the left Index.\n\t\t\t\t */\n\t\t\t\twhile ((lo < hi0) && (a[lo].compareTo(mid) < 0))\n\t\t\t\t\t++lo;\n\n\t\t\t\t/*\n\t\t\t\t * find an element that is smaller than or equal to the\n\t\t\t\t * partition element starting from the right Index.\n\t\t\t\t */\n\t\t\t\twhile ((hi > lo0) && (a[hi].compareTo(mid) > 0))\n\t\t\t\t\t--hi;\n\n\t\t\t\t// if the indexes have not crossed, swap\n\t\t\t\tif (lo <= hi) {\n\t\t\t\t\tString t = a[hi];\n\t\t\t\t\ta[hi] = a[lo];\n\t\t\t\t\ta[lo] = t;\n\n\t\t\t\t\t++lo;\n\t\t\t\t\t--hi;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/*\n\t\t\t * If the right index has not reached the left side of array must\n\t\t\t * now sort the left partition.\n\t\t\t */\n\t\t\tif (lo0 < hi)\n\t\t\t\tQuickSort(a, lo0, hi);\n\n\t\t\t/*\n\t\t\t * If the left index has not reached the right side of array must\n\t\t\t * now sort the right partition.\n\t\t\t */\n\t\t\tif (lo < hi0)\n\t\t\t\tQuickSort(a, lo, hi0);\n\n\t\t}\n\t}\n}\n\npublic class euler22 {\n\tstatic void display(String[] a) {\n\t\tSystem.out.print(\"Data:\");\n\t\tfor (int i = 0; i<a.length; i++)\n\t\t\tSystem.out.print(a[i] + \" \");\n\t\tSystem.out.println(\"\");\n\t}\n\n\tstatic int StringtoAlphabeticalValue(String str) {\n\t\tint ans=0;//A=65\n\n\t\tfor(int i=0; i<str.length(); i++) {\n\t\t\tans += ChartoAlphabeticalValue(str.charAt(i));\n\t\t}\n\n\t\treturn ans;\n\t}\n\tstatic int ChartoAlphabeticalValue(char c) {\n\t\tif(c=='A'||c=='a')\n\t\t\treturn 1;\n\t\telse if(c=='B'||c=='b')\n\t\t\treturn 2;\n\t\telse if(c=='C'||c=='c')\n\t\t\treturn 3;\n\t\telse if(c=='D'||c=='d')\n\t\t\treturn 4;\n\t\telse if(c=='E'||c=='E')\n\t\t\treturn 5;\n\t\telse if(c=='F'||c=='f')\n\t\t\treturn 6;\n\t\telse if(c=='G'||c=='g')\n\t\t\treturn 7;\n\t\telse if(c=='H'||c=='h')\n\t\t\treturn 8;\n\t\telse if(c=='I'||c=='i')\n\t\t\treturn 9;\n\t\telse if(c=='J'||c=='j')\n\t\t\treturn 10;\n\t\telse if(c=='K'||c=='k')\n\t\t\treturn 11;\n\t\telse if(c=='L'||c=='l')\n\t\t\treturn 12;\n\t\telse if(c=='M'||c=='m')\n\t\t\treturn 13;\n\t\telse if(c=='N'||c=='n')\n\t\t\treturn 14;\n\t\telse if(c=='O'||c=='o')\n\t\t\treturn 15;\n\t\telse if(c=='P'||c=='p')\n\t\t\treturn 16;\n\t\telse if(c=='Q'||c=='q')\n\t\t\treturn 17;\n\t\telse if(c=='R'||c=='r')\n\t\t\treturn 18;\n\t\telse if(c=='S'||c=='s')\n\t\t\treturn 19;\n\t\telse if(c=='T'||c=='t')\n\t\t\treturn 20;\n\t\telse if(c=='U'||c=='u')\n\t\t\treturn 21;\n\t\telse if(c=='V'||c=='v')\n\t\t\treturn 22;\n\t\telse if(c=='W'||c=='w')\n\t\t\treturn 23;\n\t\telse if(c=='X'||c=='x')\n\t\t\treturn 24;\n\t\telse if(c=='Y'||c=='y')\n\t\t\treturn 25;\n\t\telse if(c=='Z'||c=='z')\n\t\t\treturn 26;\n\t\telse\n\t\t\treturn 0;\n\t}\n\n\tpublic static void main(String[] thor) throws Exception {\n\t\tlong time = System.currentTimeMillis();\n\t\tScanner s = new Scanner(new File(\"names.txt\"));\n\t\tString names = s.nextLine();\n\n\t\tString[] a = new String[5163];\n\n\t\tint numnames=0;\n\t\tfor(int i=1; i<46447; i++) {\n\t\t\ta[numnames]=\"\";\n\t\t\twhile(names.charAt(i)!='\"') {\n\t\t\t\ta[numnames]+=names.charAt(i);\n\t\t\t\ti++;\n\t\t\t}\n\t\t\tnumnames++;\n\t\t\ti+=2;\n\t\t}\n\n\t\t//display(a);\n\n\t\tSort sorter = new Sort();\n\t\tsorter.QuickSort(a,0,5162);\n\t\t//display(a);\n\n\t\tlong answer = 0;\n\n\t\tfor(int i=0; i<5163; i++) {\n\t\t\tanswer+= StringtoAlphabeticalValue(a[i])*(i+1);\n\t\t}\n\t\tSystem.out.println(answer);\n\t\ttime = System.currentTimeMillis()-time;\n\t\tSystem.out.println(\"Time taken: \"+time*.001+\" seconds\");\n\t}\n}\n\n/*\nUsing names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.\n\nFor example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938\t53 = 49714.\n\nWhat is the total of all the name scores in the file?\n*/\n/*\nclass ShellSort {\n\tpublic static void main(String[] args) {\n\t\tint maxSize = 10;\n\t\tShellSort arr = new ShellSort(maxSize);\n\n\t\tfor (int j = 0; j < maxSize; j++) {\n\t\t\tlong n = (int) (java.lang.Math.random() * 99);\n\t\t\tarr.insert(n);\n\t\t}\n\t\tarr.display();\n\t\tarr.shellSort();\n\t\tarr.display();\n\t}\n}\n*/"

/***/ }),

/***/ 1182:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.ArrayList;\nimport java.util.Iterator;\n\npublic class euler23 {\n  public static void main(String[] args){\n    ArrayList<Integer> abundants = new ArrayList<Integer>();\n    for(int i = 1; i <= 28123; i++){\n       int j = divisors(i);\n       if(j > i){\n         abundants.add(i);\n       }\n     }\n     int[] array = new int[28123];\n     int len = array.length;\n     for(int i = 0; i < len; i++){\n       array[i] = i + 1;\n     }\n     Iterator<Integer> it = abundants.iterator();\n     while(it.hasNext()){\n       int one = (Integer) it.next();\n       for(int j = 0; j < abundants.size(); j++){\n         int sum = one + (Integer)abundants.get(j);\n         if(sum <= len){\n           array[sum - 1] = 0;\n         }\n       }\n       it.remove();//remove it as checked against ALL numbers\n    } \n    int sum = 0;\n     len = array.length;\n     for(int i = 0; i < len; i++){\n       sum += array[i];\n     }\n     System.out.println(sum);\n   }\n   public static int divisors(int number){\n     int d = (int) Math.sqrt(number) + 1;\n     int sum = 1;\n     for(int i = 2; i < d; i++){\n       if(number % i == 0){\n         sum += i;\n         if(i != (number / i)){\n           sum += (number / i);\n         }\n       }\n     }\n     return sum;\n   }\n}\n\n/*\nA perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 \nwould be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.\n\nA number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.\n\nAs 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. \nBy mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper \nlimit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant \nnumbers is less than this limit.\n\nFind the sum of all the positive integers which cannot be written as the sum of two abundant numbers.\n*/"

/***/ }),

/***/ 1183:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.ArrayList;\n\npublic class euler233 {\n\tstatic long[] primes;\n\tpublic static void main(String[] args) {\n\t\t//System.out.println(f(1047625));\n\t\tClock c = new Clock();\n\t\t\n\t\t/*System.out.println(f(1328125)+\" = 180?\");\n\t\tSystem.out.println(f(84246500)+\" = 420?\");\n\t\tSystem.out.println(f(248431625)+\" = 420?\");\n\t\t\n\t\tc.getTimeSeconds();\n\t\tc.reset();*/\n\t\t\n\t\tlong ans = 0;\t//Math.pow(10, 11)\n\t\t//25*13=325\n\t\t//25*17=425\n\t\t//for N<38000000, ans = 30875234922\n\t\t\t\t\t\t\t  //12726092900\n\t\tfor(int N=0; N<=38000000; N++) {\n\t\t\tif( N%13==0 || N%17==0 )\n\t\t\tif( f(N)==420 ) {\n\t\t\t\tans += N;\n\t\t\t\t//System.out.println(N);\n\t\t\t}\n\t\t\tSystem.out.println( N + \" - \" + f(N) );\n\t\t}\n\t\tSystem.out.println(ans);\n\t\tc.getTimeSeconds();\n\t}\n\tstatic long f(long N) {\n\t\treturn SquaresR2(N*N);\n\t}\n\tstatic boolean isIntLong(double a) {\n\t\tif(a==(double)(long)a) return true;\n\t\treturn false;\n\t}\n\tstatic int SquaresR2(long n) {\n\t\tArrayList<long[]> a = PFacWPowersLong(primeFactors(n));\n\t\tint ans = 4;\n\t\t\n\t\tfor(int i=0; i<a.size(); i++) {\n\t\t\tlong[] temp = a.get(i);\n\t\t\t//Utils.print(temp);\n\t\t\tif(temp[0]==2) continue;\n\t\t\tif(isP(temp[0]) && temp[1]%2==0) return 0;\n\t\t\tif(isQ(temp[0])) ans*= temp[1]+1;\n\t\t}\n\t\treturn ans;\n\t}\n\tprivate static boolean isQ(long x) {\n\t\tdouble temp = (double)x;\n\t\tif( isIntLong((temp-1)/4) ) return true;\n\t\treturn false;\n\t}\n\tprivate static boolean isP(long x) {\n\t\tdouble temp = (double)x;\n\t\tif( isIntLong( ((temp-3)/4) ) ) return true;\n\t\treturn false;\n\t}\n\tpublic static ArrayList<Long> primeFactors(long numbers) {\n\t\tlong n = numbers; \n\t\tArrayList<Long> factors = new ArrayList<Long>();\n\t\tfor (long i = 2; i <= n / i; i++) {\n\t\t\twhile (n % i == 0) {\n\t\t\t\tfactors.add(i);\n\t\t\t\tn /= i;\n\t\t\t}\n\t\t}\n\t\tif (n > 1)\n\t\t\tfactors.add(n);\n\t\treturn factors;\n\t}\n\tpublic static ArrayList<long[]> PFacWPowersLong(ArrayList<Long> a) {\n\t\tArrayList<long[]> ans = new ArrayList<long[]>();\n\t\tint lim = a.size();\n\t\tfor(int i=0; i<lim; i++) {\n\t\t\tlong temp = a.get(i);\n\t\t\tint sum = 1;\n\t\t\twhile(i+1<lim && a.get(i+1) == temp) {\n\t\t\t\tsum++;\n\t\t\t\ta.remove(i+1);\n\t\t\t\tlim--;\n\t\t\t}\n\t\t\tlong[] out = {temp,sum};\n\t\t\tans.add(out);\n\t\t}\n\t\treturn ans;\n\t}\n}\n/*\n359125\n469625\n612625\n718250\n781625\n866125\n933725\n939250\n1047625\n1119625\n1225250\n1288625\n1336625\n1366625\n1436500\n1481125\n1542125\n1563250\n1592825\n1596725\n1732250\n */\n/*\n271204031455541309\n(x+(N/2))^2 + (y+(N/2))^2 = r^2\ny = Math.sqrt( r*r - (x+(N/2))*(x+(N/2)) )-(N/2);\nr = Math.sqrt( 2 * n^2 ) /2\n*/\n/*System.out.println(r(1328125));\n\nSystem.out.println(f(10000));\nc.getTimeSeconds();\nc.reset();\n\nSystem.out.println(f(1328125));\nc.getTimeSeconds();\n\n\nLongPrimeSieve sieve = new LongPrimeSieve(10000000L);\nsieve.find_primes();\nprimes = sieve.primes;\n\n\nSystem.out.println(\"start\");\nClock clock = new Clock();\nwhile(true) {\n\tint i = new Scanner(System.in).nextInt();\n\tif(i==0) break;\n\tclock.reset();\n\tSystem.out.println(f2( primes[i] ));\n\tclock.getTimeSeconds();\n}\nif(true) return;\n\nSystem.out.println(f(1328125));\nSystem.out.println(f(84246500));\nSystem.out.println(f(248431625));\n\nlong ans = 0;\nfor(int N=1; N<=primes.length; N++) {\n\tSystem.out.println(primes[N]);\n\tif( f2(primes[N])==420 ) {\n\t\tans+= primes[N];\n\t\tSystem.out.println(N);\n\t}\n}\nSystem.out.println(ans);*/"

/***/ }),

/***/ 1184:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler243 {\n\tpublic static void main(String[] args) {\n\t\tdouble limit = 15499.0/94744;\n\t\tint ans = 0;\n\t\tint i = 12;\n\t\t//int[] primes = primeSieve.sieve(1000000000);\n\t\t\n\t\twhile(true) {\n\t\t\ti++;\n\t\t\tif(Utils.totient(i)/(i-1.0)<limit) {\n\t\t\t\tans = i;\n\t\t\t\tSystem.out.println(ans);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tif(i%1000==0) {\n\t\t\t\tSystem.out.println(i);\n\t\t\t}\n\t\t}\n\t\t\n\t\tSystem.out.println(ans);\t//892371480\n\t}\n}\n\n//totient function is too slow for this.."

/***/ }),

/***/ 1185:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\n//import java.util.Scanner;\nimport java.math.BigInteger;\n\npublic class euler25 {\n\tpublic static void main(String[] args) {\n\t\t//Scanner reader = new Scanner(System.in);\n\t\tBigInteger a = new BigInteger(\"1\");\n\t\tBigInteger b = new BigInteger(\"1\");\n\t\tBigInteger c = new BigInteger(\"0\");\n\t\tint f = 2;\n\n\t\twhile((a.toString()).length()<1000) {\n\t\t\tSystem.out.println(a);\n\t\t\tc=a;\n\t\t\ta=a.add(b);\n\t\t\tb=c;\n\t\t\tf++;\n\t\t}\n\t\tSystem.out.println(f);\n\t}\n}\n\n/*\nThe Fibonacci sequence is defined by the recurrence relation:\n\nFn = Fn-1 + Fn-2, where F1 = 1 and F2 = 1.\nHence the first 12 terms will be:\n\nF1 = 1\nF2 = 1\nF3 = 2\nF4 = 3\nF5 = 5\nF6 = 8\nF7 = 13\nF8 = 21\nF9 = 34\nF10 = 55\nF11 = 89\nF12 = 144\nThe 12th term, F12, is the first term to contain three digits.\n\nWhat is the first term in the Fibonacci sequence to contain 1000 digits?\n*/"

/***/ }),

/***/ 1186:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigDecimal;\n//import java.util.Scanner;\n\npublic class euler26 {\n\tpublic static void main(String[] args) throws InterruptedException {\n\t\t//System.out.println(BigDecimal.ONE.divide(new BigDecimal(983),10000,0));\n\t\tlong time = System.currentTimeMillis();\n\t\tint ans = 0;\n\t\tfor(\tBigDecimal i=new BigDecimal(7);\n\t\t\t\ti.compareTo(new BigDecimal(1000))==-1;\n\t\t\t\ti=i.add(BigDecimal.ONE)) {\n\t\t\tif(d(i)>ans) ans=Integer.parseInt(i.toString());\n\t\t}\n\t\tSystem.out.println(ans);\n\t\tSystem.out.println(\"Time Taken: \"+(System.currentTimeMillis()-time)/1000+\" seconds\");\n\t}\n\tstatic int d(BigDecimal x) throws InterruptedException {\n\t\tx = new BigDecimal(1).divide(x,10000,0);\n\t\tString s = x.toString();\n\t\ts = s.substring(2);\n\t\twhile(s.charAt(0)=='0')\n\t\t\ts = s.substring(1);\n\t\t//System.out.println(s);\n\t\t//Thread.sleep(500);\n\t\t\n\t\tint ans = 0;\n\t\tint a = 1;\n\t\tint x1=0;\n\t\tint y1=1;\n\t\twhile(true) {\n\t\t\ttry {\n\t\t\tif(s.substring(x1,y1).equals(s.substring(x1+a,y1+a))) {ans = a; break;}\n\t\t\telse {y1++; a++;}\n\t\t\t} catch(Exception E) {return 0;}\n\t\t}\n\t\t//System.out.print(ans+\" \"+s+\"/n\");\n\t\t//new Scanner(System.in).nextLine();\n\t\treturn ans;\n\t}\n}\n/*\nA unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:\n\n1/2\t= \t0.5\n1/3\t= \t0.(3)\n1/4\t= \t0.25\n1/5\t= \t0.2\n1/6\t= \t0.1(6)\n1/7\t= \t0.(142857)\n1/8\t= \t0.125\n1/9\t= \t0.(1)\n1/10\t= \t0.1\nWhere 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.\n\nFind the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.\n*/"

/***/ }),

/***/ 1187:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\nimport java.util.ArrayList;\n\npublic class euler265 {\n\tpublic static void main(String[] args) {\n\t\t//32 digits\n\t\t//000101 = 101\n\t\tBigInteger i, lim=new BigInteger(\"11111111111111111111111111111111\"), one=BigInteger.ONE, ans=BigInteger.ZERO;\n\t\tfor(i = new BigInteger(\"00010000000000000000000000000000\"); i.compareTo(lim)<=0; i=i.add(one)) {\n\t\t\t/*ArrayList<Short> a = new ArrayList<Short>();\n\t\t\tfor(int j=0; j<32; j++) {\n\t\t\t\ta.add( (short)Integer.parseInt(Character.toString(i.toString().charAt(j))) );\n\t\t\t}*/\n\t\t\tString s = i.toString();\n\t\t\tif(!works(s)) continue;\n\t\t\telse ans = ans.add(i);\n\t\t}\n\t\tSystem.out.println(ans);\n\t}\n\tprivate static boolean works(String s) {\n\t\tArrayList<String> stack = new ArrayList<String>();\n\t\tint length = s.length();\n\t\tString t = \"\";\n\t\tfor(int i=0; i<length-2; i++) {\n\t\t\tt = s.substring(i, i+3);\n\t\t\tif(stack.contains(t)) return false;\n\t\t\tstack.add(t);\n\t\t}\n\t\tt = s.substring(length-2, length) + s.substring(0, 1);\n\t\tif(stack.contains(t)) return false;\n\t\tstack.add(t);\n\t\tt = s.substring(length-1, length) + s.substring(0, 2);\n\t\tif(stack.contains(t)) return false;\n\t\treturn true;\n\t}\n}"

/***/ }),

/***/ 1188:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler27 {\n\t@SuppressWarnings(\"static-access\")\n\tpublic static void main(String[] domination) {\n\t\tUtils utils = new Utils();\n\t\tint ans=0;\n\n\t\tfor(int a=-1000; a<1000; a++) {\n\t\t\tfor(int b=-1000; b<1000; b++) {\n\t\t\t\tint run=0;\n\t\t\t\tfor(int n=0; n<1000; n++) {\n\t\t\t\t\tif(utils.isPrime(n*n + a*n + b)) {\n\t\t\t\t\t\trun++;\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\telse break;\n\t\t\t\t}\n\t\t\t\tif(run>ans) {\n\t\t\t\t\tans=run;\n\t\t\t\t\tSystem.out.println(\"a= \"+a+\", b= \"+b+\", primes= \"+run+\" and ans= \"+(a*b));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n\n/*\nEuler published the remarkable quadratic formula:\n\nn� + n + 41\n\nIt turns out that the formula will produce 40 primes for the consecutive values n = 0 to 39. However, when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41� + 41 + 41 is clearly divisible by 41.\n\nUsing computers, the incredible formula  n�  79n + 1601 was discovered, which produces 80 primes for the consecutive values n = 0 to 79. The product of the coefficients, 79 and 1601, is 126479.\n\nConsidering quadratics of the form:\n\nn� + an + b, where |a|  1000 and |b|  1000\n\n\t\twhere |n| is the modulus/absolute value of n\n\t\te.g. |11| = 11 and |4| = 4\n\nFind the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.\n*/"

/***/ }),

/***/ 1189:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler277 {\n\tpublic static void main(String[] args) {\n\t\tString sol = \"UDDDUdddDDUDDddDdDddDDUDDdUUDd\";\n\t\tClock c = new Clock();\n\t\t//long limit = (long)Math.pow(10, 15);\n\t\tlong i = (long)Math.pow(10, 15);\n\t\t\n\t\tSystem.out.println(generate(1125977393124310L));\n\t\tSystem.out.println(tryThis(1L));\n\t\t\n\t\tlong q = 335;//353\n\t\t\n\t\twhile(q<=400) {\n\t\t\tSystem.out.println(generate(q));\n\t\t\tq+=6;\n\t\t}\n\t\tSystem.out.println();\n\t\t\n\t\t\n\t\t\n\t\twhile(true) {\n\t\t\t//System.out.println(i +\" \"+ tryThis(i));\n\t\t\tif( tryThis(i) ) {\n\t\t\t\tSystem.out.println(i);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\telse {\n\t\t\t\ti++;\n\t\t\t}\n\t\t\t  if(i==Math.pow(10, 15)+1000000) break;\n\t\t\t//if(i==Math.pow(10, 15)+125977393124310L) break;\n\t\t}\n\t\t\n\t\tc.getTimeSeconds();\n\t\tSystem.out.println(\"done\");\t//1125977393124310\n\t}\n\t\n\tpublic static String generate(long num) {\n\t\tString ans = \"\";\n\t\tString debug = num+\" \";\n\t\tString debug2 = num%3+\" \";\n\t\tString debug3 = num%2+\" \";\n\t\t\n\t\tfor(int i=0; i<30; i++) {\n\t\t\tif(num % 3 == 0) {\n\t\t\t\tans += \"D\";\n\t\t\t\tnum /= 3;\n\t\t\t\tdebug2 += \" \"+0;\n\t\t\t\tdebug3 += \" \"+num%2;\n\t\t\t}\n\t\t\telse if(num % 3 == 1) {\n\t\t\t\tans += \"U\";\n\t\t\t\tnum = (4*num + 2)/3;\n\t\t\t\tdebug2 += \" \"+1;\n\t\t\t\tdebug3 += \" \"+num%2;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tans += \"d\";\n\t\t\t\tnum = (2*num - 1)/3;\n\t\t\t\tdebug2 += \" \"+2;\n\t\t\t\tdebug3 += \" \"+num%2;\n\t\t\t}\n\t\t\tdebug += \" \"+num;\n\t\t\t//if(num==1) break;\n\t\t}\n\t\t\n\t\t//System.out.println(debug);\n\t\t//System.out.println(debug2);\n\t\t//System.out.println(debug3);\n\t\treturn ans;\n\t}\n\t\n\tpublic static boolean tryThis(long num) {\n\t\tString sol = \"UDDDUdddDDUDDddDdDddDDUDDdUUDd\";\n\t\tString ans = \"\";\n\t\t\n\t\tfor(int i=0; i<30; i++) {\n\t\t\twhile(num % 3 == 0) {\n\t\t\t\tans += \"D\";\n\t\t\t\tnum /= 3;\n\t\t\t\ti++;\n\t\t\t}\n\t\t\tif(num % 3 == 1) {\n\t\t\t\tans += \"U\";\n\t\t\t\tnum = (4*num + 2)/3;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tans += \"d\";\n\t\t\t\tnum = (2*num - 1)/3;\n\t\t\t}\n\t\t\tif(ans.charAt(i) != sol.charAt(i))\n\t\t\t\treturn false;\n\t\t}\n\t\t\n\t\treturn true;\n\t}\n}"

/***/ }),

/***/ 1190:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler28 {\n\tpublic static void main(String[] args) {\n\t\tint ans = 1;\n\t\tint tot = 1;\n\t\tfor(int i=2; i<=1000; i+=2) {\n\t\t\tfor(int j=1; j<=4; j++) {\n\t\t\t\ttot +=i;\n\t\t\t\tans+=tot;\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(ans);\n\t}\n}"

/***/ }),

/***/ 1191:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\nimport java.util.ArrayList;\n\npublic class euler29 {\n\tpublic static void main(String[] args) {\n\t\tArrayList<BigInteger> a = new ArrayList<BigInteger>();\n\t\tfor(int x=2; x<=100; x++) {\n\t\t\tfor(int y=2; y<=100; y++) {\n\t\t\t\tBigInteger b = Utils.pwr(new BigInteger(Integer.toString(x)), y);\n\t\t\t\tif(!a.contains(b)) a.add(b);\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(a.size());\n\t}\n}\n/*\nConsider all integer combinations of ab for 2  a  5 and 2  b  5:\n\n22=4, 23=8, 24=16, 25=32\n32=9, 33=27, 34=81, 35=243\n42=16, 43=64, 44=256, 45=1024\n52=25, 53=125, 54=625, 55=3125\nIf they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms:\n\n4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125\n\nHow many distinct terms are in the sequence generated by ab for 2  a  100 and 2  b  100?\n*/"

/***/ }),

/***/ 1192:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler3 {\n\tpublic static void main(String [] args) {\n\t\tClock c = new Clock();\n\t\tlong num=600851475143L;\n\t\tint fac=1;\n\n\t\twhile(fac < num && fac > 0) {\n\t\t\tif(num%fac==0)\n\t\t\t\tSystem.out.println(fac);\n\n\t\t\tfac = fac+2;\n\t\t}\n\t\tc.getTimeSeconds();\n\t}\n}"

/***/ }),

/***/ 1193:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler30 {\n\tpublic static void main(String[] claymore) throws Exception {\n\t\tint sum=0;\n\t\tfor(int i=2; i<=354294; i++) {\n\t\t\tif(i==meth(i, 5)) {\n\t\t\t\tsum+=i;\n\t\t\t\tSystem.out.println(\"Number: \"+i+\", Sum now=\"+sum);\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(\"Answer: \"+sum);\n\t}\n\n\tstatic int meth(int a, int b) throws Exception {\n\t\tint ans=0;\n\t\tfor(int i=String.valueOf(a).trim().length(); i>0; i--) {\n\t\t\tans+=Utils.pwr(Utils.numAt(a, i), b);\n\t\t}\n\t\treturn ans;\n\t}\n}\n\n/*\nSurprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:\n\n1634 = 1^4 + 6^4 + 3^4 + 4^4\n8208 = 8^4 + 2^4 + 0^4 + 8^4\n9474 = 9^4 + 4^4 + 7^4 + 4^4\nAs 1 = 1^4 is not a sum it is not included.\n\nThe sum of these numbers is 1634 + 8208 + 9474 = 19316.\n\nFind the sum of all the numbers that can be written as the sum of fifth powers of their digits.\n*/"

/***/ }),

/***/ 1194:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler301 {\n\tpublic static void main(String[] args) {\n\t\tint ans=0;\n\t\tfor(int i=1; i<=(1<<30); i++)\n\t\t\tif( (i^(2*i)^(3*i)) == 0 ) ans++;\n\t\tSystem.out.println(ans);\n\t}\n}"

/***/ }),

/***/ 1195:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler31 {\n\tstatic int[] S = {1,2,5,10,20,50,100,200};\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(count(200, 7));\n\t}\n\tstatic int count(int n, int m) {\n\t\tif(n==0)\n\t\t\treturn 1;\n\t\telse if(n<0)\n\t\t\treturn 0;\n\t\telse if(m<0 && n>=1)\n\t\t\treturn 0;\n\t\treturn count(n,m-1)+count(n-S[m],m);\n\t}\n}\n/*\nfunc count( n, m )\ninitialize table with base cases\n\nfor i from 0 to n\n  for j from 0 to m\n    table[ i, j ] = table[ i - S_j, j ] + table[ i, j - 1 ]\n\nreturn table[ n, m ]\n********************************************************************\ndef count( n, m ):\n    if n == 0:\n        return 1\n    if n < 0:\n        return 0\n    if m < 0 and n >= 1:\n        return 0\n \n    return count( n, m - 1 ) + count( n - S[m], m )\n*/"

/***/ }),

/***/ 1196:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler310 {\n\tpublic static void main(String[] args) {\n\t\t\n\t\t\n\t\t//2586528661783\n\t}\n}"

/***/ }),

/***/ 1197:
/***/ (function(module, exports) {

module.exports = "import java.util.ArrayList;\n\n/*\n * Andrew Koroluk\n */\n\npublic class euler32 {\n\tpublic static void main(String[] args) {\n\t\tArrayList<Integer> a = new ArrayList<Integer>();\n\t\tint[] nums = new int[10];\n\t\tfor(int i=2; i<100; i++)\n\t\t\tfor(int j=1; j<10000/i+1; j++) {\n\t\t\t\tboolean br = false;\n\t\t\t\tString a1 = Integer.toString(i);\n\t\t\t\tString b = Integer.toString(j);\n\t\t\t\tString c = Integer.toString(i*j);\n\t\t\t\tString d = a1+b+c;\n\t\t\t\tif(d.length()<9) {j*=10; continue;}\n\t\t\t\tif(d.length()>9) break;\n\t\t\t\tfor(int x=0; x<9; x++) {\n\t\t\t\t\tint y = Integer.parseInt(Character.toString(d.charAt(x)));\n\t\t\t\t\tif(y==0) {br=true; break;}\n\t\t\t\t\tif(nums[y]==1) {br=true; break;}\n\t\t\t\t\telse nums[y]=1;\n\t\t\t\t}\n\t\t\t\tnums = new int[10];\n\t\t\t\tif(br) continue;\n\t\t\t\tif(!a.contains(i*j)) a.add(i*j);\n\t\t\t}\n\t\tint ans = 0;\n\t\tfor(int i=0; i<a.size(); i++) ans+=a.get(i);\n\t\tSystem.out.println(a);\n\t\tSystem.out.println(ans);\n\t}\n}"

/***/ }),

/***/ 1198:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler33 {\n\tpublic static void main(String[] args) {\n\t\tfor(int n=10; n<100; n++) {\n\t\t\tfor(int m=10; m<100; m++) {\n\t\t\t\tchar a = Integer.toString(n).charAt(0);\n\t\t\t\tchar b = Integer.toString(n).charAt(1);\n\t\t\t\tchar c = Integer.toString(m).charAt(0);\n\t\t\t\tchar d = Integer.toString(m).charAt(1);\n\t\t\t\tif(b=='0' && d=='0') continue;\n\t\t\t\tif(n>=m) continue;\n\t\t\t\tif(a==c) {\n\t\t\t\t\tif(b=='0' || d=='0') continue;\n\t\t\t\t\tif((float)n/(float)m==(float)f(b)/(float)f(d)) {\n\t\t\t\t\t\tSystem.out.println(n+\" \"+m);\n\t\t\t\t\t\tSystem.out.println(a+\"\"+b+\"/\"+c+\"\"+d+\" = \"+b+\"/\"+d);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif(b==d) {\n\t\t\t\t\tif(a=='0' || c=='0') continue;\n\t\t\t\t\tif((float)n/(float)m==(float)f(a)/(float)f(c)) {\n\t\t\t\t\t\tSystem.out.println(n+\" \"+m);\n\t\t\t\t\t\tSystem.out.println(a+\"\"+b+\"/\"+c+\"\"+d+\" = \"+a+\"/\"+c);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif(b==c) {\n\t\t\t\t\tif(a=='0' || d=='0') continue;\n\t\t\t\t\tif((float)n/(float)m==(float)f(a)/(float)f(d)) {\n\t\t\t\t\t\tSystem.out.println(n+\" \"+m);\n\t\t\t\t\t\tSystem.out.println(a+\"\"+b+\"/\"+c+\"\"+d+\" = \"+a+\"/\"+d);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\tstatic int f(char a) {\t//char to int\n\t\treturn Integer.parseInt(Character.toString(a));\n\t}\n}"

/***/ }),

/***/ 1199:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler34 {\n\tpublic static void main(String[] args) throws Exception {\n\t\tint ans = 0;\n\t\tfor(int i=10; i<99999; i++) {\n\t\t\tint size = Integer.toString(i).length();\n\t\t\tint duh = 0;\n\t\t\tfor(int x=1; x<=size; x++) {\n\t\t\t\tduh+=Utils.factorial(Utils.numAt(i,x));\n\t\t\t}\n\t\t\tif(i==duh) {\n\t\t\t\tSystem.out.println(i);\n\t\t\t\tans+=i;\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(ans);\n\t}\n}"

/***/ }),

/***/ 1200:
/***/ (function(module, exports) {

module.exports = "import java.util.ArrayList;\n\n/*\n * Andrew Koroluk\n * Project Euler - 35\n */\n\n//import java.util.Scanner;\n\npublic class euler35\n{\n\tpublic static void main(String [] args)\n\t{\n\t\tint ans=0;\n\t\tfor(int i=2; i<=100; i++) {\n\t\t\t\n\t\t}\n\t\tSystem.out.println(\"Answer: \"+ans);\n\t\t//System.out.println(String.valueOf(a).trim().length());\n\t}\n\tstatic ArrayList<Integer> rotate(int x) {\n\t\tArrayList<Integer> list = new ArrayList<Integer>();\n\t\treturn list;\n\t}\n}\n\n/*\nThe number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.\nThere are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.\nHow many circular primes are there below one million?\n*/"

/***/ }),

/***/ 1201:
/***/ (function(module, exports) {

module.exports = "��/\u0000*\u0000\r\u0000\n\u0000 \u0000*\u0000 \u0000A\u0000n\u0000d\u0000r\u0000e\u0000w\u0000 \u0000K\u0000o\u0000r\u0000o\u0000l\u0000u\u0000k\u0000\r\u0000\n\u0000 \u0000*\u0000/\u0000\r\u0000\n\u0000\r\u0000\n\u0000i\u0000m\u0000p\u0000o\u0000r\u0000t\u0000 \u0000j\u0000a\u0000v\u0000a\u0000.\u0000m\u0000a\u0000t\u0000h\u0000.\u0000B\u0000i\u0000g\u0000D\u0000e\u0000c\u0000i\u0000m\u0000a\u0000l\u0000;\u0000\r\u0000\n\u0000i\u0000m\u0000p\u0000o\u0000r\u0000t\u0000 \u0000j\u0000a\u0000v\u0000a\u0000.\u0000m\u0000a\u0000t\u0000h\u0000.\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000;\u0000\r\u0000\n\u0000\r\u0000\n\u0000p\u0000u\u0000b\u0000l\u0000i\u0000c\u0000 \u0000c\u0000l\u0000a\u0000s\u0000s\u0000 \u0000e\u0000u\u0000l\u0000e\u0000r\u00003\u00005\u00006\u0000 \u0000{\u0000\r\u0000\n\u0000\t\u0000p\u0000u\u0000b\u0000l\u0000i\u0000c\u0000 \u0000s\u0000t\u0000a\u0000t\u0000i\u0000c\u0000 \u0000v\u0000o\u0000i\u0000d\u0000 \u0000m\u0000a\u0000i\u0000n\u0000(\u0000S\u0000t\u0000r\u0000i\u0000n\u0000g\u0000[\u0000]\u0000 \u0000a\u0000r\u0000g\u0000s\u0000)\u0000 \u0000{\u0000\r\u0000\n\u0000\t\u0000\t\u0000i\u0000n\u0000t\u0000 \u0000a\u0000n\u0000s\u0000 \u0000=\u0000 \u00000\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000S\u0000y\u0000s\u0000t\u0000e\u0000m\u0000.\u0000o\u0000u\u0000t\u0000.\u0000p\u0000r\u0000i\u0000n\u0000t\u0000l\u0000n\u0000(\u0000B\u0000r\u0000e\u0000n\u0000t\u0000(\u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00004\u0000\"\u0000)\u0000)\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000S\u0000y\u0000s\u0000t\u0000e\u0000m\u0000.\u0000o\u0000u\u0000t\u0000.\u0000p\u0000r\u0000i\u0000n\u0000t\u0000l\u0000n\u0000(\u0000a\u0000n\u0000s\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000}\u0000\r\u0000\n\u0000\t\u0000s\u0000t\u0000a\u0000t\u0000i\u0000c\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000B\u0000r\u0000e\u0000n\u0000t\u0000(\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000n\u0000)\u0000 \u0000{\u0000\r\u0000\n\u0000\t\u0000\t\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000k\u0000 \u0000=\u0000 \u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00001\u0000\"\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000r\u0000 \u0000=\u0000 \u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00001\u0000\"\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000i\u0000 \u0000=\u0000 \u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00001\u0000\"\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000m\u0000 \u0000=\u0000 \u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00001\u00000\u0000\"\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000i\u0000t\u0000e\u0000r\u0000 \u0000=\u0000 \u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00000\u0000\"\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000z\u0000 \u0000=\u0000 \u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00000\u0000\"\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000x\u0000 \u0000=\u0000 \u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00001\u0000\"\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000y\u0000 \u0000=\u0000 \u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00001\u0000\"\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000q\u0000 \u0000=\u0000 \u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00001\u0000\"\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000y\u0000s\u0000 \u0000=\u0000 \u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00001\u0000\"\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000y\u0000=\u0000z\u0000;\u0000\r\u0000\n\u0000\r\u0000\n\u0000\t\u0000\t\u0000d\u0000o\u0000 \u0000{\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000x\u0000=\u0000y\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000f\u0000o\u0000r\u0000 \u0000(\u0000i\u0000=\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000.\u0000O\u0000N\u0000E\u0000;\u0000i\u0000.\u0000c\u0000o\u0000m\u0000p\u0000a\u0000r\u0000e\u0000T\u0000o\u0000(\u0000r\u0000)\u0000<\u0000=\u00000\u0000;\u0000i\u0000=\u0000i\u0000.\u0000a\u0000d\u0000d\u0000(\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000.\u0000O\u0000N\u0000E\u0000)\u0000)\u0000 \u0000y\u0000=\u0000(\u0000(\u0000y\u0000.\u0000m\u0000u\u0000l\u0000t\u0000i\u0000p\u0000l\u0000y\u0000(\u0000y\u0000)\u0000)\u0000.\u0000a\u0000d\u0000d\u0000(\u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00003\u0000\"\u0000)\u0000)\u0000)\u0000.\u0000m\u0000o\u0000d\u0000(\u0000n\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000k\u0000=\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000.\u0000Z\u0000E\u0000R\u0000O\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000d\u0000o\u0000 \u0000{\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000\t\u0000i\u0000t\u0000e\u0000r\u0000=\u0000i\u0000t\u0000e\u0000r\u0000.\u0000a\u0000d\u0000d\u0000(\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000.\u0000O\u0000N\u0000E\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000\t\u0000/\u0000/\u0000S\u0000y\u0000s\u0000t\u0000e\u0000m\u0000.\u0000o\u0000u\u0000t\u0000.\u0000p\u0000r\u0000i\u0000n\u0000t\u0000(\u0000\"\u0000i\u0000t\u0000e\u0000r\u0000=\u0000\"\u0000 \u0000+\u0000 \u0000i\u0000t\u0000e\u0000r\u0000.\u0000t\u0000o\u0000S\u0000t\u0000r\u0000i\u0000n\u0000g\u0000(\u0000)\u0000 \u0000+\u0000 \u0000'\u0000\\\u0000r\u0000'\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000\t\u0000y\u0000s\u0000=\u0000y\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000\t\u0000f\u0000o\u0000r\u0000 \u0000(\u0000i\u0000=\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000.\u0000O\u0000N\u0000E\u0000;\u0000i\u0000.\u0000c\u0000o\u0000m\u0000p\u0000a\u0000r\u0000e\u0000T\u0000o\u0000(\u0000m\u0000i\u0000n\u0000(\u0000m\u0000,\u0000r\u0000.\u0000s\u0000u\u0000b\u0000t\u0000r\u0000a\u0000c\u0000t\u0000(\u0000k\u0000)\u0000)\u0000)\u0000<\u0000=\u00000\u0000;\u0000i\u0000=\u0000i\u0000.\u0000a\u0000d\u0000d\u0000(\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000.\u0000O\u0000N\u0000E\u0000)\u0000)\u0000 \u0000{\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000\t\u0000\t\u0000/\u0000/\u0000I\u0000 \u0000t\u0000h\u0000i\u0000n\u0000k\u0000 \u0000t\u0000h\u0000a\u0000t\u0000 \u0000m\u0000i\u0000n\u0000 \u0000i\u0000s\u0000 \u0000t\u0000h\u0000e\u0000 \u0000l\u0000e\u0000s\u0000s\u0000e\u0000r\u0000 \u0000o\u0000f\u0000 \u0000m\u0000 \u0000a\u0000n\u0000d\u0000 \u0000r\u0000-\u0000k\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000\t\u0000\t\u0000y\u0000=\u0000(\u0000(\u0000y\u0000.\u0000m\u0000u\u0000l\u0000t\u0000i\u0000p\u0000l\u0000y\u0000(\u0000y\u0000)\u0000)\u0000.\u0000a\u0000d\u0000d\u0000(\u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00003\u0000\"\u0000)\u0000)\u0000)\u0000.\u0000m\u0000o\u0000d\u0000(\u0000n\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000\t\u0000\t\u0000q\u0000=\u0000(\u0000(\u0000y\u0000.\u0000s\u0000u\u0000b\u0000t\u0000r\u0000a\u0000c\u0000t\u0000(\u0000x\u0000)\u0000)\u0000.\u0000m\u0000u\u0000l\u0000t\u0000i\u0000p\u0000l\u0000y\u0000(\u0000q\u0000)\u0000)\u0000.\u0000m\u0000o\u0000d\u0000(\u0000n\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000\t\u0000}\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000\t\u0000z\u0000=\u0000n\u0000.\u0000g\u0000c\u0000d\u0000(\u0000q\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000\t\u0000k\u0000=\u0000k\u0000.\u0000a\u0000d\u0000d\u0000(\u0000m\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000}\u0000 \u0000w\u0000h\u0000i\u0000l\u0000e\u0000 \u0000(\u0000k\u0000.\u0000c\u0000o\u0000m\u0000p\u0000a\u0000r\u0000e\u0000T\u0000o\u0000(\u0000r\u0000)\u0000<\u00000\u0000 \u0000&\u0000&\u0000 \u0000z\u0000.\u0000c\u0000o\u0000m\u0000p\u0000a\u0000r\u0000e\u0000T\u0000o\u0000(\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000.\u0000O\u0000N\u0000E\u0000)\u0000=\u0000=\u00000\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000r\u0000=\u0000r\u0000.\u0000m\u0000u\u0000l\u0000t\u0000i\u0000p\u0000l\u0000y\u0000(\u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00002\u0000\"\u0000)\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000}\u0000 \u0000w\u0000h\u0000i\u0000l\u0000e\u0000 \u0000(\u0000z\u0000.\u0000c\u0000o\u0000m\u0000p\u0000a\u0000r\u0000e\u0000T\u0000o\u0000(\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000.\u0000O\u0000N\u0000E\u0000)\u0000=\u0000=\u00000\u0000 \u0000&\u0000&\u0000 \u0000i\u0000t\u0000e\u0000r\u0000.\u0000c\u0000o\u0000m\u0000p\u0000a\u0000r\u0000e\u0000T\u0000o\u0000(\u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00001\u00000\u00000\u00000\u00000\u0000\"\u0000)\u0000)\u0000<\u00000\u0000)\u0000;\u0000\r\u0000\n\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000i\u0000f\u0000 \u0000(\u0000z\u0000.\u0000c\u0000o\u0000m\u0000p\u0000a\u0000r\u0000e\u0000T\u0000o\u0000(\u0000n\u0000)\u0000=\u0000=\u00000\u0000)\u0000 \u0000d\u0000o\u0000 \u0000{\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000\t\u0000y\u0000s\u0000=\u0000(\u0000(\u0000y\u0000s\u0000.\u0000m\u0000u\u0000l\u0000t\u0000i\u0000p\u0000l\u0000y\u0000(\u0000y\u0000s\u0000)\u0000)\u0000.\u0000a\u0000d\u0000d\u0000(\u0000n\u0000e\u0000w\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000(\u0000\"\u00003\u0000\"\u0000)\u0000)\u0000)\u0000.\u0000m\u0000o\u0000d\u0000(\u0000n\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000\t\u0000z\u0000=\u0000n\u0000.\u0000g\u0000c\u0000d\u0000(\u0000y\u0000s\u0000.\u0000s\u0000u\u0000b\u0000t\u0000r\u0000a\u0000c\u0000t\u0000(\u0000x\u0000)\u0000)\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000\t\u0000}\u0000 \u0000w\u0000h\u0000i\u0000l\u0000e\u0000 \u0000(\u0000z\u0000.\u0000c\u0000o\u0000m\u0000p\u0000a\u0000r\u0000e\u0000T\u0000o\u0000(\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000.\u0000O\u0000N\u0000E\u0000)\u0000=\u0000=\u00000\u0000)\u0000;\u0000\r\u0000\n\u0000\r\u0000\n\u0000\t\u0000\t\u0000r\u0000e\u0000t\u0000u\u0000r\u0000n\u0000 \u0000z\u0000;\u0000\r\u0000\n\u0000\t\u0000}\u0000\r\u0000\n\u0000\t\u0000s\u0000t\u0000a\u0000t\u0000i\u0000c\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000m\u0000i\u0000n\u0000(\u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000a\u0000,\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000b\u0000)\u0000 \u0000{\u0000\r\u0000\n\u0000\t\u0000\t\u0000i\u0000f\u0000(\u0000a\u0000.\u0000c\u0000o\u0000m\u0000p\u0000a\u0000r\u0000e\u0000T\u0000o\u0000(\u0000b\u0000)\u0000=\u0000=\u0000-\u00001\u0000)\u0000 \u0000r\u0000e\u0000t\u0000u\u0000r\u0000n\u0000 \u0000a\u0000;\u0000\r\u0000\n\u0000\t\u0000\t\u0000e\u0000l\u0000s\u0000e\u0000 \u0000r\u0000e\u0000t\u0000u\u0000r\u0000n\u0000 \u0000b\u0000;\u0000\r\u0000\n\u0000\t\u0000}\u0000\r\u0000\n\u0000\t\u0000s\u0000t\u0000a\u0000t\u0000i\u0000c\u0000 \u0000B\u0000i\u0000g\u0000I\u0000n\u0000t\u0000e\u0000g\u0000e\u0000r\u0000 \u0000b\u0000r\u0000e\u0000n\u0000t\u0000(\u0000i\u0000n\u0000t\u0000 \u0000a\u0000,\u0000 \u0000i\u0000n\u0000t\u0000 \u0000b\u0000)\u0000 \u0000{\u0000\r\u0000\n\u0000\t\u0000\t\u0000\r\u0000\n\u0000\t\u0000\t\u0000r\u0000e\u0000t\u0000u\u0000r\u0000n\u0000 \u0000n\u0000u\u0000l\u0000l\u0000;\u0000\r\u0000\n\u0000\t\u0000}\u0000\r\u0000\n\u0000\t\u0000s\u0000t\u0000a\u0000t\u0000i\u0000c\u0000 \u0000B\u0000i\u0000g\u0000D\u0000e\u0000c\u0000i\u0000m\u0000a\u0000l\u0000 \u0000f\u0000(\u0000i\u0000n\u0000t\u0000 \u0000a\u0000)\u0000 \u0000{\u0000\r\u0000\n\u0000\t\u0000\t\u0000\r\u0000\n\u0000\t\u0000\t\u0000r\u0000e\u0000t\u0000u\u0000r\u0000n\u0000 \u0000n\u0000u\u0000l\u0000l\u0000;\u0000\r\u0000\n\u0000\t\u0000}\u0000\r\u0000\n\u0000}\u0000\r\u0000\n\u0000\r\u0000\n\u0000/\u0000*\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000i\u0000n\u0000p\u0000u\u0000t\u0000 \u0000a\u0000,\u0000 \u0000b\u0000,\u0000 \u0000a\u0000n\u0000d\u0000 \u0000a\u0000 \u0000p\u0000o\u0000i\u0000n\u0000t\u0000e\u0000r\u0000 \u0000t\u0000o\u0000 \u0000a\u0000 \u0000s\u0000u\u0000b\u0000r\u0000o\u0000u\u0000t\u0000i\u0000n\u0000e\u0000 \u0000f\u0000o\u0000r\u0000 \u0000f\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000c\u0000a\u0000l\u0000c\u0000u\u0000l\u0000a\u0000t\u0000e\u0000 \u0000f\u0000(\u0000a\u0000)\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000c\u0000a\u0000l\u0000c\u0000u\u0000l\u0000a\u0000t\u0000e\u0000 \u0000f\u0000(\u0000b\u0000)\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000i\u0000f\u0000 \u0000f\u0000(\u0000a\u0000)\u0000 \u0000f\u0000(\u0000b\u0000)\u0000 \u0000>\u0000=\u0000 \u00000\u0000 \u0000t\u0000h\u0000e\u0000n\u0000 \u0000e\u0000x\u0000i\u0000t\u0000 \u0000f\u0000u\u0000n\u0000c\u0000t\u0000i\u0000o\u0000n\u0000 \u0000b\u0000e\u0000c\u0000a\u0000u\u0000s\u0000e\u0000 \u0000t\u0000h\u0000e\u0000 \u0000r\u0000o\u0000o\u0000t\u0000 \u0000i\u0000s\u0000 \u0000n\u0000o\u0000t\u0000 \u0000b\u0000r\u0000a\u0000c\u0000k\u0000e\u0000t\u0000e\u0000d\u0000.\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000i\u0000f\u0000 \u0000|\u0000f\u0000(\u0000a\u0000)\u0000|\u0000 \u0000<\u0000 \u0000|\u0000f\u0000(\u0000b\u0000)\u0000|\u0000 \u0000t\u0000h\u0000e\u0000n\u0000 \u0000s\u0000w\u0000a\u0000p\u0000 \u0000(\u0000a\u0000,\u0000b\u0000)\u0000 \u0000e\u0000n\u0000d\u0000 \u0000i\u0000f\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000c\u0000 \u0000:\u0000=\u0000 \u0000a\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000s\u0000e\u0000t\u0000 \u0000m\u0000f\u0000l\u0000a\u0000g\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000r\u0000e\u0000p\u0000e\u0000a\u0000t\u0000 \u0000u\u0000n\u0000t\u0000i\u0000l\u0000 \u0000f\u0000(\u0000b\u0000 \u0000o\u0000r\u0000 \u0000s\u0000)\u0000 \u0000=\u0000 \u00000\u0000 \u0000o\u0000r\u0000 \u0000|\u0000b\u0000 \u0000\u0012\" \u0000a\u0000|\u0000 \u0000i\u0000s\u0000 \u0000s\u0000m\u0000a\u0000l\u0000l\u0000 \u0000e\u0000n\u0000o\u0000u\u0000g\u0000h\u0000 \u0000(\u0000c\u0000o\u0000n\u0000v\u0000e\u0000r\u0000g\u0000e\u0000n\u0000c\u0000e\u0000)\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000i\u0000f\u0000 \u0000f\u0000(\u0000a\u0000)\u0000 \u0000`\" \u0000f\u0000(\u0000c\u0000)\u0000 \u0000a\u0000n\u0000d\u0000 \u0000f\u0000(\u0000b\u0000)\u0000 \u0000`\" \u0000f\u0000(\u0000c\u0000)\u0000 \u0000t\u0000h\u0000e\u0000n\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000s\u0000 \u0000:\u0000=\u0000 \u0000\\\u0000f\u0000r\u0000a\u0000c\u0000{\u0000a\u0000f\u0000(\u0000b\u0000)\u0000f\u0000(\u0000c\u0000)\u0000}\u0000{\u0000(\u0000f\u0000(\u0000a\u0000)\u0000-\u0000f\u0000(\u0000b\u0000)\u0000)\u0000(\u0000f\u0000(\u0000a\u0000)\u0000-\u0000f\u0000(\u0000c\u0000)\u0000)\u0000}\u0000 \u0000+\u0000 \u0000\\\u0000f\u0000r\u0000a\u0000c\u0000{\u0000b\u0000f\u0000(\u0000a\u0000)\u0000f\u0000(\u0000c\u0000)\u0000}\u0000{\u0000(\u0000f\u0000(\u0000b\u0000)\u0000-\u0000f\u0000(\u0000a\u0000)\u0000)\u0000(\u0000f\u0000(\u0000b\u0000)\u0000-\u0000f\u0000(\u0000c\u0000)\u0000)\u0000}\u0000 \u0000+\u0000 \u0000\\\u0000f\u0000r\u0000a\u0000c\u0000{\u0000c\u0000f\u0000(\u0000a\u0000)\u0000f\u0000(\u0000b\u0000)\u0000}\u0000{\u0000(\u0000f\u0000(\u0000c\u0000)\u0000-\u0000f\u0000(\u0000a\u0000)\u0000)\u0000(\u0000f\u0000(\u0000c\u0000)\u0000-\u0000f\u0000(\u0000b\u0000)\u0000)\u0000}\u0000 \u0000(\u0000i\u0000n\u0000v\u0000e\u0000r\u0000s\u0000e\u0000 \u0000q\u0000u\u0000a\u0000d\u0000r\u0000a\u0000t\u0000i\u0000c\u0000 \u0000i\u0000n\u0000t\u0000e\u0000r\u0000p\u0000o\u0000l\u0000a\u0000t\u0000i\u0000o\u0000n\u0000)\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000e\u0000l\u0000s\u0000e\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000s\u0000 \u0000:\u0000=\u0000 \u0000b\u0000 \u0000-\u0000 \u0000f\u0000(\u0000b\u0000)\u0000 \u0000\\\u0000f\u0000r\u0000a\u0000c\u0000{\u0000b\u0000-\u0000a\u0000}\u0000{\u0000f\u0000(\u0000b\u0000)\u0000-\u0000f\u0000(\u0000a\u0000)\u0000}\u0000 \u0000(\u0000s\u0000e\u0000c\u0000a\u0000n\u0000t\u0000 \u0000r\u0000u\u0000l\u0000e\u0000)\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000e\u0000n\u0000d\u0000 \u0000i\u0000f\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000i\u0000f\u0000 \u0000(\u0000c\u0000o\u0000n\u0000d\u0000i\u0000t\u0000i\u0000o\u0000n\u0000 \u00001\u0000)\u0000 \u0000s\u0000 \u0000i\u0000s\u0000 \u0000n\u0000o\u0000t\u0000 \u0000b\u0000e\u0000t\u0000w\u0000e\u0000e\u0000n\u0000 \u0000(\u00003\u0000a\u0000 \u0000+\u0000 \u0000b\u0000)\u0000/\u00004\u0000 \u0000a\u0000n\u0000d\u0000 \u0000b\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000o\u0000r\u0000 \u0000(\u0000c\u0000o\u0000n\u0000d\u0000i\u0000t\u0000i\u0000o\u0000n\u0000 \u00002\u0000)\u0000 \u0000(\u0000m\u0000f\u0000l\u0000a\u0000g\u0000 \u0000i\u0000s\u0000 \u0000s\u0000e\u0000t\u0000 \u0000a\u0000n\u0000d\u0000 \u0000|\u0000s\u0000\u0012\"b\u0000|\u0000 \u0000e\" \u0000|\u0000b\u0000\u0012\"c\u0000|\u0000 \u0000/\u0000 \u00002\u0000)\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000o\u0000r\u0000 \u0000(\u0000c\u0000o\u0000n\u0000d\u0000i\u0000t\u0000i\u0000o\u0000n\u0000 \u00003\u0000)\u0000 \u0000(\u0000m\u0000f\u0000l\u0000a\u0000g\u0000 \u0000i\u0000s\u0000 \u0000c\u0000l\u0000e\u0000a\u0000r\u0000e\u0000d\u0000 \u0000a\u0000n\u0000d\u0000 \u0000|\u0000s\u0000\u0012\"b\u0000|\u0000 \u0000e\" \u0000|\u0000c\u0000\u0012\"d\u0000|\u0000 \u0000/\u0000 \u00002\u0000)\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000o\u0000r\u0000 \u0000(\u0000c\u0000o\u0000n\u0000d\u0000i\u0000t\u0000i\u0000o\u0000n\u0000 \u00004\u0000)\u0000 \u0000(\u0000m\u0000f\u0000l\u0000a\u0000g\u0000 \u0000i\u0000s\u0000 \u0000s\u0000e\u0000t\u0000 \u0000a\u0000n\u0000d\u0000 \u0000|\u0000b\u0000\u0012\"c\u0000|\u0000 \u0000<\u0000 \u0000|\u0000�\u0003|\u0000)\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000o\u0000r\u0000 \u0000(\u0000c\u0000o\u0000n\u0000d\u0000i\u0000t\u0000i\u0000o\u0000n\u0000 \u00005\u0000)\u0000 \u0000(\u0000m\u0000f\u0000l\u0000a\u0000g\u0000 \u0000i\u0000s\u0000 \u0000c\u0000l\u0000e\u0000a\u0000r\u0000e\u0000d\u0000 \u0000a\u0000n\u0000d\u0000 \u0000|\u0000c\u0000\u0012\"d\u0000|\u0000 \u0000<\u0000 \u0000|\u0000�\u0003|\u0000)\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000t\u0000h\u0000e\u0000n\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000s\u0000 \u0000:\u0000=\u0000 \u0000\\\u0000f\u0000r\u0000a\u0000c\u0000{\u0000a\u0000+\u0000b\u0000}\u0000{\u00002\u0000}\u0000 \u0000(\u0000b\u0000i\u0000s\u0000e\u0000c\u0000t\u0000i\u0000o\u0000n\u0000 \u0000m\u0000e\u0000t\u0000h\u0000o\u0000d\u0000)\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000s\u0000e\u0000t\u0000 \u0000m\u0000f\u0000l\u0000a\u0000g\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000e\u0000l\u0000s\u0000e\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000c\u0000l\u0000e\u0000a\u0000r\u0000 \u0000m\u0000f\u0000l\u0000a\u0000g\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000e\u0000n\u0000d\u0000 \u0000i\u0000f\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000c\u0000a\u0000l\u0000c\u0000u\u0000l\u0000a\u0000t\u0000e\u0000 \u0000f\u0000(\u0000s\u0000)\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000d\u0000 \u0000:\u0000=\u0000 \u0000c\u0000 \u0000(\u0000d\u0000 \u0000i\u0000s\u0000 \u0000a\u0000s\u0000s\u0000i\u0000g\u0000n\u0000e\u0000d\u0000 \u0000f\u0000o\u0000r\u0000 \u0000t\u0000h\u0000e\u0000 \u0000f\u0000i\u0000r\u0000s\u0000t\u0000 \u0000t\u0000i\u0000m\u0000e\u0000 \u0000h\u0000e\u0000r\u0000e\u0000;\u0000 \u0000i\u0000t\u0000 \u0000w\u0000o\u0000n\u0000'\u0000t\u0000 \u0000b\u0000e\u0000 \u0000u\u0000s\u0000e\u0000d\u0000 \u0000a\u0000b\u0000o\u0000v\u0000e\u0000 \u0000o\u0000n\u0000 \u0000t\u0000h\u0000e\u0000 \u0000f\u0000i\u0000r\u0000s\u0000t\u0000 \u0000i\u0000t\u0000e\u0000r\u0000a\u0000t\u0000i\u0000o\u0000n\u0000 \u0000b\u0000e\u0000c\u0000a\u0000u\u0000s\u0000e\u0000 \u0000m\u0000f\u0000l\u0000a\u0000g\u0000 \u0000i\u0000s\u0000 \u0000s\u0000e\u0000t\u0000)\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000c\u0000 \u0000:\u0000=\u0000 \u0000b\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000i\u0000f\u0000 \u0000f\u0000(\u0000a\u0000)\u0000 \u0000f\u0000(\u0000s\u0000)\u0000 \u0000<\u0000 \u00000\u0000 \u0000t\u0000h\u0000e\u0000n\u0000 \u0000b\u0000 \u0000:\u0000=\u0000 \u0000s\u0000 \u0000e\u0000l\u0000s\u0000e\u0000 \u0000a\u0000 \u0000:\u0000=\u0000 \u0000s\u0000 \u0000e\u0000n\u0000d\u0000 \u0000i\u0000f\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000 \u0000i\u0000f\u0000 \u0000|\u0000f\u0000(\u0000a\u0000)\u0000|\u0000 \u0000<\u0000 \u0000|\u0000f\u0000(\u0000b\u0000)\u0000|\u0000 \u0000t\u0000h\u0000e\u0000n\u0000 \u0000s\u0000w\u0000a\u0000p\u0000 \u0000(\u0000a\u0000,\u0000b\u0000)\u0000 \u0000e\u0000n\u0000d\u0000 \u0000i\u0000f\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000e\u0000n\u0000d\u0000 \u0000r\u0000e\u0000p\u0000e\u0000a\u0000t\u0000\r\u0000\n\u0000 \u0000 \u0000 \u0000 \u0000o\u0000u\u0000t\u0000p\u0000u\u0000t\u0000 \u0000b\u0000 \u0000o\u0000r\u0000 \u0000s\u0000 \u0000(\u0000r\u0000e\u0000t\u0000u\u0000r\u0000n\u0000 \u0000t\u0000h\u0000e\u0000 \u0000r\u0000o\u0000o\u0000t\u0000)\u0000\r\u0000\n\u0000*\u0000/\u0000"

/***/ }),

/***/ 1202:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\n\npublic class euler357 {\n\tpublic static void main(String[] args) {\n\t\tBigInteger ans = new BigInteger(\"1\");\n\t\tfor(int i = 2; i<=100000000; i+=4)\n\t\t\tif(d(i))  ans = ans.add(new BigInteger(Integer.toString(i)));\n\t\tSystem.out.println(ans);\n\t}\n\tstatic boolean d(int x) {\n\t\tfor(int i=1; i<=(int)Math.sqrt(x); i++)\n\t\t\tif(x%i==0)\n\t\t\t\tif(!Utils.isPrime(i+x/i))\n\t\t\t\t\treturn false;\n\t\treturn true;\n\t}\n}\n/*\nConsider the divisors of 30: 1,2,3,5,6,10,15,30.\nIt can be seen that for every divisor d of 30, d+30/d is prime.\n\nFind the sum of all positive integers n not exceeding 100 000 000\nsuch that for every divisor d of n, d+n/d is prime.\n*/"

/***/ }),

/***/ 1203:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.io.FileWriter;\nimport java.io.IOException;\nimport java.math.BigDecimal;\nimport java.math.BigInteger;\n//import java.util.Scanner;\nimport java.util.Scanner;\n\npublic class euler358 {\n\tpublic static void main(String[] args) throws InterruptedException, IOException {\n\t\t//m1();\n\t\t//m2();\n\t\tm3();\n\t}\n\tstatic void m1() {\n\t\tSystem.out.println(isCyclic(\"43\"));\n\t\tSystem.out.println(isCyclic(\"142857\"));\n\t\tSystem.out.println(isCyclic(\"00000000137328414450556789\"));\n\t\tString a = \"00000000137\";\n\t\tString c = \"56789\";\n\t\tString d = \"\";\n\t\tfor(int i=8; true; i+=9) {\n\t\t\t//System.out.println(i);\n\t\t\tString b = Integer.toString(i);\n\t\t\t//System.out.println(c);\n\t\t\td = a+b+c;\n\t\t\tif(isCyclic(d)) {\n\t\t\t\tSystem.out.println(\"Hooray! \"+b); //3,284,144,505\n\t\t\t\t//Thread.sleep(10000);\n\t\t\t}\n\t\t}\n\t}\n\tstatic boolean isCyclic(String s) {\n\t\tString x = s;\n\t\t//System.out.println(s);\n\t\t//if(new BigInteger(s).mod(new BigInteger(\"9\"))!=BigInteger.ZERO) return false;\n\t\t\n\t\tfor(int i=0; i<s.length(); i++) {\n\t\t\tchar c = x.charAt(0);\n\t\t\tx = x.substring(1);\n\t\t\tx = x+c;\n\t\t\t//System.out.println(x);\n\t\t\tBigInteger a = new BigInteger(s);\n\t\t\tBigInteger b = new BigInteger(x);\n\t\t\tif(a.compareTo(b)==1) {\n\t\t\t\tif(!(\ta.divideAndRemainder(b)[1]==BigInteger.ZERO && \n\t\t\t\t\t\ta.divide(b).compareTo(new BigInteger(Integer.toString(s.length())))<=0))\n\t\t\t\t\treturn false;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tif(!(\tb.divideAndRemainder(a)[1]==BigInteger.ZERO && \n\t\t\t\t\t\tb.divide(a).compareTo(new BigInteger(Integer.toString(s.length())))<=0))\n\t\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t\t\n\t\treturn true;\n\t}\n\tstatic void m2() {\n\t\tint a=0;\n\t\twhile(true) {\n\t\t\ta++;\n\t\t\tif(!Utils.isPrime(a)) continue;\n\t\t\tBigInteger x = (Utils.pwr(BigInteger.TEN, a-1).subtract(BigInteger.ONE)).divide(new BigInteger(Integer.toString(a)));\n\t\t\tSystem.out.println(x);\n\t\t\tnew Scanner(System.in).nextLine();\n\t\t}\n\t}\n\tstatic void m3() throws IOException {\n\t\tFileWriter f = new FileWriter(\"out.txt\");\n\t\tf.write(BigDecimal.ONE.divide(new BigDecimal(23),10000,0).toString());\n\t\tf.close();\n\t}\n}\n/*\nint a=0;\nwhile(true) {\n\tif(!Utils.isPrime(a)) continue;\n\ta++;\n\tBigInteger x = (Utils.pwr(BigInteger.TEN, a-1).subtract(BigInteger.ONE)).divide(new BigInteger(Integer.toString(a)));\n\tSystem.out.println(x);\n\tnew Scanner(System.in).nextLine();\n}\n*/"

/***/ }),

/***/ 1204:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler36 {\n\tpublic static void main(String[] args) {\n\t\tlong ans = 0;\n\t\tfor(int i=1; i<1000000; i++) {\n\t\t\tif(Utils.isPalindrome(i) && Utils.isPalindrome(base2(i))) {System.out.println(i+\" \"+base2(i)); ans+=i;}\n\t\t}\n\t\tSystem.out.println(ans); //872187\n\t}\n\tpublic static String base2(int x) {\n\t\tString str = \"\";\n\t\tif(x/2!=0) str+= (x%2+base2((int)(x/2)));\n\t\telse str+= x%2;\n\t\treturn str;\n\t}\n}"

/***/ }),

/***/ 1205:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\n//import java.math.BigInteger;\nimport java.util.ArrayList;\n\npublic class euler362 {\n\tpublic static void main(String[] args) {\n\t\t//BigInteger b = new BigInteger(\"54\");\n\t\tSystem.out.println(S(100));\n\t\tSystem.out.println(F(54));\n\t}\n\tpublic static ArrayList<Integer> primeFactors(int numbers) {\n\t\tint n = numbers; \n\t\tArrayList<Integer> factors = new ArrayList<Integer>();\n\t\tfor (int i = 2; i <= n / i; i++) {\n\t\t\twhile (n % i == 0) {\n\t\t\t\tfactors.add(i);\n\t\t\t\tn /= i;\n\t\t\t}\n\t\t}\n\t\tif (n > 1) {\n\t\t\tfactors.add(n);\n\t\t}\n\t\treturn factors;\n\t}\n\tstatic int unique(ArrayList<Integer> a) {\n\t\tArrayList<Integer> unique = new ArrayList<Integer>();\n\t\twhile(a.size()>0) {\n\t\t\tif(!unique.contains(a.get(0))) \n\t\t\t\tunique.add(a.get(0));\n\t\t\ta.remove(0);\n\t\t}\n\t\treturn unique.size();\n\t}\n\tstatic int F(int a) {\n\t\treturn unique(primeFactors(a));\n\t}\n\tstatic int S(int n) {\n\t\tint ans = 0;\n\t\tfor(int k=2; k<=n; k++) {\n\t\t\tans += F(k);\n\t\t}\n\t\treturn ans;\n\t}\n}\n/*\nConsider the number 54.\n54 can be factored in 7 distinct ways into one or more factors larger than 1:\n54, 2x27, 3x18, 6x9, 3x3x6, 2x3x9 and 2x3x3x3.\nIf we require that the factors are all squarefree only two ways remain: 3x3x6 and 2x3x3x3.\n\nLet's call Fsf(n) the number of ways n can be factored into one or more squarefree factors \nlarger than 1, so Fsf(54)=2.\n\nLet S(n) be Fsf(k) for k=2 to n.\n\nS(100)=193.\n\nFind S(10 000 000 000).\n*/"

/***/ }),

/***/ 1206:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\nimport java.util.ArrayList;\n\npublic class euler365 {\n\tpublic static void main(String[] args) {\n\t\tlong ans=0;\n\t\t/*BigInteger n = new BigInteger(\"10\");\tn = n.pow(18);\n\t\tBigInteger k = new BigInteger(\"10\");\tk = k.pow(9);\n\t\t\n\t\tBigInteger M = f(n,k).multiply( Utils.factorial(k) );\n\t\t\n\t\tSystem.out.println(M);\n\t\t*/\n\t\t\n\t\tBigInteger n = new BigInteger(\"10\");\n\t\tBigInteger k = new BigInteger(\"18\");\n\t\tint temp = 1009 * 1013 * 1019;\n\t\tBigInteger m = new BigInteger(Integer.toString(temp));\n\t\t\n\t\tSystem.out.println(n.modPow(k, m));\n\t\t\n\t\t//System.out.println(lnGamma());\n\t\t\n\t\t//if(true) return;\n\t\t\n\t\tSystem.out.println(g(5,55,221));\n\t\t\n\t\tArrayList<Long> p = new ArrayList<Long>();\n\t\tfor(long i=1001; i<5000; i++)\n\t\t\tif(Utils.isPrime(i)) p.add(i);\n\t\tArrayList<Long> q = p;\n\t\tArrayList<Long> r = p;\n\t\tSystem.out.println(p);\n\t\t\n\t\tfor(int a=0; a<p.size(); a++) {\n\t\t\tfor(int b=0; b<q.size()-1; b++) {\n\t\t\t\tfor(int c=0; c<r.size()-2; c++) {\n\t\t\t\t\tif( !(p.get(a)<q.get(b)) || !(q.get(b)<r.get(c)) ) continue;\n\t\t\t\t\tans+=(p.get(a)*q.get(b)*r.get(c));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(ans);\n\t}\n\tstatic BigInteger f(BigInteger a, BigInteger b) {\n\t\tBigInteger ans = new BigInteger(\"1\");\n\t\t\n\t\tfor(; a.compareTo(b)!=0 ; a.subtract(BigInteger.ONE))\n\t\t\tans = ans.multiply(a);\n\t\t\n\t\treturn ans;\t\t\n\t}\n\tstatic int g(int a, int b, int m) {\n\t\tint a1 = a % m;\n\t\t//int a1 = 1;\n\t\tint p = 1;\n\t\twhile (b > 0) {\n\t\t\tif (b%2 != 0) {\n\t\t\t\tp *= a1;\n\t\t\t\tp = p % m;\n\t\t\t}\n\t\t\tb /= 2;\n\t\t\ta1 = (a1 * a1) % m;\n\t\t}\n\t\treturn a1;\n\t}\n\t//  Used by \"lnGamma()\".\n\tprivate static double[] gamCoef = { 76.18009172947146, -86.50532032941677, 24.01409824083091,\n\t\t\t\t\t\t\t\t\t\t-1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5 };\n\t/**\n\t*  Returns the natural log \"ln\" of the Gamma Function defined by the integral:\n\t*      Gamma(z) = integral from 0 to infinity of t^(z-1)*e^-t dt.\n\t*  It is better to implement ln(Gamma(x)) rather than Gamma(x) since the latter\n\t*  will overflow many computer's floating point representations at quite modest\n\t*  values of x.\n\t**/\n\tpublic static double lnGamma(double xx) {\n\t\tdouble x = xx, y=xx;\n\t\tdouble tmp = x + 5.5;\n\t\ttmp -= (x + 0.5)*Math.log(tmp);\n\t\tdouble ser = 1.000000000190015;\n\t\tfor (int j=0; j <= 5; ++j)\n\t\t\tser += gamCoef[j]/++y;\n\t\treturn -tmp + Math.log(2.5066282746310005*ser/x);\n\t}\n\tstatic double nCr(double n, double k) {\n\t\treturn Math.exp( lnGamma(n+1) - lnGamma(k+1) - lnGamma(n-k+1) );\n\t}\n}\n/*\nThe binomial coeffient C(10^18,10^9) is a number with more than 9 billion (9109) digits.\n\nLet M(n,k,m) denote the binomial coefficient C(n,k) modulo m.\n\nCalculate (SUM) M(10^18,10^9,p*q*r) for 1000pqr5000 and p,q,r prime.\n*/"

/***/ }),

/***/ 1207:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigDecimal;\n\nclass euler368 {\n\tpublic static void main(String[] args) {\n\t\tBigDecimal ans = new BigDecimal(\"0.0\");\n\t\tBigDecimal one = BigDecimal.ONE;\n\t\tfor(int i=1; i<=1000000; i++) {\n\t\t\tif( hasTrip(i) ) continue;\n\t\t\t\n\t\t\tans = ans.add( one.divide( new BigDecimal( i )) );\n\t\t}\n\t\tSystem.out.println( ans );\n\t}\n\tstatic boolean hasTrip(int a) {\n\t\tString s = Integer.toString(a);\n\t\tfor(int i=0; i<s.length()-2; i++) {\n\t\t\tif( s.charAt(i) == s.charAt(i+1) && s.charAt(i+1) == s.charAt(i+2) )\n\t\t\t\treturn true;\n\t\t}\n\t\treturn false;\n\t}\n}"

/***/ }),

/***/ 1208:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler37 {\n\tpublic static void main(String[] pete) {\n\t\tint ans = 0;\n\t\tint x = 9;\n\t\twhile(true) {\n\t\t\tx++;\n\t\t\tif(x>999999) break;\n\t\t\tif(!Utils.isPrime(x)) continue;\n\t\t\tString s = Integer.toString(x);\n\t\t\tboolean q = false;\n\t\t\twhile(true) {\n\t\t\t\ts = s.substring(1);\n\t\t\t\tif(s.length()==0) { q=true; break; }\n\t\t\t\tif(!Utils.isPrime(Integer.parseInt(s))) break;\n\t\t\t}\n\t\t\tif(!q) continue;\n\t\t\tq=false;\n\t\t\ts = Integer.toString(x);\n\t\t\twhile(true) {\n\t\t\t\ts = s.substring(0, s.length()-1);\n\t\t\t\tif(s.length()==0) { q=true; break; }\n\t\t\t\tif(!Utils.isPrime(Integer.parseInt(s))) break;\n\t\t\t}\n\t\t\tif(!q) continue;\n\t\t\tSystem.out.println(x);\n\t\t\tans+=x;\n\t\t}\n\t\tSystem.out.println(ans);\n\t}\n}\n/*\nThe number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.\n\nFind the sum of the only eleven primes that are both truncatable from left to right and right to left.\n\nNOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.\n*/"

/***/ }),

/***/ 1209:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.Arrays;\n\npublic class euler381 {\n\tstatic int limit = 100000000; //10^8\n\tstatic boolean[] primes = new boolean[limit];\n\t\n\tpublic static void main(String[] args) {\n\t\tlong ans = 480L;\n\t\tint p = 7;\n\t\tClock clock = new Clock();\n\t\t\n\t\tfillPrimes();\n\t\t\n\t\tclock.getTimeSeconds();\n\t\t\n\t\tfor(; p<limit; p++) {\n\t\t\tif(!primes[p]) continue;\n\t\t\t\n\t\t\tlong bucket = 0L;\n\t\t\t\n\t\t\t//bucket += -1 % p;\n\t\t\tbucket += 1;\n\t\t\t//bucket += -1/(p-1) % p;\n\t\t\t//bucket += -1/( (p-1)*(p-2) ) % p;\n\t\t\t//bucket += -1/( (p-1)*(p-2)*(p-3) ) % p;\n\t\t\t//bucket += -1/( (p-1)*(p-2)*(p-3)*(p-4) ) % p;\n\t\t\t\n\t\t\tbucket = bucket % p;\n\t\t\t\n\t\t\tSystem.out.println(\"p= \"+p+\", bucket= \"+bucket);\n\t\t\ttry {\n\t\t\t\tThread.sleep(500);\n\t\t\t} catch (InterruptedException e) { e.printStackTrace(); }\n\t\t\t\n\t\t\tans += bucket;\n\t\t}\n\t\t\n\t\tSystem.out.println(ans);\t//139602943319822\n\t}\n\n\tpublic static void fillPrimes() {\n\t    Arrays.fill(primes,true);\n\t    primes[0]=primes[1]=false;\n\t    for (int i=2;i<primes.length;i++) {\n\t        if(primes[i]) {\n\t            for (int j=2;i*j<primes.length;j++) {\n\t                primes[i*j]=false;\n\t            }\n\t        }\n\t    }\n\t}\n}"

/***/ }),

/***/ 1210:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler39 {\n\tpublic static void main(String[] args) {\n\t\tlong result = 0, resultSolutions = 0;\n\t\t \n\t\tfor (long p = 2; p <= 1000; p += 2) {\n\t\t    int numberOfSolutions = 0;\n\t\t    for (long a = 2; a < (p/3); a++) {\n\t\t          if(p*(p-2*a) % (2*(p-a)) == 0){\n\t\t              numberOfSolutions++;\n\t\t          }\n\t\t      }\n\t\t      if(numberOfSolutions > resultSolutions){\n\t\t        resultSolutions = numberOfSolutions;\n\t\t        result = p;\n\t\t    }\n\t\t}\n\t\tSystem.out.println(result);\n\t}\n\tstatic boolean pythagorean(int a, int b, int c) {\n\t\ta*=a;\n\t\tb*=b;\n\t\tc*=c;\n\t\tif((a+b)==c) return true;\n\t\telse return false;\n\t}\n}\n/*\nIf p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.\n\n{20,48,52}, {24,45,51}, {30,40,50}\n\nFor which value of p <= 1000, is the number of solutions maximised?\n*/"

/***/ }),

/***/ 1211:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nclass Palindrome {\n\tprivate char[] a1;\n\n\tpublic void setArray (char[] array){\n\t\ta1=array;\n\t}\n\n\tpublic boolean test() {\n\t\tchar a = a1[0];\n\t\tchar b = a1[1];\n\t\tchar c = a1[2];\n\t\tchar d = a1[3];\n\t\tchar e = a1[4];\n\t\tchar f = a1[5];\n\t\tif (a==f && b==e && c==d) {return true;}\n\t\telse {return false;}\n\t}\n}\n\npublic class euler4{\n\tpublic static void main (String[] args){\n\t\tchar[] array = new char[] {0, 0, 0, 0, 0, 0};\n\t\tString n;\n\t\t//char a;\n\t\tint i;\n\n\t\tfor(int x=999; x>=900; x--) {\n\t\t\tfor(int y=999; y>=900; y--) {\n\t\t\t\ti=x*y;\n\t\t\t\tn = Integer.toString(i);\n\t\t\t\tarray = n.toCharArray();\n\n\t\t\t\tPalindrome p1 = new Palindrome();\n\t\t\t\tp1.setArray(array);\n\n\t\t\t\tif (p1.test()) {\n\t\t\t\t\tSystem.out.println(i);\n\t\t\t\t\t//break;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n\n/*\n * A palindromic number reads the same both ways.\n * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91  99.\n *\n * Find the largest palindrome made from the product of two 3-digit numbers.\n */"

/***/ }),

/***/ 1212:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\n//import java.math.BigDecimal;\n\npublic class euler40 {\n\tpublic static void main(String[] args) {\n\t\tlong time = System.currentTimeMillis();\n\t\tint ans = 1;\n\t\tString s = \"\";\n\t\t//BigDecimal b = BigDecimal.ZERO;\n\t\t\n\t\tfor(int i=1; i<=1000000; i++) {\n\t\t\ts+=Integer.toString(i);\n\t\t\tif(s.length()>1000000) break;\n\t\t\tif(i%10000==0) System.out.println(s.length());\n\t\t}\n\t\t//System.out.println(s);\n\t\t\n\t\tans*= Integer.parseInt(Character.toString(s.charAt(100-1)));\n\t\tans*= Integer.parseInt(Character.toString(s.charAt(1000-1)));\n\t\tans*= Integer.parseInt(Character.toString(s.charAt(10000-1)));\n\t\tans*= Integer.parseInt(Character.toString(s.charAt(100000-1)));\n\t\tans*= Integer.parseInt(Character.toString(s.charAt(1000000-1)));\n\t\tSystem.out.println(\"Time Taken: \"+(System.currentTimeMillis()-time)/1000+\" seconds.\");\n\t\tSystem.out.println(ans);\t//210\n\t\t\n\t\t/*for(int i=100; i<=l; i*=10) {\n\t\t\tans*=Integer.parseInt(Character.toString(s.charAt(i-1)));\n\t\t}\n\t\tSystem.out.println(ans);*/\n\t}\n}"

/***/ }),

/***/ 1213:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler41 {\n\tpublic static void main(String[] args) {\n\t\t/*ArrayList<BigInteger> primes = new ArrayList<BigInteger>();\n\t\tBigInteger x = new BigInteger(\"1\");\n\t\twhile(true) {\n\t\t\tx = x.add(BigInteger.ONE);\n\t\t\tif(Utils.isPrime(x)) primes.add(x);\n\t\t\tif(x.compareTo(new BigInteger(\"987654321\"))==1) break;\n\t\t}\n\t\tSystem.out.println(primes);*/\n\t\t\n\t\tint[] primes = primeSieve.sieve(10000000);\n\t\tfor(int i=primes.length-1; true; i--) {\n\t\t\tif(isPandigital(primes[i])) {\n\t\t\t\tSystem.out.println(primes[i]);\t//7652413\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tprivate static boolean isPandigital(int i) {\n\t\tString s = Integer.toString(i);\n\t\tfor(int x=1; x<=s.length(); x++) {\n\t\t\tif(!s.contains(Integer.toString(x))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t\t\n\t\treturn true;\n\t}\n}"

/***/ }),

/***/ 1214:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.ArrayList;\nimport java.util.Scanner;\n\npublic class euler42 {\n\tpublic static void main(String[] args) throws FileNotFoundException {\n\t\tArrayList<String> words = new ArrayList<String>();\n\t\tArrayList<Integer> scores = new ArrayList<Integer>();\n\t\tArrayList<Integer> triangles = new ArrayList<Integer>();\n\t\tint ans = 0;\n\t\t\n\t\tScanner s = new Scanner(new File(\"words.txt\"));\n\t\twhile(s.hasNext())\n\t\t\twords.add(s.next());\n\t\tSystem.out.println(words);\n\t\t\n\t\tfor(int i=0; i<words.size(); i++)\n\t\t\tscores.add(Utils.getScore(words.get(i)));\n\t\tSystem.out.println(scores);\n\t\t\n\t\tfor(int i=1; i<100; i++)\n\t\t\ttriangles.add( (i*(i+1)/2) );\n\t\t\n\t\tfor(int i=0; i<words.size(); i++) {\n\t\t\tint n = scores.get(i);\n\t\t\tif( triangles.contains(n) )\n\t\t\t\tans++;\n\t\t}\n\t\tSystem.out.println(ans);\n\t}\n}\n/*\nThe nth term of the sequence of triangle numbers is given by, tn = �n(n+1); so the first ten triangle numbers are:\n\n1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...\n\nBy converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a triangle number then we shall call the word a triangle word.\n\nUsing words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?\n*/"

/***/ }),

/***/ 1215:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler43 {\n\tpublic static void main(String[] args) {//16695334890\n\t\t//System.out.println(d(1406357289));\n\t\t//System.out.println(isPandigital(1406357289));\n\t\t//System.out.println(d(146357289));\n\t\t//if(true) return;\n\t\tlong ans = 0;\n\t\tfor(long i=1023456789; i<=9876543210L; i++) {\n\t\t\tif(Integer.parseInt(Long.toString(i).substring(7, 10))%17!=0) {continue;}\n\t\t\tif(Integer.parseInt(Long.toString(i).substring(5))!=5) {continue;}\n\t\t\tif(Integer.parseInt(Long.toString(i).substring(5, 8))%11!=0) {continue;}\n\t\t\tif(Integer.parseInt(Long.toString(i).substring(6, 6))%13!=0) {continue;}\t\t\t\n\t\t\tif(isPandigital(i)) \n\t\t\t\tif(d(i))\n\t\t\t\t\tans+=i;\n\t\t\t\t\t\n\t\t}\n\t\tSystem.out.println(ans);\n\t}\n\tprivate static boolean isPandigital(long i) {\n\t\tString s = Long.toString(i);\n\t\tfor(int x=0; x<=s.length()-1; x++) {\n\t\t\tif(!s.contains(Integer.toString(x))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t\t\n\t\treturn true;\n\t}\n\tstatic boolean d(long i) {\n\t\tlong[] primes = {2,3,5,7,11,13,17};\n\t\tint p = 0;\n\t\tString s = Long.toString(i);\n\t\tfor(int digit=1; digit<=7; digit++) {\n\t\t\tlong num = Integer.parseInt(s.substring(digit, digit+3));\n\t\t\t//System.out.println(num+\" / \"+primes[p]);\n\t\t\tif(!(num%primes[p]==0)) return false;\n\t\t\telse p++;\n\t\t}\n\t\tSystem.out.println(s+\" ++\");\n\t\treturn true;\n\t}\n}"

/***/ }),

/***/ 1216:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.ArrayList;\n\npublic class euler44 {\n\tpublic static void main(String[] args) {\n\t\tArrayList<Integer> a = new ArrayList<Integer>();\n\t\tfor(int n=1; n<=2400; n++)\n\t\t\ta.add( n*(3*n-1)/2 );\n\t\t\n\t\tfor(int j=0; j<2400; j++) {\n\t\t\tfor(int k=0; k<2400; k++) {\n\t\t\t\tif(j==k) continue;\n\t\t\t\tif(!a.contains( a.get(j)+a.get(k) )) continue;\n\t\t\t\tint stuff = a.get(j)-a.get(k);\n\t\t\t\tif(!a.contains( stuff )) continue;\n\t\t\t\tSystem.out.println(stuff);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n}\n/*\nPentagonal numbers are generated by the formula, P_n=n(3n-1)/2. The first ten pentagonal numbers are:\n\n1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...\n\nIt can be seen that P_4 + P_7 = 22 + 70 = 92 = P_8. However, their difference, 70  22 = 48, is not pentagonal.\n\nFind the pair of pentagonal numbers, P_j and P_k, for which their sum and difference is pentagonal and D = |P_k - P_j| is minimised; what is the value of D?\n*/"

/***/ }),

/***/ 1217:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigDecimal;\nimport java.math.BigInteger;\nimport java.util.ArrayList;\n\npublic class euler45 {\n\tpublic static void main(String[] args) {\n\t\tArrayList<BigInteger> tri = new ArrayList<BigInteger>();\n\t\t//ArrayList<Integer> pent = new ArrayList<Integer>();\n\t\t//ArrayList<Integer> hex = new ArrayList<Integer>();\n\t\t\n\t\tfor(BigInteger n=new BigInteger(\"286\"); n.compareTo(new BigInteger(\"1000000\"))==-1; n=n.add(BigInteger.ONE)) {\n\t\t\ttri.add( n.multiply((n.add(BigInteger.ONE))).divide(new BigInteger(\"2\")) );\n\t\t\t//pent.add( n*(3*n-1)/2 );\n\t\t\t//hex.add( n*(2*n-1) );\n\t\t}\n\t\t//System.out.println(tri);\n\t\t//System.out.println(pent);\n\t\t//System.out.println(hex);\n\t\t\n\t\tint i=0;\n\t\twhile(true) {\n\t\t\tBigInteger x=tri.get(i);\n\t\t\t\n\t\t\tif(isPentagonal(x))\n\t\t\t\tif(isHexagonal(x))\n\t\t\t\t\tSystem.out.println(x);\n\t\t\t\n\t\t\ti++;\n\t\t}\n\t}\n\tstatic boolean isPentagonal(int n) {\n\t\tdouble p = ((Math.sqrt(1 + 24*n) + 1) / 6);\n\t\treturn p == (int) p;\n\t}\n\tstatic boolean isHexagonal(int n) {\n\t\tdouble p = ((Math.sqrt(1 + 8*n) + 1) / 4);\n\t\treturn p == (int) p;\n\t}\n\tstatic boolean isPentagonal(BigInteger n) {\n\t\ttry {\n\t\t\tBigDecimal p = ((new BigSquareRoot().get(BigInteger.ONE.add(n.multiply(new BigInteger(\"24\")))).add(BigDecimal.ONE)).divide(new BigDecimal(\"6\")));\n\t\t\treturn p.compareTo( p.setScale(0, BigDecimal.ROUND_HALF_UP) )==0;\n\t\t} catch(ArithmeticException e) {return false;}\n\t}\n\tstatic boolean isHexagonal(BigInteger n) {\n\t\ttry {\n\t\t\tBigDecimal p = ((new BigSquareRoot().get(BigInteger.ONE.add(n.multiply(new BigInteger(\"8\")))).add(BigDecimal.ONE)).divide(new BigDecimal(\"4\")));\n\t\t\treturn p.compareTo( p.setScale(0, BigDecimal.ROUND_HALF_UP) )==0;\n\t\t} catch(ArithmeticException e) {return false;}\n\t}\n}\n/*\nTriangle, pentagonal, and hexagonal numbers are generated by the following formulae:\n\nTriangle\t \tTn=n*(n+1)/2\t \t1, 3, 6, 10, 15, ...\nPentagonal\t \tPn=n*(3*n-1)/2\t \t1, 5, 12, 22, 35, ...\nHexagonal\t \tHn=n*(2*n-1)\t \t1, 6, 15, 28, 45, ...\nIt can be verified that T285 = P165 = H143 = 40755.\n\nFind the next triangle number that is also pentagonal and hexagonal.\n*/"

/***/ }),

/***/ 1218:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.ArrayList;\n\npublic class euler46 {\n\tpublic static void main(String[] args) {\n\t\tArrayList<Integer> primes = new ArrayList<Integer>();\n\t\tArrayList<Integer> composites = new ArrayList<Integer>();\n\t\tfor(int i=1; i<6000; i++) {\n\t\t\tif(Utils.isPrime(i)) primes.add(i);\n\t\t\telse if(i%2!=0) composites.add(i);\n\t\t}\n\t\tint x;\n\t\tfor(int i=0; i<composites.size(); i++) {\n\t\t\tx = composites.get(i);\n\t\t\tboolean br = false;\n\t\t\tfor(int k=0; k<primes.size(); k++) {\n\t\t\t\tbr = false;\n\t\t\t\tfor(int j=1; j<6000-x; j++) {\n\t\t\t\t\tif(x==primes.get(k)+2*j*j) {br=true; break;}\n\t\t\t\t}\n\t\t\t\tif(br) break;\n\t\t\t}\n\t\t\tif(!br) {System.out.println(x); break;}\n\t\t}\n\t}\n}"

/***/ }),

/***/ 1219:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nclass euler47 {\n\tpublic static void main(String[] args) {\n\t\tint[] primes = primeSieve.sieve(100000);\n\t\t\n\t\tint consec = 1;\n\t\tint result = 2 * 3 * 5 * 7;\n\t\t\n\t\twhile (consec < 4) {\n\t\t    result++;\n\t\t    if (primeFacs(result, primes) >= 4)\n\t\t        consec++;\n\t\t    else\n\t\t        consec = 0;\n\t\t}\n\t\t\n\t\tSystem.out.println(result-3);\n\t}\n\tprivate static int primeFacs(int number, int[] primes) {\n\t    int nod = 0;\n\t    boolean pf;\n\t    int remain = number;\n\t \n\t    for (int i=0; i<primes.length; i++) {\n\t        if (primes[i] * primes[i] > number)\n\t            return ++nod;\n\t \n\t        pf = false;\n\t        while (remain % primes[i] == 0) {\n\t            pf = true;\n\t            remain = remain / primes[i];\n\t        }\n\t        if (pf)\n\t            nod++;\n\t \n\t        if (remain == 1)\n\t            return nod;\n\t    }\n\t    return nod;\n\t}\n}\n/*\nThe first two consecutive numbers to have two distinct prime factors are:\n\n14 = 2 x 7\n15 = 3 x 5\n\nThe first three consecutive numbers to have three distinct prime factors are:\n\n644 = 2� x 7 x 23\n645 = 3 x 5 x 43\n646 = 2 x 17 x 19.\n\nFind the first four consecutive integers to have four distinct primes factors. What is the first of these numbers?\n*/"

/***/ }),

/***/ 1220:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.ArrayList;\n\npublic class euler49 {\n\tpublic static void main(String[] args) throws Exception {\n\t\tfor(int i=1000; i<=3339; i++) {\n\t\t\tint a = i, b = i+3330, c = b+3330;\n\t\t\tif(!Utils.isPrime(a) || !Utils.isPrime(b) || !Utils.isPrime(c)) continue;\n\t\t\tif(!sameDigits(a,b) || !sameDigits(a,c)) continue;\n\t\t\tSystem.out.println(a+\"\"+b+\"\"+c);\n\t\t}\n\t}\n\tstatic boolean sameDigits(int a, int b) throws Exception {\n\t\tArrayList<Integer> digits = getDigits(a);\n\t\tArrayList<Integer> digits2 = getDigits(b);\n\t\tif(Integer.toString(a).length() != Integer.toString(b).length())\n\t\t\tSystem.out.println(\"sameDigits method: Integers a and b are of different digit lengths.\");\n\t\t\n\t\tfor(int i=0; i<digits.size(); i++) {\n\t\t\tif(digits2.contains(digits.get(i))) continue;\n\t\t\telse {return false;}\n\t\t}\n\t\treturn true;\n\t}\n\tstatic ArrayList<Integer> getDigits(int x) throws Exception {\n\t\tArrayList<Integer> digits = new ArrayList<Integer>();\t\t\n\t\tfor(int i=0; i<Integer.toString(x).length(); i++)\n\t\t\tdigits.add(Integer.parseInt(Character.toString(Integer.toString(x).charAt(i))));\t\t\n\t\treturn digits;\n\t}\n}"

/***/ }),

/***/ 1221:
/***/ (function(module, exports) {

module.exports = "//***********************\n// Andrew Koroluk       *\n// Project Euler - 5    *\n//***********************\n\npublic class euler5 {\n\tpublic static void main(String [] args) {\n\t\tint num=1;\n\n\t\twhile(num<1000000000) {\n\t\t\tfor(int i=2; i<=20; i++) {\n\t\t\t\tif(num%i==0) {\n\t\t\t\t\tcontinue;\n\t\t\t\t\tif(i==20) {\n\t\t\t\t\t\tSystem.out.println(num);\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse break;\n\t\t\t}\n\t\t}\n\t}\n}\n\n//232792560"

/***/ }),

/***/ 1222:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\n//import java.util.ArrayList;\n\npublic class euler50 {\n\tpublic static int max = 0;\n\tpublic static void main(String args[]) {\n\t\tint sum = 0;\n\t\tint count=0;\n\t\tfor(int i = 2; i <4000; i++) {\n\t\t\tcount=0;\n\t\t\tsum = 0;\n\t\t\tfor(int j = i; j<4000;j++)          \n\t\t\t\tif(Utils.isPrime(j)) {\n\t\t\t\t\tcount++;\n\t\t\t\t\tsum = sum + j;\n\t\t\t\t\tif(Utils.isPrime(sum))\n\t\t\t\t\t\tif(sum<1000000)\n\t\t\t\t\t\t\tif(max<count) {\n\t\t\t\t\t\t\t\tmax = count;\n\t\t\t\t\t\t\t\tSystem.out.println(sum);\t//997651\n\t\t\t\t\t\t\t}\n\t\t\t\t}\n\t\t}\n\t}\n}\n\n/*\nThe prime 41, can be written as the sum of six consecutive primes:\n\n41 = 2 + 3 + 5 + 7 + 11 + 13\nThis is the longest sum of consecutive primes that adds to a prime below one-hundred.\n\nThe longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.\n\nWhich prime, below one-million, can be written as the sum of the most consecutive primes?\n*/"

/***/ }),

/***/ 1223:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.Scanner;\n\npublic class euler51 {\n\tpublic static void main(String[] args) throws Exception {\n\t\t/*ArrayList<Integer> primes = new ArrayList<Integer>();\n\t\tint pos = 0;\n\t\tfor(int i=99999; i<1000000; i++) {\n\t\t\tif(Utils.isPrime(i)) {\n\t\t\t\tprimes.add(pos, i);\n\t\t\t\tpos++;\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(replace(999999,0,2,4,1));*/\n\t\tSystem.out.println(Utils.isPrime(120303));\n\t\t\n\t\tfor(int i=99999; i<1000000; i++) {\n\t\t\tint prime = 0;\n\t\t\t/*for(int j=0; j<6; j++)\n\t\t\t\tfor(int q=0; q<6 && q!=j; q++)\n\t\t\t\t\tfor(int l=0; l<6 && l!=q; l++)*/\n\t\t\t\t\t\tfor(int k=1; k<10; k++)\n\t\t\t\t\t\t\tif(Utils.isPrime(replace(i,0,2,4,k))) {prime++; System.out.println(replace(i,0,2,4,k)+\" \"+Utils.isPrime(replace(i,0,2,4,k)));}\n\t\t\tif(prime==8) {System.out.println(i+\" \"+Utils.isPrime(i)); new Scanner(System.in).nextLine();}\n\t\t}\n\t}\n\n\tstatic int replace(int i, int j, int q, int l, int k) {\n\t\tString str = Integer.toString(i);\n\t\tString ans = \"\";\n\t\tfor(int w=0; w<str.length(); w++) {\n\t\t\tif (w==j || w==q || w==l) ans+=k;\n\t\t\telse ans+= str.charAt(w);\n\t\t}\n\t\treturn Integer.parseInt(ans);\n\t}\n}\n\n/*By replacing the 1st digit of *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.\n\nBy replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.\n\nFind the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.*/"

/***/ }),

/***/ 1224:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.ArrayList;\n\npublic class euler52 {\n\tpublic static void main(String[] args) throws Exception {\n\t\tSystem.out.println(getDigits(1234567890));\n\t\tint x=100000;\n\t\tArrayList<Integer> digits = new ArrayList<Integer>();\n\t\twhile(true) {\n\t\t\tx++;\n\t\t\tdigits = getDigits(x);\n\t\t\tboolean cool=true;\n\t\t\tfor(int y=2; y<=6; y++) {\n\t\t\t\tint num = y*x;\n\t\t\t\tArrayList<Integer> digits2 = getDigits(num);\n\t\t\t\tfor(int i=0; i<digits.size(); i++) {\n\t\t\t\t\tif(digits2.contains(digits.get(i))) continue;\n\t\t\t\t\telse {cool=false; break;}\n\t\t\t\t}\n\t\t\t\tif(!cool) break;\n\t\t\t}\n\t\t\tif(!cool) continue;\n\t\t\telse { System.out.println(x); break; }\t\t\t\n\t\t}\n\t}\n\tstatic ArrayList<Integer> getDigits(int x) throws Exception {\n\t\tArrayList<Integer> digits = new ArrayList<Integer>();\t\t\n\t\tfor(int i=0; i<Integer.toString(x).length(); i++)\n\t\t\tdigits.add(Integer.parseInt(Character.toString(Integer.toString(x).charAt(i))));\t\t\n\t\treturn digits;\n\t}\n}\n/*\nIt can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.\n\nFind the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.\n*/"

/***/ }),

/***/ 1225:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\n\npublic class euler53 {\n\tpublic static void main(String[] args) {\n\t\tint ans = 0;\n\t\tfor(int n=1; n<=100; n++) {\n\t\t\tfor(int r=1; r<=n; r++) {\n\t\t\t\ttry {\n\t\t\t\t\t//System.out.println(n+\" \"+r+\" \"+Utils.nCr(n,r));\n\t\t\t\t\tif(Utils.nCr(BigInteger.valueOf(n),BigInteger.valueOf(r)).compareTo(BigInteger.valueOf(1000000))>0)\n\t\t\t\t\t\tans++;\n\t\t\t\t}\n\t\t\t\tcatch(Exception E) {\n\t\t\t\t\tSystem.out.println(\"whoops\");\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(\"And the winner is: \"+ans); //4075\n\t}\n\t//int nCr(int n, int r)\n}\n\n/*\nThere are exactly ten ways of selecting three from five, 12345:\n\n123, 124, 125, 134, 135, 145, 234, 235, 245, and 345\n\nIn combinatorics, we use the notation, 5C3 = 10.\n\nIn general,\n\nnCr =\t\nn!\nr!(nr)!\n,where r  n, n! = n(n1)...321, and 0! = 1.\nIt is not until n = 23, that a value exceeds one-million: 23C10 = 1144066.\n\nHow many, not necessarily distinct, values of  nCr, for 1  n  100, are greater than one-million?\n*/"

/***/ }),

/***/ 1226:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.ArrayList;\nimport java.util.Scanner;\n\npublic class euler54 {\n\tpublic static void main(String[] args) throws FileNotFoundException {\n\t\tArrayList<String> player1 = new ArrayList<String>();\n\t\tArrayList<String> player2 = new ArrayList<String>();\n\t\tint ans=0;\n\t\t\n\t\tScanner s = new Scanner(new File(\"poker.txt\"));\n\t\t\n\t\twhile(s.hasNextLine()) {\n\t\t\tString str = s.nextLine();\n\t\t\tplayer1.add(str.substring(0,14));\n\t\t\tplayer2.add(str.substring(15));\n\t\t}\n\t\tfor(int i=0; i<player1.size(); i++) {\n\t\t\tif(whoWon(player1.get(i), player2.get(i))==1) ans++;\n\t\t\tSystem.out.println(\"P1 \"+player1.get(i)+\" \"+getScore(player1.get(i))+\"\\nP2 \"+player2.get(i)+\" \"+getScore(player2.get(i)));\n\t\t\tSystem.out.println(whoWon(player1.get(i), player2.get(i)));\n\t\t}\n\t\tSystem.out.println(\"Ans = \"+ans);\t//376\n\t}\n\t@SuppressWarnings(\"unused\")\n\tprivate static void test() {\n\t\tSystem.out.println(whoWon(\"5H 5C 6S 7S KD\",\"2C 3S 8S 8D TD\"));//2\n\t\tSystem.out.println(whoWon(\"5D 8C 9S JS AC\",\"2C 5C 7D 8S QH\"));//1\n\t\tSystem.out.println(whoWon(\"2D 9C AS AH AC\",\"3D 6D 7D TD QD\"));//2\n\t\tSystem.out.println(whoWon(\"4D 6S 9H QH QC\",\"3D 6D 7H QD QS\"));//1\n\t\tSystem.out.println(whoWon(\"2H 2D 4C 4D 4S\",\"3C 3D 3S 9S 9D\"));//1\n\t\tSystem.out.println(CardToNum('A'));\n\t\tSystem.out.println(getScore(\"2H 2D 4C 4D 4S\")); //60404040202\n\t}\n\tstatic int whoWon(String p1, String p2) {\n\t\tlong s1, s2;\n\t\t//System.out.println(\"s1 \"+p1+\" \"+getScore(p1)+\"\\ns2 \"+p2+\" \"+getScore(p2));\n\t\ts1 = getScore(p1);\n\t\ts2 = getScore(p2);\n\t\t\n\t\tif(s1==s2) {\n\t\t\tSystem.out.println(\"s1 \"+p1+\" \"+getScore(p1)+\"\\ns2 \"+p2+\" \"+getScore(p2));\n\t\t\treturn 0;\n\t\t}\n\t\telse if(s1>s2) return 1;\n\t\telse return 2;\n\t}\n\tprivate static long getScore(String s) {\n\t\tint[] cards = {CardToNum(s.charAt(0)), CardToNum(s.charAt(3)), CardToNum(s.charAt(6)), CardToNum(s.charAt(9)), CardToNum(s.charAt(12)), };\n\t\tUtils.quickSort(cards, 0, 4);\n\t\t\n\t\tboolean sameSuit = false;\n\t\tboolean straight = false;\n\t\tlong ans=00000000000;\n\t\tlong card1=0,card2=0,card3=0,card4=0,card5=0;\n\t\t\n\t\t//if all cards are same suit\n\t\tif(\ts.charAt(1)==s.charAt(4) && s.charAt(4)==s.charAt(7) && s.charAt(7)==s.charAt(10) && s.charAt(10)==s.charAt(13)) {\n\t\t\tif(cards[0]==10 && cards[1]==11 && cards[2]==12 && cards[3]==13 && cards[4]==14) return 91413121110L;\n\t\t\tsameSuit = true;\n\t\t}\n\t\t\n\t\t//if there is a straight (including ace first)\n\t\tint one = cards[0];\n\t\tif(cards[0]==2 && cards[1]==3 && cards[2]==4 && cards[3]==5 && cards[4]==14) straight=true;\n\t\telse if(cards[1]==one+1 && cards[2]==one+2 && cards[3]==one+3 && cards[4]==one+4) straight=true;\n\t\tif(sameSuit && straight) {\n\t\t\tcard1=cards[4]*100000000; card2=cards[3]*1000000; card3=cards[2]*10000; card4=cards[1]*100; card5=cards[0]; \n\t\t\treturn 80000000000L + card1+card2+card3+card4+card5;\n\t\t}\n\t\t\n\t\tArrayList<Integer> a = array2AList(cards);\n\t\t\n\t\tboolean twoKind=false, threeKind=false, twoPair=false;\n\t\tfor(int i=0; a.size()!=0; ) {\n\t\t\tint card = a.get(i);\n\t\t\tint mult=1;\n\t\t\tfor(int j=1; j<a.size(); j++) {\n\t\t\t\tif(i==j) continue;\n\t\t\t\tif(card==a.get(j)) {\n\t\t\t\t\tmult++;\n\t\t\t\t\ta.remove(j);\n\t\t\t\t\tj--;\n\t\t\t\t}\n\t\t\t}\n\t\t\tif(mult==4) {\n\t\t\t\tans+= 70000000000L;\n\t\t\t\tans+= card*100000000 + card*1000000 + card*10000 + card*100;\n\t\t\t\ta.remove(i);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tif(mult==3) {\n\t\t\t\tthreeKind=true;\n\t\t\t\tans+= card*100000000 + card*1000000 + card*10000;\n\t\t\t\tcard1=card;\n\t\t\t\ta.remove(i);\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif(twoKind&&mult==2) {\n\t\t\t\ttwoPair=true;\n\t\t\t\tif(card>card1) {\n\t\t\t\t\tcard3=card1; card4=card1;\n\t\t\t\t\tcard1=card; card2=card;\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tcard3=card; card4=card;\n\t\t\t\t}\n\t\t\t\tans+= card1*100000000 + card2*1000000 + card3*10000 + card4*100;\n\t\t\t\ta.remove(i);\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif(mult==2) {\n\t\t\t\ttwoKind=true;\n\t\t\t\tcard1=card; card2=card;\n\t\t\t}\n\t\t\ta.remove(i);\n\t\t}\n\t\t\n\t\tif(threeKind && twoKind) {\n\t\t\tans+= card1*100 + card2;\n\t\t\treturn 60000000000L + ans;\n\t\t}\n\t\tif(sameSuit) return 50000000000L + cards[4]*100000000 + cards[3]*1000000 + cards[2]*10000 + cards[1]*100 + cards[0];\n\t\tif(straight) return 40000000000L + card1*100000000 + card2*1000000 + card3*10000 + card4*100 + card5;\n\t\tif(threeKind) {\n\t\t\tint var = 100;\n\t\t\tfor(int i=cards.length-1; i>=0; i--) {\n\t\t\t\tint temp = cards[i];\n\t\t\t\tif(temp==card1) continue;\n\t\t\t\tans += temp*var;\n\t\t\t\tvar/=100;\n\t\t\t}\n\t\t\treturn 30000000000L + ans + card4*100 + card5;\n\t\t}\n\t\tif(twoPair) {\n\t\t\tfor(int i=cards.length-1; i>=0; i--) {\n\t\t\t\tint temp = cards[i];\n\t\t\t\tif(temp==card1 || temp==card3) continue;\n\t\t\t\tans += temp;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\treturn 20000000000L + ans + card1*100000000 + card2*1000000;\n\t\t}\n\t\tif(twoKind) {\n\t\t\tint var = 10000;\n\t\t\tfor(int i=cards.length-1; i>=0; i--) {\n\t\t\t\tint temp = cards[i];\n\t\t\t\tif(temp==card1) continue;\n\t\t\t\tans += temp*var;\n\t\t\t\tvar/=100;\n\t\t\t}\n\t\t\treturn 10000000000L + card1*100000000 + card2*1000000 + ans;\n\t\t}\n\t\t\n\t\treturn cards[4]*100000000 + cards[3]*1000000 + cards[2]*10000 + cards[1]*100 + cards[0];\n\t}\n\tstatic int CardToNum(char c) {\n\t\tif(c>='2' && c<='9') return Integer.parseInt(Character.toString(c));\n\t\tif(c=='T') return 10;\n\t\telse if(c=='J') return 11;\n\t\telse if(c=='Q') return 12;\n\t\telse if(c=='K') return 13;\n\t\telse if(c=='A') return 14;\n\t\telse return 0;\n\t}\n\tstatic ArrayList<Integer> array2AList(int[] array) {\n\t\tArrayList<Integer> a = new ArrayList<Integer>();\n\t\tfor(int i=0; i<array.length; i++)\n\t\t\ta.add(array[i]);\n\t\treturn a;\n\t}\n}\n/*\n0 High Card: Highest value card.\n1 One Pair: Two cards of the same value.\n2 Two Pairs: Two different pairs.\n3 Three of a Kind: Three cards of the same value.\n4 Straight: All cards are consecutive values.\n5 Flush: All cards of the same suit.\n6 Full House: Three of a kind and a pair.\n7 Four of a Kind: Four cards of the same value.\n8 Straight Flush: All cards are consecutive values of same suit.\n9 Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.\n*/"

/***/ }),

/***/ 1227:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nclass Lychrel {\n\n}\n\npublic class euler55 {\n\t@SuppressWarnings(\"static-access\")\n\tpublic static void main(String[] args) {\n\t\tUtils utils = new Utils();\n\n\t\tint lychrels = 0;\n\t\tfor(int i=1; i<=10000; i++) {\n\t\t\tif(utils.Lychrel(i)) {\n\t\t\t\tlychrels++;\n\t\t\t\tSystem.out.println(i);\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(lychrels);\n\t}\n}\n\n/*\nIf we take 47, reverse and add, 47 + 74 = 121, which is palindromic.\n\nNot all numbers produce palindromes so quickly. For example,\n\n349 + 943 = 1292,\n1292 + 2921 = 4213\n4213 + 3124 = 7337\n\nThat is, 349 took three iterations to arrive at a palindrome.\n\nAlthough no one has proved it yet, it is thought that some numbers, like 196, never produce a palindrome. A number that never forms a palindrome through the reverse and add process is called a Lychrel number. Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise. In addition you are given that for every number below ten-thousand, it will either (i) become a palindrome in less than fifty iterations, or, (ii) no one, with all the computing power that exists, has managed so far to map it to a palindrome. In fact, 10677 is the first number to be shown to require over fifty iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).\n\nSurprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994.\n\nHow many Lychrel numbers are there below ten-thousand?\n*/"

/***/ }),

/***/ 1228:
/***/ (function(module, exports) {

module.exports = "import java.math.BigInteger;\n\n/*\n * Andrew Koroluk\n */\n\npublic class euler56 {\n\tpublic static void main(String[] args) {\n\t\tint ans = 0;\n\t\tfor(int i=99; i>10; i--) {\n\t\t\tfor(int j=99; j>10; j--) {\n\t\t\t\tint temp = 0;\n\t\t\t\tBigInteger n = new BigInteger(Integer.toString(i));\n\t\t\t\tn = n.pow(j);\n\t\t\t\tString s = n.toString();\n\t\t\t\tSystem.out.println(s);\n\t\t\t\tfor(int k=0; k<s.length(); k++)\n\t\t\t\t\ttemp+= Integer.parseInt((Character.toString(s.charAt(k))));\n\t\t\t\tif(temp>ans) ans=temp;\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(ans);\t//972\n\t}\n}"

/***/ }),

/***/ 1229:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\n\npublic class euler57 {\n\tpublic static void main(String[] args) {\n\t\tBigInteger[] N = new BigInteger[2];\n\t\tBigInteger[] D = new BigInteger[2];\n\t\tN[0] = new BigInteger(\"3\");\n\t\tN[1] = new BigInteger(\"7\");\n\t\tD[0] = new BigInteger(\"2\");\n\t\tD[1] = new BigInteger(\"5\");\n\t\t\n\t    int i = 0, ans = 0;\n\t    for(int x = 3; x<=1000; x++) {\n\t\t\tN[i] = (N[(i+1)%2].multiply(new BigInteger(\"2\"))).add(N[i]);\n\t\t\tD[i] = (D[(i+1)%2].multiply(new BigInteger(\"2\"))).add(D[i]);\n\t\t\tif( N[i].toString().length() > D[i].toString().length() ) ans++;\n\t\t\ti = (i+1)%2;\n\t    }\n\t    System.out.println(ans);\t//153\n\t}\n}"

/***/ }),

/***/ 1230:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler58 {\n\tpublic static void main(String[] args) {\n\t\tint P=0, d=1, n=2;\n\t\tfloat avg=1;\n\t\t  \n\t\twhile( avg >= .10 ) {\n\t\t\tif(Utils.isPrime(d+n)) P++;\n\t\t\tif(Utils.isPrime(d+n*2)) P++;\n\t\t\tif(Utils.isPrime(d+n*3)) P++;\n\t\t\td += n*4;\n\t\t\tn += 2;\n\t\t\tavg = (float)P/(2*n);\n\t\t}\n\t\t\n\t\tSystem.out.println(n-1);\t//26241\n\t}\n}"

/***/ }),

/***/ 1231:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.util.ArrayList;\n\npublic class euler59 {\n\tpublic static void main(String[] args) {\n\t\tlong time = System.currentTimeMillis();\n\t\tArrayList<Integer> file = new ArrayList<Integer>();\n\t\tString in=\"\";\n\t\ttry {\n\t\t\tin = new BufferedReader(new FileReader(\"cipher1.txt\")).readLine();\n\t\t} catch (Exception e1) { e1.printStackTrace(); }\n\t\t\n\t\t\n\t\tString s = \"\";\n\t\tfor(int index=0; index<in.length(); index++) {\n\t\t\tif(in.charAt(index)==',') {\n\t\t\t\tfile.add(Integer.parseInt(s));\n\t\t\t\ts=\"\";\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\ts += Character.toString(in.charAt(index));\n\t\t}\n\t\tfile.add(Integer.parseInt(s));\n\t\t\n\t\tArrayList<String> crap = new ArrayList<String>();\n\t\tfor(int i=0; i<file.size(); i++)\n\t\t\tcrap.add(num2Binary(file.get(i)));\t\t\n\t\t\n\t\tint ans = 0;\n\t\tString ans2 = \"\";\n\t\tfor(int a=97; a<=122; a++) {\n\t\t\tfor(int b=97; b<=122; b++) {\n\t\t\t\tfor(int c=97; c<=122; c++) {\n\t\t\t\t\tString str = crap2WIN(crap,a,b,c);\n\t\t\t\t\tint newAns = countLetters(str);\n\t\t\t\t\tif(newAns>ans) {\n\t\t\t\t\t\tans = newAns;\n\t\t\t\t\t\tans2 = str;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(Answer(ans2));\t//107359\n\t\tSystem.out.println((System.currentTimeMillis() - time) / 1000 + \" seconds\");\n\t}\n\tprivate static int Answer(String s) {\n\t\tint ans = 0;\n\t\tfor(int i=0; i<s.length(); i++)\n\t\t\tans += (int)s.charAt(i);\n\t\t\n\t\treturn ans;\n\t}\n\tstatic int countLetters(String s) {\n\t\tint ans = 0;\n\t\tfor(int i=0; i<s.length(); i++) {\n\t\t\tint x = (int)s.charAt(i);\n\t\t\tif( x>=97 && x<=122 ) ans++;\n\t\t}\n\t\t\n\t\treturn ans;\n\t}\n\tstatic int binary2Num(String s) {\n\t\tint ans=0, var=1;\n\t\tfor(int i=s.length()-1; i>=0; i--) {\n\t\t\tif(s.charAt(i)=='1') {\n\t\t\t\tans += var;\n\t\t\t}\n\t\t\tvar*=2;\n\t\t}\n\t\treturn ans;\n\t}\n\tstatic String num2Binary(int num) {\n\t\tString binary = \"\";\n\t\twhile(num!=0) {\n\t\t\tbinary = Integer.toString(num%2).concat(binary);\n\t\t\tnum/=2;\n\t\t}\n\t\treturn binary;\n\t}\n\tstatic String XOR(String a, String b) {\n\t\twhile(a.length()<8)\n\t\t\ta = \"0\"+a;\n\t\twhile(b.length()<8)\n\t\t\tb = \"0\"+b;\n\t\t\n\t\tString ans = \"\";\n\t\tfor(int i=7; i>=0; i--) {\n\t\t\tif(a.charAt(i)==b.charAt(i)) ans = \"0\"+ans;\n\t\t\telse ans = \"1\"+ans;\n\t\t}\n\t\t//for(int i=0; i<a.length()-b.length();)\n\t\treturn ans;\n\t}\n\tstatic String num2String(int n) {\n\t\treturn Character.toString((char)n);\n\t}\n\tstatic String crap2WIN(ArrayList<String> crap, int a, int b, int c) {\n\t\tString ans=\"\";\n\t\tint x=1;\n\t\tfor(int i=0; i<crap.size(); i++) {\n\t\t\tString pass=\"\";\n\t\t\tif(x==1) \t\tpass = num2Binary(a);\n\t\t\telse if(x==2) \tpass = num2Binary(b);\n\t\t\telse { \t\t\tpass = num2Binary(c); x=0; }\n\t\t\t//System.out.println(crap.get(i)+\" XOR \"+pass+\" = \"+XOR( crap.get(i), pass ));\n\t\t\tans += num2String(binary2Num(XOR( crap.get(i), pass )));\n\t\t\tx++;\n\t\t}\t\t\n\t\treturn ans;\t\t\n\t}\n}"

/***/ }),

/***/ 1232:
/***/ (function(module, exports) {

module.exports = "//***********************\n// Andrew Koroluk       *\n// Project Euler - 6    *\n//***********************\n\npublic class euler6\n{\n\tpublic static void main(String [] args)\n\t{\n\t\tint num1=1, num2=1, sum1=0, sum2=0, sum3=0;\n\n\t\twhile(num1<=100)\n\t\t{\n\n\t\t\tsum1 = sum1 + (num1*num1);\n\t\t\tnum1++;\n\t\t}\n\t\twhile(num2<=100)\n\t\t{\n\t\t\tsum2 = sum2 + num2;\n\t\t\tnum2++;\n\t\t}\n\t\tsum2 = (sum2*sum2);\n\t\tsum3 = sum2-sum1;\n\t\tSystem.out.println(sum3);\n\t}\n}"

/***/ }),

/***/ 1233:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.HashSet;\n\npublic class euler60 {\n\tstatic int[] primes;\n\tpublic static void main(String[] args) {\n\t\tint result = Integer.MAX_VALUE;\n\t\tSystem.out.println(result);\n\t\tprimes = primeSieve.sieve(30000);\n\t\t\n\t\t@SuppressWarnings(\"rawtypes\")\n\t\tHashSet[] pairs = new HashSet[primes.length];\n\t\t \n\t\tfor (int a = 1; a < primes.length; a++) {\n\t\t    if (primes[a] * 5 >= result) break;\n\t\t    if (pairs[a] == null) pairs[a] = MakePairs(a);\n\t\t    for (int b = a + 1; b < primes.length; b++) {\n\t\t        if (primes[a] + primes[b] * 4 >= result) break;\n\t\t        if (!pairs[a].contains(primes[b])) continue;\n\t\t        if (pairs[b] == null) pairs[b] = MakePairs(b);\n\t\t \n\t\t        for (int c = b + 1; c < primes.length; c++) {\n\t\t            if (primes[a] + primes[b] + primes[c] * 3 >= result) break;\n\t\t            if (!pairs[a].contains(primes[c]) || !pairs[b].contains(primes[c])) continue;\n\t\t            if (pairs[c] == null) pairs[c] = MakePairs(c);\n\n\t\t            for (int d = c + 1; d < primes.length; d++) {\n\t\t                if (primes[a] + primes[b] + primes[c] + primes[d] * 2 >= result) break;\n\t\t                if (!pairs[a].contains(primes[d]) ||\n\t\t                !pairs[b].contains(primes[d]) ||\n\t\t                !pairs[c].contains(primes[d])) continue;\n\t\t                if (pairs[d] == null) pairs[d] = MakePairs(d);\n\t\t \n\t\t                for (int e = d + 1; e < primes.length; e++) {\n\t\t                    if (primes[a] + primes[b] + primes[c] + primes[d] + primes[e] >= result) break;\n\t\t                    if (!pairs[a].contains(primes[e]) ||\n\t\t                    !pairs[b].contains(primes[e]) ||\n\t\t                    !pairs[c].contains(primes[e]) ||\n\t\t                    !pairs[d].contains(primes[e])) continue;\n\t\t \n\t\t                    if (result > primes[a] + primes[b] + primes[c] + primes[d] + primes[e])\n\t\t                        result = primes[a] + primes[b] + primes[c] + primes[d] + primes[e];\n\t\t \n\t\t                    System.out.println(primes[a] +\" \" + primes[b] +\" \" + primes[c] +\" \" + primes[d] +\" \" + primes[e] +\" \" + result);\n\t\t                    break;\t//26033\n\t\t                }\n\t\t            }\n\t\t        }\n\t\t    }\n\t\t}\n\t}\n\tstatic int concat(int a, int b) {\n\t\ttry {\n\t\t\treturn Integer.parseInt(Integer.toString(a) + Integer.toString(b));\n\t\t} catch(NumberFormatException e) {\n\t\t\t//e.printStackTrace();\n\t\t\treturn 0;\n\t\t}\n\t}\n\tprivate static HashSet<Integer> MakePairs(int a) {\n\t    HashSet<Integer> pairs = new HashSet<Integer>();\n\t    for (int b = a + 1; b < primes.length; b++) {\n\t        if (Utils.isPrime(concat(primes[a], primes[b])) &&\n\t        \tUtils.isPrime(concat(primes[b], primes[a])))\n\t            pairs.add(primes[b]);\n\t    }\n\t    return pairs;\n\t}\n}\n\n/*\nint result = Integer.MAX_VALUE;\nSystem.out.println(result);\nprimeSieve erat = new primeSieve(30000);\nerat.find_primes();\nint[] primes = erat.primes;\n\nArrayList<ArrayList<Integer>> a = new ArrayList<ArrayList<Integer>>();\nfor(int i=0; i<primes.length; i++) {\n\tArrayList<Integer> temp = new ArrayList<Integer>();\n\ttemp.add(primes[i]);\n\ta.add(temp);\n}\t\t\n\nfor(int i=0; i<1000; i++) {\n\tArrayList<Integer> temp = new ArrayList<Integer>();\n\tint x = combine(a.get(i).get(0), primes[i]);\n\tSystem.out.println(x);\n\tif(Utils.isPrime(x)) temp.add(primes[i]);\n}\nSystem.out.println(a);\nSystem.out.println(Utils.isPrime(347));\n*/"

/***/ }),

/***/ 1234:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.ArrayList;\n\npublic class euler61 {\n\tstatic int[][] numbers = new int[6][];\n\tstatic int[] ans = new int[6];\n\tpublic static void main(String[] args) {\t\t\n        for (int i = 0; i < 6; i++)\n            numbers[i] = gen(i);\n        \n        for (int i = 0; i < numbers[5].length; i++) {\n            ans[5] = numbers[5][i];\n            if (FindNext(5, 1)) break;\n        }\n        System.out.println(sum(ans));\n\t}\n    private static boolean FindNext(int a, int l) {\n    \tfor (int i = 0; i < ans.length; i++) {\n            if (ans[i] != 0) continue;                \n            for (int j = 0; j < numbers[i].length; j++) {\n\n                boolean unique = true;                                                       \n                for(int k = 0; k < ans.length; k++){\n                    if (numbers[i][j] == ans[k]) {\n                        unique = false;\n                        break;\n                    }                                                \n                }\n                                        \n                if ( unique && ((numbers[i][j] / 100) == (ans[a] % 100))) {                        \n                \tans[i] = numbers[i][j];\n                    if (l == 5) {\n                        if (ans[5] / 100 == ans[i] % 100) return true;\n                    }\n                    if (FindNext(i, l + 1)) return true;                        \n                }                    \n            }\n            ans[i] = 0;\n        }            \n        return false;\n\t}\n\tprivate static int sum(int[] a) {\n    \tint ans = 0;\n\t\tfor(int i : a)\n\t\t\tans += i;\n\t\treturn ans;\n\t}\n\tpublic static int[] gen(int type) {\n    \tArrayList<Integer> numbers = new ArrayList<Integer>();\n\n        int n = 0;\n        int number = 0;\n\n        while (number < 10000) {\n            n++;\n            switch(type) {\n                case 0:\t// Triangle numbers\n                \tnumber = n * (n + 1) / 2;\n                \tbreak;\n                case 1:\t// Square numbers                    \n                    number = n * n;\n                    break;\n                case 2:\t// Pentagonal numbers                    \n                    number = n * (3 * n - 1) / 2;\n                    break;\n                case 3:\t// Hexagonal numbers                    \n                    number = n * (2*n - 1);\n                    break;\n                case 4:\t// Heptagonal numbers                    \n                    number = n * (5 * n - 3) / 2;\n                    break;\n                case 5:\t// Octagonal numbers                    \n                    number = n * (3 * n - 2);\n                    break;\n            }\n            if (number > 999)\n                numbers.add(number);\n        }\n        Object[] a = numbers.toArray();\n        int[] ans = new int[a.length];\n        for(int i=0; i<a.length; i++)\n        \tans[i] = (Integer)a[i];\n\n        return ans;\n    }\n}"

/***/ }),

/***/ 1235:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.ArrayList;\n\npublic class euler62 {\n\tpublic static void main(String[] args) {\n\t\tlong n = 345, ans;\n\t\tArrayList<long[]> cubes = new ArrayList<long[]>();\n\t\t\n\t\twhile (true) {\n\t\t    n++;\n\t\t    long smallestPerm = makeLargestPerm(n*n*n);\n\t\t    if (!containsKey(cubes, smallestPerm)) {\n\t\t        cubes.add(new long[]{smallestPerm, n, 0});\n\t\t    }\n\t\t    \n\t\t    if (++getDung(cubes, smallestPerm)[2] == 5) {\n\t\t        ans = getDung(cubes, smallestPerm)[1];\n\t\t        break;\n\t\t    }\n\t\t}\n\t\tSystem.out.println(ans*ans*ans);\n\t\t//127035954683\n\t}\n\tpublic static long makeLargestPerm(long n) {\n\t    long k = n;\n\t    int[] digits = new int[10];\n\t    long retVal = 0;\n\t \n\t    while (k > 0) {\n\t        digits[(int)(k % 10)]++;\n\t        k /= 10;\n\t    }\n\t \n\t    for (int i = 9; i >= 0; i--) {\n\t        for (int j = 0; j < digits[i]; j++) {\n\t            retVal = retVal * 10 + i;\n\t        }\n\t    }\n\t\treturn retVal;\n\t}\n\t//crap search. if it takes too long, change to binary search\n\tstatic boolean containsKey(ArrayList<long[]> a, long n) {\n\t\tfor(long[] i : a)\n\t\t\tif(i[0]==n) return true;\n\t\treturn false;\n\t}\n\tstatic long[] getDung(ArrayList<long[]> a, long n) {\n\t\tfor(int i=0; i<a.size(); i++)\n\t\t\tif(a.get(i)[0]==n)\n\t\t\t\treturn a.get(i);\n\t\tSystem.out.println(\"You fool!\");\n\t\treturn new long[]{};\n\t}\n}\n/*\nThe cube, 41063625 (3453), can be permuted to produce two other cubes: 56623104 (3843) and 66430125 (4053).\nIn fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.\nFind the smallest cube for which exactly five permutations of its digits are cube.\n*/"

/***/ }),

/***/ 1236:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler63 {\n\tpublic static void main(String[] args) {\n\t\tint s = 0;\n\t\tfor(double n=1; n<10; n++)\n\t\t\ts += (int)(1 / (1 - Math.log10(n)));\n\t\tSystem.out.println(s);\n\t}\n}"

/***/ }),

/***/ 1237:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler64 {\n\tpublic static void main(String[] args) {\n        int ans = 0;\n\n        for (int i = 2; i <= 10000; i++) {\n            int limit = (int) Math.sqrt(i);                                \n            if (limit * limit == i) continue;\n            \n            int period = 0;\n            int d = 1;\n            int m = 0;\n            int a = limit;\n\n            while(true){                \n                m = d*a - m;                    \n                d = (i - m * m) / d;\n                a = (limit + m) / d;\n                period++;\n                if(a == 2*limit) break;\n            }\n            \n            if (period % 2 == 1) ans++;\n\t\t}\n\t\t\n\t\tSystem.out.println(ans);\t//1322\n\t}\n}"

/***/ }),

/***/ 1238:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\n\npublic class euler65 {\n\tpublic static void main(String[] args) {\n\t\tint ans = 0;\n\t\t \n\t\tBigInteger d = new BigInteger(\"1\");\n\t\tBigInteger n = new BigInteger(\"2\");\n\t\t \n\t\tfor (int i = 2; i <= 100; i++) {\n\t\t    BigInteger temp = d;\n\t\t    int c = (i % 3 == 0) ? 2 * (i / 3) : 1;\n\t\t    d = n;\n\t\t    n = (Utils.IntToBig(c).multiply(d)).add(temp);\n\t\t}\n\t\tans = SumOfDigits(n);\n\t\tSystem.out.println(ans);\n\t}\n\tpublic static int SumOfDigits(BigInteger n) {\n\t\tint ans = 0;\n\t\tString str = n.toString();\n\t\tfor(int i=0; i<str.length(); i++) {\n\t\t\tans+= Integer.parseInt(Character.toString(str.charAt(i)));\n\t\t}\n\t\treturn ans;\n\t}\n}\n\n/*\nThe square root of 2 can be written as an infinite continued fraction.\n\n2 = 1 +\t  1\n\t\t-------------\n \t    2 +\t\t1\n\t\t\t---------\n \t \t\t2 +\t1\n\t\t\t\t-----\n \t \t \t\t2 +\t\n1\n\n \t \t \t \t2 + ...\nThe infinite continued fraction can be written, 2 = [1;(2)], (2) indicates that 2 repeats ad infinitum. In a similar way, 23 = [4;(1,3,1,8)].\n\nIt turns out that the sequence of partial values of continued fractions for square roots provide the best rational approximations. Let us consider the convergents for 2.\n\n1 +\t\n1\n\n= 3/2\n \t\n2\n \n1 +\t\n1\n\n= 7/5\n \t2 +\t\n1\n\n \t \t\n2\n \n1 +\t\n1\n\n= 17/12\n \t2 +\t\n1\n\n \n \t \t2 +\t\n1\n\n \n \t \t \t\n2\n \n1 +\t\n1\n\n= 41/29\n \t2 +\t\n1\n\n \t \t2 +\t\n1\n\n \n \t \t \t2 +\t\n1\n\n \n \t \t \t \t\n2\n \nHence the sequence of the first ten convergents for 2 are:\n\n1, 3/2, 7/5, 17/12, 41/29, 99/70, 239/169, 577/408, 1393/985, 3363/2378, ...\nWhat is most surprising is that the important mathematical constant,\ne = [2; 1,2,1, 1,4,1, 1,6,1 , ... , 1,2k,1, ...].\n\nThe first ten terms in the sequence of convergents for e are:\n\n2, 3, 8/3, 11/4, 19/7, 87/32, 106/39, 193/71, 1264/465, 1457/536, ...\nThe sum of digits in the numerator of the 10th convergent is 1+4+5+7=17.\n\nFind the sum of digits in the numerator of the 100th convergent of the continued fraction for e.\n*/"

/***/ }),

/***/ 1239:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\n\npublic class euler66 {\n\tpublic static void main(String[] args) {\n\t\tint ans = 0;\n\t\tBigInteger max = new BigInteger(\"0\");\n\t\t\n\t\tfor(int D=2; D<=1000; D++) {\n\t\t\tBigInteger lim = new BigInteger(Integer.toString((int)Math.sqrt(D)));\n\t\t\tif (lim.multiply(lim).compareTo( new BigInteger(Integer.toString(D)) ) == 0) continue;\n\t\t\t\n\t\t    BigInteger m = BigInteger.ZERO;\n\t\t    BigInteger d = BigInteger.ONE;\n\t\t    BigInteger a = lim;\n\t\t \n\t\t    BigInteger numm1 = BigInteger.ONE;\n\t\t    BigInteger num = a;\n\t\t \n\t\t    BigInteger denm1 = BigInteger.ZERO;\n\t\t    BigInteger den = BigInteger.ONE;\n\t\t \n\t\t    while( ( num.multiply(num) ).subtract( new BigInteger(Integer.toString(D)).multiply(den).multiply(den) ).compareTo(BigInteger.ONE) != 0) {\n\t\t        m = ( d.multiply(a) ).subtract(m);\n\t\t        d = ( new BigInteger(Integer.toString(D)).subtract(m.multiply(m)) ).divide(d);\n\t\t        a = ( lim.add(m) ).divide(d);\n\t\t \n\t\t        BigInteger numm2 = numm1;\n\t\t        numm1 = num;\n\t\t        BigInteger denm2 = denm1;\n\t\t        denm1 = den;\n\t\t \n\t\t        num = ( a.multiply(numm1) ).add(numm2);\n\t\t        den = ( a.multiply(denm1) ).add(denm2);\n\t\t    }\n\t\t \n\t\t    if (num.compareTo(max) == 1) {\n\t\t        max = num;\n\t\t        ans = D;\n\t\t    }\n\t\t}\n\t\tSystem.out.println(ans);\n\t}\n}"

/***/ }),

/***/ 1240:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.ArrayList;\nimport java.util.Scanner;\n\npublic class euler67 {\n\tprivate static ArrayList<ArrayList<Integer>> a = new ArrayList<ArrayList<Integer>>();\n\tpublic static void main(String[] args) throws FileNotFoundException {\n\t\tScanner s = new Scanner(new File(\"triangle.txt\"));\n\t\t\n\t\tint row=0, num=1;\n\t\twhile(s.hasNext()) {\n\t\t\ta.add(row, new ArrayList<Integer>());\n\t\t\tfor(int i=1; i<=num; i++) {\n\t\t\t\ta.get(row).add(s.nextInt());\n\t\t\t}\n\t\t\trow++;\n\t\t\tnum++;\n\t\t}\n\t\t\n\t\tSystem.out.println(a);\n\t\t\n\t\tfor(int i=0; i<a.size(); i++) {\n\t\t\tflattenRow(i);\n\t\t\t//System.out.println(a.get(i));\n\t\t}\n\t\tfindBiggest();\n\t}\n\tstatic void flattenCell(int row, int col) {\n\t\tif(row==0) return;\n\t\tif(col==0) {a.get(row).set(col, (a.get(row).get(col)).intValue() + a.get(row-1).get(col).intValue()); return;}\n\t\tif(col==a.get(row).size()-1) {a.get(row).set(col, (a.get(row).get(col)).intValue() + a.get(row-1).get(col-1).intValue()); return;}\n\t\t\n\t\tint l=a.get(row-1).get(col-1), r=a.get(row-1).get(col);\n\t\tif(l>r)\n\t\t\ta.get(row).set(col, (a.get(row).get(col)).intValue() + l);\n\t\telse\n\t\t\ta.get(row).set(col, (a.get(row).get(col)).intValue() + r);\n\t}\n\tstatic void flattenRow(int row) {\n\t\tfor(int i=0; i<a.get(row).size(); i++)\n\t\t\tflattenCell(row, i);\n\t}\n\tstatic void findBiggest() {\n\t\tint ans=0;\n\t\tfor(int i=0; i<a.get(a.size()-1).size(); i++) {\n\t\t\tif(a.get(a.size()-1).get(i).intValue()>ans) ans=a.get(a.size()-1).get(i).intValue();\n\t\t}\n\t\tSystem.out.println(ans);\n\t}\n}\n/*\n*/"

/***/ }),

/***/ 1241:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler69 {\n\tpublic static void main(String[] args) {\n\t\tint ans = 1;\n\t\tint[] primes = primeSieve.sieve(200);\n\t\tint i = 0;\n\t\t \n\t\twhile(ans* primes[i] < 1000000){\n\t\t    ans *= primes[i];\n\t\t    i++;\n\t\t}\n\t\tSystem.out.println(ans);\n\t}\n\tpublic static int totient(int num){\n\t\tint count=0;\n\t\tfor(int a=1;a<num;a++)\n\t\t\tif(GCD(num,a)==1)\n\t\t\t\tcount++;\n\t\treturn(count);\n\t}\n\tpublic static int GCD(int a, int b){\n\t\tint temp;\n\t\tif(a<b) {\n\t\t\ttemp=a;\n\t\t\ta=b;\n\t\t\tb=temp;\n\t\t}\n\t\tif(a%b==0)\n\t\t\treturn(b);\n\t\treturn(GCD(a%b,b));\n\t}\n}"

/***/ }),

/***/ 1242:
/***/ (function(module, exports) {

module.exports = "//***********************\n// Andrew Koroluk       *\n// Project Euler - 7    *\n//***********************\n\npublic class euler7\n{\n\tpublic static boolean isPrime ( int num )\n\t{\n\t\tboolean prime = true;\n\t\tint limit = (int) Math.sqrt ( num );\n\n\t\tfor ( int i = 2; i <= limit; i++ )\n\t\t{\n\t\t\tif ( num % i == 0 )\n\t\t\t{\n\t\t\tprime = false;\n\t\t\tbreak;\n\t\t\t}\n\t\t}\n\treturn prime;\n\t}\n\n\tpublic static void main ( String[] args )\n\t{\n\t\tint primes=1;\n\t\tfor ( int i = 2; i >= 0; i++ )\n\t\t{\n\t\t\tif ( isPrime (i) && primes<=10001 )\n\t\t\t{\n\t\t\t\tprimes++;\n\t\t\t\tSystem.out.println ( i );\n\t\t\t}\n\t\t}\n\t}\n}"

/***/ }),

/***/ 1243:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\n//import java.util.ArrayList;\n\npublic class euler70 {\n\tpublic static void main(String[] args) {\n\t\tint[] primes = primeSieve.sieve(5000);\n\t\t\n\t\tlong best = 1;\n\t\tdouble bestRatio = Double.POSITIVE_INFINITY;\n\t\t \n\t\tint limit = 10000000;\n\t\t \n\t\tfor (int i = 0; i < primes.length; i++) {\n\t\t    for (int j = i+1; j < primes.length; j++) {\n\t\t        long n = primes[i] * primes[j];\n\t\t        if (n > limit) break;\n\t\t \n\t\t        long phi = (primes[i] - 1) * (primes[j] - 1);\n\t\t        double ratio = ((double) n) / phi;\n\t\t \n\t\t        if (isPerm(n, phi) && bestRatio > ratio) {\n\t\t            best = n;\n\t\t            bestRatio = ratio;\n\t\t        }\n\t\t    }\n\t\t}\n\t\t\n\t\tSystem.out.println(best);\n\t}\n    private static boolean isPerm(long m, long n) {\n        int[] arr = new int[10];\n\n        long temp = n;\n        while (temp > 0) {\n            arr[(int) (temp % 10)]++;\n            temp /= 10;\n        }\n\n        temp = m;\n        while (temp > 0) {\n            arr[(int) (temp % 10)]--;\n            temp /= 10;\n        }\n\n        for (int i = 0; i < 10; i++)\n            if (arr[i] != 0)\n                return false;\n        return true;\n    }\n}"

/***/ }),

/***/ 1244:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler71 {\n\tpublic static void main(String[] args) {\n\t\tlong n1 = 3;\n\t\tlong d1 = 7;                        \n\t\tlong nbest = 0;\n\t\tlong dbest = 1;\n\t\tint limit = 1000000;\n\n        for (int d2 = limit; d2 > 2; d2--) {                \n            long n2 = (n1 * d2 - 1) / d1;               \n            if (n2 * dbest > nbest * d2) {                    \n                //Console.WriteLine(\"{0}/{1} < {2}/{3} < {4}/{5}\", nbest, dbest, n2, d2, n1, d1);                    \n                dbest = d2;\n                nbest = n2;                  \n            }                \n        }\n\n        long factor = Utils.gcd(nbest, dbest);\n        nbest /= factor;\n        dbest /= factor;\n        \n        System.out.println(nbest);\n\t}\n}"

/***/ }),

/***/ 1245:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler72 {\n\tpublic static void main(String[] args) {\n\t\tint lim = 1000000;\n\t\tint[] pi = new int[lim+1];\n\t\tfor(int i=0; i<pi.length; i++)\n\t\t\tpi[i] = i;\n\t\tlong ans = 0;\n\t\tfor(int i = 2; i <= lim; i++){\n\t\t    if (pi[i] == i) {\n\t\t        for (int j = i; j <= lim; j += i) {\n\t\t            pi[j] = pi[j] / i * (i - 1);\n\t\t        }\n\t\t    }\n\t\t    ans += pi[i];\n\t\t}\n\t\tSystem.out.println(ans);\t//303963552391\n\t}\n}"

/***/ }),

/***/ 1246:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler73 {\n\tpublic static void main(String[] args) {\n\t\tint a = 3, b = 2, ans = 0;\n\t\t \n\t\tfor (int d = 5; d <= 12000; d++)\n\t\t    for (int n = d / a + 1; n < (d - 1) / b + 1; n++)\n\t\t        if (Utils.gcd(n, d) == 1) ans++;\n\t\t\n\t\tSystem.out.println(ans);\t//7295372\n\t}\n}"

/***/ }),

/***/ 1247:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.ArrayList;\n\npublic class euler74 {\n\tpublic static void main(String[] args) {\n\t\tClock clock = new Clock();\n\t\tint limit = 1000000;\n\t\tint ans = 0;\n\t\t \n\t\tfor(int i = 1; i <= limit; i++){\n\t\t    int n = i;\n\t\t    ArrayList<Integer> seq = new ArrayList<Integer>();\n\t\t \n\t\t    while(!seq.contains(n)){\n\t\t        seq.add(n);\n\t\t        n = factorialSum(n);\n\t\t    }\n\t\t \n\t\t    if (seq.size() == 60) ans++;\n\t\t}\n\t\tclock.getTimeSeconds();\n\t\tSystem.out.println(ans);\t//402\n\t}\n\tstatic int[] f = {1,1, 2, 6, 24, 120, 720, 5040, 40320, 362880};\n\tpublic static int factorialSum(int n){\n\t    int temp = n;\n\t    int facsum = 0;\n\t \n\t    while (temp > 0) {\n\t        facsum += f[temp % 10];\n\t        temp /= 10;\n\t    }\n\t    return facsum;\n\t}\n}"

/***/ }),

/***/ 1248:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\n//import java.util.ArrayList;\n\npublic class euler75 {\n\tpublic static void main(String[] args) {\n\t\tClock clock = new Clock();\n\t\tint ans = 0;\n\t\t\n\t\tint limit = 1500000;\n\t\tint[] triangles = new int[limit+1];\n\t\tint mlimit = (int)Math.sqrt(limit / 2);\n\t\t \n\t\tfor (long m = 2; m < mlimit; m++) {\n\t\t    for (long n = 1; n < m; n++) {\n\t\t        if (((n + m) % 2) == 1 && Utils.gcd(n, m) == 1) {\n\t\t            long a = m * m + n * n;\n\t\t            long b = m * m - n * n;\n\t\t            long c = 2 * m * n;\n\t\t            long p = a + b + c;\n\t\t            while(p <= limit){\n\t\t                triangles[(int)p]++;\n\t\t                if (triangles[(int)p] == 1) ans++;\n\t\t                if (triangles[(int)p] == 2) ans--;\n\t\t                p += a+b+c;\n\t\t            }\n\t\t        }\n\t\t    }\n\t\t}\n\t\t\n\t\tclock.getTimeMillis();\n\t\tSystem.out.println(ans);\t//161667\n\t}\n}"

/***/ }),

/***/ 1249:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler76 {\n\tpublic static void main(String[] args) {\n\t\tint[] a = new int[101];\n\t\ta[0] = 1;\n\t\t \n\t\tfor (int i = 1; i <= 99; i++)\n\t\t    for (int j = i; j <= 100; j++)\n\t\t        a[j] += a[j - i];\n\t\t\n\t\tSystem.out.println(a[100]);\t//190569291\n\t}\n}"

/***/ }),

/***/ 1250:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler77 {\n\tpublic static void main(String[] args) {\n\t\tClock clock = new Clock();\n\t\t\n\t\tint target = 2;\n\t\tint[] primes = primeSieve.sieve(100);\n\t\tUtils.print(primes);\n\t\t \n\t\twhile (true) {\n\t\t    int[] a = new int[target+1];\n\t\t    a[0] = 1;\n\t\t \n\t\t    for (int i = 0; i < primes.length-1; i++)\n\t\t        for (int j = primes[i]; j <= target; j++)\n\t\t            a[j] += a[j - primes[i]];\n\t\t \n\t\t    if (a[target] > 5000) break;\n\t\t    target++;\n\t\t}\t\t\n\t\t\n\t\tclock.getTimeMillis();\n\t\tSystem.out.println(target);\t//71\n\t}\n}"

/***/ }),

/***/ 1251:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.ArrayList;\n\npublic class euler78 {\n\t\n    public static void main(String[] args) {\n    \tArrayList<Integer> p = new ArrayList<Integer>();\n    \t//List<Integer> p = new List<Integer>();\n    \tp.add(1);\n    \t \n    \tint n = 1;\n    \twhile(true) {\n    \t    int i = 0;\n    \t    int penta = 1;\n    \t    p.add(0);\n    \t \n    \t    while (penta <= n){\n    \t        int sign = (i % 4 > 1) ? -1 : 1;\n    \t        p.set(n, p.get(n) + sign * p.get(n - penta));\n    \t        p.set(n, p.get(n) % 1000000);\n    \t        i++;\n    \t \n    \t        int j = (i % 2 == 0) ? i / 2 + 1 : -(i / 2 + 1);\n    \t        penta = j * (3 * j - 1) / 2;\n    \t    } \n    \t \n    \t    if (p.get(n) == 0) break;\n    \t    n++;\n    \t}\n    \tSystem.out.println(n);\t//55374\n    }\n}"

/***/ }),

/***/ 1252:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.util.ArrayList;\n\npublic class euler79 {\n\tpublic static void main(String[] args) {\n\t\tArrayList<String> a = new ArrayList<String>();\n\t\ttry {\n\t\t    BufferedReader in = new BufferedReader(new FileReader(\"keylog.txt\"));\n\t\t    String str;\n\t\t    while ((str = in.readLine()) != null) {\n\t\t        a.add(str);\n\t\t    }\n\t\t    in.close();\n\t\t} catch (Exception e) {System.out.println(\"File not found\");}\n\t\t\n\t\ttry{for(int i=0; i<a.size(); i++)\n\t\t\tfor(int j=0; j<a.size() && j!=i; j++)\n\t\t\t\tif(a.get(i).equals(a.get(j))) a.remove(j);\n\t\t} catch(Exception e) {}\n\t\t\n\t\tfor(int i=0; i<a.size(); i++)\n\t\t\tSystem.out.println(a.get(i));\n\t}\n}"

/***/ }),

/***/ 1253:
/***/ (function(module, exports) {

module.exports = "/*\n Andrew Koroluk\n */\n\npublic class euler8\n{\n\tpublic static void main(String [] args)\n\t{\n\t\tString num = \"7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450\";\n\t\tchar[] array = new char[1000];\n\t\tfor(int i=0; i<=999; i++) {\n\t\t\tarray[i] = num.charAt(i);\n\t\t}\n\n\t\tint big=0;\n\t\tfor(int a=0; a<=995; a++) {\n\t\t\tint sum = Character.digit(array[a], 10) * Character.digit(array[a+1], 10) * Character.digit(array[a+2], 10) * Character.digit(array[a+3], 10) * Character.digit(array[a+4], 10);\n\t\t\tif(sum>=big) {\n\t\t\t\tbig=sum;\n\t\t\t}\n\t\t}\n\n\t\tSystem.out.println(big);\n\t}\n}\n\n/*\nFind the greatest product of five consecutive digits in the 1000-digit number.\n\n7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450\n*/"

/***/ }),

/***/ 1254:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigDecimal;\nimport java.math.BigInteger;\n\npublic class euler80 {\n\tpublic static void main(String[] args) {\n\t\tBigSquareRoot bsr = new BigSquareRoot ();\n\t\t//bsr.setTraceFlag (true);\n\t\tbsr.setScale(101);\n\t\tbsr.setMaxIterations(20);\n\t\t\n\t\tClock clock = new Clock();\n\t\t\n\t\tint ans = 0;\n\t\tfor(int i=1; i<=100; i++) {\n\t\t\tif(Math.sqrt(i) == (double)(int)Math.sqrt(i)) continue;\n\t\t\t\n\t\t\tBigDecimal sqrt = bsr.get( new BigInteger(Integer.toString(i)) );\n\t\t\tsqrt = sqrt.multiply(BigDecimal.TEN.pow(99));\n\t\t\tint temp = digSum( sqrt.toBigInteger() );\n\t\t\t\n\t\t\tans += temp;\n\t\t\tSystem.out.println(i+\" \"+temp);\n\t\t}\n\t\t\n\t\tclock.getTimeMillis();\n\t\tSystem.out.println(ans);\t//40886\n\t}\n\tstatic int digSum(BigInteger a) {\n\t\tint ans = 0;\n\t\tString s = a.toString();\n\t\tfor(int i=0; i<s.length(); i++)\n\t\t\tans+= Integer.parseInt(Character.toString(s.charAt(i)));\n\t\treturn ans;\n\t}\n}"

/***/ }),

/***/ 1255:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.io.BufferedReader;\nimport java.io.FileReader;\n\npublic class euler81 {\n\tpublic static void main(String[] args) {\n\t\tint[][] matrix = new int[80][80];\n\t\ttry {\n\t\t\tBufferedReader b = new BufferedReader(new FileReader(\"matrix.txt\"));\n\t\t\tfor(int y=0; y<80; y++) {\n\t\t\t\tString s = b.readLine();\n\t\t\t\tString meow = \"\";\n\t\t\t\tint pos = 0;\n\t\t\t\tfor(int x=0; x<s.length(); x++) {\n\t\t\t\t\tif(s.charAt(x)==',') {\n\t\t\t\t\t\tmatrix[y][pos] = Integer.parseInt(meow);\n\t\t\t\t\t\tmeow = \"\";\n\t\t\t\t\t\tpos++;\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tmeow += s.charAt(x);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tmatrix[y][pos] = Integer.parseInt(meow);\n\t\t\t}\n\t\t\tb.close();\n\t\t} catch (Exception e) { e.printStackTrace(); }\n\t\t\n\t\t//for(int i=0; i<matrix.length; i++) Utils.print(matrix[i]);\n\t\t\n\t\tint nrows = matrix.length-1, minx;\n\t\t\t\t \n\t\tfor(int i=nrows; i>=0; i--)\n\t\t\tfor(int j=nrows; j>=0; j--) {\n\t\t\t\tif (i==nrows && j==nrows) continue;\n\t\t\t\tif (j==nrows) minx = matrix[i+1][j];\n\t\t\t\telse if (i==nrows) minx = matrix[i][j+1];\n\t\t\t\telse minx = Math.min(matrix[i+1][j], matrix[i][j+1]);\n\t\t\t\tmatrix[i][j] += minx;\n\t\t\t}\n\t\t\t\t \n\t\tSystem.out.println(matrix[0][0]);\t//427337\n\t}\n}"

/***/ }),

/***/ 1256:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.io.BufferedReader;\nimport java.io.FileReader;\n\npublic class euler82 {\n\tpublic static void main(String[] args) {\n\t\tint[][] a = new int[80][80];\n\t\ttry {\n\t\t\tBufferedReader b = new BufferedReader(new FileReader(\"matrix.txt\"));\n\t\t\tfor(int y=0; y<80; y++) {\n\t\t\t\tString s = b.readLine();\n\t\t\t\tString meow = \"\";\n\t\t\t\tint pos = 0;\n\t\t\t\tfor(int x=0; x<s.length(); x++) {\n\t\t\t\t\tif(s.charAt(x)==',') {\n\t\t\t\t\t\ta[y][pos] = Integer.parseInt(meow);\n\t\t\t\t\t\tmeow = \"\";\n\t\t\t\t\t\tpos++;\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tmeow += s.charAt(x);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\ta[y][pos] = Integer.parseInt(meow);\n\t\t\t}\n\t\t\tb.close();\n\t\t} catch (Exception e) { e.printStackTrace(); }\n\t\t\n\t\t//for(int i=0; i<matrix.length; i++) Utils.print(matrix[i]);\n\t\tClock clock = new Clock();\n\t\t\n\t\tint size = a.length;\n\t\tint[] ans = new int[size];\n\t\t\n\t\tfor (int i = 0; i < size; i++)\n\t\t\tans[i] = a[i][size - 1];\n\t\t\n\t\tfor (int i = size - 2; i >= 0; i--) {\n\t\t\tans[0] += a[0][i];\n\t\t    for (int j = 1; j < size; j++)\n\t\t    \tans[j] = Math.min(ans[j - 1] + a[j][i], ans[j] + a[j][i]);\n\t\t \n\t\t    for (int j = size - 2; j >= 0; j--)\n\t\t    \tans[j] = Math.min(ans[j], ans[j+1] + a[j][i]);\n\t\t}\n\t\t\n\t\tclock.getTimeMillis();\n\t\tSystem.out.println(min(ans));\t//260324\n\t}\n\tstatic int min(int[] a) {\n\t\tint min=a[0];\n\t\tfor(int i=1; i<a.length; i++)\n\t\t\tif(a[i]<min) min = a[i];\n\t\treturn min;\n\t}\n}"

/***/ }),

/***/ 1257:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.util.ArrayList;\n\npublic class euler83 {\n\tpublic static void main(String[] args) {\n\t\tint[][] a = new int[80][80];\n\t\ttry {\n\t\t\tBufferedReader b = new BufferedReader(new FileReader(\"matrix.txt\"));\n\t\t\tfor(int y=0; y<80; y++) {\n\t\t\t\tString s = b.readLine();\n\t\t\t\tString str = \"\";\n\t\t\t\tint pos = 0;\n\t\t\t\tfor(int x=0; x<s.length(); x++) {\n\t\t\t\t\tif(s.charAt(x)==',') {\n\t\t\t\t\t\ta[y][pos] = Integer.parseInt(str);\n\t\t\t\t\t\tstr = \"\";\n\t\t\t\t\t\tpos++;\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tstr += s.charAt(x);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\ta[y][pos] = Integer.parseInt(str);\n\t\t\t}\n\t\t\tb.close();\n\t\t} catch (Exception e) { e.printStackTrace(); }\n\t\t\n\t\t//Utils.print(a);\n\t\t\n\t\tArrayList<Pair[]> openList = new ArrayList<Pair[]>();\n\t\t\n\t\t/*\n\t\t * Set up searched array\n\t\t * 0: Not Searched\n\t\t * 1: Open List\n\t\t * 2: Closed List\n\t\t */\n\t\tint[][] searched = new int[80][80];\n\t\tfor(int i=0; i<80; i++)\n\t\t\tfor(int j=0; j<80; j++)\n\t\t\t\tsearched[i][j] = 0;\n\t\t\n\t\t//Set up G array\n\t\tint[][] g = new int[80][80];\n\t\tfor(int i=0; i<80; i++)\n\t\t\tfor(int j=0; j<80; j++)\n\t\t\t\tg[i][j] = Integer.MIN_VALUE;\n\t\t\n\t\t//Set up H array\n\t\tint[][] h = new int[80][80];\n\t\tfor(int j=0; j<80; j++)\n\t\t\th[79][j] = 80-j;\t\n\t\tfor(int i=78; i>=0; i--)\n\t\t\tfor(int j=0; j<80; j++)\n\t\t\t\th[i][j] = h[i+1][j]+1;\n\t\t\n\t\tg[0][0] = a[0][0];\n\t\topenList.add(new Pair[] {new Pair(g[0][0]+h[0][0], 0), new Pair(0,0)} );\n\t\t\n\t\t//while we have not searched the bottom-right square\n\t\twhile(searched[79][79]<2) {\n\t\t\t/*SORT OPEN LIST*/\n\t\t\tPair current = openList.get(0)[1];\n\t\t\topenList.remove(0);\n\t\t\tint ci = current.x;\n\t\t\tint cj = current.y;\n\t\t\tsearched[ci][cj] = 2;\n\t\t\t\n\t\t    //Check the four adjacent squares\n\t\t    for (int k = 0; k < 4; k++) {\n\t\t        int cinew = 0;\n\t\t        int cjnew = 0;\n\t\t        switch (k) {\n\t\t            case 0: //Check the square above\n\t\t                cinew = ci - 1;\n\t\t                cjnew = cj;\n\t\t                break;\n\t\t            case 1: //Check the square below\n\t\t                cinew = ci + 1;\n\t\t                cjnew = cj;\n\t\t                break;\n\t\t            case 2: //Check the square right\n\t\t                cinew = ci;\n\t\t                cjnew = cj+1;\n\t\t                break;\n\t\t            case 3: //Check the square left\n\t\t                cinew = ci;\n\t\t                cjnew = cj -1;\n\t\t                break;\n\t\t        }\n\t\t        if (cinew >= 0 && cinew < 80 &&\n\t\t            cjnew >= 0 && cjnew < 80 &&\n\t\t            searched[cinew][cjnew] < 2) {\n\t\t            if (g[cinew][cjnew] > g[ci][cj] + a[cinew][cjnew]) {\n\t\t                g[cinew][cjnew] = g[ci][cj] + a[cinew][cjnew];\n\t\t \n\t\t                if(searched[cinew][cjnew] == 1){\n\t\t                    int index = search(openList, new Pair(cinew, cjnew));\n\t\t                    openList.remove(index);\n\t\t                }\n\t\t                int l = 0;\n\t\t                while(containsKey(openList,new Pair(g[cinew][cjnew] + h[cinew][cjnew],l))) l++;\n\t\t                openList.add(new Pair[]{new Pair(g[cinew][cjnew] + h[cinew][cjnew],l), new Pair(cinew, cjnew)});\n\t\t                searched[cinew][cjnew] = 1;\n\t\t            }\n\t\t        }\n\t\t    }\n\t\t}\n\t\tSystem.out.println(g[79][79]);\n\t}\n\n\tprivate static boolean containsKey(ArrayList<Pair[]> openList, Pair pair) {\n\t\tfor(Pair[] p: openList)\n\t\t\tif(p[0].equals(pair)) return true;\n\t\treturn false;\n\t}\n\n\tprivate static int search(ArrayList<Pair[]> openList, Pair pair) {\n\t\tfor(int i=0; i<openList.size(); i++) {\n\t\t\tif(openList.get(i)[1].equals(pair)) return i;\n\t\t}\n\t\treturn 0;\n\t}\n}\n\nclass Pair {\n\tpublic int x;\n\tpublic int y;\n\t\n\tpublic Pair(int x, int y) {\n\t\tthis.x = x;\n\t\tthis.y = y;\n\t}\n\tpublic Pair() {\n\t\tx=0;\n\t\ty=0;\n\t}\n}"

/***/ }),

/***/ 1258:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.Random;\n\npublic class euler84 {\n\tstatic int[] board = new int[40];\n\tstatic int samples = 1000000;\n\tstatic int sides = 4;\n\tstatic int pos = 0;\n\tstatic int CCpos = 0;\n\tstatic int Chancepos = 0;\n\tstatic Random rand = new Random();\n\tpublic static void main(String[] args) {\t\t\n\t\tfor(int i=0; i<samples; i++) {\t\t\t\n\t\t\tint d1 = rand.nextInt(sides) +1;\n\t\t\tint d2 = rand.nextInt(sides) +1;\n\t\t\t\n\t\t\tpos = (pos + d1 + d2) % 40;\n\t\t\t\n            if (pos == 7 || pos == 22 || pos == 36) Chance();\n            if (pos == 2 || pos == 17 || pos == 34) CC();\n            if (pos == 30) pos = 10;\n            \n            board[pos]++;\n\t\t}\n\t\t\n\t\tint max1=0, max2=0, max3=0;\n\t\tfor(int i=0; i<board.length; i++) {\n\t\t\tif(board[i] > board[max1]) max1 = i;\n\t\t}\n\t\tboard[max1]=0;\n\t\tfor(int i=0; i<board.length; i++) {\n\t\t\tif(board[i] > board[max2]) max2 = i;\n\t\t}\n\t\tboard[max2]=0;\n\t\tfor(int i=0; i<board.length; i++) {\n\t\t\tif(board[i] > board[max3]) max3 = i;\n\t\t}\n\t\tboard[max3]=0;\n\t\tString ans = \"\";\n\t\t\n\t\tif(max1<10) ans += \"0\"+Integer.toString(max1);\n\t\telse ans += Integer.toString(max1);\n\t\tif(max2<10) ans += \"0\"+Integer.toString(max2);\n\t\telse ans += Integer.toString(max2);\n\t\tif(max3<10) ans += \"0\"+Integer.toString(max3);\n\t\telse ans += Integer.toString(max3);\n\t\t\n\t\tSystem.out.println(ans);\t//101524\n\t}\n\tprivate static void Chance() {\n        int[] chance = { 0, 10, 11, 24, 39, 5 };\n\n        Chancepos = ++Chancepos % 16;\n\n        if (Chancepos < 6)\n            pos = chance[Chancepos];\n        if (Chancepos == 6 || Chancepos == 7) {                \n            if (pos == 7) pos = 15;\n            if (pos == 22) pos = 25;\n            if (pos == 36) pos = 5;                \n        }\n        if (Chancepos == 8)\n        \tpos = (pos == 22) ? 28 : 12;  \n        if (Chancepos == 9) pos -= 3;\n\t}\n\tprivate static void CC() {\n        CCpos = ++CCpos % 16;\n        \n        if(CCpos == 0) pos = 0;\n        if(CCpos == 1) pos = 10;\n\t}\n}"

/***/ }),

/***/ 1259:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler85 {\n\tpublic static void main(String[] args) {\n\t\t\n\t\tint min_x=0,min_y=0,min=2000000;\n\t\t\n\t\tfor(int x=1; x<=100; x++) {\n\t\t\tfor(int y=1; y<=100; y++) {\n\t\t\t\tint rect = (x*x+x) * (y*y+y) / 4;\n\t\t\t    int diff = Math.abs(2000000-rect);\n\t\t\t    if (diff<min) {\n\t\t\t    \tmin_x = x;\n\t\t\t    \tmin_y = y;\n\t\t\t    \tmin=diff;\n\t\t\t    }\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(min_x*min_y);\n\t}\n}"

/***/ }),

/***/ 1260:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler86 {\n\tpublic static void main(String[] args) {\n\t\tint l=2, i=0;\n\t\t\n\t\twhile(i<1000000) {\n\t\t\tl++;\n\t\t\tfor(int wh=3; wh<2*l; wh++) {\t//wh = w+h\n\t\t\t\tdouble sqrt = Math.sqrt(l*l + wh*wh);\n\t\t\t\tif(sqrt==(int)sqrt) \n\t\t\t\t\ti += (wh<l) ? wh/2 : 1+(l - (wh+1)/2);\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(l);\t//1818\n\t}\n}"

/***/ }),

/***/ 1261:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.ArrayList;\n\npublic class euler87 {\n\tpublic static void main(String[] args) {\n\t\tClock c = new Clock();\n\t\tint limit = 50000000;\n\t\tArrayList<Integer> a = new ArrayList<Integer>();\n\t\t\n\t\tint[] sieve2 = primeSieve.sieve(7072);\n\t\tint[] sieve3 = primeSieve.sieve(369);\n\t\tint[] sieve4 = primeSieve.sieve(84);\n\t\t\n\t\tfor(int p4: sieve4) {\n\t\t\tfor(int p3: sieve3) {\n\t\t\t\tfor(int p2: sieve2) {\n\t\t\t\t\tint z = Utils.pwr(p2, 2) + Utils.pwr(p3, 3) + Utils.pwr(p4, 4);\n\t\t\t\t\tif(z < limit) a.add(z);\n\t\t\t\t\telse break;\n\t\t\t\t\t//System.out.println(p2+\"^2 + \"+p3+\"^3 + \"+p4+\"^4 = \"+z);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(a.size());\n\t\tUtils.removeDuplicates(a);\n\t\t\n\t\tc.getTimeSeconds();\n\t\tSystem.out.println(a.size());\t//1097343\n\t}\n}"

/***/ }),

/***/ 1262:
/***/ (function(module, exports) {

module.exports = "import java.io.BufferedReader;\nimport java.io.FileNotFoundException;\nimport java.io.FileReader;\nimport java.util.ArrayList;\n\n/*\n * Andrew Koroluk\n */\n\n\n\npublic class euler89 {\n\tpublic static void main(String[] args) throws FileNotFoundException {\n\t\tArrayList<String> roman = new ArrayList<String>();\n\t\ttry {\n\t\t    BufferedReader in = new BufferedReader(new FileReader(\"roman.txt\"));\n\t\t    String str;\n\t\t    while ((str = in.readLine()) != null) {\n\t\t        roman.add(str);\n\t\t    }\n\t\t    in.close();\n\t\t} catch (Exception e) {System.out.println(\"File not found\");}\n\t\t//System.out.println(roman);\n\t\t\n\t\tArrayList<Integer> nums = new ArrayList<Integer>();\n\t\tfor(int i=0; i<roman.size(); i++) {\n\t\t\tnums.add(roman2int(roman.get(i)));\n\t\t}\n\t\t//System.out.println(nums);\n\t\t\n\t\tArrayList<String> roman2 = new ArrayList<String>();\n\t\tfor(int i=0; i<nums.size(); i++) {\n\t\t\troman2.add(int2roman(nums.get(i)));\n\t\t}\n\t\t//System.out.println(roman2);\n\t\t\n\t\tSystem.out.println(\"You saved \"+compareLists(roman, roman2)+\" characters.\"); //743\n\t}\n\tpublic static int roman2int(String str) {\n\t\tint ans = 0;\n\t\tfor(int i=0; i<str.length(); i++) {\n\t\t\tchar c = str.charAt(i);\n\t\t\tif(c=='M') ans+=1000;\n\t\t\tif(c=='D') ans+=500;\n\t\t\tif(c=='C') {\n\t\t\t\ttry{if(str.charAt(i+1)=='D') {ans+=400; i++; continue;}} catch(Exception e){}\n\t\t\t\ttry{if(str.charAt(i+1)=='M') {ans+=900; i++; continue;}} catch(Exception e){}\n\t\t\t\tans+=100;\n\t\t\t}\n\t\t\tif(c=='L') ans+=50;\n\t\t\tif(c=='X') {\n\t\t\t\ttry{if(str.charAt(i+1)=='L') {ans+=40; i++; continue;}} catch(Exception e){}\n\t\t\t\ttry{if(str.charAt(i+1)=='C') {ans+=90; i++; continue;}} catch(Exception e){}\n\t\t\t\tans+=10;\n\t\t\t}\n\t\t\tif(c=='V') ans+=5;\n\t\t\tif(c=='I') {\n\t\t\t\ttry{if(str.charAt(i+1)=='V') {ans+=4; i++; continue;}} catch(Exception e){}\n\t\t\t\ttry{if(str.charAt(i+1)=='X') {ans+=9; i++; continue;}} catch(Exception e){}\n\t\t\t\tans+=1;\n\t\t\t}\n\t\t}\n\t\treturn ans;\n\t}\n\tpublic static String int2roman(int x) {\n\t\tString ans = \"\";\n\t\twhile (x>0) {\n\t\t\tif(x>1000) {ans+=\"M\"; x-=1000;}\n\t\t\telse if(x>=900) {ans+=\"CM\"; x-=900;}\n\t\t\telse if(x>=500) {ans+=\"D\"; x-=500;}\n\t\t\telse if(x>=400) {ans+=\"CD\"; x-=400;}\n\t\t\telse if(x>=100) {ans+=\"C\"; x-=100;}\n\t\t\telse if(x>=90) {ans+=\"XC\"; x-=90;}\n\t\t\telse if(x>=50) {ans+=\"L\"; x-=50;}\n\t\t\telse if(x>=40) {ans+=\"XL\"; x-=40;}\n\t\t\telse if(x>=10) {ans+=\"X\"; x-=10;}\n\t\t\telse if(x>=9) {ans+=\"IX\"; x-=9;}\n\t\t\telse if(x>=5) {ans+=\"V\"; x-=5;}\n\t\t\telse if(x>=4) {ans+=\"IV\"; x-=4;}\n\t\t\telse if(x>=1) {ans+=\"I\"; x-=1;}\n\t\t}\n\t\t\n\t\treturn ans;\n\t}\n\tpublic static int compareLists(ArrayList<String> a, ArrayList<String> b) {\n\t\tif(a.size()!=b.size()) {System.out.println(\"Arrays are of different size.\"); return 0;}\n\t\t\n\t\tint ans = 0;\n\t\tfor(int i=0; i<a.size(); i++) {\n\t\t\tans+= a.get(i).length() - b.get(i).length();\n\t\t}\n\t\t\n\t\treturn ans;\n\t}\n}"

/***/ }),

/***/ 1263:
/***/ (function(module, exports) {

module.exports = "//***********************\n// Andrew Koroluk       *\n// Project Euler - 9    *\n//***********************\n\nimport java.util.Random;\n\npublic class euler9\n{\n\tpublic static void main(String [] args)\n\t{\n\t\tRandom gen = new Random();\n\t\tint a = gen.nextInt(1000), b = gen.nextInt(1000), c = gen.nextInt(1000);\n\n\t\twhile(a>=0 && b>=0 && c>=0)\n\t\t{\n\t\t\tif(a*a + b*b == c*c && a+b+c==1000)\n\t\t\t{\n\t\t\t\tSystem.out.println(\"a = \" + a);\n\t\t\t\tSystem.out.println(\"b = \" + b);\n\t\t\t\tSystem.out.println(\"c = \" + c);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\ta = gen.nextInt(1000);\n\t\t\tb = gen.nextInt(1000);\n\t\t\tc = gen.nextInt(1000);\n\t\t}\n\t}\n}"

/***/ }),

/***/ 1264:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.util.ArrayList;\n\npublic class euler90 {\n\tpublic static void main(String[] args) {\n\t\tArrayList<Integer> bin = new ArrayList<Integer>();\n\t\tfor(int i=0; i<=9; i++)\n\t\t\tbin.add(i);\n\t\t\n\t\tArrayList<Integer> cube1 = new ArrayList<Integer>();\n\t\tArrayList<Integer> cube2 = new ArrayList<Integer>();\n\t\tint ans = 0;\n\t\t\n\t\t\n\t\t\n\t\t//1217\n\t}\n}"

/***/ }),

/***/ 1265:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler91 {\n\tpublic static void main(String[] args) {\n\t\tint max=50;\n\t\tint ans = max*max*3;\n\t\tfor (int x = 1; x <= max; x++) {\n\t\t    for (int y = 1; y <= max; y++) {\n\t\t        int fact = Utils.gcd(x, y);\n\t\t        ans += Math.min(y*fact/x, (max - x)*fact/y) * 2;\n\t\t    }\n\t\t}\n\t\t\n\t\tSystem.out.println(ans);\t//14234\n\t}\n}"

/***/ }),

/***/ 1266:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler92 {\n\tpublic static void main(String[] args) {\n\t\tint ans = 0;\n\t\tfor(int i=1; i<10000000; i++)\n\t\t\tif(f(i))\n\t\t\t\tans++;\n\t\t\n\t\tSystem.out.println(ans); //8581146\n\t}\n\tpublic static boolean f(int x) {\n\t\tint y = 0;\n\t\tint digits = 0;\n\t\tString s = Integer.toString(x);\n\t\twhile(true) {\n\t\t\tdigits = s.length();\n\t\t\tchar[] c = s.toCharArray();\n\t\t\tfor(int i=0; i<digits; i++) {\n\t\t\t\ty += Integer.parseInt(Character.toString(c[i]))*Integer.parseInt(Character.toString(c[i]));\n\t\t\t}\n\t\t\t\n\t\t\tif(y==1)\n\t\t\t\treturn false;\n\t\t\telse if(y==89)\n\t\t\t\treturn true;\n\t\t\telse {\n\t\t\t\tx=y;\n\t\t\t\ty=0;\n\t\t\t\ts = Integer.toString(x);\n\t\t\t}\n\t\t}\n\t}\n}\n\n/*\nA number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.\n\nFor example,\n\n44  32  13  10  1  1\n85  89  145  42  20  4  16  37  58  89\n\nTherefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.\n\nHow many starting numbers below ten million will arrive at 89?\n*/"

/***/ }),

/***/ 1267:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler93 {\n\tpublic static void main(String[] args) {\n\t\t\n\t\t\n\t\tSystem.out.println();\t//1258\n\t}\n}"

/***/ }),

/***/ 1268:
/***/ (function(module, exports) {

module.exports = "public class euler94 {\n\tpublic static void main(String[] args) {\n\t\tint ans = 0;\n\t\tlong x = 2;\n\t\tlong y = 1;\n\t\tlong limit = 1000000000;\n\t\t\n\t\twhile(true) {\n\t\t\tlong a_x_3 = 2*x - 1;\n\t\t\tlong area_x_3 = y*(x-2);\n\t\t\tif (a_x_3 > limit) break;\n\t\t\t\n\t\t\tif(a_x_3 > 0 && area_x_3 > 0 && a_x_3 % 3 == 0 && area_x_3 % 3 == 0) {\n\t\t\t\tlong a = a_x_3 / 3;\n\t\t\t\t\n\t\t\t\tans += 3*a + 1;\n\t\t\t}\n\t\t\t\n\t\t\ta_x_3 = 2*x + 1;\n\t\t\tarea_x_3 = y*(x + 2);\n\t\t\tif (a_x_3 > limit) break;\n\t\t\t\n\t\t\tif(a_x_3 > 0 && area_x_3 > 0 && a_x_3 % 3 == 0 && area_x_3 % 3 == 0) {\n\t\t\t\tlong a = a_x_3 / 3;\n\t\t\t\t\n\t\t\t\tans += 3*a - 1;\n\t\t\t}\n\t\t\t\n\t\t\tlong x2 = 2*x + y*3;\n\t\t    long y2 = 2*y + x;\n\t\t \n\t\t    x = x2;\n\t\t    y = y2;\n\t\t}\n\t\t\n\t\tSystem.out.println(ans);\t//518408346\n\t}\n}"

/***/ }),

/***/ 1269:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\npublic class euler95 {\n\tpublic static void main(String[] args) {\n\t\tint x = 12496;\n\t\tint ansLength = 0;\n\t\tint limit = 1000000;\n\t\tint ans = 12496;\n\t\tint[] sumOfFactors = generateFactors(limit);\n\t\t\n\t\tloop:\n\t\twhile (x < limit) {\n\t\t\tx++;\n\t\t\tString chain = \"\";\n\t\t\tint y= sumOfFactors[x];\n\t\t\tchain += x + \" -> \" + y;\n\t\t\tint length = 1;\n\t\t\t\n\t\t\twhile(y != x) {\n\t\t\t\tif(y>= limit) continue loop;\n\t\t\t\ty = sumOfFactors[y];\n\t\t\t\tchain += \" -> \" + y;\n\t\t\t\tlength += 1;\n\t\t\t\t\n\t\t\t\tif(y >= limit) continue loop;\n\t\t\t\tif(y < 4) continue loop;\n\t\t\t\tif(length > 50) continue loop;\n\t\t\t}\n\t\t\t\n\t\t\tif(length > ansLength) {\n\t\t\t\tSystem.out.println(\"Length: \"+length+\n\t\t\t\t\t\t\t\t\t\"\\nX: \"+x+\n\t\t\t\t\t\t\t\t\t\"\\n\"+chain+\"\\n\");\n\t\t\t\tansLength = length;\n\t\t\t\tans = x;\n\t\t\t}\n\t\t}\n\t\t\n\t\tSystem.out.println(\"Answer: \"+ans); //14316\n\t}\n\tprivate static int[] generateFactors(int limit) {\n\t    int[] sumOfFactors = new int[limit + 1];\n\t    for (int i = 1; i <= limit / 2; i++) {\n\t        for (int j = 2 * i; j <= limit; j += i) {\n\t            sumOfFactors[j] += i;\n\t        }\n\t    }\n\t    return sumOfFactors;\n\t}\n}"

/***/ }),

/***/ 1270:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.io.File;\nimport java.io.FileNotFoundException;\nimport java.io.IOException;\nimport java.util.ArrayList;\nimport java.util.Scanner;\n\npublic class euler96 {\n\tstatic ArrayList<int[][]> read(File f) {\n\t\tScanner s;\n\t\ttry { s = new Scanner(f);\n\t\t} catch (FileNotFoundException e) { e.printStackTrace(); return null; }\n\t\t\n\t\tArrayList<int[][]> ans = new ArrayList<int[][]>();\n\t\twhile(s.hasNextLine()) {\n\t\t\ts.nextLine();\n\t\t\tint[][] m = new int[9][9];\n\t\t\tfor(int i=0; i<9; i++) {\n\t\t\t\tString str = s.nextLine();\n\t\t\t\tfor(int j=0; j<9; j++)\n\t\t\t\t\tm[i][j] = Integer.parseInt(Character.toString(str.charAt(j)));\n\t\t\t}\n\t\t\tans.add(m);\n\t\t}\n\t\ts.close();\n\t\treturn ans;\n\t}\n\tpublic static void main(String[] municiple) throws IOException {\n\t\tint ans=0;\n\t\tArrayList<int[][]> a = new ArrayList<int[][]>();\n\t\ta = read(new File( \"sudoku.txt\" ));\n\t\t\n\t\tfor(int i=1; i<=50; i++) {\n\t\t\tSystem.out.println(\"Puzzle #\"+i);\n\t\t\tSudoku puzzle = new Sudoku(a.get(i-1));\n\t\t\tpuzzle.solve();\n\t\t\tpuzzle.print();\n\t\t\tans += puzzle.first3();\n\t\t}\n\t\t\n\t\tSystem.out.println(ans);\t//24702\n\t}\n}"

/***/ }),

/***/ 1271:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.math.BigInteger;\n\nclass euler97 {\n\tpublic static void main(String[] args) {\n\t\tBigInteger x = BigInteger.ONE.shiftLeft(7830457);\n\t\tx = x.mod(new BigInteger(\"1000000000000\"));\n\t\tx=x.multiply(new BigInteger(\"28433\"));\n\t\tx=x.add(BigInteger.ONE);\n\t\tx = x.mod(new BigInteger(\"10000000000\"));\n\t\tSystem.out.println(x);\t//8739992577\n\t}\n}\n\n/*\nThe first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form 2^6972593-1; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes, of the form 2p1, have been found which contain more digits.\n\nHowever, in 2004 there was found a massive non-Mersenne prime which contains 2,357,207 digits: 28433 x 2^7830457+1.\n\nFind the last ten digits of this prime number.\n*/"

/***/ }),

/***/ 1272:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.Scanner;\n\npublic class euler98 {\n\tpublic static void main(String[] args) {\n\t\tArrayList<String> a = read(new File(\"words.txt\"));\n\t\tArrayList<String[]> c = new ArrayList<String[]>();\n\t\t\n\t\tSystem.out.println(a);\n\t\t\n\t\tc = getDoubles(a);\n\t\t\n\t\tfor(int i=0; i<c.size(); i++) Utils.print(c.get(i));\n\t\t\n\t\t//ArrayList<Integer> squares = makeSquares(999999999);\n\t\t\n\t\t/*for(int i=0; i<c.size(); i++) {\n\t\t\tint size = c.get(i).length;\n\t\t}*/\n\t\t\n\t\tSystem.out.println(superSort(\"CARE\",\"RACE\", 1296)+\"\\n9216\");\n\t\t\n\t\tUtils.print(intToArray(123));\t//18769\n\t}\n\tpublic static ArrayList<String> read(File f) {\n\t\tScanner s;\n\t\ttry {\n\t\t\ts = new Scanner(f);\n\t\t} catch (FileNotFoundException e) {\n\t\t\te.printStackTrace(); return null;\n\t\t}\n\t\t\n\t\tArrayList<String> ans = new ArrayList<String>();\n\t\twhile(s.hasNextLine()) {\n\t\t\tString str = s.next();\n\t\t\tans.add(str);\n\t\t}\n\t\ts.close();\n\t\treturn ans;\n\t}\n\tpublic static String sort(String s) {\n\t\tchar[] c = s.toCharArray();\n\t\tArrays.sort(c);\n\t\t\n\t\treturn toString(c);\n\t}\n\tpublic static String toString(char[] c) {\n\t\tString s = \"\";\n\t\tfor(int i=0; i<c.length; i++)\n\t\t\ts += c[i];\n\t\t\n\t\treturn s;\n\t}\n\tpublic static ArrayList<String[]> getDoubles(ArrayList<String> a) {\n\t\tArrayList<String[]> b = new ArrayList<String[]>();\n\t\tArrayList<String[]> c = new ArrayList<String[]>();\n\t\t\n\t\tfor(int i=0; i<a.size(); i++) {\n\t\t\tString[] temp = new String[3];\n\t\t\tString s = a.get(i);\n\t\t\ts = sort(s);\n\t\t\ttemp[0] = s;\n\t\t\tif(b.contains(temp)) continue;\n\t\t\telse {\n\t\t\t\ttemp[1] = a.get(i);\n\t\t\t\tb.add(temp);\n\t\t\t}\n\t\t}\n\t\t//for(int i=0; i<b.size(); i++)\n\t\t\t//Utils.print(b.get(i));\n\t\tfor(int i=0; i<b.size(); i++) {\n\t\t\tfor(int j=0; j<b.size(); j++) {\n\t\t\t\tif(i==j) continue;\n\t\t\t\tif(b.get(i)[0] .equals( b.get(j)[0] )) {\n\t\t\t\t\t//System.out.println( i + \" - \" + j );\n\t\t\t\t\tString[] temp = new String[3];\n\t\t\t\t\ttemp[0] = b.get(i)[0];\n\t\t\t\t\ttemp[1] = b.get(i)[1];\n\t\t\t\t\ttemp[2] = b.get(j)[1];\n\t\t\t\t\tc.add(temp);\n\t\t\t\t\tb.remove(i);\n\t\t\t\t\tb.remove(j);\n\t\t\t\t\t//Utils.print(temp);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn c;\n\t}\n\tpublic static ArrayList<Integer> makeSquares(int limit) {\n\t\tArrayList<Integer> ans = new ArrayList<Integer>();\n\t\t\n\t\tfor(int i=0; i<=limit; i++) {\n\t\t\tdouble temp = Math.sqrt(i);\n\t\t\tif( temp == (double)(int)temp ) ans.add(i);\n\t\t}\n\t\t\n\t\treturn ans;\n\t\t//this can be improved but im lazy\n\t\t//input i*i to sqrt(limit)\n\t}\n\tpublic static int superSort(String a, String b, int i) {\n\t\tObject[][] oa = new Object[a.length()][2];\n\t\tint[] ia = intToArray(i);\n\t\t\n\t\treturn 0;\n\t}\n\tpublic static int[] intToArray(int num) {\n\t\tif (num<0) num=-num;\n\t\tnum = Utils.reverse(num);\n\t\tint[] digits = new int[Integer.toString(num).length()];\n\n\t\tint i=0;\n\t\twhile (num>0) {\n\t\t    digits[i] = num%10;\n\t\t    num=num/10;\n\t\t    i++;\n\t\t}\n\t\t\n\t\treturn digits;\n\t}\n}"

/***/ }),

/***/ 1273:
/***/ (function(module, exports) {

module.exports = "/*\n * Andrew Koroluk\n */\n\nimport java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.ArrayList;\nimport java.util.Scanner;\n\npublic class euler99 {\n\tpublic static void main(String[] args) throws FileNotFoundException {\n\t\tArrayList<int[]> array = new ArrayList<int[]>();\n\t\tScanner s = new Scanner(new File(\"base_exp.txt\"));\n\t\twhile(s.hasNextLine()) {\n\t\t\tString str = s.nextLine();\n\t\t\tint i=0;\n\t\t\twhile(true) {\n\t\t\t\tif(str.charAt(i) == ',') break;\n\t\t\t\ti++;\n\t\t\t}\n\t\t\tint[] t = new int[2];\n\t\t\tt[0] = Integer.parseInt(str.substring(0,i));\n\t\t\tt[1] = Integer.parseInt(str.substring(i+1,str.length()));\n\t\t\tarray.add(t);\n\t\t}\n\t\t\n\t\tint mv=0, ml=0;\n\t\tfor(int i=0; i<array.size(); i++) {\n\t\t\tint[] aline = array.get(i);\n\t\t\tint val = (int)(aline[1] * Math.log(aline[0]));\n\t\t\tif(val > mv) {\n\t\t\t\tmv = val;\n\t\t\t\tml = i+1;\n\t\t\t}\n\t\t}\n\t\t\n\t\tSystem.out.println(ml);\t//709\n\t}\n}"

/***/ }),

/***/ 1274:
/***/ (function(module, exports) {

module.exports = "pub fn main() -> u32 {\n    let mut total = 0;\n\n    for n in 1..1000 {\n        if n % 3 == 0 || n % 5 == 0 {\n            total += n;\n        }\n    }\n\n    total\n}\n"

/***/ }),

/***/ 1275:
/***/ (function(module, exports) {

module.exports = "pub fn main() -> u32 {\n    let mut num1 = 1;\n    let mut num2 = 1;\n    let mut num3;\n    let mut sum = 0;\n    let max = 4_000_000;\n\n    while num2 < max {\n        if num2 % 2 == 0 {\n            sum += num2;\n        }\n\n        num3 = num2;\n        num2 = num1 + num2;\n        num1 = num3;\n    }\n\n    sum\n}\n\n// The Sum of all even Fibonacci numbers below 4000000 is 4613732\n"

/***/ }),

/***/ 1276:
/***/ (function(module, exports) {

module.exports = "fn is_prime(n: u32) -> bool {\n\tlet mut i = 2;\n\t//let sqrt_n = sqrt(n).tofixed(0);\n\tlet sqrt_n = 4;\n\n\twhile i <= sqrt_n {\n\t\tif n % i == 0 {\n\t\t\treturn false;\n\t\t} else {\n\t\t\ti += 1;\n\t\t}\n\t}\n\n\ttrue\n}\n\nconst NUM: u64 = 600851475143;\n\npub fn main() -> u32 {\n\tprintln!(\"{}\", is_prime(13));\n\n\tprintln!(\"{}\", NUM);\n\n    0\n}\n"

/***/ }),

/***/ 1277:
/***/ (function(module, exports) {

module.exports = "fn is_palindrome(string: &str) -> bool {\n    string.chars().zip(string.chars().rev()).all(|(x, y)| x == y)\n}\n\nfn factor(num: i32) -> Vec<i32> {\n    let mut factors: Vec<i32> = Vec::new(); // creates a new vector for the factors of the number\n \n    for i in 1..((num as f32).sqrt() as i32 + 1) { \n        if num % i == 0 {\n            factors.push(i);\n            factors.push(num/i);\n        }\n    }\n    factors.sort(); // sorts the factors into numerical order for viewing purposes\n    factors // returns the factors\n}\n\npub fn main() -> i32 {\n    let mut n = 999 * 999;\n\n    loop {\n        let str = n.to_string();\n        if !is_palindrome(&str) {\n            n = n - 1;\n            continue;\n        }\n\n        let factors = factor(n);\n\n        let mut has_proper_factors = false;\n        for i in 0..(factors.len()) {\n            let fac1 = factors[i];\n            let fac2 = n/fac1;\n\n            if fac1.to_string().len() == 3 && fac2.to_string().len() == 3 {\n                has_proper_factors = true;\n                break;\n            } else {\n                continue;\n            }\n        }\n\n        if has_proper_factors {\n            // println!(\"{}\", str);\n            break;\n        } else {\n            n = n - 1;\n            continue;\n        }\n    }\n\n    n\n}\n"

/***/ }),

/***/ 1278:
/***/ (function(module, exports) {

module.exports = "pub fn main() -> i32 {\n    2 * 3 * 4 * 5 * 6 * 7 * 11 * 13 * 17 * 19\n}\n"

/***/ }),

/***/ 1279:
/***/ (function(module, exports) {

module.exports = "pub fn main() -> u32 {\n    let mut n1: u32 = 1;\n    let mut n2 = 1;\n    let mut sum1 = 0;\n    let mut sum2: u32 = 0;\n\n    while n1 <= 100 {\n        sum1 += n1.pow(2);\n        n1 = n1 + 1;\n    }\n    while n2 <= 100 {\n        sum2 += n2;\n        n2 = n2 + 1;\n    }\n\n    sum2.pow(2) - sum1\n}\n"

/***/ }),

/***/ 1280:
/***/ (function(module, exports) {

module.exports = "extern crate primal;\n\npub fn main() -> u32 {\n    primal::StreamingSieve::nth_prime(10001) as u32\n}\n"

/***/ }),

/***/ 1281:
/***/ (function(module, exports) {

module.exports = "static STR: &str = \"7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450\";\n\npub fn main() -> u64 {\n    let mut max: u64 = 0;\n\n    for i in 0..988 {\n//        println!(\"{}\", STR[i..(i+13)].to_string());\n\n        let product: u64 = STR[i..(i+13)]\n            .chars()\n            .map(|c| c.to_string().parse::<u64>().unwrap())\n            .product();\n\n//        println!(\"{}\", product);\n\n        if product > max {\n            max = product;\n        }\n    }\n\n    max\n}\n"

/***/ }),

/***/ 1282:
/***/ (function(module, exports) {

module.exports = "pub fn main() -> u32 {\n    // a^2 + b^2 == c^2 && a + b + c = 1000\n\n    for a in 1..998 {\n        for b in 1..998 {\n            for c in 1..998 {\n                if a * a + b * b == c * c && a + b + c == 1000 {\n                    println!(\"a: {}, b: {}, c: {}\", a, b, c);\n                }\n            }\n        }\n    }\n\n    0\n}\n"

/***/ }),

/***/ 1283:
/***/ (function(module, exports) {

module.exports = "const MATRIX: [[u32; 5]; 5] = [\n[131, 673, 234, 103, 18], \n[201, 96, 342, 965, 150],\n[630, 803, 746, 422, 111],\n[537, 699, 497, 121, 956],\n[805, 732, 524, 37, 331]];\n// const SOLUTION_5X5_MAP: [[u32; 5]; 5] = [\n// [ 1 , 0 , 1 , 1 , 1 ],\n// [ 1 , 1 , 1 , 0 , 1 ],\n// [ 0 , 0 , 0 , 1 , 1 ],\n// [ 0 , 0 , 0 , 1 , 0 ],\n// [ 0 , 0 , 0 , 1 , 1 ]];\n// const SOLUTION_5X5: u32 = 2297;\n\nstruct Point {\n    position: [u32; 2],\n    g: u32,\n    h: u32,\n    f: u32,\n}\n\nconst MIN: u32 = 18;\nconst END_POSITION: [u32; 2] = [4, 4];\n\nfn up(pos: [u32; 2]) -> Option<[u32; 2]> {\n    if pos[0] == 0 {\n        None\n    } else {\n        Some([pos[0] - 1, pos[1]])\n    }\n}\nfn down(pos: [u32; 2]) -> Option<[u32; 2]> {\n    Some([pos[0] + 1, pos[1]])\n}\nfn left(pos: [u32; 2]) -> Option<[u32; 2]> {\n    if pos[1] == 0 {\n        return None;\n    }\n\n    Some([pos[0], pos[1] - 1])\n}\nfn right(pos: [u32; 2]) -> Option<[u32; 2]> {\n    Some([pos[0], pos[1] + 1])\n}\n\nfn add_to_open(weight_map: [[u32; 5]; 5], heuristic_map: &Vec<Vec<u32>>, pos: Option<[u32; 2]>, mut open: &mut Vec<Point>, closed: &Vec<Point>, rows: u32, cols: u32) -> bool {\n    if pos.is_none() {\n        return false\n    }\n\n    let row = pos.unwrap()[0];\n    let col = pos.unwrap()[1];\n\n    if !can_go(closed, pos.unwrap(), rows, cols) {\n        return false\n    }\n\n    let point = Point {\n        position: [row, col],\n        g: weight_map[row as usize][col as usize],\n        h: heuristic_map[row as usize][col as usize],\n        f: weight_map[row as usize][col as usize] + heuristic_map[row as usize][col as usize],\n    };\n\n    if open.binary_search_by_key(&point.f, |point| point.f).is_ok() {\n        return false\n    }\n\n    let test = open.binary_search_by_key(&point.f, |point| point.f);\n\n    if test.is_ok() {\n        let position = open[test.unwrap()].position;\n        println!(\"Ok: {}, {}\", position[0], position[1]);\n        println!(\"Open: \");\n        for i in 0..open.len() {\n            println!(\"  ({}, {}), {}\", open[i].position[0], open[i].position[1], open[i].f);\n        }\n    }\n\n    let index = open.binary_search_by_key(&point.f, |point| point.f).unwrap_err();\n    open.insert(index, point);\n    true\n}\n\nfn can_go(closed: &Vec<Point>, pos: [u32; 2], rows: u32, cols: u32) -> bool {\n    let row = pos[0];\n    let col = pos[1];\n\n    // out of bounds check\n    if row >= rows || col >= cols {\n        return false;\n    }\n\n    // check if in closed list\n    let closed_length = closed.len();\n    for i in 0..closed_length {\n        if closed[i].position[0] == row && closed[i].position[1] == col {\n            return false\n        }\n    }\n\n    true\n}\n\npub fn main() -> u32 {\n    let weight_map = MATRIX.clone();\n    let rows = MATRIX.len() as u32;\n    let cols = MATRIX[0].len() as u32;\n\n    let mut solution: u32 = 0;\n    let mut open: Vec<Point> = Vec::new();\n    let mut closed: Vec<Point> = Vec::new();\n\n    let mut heuristic_map: Vec<Vec<u32>> = Vec::new();\n    for i in 0..rows {\n        let mut row: Vec<u32> = Vec::new();\n        for j in 0..cols {\n            row.push(MIN * ((5 -  i) + (5 - j) - 1));\n        }\n        heuristic_map.push(row);\n    }\n\n    solution += weight_map[0][0];    // add starting position weight\n\n    // add first points to open\n    let mut p1 = Point {\n        position: [0, 1],\n        g: weight_map[0][1],\n        h: heuristic_map[0][1],\n        f: 0,\n    };\n    p1.f = p1.g + p1.h;\n\n    let mut p2 = Point {\n        position: [1, 0],\n        g: weight_map[1][0],\n        h: heuristic_map[1][0],\n        f: 0,\n    };\n    p2.f = p2.g + p2.h;\n\n    if p1.f <= p2.f {\n        open.push(p1);\n        open.push(p2);\n    } else {\n        open.push(p2);\n        open.push(p1);\n    }\n\n    // add starting point to closed list\n    let mut start = Point {\n        position: [0, 0],\n        g: weight_map[0][0],\n        h: heuristic_map[0][0],\n        f: 0,\n    };\n    start.f = start.g + start.h;\n    closed.push(start);\n\n    let position = [0, 0];\n\n    while position != END_POSITION {\n        let next = open.remove(0);\n        println!(\"Next: ({}, {})\", next.position[0], next.position[1]);\n        solution += next.g;\n\n        if next.position[0] == END_POSITION[0] && next.position[1] == END_POSITION[1] {\n            println!(\"Reached end!\");\n\n            return solution;\n        }\n\n        let next_position = next.position;\n\n        closed.push(next);\n\n        // add new points, if possible (in sorted position)\n        add_to_open(weight_map, &heuristic_map, up(next_position), &mut open, &closed, rows, cols);\n        add_to_open(weight_map, &heuristic_map, down(next_position), &mut open, &closed, rows, cols);\n        add_to_open(weight_map, &heuristic_map, left(next_position), &mut open, &closed, rows, cols);\n        add_to_open(weight_map, &heuristic_map, right(next_position), &mut open, &closed, rows, cols);\n    }\n\n    0\n}\n"

/***/ }),

/***/ 1284:
/***/ (function(module, exports) {

module.exports = "fn f(mut x: u32) -> bool {\n\tlet mut y: u32 = 0;\n\tlet mut done = false;\n\tlet mut result = false;\n\n\twhile !done {\n\t\tlet s = x.to_string();\n\t\tlet digits = s.chars()\n\t\t\t.map(|c| c.to_digit(10).unwrap());\n\n\t\tfor digit in digits {\n\t\t\ty = y + digit.pow(2);\n\t\t}\n\n\t\tif y == 1 {\n\t\t\tdone = true;\n\t\t\tresult = false;\n\t\t} else if y == 89 {\n\t\t\tdone = true;\n\t\t\tresult = true;\n\t\t} else {\n\t\t\tx = y;\n\t\t\ty = 0;\n\t\t}\n\t}\n\n\tresult\n}\n\npub fn main() -> u32 {\n\tlet mut acc = 0;\n\n\tfor i in 1..10000000 {\n\t\tif f(i) {\n\t\t\tacc = acc + 1;\n\t\t}\n\t}\n\n\tacc\n}\n"

/***/ }),

/***/ 1285:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1285;

/***/ }),

/***/ 1436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'about',
        styles: ["\n  "],
        template: "\n    <md-toolbar class=\"secondary-toolbar\">\n      <span class=\"title\">About</span>\n    </md-toolbar>\n\n    <div style=\"padding: 40px;\">\n      <div style=\"display: flex; align-items: center; justify-content: space-around;\">\n        <span>\n          <img src=\"/assets/img/portrait_2014.jpg\" alt=\"Andrew Koroluk portrait\" style=\"border-radius: 50%; width: 15rem; flex-grow: 0;\">\n        </span>\n        <span>\n          <img src=\"https://projecteuler.net/profile/Awk34.png\" alt=\"Awk34 Project Euler badge\">\n        </span>\n      </div>\n      \n      <br>\n      \n      <span>Hi, I'm <a href=\"http://andrewk.me\">Andrew Koroluk</a>. This site contains the code for my <a href=\"https://projecteuler.net\">Project Euler</a> solutions.</span>\n    </div>\n  "
    })
], AboutComponent);



/***/ }),

/***/ 1437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(472);
/*
 * Angular 2 decorators and services
 */


// import { MdToolbar } from '@angular/material';
/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(appState) {
        this.appState = appState;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ViewEncapsulation */].None,
        styles: [
            __webpack_require__(2112),
        ],
        template: "\n    <md-toolbar [color]=\"'primary'\">\n      <button class=\"title-button\" [routerLink]=\"['./home']\">\n        Project Euler\n      </button>\n      \n      <button md-button [routerLink]=\" ['./home'] \" routerLinkActive=\"active\">\n        Home\n      </button>\n      <button md-button [routerLink]=\" ['./about'] \" routerLinkActive=\"active\">\n        About\n      </button>\n      \n      <span style=\"flex: 1 1 auto;\"></span>\n      \n      <button md-icon-button>\n        <md-icon>more_vert</md-icon>\n      </button>\n    </md-toolbar>\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n    <!--<pre class=\"app-state\">this.appState.state = {{ appState.state | json }}</pre>-->\n\n    <footer>\n      &copy; Andrew Koroluk. All Rights Reserved.\n    </footer>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppState */]])
], AppComponent);

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */


/***/ }),

/***/ 1438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(1390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(1542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environment__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(1440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(1437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_resolver__ = __webpack_require__(1439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_service__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__problem__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__no_content__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_x_large__ = __webpack_require__(1444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__styles_styles_scss__ = __webpack_require__(1540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__styles_styles_scss__);








/*
 * Platform and Environment providers/directives/pipes
 */


// App is our top level component









// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_11__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_12__app_service__["a" /* AppState */]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstrap process
 */
var AppModule = (function () {
    function AppModule(appRef, appState, mdIconRegistry, sanitizer) {
        this.appRef = appRef;
        this.appState = appState;
        this.mdIconRegistry = mdIconRegistry;
        var icons = ['js', 'rust', 'java'];
        for (var _i = 0, icons_1 = icons; _i < icons_1.length; _i++) {
            var icon = icons_1[_i];
            mdIconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl("assets/img/" + icon + ".svg"));
        }
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        store.state = this.appState._state;
        // recreate root elements
        store.disposeOldHosts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["createNewHosts"])(cmpLocation);
        // save input values
        store.restoreInputValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["createInputTransfer"])();
        // remove styles
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["i" /* NgModule */])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__about__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__problem__["a" /* ProblemComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__no_content__["a" /* NoContentComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_x_large__["a" /* XLargeDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* PreloadAllModules */] }),
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["MaterialModule"].forRoot(),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__environment__["b" /* ENV_PROVIDERS */],
            APP_PROVIDERS
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* ApplicationRef */],
        __WEBPACK_IMPORTED_MODULE_12__app_service__["a" /* AppState */],
        __WEBPACK_IMPORTED_MODULE_6__angular_material__["MdIconRegistry"],
        __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]])
], AppModule);



/***/ }),

/***/ 1439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(1118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);



var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])()
], DataResolver);

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),

/***/ 1440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__problem__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__no_content__ = __webpack_require__(953);




var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about__["a" /* AboutComponent */] },
    { path: 'problem/:n', component: __WEBPACK_IMPORTED_MODULE_2__problem__["a" /* ProblemComponent */] },
    { path: 'barrel', loadChildren: function () { return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 2120)).then(function (module) { return module['BarrelModule']; }); } },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__no_content__["a" /* NoContentComponent */] },
];


/***/ }),

/***/ 1441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__title__ = __webpack_require__(1442);



// import { XLargeDirective } from './x-large';
var availableProblems = __webpack_require__(401)
    .keys()
    .map(function (s) { return parseInt(s.replace('./', '')); })
    .sort(function (a, b) { return a - b; });
var availableJs = __webpack_require__(401)
    .keys()
    .map(function (s) { return parseInt(s.replace('./', '')); })
    .sort(function (a, b) { return a - b; });
var availableJava = __webpack_require__(812)
    .keys()
    .map(function (s) { return parseInt(s.replace('./euler', '').replace('.java', '')); })
    .sort(function (a, b) { return a - b; });
var availableRust = __webpack_require__(813)
    .keys()
    .map(function (s) { return parseInt(s.replace('./problem_', '').replace('.rs', '')); })
    .sort(function (a, b) { return a - b; });
var problems = new Array(400).fill(0).map(function (val, i) { return ({
    n: i + 1,
    solutions: 0,
}); });
availableJs.forEach(function (n) { return problems[n - 1].solutions++; });
availableRust.forEach(function (n) { return problems[n - 1].solutions++; });
availableJava.forEach(function (n) { return problems[n - 1].solutions++; });
var HomeComponent = (function () {
    // TypeScript public modifiers
    function HomeComponent(appState, title) {
        this.appState = appState;
        this.title = title;
        // Set our default values
        this.localState = { value: '' };
        this.problems = problems;
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        // The selector is what angular internally uses
        // for `document.querySelectorAll(selector)` in our index.html
        // where, in this case, selector is the string 'home'
        selector: 'home',
        // We need to tell Angular's Dependency Injection which providers are in our app.
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__title__["a" /* Title */]
        ],
        // Our list of styles in our component. We may add more to compose many styles together
        styles: [__webpack_require__(2113)],
        // Every Angular template is first compiled by the browser before Angular runs it's compiler
        template: __webpack_require__(2078)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppState */],
        __WEBPACK_IMPORTED_MODULE_2__title__["a" /* Title */]])
], HomeComponent);



/***/ }),

/***/ 1442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__title_service__ = __webpack_require__(1443);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__title_service__["a"]; });



/***/ }),

/***/ 1443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Title; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(295);


var Title = (function () {
    function Title(http) {
        this.http = http;
        this.value = 'Angular 2';
    }
    Title.prototype.getData = function () {
        console.log('Title#getData(): Get Data');
        // return this.http.get('/assets/data.json')
        // .map(res => res.json());
        return {
            value: 'AngularClass'
        };
    };
    return Title;
}());
Title = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], Title);



/***/ }),

/***/ 1444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__x_large_directive__ = __webpack_require__(1445);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__x_large_directive__["a"]; });



/***/ }),

/***/ 1445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XLargeDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

/*
 * Directive
 * XLarge is a simple directive to show how one is made
 */
var XLargeDirective = (function () {
    function XLargeDirective(element, renderer) {
        // simple DOM manipulation to set font size to x-large
        // `nativeElement` is the direct reference to the DOM element
        // element.nativeElement.style.fontSize = 'x-large';
        this.element = element;
        this.renderer = renderer;
        // for server/webworker support use the renderer
        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    }
    return XLargeDirective;
}());
XLargeDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({
        selector: '[x-large]' // using [ ] means selecting attributes
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Renderer */]])
], XLargeDirective);



/***/ }),

/***/ 1446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    return NoContentComponent;
}());
NoContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'no-content',
        template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
    })
], NoContentComponent);



/***/ }),

/***/ 1447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlightjs__ = __webpack_require__(1543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highlightjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highlightjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_es__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_solutions_json__ = __webpack_require__(1545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_solutions_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_solutions_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__euler_rust_src_lib_rs__ = __webpack_require__(2115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__euler_rust_src_lib_rs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__euler_rust_src_lib_rs__);





var availableJs = __webpack_require__(401)
    .keys()
    .map(function (s) { return parseInt(s.replace('./', '')); })
    .sort(function (a, b) { return a - b; });
var availableJava = __webpack_require__(812)
    .keys()
    .map(function (s) { return parseInt(s.replace('./euler', '').replace('.java', '')); })
    .sort(function (a, b) { return a - b; });
var availableRust = __webpack_require__(813)
    .keys()
    .map(function (s) { return parseInt(s.replace('./problem_', '').replace('.rs', '')); })
    .sort(function (a, b) { return a - b; });

var ProblemComponent = (function () {
    function ProblemComponent(route) {
        this.route = route;
        this.lang = '';
        this.running = false;
    }
    ProblemComponent.prototype.selectLang = function (lang) {
        this.lang = lang;
    };
    ProblemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.n = parseInt(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash_es__["b" /* get */])(this, 'route.params.value.n')) || 1;
        var hasJsSolution = availableJs.includes(this.n);
        var hasRustSolution = availableRust.includes(this.n);
        var hasJavaSolution = availableJava.includes(this.n);
        if (hasRustSolution) {
            __WEBPACK_IMPORTED_MODULE_5__euler_rust_src_lib_rs___default()().then(function (result) {
                console.log(result);
                console.log("problem_" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash_es__["c" /* padStart */])(_this.n, 3, '0'));
                var main = result.instance.exports["problem_" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash_es__["c" /* padStart */])(_this.n, 3, '0')];
                console.log('return value was', main());
            });
        }
        if (hasJsSolution) {
            this.loadJs(this.n);
            this.selectLang('js');
        }
        if (hasRustSolution) {
            this.loadRust(this.n);
            if (!hasJsSolution)
                this.selectLang('rust');
        }
        if (hasJavaSolution) {
            this.loadJava(this.n);
            if (!hasJsSolution && !hasRustSolution)
                this.selectLang('java');
        }
        var problemHtml;
        try {
            problemHtml = !(function webpackMissingModule() { var e = new Error("Cannot find module \"!!raw-loader!../../../euler-scraper/scraped\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        }
        catch (e) {
            console.log(e);
        }
        this.problemHtml = problemHtml;
        if (!problemHtml)
            return;
    };
    ProblemComponent.prototype.loadJs = function (number) {
        var _this = this;
        // import(`!!raw-loader!../../../../js/${4}`).then(module => {}).catch(e => {});
        __webpack_require__.e/* require.ensure */(0).then((function (require) {
            _this.jsText = __WEBPACK_IMPORTED_MODULE_2_highlightjs___default.a.highlightAuto(__webpack_require__(2117)("./" + number)).value;
            var ProblemConstructor = __webpack_require__(2118)("./" + number).default;
            _this.problem = new ProblemConstructor();
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    };
    ProblemComponent.prototype.loadRust = function (number) {
        var _this = this;
        __webpack_require__.e/* require.ensure */(3).then((function (require) {
            number = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash_es__["c" /* padStart */])(number, 3, '0');
            _this.rustText = __WEBPACK_IMPORTED_MODULE_2_highlightjs___default.a.highlightAuto(__webpack_require__(2119)("./problem_" + number + ".rs")).value;
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    };
    ProblemComponent.prototype.loadJava = function (number) {
        var _this = this;
        __webpack_require__.e/* require.ensure */(1).then((function (require) {
            _this.javaText = __WEBPACK_IMPORTED_MODULE_2_highlightjs___default.a.highlightAuto(__webpack_require__(2116)("./euler" + number + ".java").replace(/\t/g, '    ')).value;
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    };
    ProblemComponent.prototype.run = function () {
        this.running = true;
        var _a = this.problem.run(), duration = _a.duration, solution = _a.solution;
        this.duration = parseInt(duration) + "ms";
        this.solution = solution;
        this.correct = __WEBPACK_IMPORTED_MODULE_4__assets_solutions_json___default.a[this.n] !== null ? solution == __WEBPACK_IMPORTED_MODULE_4__assets_solutions_json___default.a[this.n] : null;
        this.running = false;
    };
    return ProblemComponent;
}());
ProblemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
        selector: 'about',
        styles: ["\n  "],
        template: __webpack_require__(2079),
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]])
], ProblemComponent);



/***/ }),

/***/ 1448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(1132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(1133);
/*
 * Angular bootstrap
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */])
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),

/***/ 1536:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(319)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:400,400i,700);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Code+Pro);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);
exports.i(__webpack_require__(1535), "");

// module
exports.push([module.i, ".md-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.md-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.md-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.md-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.md-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.md-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.md-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.md-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.md-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.md-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.md-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.md-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.md-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.md-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.md-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.md-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.md-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.md-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.md-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.md-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.md-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.md-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.md-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.md-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}[md-ripple]{overflow:hidden}[md-ripple].mdRippleUnbounded{overflow:visible}.md-ripple-background{background-color:rgba(0,0,0,.0588);opacity:0;transition:opacity .3s linear;position:absolute;left:0;top:0;right:0;bottom:0}.mdRippleUnbounded .md-ripple-background{display:none}.md-ripple-background.md-ripple-active,.mdRippleFocused .md-ripple-background{opacity:1}.md-ripple-foreground{background-color:rgba(0,0,0,.0588);border-radius:50%;pointer-events:none;opacity:.25;position:absolute;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1)}.md-ripple-foreground.md-ripple-fade-in{opacity:1}.md-ripple-foreground.md-ripple-fade-out{opacity:0}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;text-transform:none;width:1px}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{box-sizing:border-box}.cdk-overlay-backdrop,.cdk-overlay-pane{position:absolute;pointer-events:auto;z-index:1000}.cdk-overlay-backdrop{top:0;bottom:0;left:0;right:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)}.cdk-overlay-transparent-backdrop{background:none}.mdRippleFocused .md-ripple-background{background-color:rgba(64,196,255,.1)}[md-button].md-button-focus.md-primary .md-button-focus-overlay,[md-fab].md-button-focus.md-primary .md-button-focus-overlay,[md-icon-button].md-button-focus.md-primary .md-button-focus-overlay,[md-mini-fab].md-button-focus.md-primary .md-button-focus-overlay,[md-raised-button].md-button-focus.md-primary .md-button-focus-overlay{background-color:rgba(255,87,34,.12)}[md-button].md-button-focus.md-accent .md-button-focus-overlay,[md-fab].md-button-focus.md-accent .md-button-focus-overlay,[md-icon-button].md-button-focus.md-accent .md-button-focus-overlay,[md-mini-fab].md-button-focus.md-accent .md-button-focus-overlay,[md-raised-button].md-button-focus.md-accent .md-button-focus-overlay{background-color:rgba(64,196,255,.12)}[md-button].md-button-focus.md-warn .md-button-focus-overlay,[md-fab].md-button-focus.md-warn .md-button-focus-overlay,[md-icon-button].md-button-focus.md-warn .md-button-focus-overlay,[md-mini-fab].md-button-focus.md-warn .md-button-focus-overlay,[md-raised-button].md-button-focus.md-warn .md-button-focus-overlay{background-color:rgba(244,67,54,.12)}[md-button],[md-icon-button]{background:transparent}[md-button].md-primary,[md-icon-button].md-primary{color:#ff5722}[md-button].md-accent,[md-icon-button].md-accent{color:#40c4ff}[md-button].md-warn,[md-icon-button].md-warn{color:#f44336}[md-button].md-accent[disabled],[md-button].md-primary[disabled],[md-button].md-warn[disabled],[md-button][disabled][disabled],[md-icon-button].md-accent[disabled],[md-icon-button].md-primary[disabled],[md-icon-button].md-warn[disabled],[md-icon-button][disabled][disabled]{color:rgba(0,0,0,.38)}[md-button]:hover.md-primary .md-button-focus-overlay,[md-icon-button]:hover.md-primary .md-button-focus-overlay{background-color:rgba(255,87,34,.12)}[md-button]:hover.md-accent .md-button-focus-overlay,[md-icon-button]:hover.md-accent .md-button-focus-overlay{background-color:rgba(64,196,255,.12)}[md-button]:hover.md-warn .md-button-focus-overlay,[md-icon-button]:hover.md-warn .md-button-focus-overlay{background-color:rgba(244,67,54,.12)}[md-fab],[md-mini-fab],[md-raised-button]{background-color:#fafafa}[md-fab].md-primary,[md-mini-fab].md-primary,[md-raised-button].md-primary{color:#fff}[md-fab].md-accent,[md-mini-fab].md-accent,[md-raised-button].md-accent{color:rgba(0,0,0,.87)}[md-fab].md-warn,[md-mini-fab].md-warn,[md-raised-button].md-warn{color:#fff}[md-fab].md-accent[disabled],[md-fab].md-primary[disabled],[md-fab].md-warn[disabled],[md-fab][disabled][disabled],[md-mini-fab].md-accent[disabled],[md-mini-fab].md-primary[disabled],[md-mini-fab].md-warn[disabled],[md-mini-fab][disabled][disabled],[md-raised-button].md-accent[disabled],[md-raised-button].md-primary[disabled],[md-raised-button].md-warn[disabled],[md-raised-button][disabled][disabled]{color:rgba(0,0,0,.38)}[md-fab].md-primary,[md-mini-fab].md-primary,[md-raised-button].md-primary{background-color:#ff5722}[md-fab].md-accent,[md-mini-fab].md-accent,[md-raised-button].md-accent{background-color:#40c4ff}[md-fab].md-warn,[md-mini-fab].md-warn,[md-raised-button].md-warn{background-color:#f44336}[md-fab].md-accent[disabled],[md-fab].md-primary[disabled],[md-fab].md-warn[disabled],[md-fab][disabled][disabled],[md-mini-fab].md-accent[disabled],[md-mini-fab].md-primary[disabled],[md-mini-fab].md-warn[disabled],[md-mini-fab][disabled][disabled],[md-raised-button].md-accent[disabled],[md-raised-button].md-primary[disabled],[md-raised-button].md-warn[disabled],[md-raised-button][disabled][disabled]{background-color:rgba(0,0,0,.12)}[md-fab],[md-mini-fab]{background-color:#40c4ff;color:rgba(0,0,0,.87)}.md-button-toggle-checked .md-button-toggle-label-content{background-color:#e0e0e0}.md-button-toggle-disabled .md-button-toggle-label-content{background-color:rgba(0,0,0,.38)}md-card{background:#fff;color:#000}md-card-subtitle{color:rgba(0,0,0,.54)}.md-checkbox-frame{border-color:rgba(0,0,0,.54)}.md-checkbox-checkmark{fill:#fafafa}.md-checkbox-checkmark-path{stroke:#fafafa!important}.md-checkbox-mixedmark{background-color:#fafafa}.md-checkbox-checked.md-primary .md-checkbox-background,.md-checkbox-indeterminate.md-primary .md-checkbox-background{background-color:#ff5722}.md-checkbox-checked.md-accent .md-checkbox-background,.md-checkbox-indeterminate.md-accent .md-checkbox-background{background-color:#03a9f4}.md-checkbox-checked.md-warn .md-checkbox-background,.md-checkbox-indeterminate.md-warn .md-checkbox-background{background-color:#f44336}.md-checkbox-disabled.md-checkbox-checked .md-checkbox-background,.md-checkbox-disabled.md-checkbox-indeterminate .md-checkbox-background{background-color:#b0b0b0}.md-checkbox-disabled:not(.md-checkbox-checked) .md-checkbox-frame{border-color:#b0b0b0}.md-checkbox:not(.md-checkbox-disabled).md-primary .md-checkbox-ripple .md-ripple-foreground{background-color:rgba(255,87,34,.26)}.md-checkbox:not(.md-checkbox-disabled).md-accent .md-checkbox-ripple .md-ripple-foreground{background-color:rgba(64,196,255,.26)}.md-checkbox:not(.md-checkbox-disabled).md-warn .md-checkbox-ripple .md-ripple-foreground{background-color:rgba(244,67,54,.26)}.md-chip:not(.md-basic-chip){background-color:#e0e0e0;color:rgba(0,0,0,.87)}.md-chip.md-chip-selected:not(.md-basic-chip){background-color:gray;color:hsla(0,0%,100%,.87)}.md-chip.md-chip-selected:not(.md-basic-chip).md-primary{background-color:#ff5722;color:#fff}.md-chip.md-chip-selected:not(.md-basic-chip).md-accent{background-color:#03a9f4;color:#fff}.md-chip.md-chip-selected:not(.md-basic-chip).md-warn{background-color:#f44336;color:#fff}md-dialog-container{background:#fff}md-icon.md-primary{color:#ff5722}md-icon.md-accent{color:#40c4ff}md-icon.md-warn{color:#f44336}.md-input-placeholder{color:rgba(0,0,0,.38)}.md-input-placeholder.md-focused{color:#ff5722}.md-input-placeholder.md-focused.md-accent{color:#40c4ff}.md-input-placeholder.md-focused.md-warn{color:#f44336}.md-input-placeholder.md-float.md-focused .md-placeholder-required,input.md-input-element:-webkit-autofill+.md-input-placeholder .md-placeholder-required{color:#40c4ff}.md-input-underline{border-color:rgba(0,0,0,.12)}.md-input-underline .md-input-ripple{background-color:#ff5722}.md-input-underline .md-input-ripple.md-accent{background-color:#40c4ff}.md-input-underline .md-input-ripple.md-warn{background-color:#f44336}md-list a[md-list-item],md-list md-list-item,md-nav-list a[md-list-item],md-nav-list md-list-item{color:#000}md-list [md-subheader],md-nav-list [md-subheader]{color:rgba(0,0,0,.54)}md-divider{border-top-color:rgba(0,0,0,.12)}md-nav-list .md-list-item.md-list-item-focus,md-nav-list .md-list-item:hover{background:rgba(0,0,0,.04)}.md-menu-content{background:#fff}[md-menu-item]{background:transparent;color:rgba(0,0,0,.87)}[md-menu-item][disabled]{color:rgba(0,0,0,.38)}[md-menu-item] md-icon{color:rgba(0,0,0,.54)}[md-menu-item]:focus:not([disabled]),[md-menu-item]:hover:not([disabled]){background:rgba(0,0,0,.04)}.md-progress-bar-background{background:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffccbc%27%2F%3E%3C%2Fsvg%3E\")}.md-progress-bar-buffer{background-color:#ffccbc}.md-progress-bar-fill:after{background-color:#f4511e}md-progress-bar.md-accent .md-progress-bar-background{background:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#b3e5fc%27%2F%3E%3C%2Fsvg%3E\")}md-progress-bar.md-accent .md-progress-bar-buffer{background-color:#b3e5fc}md-progress-bar.md-accent .md-progress-bar-fill:after{background-color:#039be5}md-progress-bar.md-warn .md-progress-bar-background{background:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffcdd2%27%2F%3E%3C%2Fsvg%3E\")}md-progress-bar.md-warn .md-progress-bar-buffer{background-color:#ffcdd2}md-progress-bar.md-warn .md-progress-bar-fill:after{background-color:#e53935}md-progress-circle path,md-progress-spinner path,md-spinner path{stroke:#f4511e}md-progress-circle.md-accent path,md-progress-spinner.md-accent path,md-spinner.md-accent path{stroke:#039be5}md-progress-circle.md-warn path,md-progress-spinner.md-warn path,md-spinner.md-warn path{stroke:#e53935}.md-radio-outer-circle{border-color:rgba(0,0,0,.54)}.md-radio-checked .md-radio-outer-circle{border-color:#40c4ff}.md-radio-disabled .md-radio-outer-circle{border-color:rgba(0,0,0,.38)}.md-radio-inner-circle{background-color:#40c4ff}.md-radio-disabled .md-radio-inner-circle{background-color:rgba(0,0,0,.38)}.md-radio-ripple .md-ripple-foreground{background-color:rgba(64,196,255,.26)}.md-radio-disabled .md-radio-ripple .md-ripple-foreground{background-color:rgba(0,0,0,.38)}.md-select-trigger{color:rgba(0,0,0,.38);border-bottom:1px solid rgba(0,0,0,.12)}md-select:focus:not(.md-select-disabled) .md-select-trigger{color:#ff5722;border-bottom:1px solid #ff5722}md-select.ng-invalid.ng-touched:not(.md-select-disabled) .md-select-trigger{color:#f44336;border-bottom:1px solid #f44336}.md-select-arrow{color:rgba(0,0,0,.38)}md-select:focus:not(.md-select-disabled) .md-select-arrow{color:#ff5722}md-select.ng-invalid.ng-touched:not(.md-select-disabled) .md-select-arrow{color:#f44336}.md-select-content{background:#fff}.md-select-value{color:rgba(0,0,0,.87)}.md-select-disabled .md-select-value{color:rgba(0,0,0,.38)}md-option.md-selected,md-option:focus:not(.md-option-disabled),md-option:hover:not(.md-option-disabled){background:rgba(0,0,0,.04)}md-option.md-selected{color:#ff5722}md-option.md-option-disabled{color:rgba(0,0,0,.38)}.md-sidenav-container{background-color:#fafafa;color:rgba(0,0,0,.87)}md-sidenav{color:rgba(0,0,0,.87)}md-sidenav,md-sidenav.md-sidenav-push{background-color:#fff}.md-sidenav-backdrop.md-sidenav-shown{background-color:rgba(0,0,0,.6)}md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-thumb{background-color:#03a9f4}md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-bar{background-color:rgba(3,169,244,.5)}md-slide-toggle.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple{background-color:rgba(0,0,0,.12)}md-slide-toggle.md-slide-toggle-focused .md-ink-ripple{background-color:rgba(3,169,244,.26)}md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-thumb{background-color:#ff5722}md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-bar{background-color:rgba(255,87,34,.5)}md-slide-toggle.md-primary.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple{background-color:rgba(0,0,0,.12)}md-slide-toggle.md-primary.md-slide-toggle-focused .md-ink-ripple{background-color:rgba(255,87,34,.26)}md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-thumb{background-color:#f44336}md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-bar{background-color:rgba(244,67,54,.5)}md-slide-toggle.md-warn.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple{background-color:rgba(0,0,0,.12)}md-slide-toggle.md-warn.md-slide-toggle-focused .md-ink-ripple{background-color:rgba(244,67,54,.26)}.md-disabled .md-slide-toggle-thumb{background-color:#bdbdbd}.md-disabled .md-slide-toggle-bar{background-color:rgba(0,0,0,.1)}.md-slide-toggle-thumb{background-color:#fafafa}.md-slide-toggle-bar{background-color:rgba(0,0,0,.38)}.md-slider-track{background-color:rgba(0,0,0,.26)}.md-slider-thumb,.md-slider-thumb-label,.md-slider-track-fill{background-color:#40c4ff}.md-slider-thumb-label-text{color:rgba(0,0,0,.87)}.md-tab-header,[md-tab-nav-bar]{border-bottom:1px solid #e0e0e0}.md-tab-label:focus{background-color:rgba(255,204,188,.3)}md-ink-bar{background-color:#ff5722}md-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}md-toolbar.md-primary{background:#ff5722;color:#fff}md-toolbar.md-accent{background:#40c4ff;color:rgba(0,0,0,.87)}md-toolbar.md-warn{background:#f44336;color:#fff}.md-tooltip{background:rgba(97,97,97,.9)}body,html{height:100%;font-family:Raleway,sans-serif;background:#2b2b2b;color:#fff;margin:0}.title-button{padding:0 16px;font-size:20px;background:none;border:none;color:#fff;outline:none}.title-button:hover{cursor:pointer}.secondary-toolbar{background-color:#ff6e40;color:#fff}.secondary-toolbar .title{padding:0 16px}a{text-decoration:none;color:#40c4ff}a.active{background-color:gray}pre.hljs{border:1px solid grey;margin:25px;max-height:600px;font-size:14px}code{font-family:Source Code Pro,monospace}footer{font-family:Raleway,sans-serif;padding:20px;text-align:right}.has-solution{background-color:#ff6e40}.hidden{display:none!important}", ""]);

// exports


/***/ }),

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(319)();
// imports


// module
exports.push([module.i, ".md-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.md-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.md-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.md-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.md-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.md-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}.md-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.md-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.md-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.md-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.md-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.md-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.md-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.md-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.md-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.md-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.md-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.md-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.md-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.md-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.md-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.md-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.md-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.md-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}[md-ripple]{overflow:hidden}[md-ripple].mdRippleUnbounded{overflow:visible}.md-ripple-background{background-color:rgba(0,0,0,.0588);opacity:0;transition:opacity .3s linear;position:absolute;left:0;top:0;right:0;bottom:0}.mdRippleUnbounded .md-ripple-background{display:none}.md-ripple-background.md-ripple-active,.mdRippleFocused .md-ripple-background{opacity:1}.md-ripple-foreground{background-color:rgba(0,0,0,.0588);border-radius:50%;pointer-events:none;opacity:.25;position:absolute;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1)}.md-ripple-foreground.md-ripple-fade-in{opacity:1}.md-ripple-foreground.md-ripple-fade-out{opacity:0}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;text-transform:none;width:1px}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{box-sizing:border-box}.cdk-overlay-backdrop,.cdk-overlay-pane{position:absolute;pointer-events:auto;z-index:1000}.cdk-overlay-backdrop{top:0;bottom:0;left:0;right:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)}.cdk-overlay-transparent-backdrop{background:none}.problems-list{display:flex;width:100%;overflow:hidden;flex-wrap:wrap;justify-content:flex-start}.problems-list button{font-family:Raleway,sans-serif;font-size:18px;font-weight:700;border:none;border-radius:2px}.sol-1{background:#ffac92}.sol-2{background:#ff8d69}.sol-3{background:#ff6e40}", ""]);

// exports


/***/ }),

/***/ 1540:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1545:
/***/ (function(module, exports) {

module.exports = {"1":233168,"2":4613732,"3":6857,"4":906609,"5":232792560,"6":25164150,"7":104743,"8":40824,"9":31875000,"10":142913828922,"11":70600674,"12":76576500,"13":5537376230,"14":837799,"15":137846528820,"16":1366,"17":21124,"18":1074,"19":171,"20":648,"21":31626,"22":871198282,"23":4179871,"24":2783915460,"25":4782,"26":983,"27":-59231,"28":669171001,"29":9183,"30":443839,"31":73682,"32":45228,"33":100,"34":40730,"35":55,"36":872187,"37":748317,"38":932718654,"39":840,"40":210,"41":7652413,"42":162,"43":16695334890,"44":5482660,"45":1533776805,"46":5777,"47":134043,"48":9110846700,"49":296962999629,"50":997651,"51":121313,"52":142857,"53":4075,"54":376,"55":249,"56":972,"57":153,"58":26241,"59":107359,"60":26033,"61":28684,"62":127035954683,"63":49,"64":1322,"65":272,"66":661,"67":7273,"68":6531031914842725,"69":510510,"70":8319823,"71":428570,"72":303963552391,"73":7295372,"74":402,"75":161667,"76":190569291,"77":71,"78":55374,"79":73162890,"80":40886,"81":427337,"82":260324,"83":425185,"84":101524,"85":2772,"86":1818,"87":1097343,"88":7587457,"89":743,"90":1217,"91":14234,"92":8581146,"93":1258,"94":518408346,"95":14316,"96":24702,"97":8739992577,"98":18769,"99":709,"100":756872327473,"101":37076114526,"102":228,"103":20313839404245,"104":329468,"105":73702,"106":21384,"107":259679,"108":180180,"109":38182,"110":9350130049860600,"111":612407567715,"112":1587000,"113":51161058134250,"114":16475640049,"115":168,"116":20492570929,"117":100808458960497,"118":44680,"119":248155780267521,"120":333082500,"121":2269,"122":1582,"123":21035,"124":21417,"125":2906969179,"126":18522,"127":18407904,"128":14516824220,"129":1000023,"130":149253,"131":173,"132":843296,"133":453647705,"134":18613426663617120,"135":4989,"136":2544559,"137":1120149658760,"138":1118049290473932,"139":10057761,"140":5673835352990,"141":878454337159,"142":1006193,"143":30758397,"144":354,"145":608720,"146":676333270,"147":846910284,"148":2129970655314432,"149":52852124,"150":-271248680,"151":0.464399,"152":301,"153":17971254122360636,"154":479742450,"155":3857447,"156":21295121502550,"157":53490,"158":409511334375,"159":14489159,"160":16576,"161":20574308184277972,"162":"3D58725572C62302","163":343047,"164":378158756814587,"165":2868868,"166":7130034,"167":3916160068885,"168":59206,"169":178653872807,"170":9857164023,"171":142989277,"172":227485267000992000,"173":1572729,"174":209566,"175":[1,13717420,8],"176":96818198400000,"177":129325,"178":126461847755,"179":986262,"180":285196020571078980,"181":83735848679360670,"182":399788195976,"183":48861552,"184":1725323624056,"185":4640261571849533,"186":2325629,"187":17427258,"188":95962097,"189":10834893628237824,"190":371048281,"191":1918080160,"192":57060635927998344,"193":684465067343069,"194":61190912,"195":75085391,"196":322303240771079940,"197":1.710637717,"198":52374425,"199":0.00396087,"200":229161792008,"201":115039000,"202":1209002624,"203":34029210557338,"204":2944730,"205":0.5731441,"206":1389019170,"207":44043947822,"208":331951449665644800,"209":15964587728784,"210":1598174770174689500,"211":1922364685,"212":328968937309,"213":330.721154,"214":1677366278943,"215":806844323190414,"216":5437849,"217":6273134,"218":0,"219":64564225042,"220":[139776,963904],"221":1884161251122450,"222":1590933,"223":61614848,"224":4137330,"225":2009,"226":0.11316017,"227":3780.618622,"228":86226,"229":11325263,"230":850481152593119200,"231":7526965179680,"232":0.83648556,"233":271204031455541300,"234":1259187438574927000,"235":1.002322108633,"236":"123/59","237":15836928,"238":9922545104535660,"239":0.001887854841,"240":7448717393364182000,"241":482316491800641150,"242":997104142249036700,"243":892371480,"244":96356848,"245":288084712410001,"246":810834388,"247":782252,"248":23507044290,"249":9275262564250418,"250":1425480602091519,"251":18946051,"252":104924,"253":11.492847,"254":8184523820510,"255":4.447401118,"256":85765680,"257":139012411,"258":12747994,"259":20101196798,"260":167542057,"261":238890850232021,"262":2531.205,"263":2039506520,"264":2816417.1055,"265":209110240768,"266":1096883702440585,"267":0.999992836187,"268":785478606870985,"269":1311109198529286,"270":82282080,"271":4617456485273130000,"272":8495585919506151000,"273":2032447591196869000,"274":1601912348822,"275":15030564,"276":5777137137739633000,"277":1125977393124310,"278":1228215747273908500,"279":416577688,"280":430.088247,"281":1485776387445623,"282":1098988351,"283":28038042525570324,"284":"5a411d7b","285":157055.80999,"286":52.6494571953,"287":313135496,"288":605857431263982000,"289":6567944538,"290":20444710234716470,"291":4037526,"292":3600060866,"293":2209,"294":789184709,"295":4884650818,"296":1137208419,"297":2252639041804718000,"298":1.76882294,"299":549936643,"300":8.0540771484375,"301":2178309,"302":1170060,"303":1111981904675169,"304":283988410192,"305":18174995535140,"306":852938,"307":0.7311720251,"308":1539669807660924,"309":210139,"310":2586528661783,"311":2466018557,"312":324681947,"313":2057774861813004,"314":132.52756426,"315":13625242,"316":542934735751917760,"317":1856532.8455,"318":709313889,"319":268457129,"320":278157919195482660,"321":2470433131948040,"322":999998760323314000,"323":6.3551758451,"324":96972774,"325":54672965,"326":1966666166408794400,"327":34315549139516,"328":260511850222,"329":"199740353/29386561536000","330":15955822,"331":467178235146843500,"332":2717.751525,"333":3053105,"334":150320021261690850,"335":5032316,"336":"CAGBIHEFJDK","337":85068035,"338":15614292,"339":19823.542204,"340":291504964,"341":56098610614277016,"342":5943040885644,"343":269533451410884200,"344":null,"345":13938,"346":336108797689259260,"347":11109800204052,"348":1004195061,"349":115384615384614940,"350":null,"351":11762187201804552,"352":null,"353":null,"354":null,"355":1726545007,"356":28010159,"357":1739023853137,"358":3284144505,"359":40632119,"360":878825614395267100,"361":null,"362":null,"363":0.0000372091,"364":44855254,"365":162619462356610300,"366":88351299,"367":null,"368":253.6135092068,"369":862400558448,"370":41791929448408,"371":40.66368097,"372":301450082318807040,"373":727227472448913,"374":334420941,"375":7435327983715286000,"376":null,"377":732385277,"378":147534623725724700,"379":132314136838185,"380":null,"381":139602943319822,"382":697003956,"383":22173624649806,"384":3354706415856333000,"385":null,"386":528755790,"387":696067597313468,"388":831907372805130000,"389":2406376.3623,"390":2919133642971,"391":null}

/***/ }),

/***/ 2078:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"secondary-toolbar\">\n  <span class=\"title\">My Project Euler Solutions</span>\n</md-toolbar>\n<div class=\"card-container\" style=\"padding: 20px;\">\n  <div class=\"problems-list\">\n    <button [routerLink]=\"['/problem', problem.n]\" *ngFor=\"let problem of problems\" style=\"width: 3rem; height: 3rem; margin: 1px;\" [ngClass]=\"{\n      'sol-1': problem.solutions === 1,\n      'sol-2': problem.solutions === 2,\n      'sol-3': problem.solutions === 3\n    }\">\n      <div>\n        {{problem.n}}\n      </div>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ 2079:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"secondary-toolbar\">\n  <span class=\"title\">Problem {{n}}</span>\n\n  <span style=\"flex: 1 1 auto;\"></span>\n\n  <button md-icon-button [class.hidden]=\"lang !== 'js'\" (click)=\"run()\">\n    <md-icon>play_arrow</md-icon>\n  </button>\n  <!--<button md-icon-button>-->\n  <!--<md-icon>skip_next</md-icon>-->\n  <!--</button>-->\n</md-toolbar>\n\n<div [innerHtml]=\"problemHtml\" style=\"margin: 10px 20px;\"></div>\n\n<div style=\"margin: 10px 20px;\" [hidden]=\"!error\">\n  <hr>\n  {{error}}\n</div>\n\n<div *ngIf=\"!error\">\n  <!--<select name=\"problem\" id=\"problem\" (change)=\"onChange($event.target.value)\">-->\n  <!--<option value=\"{{problem}}\" *ngFor=\"let problem of availableProblems\">{{problem}}</option>-->\n  <!--</select>-->\n  <div style=\"margin: 10px; display: flex; justify-content: center; align-items: center;\">\n    <button style=\"padding: 10px; margin: 0 10px;\" md-raised-button color=\"accent\" [disabled]=\"!jsText\" (click)=\"selectLang('js')\"><md-icon style=\"height: 50px; width: 50px;\" svgIcon=\"js\"></md-icon></button>\n    <button style=\"padding: 10px; margin: 0 10px;\" md-raised-button color=\"accent\" [disabled]=\"!rustText\" (click)=\"selectLang('rust')\"><md-icon style=\"height: 50px; width: 50px;\" svgIcon=\"rust\"></md-icon></button>\n    <button style=\"padding: 10px; margin: 0 10px;\" md-raised-button color=\"accent\" [disabled]=\"!javaText\" (click)=\"selectLang('java')\"><md-icon style=\"height: 50px; width: 50px;\" svgIcon=\"java\"></md-icon></button>\n\n    <div style=\"margin: 10px 20px;\">\n      <span>Duration: {{duration}}</span>\n      <br>\n      <span>Solution: <code>{{solution}}</code></span>\n      <md-icon [class.hidden]=\"correct !== true\">check</md-icon>\n      <md-icon [class.hidden]=\"correct !== false\">close</md-icon>\n    </div>\n  </div>\n\n  <pre [class.hidden]=\"lang !== 'js'\" class=\"hljs\" style=\"margin: 0;\"><code [innerHtml]=\"jsText\"></code></pre>\n  <pre [class.hidden]=\"lang !== 'rust'\" class=\"hljs\" style=\"margin: 0;\"><code [innerHtml]=\"rustText\"></code></pre>\n  <pre [class.hidden]=\"lang !== 'java'\" class=\"hljs\" style=\"margin: 0;\"><code [innerHtml]=\"javaText\"></code></pre>\n</div>\n"

/***/ }),

/***/ 2112:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(1536);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 2113:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(1537);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 2115:
/***/ (function(module, exports) {


const {
  Module,
  instantiate,
  Memory,
  Table
} = WebAssembly;

const WebAssemblyModule = function(deps = {
  'global': {},
  'env': {
    'memory': new Memory({initial: 10, limit: 100}),
    'table': new Table({initial: 0, element: 'anyfunc'})
  }
}) {
  return instantiate(buffer, deps);
}

module.exports = WebAssemblyModule;


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1": 1137,
	"./144": 1138,
	"./2": 1139,
	"./3": 1140,
	"./4": 1141,
	"./5": 1142,
	"./6": 1143,
	"./83": 1144,
	"./93": 1145,
	"./98": 1146
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 401;

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])()
], AppState);



/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timers", function() { return timers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tick", function() { return Tick; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_co__ = __webpack_require__(1458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_co___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_co__);








/**
 * Contains all timers.
 * @type {{}}
 */
var timers = {};

var Timer = function () {
  function Timer() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Timer);

    this.ticks = [];
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Timer, [{
    key: 'median',


    /**
     * Get the median of all ticks.
     * @returns {*}
     */
    value: function median() {
      if (this.ticks.length > 1) {
        var sorted = this.ticks.slice(0).sort(function (a, b) {
          return a && b && a.getDiff() - b.getDiff() || 0;
        });

        var length = sorted.length;
        var half = Math.floor(length / 2);

        if (length % 2) {
          return sorted[half].getDiff();
        } else {
          return (sorted[half - 1].getDiff() + sorted[half].getDiff()) / 2;
        }
      } else {
        return this.ticks[0].getDiff();
      }
    }

    /**
     * Get the average duration of all ticks.
     * @returns {number}
     */

  }, {
    key: 'mean',
    value: function mean() {
      return this.duration() / this.ticks.length;
    }

    /**
     * Get the duration of all ticks.
     * @returns {number}
     */

  }, {
    key: 'duration',
    value: function duration() {
      var sum = 0;
      var length = this.ticks.length;
      for (var i = 0; i < length; i++) {
        sum += this.ticks[i].getDiff();
      }
      return sum;
    }

    /**
     * Get the shortest tick.
     * @returns {number}
     */

  }, {
    key: 'min',
    value: function min() {
      var min = this.ticks[0].getDiff();

      this.ticks.forEach(function (tick) {
        if (tick.getDiff() < min) {
          min = tick.getDiff();
        }
      });

      return min;
    }

    /**
     * Get the longest tick.
     * @returns {number}
     */

  }, {
    key: 'max',
    value: function max() {
      var max = 0;

      this.ticks.forEach(function (tick) {
        if (tick.getDiff() > max) {
          max = tick.getDiff();
        }
      });

      return max;
    }

    /**
     * Get the number of ticks.
     * @returns {Number}
     */

  }, {
    key: 'count',
    value: function count() {
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(this.ticks).length;
    }

    /**
     * Parse the numbers nicely.
     * @param num
     * @returns {string}
     */

  }, {
    key: 'parse',
    value: function parse(num) {
      if (num < 1e3) {
        return num + 'ns';
      } else if (num >= 1e3 && num < 1e6) {
        return num / 1e3 + 'us';
      } else if (num >= 1e6 && num < 1e9) {
        return num / 1e6 + 'ms';
      } else if (num >= 1e9) {
        return num / 1e9 + 's';
      }
    }
  }]);

  return Timer;
}();

/**
 * Timers factory object.
 * @param name
 * @returns {*}
 */


var timer = function timer(name) {
  if (typeof timers[name] === 'undefined') {
    timers[name] = new Timer();
  }

  return timers[name];
};

var Tick = function () {
  /**
   * Constructor of tick.
   * @param name The name of this tick.
   * @returns {Tick}
   * @constructor
   */
  function Tick(name) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Tick);

    this.name = name;
    return this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Tick, [{
    key: 'start',


    /**
     * Starts the tick.
     */
    value: function start() {
      this.hrstart = envTimer();
      timer(this.name).ticks.push(this);
    }

    /**
     * Ends the tick.
     */

  }, {
    key: 'stop',
    value: function stop() {
      this.hrend = envTimer(this.hrstart);
    }

    /**
     * Get the duration of the tick.
     * @returns Long nanoseconds
     */

  }, {
    key: 'getDiff',
    value: function getDiff() {
      return this.hrend[0] * 1e9 + this.hrend[1];
    }
  }], [{
    key: 'wrap',
    value: function wrap(name, callback) {
      if (typeof name === 'function') {
        callback = name;
        name = functionName(callback);
      }

      if (name === '') {
        name = 'anon';
      }

      var tick = new Tick(name);
      tick.start();

      var done = function done() {
        tick.stop();
      };

      if (isGeneratorFunction(callback)) {
        return __WEBPACK_IMPORTED_MODULE_4_co___default()(callback).then(done, done);
      } else if (isFunction(callback)) {
        // If done is passed when the callback is declared than we assume is async
        return callback(done);
      } else {
        // Otherwise just call the function and stop the tick
        tick.stop();
        return callback();
      }
    }
  }]);

  return Tick;
}();

function envTimer(time) {
  if (!process || !process.browser) {
    if (time === null) {
      return process.hrtime();
    } else {
      return process.hrtime(time);
    }
  } else {
    if (time === null) {
      return perf.now();
    } else {
      return perf.now() - time;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  timer: timer,
  timers: timers,
  Tick: Tick
});

/**
 * Helper function used to retrieve function name.
 * @param fun
 * @returns {string}
 */
function functionName(fun) {
  var ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret.trim();
}

/**
 * Check if `obj` is a generator function.
 *
 * @param {Mixed} value
 * @return {Boolean}
 * @api private
 */
function isGeneratorFunction(value) {
  return typeof value === 'function' && value.constructor.name === 'GeneratorFunction';
}

/**
 * Helper function used to check is argument is of type function
 * @author https://github.com/lodash/lodash/blob/4.16.4/lodash.js#L11590
 * @param value
 * @returns {boolean}
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? Object.prototype.toString.call(value) : '';
  return tag == '[object Function]' || tag == '[object GeneratorFunction]' || tag == '[object Proxy]';
}

/**
 * Helper function used to check is argument is of type object
 * @author https://github.com/lodash/lodash/blob/4.16.4/lodash.js#L11590
 * @param value
 * @returns {boolean}
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(value);
  return value != null && (type == 'object' || type == 'function');
}

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Euler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_marky_lib_marky_browser_es__ = __webpack_require__(1686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_exectimer__ = __webpack_require__(66);



// import microtime from 'microtime';

// import moment from 'moment';

// const Tick = t.Tick;

// { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
global.logLevel = global.logLevel || 'info';

var performance = global.performance || {};
var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
    return new Date().getTime();
};

window.process = global.process = {
    hrtime: function hrtime(previousTimestamp) {
        var clocktime = performanceNow.call(performance) * 1e-3;
        var seconds = Math.floor(clocktime);
        var nanoseconds = Math.floor(clocktime % 1 * 1e9);

        if (previousTimestamp) {
            seconds = seconds - previousTimestamp[0];
            nanoseconds = nanoseconds - previousTimestamp[1];
            if (nanoseconds < 0) {
                seconds--;
                nanoseconds += 1e9;
            }
        }

        return [seconds, nanoseconds];
    }
};
// TODO: write own polymorphic exectimer

var Euler = function () {
    function Euler() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Euler);

        this.duration = null;
        this.key = '' + Math.random();

        // const name = this.constructor.name;

        // let isNode;
        // try {
        //     isNode = !!process.release;
        // } catch(e) {
        //     isNode = false;
        // }
        //
        // console.log('isNode', isNode);
        //
        // if(isNode) {
        //     try {
        //         const chalk = require('chalk');
        //         const winston = require('winston');
        //         const Logger = winston.Logger;
        //         const Console = winston.transports.Console;
        //
        //         this.logger = new Logger({
        //             transports: [
        //                 new Console({
        //                     level: global.logLevel,
        //                     /**
        //                      * @returns {String}
        //                      */
        //                     timestamp() {
        //                         return moment(Date.now()).format('MM.DD.YY H:mm:ss');
        //                     },
        //                     /**
        //                      * @param {Object} opts
        //                      * @param {Function} opts.timestamp
        //                      * @param {String} opts.level
        //                      * @param {String} [opts.message]
        //                      * @param {*} [opts.meta]
        //                      */
        //                     formatter(opts) {
        //                         // Return string will be passed to logger.
        //                         const time = chalk.blue(opts.timestamp());
        //                         const level = opts.level.toUpperCase();
        //                         const coloredLevel =
        //                             level === 'WARN' ? chalk.yellow('WARN') :
        //                                 level === 'ERROR' ? chalk.red('ERROR') :
        //                                     level;
        //                         const message = opts.message !== undefined ? opts.message : '';
        //                         const meta = opts.meta && Object.keys(opts.meta).length ? `\n\t${JSON.stringify(opts.meta)}` : '';
        //                         return `[${chalk.green(name)}][${time}][${coloredLevel}] ${message}${meta}`;
        //                     }
        //                 })
        //             ]
        //         });
        //     } catch(e) {
        //         this.logger = console;
        //         this.logger.verbose = console.log;
        //     }
        // } else {
        this.logger = console;
        this.logger.verbose = console.log;
        // }
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Euler, [{
        key: 'start',
        value: function start() {
            __WEBPACK_IMPORTED_MODULE_3_marky_lib_marky_browser_es__["a" /* mark */](this.key);
            // this.startTime = microtime.now();
        }
    }, {
        key: 'step',
        value: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function step() {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function step$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            throw new Error('You need to override this, doofus');

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, step, this);
        })
    }, {
        key: 'end',
        value: function end() {
            // this.endTime = microtime.now();
            // this.duration = this.endTime - this.startTime;
            this.duration = __WEBPACK_IMPORTED_MODULE_3_marky_lib_marky_browser_es__["b" /* stop */](this.key).duration;
        }
    }, {
        key: 'run',
        value: function run() {
            var stepper = this.step();

            this.start();

            var step = void 0;
            do {
                step = stepper.next();
                this.verbose('step: ' + step.value);
            } while (!step.done);

            this.end();

            var stepTimer = __WEBPACK_IMPORTED_MODULE_4__util_exectimer__["default"].timers.step;

            this.info('Solution: ' + step.value);
            this.info('Took ' + stepTimer.count() + ' steps');
            this.info('Took ' + parseInt(this.duration) + 'ms');

            return {
                solution: step.value,
                duration: this.duration
            };
        }
    }, {
        key: 'error',
        value: function error() {
            var _logger;

            (_logger = this.logger).error.apply(_logger, arguments);
        }
    }, {
        key: 'warn',
        value: function warn() {
            var _logger2;

            (_logger2 = this.logger).warn.apply(_logger2, arguments);
        }
    }, {
        key: 'info',
        value: function info() {
            var _logger3;

            (_logger3 = this.logger).info.apply(_logger3, arguments);
        }
    }, {
        key: 'verbose',
        value: function verbose() {
            var _logger4;

            (_logger4 = this.logger).verbose.apply(_logger4, arguments);
        }
    }, {
        key: 'debug',
        value: function debug() {
            var _logger5;

            (_logger5 = this.logger).debug.apply(_logger5, arguments);
        }
    }, {
        key: 'silly',
        value: function silly() {
            var _logger6;

            (_logger6 = this.logger).silly.apply(_logger6, arguments);
        }
    }, {
        key: 'log',
        value: function log() {
            var _logger7;

            (_logger7 = this.logger).log.apply(_logger7, arguments);
        }
    }]);

    return Euler;
}();


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(169)))

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (true) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
    // Production
    _decorateModuleRef = function (modRef) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* disableDebugTools */])();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = quadratic;
/**
 *
 * @param m2
 * @param n
 * @param x2
 * @returns {number}
 */
function quadratic(m2, n, x2) {
    var a = 4 + m2 * m2;
    var b = 2 * m2 * n;
    var c = n * n - 100;

    var ans1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    var ans2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    var dx1 = x2 - ans1;
    var dx2 = x2 - ans2;
    dx1 = dx1 > 0 ? dx1 : -dx1;
    dx2 = dx2 > 0 ? dx2 : -dx2;

    if (dx1 > dx2) return ans1;else return ans2;
}

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./euler1.java": 1150,
	"./euler10.java": 1151,
	"./euler100.java": 1152,
	"./euler101.java": 1153,
	"./euler102.java": 1154,
	"./euler103.java": 1155,
	"./euler104.java": 1156,
	"./euler105.java": 1157,
	"./euler108.java": 1158,
	"./euler11.java": 1159,
	"./euler110.java": 1160,
	"./euler112.java": 1161,
	"./euler119.java": 1162,
	"./euler12.java": 1163,
	"./euler120.java": 1164,
	"./euler125.java": 1165,
	"./euler13.java": 1166,
	"./euler131.java": 1167,
	"./euler14.java": 1168,
	"./euler144.java": 1169,
	"./euler145.java": 1170,
	"./euler15.java": 1171,
	"./euler16.java": 1172,
	"./euler17.java": 1173,
	"./euler18.java": 1174,
	"./euler19.java": 1175,
	"./euler2.java": 1176,
	"./euler20.java": 1177,
	"./euler205.java": 1178,
	"./euler206.java": 1179,
	"./euler21.java": 1180,
	"./euler22.java": 1181,
	"./euler23.java": 1182,
	"./euler233.java": 1183,
	"./euler243.java": 1184,
	"./euler25.java": 1185,
	"./euler26.java": 1186,
	"./euler265.java": 1187,
	"./euler27.java": 1188,
	"./euler277.java": 1189,
	"./euler28.java": 1190,
	"./euler29.java": 1191,
	"./euler3.java": 1192,
	"./euler30.java": 1193,
	"./euler301.java": 1194,
	"./euler31.java": 1195,
	"./euler310.java": 1196,
	"./euler32.java": 1197,
	"./euler33.java": 1198,
	"./euler34.java": 1199,
	"./euler35.java": 1200,
	"./euler356.java": 1201,
	"./euler357.java": 1202,
	"./euler358.java": 1203,
	"./euler36.java": 1204,
	"./euler362.java": 1205,
	"./euler365.java": 1206,
	"./euler368.java": 1207,
	"./euler37.java": 1208,
	"./euler381.java": 1209,
	"./euler39.java": 1210,
	"./euler4.java": 1211,
	"./euler40.java": 1212,
	"./euler41.java": 1213,
	"./euler42.java": 1214,
	"./euler43.java": 1215,
	"./euler44.java": 1216,
	"./euler45.java": 1217,
	"./euler46.java": 1218,
	"./euler47.java": 1219,
	"./euler49.java": 1220,
	"./euler5.java": 1221,
	"./euler50.java": 1222,
	"./euler51.java": 1223,
	"./euler52.java": 1224,
	"./euler53.java": 1225,
	"./euler54.java": 1226,
	"./euler55.java": 1227,
	"./euler56.java": 1228,
	"./euler57.java": 1229,
	"./euler58.java": 1230,
	"./euler59.java": 1231,
	"./euler6.java": 1232,
	"./euler60.java": 1233,
	"./euler61.java": 1234,
	"./euler62.java": 1235,
	"./euler63.java": 1236,
	"./euler64.java": 1237,
	"./euler65.java": 1238,
	"./euler66.java": 1239,
	"./euler67.java": 1240,
	"./euler69.java": 1241,
	"./euler7.java": 1242,
	"./euler70.java": 1243,
	"./euler71.java": 1244,
	"./euler72.java": 1245,
	"./euler73.java": 1246,
	"./euler74.java": 1247,
	"./euler75.java": 1248,
	"./euler76.java": 1249,
	"./euler77.java": 1250,
	"./euler78.java": 1251,
	"./euler79.java": 1252,
	"./euler8.java": 1253,
	"./euler80.java": 1254,
	"./euler81.java": 1255,
	"./euler82.java": 1256,
	"./euler83.java": 1257,
	"./euler84.java": 1258,
	"./euler85.java": 1259,
	"./euler86.java": 1260,
	"./euler87.java": 1261,
	"./euler89.java": 1262,
	"./euler9.java": 1263,
	"./euler90.java": 1264,
	"./euler91.java": 1265,
	"./euler92.java": 1266,
	"./euler93.java": 1267,
	"./euler94.java": 1268,
	"./euler95.java": 1269,
	"./euler96.java": 1270,
	"./euler97.java": 1271,
	"./euler98.java": 1272,
	"./euler99.java": 1273
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 812;

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./problem_001.rs": 1274,
	"./problem_002.rs": 1275,
	"./problem_003.rs": 1276,
	"./problem_004.rs": 1277,
	"./problem_005.rs": 1278,
	"./problem_006.rs": 1279,
	"./problem_007.rs": 1280,
	"./problem_008.rs": 1281,
	"./problem_009.rs": 1282,
	"./problem_083.rs": 1283,
	"./problem_092.rs": 1284
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 813;

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_component__ = __webpack_require__(1436);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about_component__["a"]; });



/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(1441);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__no_content_component__ = __webpack_require__(1446);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__no_content_component__["a"]; });



/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__problem_component__ = __webpack_require__(1447);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__problem_component__["a"]; });



/***/ })

},[1448]);
//# sourceMappingURL=main.3f9880ee784d0115d549.bundle.map