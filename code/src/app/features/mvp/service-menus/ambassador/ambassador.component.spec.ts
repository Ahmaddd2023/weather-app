import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbassadorComponent } from './ambassador.component';

describe('AmbassadorComponent', () => {
  let component: AmbassadorComponent;
  let fixture: ComponentFixture<AmbassadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmbassadorComponent]
    });
    fixture = TestBed.createComponent(AmbassadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
