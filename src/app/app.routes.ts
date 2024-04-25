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


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    }, {
        path: 'test/:id',
        component: TestComponent,
        title: 'Test'
    }, {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
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
    }
];
