import { Routes } from '@angular/router';
import {Solutions} from './solutions/solutions';
import {About} from './about/about';
import {Problem} from './problem/problem';

export const routes: Routes = [
    {
        path: '',
        component: Solutions,
    },
    {
        path: 'about',
        component: About,
    },
    {
        path: 'problem/:id',
        component: Problem,
    },
];
