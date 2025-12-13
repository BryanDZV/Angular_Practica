import { Component, effect, inject, input, signal } from '@angular/core';
import { ListaProductos } from '../lista-productos/lista-productos';

import { single } from 'rxjs';
import { Product } from '../models/productos';
import { Buscador } from '../buscador/buscador';
import { Ciclos } from '../ciclos/ciclos';
import { SombraConDirectiva } from '../sombra-con-directiva/sombra-con-directiva';
import { Sombra } from '../directives/sombra';
import { ProductService } from '../services/product-service';
import { BotonAdd } from '../boton-add/boton-add';
import { Favoritos } from '../favoritos/favoritos';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [ListaProductos, Buscador, Ciclos, SombraConDirectiva, Sombra, BotonAdd, Favoritos],
  templateUrl: './general.html',
  styleUrl: './general.css',
})
export class General {
  constructor() {
    effect(() => {
      console.log('Seleccionado:', this.selected());
    });
  }
  // 1️⃣ Signal con array de productos
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Teclado',
      price: 5,
      created: new Date(),
      vendido: 0.25,
      quantity: 1,
      image: 'http://placeimg.com/640/480/food',
    },
    {
      id: 2,
      title: 'Ratón',
      price: 15,
      created: new Date(),
      vendido: 0.42,
      quantity: 1,
      image: 'http://placeimg.com/640/480/food',
    },
    {
      id: 3,
      title: 'Monitor',
      price: 150,
      created: new Date(),
      vendido: 0.15,
      quantity: 1,
      image: 'http://placeimg.com/640/480/food',
    },
  ]);
  //señal para guardar el select
  selected = signal<Product | null>(null);
  onSelect(product: Product) {
    this.selected.set(product);
  }

  //meto mas producto con servicio e injecion moderina
  private productService = inject(ProductService); //ijecion del servicio de forma moderna

  productsOfService = this.productService.getPorducto();
}
