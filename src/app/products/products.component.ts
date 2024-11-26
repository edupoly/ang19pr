import { Component,signal } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products=signal<any>([]);
  constructor(public ps:ProductsService){
  }
  ngOnInit(){
    this.products.update((products)=>{return [...this.ps.getAllProducts()]})
  }
}
