import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  public getProducts(limit: number = 50, start: number = 0) {
    return this.http.get(environment.baseUrl + 'products', {
      params: {
        _limit: limit.toString(),
        _start: start.toString()
      }
    });
  }
}