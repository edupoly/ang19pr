import { Component,input,output } from '@angular/core';


@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todo = input<any>()
  i = input(0)
  deleteTodo = output<number>();
  toggleTodo = output<number>();
  delTodo(index:number){
    this.deleteTodo.emit(index)
  }
  toggleStatus(index:number){
    this.toggleTodo.emit(index)
  }
}
