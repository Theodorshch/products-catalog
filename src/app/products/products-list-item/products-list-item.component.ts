import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../../shared/product';

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})
export class ProductsListItemComponent implements OnInit {

  @Input() productInfo: Product;

  constructor() { }

  ngOnInit(): void {
  }

  getImageBg(image: string): string {
    return `url('/assets/${image}')`;
  }

}
