import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  product:any=null;
  constructor(public ar:ActivatedRoute,public cs:CartService){
    this.ar.params.subscribe(({id})=>{
      this.product=this.cs.getItemDetailsById(id)
    })
  }
}
