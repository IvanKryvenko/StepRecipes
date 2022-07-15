import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RecipeListComponent} from 'src/app/components/recipe-list/recipe-list.component';
import { CardRecipeComponent } from 'src/app/components/card-recipe/card-recipe.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardRecipeComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
