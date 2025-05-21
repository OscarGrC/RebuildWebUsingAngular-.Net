import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOflistComponent } from './product-oflist.component';

describe('ProductOflistComponent', () => {
  let component: ProductOflistComponent;
  let fixture: ComponentFixture<ProductOflistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOflistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
