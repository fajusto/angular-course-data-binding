import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  /* inputs: ['courseName:name'] */
})
export class InputPropertyComponent implements OnInit {

 @Input('name') courseName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
