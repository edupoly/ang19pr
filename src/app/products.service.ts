import { Injectable } from '@angular/core';
import {items} from './products.json'
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  cartItems:any[] = [];
  cartItemEvent$=new BehaviorSubject<any[]>([]);
  getAllProducts(){
    return items;
  }
  addToCart(item:any){
    this.cartItems.push({...item,count:1})
    this.cartItemEvent$.next(this.cartItems);
  }
  incItemCount(item:any){
    this.cartItems = this.cartItems.map((cartItem)=>{
      if(cartItem.id===item.id){
        cartItem.count++;
      }
      return cartItem;
    })
    this.cartItemEvent$.next(this.cartItems);
  }
  decItemCount(item:any){
    if(item.count==1){
      this.cartItems = this.cartItems.filter((cartItem)=>{
        if(cartItem.id!==item.id){
          return true
        }
        return false
      })
    }
    this.cartItems = this.cartItems.map((cartItem)=>{
      if(cartItem.id===item.id){
        cartItem.count--;
      }
      return cartItem;
    })
    this.cartItemEvent$.next(this.cartItems);
  }
  isItemInCart(item:any){
    return this.cartItems.some(cartItem=>item.id===cartItem.id)
  }
  getProductDetails(id:any){
    console.log("id::",id)
    return items.find(item=>{
      console.log("item::",item)
      return item.id===id
    })

  }
}
