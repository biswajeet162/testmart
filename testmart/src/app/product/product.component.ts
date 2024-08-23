import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../shared/model/cartItem.model';
import { Product } from '../shared/model/product.model';
import { CartService } from '../shared/services/cart.service';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // constructor(
  //   private route?: ActivatedRoute,
  //   private router?: Router,
  //   private productService?: ProductService,
  //   private cartService?: CartService
  // ) {}

  // id?: number;
  // productDetails?: Product;
  // finalPrice?: number;
  // ngOnInit(): void {
  //   if(this.route !== undefined){
  //     const cc = this.route.snapshot.queryParamMap.get('id');
  //     if(cc !== undefined && cc !== null){
  //       this.id = +cc;
  //     }
  //   }
    
  //   this.productDetails = this.productService?.getProductById(this.id);



  //   this.finalPrice = this.productDetails?.price
  //   const cc = (0.01 * (this.productDetails?.discountPercent !== undefined ? this.productDetails.discountPercent : 0) * (this.productDetails?.price !== undefined ? this.productDetails.price : 0));
  //   this.finalPrice = (this.finalPrice !== undefined ? this.finalPrice : 0) - cc;

  // }

  // addToCart(): void {
  //   const item: CartItem = {
  //     id: undefined,
  //     product: this.productDetails,
  //     quantity: 1,
  //     isSaved: false,
  //   };
  //   this.cartService?.addToCart(item);
  //   this.router?.navigate(['cart']);
  // }
}
