import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title:'Pinturas',
        loadComponent: () => import('./landing/landing.component'),
        children: [
            {
              path: '',
              loadComponent: () => import('./landing/components/main/main.component'),
            },
        ],
     }
];
