import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavigateComponent } from './navigate/navigate.component';
import { CartComponent } from './cart/cart.component';

import { AuthGuard } from './guards/auth.guard';
import { SignComponent } from './sign component ';
import { LoginComponent } from './login component ';

export const routes: Routes = [
    { path: 'contact', component:ContactComponent },
    { path: 'about', component:AboutComponent },
    { path: 'login', component:LoginComponent },
    { path: 'sign', component:SignComponent },
    { path: '',  component:HomeComponent ,canActivate: [AuthGuard]},
    { path: 'navigate/:id', component:NavigateComponent },
    { path: 'cart', component:CartComponent }
];
