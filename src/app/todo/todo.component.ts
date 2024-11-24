import { Component,Input,input, Output,EventEmitter, output } from '@angular/core';



@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todo = input<any>()
  i = input(0);
  @Output() toggleTodo = new EventEmitter<number>();
  deleteTodo = output<number>()
  toggleTodoItem(index:number){
    this.toggleTodo.emit(index);
  }
  deleteTodoItem(index:number){
    this.deleteTodo.emit(index)
  }
}
