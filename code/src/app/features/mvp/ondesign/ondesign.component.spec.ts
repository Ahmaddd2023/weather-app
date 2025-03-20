import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndesignComponent } from './ondesign.component';

describe('OndesignComponent', () => {
  let component: OndesignComponent;
  let fixture: ComponentFixture<OndesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OndesignComponent]
    });
    fixture = TestBed.createComponent(OndesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
