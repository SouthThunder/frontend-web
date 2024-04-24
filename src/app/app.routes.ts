import { Routes } from '@angular/router';
import { TestComponent } from './modules/test/test.component';
import { HomeComponent } from './modules/home/home.component';
import { RegistryComponent } from './modules/registry/registry.component';
import { LogInComponent } from './modules/log-in/log-in.component';
import {RentalapplicationComponent} from './modules/rentalapplication/rentalapplication.component';
import { PagoComponent } from './pago/pago.component';


import { PropertiesCatalogComponent } from './modules/properties-catalog/properties-catalog.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    }, {
        path: 'test/:id',
        component: TestComponent,
        title: 'Test'
    },
    {
        path: 'register',
        component: RegistryComponent,
        title: 'Registro'
    },
    {
        path: 'login',
        component: LogInComponent,
        title: 'Login'
    },
    {
        path: 'properties-catalog',
        component: PropertiesCatalogComponent,
        title: 'properties-catalog'
    },
    {
        path: 'rentalapplication',
        component: RentalapplicationComponent,
        title: 'Rental Application'
    },
    {
        path: 'pago',
        component: PagoComponent,
        title: 'Rental Application'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
