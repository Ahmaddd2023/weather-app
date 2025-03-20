import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureofentertainmentComponent } from './futureofentertainment.component';

describe('FutureofentertainmentComponent', () => {
  let component: FutureofentertainmentComponent;
  let fixture: ComponentFixture<FutureofentertainmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureofentertainmentComponent]
    });
    fixture = TestBed.createComponent(FutureofentertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
