import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,  FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent {

  logInForm!: FormGroup
  regForm!: FormGroup

  public actionType: 'signIn' | 'signUp' = 'signIn';

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {

    this.logInForm = this.fb.group({
        username: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]{1,15}')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.regForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern("^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)")]],
      nickname:  ['', [Validators.required, Validators.pattern('[A-Za-z0-9*]{1,15}')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
}

  changeActionType():void {
    if(this.actionType === 'signIn') {
      this.actionType = 'signUp';
    } else {
      this.actionType = 'signIn';
    }
  }

  login() {
    const creds = {
      username: this.logInForm.value.username,
      password: this.logInForm.value.password
    };

    this.authService.login(creds).subscribe(data => {
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        this.router.navigate(['/home']);
      } else {
        console.log('error'); //next it should be toast error
      }
    });
  }

  signUp() {
    const creds = {
      fullName: this.regForm.value.fullname,
      username: this.regForm.value.nickname,
      emailAddress: this.regForm.value.email,
      password: this.regForm.value.password,
    };

    this.authService.signUp(creds).subscribe(data => {
      if (data.access_token) {
      localStorage.setItem('token', data.access_token);
      this.router.navigate(['/home']);
      } else {
        console.log('error'); //next it should be toast error
      }
    });
  }
}
