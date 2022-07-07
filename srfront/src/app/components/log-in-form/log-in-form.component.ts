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

  public actionType: 'signIn' | 'registration' = 'signIn';

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {

    this.logInForm = this.fb.group({
        email: ['', [Validators.required, Validators.pattern('[a-z0-9]*')]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z ]{1,32}')]],
      surname: ['', [Validators.required, Validators.pattern('[A-Za-z ]{1,32}')]],
      nickname:  ['', [Validators.required, Validators.pattern('[a-z0-9*]{1,15}')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
}

  changeActionType():void {

    if(this.actionType === 'signIn') {
      this.actionType = 'registration';
    } else {
      this.actionType = 'signIn';
    }
  }

    login(){
    console.log(this.logInForm.value)
  }

  register() {
    console.log(this.regForm.value)
  }

  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
