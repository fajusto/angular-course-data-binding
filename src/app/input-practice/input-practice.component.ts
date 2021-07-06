import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-practice',
  templateUrl: './input-practice.component.html',
  styleUrls: ['./input-practice.component.css']
})
export class InputPracticeComponent implements OnInit {

  @Input('movie') movieName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
