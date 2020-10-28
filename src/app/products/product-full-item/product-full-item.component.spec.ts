import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFullItemComponent } from './product-full-item.component';

describe('ProductFullItemComponent', () => {
  let component: ProductFullItemComponent;
  let fixture: ComponentFixture<ProductFullItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFullItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFullItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
