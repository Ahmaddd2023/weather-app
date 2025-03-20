import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNavComponent } from './about-nav.component';

describe('AboutNavComponent', () => {
  let component: AboutNavComponent;
  let fixture: ComponentFixture<AboutNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutNavComponent]
    });
    fixture = TestBed.createComponent(AboutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
