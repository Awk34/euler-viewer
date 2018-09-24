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
import solutions from '../../assets/solutions.json';

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

import loadWasm from '../../../euler-rust/src/lib.rs';

@Component({
  selector: 'about',
  styles: [`
  `],
  template: require('./problem.html'),
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
  correct: boolean;
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

    if(hasRustSolution) {
      loadWasm().then(result => {
        console.log(result);
        console.log(`problem_${padStart(this.n, 3, '0')}`);
        const main = result.instance.exports[`problem_${padStart(this.n, 3, '0')}`];
        console.log('return value was', main());
      }).catch(e => {
        console.error(e);
      });
    }

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
    this.correct = solutions[this.n] !== null ? solution == solutions[this.n] : null;
    this.running = false;
  }
}
