import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true,
})
export class ShortenPipe implements PipeTransform {
  transform(text: any): string {
    if (!text) {
      return 'no hay texto';
    } else {
      const t = text.toUpperCase();
      return t;
    }
  }
}
