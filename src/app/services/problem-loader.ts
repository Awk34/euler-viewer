import { Injectable } from '@angular/core';
import {Euler} from 'src/solutions/ts/Euler';

@Injectable({
  providedIn: 'root'
})
export class ProblemLoader {
    async loadProblem(id: number): Promise<ProblemModule> {
        try {
            // The path for the dynamic import must be relative to this file.
            // Webpack will see this pattern and know to make all `.ts` files
            // in the `../../submodule/` directory available for dynamic loading.
            const module: ProblemModule = await import(`../../../euler-js/src/${id}.ts`);

            // You can add validation to ensure the loaded module is correct
            // @ts-ignore
            if (module.Solution) {
                return module;
            } else {
                console.log(module);
                throw new Error(`Module for problem ${id} has an invalid format.`);
            }
        } catch (error) {
            console.error(`Failed to load problem ${id}:`, error);
            // Re-throw a more user-friendly error for the component to catch.
            throw new Error(`Problem ${id} is not available or failed to load.`);
        }
    }
}

export interface ProblemModule {
    Problem: typeof Euler;
}
