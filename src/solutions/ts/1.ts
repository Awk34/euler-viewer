import {Euler} from './Euler';
import {Tick} from './util/exectimer';
import * as marky from 'marky';
import {NumberChart} from '../../charts/number-chart';

export class Solution extends Euler {
    n = 3;
    total = 0;

    constructor(chartContainer?: HTMLElement) {
        super(chartContainer);
        if(chartContainer) {
            this.setHasVisualization(true);
        }
        marky.mark('euler-1');
    }

    override supportsVisualization(): boolean {
        return true;
    }

    override initChart() {
        if (!this.hasVisualization()) {
            throw new Error('Cannot init chart without visualization');
        }
        this.chart = new NumberChart(this.chartContainer!, 0);
    }

    override async *step() {
        // Go through all multiples of 3
        while(true) {
            let tick = new Tick('step');
            tick.start();

            this.total += this.n;
            this.n += 3;

            // if(this.n % 3 === 0 || this.n % 5 === 0) this.total += this.n;

            tick.stop();

            if (this.hasVisualization()) {
                this.chart!.update([this.total]);

                await new Promise(resolve => setTimeout(resolve, 5));
            }

            if(this.n >= 1000) break;

            yield this.total;
        }

        // Go through all multiples of 5. Skip multiples of 3 as they have already been counted
        this.n = 5;
        while(true) {
            let tick = new Tick('step');
            tick.start();

            // Skip multiples of 3 as they have already been counted
            if (this.n % 3 === 0) {
                this.n += 5;
                tick.stop();
                continue;
            }

            this.total += this.n;
            this.n += 5;

            tick.stop();

            if (this.hasVisualization()) {
                this.chart!.update([this.total]);

                await new Promise(resolve => setTimeout(resolve, 5));
            }

            if(this.n >= 1000) break;

            yield this.total;
        }
        return this.total;
    }

    override end() {
        super.end();
        marky.stop('euler-1');
    }
}
