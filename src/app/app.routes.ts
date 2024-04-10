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
        path: 'login',
        component: LoginComponent, // Cargar directamente el componente LoginComponent
        data: { title: 'Iniciar sesión' }
      }
      // {
      //   path: 'producto/:slug',
      //   loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      // },
    ],
  }
];

