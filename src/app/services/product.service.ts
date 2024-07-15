import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  getAll() {
    return this.httpClient.get<any[]>('http://localhost:3000/product');
  }

  remove(id: number) {
    return this.httpClient.delete('http://localhost:3000/product/' + id);
  }

  add(value: any) {
    return this.httpClient.post('http://localhost:3000/product', value);
  }
}
