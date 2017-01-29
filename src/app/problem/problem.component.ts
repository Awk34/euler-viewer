import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import hljs from 'highlightjs';
import {
  get,
  padStart,
} from 'lodash-es';

const availableJs = require.context('../../../euler-js/src', false, /^(.\/)([0-9]+$)/)
  .keys()
  .map(s => parseInt(s.replace('./', '')))
  .sort((a, b) => a - b);
const availableJava = require.context('!!raw-loader!../../../euler-java/problems', false, /^(.\/)(euler[0-9]+\.java$)/)
  .keys()
  .map(s => parseInt(s.replace('./euler', '').replace('.java', '')))
  .sort((a, b) => a - b);
const availableRust = require.context('!!raw-loader!../../../euler-rust/src/problems', false, /^(.\/)(problem_[0-9]+\.rs)/)
  .keys()
  .map(s => parseInt(s.replace('./problem_', '').replace('.rs', '')))
  .sort((a, b) => a - b);

@Component({
  selector: 'about',
  styles: [`
  `],
  template: `
    <md-toolbar class="secondary-toolbar">
      <span class="title">Problem {{n}}</span>

      <span style="flex: 1 1 auto;"></span>

      <button md-icon-button [class.hidden]="lang !== 'js'" (click)="run()">
        <md-icon>play_arrow</md-icon>
      </button>
      <!--<button md-icon-button>-->
        <!--<md-icon>skip_next</md-icon>-->
      <!--</button>-->
    </md-toolbar>

    <div [innerHtml]="problemHtml" style="margin: 10px 20px;"></div>
    
    <hr>

    <div style="margin: 10px 20px;" [hidden]="!error">
      <hr>
      {{error}}
    </div>

    <div *ngIf="!error">
      <!--<select name="problem" id="problem" (change)="onChange($event.target.value)">-->
          <!--<option value="{{problem}}" *ngFor="let problem of availableProblems">{{problem}}</option>-->
      <!--</select>-->
      <div style="margin: 10px; display: flex; justify-content: center;">
        <button md-raised-button color="accent" [disabled]="!jsText" (click)="selectLang('js')">JS</button>
        <button md-raised-button color="accent" [disabled]="!rustText" (click)="selectLang('rust')">Rust</button>
        <button md-raised-button color="accent" [disabled]="!javaText" (click)="selectLang('java')">Java</button>
      </div>
      
      <pre [class.hidden]="lang !== 'js'" class="hljs" style="margin: 0;"><code [innerHtml]="jsText"></code></pre>
      <pre [class.hidden]="lang !== 'rust'" class="hljs" style="margin: 0;"><code [innerHtml]="rustText"></code></pre>
      <pre [class.hidden]="lang !== 'java'" class="hljs" style="margin: 0;"><code [innerHtml]="javaText"></code></pre>

      <br>

      <div style="margin: 10px 20px;">
          <span>Duration: {{duration}}</span>
          <br>
          <span>Solution: <code>{{solution}}</code></span>
      </div>
    </div>
  `,
})
export class ProblemComponent implements OnInit {
  jsText: string;
  javaText: string;
  rustText: string;
  lang: string = '';
  problem;
  problemHtml: string;
  duration;
  solution;
  n;
  error: string;
  running: boolean = false;

  constructor(
    public route: ActivatedRoute
  ) {}

  selectLang(lang) {
    this.lang = lang;
  }

  public ngOnInit() {
    this.n = parseInt(get(this, 'route.params.value.n')) || 1;

    let hasJsSolution = availableJs.includes(this.n);
    let hasRustSolution = availableRust.includes(this.n);
    let hasJavaSolution = availableJava.includes(this.n);

    if(hasJsSolution) {
      this.loadJs(this.n);
      this.selectLang('js');
    }
    if(hasRustSolution) {
      this.loadRust(this.n);
      if(!hasJsSolution) this.selectLang('rust');
    }
    if(hasJavaSolution) {
      this.loadJava(this.n);
      if(!hasJsSolution && !hasRustSolution) this.selectLang('java');
    }

    let problemHtml;

    try {
      problemHtml = require(`!!raw-loader!../../../euler-scraper/scraped/${this.n}/${this.n}.html`);
    } catch(e) {
      console.log(e);
    }

    this.problemHtml = problemHtml;

    if(!problemHtml) return;

    console.log(problemHtml);

    console.log('hello `Problem` component');
  }

  loadJs(number) {
    // import(`!!raw-loader!../../../../js/${4}`).then(module => {}).catch(e => {});
    require.ensure([], require => {
      this.jsText = hljs.highlightAuto(require(`!!raw-loader!../../../euler-js/src/${number}`)).value;

      const ProblemConstructor = require(`../../../euler-js/src/${number}`).default;

      this.problem = new ProblemConstructor();
    });
  }

  loadRust(number) {
    require.ensure([], require => {
      number = padStart(number, 3, '0');
      this.rustText = hljs.highlightAuto(require(`!!raw-loader!../../../euler-rust/src/problems/problem_${number}.rs`)).value;
    });
  }

  loadJava(number) {
    require.ensure([], require => {
      this.javaText = hljs.highlightAuto(require(`!!raw-loader!../../../euler-java/problems/euler${number}.java`).replace(/\t/g, '    ')).value;
    });
  }

  run() {
    this.running = true;
    let {duration, solution} = this.problem.run();
    this.duration = `${parseInt(duration)}ms`;
    this.solution = solution;
    this.running = false;
  }
}
