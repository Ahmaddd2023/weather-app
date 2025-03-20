import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsFireComponent } from './sms-fire.component';

describe('SmsFireComponent', () => {
  let component: SmsFireComponent;
  let fixture: ComponentFixture<SmsFireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmsFireComponent]
    });
    fixture = TestBed.createComponent(SmsFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
