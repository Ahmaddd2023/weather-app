import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.scss']
})
export class GoComponent {
  largeImageUrl: string | null = null;
  isLargeImageOpen = false;
  private scrollPosition = { top: 0, left: 0 };

  constructor() { }

  openLargeImage(imageUrl: string) {
    this.largeImageUrl = imageUrl;
    this.isLargeImageOpen = true;

    this.scrollPosition.top = window.scrollY;
    this.scrollPosition.left = window.scrollX;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollPosition.top}px`;
    document.body.style.left = `-${this.scrollPosition.left}px`;
    document.body.style.width = '100%';
  }

  closeLargeImage() {
    this.largeImageUrl = null;
    this.isLargeImageOpen = false;

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';

    window.scrollTo(this.scrollPosition.left, this.scrollPosition.top);
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    if (this.isLargeImageOpen) {
      this.closeLargeImage();
    }
  }
}
