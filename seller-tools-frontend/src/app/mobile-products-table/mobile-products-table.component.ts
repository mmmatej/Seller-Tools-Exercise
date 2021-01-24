import { Component, Input } from '@angular/core';

import { Product } from '../utils/product.model';

@Component({
  selector: 'mobile-products-table',
  templateUrl: './mobile-products-table.component.html',
  styleUrls: ['./mobile-products-table.component.scss']
})
export class MobileProductsTableComponent {
  displayedColumns: string[] = [
    'id',
    'image',
    'name',
    'category',
    'brand',
    'price',
    'reviews',
    'rating',
    'action'
  ];

  @Input() products: Product[] = [];
}
