import { Component, inject, signal } from '@angular/core';
import { Characters } from '../models/characters';
import { CharactersService } from '../services/characters-service';

@Component({
  selector: 'app-characters-page',
  imports: [],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.css',
})
export class CharactersPage {
  characterService = inject(CharactersService);
  characters = signal<Characters[]>([]);
  loading = signal<boolean>(false);
}
