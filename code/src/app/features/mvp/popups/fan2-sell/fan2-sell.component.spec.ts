import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fan2SellComponent } from './fan2-sell.component';

describe('Fan2SellComponent', () => {
  let component: Fan2SellComponent;
  let fixture: ComponentFixture<Fan2SellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Fan2SellComponent]
    });
    fixture = TestBed.createComponent(Fan2SellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
