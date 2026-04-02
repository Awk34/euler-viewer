import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';

import { Problem } from './problem';

describe('Problem', () => {
  let component: Problem;
  let fixture: ComponentFixture<Problem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problem],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideMarkdown(),
        provideRouter([]),
        provideZonelessChangeDetection(),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Problem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
