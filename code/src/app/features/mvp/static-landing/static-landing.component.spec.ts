import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticLandingComponent } from './static-landing.component';

describe('StaticLandingComponent', () => {
  let component: StaticLandingComponent;
  let fixture: ComponentFixture<StaticLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticLandingComponent]
    });
    fixture = TestBed.createComponent(StaticLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
