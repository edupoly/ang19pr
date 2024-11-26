import { Component,input, signal } from '@angular/core';
import { ProductsService } from '../products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product = input<any>()
  isInCart = signal<any>(false);
  constructor(public ps:ProductsService){}
  addToCart(item:any){
    this.ps.addToCart(item)
    this.isInCart.update(()=>true);
  }
  
}
