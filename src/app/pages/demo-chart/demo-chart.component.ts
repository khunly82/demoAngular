import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-chart',
  templateUrl: './demo-chart.component.html',
  styleUrl: './demo-chart.component.scss'
})
export class DemoChartComponent {
  data: any = {
    labels: ['Janvier', 'Fevrier', 'Mars'],
    datasets: [{
      label: 'Coca',
      data: [1,42,3]
    },{
      label: 'Fanta',
      data: [17,11,14]
    }]
  }
}
