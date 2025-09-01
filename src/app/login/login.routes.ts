import { Routes } from '@angular/router';



export const loginRoutes: Routes = [

    {
        path: 'registro', 
        loadComponent: () => import("../registro/registro").then((module) => module.Registro), 
    },
    
    
];
