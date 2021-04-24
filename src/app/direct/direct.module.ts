import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoModule } from '../todo/todo.module';
import { DirectComponent } from './direct.component';

@NgModule({
  declarations: [DirectComponent],
  imports: [
    CommonModule,
    TodoModule
  ]
})
export class DirectModule { }
