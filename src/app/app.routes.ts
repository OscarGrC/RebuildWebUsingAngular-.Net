import { Routes } from '@angular/router';
import { PruebaComponent } from './components/prueba/prueba.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./pages/home/home.component').then((m) => m.HomeComponent)
            }

        ]
    },

];
