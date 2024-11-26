import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
        children:[
            
        ]
    },
    {
        path:"about/:id",
        component:ProductdetailsComponent
    }
];
