import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //lo hace accesible desde toda la app
})
export class ProductService {
  getPorducto() {
    return [
      { id: 1, name: 'Teclado', price: 30 },
      { id: 2, name: 'Ratón', price: 15 },
      { id: 3, name: 'Monitor', price: 200 },
    ];
  }
}
