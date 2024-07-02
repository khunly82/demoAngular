import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading: WritableSignal<boolean> = signal(false);

  constructor() { }
}
