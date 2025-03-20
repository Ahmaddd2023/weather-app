import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesBlockComponent } from './modules-block.component';

describe('ModulesBlockComponent', () => {
  let component: ModulesBlockComponent;
  let fixture: ComponentFixture<ModulesBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulesBlockComponent]
    });
    fixture = TestBed.createComponent(ModulesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
