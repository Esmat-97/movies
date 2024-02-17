import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavigateComponent } from './navigate/navigate.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'contact', component:ContactComponent },
    { path: 'about', component:AboutComponent },
    { path: 'login', component:LoginComponent },
    { path: 'register', component:RegisterComponent },
    { path: '',  component:HomeComponent ,canActivate: [AuthGuard]},
    { path: 'navigate/:id', component:NavigateComponent },
    { path: 'cart', component:CartComponent }
];
