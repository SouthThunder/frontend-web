import { Routes } from '@angular/router';
import { TestComponent } from './modules/test/test.component';
import { HomeComponent } from './modules/home/home.component';
import { RegistryComponent } from './modules/registry/registry.component';
import { LogInComponent } from './modules/log-in/log-in.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { RequestsArrendadorComponent } from './components/requests-arrendador/requests-arrendador.component';
import { FormPropertyComponent } from './components/form-property/form-property.component';
import { PropertyPageComponent } from './modules/property-page/property-page.component';
import { ProfileArrendatarioComponent } from './modules/profile-arrendatario/profile-arrendatario.component';
import {RentalapplicationComponent} from './modules/rentalapplication/rentalapplication.component';
import { PagoComponent } from './pago/pago.component';
import { PayrentalapplicationComponent } from './modules/payrentalapplication/payrentalapplication/payrentalapplication.component';


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
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile'
    },
    {
        path: 'form',
        component: FormPropertyComponent,
        title: 'Form'
    },
    {
        path: 'property-page',
        component: PropertyPageComponent,
        title: 'Property Page'
    },
    {
        path: 'profile-arrendatario',
        component: ProfileArrendatarioComponent,
        title: 'Profile Arrendatario'
    },
    {
        path: 'properties-catalog',
        component: PropertiesCatalogComponent,
        title: 'properties-catalog'
    },
    {
        path: 'rentalapplication/:id',
        component: RentalapplicationComponent,
        title: 'Rental Application'
    },
    {
        path: 'pago/:valor',
        component: PagoComponent,
        title: 'Rental Application'
    },
    {
        path: 'payrentalapplication',
        component: PayrentalapplicationComponent,
        title: 'Pay Rental Application'
    },
    {
        path: '**',
        redirectTo: ''
    },
    
];
