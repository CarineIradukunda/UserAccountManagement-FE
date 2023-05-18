import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginModalComponent } from './login/login.component';
import { SignupModalComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
// import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from '../../services/login-service.service';
import { SignupServiceService } from '../../services/signup-service.service';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginModalComponent,
    SignupModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule ,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule ,
   MatTooltipModule,
   MatToolbarModule,
   MatRadioModule,
   BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatGridListModule,
    MatDividerModule,
    MatSidenavModule,
    MatDialogModule,
    MatNativeDateModule
  ],
  providers: [HttpClientModule, LoginServiceService,SignupServiceService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
