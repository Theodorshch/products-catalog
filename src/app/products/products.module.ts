import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductFullItemComponent } from './product-full-item/product-full-item.component';
import { ProductsListItemComponent } from './products-list-item/products-list-item.component';
import { RouterUrls } from '../shared/router-urls';
import { ReactiveFormsModule } from '@angular/forms';

const routes = [
  { path: RouterUrls.ProductsAll, component: ProductsListComponent },
  { path: ':id', component: ProductFullItemComponent },
  { path: '', pathMatch: 'full', redirectTo: RouterUrls.ProductsAll },
];

@NgModule({
  declarations: [ProductsListComponent, ProductsListItemComponent, ProductFullItemComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ]
})
export class ProductsModule { }
