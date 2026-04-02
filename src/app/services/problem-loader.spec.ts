import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { ProblemLoader } from './problem-loader';

describe('ProblemLoader', () => {
  let service: ProblemLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(ProblemLoader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
