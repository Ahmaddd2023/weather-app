import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenlessPricesComponent } from './tokenless-prices.component';

describe('TokenlessPricesComponent', () => {
  let component: TokenlessPricesComponent;
  let fixture: ComponentFixture<TokenlessPricesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenlessPricesComponent]
    });
    fixture = TestBed.createComponent(TokenlessPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
