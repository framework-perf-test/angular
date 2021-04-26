import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Todo, TYPES } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Input()
  todo!: Partial<Todo>;

  @Output() onAddOrUpdate = new EventEmitter<Partial<Todo>>();

  @ViewChild('form')
  form!: any;

  types = TYPES;

  updateTodoHandler() {
    if (this.form.valid) {
      this.onAddOrUpdate.emit(this.todo);
    } else {
      alert("All fields are required.");
    }
  }
}
