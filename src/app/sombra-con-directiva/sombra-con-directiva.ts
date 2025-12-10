import { Component } from '@angular/core';
import { Sombra } from '../directives/sombra';

@Component({
  selector: 'app-sombra-con-directiva',
  imports: [Sombra],
  templateUrl: './sombra-con-directiva.html',
  styleUrl: './sombra-con-directiva.css',
})
export class SombraConDirectiva {}
