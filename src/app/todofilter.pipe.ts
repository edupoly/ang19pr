import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todofilter'
})
export class TodofilterPipe implements PipeTransform {

  transform(value: any[], args: string): any[] {
    if(args==='all'){
      return value
    }
    if(args==='done'){
      return value.filter(todo=>todo.status);
    }
    if(args==='notdone'){
      return value.filter(todo=>!todo.status);
    }
    return value
  }

}
