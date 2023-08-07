import { Component } from '@angular/core';

import { PRODUCTS } from '../product_list';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = PRODUCTS;

  displayAll = false;
  displayAdd = false;
  displayUpdate = false;
  displayDelete = false;
  displaySelect = false;

  onViewAll() {
    this.displayAll = !this.displayAll;
  }

  onAddNew() {
    this.displayAdd = !this.displayAdd;
  }

  onUpdate() {
    this.displayUpdate = !this.displayUpdate;
  }

  onDelete() {
    this.displayDelete = !this.displayDelete;
  }

  onSelectID() {
    this.displaySelect = !this.displaySelect;
  }
}
