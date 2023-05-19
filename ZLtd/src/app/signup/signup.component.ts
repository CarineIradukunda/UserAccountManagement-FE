import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';
import { SignupServiceService } from '../services/signup-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupModalComponent implements OnInit {

  dataSaved = false;
  userForm: any;
  message = '';
  minPw = 8;
  ageMessage='';

  constructor(public dialogRef: MatDialogRef<SignupModalComponent>, private formbulider: FormBuilder, public userservice: SignupServiceService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formbulider.group({
      names: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      maritalStatus: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      nid: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(this.minPw)]),
      password2: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });

  }

  get password() { return this.userForm.get('password'); }
  get password2() { return this.userForm.get('password2'); }
  get nid() { return this.userForm.get('nid'); }

  onPasswordInput() {
    if (this.userForm.hasError('passwordMismatch'))
      this.password2.setErrors([{ 'passwordMismatch': true }]);
    else
      this.password2.setErrors(null);
  }



  onFormSubmit() {
    // console.log(this.userForm.value);
    const nid = this.userForm.value.nid;
    const password = this.userForm.value.password;
    // const names = this.userForm.value.names;
    // const gender = this.userForm.value.gender;
    const age = this.userForm.value.age;
    // const dob = this.userForm.value.dob;
    // const maritalStatus = this.userForm.value.maritalStatus;
    // const nationality = this.userForm.value.nationality;
    // const email = this.userForm.value.nationality;

    if (nid === '') {
      this.message = 'NID or Passport is required!';
      console.log('NID or Passport is empty');
      return;
    }

    if (password === '') {
      this.message = 'Password is required!';
      // console.log('Password is empty');
      return;
    }
    if (age < 18) {
      this.ageMessage = 'Age must be 18 or above!';
      // console.log('Password is empty');
      return;
    }
    
    

    this.userservice.createUser(this.userForm.value).subscribe(
      (res: any) => {
        // Successful login
        // console.error('Login Success');
        //this.message = "Success";
        this.userForm.closeModal
      },
      (error) => {
        // Failed login
        this.message = 'Sign Up failed!';
        // console.error('Login failed', error);

      }
    );
  }


  resetForm() {
    this.userForm.reset();
    this.message = '';
    this.dataSaved = false;
  } 

  closeModal() {
    this.dialogRef.close();
  }

}
