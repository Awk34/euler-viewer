import Euler from './Euler';
import { Tick } from './util/exectimer';

export default class Euler5 extends Euler {
    *step() {
        let tick = new Tick('step');
        tick.start();

        this.solution = 2 * 3 * 4 * 5 * 6 * 7 * 11 * 13 * 17 * 19;

        tick.stop();

        return this.solution;
    }
}
