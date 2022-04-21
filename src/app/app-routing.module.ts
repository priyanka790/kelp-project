import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpDirectoryComponent } from './comonents/emp-directory/emp-directory.component';

const routes: Routes = [
  {
    path: 'employee-details',
    component: EmpDirectoryComponent,
  },
  { path: '', redirectTo: '/employee-details', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
