import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: AppComponent,
        title: "Home"
    },

    {
        path: "admin",
        component: AdminComponent,
        title: "Admin",
    },
];
