import { Component, Signal } from '@angular/core';
import { MeteoService } from '../../services/meteo.service';
import { IMeteo } from '../../models/imeteo';
import { toSignal } from '@angular/core/rxjs-interop';
import { forkJoin, map, tap } from 'rxjs';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.scss'
})
export class MeteoComponent {

  donneeMeteo: Signal<IMeteo>

  data: Signal<any>

  constructor(private meteoService: MeteoService) {
    this.donneeMeteo = <Signal<IMeteo>>toSignal(
      meteoService.getData(48.87, 2.33)
    )

    // 37.7167, -2.14

    this.data = <Signal<any>>toSignal(
      forkJoin([
        meteoService.getPrevision(48.87, 2.33),
        meteoService.getPrevision(50.85, 4.35)
      ]).pipe(map(([result1, result2]) => {
          const labels = [];
          const data1 = [];
          const data2 = [];
          for(let i = 0; i < 5; i++) {
            const prev1 = result1['fcst_day_' + i];
            const prev2 = result2['fcst_day_' + i];
            labels.push(...Object.keys(prev1.hourly_data).map(h => {
              return prev1.date + ' ' + h
            }))

            data1.push(...Object.values(prev1.hourly_data).map((v: any) => {
              return v.TMP2m
            }));

            data2.push(...Object.values(prev2.hourly_data).map((v: any) => {
              return v.TMP2m
            }));
          }

          return { labels, datasets: [
            { data: data1 },
            { data: data2 }
          ] }
        }))
        
    )
  }
}
