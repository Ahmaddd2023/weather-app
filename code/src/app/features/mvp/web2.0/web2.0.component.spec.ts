import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Web20Component } from './web2.0.component';

describe('Web20Component', () => {
  let component: Web20Component;
  let fixture: ComponentFixture<Web20Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Web20Component]
    });
    fixture = TestBed.createComponent(Web20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
