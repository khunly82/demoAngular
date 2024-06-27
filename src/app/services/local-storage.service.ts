import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getItem<T>(key : string) : T | null{
    let value = localStorage.getItem(key);
    if (!value) return null;
    return JSON.parse(value) as T;
  }

  public setItem<T>(key : string, value : T) : void{
    let jsonValue = JSON.stringify(value);
    localStorage.setItem(key,jsonValue);
  }

  public removeItem(key : string){
    localStorage.removeItem(key);
  }

  public clear() : void{
    localStorage.clear();
  }
}
