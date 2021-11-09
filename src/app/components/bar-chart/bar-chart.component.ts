import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @Input() labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  @Input() data = [30, 78, 56, 34, 100, 45, 13];
  @Input() data2 = [30, 78, 56, 34, 100, 45, 13];
  @Input() data3 = [30, 78, 56, 34, 100, 45, 13];
  @Input() data4 = [30, 78, 56, 34, 100, 45, 13];

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.data);
    const config = {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Confirmed',
            backgroundColor: '#f59e0b',
            borderColor: '#f59e0b',
            data: this.data,
            fill: false,
            barThickness: 8,
          },
          {
            label: 'Deaths',
            backgroundColor: '#d55',
            borderColor: '#d55',
            data: this.data2,
            fill: false,
            barThickness: 8,
          },
          {
            label: 'Recovered',
            backgroundColor: '#0a8',
            borderColor: '#0a8',
            data: this.data3,
            fill: false,
            barThickness: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
    let ctx: any = document.getElementById('bar-chart');
    ctx = ctx.getContext('2d');
    const chart = new Chart(ctx, config as any);
  }
}
