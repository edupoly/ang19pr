import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems:any;
  constructor(public cs:CartService){
    this.cs.cartEvent.subscribe((allcartitems)=>{
      this.cartItems=allcartitems;
    })

  }
  decCartItemCount(item:any){
    this.cs.decItemCount(item);
  }
  incCartItemCount(item:any){
    this.cs.incItemCount(item);
  }
  getFinalPrice(){
    return this.cartItems.reduce((a:any,b:any)=>{return a+(b.price*b.count)},0)
  }
}
