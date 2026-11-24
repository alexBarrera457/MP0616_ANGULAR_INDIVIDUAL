import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  template: `<div [contentEditable]="isEditable"></div>`,
})
export class App {
  isEditable = true;
}
