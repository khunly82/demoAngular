import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: WritableSignal<string|null> = signal(localStorage.getItem('token'));

  constructor(
    private httpClient: HttpClient
  ) { }

  login(form: any) {
    return this.httpClient.post<any>('http://localhost:3000/auth/login', form)
      .pipe(tap((data) => {
        this.token.set(data.token);
        localStorage.setItem('token', data.token);
      }));
  }

  logout() {
    this.token.set(null);
    localStorage.removeItem('token');
  }
}
