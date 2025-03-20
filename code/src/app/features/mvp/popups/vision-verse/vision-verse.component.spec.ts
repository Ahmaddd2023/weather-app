import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionVerseComponent } from './vision-verse.component';

describe('VisionVerseComponent', () => {
  let component: VisionVerseComponent;
  let fixture: ComponentFixture<VisionVerseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisionVerseComponent]
    });
    fixture = TestBed.createComponent(VisionVerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
