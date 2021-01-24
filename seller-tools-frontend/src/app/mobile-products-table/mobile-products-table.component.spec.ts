import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProductsTableComponent } from './mobile-products-table.component';

describe('MobileProductsTableComponent', () => {
  let component: MobileProductsTableComponent;
  let fixture: ComponentFixture<MobileProductsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileProductsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileProductsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
