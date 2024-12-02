import { Component } from '@angular/core';
import {items} from '../food.json';
import { ProductComponent } from '../product/product.component';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-products',
  imports: [ProductComponent,CartComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  items=items;
  
}
