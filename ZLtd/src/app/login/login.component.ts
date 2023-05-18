import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { SignupModalComponent } from '../signup/signup.component';
import { map, catchError, throwError, Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginModalComponent {


  dataSaved = false;
  userForm: any;
  message = '';
  responseStatus: Object = [];
  status: boolean = false;
  loading = false;

  constructor(private formbulider: FormBuilder, public loginservice: LoginServiceService, private router: Router, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.userForm = this.formbulider.group({
      nid: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      
    });

  }

  get password() { return this.userForm.get('password'); }

  onFormSubmit() {
    // console.log(this.userForm.value);
    const nid = this.userForm.value.nid;
    const password = this.userForm.value.password;

    if (nid === null) {
      this.message = 'NID or Passport is required!';
      console.log('NID or Passport is empty');
      return; 
    }

    if (password === '') {
      this.message = 'Password is required!';
     // console.log('Password is empty');
      return; 
    }

    this.loginservice.loginUser(this.userForm.value).subscribe(
      (res: any) => {
        // Successful login
       // console.error('Login Success');
        this.router.navigateByUrl('/user');
        this.userForm.reset();
      },
      (error) => {
        // Failed login
        this.message = 'Login failed!';
       // console.error('Login failed', error);
        
      }
    );
  }


  onPasswordInput() {
    if (this.userForm.hasError('passwordMismatch'))
      this.password.setErrors([{ 'passwordMismatch': true }]);
    else
      this.password.setErrors(null);
  }
  
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

}
