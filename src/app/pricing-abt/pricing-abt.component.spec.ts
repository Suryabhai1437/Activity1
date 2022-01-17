import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingAbtComponent } from './pricing-abt.component';

describe('PricingAbtComponent', () => {
  let component: PricingAbtComponent;
  let fixture: ComponentFixture<PricingAbtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingAbtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingAbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
