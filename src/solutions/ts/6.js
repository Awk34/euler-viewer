import Euler from './Euler';
import { Tick } from './util/exectimer';

export default class Euler6 extends Euler {
    *step() {
        let n1 = 1;
        let n2 = 1;
        let sum1 = 0;
        let sum2 = 0;
        let sum3;

        while(n1 <= 100) {
            let tick = new Tick('step');
            tick.start();

            sum1 += n1 ** 2;
            n1++;

            tick.stop();

            yield sum1;
        }
        while(n2 <= 100) {
            let tick = new Tick('step');
            tick.start();

            sum2 += n2;
            n2++;

            tick.stop();

            yield sum2;
        }
        sum2 = (sum2 * sum2);
        sum3 = sum2 - sum1;

        this.solution = sum3;

        return this.solution;
    }
}
