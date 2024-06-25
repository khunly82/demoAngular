import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  
  @Input()
  value: number = 1;
  
  valueChange = output<number>();

  incrementer() {
    if(this.value >= 9) {
      return;
    }
    this.value++;
    this.valueChange.emit(this.value);
  }
  decrementer() {
    if(this.value <= 1) {
      return;
    }
    this.value--;
    this.valueChange.emit(this.value);
  }
}
