import { JsonPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodofilterPipe } from './todofilter.pipe';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  imports:[FormsModule,UpperCasePipe,TodofilterPipe,SlicePipe,JsonPipe,TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang19pr';
  count=signal(0);
  newtodo=model('')
  tfilter=model('all')
  // todofilter = new TodofilterPipe();
  todos=signal([
    {
      title:'get home',
      status:false
    },
    {
      title:'pay emi',
      status:false
    },
    {
      title:'pay rent',
      status:true
    },
    {
      title:'just try',
      status:false
    }
  ]);
  get alltodos(){
    return this.todos();
  }
  addTodo(){
    this.todos.update(todos=>[...todos,{title:this.newtodo(),status:false}])
  }
  inc(){
    this.count.update(count=>count+1)
  }
  dec(){
    this.count.update(count=>count-1)
  }
  toggleTodo(index:number){
    this.todos.update(todos=>todos.map((todo,i)=>{
      i===index && (todo.status=!todo.status);
      return todo
    }))
  }
  deleteTodo(index:number){
    this.todos.update(todos=>todos.filter((todo,i)=>i!==index))
  }
  ngOnInit(){
    console.log(this.todos())
  }
}
