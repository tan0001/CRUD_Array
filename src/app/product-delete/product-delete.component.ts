import { Component } from '@angular/core';

import { IProduct } from '../IProduct';
import { PRODUCTS } from '../product_list';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  product_list: IProduct[] = [];
  product_id: number = 0;

  retrieveProduct() {
    this.product_list = [];
    for(let i=0; i<PRODUCTS.length; i++) {
      if(PRODUCTS[i].id == this.product_id) this.product_list.push(PRODUCTS[i]);
    }
  }

  deleteProduct() {
    for(let i=0; i<this.product_list.length; i++){
      for(let j=0; j<PRODUCTS.length; j++) {
        if(PRODUCTS[j].id == this.product_list[i].id) {
          PRODUCTS.splice(j,1);
          this.product_list.splice(i,1);
        }
      }
    }
  }
}
