import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = ' http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public getProducts(limit: number = 10, start: number = 10) {
    return this.http.get(baseUrl + 'products', {
      params: {
        _limit: limit.toString(),
        _start: start.toString()
      }
    });
  }
}
