import { Component, Signal } from '@angular/core';
import { MeteoService } from '../../services/meteo.service';
import { IMeteo } from '../../models/imeteo';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.scss'
})
export class MeteoComponent {

  donneeMeteo: Signal<IMeteo>

  constructor(private meteoService: MeteoService) {
    this.donneeMeteo = <Signal<IMeteo>>toSignal(
      meteoService.getData(33.86, 151.02)
    )
  }
}
