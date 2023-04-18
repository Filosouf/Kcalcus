import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'kcalcus';
  
  //store total for later use
  public total: number = 0;
  
  private input: HTMLInputElement;
  private header: HTMLElement;

  constructor() {
    this.input = document.getElementById('calories') as HTMLInputElement;
    this.header = document.getElementById('Total') as HTMLElement;
  }

  onSave(): void {
  const inputValue = Number(this.input.value);

  // check if the input is a valid number
  if (isNaN(inputValue)) {
    alert('Please enter a valid number!');
    return;
  }

  // if total is 0, set total to input value, else add input value to total
  if (this.total === 0) {
    this.total = inputValue;
  } else {
    this.total += inputValue;
  }

  // replace header total with new total
  this.header.innerText = this.total.toString();
}


    // replace header total with new total
    this.header.innerText = this.total.toString();
  }
}


}
