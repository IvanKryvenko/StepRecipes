import { WishListComponent } from './../../components/wish-list/wish-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from 'src/app/components/favourite/favourite.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('../HomeModule/home.module').then(m => m.HomeModule),
      },
      {
        path: 'user',
        loadChildren: () => import('../UserModule/user.module').then(m => m.UserModule),
      },
      {
        path: 'search',
        component: SearchComponent,
        pathMatch: 'full'
      },
      {
        path: 'favourite',
        component: FavouriteComponent,
        pathMatch: 'full'
      },
      {
        path: 'wish',
        component: WishListComponent,
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
