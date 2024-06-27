import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  public month : number;
  constructor() { 
    this.month = new Date().getMonth(); 
  }

  public nextMonth() : number{
    this.month++;
    // if(this._month>=12) this._month = this._month % 12;
    this.month %= 12;
    return this.month;
  }

  public previousMonth() : number{
    this.month--;
    while(this.month < 0){
      this.month +=12;
    }
    this.month %= 12;
    return this.month;
  }
}
