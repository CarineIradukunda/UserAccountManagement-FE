import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';
import { UserClass } from '../UserClass';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  dataSaved = false;
  userForm: any;
  allUsers: Observable<UserClass[]> = of([]);

  constructor(private formbulider: FormBuilder, public userservice: UserService, public matDialog: MatDialog) { }
  ngOnInit() {
    this.userForm = this.formbulider.group({
      nid: new FormControl('', [Validators.required]),
    });
    this.loadUser();
  }

  loadUser() {
    // this.allUsers = this.userservice.();
  }

  openBadgeModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "login-modal-component";
    dialogConfig.height = "700px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(BadgeComponent, dialogConfig);


  }

}
