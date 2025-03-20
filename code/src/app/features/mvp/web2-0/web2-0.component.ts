import { Component, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-web2-0',
  templateUrl: './web2-0.component.html',
  styleUrls: ['./web2-0.component.scss']
})
export class Web20Component {
  selectedProjectIndex: number | null = null;
  selectedIconIndex: number | null = null;

  icons = [
    { src: "/assets/img/1icon.svg", text: "Champ is an advanced video-generating AI system powered by Multi-Agent System Brains. Our goal is to revolutionize video creation by harnessing the capabilities of open-source AI, specifically Deforum Stable Diffusion. With Champ, users can effortlessly transform their videos using various templates, whether for special occasions like Christmas or Valentine's Day or even to give them an antique flair. Our Discord-integrated interface makes it convenient for users to submit their videos and prompts and receive beautifully crafted results. Plus, our feedback loop continuously optimizes our system based on user ratings and preferences, ensuring the best possible experience. Experience the future of video creation with Champ! " },
    
    { src: "/assets/img/2icon.svg", text: "Picklezone is a revolutionary project developed with our cutting-edge AI and Web3 technologies. With the fusion of AI, Gamification, IoT, and Live Sports, Picklezone brings excitement and engagement to Pickleball enthusiasts worldwide. It has exclusive features like skill-based matchmaking, personalized coaching insights, and the Picklezone App powered by AI, IoT, and blockchain technology. Join us in shaping the future of sports entertainment, where innovation knows no bounds." },
    
    { src: "/assets/img/3icon.svg", text: "Rap3 is the Gateway to the Web3 Universe. Rap3 is a groundbreaking project developed with advanced AI and Web3 technologies. In the Rap3 world, hands-on workshops and interactive panels are designed to onboard new community members into the Web3 space, providing essential knowledge and tools for navigating the digital asset landscape securely. With immersive experiences like practical wallet setup workshops and unforgettable concerts featuring hip-hop legends, Rap3 aims to empower attendees with a deep understanding of blockchain technology's impact on industries like music." },
  ];

  @ViewChild('iconsContainer') iconsContainer!: ElementRef;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.handleMobileView();
  }

 handleMobileView() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 769 && this.selectedIconIndex !== null) {
    const icons = this.iconsContainer.nativeElement.querySelectorAll('.icon-for-web3');
    let nearestIconIndex = 0;
    let minDistance = Infinity;

    icons.forEach((icon: Element, index: number) => {
      const iconRect = icon.getBoundingClientRect();
      const distance = Math.abs(iconRect.left);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIconIndex = index;
      }
    });

    this.selectIcon(nearestIconIndex);
    this.selectProject(nearestIconIndex);
  }
}



  resetOpacity(): void {
    const blocks = document.querySelectorAll('.web3-static-block');
    blocks.forEach((block: Element) => {
      this.renderer.setStyle(block, 'opacity', this.selectedProjectIndex !== null ? '1' : '0.2');
    });
  }

  resetOpacityForIcons(): void {
    const icons = document.querySelectorAll('.icon-for-web3');
    icons.forEach((icon: Element) => {
      this.renderer.setStyle(icon, 'opacity', '1');
    });
  }

  setOpacityForBlock(className: string, opacity: string): void {
    const blocks = document.querySelectorAll(`.${className}`);
    blocks.forEach((block: Element) => {
      this.renderer.setStyle(block, 'opacity', opacity);
    });
  }

  setOpacityForIcons(index: number): void {
    const icons = document.querySelectorAll('.icon-for-web3');
    icons.forEach((icon: Element, iconIndex: number) => {
      const iconOpacity = index === iconIndex ? '1' : '0.2';
      this.renderer.setStyle(icon, 'opacity', iconOpacity);
    });
  }

  selectIcon(index: number): void {
    if (this.selectedIconIndex === index) {
      this.selectedIconIndex = null;
      this.selectedProjectIndex = null;
      this.resetOpacity();
      this.resetOpacityForIcons();
    } else {
      this.selectedIconIndex = index;
      this.resetOpacity();
      this.resetOpacityForIcons();

      if (this.selectedProjectIndex !== null) {
        const selectedIconClass = this.selectedIconIndex !== null ? `block${this.selectedIconIndex + 1}` : '';
        if (selectedIconClass) {
          this.setOpacityForBlock(selectedIconClass, '0.2');
        }
      } else {
        const selectedIconClass = this.selectedIconIndex !== null ? `block${index + 1}` : '';
        if (selectedIconClass) {
          this.setOpacityForBlock(selectedIconClass, '1');
          this.setOpacityForIcons(index);
        }
      }
    }
  }

  selectProject(index: number): void {
    if (this.selectedProjectIndex === index) {
      this.selectedProjectIndex = null;
      this.selectedIconIndex = null;
      this.resetOpacity();
      this.resetOpacityForIcons();
    } else {
      this.selectedProjectIndex = index;
      this.resetOpacity();
      this.resetOpacityForIcons();

      if (this.selectedIconIndex !== null) {
        const selectedIconClass = `block${this.selectedIconIndex + 1}`;
        this.setOpacityForBlock(selectedIconClass, '1');
      }
    }
  }
}
