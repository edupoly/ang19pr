
import { Component,signal,model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TfilterPipe } from './tfilter.pipe';
import { TodoComponent } from './todo/todo.component';


@Component({
  selector: 'app-root',
  imports:[FormsModule,TfilterPipe,TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  fil=model('all')
  todos=signal([
    {
      title:"get car",
      status:true
    },
    {
      title:"goto gym",
      status:false
    },
    {
      title:"pay emi",
      status:true
    },
    {
      title:"pay rent",
      status:false
    }
    
  ])
  newtodo = model('');
  addTodo(){
    this.todos.update(todo=>{
      return [...this.todos(),{title:this.newtodo(),status:false}]
    })
  }
  deleteTodo(index:any){
    this.todos.update((todos)=>{
      return todos.filter((todo,i)=>i!==index)
    })
  }
  toggleStatus(index:any){
    this.todos.update((todos)=>{
      return todos.map((todo,i)=>{
        if(i===index){
          todo.status=!todo.status;
        }
        return todo;
      })
    })
  }

}
