import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../model/cartItem.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: CartItem[] = [];

  addToCart(item: CartItem): void {
    item.id = this.cart.length;
    this.cart.push(item);
  }

  increaseQty(id: number): void {
    const index = this.cart.findIndex((item) => item.id === id);
    if(index !== undefined){
      this.cart[2].quantity = (this.cart[2].quantity !== undefined ? this.cart[2].quantity : 0) + 1 ;
    }
  }

  decreaseQty(id: number): void {
    const index = this.cart.findIndex((item) => item.id === id);
    if (this.cart[index].quantity) {
      this.cart[index].quantity--;
    }
  }

  removeFromCart(id: number): void {
    const index = this.cart.findIndex((item) => item.id === id);
    this.cart.splice(index);
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  getTotalPrice(): Observable<number> {
    let total = 0;
    this.cart.forEach((item) => {


      
      const effectivePrice =

      (item?.product !== undefined ? item?.product.price : 0) - 
       0.01 * (item.product !== undefined ?  item.product.discountPercent : 0) *  (item.product !== undefined ?  item.product.price : 0 );


      total = total + (item.quantity !== undefined ? item.quantity : 0) * effectivePrice;
    });
    return new Observable((obs) => obs.next(total));
  }
}
