import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesNavComponent } from './services-nav.component';

describe('ServicesNavComponent', () => {
  let component: ServicesNavComponent;
  let fixture: ComponentFixture<ServicesNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesNavComponent]
    });
    fixture = TestBed.createComponent(ServicesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
