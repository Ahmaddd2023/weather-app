import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Musicweb3Component } from './musicweb3.component';

describe('Musicweb3Component', () => {
  let component: Musicweb3Component;
  let fixture: ComponentFixture<Musicweb3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Musicweb3Component]
    });
    fixture = TestBed.createComponent(Musicweb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
