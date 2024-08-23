import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] | undefined;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe((data: Product[]) => {
      this.productList = data;
      this.productService.productList = data;
    },
      (error) => {
        throw new Error('Data not found');
      });
  }


  fun(){
    this.productService.getProducts()
  .subscribe(
    (data: Product[]) => {
      this.productList = data;
      this.productService.productList = data;
    },
    (error) => {
      console.error('Error occurred while fetching products:', error);
      throw new Error('Data not found');
    }
  );

  }

}
