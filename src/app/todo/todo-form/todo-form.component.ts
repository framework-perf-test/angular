import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Input()
  todo!: Partial<Todo>;

  @Output() onAddOrUpdate = new EventEmitter<Partial<Todo>>();

  updateTodoHandler() {
    this.onAddOrUpdate.emit(this.todo);
  }
}
