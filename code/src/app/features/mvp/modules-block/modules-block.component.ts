import { Component, HostListener } from '@angular/core';

interface ModuleBlock {
  imageUrl: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-modules-block',
  templateUrl: './modules-block.component.html',
  styleUrls: ['./modules-block.component.scss']
})
export class ModulesBlockComponent {
  blocks: ModuleBlock[] = [
    { 
      imageUrl: "/assets/img/pp1.svg",
      title: "Flexible Marketplace",
      description: "A module for setting up and managing online marketplaces."
    },
    { 
      imageUrl: "/assets/img/pp2.svg",
      title: "Crypto Wallet Manager",
      description: "Manage and integrate cryptocurrency wallets."
    },
    { 
      imageUrl: "/assets/img/pp3.svg",
      title: "Access Management",
      description: "User access and identity management solutions."
    },
    { 
      imageUrl: "/assets/img/pp4.svg",
      title: "Fiat and Crypto Payments",
      description: "Handling both traditional currency and cryptocurrency transactions."
    },
    { 
      imageUrl: "/assets/img/pp5.svg",
      title: "Operations Dashboard",
      description: "A central hub for managing various operational aspects."
    },
    { 
      imageUrl: "/assets/img/pp6.svg",
      title: "Natural Language Processing",
      description: "AI-driven language processing is used to understand and generate human language."
    },
    { 
      imageUrl: "/assets/img/pp7.svg",
      title: "Blockchain Operations",
      description: "Solutions for managing blockchain-based transactions and operations."
    },
    { 
      imageUrl: "/assets/img/pp8.svg",
      title: "Customer Relationships",
      description: "Tools for managing customer relationships and interactions."
    },
    { 
      imageUrl: "/assets/img/pp9.svg",
      title: "Shopify Connect",
      description: "Integration with the Shopify e-commerce platform."
    },
    { 
      imageUrl: "/assets/img/pp10.svg",
      title: "Multichannel User Interface",
      description: "Interfaces that work across various channels for a unified user experience."
    },
    { 
      imageUrl: "/assets/img/pp11.svg",
      title: "Generative AI Integrations",
      description: "Integration of AI that can generate content or data autonomously."
    },
    { 
      imageUrl: "/assets/img/pp12.svg",
      title: "Ads Manager",
      description: "A tool for managing advertising campaigns across different platforms."
    }
  ];
  
 
 visibleBlocks: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.updateVisibility(); 
  }

  @HostListener('window:load', ['$event'])
  
  onLoad(event: Event) {
    this.updateVisibility();
  }

  @HostListener('window:scroll', ['$event']) 
  
  onScroll(event: Event) {
    this.updateVisibility();
  }

  updateVisibility() {
    const container = document.querySelector('.modules-blocks') as HTMLElement | null;
    if (!container) return;

    const blocks = container?.querySelectorAll('.modules-block');
    if (!blocks) return;

    const visibleBlocks: boolean[] = [];
    blocks.forEach((block: any, index: number) => {
      const rect = block.getBoundingClientRect();
      const isVisible = rect.left >= 0 && rect.right <= (container.offsetWidth || 0);
      visibleBlocks.push(isVisible);
    });
    this.visibleBlocks = visibleBlocks;
  }

  isBlockActive(index: number): boolean {
    return this.visibleBlocks[index];
  }
}