import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  name: string;
  description: string;
  type: string;
  tags: string[];
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Todo[] = []

  constructor() { }

  getTodos() {
    return this.todos;
  }

  getTodo(id: number) {
    return this.todos.filter(todo => todo.id === id)[0];
  }

  addTodo(todo: Partial<Todo>) {
    todo.id = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;
    this.todos.push(<Todo>todo);
  }

  deleteTodos(id: number) {
    let todo = this.getTodo(id);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  updateTodo(update: Todo) {
    let todo = this.getTodo(update.id);
    todo = update;
  }
}
