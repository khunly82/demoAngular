import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class MarvelCharactersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getDatas(page: number = 1) {
    const params = new HttpParams({
      fromObject: {
        ts: 42,
        apikey: '8702358c9ac01cb4cf010b79a2d28c5a',
        hash: new Md5()
          .appendStr('42')
          .appendStr('b31357185e193dce9835156cc67ea65a3d430d66')
          .appendStr('8702358c9ac01cb4cf010b79a2d28c5a').end()?.toString() ?? '',
        offset: (page - 1) * 20
      }
    })
    return this.httpClient.get<any>('https://gateway.marvel.com/v1/public/characters', {params})
  }
}
