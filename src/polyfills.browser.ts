// TODO(gdi2290): switch to DLLs

// Polyfills
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// Typescript emit helpers polyfill
import 'ts-helpers';

if ('production' === ENV) {
  // Production

} else {

  // Development
  Error.stackTraceLimit = Infinity;

  /* tslint:disable no-var-requires */
  require('zone.js/dist/long-stack-trace-zone');
}
