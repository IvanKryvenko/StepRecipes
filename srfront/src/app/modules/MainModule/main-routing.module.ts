import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    redirectTo: '/home',
    pathMatch: 'full',
    children: [
      {
        path: 'home',
        loadChildren: () => import ('../HomeModule/home.module').then(m => m.HomeModule),
        pathMatch: 'full'
      },
      {
        path: 'user',
        loadChildren: () => import ('../UserModule/user.module').then(m => m.UserModule),
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
