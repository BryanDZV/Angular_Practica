import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Product } from '../models/productos';
import { General } from '../general/general';
import { CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { ShortenPipe } from '../pipes/shorten-pipe';

@Component({
  selector: 'app-ciclos',
  imports: [CurrencyPipe, DatePipe, PercentPipe, ShortenPipe], //pipes y pesonalizdos
  templateUrl: './ciclos.html',
  styleUrl: './ciclos.css',
})
export class Ciclos implements OnInit, OnChanges, AfterViewInit {
  producto = input<Product | null>();
  ngOnInit(): void {
    console.log('oninit ->componente listo');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('input detectado cambio:,', changes);
  }
  //usams referencias a un temple con # teroria , esto me permite usar @vieChild va por referencias
  @ViewChild('box') box!: ElementRef;

  ngAfterViewInit(): void {
    console.log('AfterViewInit -> html renderizado y sus componente hijos');
    console.log(this.box?.nativeElement.offsetWidth);
  }
}
