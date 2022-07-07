import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService as AuthGuard} from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./modules/MainModule/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/AuthModule/auth.module').then(m => m.AuthModule),
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
