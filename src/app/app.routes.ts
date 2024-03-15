import { Routes } from '@angular/router';

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
        path: 'login',
        loadComponent: () => import('./auth/login/login.component'),
      },
      {
        path: 'register',
        loadComponent: () => import('./auth/register/register.component'),
      },

    ],
  }
];

