import { Component, OnDestroy, OnInit, inject, signal, ElementRef, viewChild, PLATFORM_ID, Inject, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, Subscription } from 'rxjs';
import { SolutionLoader } from '../services/solution-loader';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Euler } from 'src/solutions/ts/Euler';
import hljs from 'highlight.js';
import { AsyncPipe } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MarkdownComponent } from 'ngx-markdown';
import { BarChart, BarChartData } from 'src/charts/bar-chart';
import { NumberChart } from '../../charts/number-chart';
import { isPlatformBrowser } from '@angular/common';
import { BaseChart } from '../../charts/base-chart';
import { MatCard } from '@angular/material/card';
import { clear as execTimerClear } from '../../solutions/ts/util/exectimer';

@Component({
    selector: 'app-problem',
    imports: [AsyncPipe, MarkdownComponent, MatIcon, MatIconButton, MatToolbar, MatCard],
    templateUrl: './problem.html',
    styleUrl: './problem.scss',
})
export class Problem implements OnInit, OnDestroy {
    viz = viewChild<ElementRef<HTMLDivElement>>('viz');

    problemNumber!: number;
    private routeSubscription: Subscription | undefined;
    error: string | undefined;
    protected selectedLang = signal(Lang.js);
    public Lang = Lang;
    hasTsSolution = signal(false);
    hasRustSolution = signal(false);
    hasJavaSolution = signal(false);
    tsSolution: Euler | undefined;
    running = false;
    duration = signal('');
    solution = signal(NaN);
    steps = signal(0);
    resultIcon = signal('pending_outline');
    jsText: ReplaySubject<string> = new ReplaySubject(1);
    rustText: ReplaySubject<string> = new ReplaySubject(1);
    javaText: ReplaySubject<string> = new ReplaySubject(1);
    knownSolution?: number;
    hasVisualization = signal(false);
    chart!: BaseChart<any>;
    private readonly isBrowser: boolean;
    private x = 0;
    private tsSolutionClass?: any;

    private solutionLoader = inject(SolutionLoader);

    constructor(
        private route: ActivatedRoute,
        @Inject(PLATFORM_ID) private platformId: Object,
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit(): void {
        this.jsText.next('');

        this.routeSubscription = this.route.params.subscribe((params) => {
            // The route parameter is a string, so we convert it to a number.
            // This assumes your route is configured with a parameter, e.g., '/problem/:id'
            const id = params['id'];
            if (id) {
                this.problemNumber = +id;
                this.initProblem();
            } else {
                this.error = 'Problem number not provided.';
            }
        });

        const initialData: BarChartData[] = [
            { name: 'A', value: 10 },
            { name: 'B', value: 20 },
            { name: 'C', value: 15 },
        ];

        if (this.isBrowser) {
            // this.chart = new BarChart(this.viz!()!.nativeElement, initialData);
            // this.chart = new NumberChart(this.viz!()!.nativeElement, 0);
            //
            // setInterval(() => {
            //     this.updateChart();
            // }, 1000);
            // this.chart = this.tsSolution!.getVisualization();
        }
    }

    updateChart(): void {
        // New data for an incremental update
        // const newData: BarChartData[] = [
        //   { name: 'A', value: Math.random() * 30 }, // 'A' is updated
        //   { name: 'C', value: Math.random() * 30 }, // 'C' is updated
        //   { name: 'D', value: Math.random() * 30 }, // 'D' is new
        //   { name: 'E', value: Math.random() * 30 }, // 'E' is new
        //   // 'B' is removed
        // ];
        this.x += Math.floor(Math.random() * 10);

        console.log(this.x);

        if (this.chart) {
            this.chart.update([this.x]);
        }
    }

    async initProblem() {
        const hasTsSolution = this.solutionLoader.hasTsSolution(this.problemNumber);
        const hasRustSolution = this.solutionLoader.hasRustSolution(this.problemNumber);
        const hasJavaSolution = this.solutionLoader.hasJavaSolution(this.problemNumber);
        console.log(`ts: ${hasTsSolution}`);
        console.log(`rust: ${hasRustSolution}`);
        console.log(`java: ${hasJavaSolution}`);
        // this.hasVisualization.set(true);

        const solutionsModule = await this.solutionLoader.loadSolutions(this.problemNumber);

        if (hasTsSolution) {
            this.hasTsSolution.set(true);
            this.tsSolutionClass = solutionsModule.TsSolution!;
            if (this.isBrowser) {
                // Wait for the visualization element to be available from the viewChild signal
                const vizRef = this.viz();
                if (vizRef) {
                    this.tsSolution = new this.tsSolutionClass(vizRef.nativeElement);
                    const hasViz = this.tsSolution!.hasVisualization();
                    this.hasVisualization.set(hasViz);
                    if (hasViz) {
                        setTimeout(() => {
                            this.tsSolution!.initChart();
                            this.chart = this.tsSolution!.getVisualization();
                        }, 100);
                    }
                } else {
                    console.warn('Visualization element not found during initProblem');
                    this.tsSolution = new this.tsSolutionClass();
                }
            } else {
                this.tsSolution = new this.tsSolutionClass();
            }
            this.jsText.next(hljs.highlightAuto(solutionsModule.tsText!.trim()).value);
        }
        if (hasRustSolution) {
            this.hasRustSolution.set(true);
            this.rustText.next(hljs.highlightAuto(solutionsModule.rustText!.trim()).value);
            if (!hasTsSolution) {
                this.selectedLang.set(Lang.rust);
            }
        }
        if (hasJavaSolution) {
            this.hasJavaSolution.set(true);
            this.javaText.next(hljs.highlightAuto(solutionsModule.javaText!.trim()).value);
            if (!hasTsSolution && !hasRustSolution) {
                this.selectedLang.set(Lang.java);
            }
        }
        this.knownSolution = solutionsModule.solution;
    }

    async run() {
        this.resultIcon.set('pending_outline');

        this.running = true;
        this.reset();

        if (this.selectedLang() === Lang.js) {
            if (!this.tsSolutionClass) {
                this.running = false;
                return;
            }

            // Clear global timers and marks before each run
            execTimerClear();

            // Re-instantiate to reset internal state
            if (this.isBrowser) {
                const vizRef = this.viz();
                if (vizRef) {
                    this.tsSolution = new this.tsSolutionClass(vizRef.nativeElement);
                    if (this.tsSolution!.hasVisualization()) {
                        this.tsSolution!.initChart();
                        this.chart = this.tsSolution!.getVisualization();
                    }
                } else {
                    this.tsSolution = new this.tsSolutionClass();
                }
            } else {
                this.tsSolution = new this.tsSolutionClass();
            }

            if (!this.tsSolution) {
                this.running = false;
                return;
            }
            let { duration, solution, steps } = await this.tsSolution.run();
            if (duration < 1) {
                this.duration.set(`${duration}ms`);
            } else {
                this.duration.set(`${Math.round(duration)}ms`);
            }
            this.solution.set(solution);
            this.steps.set(steps);
            // @ts-ignore
            const isCorrect = this.knownSolution ? solution == this.knownSolution : null;
            this.resultIcon.set(isCorrect ? 'check_circle_outline' : 'error_outline');
        } else if (this.selectedLang() === Lang.rust) {
            try {
                // @ts-ignore
                const wasmPath = '/rs-pkg/' + 'euler.js';
                const wasm = await import(/* @vite-ignore */ wasmPath);
                await wasm.default(); // init
                const result = wasm.run_problem(this.problemNumber);

                this.duration.set(`${result.duration}ms`);
                this.solution.set(result.solution);
                this.steps.set(result.steps);

                // @ts-ignore
                const isCorrect = this.knownSolution ? result.solution == this.knownSolution : null;
                this.resultIcon.set(isCorrect ? 'check_circle_outline' : 'error_outline');
            } catch (e: any) {
                console.error('Rust WASM error:', e);
                this.error = 'WASM error: ' + e.toString();
                this.resultIcon.set('error_outline');
            }
        }

        this.running = false;
    }

    reset() {
        this.duration.set('');
        this.solution.set(NaN);
        this.steps.set(0);
    }

    selectLang(lang: Lang) {
        console.info(`Selected language: ${lang}`);
        this.selectedLang.set(lang);
        this.reset();
        this.resultIcon.set('pending_outline');

        if (lang === Lang.js && this.tsSolution) {
            this.hasVisualization.set(this.tsSolution.hasVisualization());
        } else {
            this.hasVisualization.set(false);
        }
    }

    ngOnDestroy(): void {
        this.routeSubscription?.unsubscribe();
    }
}

function assertExists<T>(value: T, message = 'Value not defined'): asserts value is Exclude<T, null | undefined> {
    if (value === null || value === undefined) throw new Error(message);
}

export enum Lang {
    js = 'js',
    rust = 'rust',
    java = 'java',
}
