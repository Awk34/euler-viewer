import {Euler} from './Euler';
import {Tick, timer} from './util/exectimer';

export class Solution extends Euler {
    num1 = 1;
    num2 = 1;
    num3 = -1;
    sum = 0;
    max = 4000000;

    override async *step() {
        while(this.num2 < this.max) {
            let tick = new Tick('step');
            tick.start();
            if(this.num2 % 2 == 0) {
                this.sum += this.num2;
            }
            this.num3 = this.num2;
            this.num2 = this.num1 + this.num2;
            this.num1 = this.num3;
            tick.stop();
            yield this.num2;
        }
        return this.sum;
    }

    override async run() {
        this.start();

        const stepper = this.step();

        let step;
        do {
            step = await stepper.next();
            console.info(`step: ${step.value}`);
        } while(!step.done);

        this.end();

        let stepTimer = timer('step');
        const duration = stepTimer.duration();

        this.info(`Took ${stepTimer.count()} steps`);
        this.info(`Took ${stepTimer.parse(duration)}`);
        console.log(`The Sum of all even Fibonacci numbers below ${this.max} is ${this.sum}`);

        return {
            solution: this.sum,
            duration: stepTimer.duration(),
            steps: stepTimer.count(),
        };
    }
}
