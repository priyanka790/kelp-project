import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatCarouselModule } from 'ng-mat-carousel';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EmpDirectoryComponent } from './emp-directory.component';
import { CoreModule } from 'src/app/core.module';
const routes: Routes = [
  {
    path: 'employee-details',
    component: EmpDirectoryComponent,
  },
  
  { path: '', redirectTo: '/employee-details', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    EmpDirectoryComponent
  ],
  imports: [
    CommonModule,
    MatCarouselModule,
    DragDropModule,
    CoreModule,
    RouterModule.forChild(routes)
  ]
})
export class EmpDirectoryModule { }
