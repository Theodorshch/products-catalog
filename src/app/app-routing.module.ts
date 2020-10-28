import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RouterUrls } from './shared/router-urls';


const routes = [
  { path: RouterUrls.Auth,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: RouterUrls.Products,
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: '', pathMatch: 'full', redirectTo: RouterUrls.Products },
  { path: '**', redirectTo: RouterUrls.Products }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
