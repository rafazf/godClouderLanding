import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainPriceComponent } from './domain-price.component';

describe('DomainPriceComponent', () => {
  let component: DomainPriceComponent;
  let fixture: ComponentFixture<DomainPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomainPriceComponent]
    });
    fixture = TestBed.createComponent(DomainPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
