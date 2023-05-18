import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from '../../../services/login-service.service';
import { Router } from '@angular/router';
import { SignupServiceService } from '../../../services/signup-service.service';

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
      email: new FormControl('', [Validators.required]),
    });

  }

  get password() { return this.userForm.get('password'); }
  get nid() { return this.userForm.get('nid'); }

  onPasswordInput() {
    if (this.userForm.hasError('passwordMismatch'))
      this.password.setErrors([{ 'passwordMismatch': true }]);
    else
      this.password.setErrors(null);
  }
  

  onFormSubmit() {
    console.log(this.userForm.value);
    this.userservice.createUser(this.userForm.value).subscribe((res: any) => {
      this.message = "Success";
      this.dialogRef.close();
    })
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
