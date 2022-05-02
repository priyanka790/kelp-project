import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path:'',
  //   loadChildren:() => import('./components/login/login-page/login-page.module').then(m => m.LoginPageModule)
  // },
  {
    path: '',
   loadChildren:() => 
    import('./components/emp-directory/emp-directory.module').then(m => m.EmpDirectoryModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
