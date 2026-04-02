import co from 'co';
import * as marky from 'marky';

/**
 * Contains all timers.
 */
export const timers = new Map<string, Timer>();

export class Timer {
  ticks: Tick[] = [];

  /**
   * Get the median of all ticks.
   * @returns {*}
   */
  median() {
    if(this.ticks.length > 1) {
      const sorted = this.ticks.slice(0).sort((a, b) => {
        return a && b && (a.getDiff() - b.getDiff()) || 0;
      });

      const length = sorted.length;
      const half = Math.floor(length / 2);

      if(length % 2) {
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
  mean() {
    return this.duration() / this.ticks.length;
  }

  /**
   * Get the duration of all ticks.
   * @returns {number}
   */
  duration() {
    let sum = 0;
    let length = this.ticks.length;
    for(let i = 0; i < length; i++) {
      sum += this.ticks[i].getDiff();
    }
    return sum;
  }

  /**
   * Get the shortest tick.
   * @returns {number}
   */
  min() {
    let min = this.ticks[0].getDiff();

    this.ticks.forEach(tick => {
      if(tick.getDiff() < min) {
        min = tick.getDiff();
      }
    });

    return min;
  }

  /**
   * Get the longest tick.
   * @returns {number}
   */
  max() {
    let max = 0;

    this.ticks.forEach(tick => {
      if(tick.getDiff() > max) {
        max = tick.getDiff();
      }
    });

    return max;
  }

  /**
   * Get the number of ticks.
   * @returns {Number}
   */
  count() {
    return Object.keys(this.ticks).length;
  }

  /**
   * Parse the numbers nicely.
   * @param num
   * @returns {string}
   */
  parse(num: number) {
    if(num < 1e3) {
      return num + 'ns';
    } else if(num >= 1e3 && num < 1e6) {
      return num / 1e3 + 'us';
    } else if(num >= 1e6 && num < 1e9) {
      return num / 1e6 + 'ms';
    } else if(num >= 1e9) {
      return num / 1e9 + 's';
    } else {
        throw new Error("Unknown number format");
    }
  }
}

/**
 * Timers factory object.
 */
export const timer = function(name: string): Timer {
  if(!timers.has(name)) {
    timers.set(name, new Timer());
  }

  return timers.get(name) as Timer;
};

export class Tick {
    private name: string;
    private hrstart: [number, number]|undefined;
    private hrend: [number, number]|undefined;

    /**
     * @param name The name of this tick.
     */
    constructor(name: string) {
        this.name = name;
        return this;
    }

    static wrap(name: string|Function, callback: Function|GeneratorFunction) {
        if(typeof name === 'function') {
            callback = name;
            name = functionName(callback);
        }

        if(name === '') {
            name = 'anon';
        }

        const tick = new Tick(name);
        tick.start();

        const done = function() {
            tick.stop();
        };

        if(isGeneratorFunction(callback)) {
            return co(callback).then(done, done);
        } else if(isFunction(callback)) {
            // If done is passed when the callback is declared than we assume is async
            return callback(done);
        } else {
            // Otherwise just call the function and stop the tick
            tick.stop();
            // @ts-ignore
            return callback();
        }
    }

    /**
     * Starts the tick.
     */
    start() {
        marky.mark(this.name);
        // this.hrstart = process.hrtime();
        timer(this.name).ticks.push(this);
    }

    /**
     * Ends the tick.
     */
    stop() {
        marky.stop(this.name);
        // this.hrend = process.hrtime(this.hrstart);
    }

    /**
     * Get the duration of the tick.
     * @returns Long nanoseconds
     */
    getDiff() {
        const entry = marky.getEntries().find(entry => entry.name === this.name);
        if (!entry) {
            throw new Error('Tick has not been stopped');
        }
        return entry.duration;
        // return this.hrend[0] * 1e9 + this.hrend[1];
    }
}

/**
 * Helper function used to retrieve the function name.
 */
function functionName(fun: Function): string {
    let ret = fun.toString();
    ret = ret.substr('function '.length);
    ret = ret.substr(0, ret.indexOf('('));
    return ret.trim();
}

/**
 * Check if `obj` is a generator function.
 */
function isGeneratorFunction(value: any): value is GeneratorFunction {
    return typeof value === 'function' && value.constructor.name === 'GeneratorFunction';
}

/**
 * Helper function used to check is argument is of type function
 * @author https://github.com/lodash/lodash/blob/4.16.4/lodash.js#L11590
 */
function isFunction(value: any): value is Function {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for a typed array and other constructors.
    const tag = isObject(value) ? Object.prototype.toString.call(value) : '';
    return tag == '[object Function]' || tag == '[object GeneratorFunction]' || tag == '[object Proxy]';
}

/**
 * Helper function used to check is argument is of type object
 * @author https://github.com/lodash/lodash/blob/4.16.4/lodash.js#L11590
 */
function isObject(value: any): value is Object {
    const type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
