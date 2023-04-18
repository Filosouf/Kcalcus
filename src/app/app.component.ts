import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'kcalcus';
  
  //store total for later use
  public total = 0;

  onSave(): string {

    let input = document.getElementById('calories') as HTMLInputElement;
    let header = document.getElementById('Total') as HTMLElement;
    

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
