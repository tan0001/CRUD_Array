import { Component,EventEmitter,Output } from '@angular/core';
/*import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';*/

import { PRODUCTS } from '../product_list';
import { IProduct } from '../IProduct';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products = PRODUCTS;

  displaySelect = false;
  displayAdd = false;
  displayUpdate = false;
  selectedProduct?: IProduct;

  onSelectID() {
    this.displaySelect = !this.displaySelect;
  }

  onAddNew() {
    this.displayAdd = !this.displayAdd;
  }

  onDelete(p: IProduct) {
    this.selectedProduct = p;
    if(confirm("Delete Product "+p.id+" : "+p.name+" "+p.price+"Rs ?")) {
      for (let j = 0; j < PRODUCTS.length; j++) {
        if (PRODUCTS[j].id == p.id) {
          PRODUCTS.splice(j, 1);
        }
      }
    }
  }
/*
  genMsg() : string{
    if(this.selectedProduct)
    this.msg = 'Product '+this.selectedProduct.id+" : "+this.selectedProduct.name+" "+this.selectedProduct.price+' Rs Updated!';
    return this.msg;
  }

  showSuccess() {
    if (this.selectedProduct) {
      this.toastr.success(this.genMsg());
    }
  }*/
}
