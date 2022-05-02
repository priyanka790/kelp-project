import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../../../core.module';



const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],

})
export class LoginPageModule { }
