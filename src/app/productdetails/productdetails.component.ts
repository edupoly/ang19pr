import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-productdetails',
  imports: [CurrencyPipe],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  product:any;
  constructor(public ar:ActivatedRoute,public ps:ProductsService){}
  productDetails:any;
  ngOnInit(){
    this.ar.params.subscribe((params)=>{
      this.product=this.ps.getProductDetails(params['id']);
    })
  }
}
