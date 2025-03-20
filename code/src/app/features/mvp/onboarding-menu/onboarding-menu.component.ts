import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-menu',
  templateUrl: './onboarding-menu.component.html',
  styleUrls: ['./onboarding-menu.component.scss']
})
export class OnboardingMenuComponent {
  @Input() isSubPageActive: boolean = false;
  isOnboardingMenuOpen: boolean = true;
  @Output() goFromMenu  = new  EventEmitter<boolean>;

  constructor(private router: Router) { }

  closeMenu(): void {
    this.isOnboardingMenuOpen = false;
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  onMenuLeave() {
    this.goFromMenu.emit(false);
  }
}

