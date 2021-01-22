import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public products;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(
      data => {
        this.products = data;
        console.log(this.products);
      },
      error => console.log('Error')
    );
  }
}
