import { Routes } from '@angular/router';

import { UserComponent } from '../user/user.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { SignupModalComponent } from '../signup-modal/signup-modal.component';
import { AppComponent } from '../app.component';


export const routes: Routes = [
    { path: ' ', redirectTo: '/app', pathMatch: 'full' },
    { path: 'app', component: AppComponent },
    { path: 'login-modal', component: LoginModalComponent },
    { path: 'user', component: UserComponent },
    { path: 'signup-modal', component: SignupModalComponent },

];

