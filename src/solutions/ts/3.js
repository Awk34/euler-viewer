'use strict';
import Euler from './Euler';
import t from './util/exectimer';
const Tick = t.Tick;

export function isPrime(n) {
    let i = 2;
    let sqrtN = Math.sqrt(n).toFixed(0);

    while(i <= sqrtN) {
        if(n % i === 0) {
            return false;
        } else {
            i++;
        }
    }

    return true;
}

export default class Euler3 extends Euler {
    num = 600851475143;
    factors = [];

    constructor() {
        super();
    }

    *step() {
        let n = this.num;
        let i = 2;

        while(!isPrime(n) && n > 2) {
            let tick = new Tick('step');
            tick.start();

            if(n % i === 0) {
                yield i;
                this.factors.push(i);
                n = n / i;
                i = 2;
            }
            i++;

            tick.stop();
        }

        this.factors.push(n);

        if(this.factors.reduce((acc, x) => acc * x, 1) !== this.num) throw new Error('Something went terribly wrong!');

        this.solution = n;
        return this.solution;
    }
}
