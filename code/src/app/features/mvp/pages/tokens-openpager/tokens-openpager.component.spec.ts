import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensOpenpagerComponent } from './tokens-openpager.component';

describe('TokensOpenpagerComponent', () => {
  let component: TokensOpenpagerComponent;
  let fixture: ComponentFixture<TokensOpenpagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokensOpenpagerComponent]
    });
    fixture = TestBed.createComponent(TokensOpenpagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
