import { Routes } from '@angular/router';
import { HomeComponent } from './View/pages/home/home.component';
import { LoginComponent } from './View/pages/login/login.component';
import { SignUpComponent } from './View/pages/sign-up/sign-up.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component:SignUpComponent}
];
