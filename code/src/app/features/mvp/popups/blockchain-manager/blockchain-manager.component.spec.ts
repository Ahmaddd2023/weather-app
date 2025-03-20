import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainManagerComponent } from './blockchain-manager.component';

describe('BlockchainManagerComponent', () => {
  let component: BlockchainManagerComponent;
  let fixture: ComponentFixture<BlockchainManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockchainManagerComponent]
    });
    fixture = TestBed.createComponent(BlockchainManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
