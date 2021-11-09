import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CovidDataService } from '../covid-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  date = new Date().getFullYear();
  covidData: any;
  indiaPopulation = 1398718931;
  combined = {
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    vaccinated: 0,
  };
  states: any = [];
  stateCounts: any = {
    confirmed: [],
    deaths: [],
    recovered: [],
    vaccinated: [],
  };

  constructor(private covidDataServ: CovidDataService) {
    this.covidDataServ.data$.subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.covidData = data;
        for (let state in data) {
          if (data[state] && state !== 'TT') {
            this.combined.confirmed += data[state].total.confirmed;
            this.combined.deaths += data[state].total.deceased;
            this.combined.recovered += data[state].total.recovered;
            this.combined.vaccinated +=
              data[state].total.vaccinated1 - data[state].total.vaccinated2;
            this.states.push(state);
            this.stateCounts.confirmed.push(data[state].total.confirmed);
            this.stateCounts.deaths.push(data[state].total.deceased);
            this.stateCounts.recovered.push(data[state].total.recovered);
            this.stateCounts.vaccinated.push(data[state].total.vaccinated2);
          }
        }
      }
    });
  }

  ngOnInit(): void {}

  percentage(count: number) {
    return Math.round((count / this.indiaPopulation) * 100);
  }
}
