import { Component } from '@angular/core';
import { CalendarService } from '../../../services/calendar.service';

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

  constructor(private _calendarService : CalendarService){
    this._month = this._calendarService.month;
  }

  public nextMonth(){
    this._month = this._calendarService.nextMonth();
  }

  public previousMonth(){
    this._month = this._calendarService.previousMonth();
  }
}
