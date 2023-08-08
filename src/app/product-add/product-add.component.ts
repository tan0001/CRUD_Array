import { Component } from '@angular/core';

import { IProduct } from '../IProduct';
import { PRODUCTS } from '../product_list';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  constructor(
    private location: Location
  ) {}

  msg: string = '';

  prod : IProduct = {
    id: 0,
    name: "",
    price: 0
  };

  addProductForm = new FormGroup({
    product_id: new FormControl(0,Validators.required),
    product_name: new FormControl('',Validators.required),
    product_price: new FormControl(0,Validators.required)
  });

  addProduct() {
    this.msg = '';
    this.prod.id = <number>(this.addProductForm.controls.product_id.value);
    this.prod.name = <string>(this.addProductForm.controls.product_name.value);
    this.prod.price = <number>(this.addProductForm.controls.product_price.value);
    PRODUCTS.push(this.prod);
    this.msg = "Product added successfully!"
  }

  goBack(): void {
    this.location.back();
  }
}
