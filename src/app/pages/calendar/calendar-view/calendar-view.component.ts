import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../../services/calendar.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrl: './calendar-view.component.scss'
})
export class CalendarViewComponent implements OnInit {

  private _month : number;

  constructor(private _calendarService : CalendarService){
    this._month = this._calendarService.month;
  }

  ngOnInit(): void {
    this.getCalendarMonth();
  }

  public getCalendarMonth(){
    const tbody = document.querySelector('#calendar');
    if(tbody) tbody.innerHTML = "";
    const year = new Date().getFullYear();
    let firstDay = new Date(year,this._month, 1).getDay();
    let numberDays : number;
    switch(this._month){
      case 0:
      case 2:
      case 4:
      case 6:
      case 7:
      case 9:
      case 11 :
        numberDays = 31;
        break;
      case 1:
        if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
          numberDays =29;
        }
        else {
          numberDays = 28;
        }
        break;
      default :
        numberDays = 30;
        break;
    }
    let week = 0;
    let cell = 0;
    for (let j = 1; j <= numberDays; j++) {
      let trWeek;
      if(cell % 7 == 0){
        trWeek = document.createElement('tr')
        tbody?.appendChild(trWeek);
        week++;
      }
      else{
        trWeek = tbody?.children[week-1];
      }
      const tdDay = document.createElement('td');
      trWeek?.appendChild(tdDay);
      if(week == 1 && cell < firstDay){
        j--;
      }
      else{
        tdDay.textContent = j.toString();
      }
      cell++;
    }
  }

  public refresh() : void{
    this._month = this._calendarService.month;
    this.getCalendarMonth();
  }

}
