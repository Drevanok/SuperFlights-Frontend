import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login.component';
import { LandingComponent } from './features/landing/pages/landing.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
    },
    {
        path:'login',
        component: LoginComponent
    }
];
