import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { LandingComponent } from './features/landing/pages/landing.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'flights',
        loadComponent: () => import('./features/flights/pages/flight-list/flight-list.component')
            .then(m => m.FlightListComponent)
    },
    {
        path: 'flights/create',
        loadComponent: () => import('./features/flights/pages/flight-create/flight-create.component')
            .then(m => m.FlightCreateComponent)
    },
    {
        path: 'flights/:id',
        loadComponent: () => import('./features/flights/pages/flight-detail/flight-detail.component')
            .then(m => m.FlightDetailComponent)
    },
    {
        path: 'flights/edit/:id',
        loadComponent: () => import('./features/flights/pages/flight-edit/flight-edit.component')
            .then(m => m.FlightEditComponent)
    }
];
