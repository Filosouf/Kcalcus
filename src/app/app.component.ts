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
  
  private input: number = document.getElementById('calories') as HTMLInputElement;
  private header: string = document.getElementById('Total') as HTMLElement;

  onSave(): number {
    // if total is 0, set total to input value, else add input value to total
    if (this.total === 0) {
      this.total = input.value;
    }
    else {
      this.total += input.value;
    }

    // replace header total with new total
    header.innerText = this.total;
  }

}
