webpackJsonp([1],{2346:function(r,n,t){function e(r){return t(i(r))}function i(r){var n=s[r];if(!(n+1))throw new Error("Cannot find module '"+r+"'.");return n}var s={"./1":2352,"./1.js":2352,"./144":2353,"./144.js":2353,"./2":2354,"./2.js":2354,"./3":2355,"./3.js":2355,"./4":2356,"./4.js":2356,"./83":2357,"./83.js":2357,"./93":2358,"./93.js":2358,"./98":2359,"./98.js":2359,"./Euler":2360,"./Euler.js":2360,"./util/index":2361,"./util/index.js":2361,"./util/ispalindrome":2362,"./util/ispalindrome.js":2362,"./util/quadratic":2363,"./util/quadratic.js":2363,"./util/sieve_of_atkin":2364,"./util/sieve_of_atkin.js":2364};e.keys=function(){return Object.keys(s)},e.resolve=i,r.exports=e,e.id=2346},2347:function(r,n,t){function e(r){return t(i(r))}function i(r){var n=s[r];if(!(n+1))throw new Error("Cannot find module '"+r+"'.");return n}var s={"./1":1273,"./1.js":1273,"./144":1274,"./144.js":1274,"./2":1275,"./2.js":1275,"./3":1276,"./3.js":1276,"./4":1277,"./4.js":1277,"./83":1278,"./83.js":1278,"./93":1279,"./93.js":1279,"./98":1280,"./98.js":1280,"./Euler":129,"./Euler.js":129,"./util/index":1281,"./util/index.js":1281,"./util/ispalindrome":1282,"./util/ispalindrome.js":1282,"./util/quadratic":837,"./util/quadratic.js":837,"./util/sieve_of_atkin":1283,"./util/sieve_of_atkin.js":1283};e.keys=function(){return Object.keys(s)},e.resolve=i,r.exports=e,e.id=2347},2352:function(r,n){r.exports="import Euler from './Euler';\r\nimport t from 'exectimer';\r\nconst Tick = t.Tick;\r\n\r\nexport default class Euler1 extends Euler {\r\n    n = 1;\r\n    total = 0;\r\n\r\n    constructor() {\r\n        super();\r\n    }\r\n\r\n    *step() {\r\n        for(; this.n < 1000; this.n++) {\r\n            let tick = new Tick('step');\r\n            tick.start();\r\n\r\n            if(this.n % 3 === 0 || this.n % 5 === 0) this.total += this.n;\r\n\r\n            tick.stop();\r\n            yield this.total;\r\n        }\r\n        return this.total;\r\n    }\r\n}\r\n"},2353:function(r,n){r.exports="'use strict';\r\nimport Euler from './Euler';\r\nimport quadratic from './util/quadratic';\r\n// import { decorate } from 'core-decorators';\r\nimport t from 'exectimer';\r\nconst Tick = t.Tick;\r\n\r\nclass Point {\r\n    constructor(x, y, z) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.z = z;\r\n    }\r\n}\r\n\r\nexport default class Euler144 extends Euler {\r\n    p1;\r\n    p2;\r\n    x1;\r\n    y1;\r\n    x2;\r\n    y2;\r\n    ans;\r\n\r\n    constructor() {\r\n        super();\r\n        this.p1 = new Point(0.0, 10.1);\r\n        this.p1 = new Point(1.4, -9.6);\r\n        this.x1 = 0.0;\r\n        this.y1 = 10.1;\r\n        this.x2 = 1.4;\r\n        this.y2 = -9.6;\r\n        this.ans = 1;\r\n    }\r\n\r\n    /**\r\n     * This is currently not supported by Babylon:\r\n     *  @decorate(Tick.wrap)\r\n     *  *step() {}\r\n     */\r\n    *step() {\r\n        while(true) {\r\n            let tick = new Tick('step');\r\n            tick.start();\r\n            let m0 = (this.y2 - this.y1) / (this.x2 - this.x1);\r\n            let m1 = Euler144.deriv(this.x2, this.y2);\r\n            let tempX = this.x2;\r\n            let tempY = this.y2;\r\n            let X = (m0 - m1) / (1 + m0 * m1);\r\n            let m2 = (m1 - X) / (1 + X * m1);\r\n\r\n            let b = this.y2 - m2 * this.x2;\r\n            this.x2 = quadratic(m2, b, this.x2);\r\n            this.y2 = m2 * this.x2 + b;\r\n            this.verbose(`Hit ${this.x2}, ${this.y2}`);\r\n            this.x1 = tempX;\r\n            this.y1 = tempY;\r\n\r\n            // new point is inside hole\r\n            if(this.y2 > 0 && this.x2 > -.01 && this.x2 < .01) {\r\n                tick.stop();\r\n                return {\r\n                    x1: this.x1,\r\n                    y1: this.y1,\r\n                    x2: this.x2,\r\n                    y2: this.y2,\r\n                    ans: this.ans\r\n                };\r\n            } else {\r\n                this.ans++;\r\n                tick.stop();\r\n                yield {\r\n                    x1: this.x1,\r\n                    y1: this.y1,\r\n                    x2: this.x2,\r\n                    y2: this.y2,\r\n                    ans: this.ans\r\n                };\r\n            }\r\n        }\r\n    }\r\n\r\n    run() {\r\n        this.start();\r\n\r\n        const stepper = this.step();\r\n\r\n        let step;\r\n        do {\r\n            step = stepper.next();\r\n            this.verbose(`step: ${step.value}`);\r\n        } while(!step.done);\r\n\r\n        this.end();\r\n\r\n        let stepTimer = t.timers.step;\r\n\r\n        this.info(`Took ${stepTimer.count()} steps`);\r\n        this.info(`Took ${stepTimer.parse(stepTimer.duration())}`);\r\n        this.info(`Solution: ${this.ans}`);\r\n\r\n        return this.ans;\r\n    }\r\n\r\n    static deriv(x, y) {\r\n        return -4 * x / y;\r\n    }\r\n}\r\n"},2354:function(r,n){r.exports="'use strict';\r\nimport Euler from './Euler';\r\nimport t from 'exectimer';\r\nconst Tick = t.Tick;\r\n\r\nexport default class Euler2 extends Euler {\r\n    num1 = 1;\r\n    num2 = 1;\r\n    num3;\r\n    sum = 0;\r\n    max = 4000000;\r\n\r\n    constructor() {\r\n        super();\r\n    }\r\n\r\n    *step() {\r\n        while(this.num2 < this.max) {\r\n            let tick = new Tick('step');\r\n            tick.start();\r\n            if(this.num2 % 2 == 0) {\r\n                this.sum += this.num2;\r\n            }\r\n            this.num3 = this.num2;\r\n            this.num2 = this.num1 + this.num2;\r\n            this.num1 = this.num3;\r\n            tick.stop();\r\n            yield this.num2;\r\n        }\r\n        return this.sum;\r\n    }\r\n\r\n    run() {\r\n        this.start();\r\n\r\n        const stepper = this.step();\r\n\r\n        let step;\r\n        do {\r\n            step = stepper.next();\r\n            this.verbose(`step: ${step.value}`);\r\n        } while(!step.done);\r\n\r\n        this.end();\r\n\r\n        let stepTimer = t.timers.step;\r\n\r\n        this.info(`Took ${stepTimer.count()} steps`);\r\n        this.info(`Took ${stepTimer.parse(stepTimer.duration())}`);\r\n        console.log(`The Sum of all even Fibonacci numbers below ${this.max} is ${this.sum}`);\r\n\r\n        return this.sum;\r\n    }\r\n}\r\n"},2355:function(r,n){r.exports="'use strict';\r\nimport Euler from './Euler';\r\nimport t from 'exectimer';\r\nconst Tick = t.Tick;\r\n\r\nexport default class Euler3 extends Euler {\r\n    fac = 2;\r\n    num = 600851475143;\r\n    solution;\r\n\r\n    constructor() {\r\n        super();\r\n    }\r\n\r\n    *step() {\r\n        let sqrtNum = Math.sqrt(this.num).toFixed(0);\r\n        while(this.fac <= sqrtNum) {\r\n            let tick = new Tick('step');\r\n            tick.start();\r\n\r\n            if(this.num % this.fac == 0) {\r\n                let otherFac = this.num / this.fac;\r\n                if(Euler3.isPrime(otherFac)) {\r\n                    this.solution = otherFac;\r\n                    tick.stop();\r\n                    return otherFac;\r\n                } else {\r\n                    if(Euler3.isPrime(this.fac)) {\r\n                        this.solution = this.fac;\r\n                    }\r\n                }\r\n            }\r\n\r\n            this.fac++;\r\n            tick.stop();\r\n            yield this.fac;\r\n        }\r\n\r\n        return this.solution;\r\n    }\r\n\r\n    static isPrime(n) {\r\n        let i = 2;\r\n        let sqrtN = Math.sqrt(n).toFixed(0);\r\n\r\n        while(i <= sqrtN) {\r\n            if(n % i === 0) {\r\n                return false;\r\n            } else {\r\n                i++;\r\n            }\r\n        }\r\n\r\n        return true;\r\n    }\r\n}\r\n"},2356:function(r,n){r.exports="import Euler from './Euler';\r\nimport { Tick } from 'exectimer';\r\nimport { isPalindrome } from './util';\r\n\r\nexport default class Euler4 extends Euler {\r\n    i;\r\n\r\n    *step() {\r\n        for(let x = 999; x >= 900; x--) {\r\n            for(let y = 999; y >= 900; y--) {\r\n                let tick = new Tick('step');\r\n                tick.start();\r\n\r\n                this.i = x * y;\r\n\r\n                let is = isPalindrome(String(this.i));\r\n\r\n                tick.stop();\r\n\r\n                if(is) {\r\n                    this.solution = this.i;\r\n                    return this.i;\r\n                } else {\r\n                    yield this.i;\r\n                }\r\n            }\r\n        }\r\n\r\n        return this.solution;\r\n    }\r\n}\r\n"},2357:function(r,n){r.exports="'use strict';\r\nimport _ from 'lodash-es';\r\nimport Euler from './Euler';\r\nimport t from 'exectimer';\r\nconst Tick = t.Tick;\r\n\r\nconst solutionMap5x5 = [\r\n[ 1 , 0 , 1 , 1 , 1 ],\r\n[ 1 , 1 , 1 , 0 , 1 ],\r\n[ 0 , 0 , 0 , 1 , 1 ],\r\n[ 0 , 0 , 0 , 1 , 0 ],\r\n[ 0 , 0 , 0 , 1 , 1 ]];\r\nconst solution5x5 = 2297;\r\n// const solution = require('../data/solutions.json')['83'];\r\n// console.log(solution5x5);\r\n// console.log(solution);  // 425185\r\n/**\r\n * G = cost from A to square\r\n * H = extimated cost from square to B\r\n * F = score, G + H\r\n */\r\n\r\nlet up = ([row, col]) => [row - 1, col];\r\nlet down = ([row, col]) => [row + 1, col];\r\nlet left = ([row, col]) => [row, col - 1];\r\nlet right = ([row, col]) => [row, col + 1];\r\n\r\nexport default class Euler83 extends Euler {\r\n    position = [0, 0];\r\n    min = 18;\r\n    rows = 5;\r\n    cols = 5;\r\n    endPosition = [4, 4];\r\n    moves = 0;\r\n    open = [];\r\n    closed = [];\r\n    weightMap;\r\n    // map;\r\n    solution = 0;\r\n\r\n    static parseMatrix(matrix) {\r\n        return matrix\r\n            .toString()\r\n            .trim()\r\n            .split('\\n')\r\n            .map(line => {\r\n                return line\r\n                    .split(',')\r\n                    .map(c => parseInt(c));\r\n            });\r\n    }\r\n\r\n    constructor(matrix) {\r\n        super();\r\n\r\n        this.weightMap = matrix;\r\n        this.rows = matrix.length;\r\n        this.cols = matrix[0].length;\r\n\r\n        this.heuristicMap = [];\r\n        for(let i = 0; i < this.rows; i++) {\r\n            let row = [];\r\n            for(let j = 0; j < this.cols; j++) {\r\n                row.push(this.min * ((5 -  i) + (5 - j) - 1));\r\n            }\r\n            this.heuristicMap.push(row);\r\n        }\r\n\r\n        this.solution += this.weightMap[0][0];    // add starting position weight\r\n\r\n        // add first points to open\r\n        let p1 = {\r\n            position: [0, 1],\r\n            g: this.weightMap[0][1],\r\n            h: this.heuristicMap[0][1]\r\n        };\r\n        p1.f = p1.g + p1.h;\r\n\r\n        let p2 = {\r\n            position: [1, 0],\r\n            g: this.weightMap[1][0],\r\n            h: this.heuristicMap[1][0],\r\n        };\r\n        p2.f = p2.g + p2.h;\r\n\r\n        if(p1.f <= p2.f) {\r\n            this.open.push(p1, p2);\r\n        } else {\r\n            this.open.push(p2, p1);\r\n        }\r\n\r\n        // add starting point to closed list\r\n        let start = {\r\n            position: [0, 0],\r\n            g: this.weightMap[0][0],\r\n            h: this.heuristicMap[0][0],\r\n        };\r\n        start.f = start.g + start.h;\r\n        this.closed.push(start);\r\n    }\r\n\r\n    *step() {\r\n        while(this.position !== this.endPosition) {\r\n            let tick = new Tick('step');\r\n            tick.start();\r\n\r\n            let next = this.open.splice(0, 1)[0];\r\n            this.info(`Next: ${next.position}`);\r\n            this.solution += next.g;\r\n            this.closed.push(next);\r\n\r\n            if(next.position[0] === this.endPosition[0] && next.position[1] === this.endPosition[1]) {\r\n                // done\r\n                tick.stop();\r\n\r\n                this.info('Reached end!');\r\n\r\n                return this.solution;\r\n            }\r\n\r\n            // add new points, if possible (in sorted position)\r\n            this.addToOpen(up(next.position));\r\n            this.addToOpen(down(next.position));\r\n            this.addToOpen(left(next.position));\r\n            this.addToOpen(right(next.position));\r\n\r\n            yield next;\r\n            tick.stop();\r\n        }\r\n    }\r\n\r\n    addToOpen([row, col]) {\r\n        if(!this.canGo([row, col])) return false;\r\n        if(this.open.map(point => point.position).indexOf([row, col]) > -1) return false;\r\n\r\n        let point = {\r\n            position: [row, col],\r\n            g: this.weightMap[row][col],\r\n            h: this.heuristicMap[row][col]\r\n        };\r\n        point.f = point.g + point.h;\r\n\r\n        let index = _.sortedIndexBy(this.open, point, 'f');\r\n        this.open.splice(index, 0, point);\r\n    }\r\n\r\n    canGo([row, col]) {\r\n        // out of bounds check\r\n        if(row < 0 || col < 0 || row >= this.rows || col >= this.cols) {\r\n            return false;\r\n        }\r\n\r\n        // check if in closed list\r\n        let closedLength = this.closed.length;\r\n        for(let i = 0; i < closedLength; i++) {\r\n            if(this.closed[i].position[0] === row && this.closed[i].position[1] === col) {\r\n                return false;\r\n            }\r\n        }\r\n\r\n        return true;\r\n    }\r\n}\r\n"},2358:function(r,n){r.exports="'use strict';\r\nimport _ from 'lodash-es';\r\nimport Euler from './Euler';\r\nimport t from 'exectimer';\r\nconst Tick = t.Tick;\r\nimport math from 'mathjs';\r\n\r\n/**\r\n * @returns {Boolean}\r\n */\r\nfunction repeats(a, b, c, d) {\r\n    return _.uniq([a, b, c, d]).length !== 4;\r\n}\r\n\r\nfunction permute(array, returnMap = false) {\r\n    var p = -1;\r\n    var j;\r\n    var k;\r\n    var f;\r\n    var r;\r\n    var l = array.length;\r\n    // number of permutations\r\n    var q = math.factorial(l);\r\n    var i = l + 1;\r\n\r\n    var x = [new Array(l), new Array(l), new Array(l), new Array(l)];\r\n\r\n    for(j = q, k = l + 1, i = -1; ++i < l; x[2][i] = i, x[1][i] = x[0][i] = j /= --k);\r\n\r\n    for(r = new Array(q); ++p < q;) {\r\n        for(r[p] = new Array(l), i = -1; ++i < l; !--x[1][i] && (x[1][i] = x[0][i],\r\n            x[2][i] = (x[2][i] + 1) % l), r[p][i] = returnMap ? x[3][i] : array[x[3][i]]) {\r\n            for(x[3][i] = x[2][i], f = 0; !f; f = !f) {\r\n                for(j = i; j; x[3][--j] == x[2][i] && (x[3][i] = x[2][i] = (x[2][i] + 1) % l, f = 1));\r\n            }\r\n        }\r\n    }\r\n\r\n    return r;\r\n}\r\n\r\nconst operators = ['+', '-', '*', '/'];\r\n\r\nexport default class Euler83 extends Euler {\r\n    methods = [{\r\n        key: 'bruteForce1',\r\n        name: 'Brute Force 1',\r\n        description: 'My first brute force attempt'\r\n    }];\r\n    solution = {\r\n        numConsecutive: 28,\r\n        a: 1,\r\n        b: 2,\r\n        c: 3,\r\n        d: 4\r\n    };\r\n\r\n    constructor() {\r\n        super();\r\n\r\n        this.method = this[this.methods[0].key];\r\n    }\r\n\r\n    // brute force, get's the job done, but takes about 300s\r\n    *bruteForce1() {\r\n        for(let a = 1; a <= 6; a++) {\r\n            for(let b = 2; b <= 7; b++) {\r\n                for(let c = 3; c <= 8; c++) {\r\n                    for(let d = 4; d <= 9; d++) {\r\n                        // if(any digits repeat) continue\r\n                        if(repeats(a, b, c, d)) continue;\r\n                        // each sequence\r\n                        let tick = new Tick('step');\r\n                        tick.start();\r\n\r\n                        let numPermutations = permute([a, b, c, d]);\r\n                        let targets = [];\r\n\r\n                        _.forEach(numPermutations, np => {\r\n                            _.forEach(operators, op1 => {\r\n                                _.forEach(operators, op2 => {\r\n                                    _.forEach(operators, op3 => {\r\n                                        targets.push(math.eval(`${np[0]} ${op1} ${np[1]} ${op2} ${np[2]} ${op3} ${np[3]}`));\r\n                                        targets.push(math.eval(`(${np[0]} ${op1} ${np[1]}) ${op2} (${np[2]} ${op3} ${np[3]})`));\r\n                                        targets.push(math.eval(`${np[0]} ${op1} (${np[1]} ${op2} ${np[2]} ${op3} ${np[3]})`));\r\n                                        targets.push(math.eval(`${np[0]} ${op1} (${np[1]} ${op2} ${np[2]}) ${op3} ${np[3]}`));\r\n                                        targets.push(math.eval(`${np[0]} ${op1} ${np[1]} ${op2} (${np[2]} ${op3} ${np[3]})`));\r\n                                    });\r\n                                });\r\n                            });\r\n                        });\r\n\r\n                        // filter & sort\r\n                        targets = _.chain(targets)\r\n                            .filter(target => math.isInteger(target) && target > 0)\r\n                            .uniq()\r\n                            .thru(targets => targets.sort((a, b) => a - b))\r\n                            .value();\r\n\r\n                        let numConsecutive = 1;\r\n\r\n                        for(let i = 0; i < targets.length; i++) {\r\n                            if(targets[i] + 1 === targets[i + 1]) {\r\n                                numConsecutive++;\r\n                            } else {\r\n                                break;\r\n                            }\r\n                        }\r\n\r\n                        if(numConsecutive > this.solution.numConsecutive) {\r\n                            this.solution = {numConsecutive, a, b, c, d}\r\n                        }\r\n\r\n                        this.info(`[${a}, ${b}, ${c}, ${d}]: ${numConsecutive}`);\r\n\r\n                        yield numConsecutive;\r\n\r\n                        tick.stop();\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        this.info(`Solution: [${a}, ${b}, ${c}, ${d}]: ${numConsecutive}`);\r\n\r\n        return this.solution;\r\n    }\r\n\r\n    *step() {\r\n        yield* this.method();\r\n    }\r\n}\r\n"},2359:function(r,n){r.exports="'use strict';\r\n// import fs from 'fs';\r\n// import path from 'path';\r\nimport _ from 'lodash-es';\r\nimport Euler from './Euler';\r\nimport t from 'exectimer';\r\nconst Tick = t.Tick;\r\nimport math from 'mathjs';\r\n// import {permute} from './util/array';\r\n\r\n// CARE = 1296 = 36^2\r\n// RACE = 9216 = 96^2\r\n\r\nfunction groupPairs(items) {\r\n    let pairs = [];\r\n\r\n    _.forEach(items, (item1, i) => {\r\n        _.forEach(items, (item2, j) => {\r\n            if(j <= i) return;\r\n\r\n            pairs.push([item1, item2]);\r\n        });\r\n    });\r\n\r\n    return pairs;\r\n}\r\n\r\nfunction getSquarePairs(upToLength) {\r\n    let i = 1;\r\n    let limit = math.pow(10, upToLength);\r\n    let pairs = {};\r\n\r\n    while(true) {\r\n        let square = i * i;\r\n        if(square > limit) break;\r\n\r\n        let hash = `${square}`.split('').sort().join('');\r\n\r\n        if(!pairs[hash]) pairs[hash] = [];\r\n        pairs[hash].push(square);\r\n\r\n        i++;\r\n    }\r\n\r\n    let take2 = array => _.partialRight(_.take, 2)(array);\r\n    return _.chain(pairs)\r\n        .filter(group => group.length > 1)\r\n        .flatMap(group => {\r\n            if(group.length === 2) return [group];\r\n\r\n            return groupPairs(group);\r\n        })\r\n        .value();\r\n}\r\n\r\n/**\r\n * @param {String} word\r\n * @param {String} number\r\n */\r\nfunction getLetterMapping(word, number) {\r\n    word = word.split('');\r\n    number = number.split('');\r\n    let mapping = {};\r\n\r\n    for(let i = 0; i < word.length; i++) {\r\n        // make sure that letters are only assigned a single value\r\n        let previousMapping = mapping[word[i]];\r\n        if(previousMapping && previousMapping !== number[i]) {\r\n            return false;\r\n        }\r\n\r\n        mapping[word[i]] = number[i];\r\n    }\r\n\r\n    // make sure two different letters aren't assigned the same value\r\n    let accumulator = {};\r\n    for(let key of Object.keys(mapping)) {\r\n        if(accumulator[mapping[key]]) return false;\r\n\r\n        accumulator[mapping[key]] = true;\r\n    }\r\n\r\n    return mapping;\r\n}\r\n\r\nfunction mapWord(word, mapping) {\r\n    let number = [];\r\n    _.forEach(word.split(''), letter => {\r\n        number.push(mapping[letter]);\r\n    });\r\n    return parseInt(number.join(''));\r\n}\r\n\r\nexport default class Euler98 extends Euler {\r\n    solution = 0;\r\n\r\n    constructor() {\r\n        super();\r\n\r\n        this.words = Euler98.parseWords(fs.readFileSync(path.join(__dirname, '..', 'data/words98.txt'), 'utf8'));\r\n    }\r\n\r\n    static parseWords(str) {\r\n        return str.split(',').map(word => word.replace(/\"/g, ''));\r\n    }\r\n\r\n    *step() {\r\n        const self = this;\r\n        // get groups of anagramic pairs\r\n        let wordPairs = _.chain(this.words)\r\n            // group by words converted to strings of their sorted letters ('SHOE' => 'EHOS')\r\n            .groupBy(word => word.split('').sort().join(''))\r\n            // filter out any groups of only one word (no pairs)\r\n            .filter(group => group.length > 1)\r\n            // split groups of 3+ into all possible pairs\r\n            .flatMap(group => {\r\n                if(group.length === 2) return [group];\r\n\r\n                return groupPairs(group);\r\n            })\r\n            .value();\r\n\r\n        this.verbose(wordPairs);\r\n\r\n        yield wordPairs;\r\n\r\n        let maxLength = 0;\r\n\r\n        // get the lengths of words we have\r\n        _.forEach(wordPairs, group => {\r\n            let length = group[0].length;\r\n            if(length > maxLength) maxLength = length;\r\n        });\r\n\r\n        let squarePairs = _.groupBy(getSquarePairs(maxLength), pair => `${pair[0]}`.length);\r\n\r\n        this.verbose(squarePairs);\r\n\r\n        yield squarePairs;\r\n\r\n        _.forEach(wordPairs, wordPair => {\r\n            let length = wordPair[0].length;\r\n            _.forEach(squarePairs[length], squarePair => {\r\n                let tick = new Tick('step');\r\n                tick.start();\r\n\r\n                let mapping0 = getLetterMapping(wordPair[0], `${squarePair[0]}`);\r\n                if(mapping0 === false) return;\r\n\r\n                let mappedNum = mapWord(wordPair[1], mapping0);\r\n\r\n                if(squarePair[1] === mappedNum) {\r\n                    self.info(`Pair found: ${wordPair[0]} -> ${squarePair[0]}, ${wordPair[1]} -> ${squarePair[1]}`);\r\n                    if(squarePair[0] > this.solution) this.solution = squarePair[0];\r\n                    if(squarePair[1] > this.solution) this.solution = squarePair[1];\r\n                }\r\n\r\n                tick.stop();\r\n\r\n                // yield {wordPair, squarePair};\r\n            });\r\n        });\r\n\r\n        return this.solution;\r\n    }\r\n\r\n    run() {\r\n        this.start();\r\n\r\n        const stepper = this.step();\r\n\r\n        let step;\r\n        do {\r\n            let tick = new Tick('step');\r\n            tick.start();\r\n            step = stepper.next();\r\n            tick.stop();\r\n            this.verbose(`step: ${step.value}`);\r\n        } while(!step.done);\r\n\r\n        this.end();\r\n\r\n        let stepTimer = t.timers.step;\r\n\r\n        this.info(`Took ${stepTimer.count()} steps`);\r\n        this.info(`Took ${stepTimer.parse(stepTimer.duration())}`);\r\n        this.info(`Soluion: ${this.solution}`);\r\n\r\n        return this.sum;\r\n    }\r\n}\r\n"},2360:function(r,n){r.exports="// import microtime from 'microtime';\r\nconst marky = require('marky/lib/marky.browser.es');\r\nconst moment = require('moment');\r\nconst t = require('exectimer');\r\n// const Tick = t.Tick;\r\n\r\n// { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }\r\nglobal.logLevel = global.logLevel || 'info';\r\n\r\nvar performance = global.performance || {};\r\nvar performanceNow =\r\n    performance.now        ||\r\n    performance.mozNow     ||\r\n    performance.msNow      ||\r\n    performance.oNow       ||\r\n    performance.webkitNow  ||\r\n    function(){ return (new Date()).getTime() };\r\n\r\nwindow.process = global.process = {\r\n    hrtime(previousTimestamp) {\r\n        var clocktime = performanceNow.call(performance)*1e-3;\r\n        var seconds = Math.floor(clocktime);\r\n        var nanoseconds = Math.floor((clocktime%1)*1e9);\r\n\r\n        if (previousTimestamp) {\r\n            seconds = seconds - previousTimestamp[0];\r\n            nanoseconds = nanoseconds - previousTimestamp[1];\r\n            if (nanoseconds<0) {\r\n                seconds--;\r\n                nanoseconds += 1e9;\r\n            }\r\n        }\r\n\r\n        return [seconds,nanoseconds]\r\n    }\r\n};\r\n// TODO: write own polymorphic exectimer\r\n\r\nexport default class Euler {\r\n    solution;\r\n\r\n    constructor() {\r\n        this.duration = null;\r\n        this.key = `${Math.random()}`;\r\n\r\n        // const name = this.constructor.name;\r\n\r\n        // let isNode;\r\n        // try {\r\n        //     isNode = !!process.release;\r\n        // } catch(e) {\r\n        //     isNode = false;\r\n        // }\r\n        //\r\n        // console.log('isNode', isNode);\r\n        //\r\n        // if(isNode) {\r\n        //     try {\r\n        //         const chalk = require('chalk');\r\n        //         const winston = require('winston');\r\n        //         const Logger = winston.Logger;\r\n        //         const Console = winston.transports.Console;\r\n        //\r\n        //         this.logger = new Logger({\r\n        //             transports: [\r\n        //                 new Console({\r\n        //                     level: global.logLevel,\r\n        //                     /**\r\n        //                      * @returns {String}\r\n        //                      */\r\n        //                     timestamp() {\r\n        //                         return moment(Date.now()).format('MM.DD.YY H:mm:ss');\r\n        //                     },\r\n        //                     /**\r\n        //                      * @param {Object} opts\r\n        //                      * @param {Function} opts.timestamp\r\n        //                      * @param {String} opts.level\r\n        //                      * @param {String} [opts.message]\r\n        //                      * @param {*} [opts.meta]\r\n        //                      */\r\n        //                     formatter(opts) {\r\n        //                         // Return string will be passed to logger.\r\n        //                         const time = chalk.blue(opts.timestamp());\r\n        //                         const level = opts.level.toUpperCase();\r\n        //                         const coloredLevel =\r\n        //                             level === 'WARN' ? chalk.yellow('WARN') :\r\n        //                                 level === 'ERROR' ? chalk.red('ERROR') :\r\n        //                                     level;\r\n        //                         const message = opts.message !== undefined ? opts.message : '';\r\n        //                         const meta = opts.meta && Object.keys(opts.meta).length ? `\\n\\t${JSON.stringify(opts.meta)}` : '';\r\n        //                         return `[${chalk.green(name)}][${time}][${coloredLevel}] ${message}${meta}`;\r\n        //                     }\r\n        //                 })\r\n        //             ]\r\n        //         });\r\n        //     } catch(e) {\r\n        //         this.logger = console;\r\n        //         this.logger.verbose = console.log;\r\n        //     }\r\n        // } else {\r\n            this.logger = console;\r\n            this.logger.verbose = console.log;\r\n        // }\r\n    }\r\n\r\n    start() {\r\n        marky.mark(this.key);\r\n        // this.startTime = microtime.now();\r\n    }\r\n\r\n    *step() {\r\n        throw new Error('You need to override this, doofus');\r\n    }\r\n\r\n    end() {\r\n        // this.endTime = microtime.now();\r\n        // this.duration = this.endTime - this.startTime;\r\n        this.duration = marky.stop(this.key).duration;\r\n    }\r\n\r\n    run() {\r\n        const stepper = this.step();\r\n\r\n        this.start();\r\n\r\n        let step;\r\n        do {\r\n            step = stepper.next();\r\n            this.verbose(`step: ${step.value}`);\r\n        } while(!step.done);\r\n\r\n        this.end();\r\n\r\n        let stepTimer = t.timers.step;\r\n\r\n        this.info(`Solution: ${step.value}`);\r\n        this.info(`Took ${stepTimer.count()} steps`);\r\n        this.info(`Took ${parseInt(this.duration)}ms`);\r\n\r\n        return {\r\n            solution: step.value,\r\n            duration: this.duration,\r\n        };\r\n    }\r\n\r\n    error(...args) {\r\n        this.logger.error(...args);\r\n    }\r\n    warn(...args) {\r\n        this.logger.warn(...args);\r\n    }\r\n    info(...args) {\r\n        this.logger.info(...args);\r\n    }\r\n    verbose(...args) {\r\n        this.logger.verbose(...args);\r\n    }\r\n    debug(...args) {\r\n        this.logger.debug(...args);\r\n    }\r\n    silly(...args) {\r\n        this.logger.silly(...args);\r\n    }\r\n    log(...args) {\r\n        this.logger.log(...args);\r\n    }\r\n}\r\n"},2361:function(r,n){r.exports="export { default as quadratic } from './quadratic';\r\nexport { default as isPalindrome } from './ispalindrome';\r\nexport { default as sieveOfAtkin } from './sieve_of_atkin';\r\n"},2362:function(r,n){r.exports="/**\r\n * @author Awk34\r\n */\r\nexport default function isPalindrome(str) {\r\n    if(typeof str !== 'string') str = String(str);\r\n\r\n    const len = Math.floor(str.length / 2);\r\n\r\n    for(let i = 0; i < len; i++) {\r\n        if(str[i] !== str[str.length - i - 1])\r\n            return false;\r\n    }\r\n\r\n    return true;\r\n}\r\n"},2363:function(r,n){r.exports="/**\r\n *\r\n * @param m2\r\n * @param n\r\n * @param x2\r\n * @returns {number}\r\n */\r\nexport default function quadratic(m2, n, x2) {\r\n    let a = 4 + m2 * m2;\r\n    let b = 2 * m2 * n;\r\n    let c = n * n - 100;\r\n\r\n    let ans1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);\r\n    let ans2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);\r\n    let dx1 = x2 - ans1;\r\n    let dx2 = x2 - ans2;\r\n    dx1 = dx1 > 0 ? dx1 : -dx1;\r\n    dx2 = dx2 > 0 ? dx2 : -dx2;\r\n\r\n    if(dx1 > dx2) return ans1;\r\n    else return ans2;\r\n}\r\n"},2364:function(r,n){r.exports="/**\r\n * @param {Number} limit=1000 - end of the sieve\r\n */\r\nexport default function SieveOfAtkin(limit = 1000) {\r\n    let sieve = new Array(limit + 1);\r\n    let limitSqrt = Math.sqrt(limit).toFixed(0);\r\n\r\n    // there may be more efficient data structure\r\n    // arrangements than this (there are!) but\r\n    // this is the algorithm in Wikipedia\r\n    // initialize results array\r\n    sieve.fill(false);\r\n    // the sieve works only forintegers > 3, so\r\n    // set these trivially to their proper values\r\n    sieve[0] = false;\r\n    sieve[1] = false;\r\n    sieve[2] = true;\r\n    sieve[3] = true;\r\n\r\n    // loop through all possible integer values forx and y\r\n    // up to the square root of the max prime forthe sieve\r\n    // we don't need any larger values forx or y since the\r\n    // max value forx or y will be the square root of n\r\n    // in the quadratics\r\n    // the theorem showed that the quadratics will produce all\r\n    // primes that also satisfy their wheel factorizations, so\r\n    // we can produce the value of n from the quadratic first\r\n    // and then filter n through the wheel quadratic\r\n    // there may be more efficient ways to do this, but this\r\n    // is the design in the Wikipedia article\r\n    // loop through all integers forx and y forcalculating\r\n    // the quadratics\r\n    for(let x = 1; x <= limitSqrt; x++) {\r\n        for(let y = 1; y <= limitSqrt; y++) {\r\n            // first quadratic using m = 12 and r in R1 = {r : 1, 5}\r\n            let n = (4 * x * x) + (y * y);\r\n            if(n <= limit && (n % 12 == 1 || n % 12 == 5)) {\r\n                sieve[n] = !sieve[n];\r\n            }\r\n            // second quadratic using m = 12 and r in R2 = {r : 7}\r\n            n = (3 * x * x) + (y * y);\r\n            if(n <= limit && (n % 12 == 7)) {\r\n                sieve[n] = !sieve[n];\r\n            }\r\n            // third quadratic using m = 12 and r in R3 = {r : 11}\r\n            n = (3 * x * x) - (y * y);\r\n            if(x > y && n <= limit && (n % 12 == 11)) {\r\n                sieve[n] = !sieve[n];\r\n            }\r\n            // note that R1 union R2 union R3 is the set R\r\n            // R = {r : 1, 5, 7, 11}\r\n            // which is all values 0 < r < 12 where r is\r\n            // a relative prime of 12\r\n            // Thus all primes become candidates\r\n        }\r\n    }\r\n    // remove all perfect squares since the quadratic\r\n    // wheel factorization filter removes only some of them\r\n    for(let n = 5; n <= limitSqrt; n++) {\r\n        if(sieve[n]) {\r\n            let x = n * n;\r\n            for(let i = x; i <= limit; i += x) {\r\n                sieve[i] = false;\r\n            }\r\n        }\r\n    }\r\n\r\n    return sieve;\r\n}\r\n";
}});