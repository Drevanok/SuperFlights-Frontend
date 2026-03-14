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
        path:'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    }
];
