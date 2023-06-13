import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisplayTextService {
  text: string = '';

  getText(): string {
    return this.text;
  }

  addToText(char: string): void {
    this.text = this.text + char;
  }

  constructor() {}
}
