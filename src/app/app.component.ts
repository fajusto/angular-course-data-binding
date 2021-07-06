import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  value: number = 50;

  deleteCycle: boolean = false;

  changeValue() {
    this.value++;
  }

  destroyCycle() {
    this.deleteCycle = true;
  }
}
