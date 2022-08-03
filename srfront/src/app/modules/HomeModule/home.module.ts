import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RecipeListComponent} from 'src/app/components/recipe-list/recipe-list.component';
import { CardRecipeComponent } from 'src/app/components/card-recipe/card-recipe.component';
import { RecipePageComponent } from 'src/app/components/recipe-page/recipe-page.component';
import { BrieflyComponent } from 'src/app/components/briefly/briefly.component';
import { CookingComponent } from 'src/app/components/cooking/cooking.component';
import { IngredientsComponent } from 'src/app/components/ingredients/ingredients.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    HomeComponent,
    CardRecipeComponent,
    RecipeListComponent,
    RecipePageComponent,
    IngredientsComponent,
    BrieflyComponent,
    CookingComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
