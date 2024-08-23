import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  productList: Product[] | undefined;

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../assets/productlist.json', { observe: 'body'});
  }

  getProductById(id?: number): Product | undefined {
    return this.productList?.find((item) => item.id === id);
  }
}
