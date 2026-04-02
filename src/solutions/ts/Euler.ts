import * as marky from 'marky';
import {Tick, timers, timer} from './util/exectimer';
import {BaseChart} from '../../charts/base-chart';

export class Euler {
    solution: Number = NaN;
    private duration: DOMHighResTimeStamp = -1;
    private readonly key: string;
    private renderConfig?: RenderConfig;
    private enableVisualization = false;
    protected chart?: BaseChart<any>;
    chartContainer?: HTMLElement;
    protected finished = false;

    constructor(chartContainer?: HTMLElement) {
        this.key = `${Math.random()}`;
        this.chartContainer = chartContainer;

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
        //         console = new Logger({
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
        //         console = console;
        //         console.verbose = console.log;
        //     }
        // } else {
        // }
    }

    initChart() {
        throw new Error('You need to override this, doofus');
    }

    hasVisualization() {
        return this.enableVisualization;
    }
    setHasVisualization(enable: boolean) {
        this.enableVisualization = enable;
    }

    getVisualization(): BaseChart<any> {
        return this.chart!;
    }

    start() {
        marky.mark(this.key);
        // this.startTime = microtime.now();
    }

    async *step(): AsyncGenerator<number, number, unknown> {
        throw new Error('You need to override this, doofus');
    }

    end() {
        // this.endTime = microtime.now();
        // this.duration = this.endTime - this.startTime;
        this.duration = marky.stop(this.key).duration;
        this.finished = true;
    }

    async run(): Promise<FinalSolution> {
        const stepper = this.step();

        this.start();

        setTimeout(() => {
            if (!this.finished) {
                throw new Error('Solution took too long to run. Aborting.');
            }
        }, 60 * 1000);

        let step;
        do {
            step = await stepper.next();
            this.info(`step: ${step.value}`);
        } while(!step.done);

        this.end();

        let stepTimer = timer("step");

        this.info(`Solution: ${step.value}`);
        this.info(`Took ${stepTimer.count()} steps`);
        this.info(`Took ${this.duration}ms`);

        return {
            solution: step.value,
            duration: this.duration,
            steps: stepTimer.count(),
        };
    }

    getRenderConfig(): RenderConfig|null {
        return null;
    }
    setRenderConfig(renderConfig: RenderConfig) {
        this.renderConfig = renderConfig;
    }

    info(...args: string[]) {
        console.info(...args);
    }
    log(...args: any[]) {
        console.log(...args);
    }
}

export interface FinalSolution {
    solution: number;
    duration: number;
    steps: number;
}

export interface RenderConfig {
    stepDelayMs: number;
}
