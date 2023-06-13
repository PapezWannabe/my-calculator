import { Injectable, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisplayTextService {
  text: string = '';

  emit_function = new EventEmitter();
  subsVar?: Subscription;

  getText(): string {
    return this.text;
  }

  addToText(char: string): void {
    this.text = this.text + char;
    this.emit_function.emit();
  }

  operation(operat: string): void {
    if (operat == 'clear') {
      this.text = '';
    }
  }

  constructor() {}
}
