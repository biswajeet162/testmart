import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  
  { path: 'home', component: ProductListComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // or RouterModule.forChild(routes) in a feature module
  exports: [RouterModule]
})
export class AppRoutingModule {}
