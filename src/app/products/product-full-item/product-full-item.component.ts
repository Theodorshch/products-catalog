import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { Product, Review } from '../../shared/product';
import { ProductsService } from '../../services/products.service';
import { AuthService} from '../../services/auth.service';
import { RouterUrls } from '../../shared/router-urls';

@Component({
  selector: 'app-product-full-item',
  templateUrl: './product-full-item.component.html',
  styleUrls: ['./product-full-item.component.scss']
})
export class ProductFullItemComponent implements OnInit {

  fullProductInfo$: Observable<Product>;
  reviews$: Observable<Review[]>;
  productId: number;
  isUserLogged: boolean;
  RouterUrls = RouterUrls;

  reviewForm = this.formBuilder.group({
    rate: [5],
    text: ['', [Validators.required]]
  });


  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,
              private authService: AuthService,
              private formBuilder: FormBuilder) {
    this.activatedRoute.paramMap
      .pipe(
        tap(params => {
          this.productId = +params.get('id');
          this.fullProductInfo$ = this.productsService.getProduct(+params.get('id'));
          this.reviews$ = this.productsService.getReviews(+params.get('id'));
        })
      ).subscribe();
  }

  ngOnInit(): void {
    this.isUserLogged = this.authService.userStatus;
  }

  get rate(): FormControl {
    return this.reviewForm.get('rate') as FormControl;
  }

  sendReview(productId: number): void {
    this.productsService.postReview(productId, this.reviewForm.value)
      .subscribe(
        () => {
          this.reviews$ = this.productsService.getReviews(this.productId);
          this.reviewForm.reset();
        }
      );
  }
}
