import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';
import { CanRedirectToHomeGuard } from './core/guards/can-redirect-to-home.guard';
import { UserProfileComponent } from './pages/home/userProfile/user-profile.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { 
    path: 'home',
    component: HomeComponent,
    canActivate: [CanRedirectToHomeGuard],
    children: [{
      path: ':id/:first_name/:last_name',
      component: UserProfileComponent
    }]
  },

  { path: '**', redirectTo: '/sign-in' },
  { path: 'home', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
