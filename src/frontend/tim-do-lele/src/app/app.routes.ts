import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        title: "Home"
    },

    {
        path: 'login',
        component: TelaLoginComponent,
        title: 'Login'
    },

    {
        path: 'cadastro',
        component: TelaCadastroComponent,
        title: 'cadastro'
    },

    {
        path: "admin",
        component: AdminComponent,
        title: "Admin",
    },
];
