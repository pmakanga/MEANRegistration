import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/_model/user.model';
import { MyUser } from 'src/app/_model/myUser';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage: boolean;
  serverErrorMessages: string;
  user: User;
  
  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  // onSubmit(form: NgForm) {
  //   this.userService.registerUser(form.value).subscribe(
  //     res => {
  //       this.showSuccessMessage = true;
  //       setTimeout(() => this.showSuccessMessage = false, 4000);
  //     },
  //     err => {
  //       if (err.status === 422) {
  //         this.serverErrorMessages = err.error.join('<br/>');
  //       }else
  //         this.serverErrorMessages = 'Something went wrong. Please contact admin';
  //     },
  //   );
  // }
  registerUser(from: NgForm){
    this.userService.registerUser(this.user).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        console.log(this.user);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else
          this.serverErrorMessages = 'Something went wrong. Please contact admin';
          
      }
    )
  }
  resetForm(form: NgForm) {
    // this.userService.registerUser = {
    //   fullName: '',
    //   email: '',
    //   password: ''
    // };
    form.resetForm();
    this.serverErrorMessages = '';
  }
  
}
