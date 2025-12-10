import { Product } from './../models/productos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[] = [];

  add(p: Product) {
    this.products.push(p);
  }

  getCart() {
    return this.products;
  }
}
