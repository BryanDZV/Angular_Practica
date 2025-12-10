import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSombra]',
  standalone: true,
})
export class Sombra {
  constructor() {}

  @HostBinding('style.background')
  background = '';
  @HostListener('mouseenter')
  onMouseEnter() {
    this.background = 'green';
  }
  @HostListener('click')
  click() {
    console.log('Escuchado desde hostListener---->>>hiciste click ');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.background = '';
  }
}
