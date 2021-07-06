import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPracticeComponent } from './input-practice.component';

describe('InputPracticeComponent', () => {
  let component: InputPracticeComponent;
  let fixture: ComponentFixture<InputPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
