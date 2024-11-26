import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-home',
  imports: [ProductsComponent,CartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
