import { Component, OnInit } from '@angular/core';
import { DisplayTextService } from '../display-text.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  constructor(private displayTextService: DisplayTextService) {}

  text: string = '';

  ngOnInit(): void {
    this.getText();
    if (this.displayTextService.subsVar == undefined) {
      this.displayTextService.subsVar =
        this.displayTextService.emit_function.subscribe(() => {
          this.getText();
        });
    }
  }

  getText(): void {
    this.text = this.displayTextService.getText();
  }
}
