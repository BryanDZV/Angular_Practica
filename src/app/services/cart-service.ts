import { Product } from './../models/productos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[] = [
    {
      id: 1,
      title: 'Car',
      price: 2,
      created: new Date(),
      vendido: 0,
      quantity: 1,
      image: '',
    },
    {
      id: 1,
      title: 'Gorgeous Concrete Shoes',
      price: 2,
      created: new Date(),
      vendido: 0,
      quantity: 1,
      image: 'http://placeimg.com/640/480/food',
    },
    {
      id: 1,
      title: 'Handcrafted Soft Table',
      price: 2,
      created: new Date(),
      vendido: 0,
      quantity: 1,
      image: 'http://placeimg.com/640/480/food',
    },
    {
      id: 1,
      title: 'Refined Plastic Fish',
      price: 2,
      created: new Date(),
      vendido: 0,
      quantity: 1,
      image: 'http://placeimg.com/640/480/food',
    },
  ];

  add(p: Product) {
    this.products.push(p);
  }

  getCart() {
    return this.products;
  }
}
