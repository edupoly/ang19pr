import { Component, input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  item=input<any>();
  constructor(public cs:CartService){}
  addToCart(item:any){
    this.cs.addItemToCart(item);
  }
}
