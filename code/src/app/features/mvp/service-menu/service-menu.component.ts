import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-menu',
  templateUrl: './service-menu.component.html',
  styleUrls: ['./service-menu.component.scss']
})
export class ServiceMenuComponent {
  @Input() isSubPageActive: boolean = false;
  isServiceMenuOpen: boolean = true;
  @Output() goFromMenu  = new  EventEmitter<boolean>;
   constructor(private router: Router) { }

closeServiceMenu(): void {
    this.isServiceMenuOpen = false;
  }

isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  onMenuLeave() {
     this.goFromMenu.emit(false);
  }
}


