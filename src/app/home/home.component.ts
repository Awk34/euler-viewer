import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
// import { XLargeDirective } from './x-large';

const availableProblems = require.context('../../../euler-js/src', false, /^(.\/)([0-9]+$)/)
  .keys()
  .map(s => parseInt(s.replace('./', '')))
  .sort((a, b) => a - b);
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

let problems = new Array(400).fill(0).map((val, i) => ({
  n: i + 1,
  solutions: 0,
}));

availableJs.forEach(n => problems[n - 1].solutions++);
availableRust.forEach(n => problems[n - 1].solutions++);
availableJava.forEach(n => problems[n - 1].solutions++);

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  problems = problems;
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  // public submitState(value: string) {
  //   console.log('submitState', value);
  //   this.appState.set('value', value);
  //   this.localState.value = '';
  // }
}
