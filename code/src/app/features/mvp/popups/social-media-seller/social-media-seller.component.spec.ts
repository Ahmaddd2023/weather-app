import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaSellerComponent } from './social-media-seller.component';

describe('SocialMediaSellerComponent', () => {
  let component: SocialMediaSellerComponent;
  let fixture: ComponentFixture<SocialMediaSellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediaSellerComponent]
    });
    fixture = TestBed.createComponent(SocialMediaSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
