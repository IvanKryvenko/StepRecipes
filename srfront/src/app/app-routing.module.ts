import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./modules/MainModule/main.module').then(m => m.MainModule),
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/AuthModule/auth.module').then(m => m.AuthModule),
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
