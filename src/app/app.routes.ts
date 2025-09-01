import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'bienvenida',
        pathMatch: 'full',
    },
    {
        path: 'bienvenida',
        // component: Bienvenida,
        loadComponent: () => import("./bienvenida/bienvenida").then((module) => module.Bienvenida),
    },

    {
        path: 'sobre-mi',

        loadComponent: () => import("./sobre-mi/sobre-mi").then((module) => module.SobreMi),
    },

    {
        path: 'login',

        loadComponent: () => import("./login/login").then((module) => module.Login),
        loadChildren: () => import('./login/login.routes').then((routes) => routes.loginRoutes),


    },
    {
        path: 'registro',

        loadComponent: () => import("./registro/registro").then((module) => module.Registro),



    },
    {
        path: '**', //cualquier ruta redirectTo :''bienvenida', siempre va ultimo
        loadComponent: () => import("./error/error").then((module) => module.Error),
    },
];
