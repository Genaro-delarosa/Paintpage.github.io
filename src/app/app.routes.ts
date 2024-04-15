import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Pinturas',
    loadComponent: () => import('./landing/landing.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./landing/main/main.component'),
      },
      {
        path: 'catalogo',
        loadComponent: () => import('./landing/pages/catalog/catalog.component'),
      },
      {
        path: 'nosotros',
        loadComponent: () => import('./landing/pages/about-us/about-us.component'),
      },
      {
        path: 'carrito',
        loadComponent: () => import('./landing/pages/cart/cart.component'),
      },
      {
        path: 'contactanos',
        loadComponent: () => import('./landing/pages/contact-us/contact-us.component'),
      },
      
      {
        path: 'terminos',
        loadComponent: () => import('./landing/pages/conditions/conditions/conditions.component'),
      },
    ],
  }
];

