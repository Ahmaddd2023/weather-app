import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAgentDevelopmentComponent } from './custom-agent-development.component';

describe('CustomAgentDevelopmentComponent', () => {
  let component: CustomAgentDevelopmentComponent;
  let fixture: ComponentFixture<CustomAgentDevelopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomAgentDevelopmentComponent]
    });
    fixture = TestBed.createComponent(CustomAgentDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
