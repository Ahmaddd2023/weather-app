import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  @Input() isSubPageActive: boolean = false;
  isNestedMenuOpen: boolean = true;
  @Output() goFromMenu  = new  EventEmitter<boolean>;

  constructor(private router: Router) { }

  closeNestedMenu(): void {
    this.isNestedMenuOpen = false;
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  onMenuLeave() {
    this.goFromMenu.emit(false);
  }
}
