import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDialogerComponent } from './data-dialoger.component';

describe('DataDialogerComponent', () => {
  let component: DataDialogerComponent;
  let fixture: ComponentFixture<DataDialogerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataDialogerComponent]
    });
    fixture = TestBed.createComponent(DataDialogerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
