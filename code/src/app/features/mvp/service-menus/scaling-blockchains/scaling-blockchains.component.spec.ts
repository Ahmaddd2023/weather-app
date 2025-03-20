import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalingBlockchainsComponent } from './scaling-blockchains.component';

describe('ScalingBlockchainsComponent', () => {
  let component: ScalingBlockchainsComponent;
  let fixture: ComponentFixture<ScalingBlockchainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScalingBlockchainsComponent]
    });
    fixture = TestBed.createComponent(ScalingBlockchainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
