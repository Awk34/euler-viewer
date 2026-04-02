import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { SolutionLoader } from './solution-loader';

describe('SolutionLoader', () => {
  let service: SolutionLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(SolutionLoader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
