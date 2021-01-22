import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit(): void {}
}
