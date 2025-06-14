import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { PrimeNG, providePrimeNG } from 'primeng/config'
import Aura from '@primeng/themes/aura'

import { routes } from './app.routes';

import  { provideAnimations}from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    providePrimeNG({ theme: {
      preset: Aura
    }}),

    provideAnimations()
  ]
};
