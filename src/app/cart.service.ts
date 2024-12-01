import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cartItems:any[]=[];
  cartEvent = new BehaviorSubject<any>([]);
  addItemToCart(item:any){
    item.count=1;
    this.cartItems.push(item);
    this.cartEvent.next(this.cartItems)
  }
  incItemCount(item:any){
    this.cartItems=this.cartItems.map((citem)=>{
      if(item.id===citem.id){
        citem.count++;
      }
      return citem;
    })
    this.cartEvent.next(this.cartItems)
  }
  decItemCount(item:any){
    this.cartItems=this.cartItems.map((citem)=>{
      if(item.id===citem.id){
        citem.count--;
      }
      return citem;
    })
    this.cartEvent.next(this.cartItems)
  }
}
