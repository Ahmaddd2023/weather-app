import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsNavComponent } from './contacts-nav.component';

describe('ContactsNavComponent', () => {
  let component: ContactsNavComponent;
  let fixture: ComponentFixture<ContactsNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsNavComponent]
    });
    fixture = TestBed.createComponent(ContactsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
