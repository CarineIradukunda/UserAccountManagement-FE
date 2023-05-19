import { Component, OnInit } from '@angular/core';
import { UserClass } from './UserClass';
import { FormBuilder, Validators } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupModalComponent } from './signup/signup.component';
import { LoginModalComponent } from './login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SoarConnect';
  dataSaved = false;
  userForm: any;
  allUsers: Observable<UserClass[]> = of([]);
  message = null;


  constructor(private formbulider: FormBuilder, public matDialog: MatDialog) { }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }


  openSignUpModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "signup-modal-component";
    dialogConfig.height = "700px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(SignupModalComponent, dialogConfig);


  }

  openLoginModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "login-modal-component";
    dialogConfig.height = "700px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(LoginModalComponent, dialogConfig);


  }

  
}
