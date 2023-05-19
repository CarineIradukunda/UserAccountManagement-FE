import { Routes } from '@angular/router';

import { UserComponent } from '../user/user.component';
import { LoginModalComponent } from '../login/login.component';
import { SignupModalComponent } from '../signup/signup.component';
import { AppComponent } from '../app.component';


export const routes: Routes = [
    { path: ' ', redirectTo: 'app', pathMatch: 'full' },
    { path: 'app', component: AppComponent },
    { path: 'login', component: LoginModalComponent },
    { path: 'user', component: UserComponent },
    { path: 'signup', component: SignupModalComponent },

];

