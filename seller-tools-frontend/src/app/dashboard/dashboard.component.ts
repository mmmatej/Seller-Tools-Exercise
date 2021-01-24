import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { fromEvent, of as observableOf, Subscription } from 'rxjs';
import { catchError, debounceTime, startWith, switchMap } from 'rxjs/operators';

import { ApiService } from '../shared/api.service';
import { Product } from '../utils/product.model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  products: Product[];
  itemsPerPage = 50;
  resultsLength = this.itemsPerPage;
  isDesktop = window.innerWidth > 1065 ? true : false;

  private windowResizeSubscription: Subscription = Subscription.EMPTY;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private apiService: ApiService) { }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.apiService.getProducts(
            this.itemsPerPage,
            this.paginator.pageIndex * this.itemsPerPage
          );
        }),
        catchError(() => {
          return observableOf([]);
        })
      )
      .subscribe((data: Product[]) => {
        this.products = data;
        this.resultsLength = (this.paginator.pageIndex + 1) * this.itemsPerPage + this.itemsPerPage;
      });

    this.windowResizeSubscription = fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(
        () => (this.isDesktop = window.innerWidth > 1065 ? true : false)
      );
  }
}
