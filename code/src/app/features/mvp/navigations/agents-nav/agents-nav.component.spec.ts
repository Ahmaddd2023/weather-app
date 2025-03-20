import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsNavComponent } from './agents-nav.component';

describe('AgentsNavComponent', () => {
  let component: AgentsNavComponent;
  let fixture: ComponentFixture<AgentsNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentsNavComponent]
    });
    fixture = TestBed.createComponent(AgentsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
