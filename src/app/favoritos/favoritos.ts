import { Component, input, signal } from '@angular/core';
import { Product } from '../models/productos';
import { count } from 'rxjs';

@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {
  favorito: Product[] = [];

  add = input<Product>();

  addFavorito() {
    const p = this.add()!;
    this.favorito.push(p);
  }

  count() {
    return this.favorito.length;
  }
}
