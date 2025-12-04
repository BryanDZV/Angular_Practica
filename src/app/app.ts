import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { General } from './general/general';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, General],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular_Practica');
}
