import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiUrls } from '../shared/api-urls';
import { PostReview, Product, Review } from '../shared/product';
import { AuthResponse } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  registerUser(credentials): Observable<AuthResponse> {
    const url = ApiUrls.Register;
    return this.http.post<AuthResponse>(url, credentials);
  }

  loginUser(credentials): Observable<AuthResponse> {
    const url = ApiUrls.Login;
    return this.http.post<AuthResponse>(url, credentials);
  }

  getProducts(): Observable<Product[]> {
    const url = ApiUrls.Products;
    return this.http.get<Product[]>(url);
  }

  getReviews(productId: number): Observable<Review[]> {
    const url = `${ApiUrls.Reviews}${productId}`;
    return this.http.get<Review[]>(url);
  }

  postReview(productId: number, review: any): Observable<PostReview> {
    const url = `${ApiUrls.Reviews}${productId}`;
    return this.http.post<PostReview>(url, review);
  }
}
