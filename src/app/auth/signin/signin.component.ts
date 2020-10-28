import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { RouterUrls } from '../../shared/router-urls';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  RouterUrls = RouterUrls;
  error: string;

  authForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authService.loginUser(this.authForm.value)
      .subscribe(
        () => {
          this.router.navigate([RouterUrls.Products, RouterUrls.ProductsAll]);
        },
        error => {
          this.error = error;
        }
      );
  }
}
