import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMeteo } from '../models/imeteo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(
    // service qui me permet de me connecter à l'api
    private httpClient: HttpClient
  ) { }

  getData(lat: number, lon: number): Observable<IMeteo> {
    const params = new HttpParams({ fromObject: {
      lat : lat,
      lon: lon,
      appid: '631d8910e6e2b10be6d70baee2b38510',
      units: 'metric',
      lang: 'fr'
    } })
    return this.httpClient.get<IMeteo>(
      'https://api.openweathermap.org/data/2.5/weather', {params}
    )
  }
}
