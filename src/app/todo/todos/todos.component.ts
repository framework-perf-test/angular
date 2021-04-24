import { Component } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  public currentTodo: Partial<Todo> | null = null;

  constructor(public todoService: TodoService) { }

  addTodoHandler() {
    this.currentTodo = {};
  }

  selectTodoHandler(todo: Todo) {
    this.currentTodo = todo;
  }

  onUpdateTodoHandler(todo: Partial<Todo>) {
    if (!todo.id) {
      this.todoService.addTodo(todo);
    } else {
      this.todoService.updateTodo(<Todo>todo);
    }
    this.currentTodo = null;
  }

}
