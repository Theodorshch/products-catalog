import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiUrls } from '../shared/api-urls';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  unprotectedUrls = [
    ApiUrls.Login,
    ApiUrls.Register,
    ApiUrls.Products
  ];

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.isUnprotectedUrl(request.url) || !this.isPostReview(request)) {
      return next.handle(request);
    } else {
      const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
      const headers = new HttpHeaders({})
        .set('accept', 'application/json')
        .set('Authorization', 'Token ' + token);
      const authReq = request.clone({headers});
      return next.handle(authReq);
    }

  }

  isUnprotectedUrl(url: string): boolean {
    return this.unprotectedUrls.includes(url);
  }

  isPostReview(request: HttpRequest<unknown>): boolean {
    return request.url.includes(ApiUrls.Reviews) && request.method === 'POST';
  }
}
