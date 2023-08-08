import { Component, Input } from '@angular/core';

import { IProduct } from '../IProduct';
import { PRODUCTS } from '../product_list';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  @Input() product?: IProduct;

  constructor(
    private location: Location
  ) { }

  deleteProduct() {
    if (this.product)
      for (let j = 0; j < PRODUCTS.length; j++) {
        if (PRODUCTS[j].id == this.product.id) {
          PRODUCTS.splice(j, 1);
        }
      }
    this.location.back();
  }
}
