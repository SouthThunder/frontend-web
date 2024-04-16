import { Routes } from '@angular/router';
import { TestComponent } from './modules/test/test.component';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: TestComponent,
        title: 'Test'
    }, {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
    }
];
