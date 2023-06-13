import { Component } from '@angular/core';
import { DisplayTextService } from '../display-text.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  constructor(private displayTextService: DisplayTextService) {}

  text: string = '';

  ngOnInit(): void {
    this.getText();
  }

  getText(): void {
    this.text = this.displayTextService.getText();
  }
}
