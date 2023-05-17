import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent implements OnInit {

  dataSaved = false;
  userForm: any;
  message = null;

  constructor(public dialogRef: MatDialogRef<SignupModalComponent>, private formbulider: FormBuilder, public userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formbulider.group({
      names: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      maritalStatus: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      nid: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });

  }


  onFormSubmit() {
    console.log(this.userForm.value);
    this.userservice.createUser(this.userForm.value).subscribe((res: any) => {
      this.message;
      this.dialogRef.close();
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
