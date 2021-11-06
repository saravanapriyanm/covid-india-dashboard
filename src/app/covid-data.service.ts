import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  data$: any = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
    this.getData().subscribe((data) => {
      console.log(data);
      this.data$.next(data);
    });
  }
  getData(): Observable<any> {
    return this.http.get(environment.api.current);
  }
}
