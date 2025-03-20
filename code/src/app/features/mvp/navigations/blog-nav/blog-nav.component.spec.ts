import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNavComponent } from './blog-nav.component';

describe('BlogNavComponent', () => {
  let component: BlogNavComponent;
  let fixture: ComponentFixture<BlogNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogNavComponent]
    });
    fixture = TestBed.createComponent(BlogNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
