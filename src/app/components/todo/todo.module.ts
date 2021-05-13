import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from './todos/todos.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [TodosComponent, TodoViewComponent, TodoFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodoModule { }
