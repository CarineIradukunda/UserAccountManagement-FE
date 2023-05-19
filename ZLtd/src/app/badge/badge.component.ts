import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BadgeService } from '../services/badge.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {



  dataSaved = false;
  userForm: any;
  message = '';

  constructor(public dialogRef: MatDialogRef<BadgeComponent>,private formbulider: FormBuilder, public badgeservice: BadgeService, public matDialog: MatDialog) { }
  ngOnInit(): void {
    this.userForm = this.formbulider.group({
      nid: new FormControl('', [Validators.required]),
    })
  
  }

  get nid() { return this.userForm.get('nid'); }

  onFormSubmit() {
    // console.log(this.userForm.value);
    const nid = this.userForm.value.nid;


    if (nid === '') {
      this.message = 'NID or Passport is required!';
      console.log('NID or Passport is empty');
      return;
    }

    


    this.badgeservice.applyBadge(this.userForm.value).subscribe(
      (res: any) => {
        // Successful login
        // console.error('Login Success');
        this.message = "Your Application has been recieved!, you will receive a notification after the review.";
        
      },
      (error) => {
        // Failed login
        this.message = 'Sign Up failed!';
        // console.error('Login failed', error);

      }
    );
  }


  closeModal() {
    this.dialogRef.close();
  }


  @ViewChild('fileInput')
  fileInput!: ElementRef;
  fileAttr = 'Choose File';
  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Choose File';
    }
  }
}
