import {Euler} from './Euler';
import quadratic from './util/quadratic';
import {timer, Tick} from './util/exectimer';

class Point {
    private x: number;
    private y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export class Solution extends Euler {
    p1: Point;
    p2: Point;
    x1;
    y1;
    x2;
    y2;
    ans;

    constructor() {
        super();
        this.p1 = new Point(0.0, 10.1);
        this.p2 = new Point(1.4, -9.6);
        this.x1 = 0.0;
        this.y1 = 10.1;
        this.x2 = 1.4;
        this.y2 = -9.6;
        this.ans = 1;
        this.setHasVisualization(true);
    }

    // @ts-ignore
    override async *step() {
        while(true) {
            let tick = new Tick('step');
            tick.start();
            let m0 = (this.y2 - this.y1) / (this.x2 - this.x1);
            let m1 = Solution.deriv(this.x2, this.y2);
            let tempX = this.x2;
            let tempY = this.y2;
            let X = (m0 - m1) / (1 + m0 * m1);
            let m2 = (m1 - X) / (1 + X * m1);

            let b = this.y2 - m2 * this.x2;
            this.x2 = quadratic(m2, b, this.x2);
            this.y2 = m2 * this.x2 + b;
            this.info(`Hit ${this.x2}, ${this.y2}`);
            this.x1 = tempX;
            this.y1 = tempY;

            // new point is inside hole
            if(this.y2 > 0 && this.x2 > -.01 && this.x2 < .01) {
                tick.stop();
                return {
                    x1: this.x1,
                    y1: this.y1,
                    x2: this.x2,
                    y2: this.y2,
                    ans: this.ans
                };
            } else {
                this.ans++;
                tick.stop();
                yield {
                    x1: this.x1,
                    y1: this.y1,
                    x2: this.x2,
                    y2: this.y2,
                    ans: this.ans
                };
            }
        }
    }

    override async run() {
        this.start();

        const stepper = this.step();

        let step;
        do {
            step = await stepper.next();
            this.info(`step: ${step.value}`);
        } while(!step.done);

        this.end();

        let stepTimer = timer('step');
        const duration = stepTimer.duration();

        this.info(`Took ${stepTimer.count()} steps`);
        this.info(`Took ${stepTimer.parse(duration)}`);
        this.info(`Solution: ${this.ans}`);

        return {
            solution: this.ans,
            duration: duration,
            steps: stepTimer.count(),
        };
    }

    static deriv(x: number, y: number) {
        return -4 * x / y;
    }
}
