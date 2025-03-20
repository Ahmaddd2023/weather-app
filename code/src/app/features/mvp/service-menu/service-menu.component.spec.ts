import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMenuComponent } from './service-menu.component';

describe('ServiceMenuComponent', () => {
  let component: ServiceMenuComponent;
  let fixture: ComponentFixture<ServiceMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceMenuComponent]
    });
    fixture = TestBed.createComponent(ServiceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
