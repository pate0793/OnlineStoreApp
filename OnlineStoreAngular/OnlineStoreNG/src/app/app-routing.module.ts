import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { StoreHomePageComponent } from './store-home-page/store-home-page.component';
import { SignupComponent } from './user-account/signup/signup.component';
import { LoginComponent } from './user-account/login/login.component';
import { UserAccountComponent } from './user-account/user-account.component'

const routes: Routes = [
  {path: '',redirectTo: '/HomePage', pathMatch: 'full'},
  {path: 'HomePage',component:StoreHomePageComponent},
  {path: 'Signup',component:SignupComponent},
  {path: 'Login' ,component:LoginComponent},
  {path: 'UserAccount',component:UserAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
