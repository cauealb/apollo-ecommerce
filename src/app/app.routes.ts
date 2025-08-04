import { Routes } from '@angular/router';
import { LoginAndRegisterComponent } from './features/Auth/Login-and-Register/login-and-register.component';
import { ForgotPasswordComponent } from './features/Auth/forgot-password/forgot-password/forgot-password.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginAndRegisterComponent,
        title: 'Login'
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        title: 'Forgot Password'
    }
]