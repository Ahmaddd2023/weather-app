import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiButtlerComponent } from './ai-buttler.component';

describe('AiButtlerComponent', () => {
  let component: AiButtlerComponent;
  let fixture: ComponentFixture<AiButtlerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiButtlerComponent]
    });
    fixture = TestBed.createComponent(AiButtlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
