import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { RouterUrls } from '../shared/router-urls';
import { ReactiveFormsModule } from '@angular/forms';


const routes = [
  { path: RouterUrls.SignIn, component: SigninComponent },
  { path: RouterUrls.SignUp, component: SignupComponent },
];


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ]
})
export class AuthModule { }
