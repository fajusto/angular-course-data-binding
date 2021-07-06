import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://izimenu.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://lorempixel.com/400/200';
  actualValue: string = '';
  savedValue: string = '';

  isMouseOver: boolean = false;

  name: string = 'abc';

  courseName: string = 'Angular';

  movieName: string = 'Joker';

  initialValue: number = 20;

  person: any = {
    name: 'Augusto',
    age: 25
  }

  getImagem(properties: string){
    return 'https://lorempixel.com/' + properties;
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  clickedButton() {
    alert('Button clicked!');
  }

  onKeyUp(event: any) {

    this.actualValue = event.target.value;
  }

  saveValue(value: any) {
    this.savedValue = value.value;
  }

  onMouseOverAndOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onValueChanged(event: any) {
    console.log(event.newValue);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
