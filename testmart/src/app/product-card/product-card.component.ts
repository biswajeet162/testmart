import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../shared/model/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() productDetails: Product | undefined;
  finalPrice: number | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("df")
  //   this.finalPrice = this.productDetails?.price


  //   const cc = (0.01 * (this.productDetails?.discountPercent !== undefined ? this.productDetails.discountPercent : 0) * (this.productDetails?.price !== undefined ? this.productDetails.price : 0));
  
  //   this.finalPrice = (this.finalPrice !== undefined ? this.finalPrice : 0) - cc;
  // }

  // productCardClicked(): void {
  console.log("hello")
  //   this.router.navigate(['product'], { queryParams: { id: this.productDetails?.id } });
  }
}
