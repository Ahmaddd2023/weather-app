import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyStoreComponent } from './any-store.component';

describe('AnyStoreComponent', () => {
  let component: AnyStoreComponent;
  let fixture: ComponentFixture<AnyStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnyStoreComponent]
    });
    fixture = TestBed.createComponent(AnyStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
