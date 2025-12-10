import { Component, effect, input, signal } from '@angular/core';
import { ListaProductos } from '../lista-productos/lista-productos';

import { single } from 'rxjs';
import { Product } from '../models/productos';
import { Buscador } from '../buscador/buscador';
import { Ciclos } from '../ciclos/ciclos';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [ListaProductos, Buscador, Ciclos],
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
    { id: 1, title: 'Teclado', price: 5, created: new Date(), vendido: 0.25 },
    { id: 2, title: 'Ratón', price: 15, created: new Date(), vendido: 0.42 },
    { id: 3, title: 'Monitor', price: 150, created: new Date(), vendido: 0.15 },
  ]);
  selected = signal<Product | null>(null);
  onSelect(product: Product) {
    this.selected.set(product);
  }
}
