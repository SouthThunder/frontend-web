import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Import styling
import './app.component.css';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
