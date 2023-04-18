import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kcalcus';
  
  //store total for later use
  total = 0;

  onSave(): string {

    const input = document.getElementById('calories') as HTMLInputElement;
    const header = document.getElementById('Total') as HTMLElement;
    

    // if total is 0, set total to input value, else add input value to total
    if (this.total === 0) {
      this.total = parseInt(input.value);
    }
    else {
      this.total += parseInt(input.value);
    }

    // replace header total with new total
    header.innerText = this.total;
  }

}
