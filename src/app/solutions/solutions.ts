import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {SolutionLoader, SolutionsModule} from '../services/solution-loader';

@Component({
  selector: 'app-solutions',
    imports: [
        RouterLink
    ],
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss'
})
export class Solutions {
    problems = new Array(400)
        .fill(0)
        .map((val, i) => ({
            n: i + 1,
            solutions: 0,
        }));

    problemNumber: number = 1;
    loadedSolution: SolutionsModule | null = null;
    solution: string | number | null = null;
    error: string | null = null;
    isLoading: boolean = false;

    constructor(private solutionLoader: SolutionLoader) {
        this.loadProblem();
    }

    async loadProblem(): Promise<void> {
        if (this.problemNumber === null || this.problemNumber < 1) {
            this.error = 'Please enter a valid problem number.';
            return;
        }

        this.isLoading = true;
        this.error = null;
        this.loadedSolution = null;
        this.solution = null;

        try {
            this.loadedSolution = await this.solutionLoader.loadSolutions(this.problemNumber);
        } catch (e: any) {
            this.error = e.message;
        } finally {
            this.isLoading = false;
        }
    }

    hasSolution(id: number) {
        return this.solutionLoader.hasSolution(id);
    }
}
