import {Injectable} from '@angular/core';
import manifest from '../../../public/problems-manifest.json';
import {Euler} from 'src/solutions/ts/Euler';
import solutions from '../../solutions.json';

export interface SolutionsModule {
    TsSolution?: typeof Euler;
    tsText?: string;
    rustText?: string;
    javaText?: string;
    solution?: number;
}

interface TsSolutionModule {
    Solution: typeof Euler;
}

@Injectable({
  providedIn: 'root'
})
export class SolutionLoader {
    hasTsSolution(id: number): boolean {
        return manifest.tsSolutions.includes(id);
    }
    hasRustSolution(id: number): boolean {
        return manifest.rustSolutions.includes(id);
    }
    hasJavaSolution(id: number): boolean {
        return manifest.javaSolutions.includes(id);
    }
    hasPaperSolution(id: number): boolean {
        return manifest.paperSolutions.includes(id);
    }
    hasSolution(id: number): boolean {
        return this.hasTsSolution(id) || this.hasRustSolution(id) || this.hasJavaSolution(id) || this.hasPaperSolution(id);
    }

    async loadSolutions(id: number): Promise<SolutionsModule> {
        const module: SolutionsModule = {};

        if(this.hasTsSolution(id)) {
            try {
                // The path for the dynamic import must be relative to this file.
                // Webpack will see this pattern and know to make all `.ts` files
                // in the `../../submodule/` directory available for dynamic loading.
                const tsModule: TsSolutionModule = await import(`../../../src/solutions/ts/${id}.ts`);
                const tsText = (await import(`../../../src/solutions/ts/${id}.ts.txt`)).default as string;

                // You can add validation to ensure the loaded module is correct
                // @ts-ignore
                if (tsModule.Solution) {
                    module.TsSolution = tsModule.Solution;
                    module.tsText = tsText;
                } else {
                    console.log(tsModule);
                    throw new Error(`TS module for solution ${id} has an invalid format.`);
                }
            } catch (error) {
                console.error(`Failed to load solution ${id}:`, error);
                // Re-throw a more user-friendly error for the component to catch.
                throw new Error(`Solution ${id} is not available or failed to load.`);
            }
        }

        if(this.hasRustSolution(id)) {
            module.rustText = (await import(`../../../src/solutions/rs/src/problems/problem_${id.toString().padStart(3, "0")}.rs.txt`)).default as string;
        }

        if(this.hasJavaSolution(id)) {
            module.javaText = (await import(`../../../src/solutions/java/problems/euler${id}.java.txt`)).default as string;
        }

        module.solution = (solutions as unknown as Record<string, number | undefined>)[String(id)];

        return module;
    }
}
