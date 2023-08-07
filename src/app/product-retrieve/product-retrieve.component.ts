import { Component } from '@angular/core';

import { IProduct } from '../IProduct';
import { PRODUCTS } from '../product_list';

@Component({
  selector: 'app-product-retrieve',
  templateUrl: './product-retrieve.component.html',
  styleUrls: ['./product-retrieve.component.css']
})
export class ProductRetrieveComponent {
  product_list: IProduct[] = [];
  product_id: number = 0;

  retrieveProduct() {
    this.product_list = [];
    for(let i=0; i<PRODUCTS.length; i++) {
      if(PRODUCTS[i].id == this.product_id) this.product_list.push(PRODUCTS[i]);
    }
  }
}