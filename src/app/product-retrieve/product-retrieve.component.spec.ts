import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRetrieveComponent } from './product-retrieve.component';

describe('ProductRetrieveComponent', () => {
  let component: ProductRetrieveComponent;
  let fixture: ComponentFixture<ProductRetrieveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductRetrieveComponent]
    });
    fixture = TestBed.createComponent(ProductRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
