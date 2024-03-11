import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environment';
import { initializeApp } from 'firebase/app';

const firebaseConfig = environment.firebaseConfig

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), 
  //importProvidersFrom([provideFirebaseApp(() => initializeApp(firebaseConfig))])
  ],
};
