import { Component, computed, effect, input, output } from '@angular/core';
import { Product } from '../models/productos';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos {
  // signal de entrada
  product = input<Product>();

  // señal derivada
  priceWithTax = computed(() => this.product()!.price * 1.21);

  // output moderno
  selected = output<Product>();

  select() {
    this.selected.emit(this.product()!);
  }
}
