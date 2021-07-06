import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value: number = 0;

  @Output() valueChanged = new EventEmitter();

  @ViewChild('inputField')
  inputValueField!: ElementRef;

  increment() {
    this.inputValueField.nativeElement.value++;
    this.valueChanged.emit({newValue: this.value});
  }

  decrement() {
    this.inputValueField.nativeElement.value--;
    this.valueChanged.emit({newValue: this.value});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
