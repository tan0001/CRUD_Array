import { Component } from '@angular/core';

import { IProduct } from '../IProduct';
import { PRODUCTS } from '../product_list';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
  product_list: IProduct[] = [];
  product_id: number = 0;

  retrieveProduct() {
    this.product_list = [];
    for(let i=0; i<PRODUCTS.length; i++) {
      if(PRODUCTS[i].id == this.product_id){
        this.product_list.push(PRODUCTS[i]);
        PRODUCTS.splice(i,1);
      }
    }
  }

  updateProduct() {
    for(let i=0; i<this.product_list.length;i++) {
      PRODUCTS.push(this.product_list[i]);
    }
  }
}