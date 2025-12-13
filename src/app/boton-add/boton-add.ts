import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart-service';
import { count } from 'rxjs';

@Component({
  selector: 'app-boton-add',
  imports: [],
  templateUrl: './boton-add.html',
  styleUrl: './boton-add.css',
})
export class BotonAdd {
  cartService = inject(CartService);

  getCount() {
    console.log(this.cartService.getCart.length);

    return this.cartService.getCart().length;
  }
}
