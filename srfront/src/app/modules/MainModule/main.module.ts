import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { HomeModule } from '../HomeModule/home.module';
import { UserModule } from '../UserModule/user.module';
import { TapbarComponent } from 'src/app/components/tapbar/tapbar.component';
import { FavouriteComponent } from 'src/app/components/favourite/favourite.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { WishListComponent } from 'src/app/components/wish-list/wish-list.component';


@NgModule({
  declarations: [ 
    MainComponent,
    TapbarComponent,
    SearchComponent,
    WishListComponent,
    FavouriteComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HomeModule,
    UserModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
