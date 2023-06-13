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

  clear(): void {
    this.text = '';
    this.emit_function.emit();
  }

  operation(operat: string): void {
    if (operat == '=') {
      this.text = eval(this.text).toString();
      this.emit_function.emit();
    } else {
      this.text = this.text + operat;
      this.emit_function.emit();
    }
  }

  constructor() {}
}
