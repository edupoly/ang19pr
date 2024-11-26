import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe,UpperCasePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems$:any;
  constructor(public ps:ProductsService){
    this.ps.cartItemEvent$.subscribe((items)=>{
      this.cartItems$=items;
    })
  }
  incItemCount(item:any){
    this.ps.incItemCount(item)
  }
  decItemCount(item:any){
    this.ps.decItemCount(item)
  }

  get finalPrice(){
    console.log(this.cartItems$)
    // return 1
    if(this.cartItems$.length){
      return this.cartItems$?.reduce((a:any,b:any)=>{return a+b.price*b.count},0)
    }
    else{
      return 0
    }
  }
}
