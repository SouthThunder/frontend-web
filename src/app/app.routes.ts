import { Routes } from '@angular/router';
import { TestComponent } from './modules/test/test.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {
        path: '',
        component: FooterComponent,
        title: 'Test'
    }, {
        path: 'home',
        component: HomeComponent,
        title: 'Home'
    }
];
