import { Component } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  public currentEvent!: string;
  public currentTodo: Partial<Todo> | null = null;
  public todos: Todo[];

  constructor(private _todoService: TodoService) {
    this.todos = _todoService.getTodos();
  }

  addTodoHandler() {
    this.currentEvent = 'edit';
    this.currentTodo = {
      confidential: "No",
      remind: false
    };
  }

  selectTodoHandler(id: number, currentEvent: string) {
    this.currentEvent = currentEvent;
    this.currentTodo = this._todoService.getTodo(id);
  }

  onUpdateTodoHandler(todo: Partial<Todo>) {
    if (!todo.id) {
      this._todoService.addTodo(todo);
    } else {
      this._todoService.updateTodo(<Todo>todo);
    }
    this.currentTodo = null;
    this.todos = this._todoService.getTodos();
  }

  deleteTodoHandler(id: number) {
    this._todoService.deleteTodo(id);
    this.todos = this._todoService.getTodos();
  }
}
