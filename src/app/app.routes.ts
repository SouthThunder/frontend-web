import { Routes } from '@angular/router';
import { TestComponent } from './modules/test/test.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistryComponent } from './modules/registry/registry.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    }, {
        path: 'test',
        component: TestComponent,
        title: 'Test'
    }, {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'registro',
        component: RegistryComponent,
        title: 'Registro'
    }
];
