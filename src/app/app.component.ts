import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kcalcus';
  total = 0;

  add() {
    const input = (<HTMLInputElement>document.getElementById("input")).value;
    this.total += parseInt(input);
  }
}