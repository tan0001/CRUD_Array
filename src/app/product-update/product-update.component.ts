import { Component, Input } from '@angular/core';

import { IProduct } from '../IProduct';
import { PRODUCTS } from '../product_list';

import { Location } from '@angular/common';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent {
  @Input() product?: IProduct;

  constructor(
    private location: Location
  ) { }

  retrieveProduct() {
    for (let i = 0; i < PRODUCTS.length; i++) {
      if (this.product) {
        if (PRODUCTS[i].id == this.product.id) {
          PRODUCTS.splice(i, 1);
        }
      }
    }
  }

  updateProduct() {
    if (this.product) {
      PRODUCTS.push(this.product);
    }
    this.location.back();
  }
}