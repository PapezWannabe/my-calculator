import { Component, Input } from '@angular/core';
import { DisplayTextService } from '../display-text.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  constructor(private displayTextService: DisplayTextService) {}

  @Input() operat?: any;

  operation(): void {
    if (typeof this.operat === 'number') {
      this.displayTextService.addToText(this.operat.toString());
    } else {
      if (this.operat == 'C') {
        this.displayTextService.clear();
      } else {
        this.displayTextService.operation(this.operat);
      }
    }
  }
}
