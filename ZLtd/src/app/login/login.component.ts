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

    if (nid === '' || password === '') {
      this.message = 'NID and Password are required!';
      console.log('NID or Passport is empty');
      return; 
    }

    // if (password === '') {
    //   this.message = 'Password is required!';
     // console.log('Password is empty');
    //   return; 
    // }

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




}
