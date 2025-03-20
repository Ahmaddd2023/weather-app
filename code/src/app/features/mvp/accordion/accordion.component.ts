import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('expand', [
      state('expanded', style({ height: '*' })),
      state('collapsed', style({ height: 0 })),
      transition('expanded <=> collapsed', animate('100ms ease-out')),
    ]),
    trigger('rotate', [
      state('expanded', style({ transform: 'rotate(45deg)' })),
      state('collapsed', style({ transform: 'rotate(0deg)' })), 
      
      transition('expanded <=> collapsed', animate('100ms ease-out')),
    ]),
    trigger('headerBackground', [
      state('expanded', style({ background: 'rgba(255, 255, 255, 0.1)' })),
      state('collapsed', style({ background: 'rgba(255, 255, 255, 0.05)' })),
      transition('expanded <=> collapsed', animate('100ms ease-out')),
    ]),
  ],
})
export class AccordionComponent {
  openAccordion: number | null = null;

  toggleAccordion(index: number): void {
    this.openAccordion = this.openAccordion === index ? null : index;
  }

  isAccordionOpen(index: number): boolean {
    return this.openAccordion === index;
  }
}
