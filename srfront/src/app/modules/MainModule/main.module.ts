import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { HomeModule } from '../HomeModule/home.module';
import { UserModule } from '../UserModule/user.module';


@NgModule({
  declarations: [ 
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HomeModule,
    UserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
