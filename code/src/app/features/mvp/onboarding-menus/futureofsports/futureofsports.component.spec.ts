import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureofsportsComponent } from './futureofsports.component';

describe('FutureofsportsComponent', () => {
  let component: FutureofsportsComponent;
  let fixture: ComponentFixture<FutureofsportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureofsportsComponent]
    });
    fixture = TestBed.createComponent(FutureofsportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
