import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TodoModule } from '../todo/todo.module';
import { LazyComponent } from './lazy.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent
  }
];

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TodoModule
  ]
})
export class LazyModule { }
