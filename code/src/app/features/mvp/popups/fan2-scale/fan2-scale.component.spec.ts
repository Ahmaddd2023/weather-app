import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fan2ScaleComponent } from './fan2-scale.component';

describe('Fan2ScaleComponent', () => {
  let component: Fan2ScaleComponent;
  let fixture: ComponentFixture<Fan2ScaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Fan2ScaleComponent]
    });
    fixture = TestBed.createComponent(Fan2ScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
