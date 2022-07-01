import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LogInFormComponent } from '../../components/log-in-form/log-in-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    LogInFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
