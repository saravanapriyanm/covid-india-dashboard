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
  dataKeys = {
    NewConfirmed: 'NewConfirmed',
    NewDeaths: 'NewDeaths',
    NewRecovered: 'NewRecovered',
    TotalConfirmed: 'TotalConfirmed',
    TotalDeaths: 'TotalDeaths',
    TotalRecovered: 'TotalRecovered',
  };
  covidData: any;

  constructor(private covidDataServ: CovidDataService) {
    this.covidDataServ.data$.subscribe((data: any) => {
      if (data) {
        this.covidData = data;
      }
    });
  }

  ngOnInit(): void {}
}
