import { Component, signal, AfterViewInit, OnInit } from '@angular/core';
import { fromEvent, debounceTime, map, tap, filter } from 'rxjs';

@Component({
  selector: 'app-buscador',
  standalone: true,
  templateUrl: './buscador.html',
  styleUrl: './buscador.css',
})
export class Buscador implements OnInit, AfterViewInit {
  count = signal(0);
  vaciado = signal('');

  // ✔ Aquí SÍ van cosas de lógica
  ngOnInit() {
    // ❌ NO deberías acceder al DOM aquí
    // En su lugar: usa signals, servicios, lógica general
    this.count.set(0);
  }

  // ✔ Aquí SÍ puedes acceder al DOM
  ngAfterViewInit() {
    // CLICK DEL BOTÓN (DOM → CORRECTO AQUÍ)
    const btn = document.getElementById('my-btn')!;
    fromEvent(btn, 'click')
      .pipe(
        debounceTime(200),
        map(() => 1),
        tap(() => console.log('click procesado'))
      )
      .subscribe(() => {
        this.count.update((c) => c + 1);
      });

    // BUSCADOR (DOM → CORRECTO AQUÍ)
    const buscador = document.querySelector('.busca')!;
    fromEvent(buscador, 'keyup')
      .pipe(
        debounceTime(400),
        map((e: any) => e.target.value),
        filter((txt: string) => txt.length >= 3)
      )
      .subscribe((value) => {
        this.vaciado.set(value);
        console.log('Valor filtrado:', value);
      });
  }
}
