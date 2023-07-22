import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDomainComponent } from './search-domain.component';

describe('SearchDomainComponent', () => {
  let component: SearchDomainComponent;
  let fixture: ComponentFixture<SearchDomainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDomainComponent]
    });
    fixture = TestBed.createComponent(SearchDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
