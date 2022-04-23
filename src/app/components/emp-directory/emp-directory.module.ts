import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from "@angular/material/icon";
import { MatCarouselModule } from 'ng-mat-carousel';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EmpDirectoryComponent } from './emp-directory.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
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
    MatMenuModule,
    MatIconModule,
    MatCarouselModule,
    DragDropModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class EmpDirectoryModule { }
