import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
})
export class LineChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    var config = {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: '#4c51bf',
            borderColor: '#4c51bf',
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: '#ed64a6',
            borderColor: '#ed64a6',
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
    let ctx: any = document.getElementById('line-chart') as HTMLCanvasElement;
    ctx = ctx.getContext('2d');
    const chart = new Chart(ctx, config as any);
  }
}
