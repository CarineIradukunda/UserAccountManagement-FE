import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {


  dataSaved = false;
  userForm: any;
  message = null;

  constructor(public dialogRef: MatDialogRef<LoginModalComponent>, private formbulider: FormBuilder, public userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formbulider.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      
    });

  }


  onFormSubmit() {
    console.log(this.userForm.value);
    this.userservice.loginUser(this.userForm.value).subscribe((res: any) => {
      this.message;
      console.log('redirecting to user page');
     this.router.navigate(['/user']);
      
    })
  }

  resetForm() {
    this.userForm.reset();
    this.message = null;
    this.dataSaved = false;
  }

  closeModal() {
    this.dialogRef.close();
  }
}
