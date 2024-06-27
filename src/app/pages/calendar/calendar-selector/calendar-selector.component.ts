import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-selector',
  templateUrl: './calendar-selector.component.html',
  styleUrl: './calendar-selector.component.scss'
})
export class CalendarSelectorComponent {

  private _month : number;
  private _monthNames : string[] = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'];

  public get ActualMonth() : string {
      return this._monthNames[this._month];
  }

  constructor(){
    this._month = new Date().getMonth();
  }

  public nextMonth(){
    this._month++;
    // if(this._month>=12) this._month = this._month % 12;
    this._month %= 12;
  }

  public previousMonth(){
    this._month--;
    while(this._month < 0){
      this._month +=12;
    }
    this._month %= 12;
  }
}
