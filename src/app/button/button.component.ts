import { Component, Input } from '@angular/core';
import { DisplayTextService } from '../display-text.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  constructor(private displayTextService: DisplayTextService) {}

  @Input() num = 0;

  addNum(): void {
    this.displayTextService.addToText(this.num.toString());
  }
}
