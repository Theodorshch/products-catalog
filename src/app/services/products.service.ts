import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Product, Review } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }

  getProducts(): Observable<Product[]> {
    return this.apiService.getProducts();
  }

  getProduct(productId: number): Observable<Product> {
    return this.getProducts()
      .pipe(
        // filtering products because normally should be endpoint to get one product by id.
        map(value => value.filter(item => item.id === productId)[0])
      );
  }

  getReviews(productId: number): Observable<Review[]> {
    return this.apiService.getReviews(productId);
  }

  postReview(productId: number, reviewFormValue): Observable<boolean> {
    return this.apiService.postReview(productId, reviewFormValue)
      .pipe(
        map(res => res.success)
      );
  }
}
