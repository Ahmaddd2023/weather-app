import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonapenComponent } from './personapen.component';

describe('PersonapenComponent', () => {
  let component: PersonapenComponent;
  let fixture: ComponentFixture<PersonapenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonapenComponent]
    });
    fixture = TestBed.createComponent(PersonapenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
