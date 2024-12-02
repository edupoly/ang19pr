import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [
    {
        path:"",
        component:ProductsComponent
    },
    {
        path:":id",
        component:ProductdetailsComponent
    }

];
