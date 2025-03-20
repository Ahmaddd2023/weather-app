import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  isMenuOpen: boolean = false;
  isAgentsMenuOpen: boolean = false;
  isOnboardingMenuOpen: boolean = false;
  isServiceMenuOpen: boolean = false;
  activeLink: string = '';
  currentRouteText: string = '';
  onboardingActive: boolean = false;
  servicesActive: boolean = false;
  isAgentsMenuHovered: boolean = false;
  isOnboardingMenuHovered: boolean = false;
  isServiceMenuHovered: boolean = false;
  isSmallScreen: boolean = window.innerWidth <= 769;
  isMenuClicked: boolean = false;
  isScrolled: boolean = false;
 
  
  onboardingUrls: string[] = [
    '/onboarding/futureofentertainment',
    '/onboarding/musicweb3',
    '/onboarding/futureofsports'
  ];

  servicesUrls: string[] = [
    '/services/scalingblockchains',
    '/services/startup-support',
    '/services/our-services',
    '/services/web',
    '/services/web3.0',
  ];
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isSmallScreen = event.target.innerWidth <= 769;
    if (this.isSmallScreen) {
      this.isAgentsMenuHovered = false;
      this.isOnboardingMenuHovered = false;
      this.isServiceMenuHovered = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      this.isScrolled = window.scrollY > 0;
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.url;
        this.setRouteText();
        this.unlockScroll();
        this.updateOnboardingActive();
        this.updateServicesActive();
        this.updateMenuState();
      }
    });

    this.activatedRoute.url.subscribe(urlSegments => {
      this.activeLink = '/' + urlSegments.map(segment => segment.path).join('/');
      this.setRouteText();
      this.updateOnboardingActive();
      this.updateServicesActive();
    });

    this.activatedRoute.params.subscribe(params => {
      this.isOnboardingMenuOpen = params['onboarding'] === 'true';
      this.isAgentsMenuOpen = params['agents'] === 'true';
      this.isServiceMenuOpen = params['services'] === 'true';
      this.updateOnboardingActive();
      this.updateServicesActive();
    });
  }

  toggleMenu() {
    this.isMenuClicked = !this.isMenuClicked;
    this.isMenuOpen = !this.isMenuOpen;
    this.isAgentsMenuOpen = false;
    this.isOnboardingMenuOpen = false;
    this.isServiceMenuOpen = false;
    this.updateOnboardingActive();
    this.updateServicesActive();

    if (this.isMenuOpen) {
      this.lockScroll();
      this.activeLink = this.router.url;
      this.setRouteText();
    } else {
      if (this.router.url === '') {
        this.currentRouteText = 'Home';
      } else {
        this.setRouteText();
      }
      this.unlockScroll();
    }
  }

  toggleAgentsMenu() {
    this.isAgentsMenuOpen = !this.isAgentsMenuOpen;
    this.isOnboardingMenuOpen = false;
    this.isServiceMenuOpen = false;
    this.setRouteText();
    this.updateOnboardingActive();
    this.updateServicesActive();
  }

  toggleOnboardingMenu() {
    this.isOnboardingMenuOpen = !this.isOnboardingMenuOpen;
    this.isAgentsMenuOpen = false;
    this.isServiceMenuOpen = false;
    this.setRouteText();
    this.updateOnboardingActive();
    this.updateServicesActive();
  }

  toggleServicesMenu() {
    this.isServiceMenuOpen = !this.isServiceMenuOpen;
    this.isAgentsMenuOpen = false;
    this.isOnboardingMenuOpen = false;
    this.setRouteText();
    this.updateOnboardingActive();
    this.updateServicesActive();
  }

  setActiveLink(link: string, routeText: string) {
    this.activeLink = link;
    this.setRouteText();
    this.unlockScroll();
  }

  isActive(link: string): boolean {
    return this.router.isActive(link, true);
  }

  setRouteText() {
    const routeSegments = this.activeLink.split('/');

    if (routeSegments.length === 2 && routeSegments[1] === '') {
      this.currentRouteText = 'Home';
      return;
    }

    const isNestedMenuRoute = routeSegments.includes('onboarding') || routeSegments.includes('agents') || routeSegments.includes('services');

    if (isNestedMenuRoute) {
      this.currentRouteText = routeSegments[routeSegments.length - 2].charAt(0).toUpperCase() + routeSegments[routeSegments.length - 2].slice(1);
    } else {
      this.currentRouteText = routeSegments[routeSegments.length - 1].charAt(0).toUpperCase() + routeSegments[routeSegments.length - 1].slice(1);
    }
  }

  updateOnboardingActive() {
    const currentUrl = this.router.url;
    this.onboardingActive = this.onboardingUrls.some(url => currentUrl.startsWith(url));
  }

  updateServicesActive() {
    const currentUrl = this.router.url;
    this.servicesActive = this.servicesUrls.some(url => currentUrl.startsWith(url));
  }

  goBack() {
    this.toggleMenu();
  }

  lockScroll() {
    document.body.style.overflow = 'hidden';
  }

  unlockScroll() {
    document.body.style.overflow = '';
  }

  isSubPageForAgents(): boolean {
    return this.router.url.startsWith('/agents/');
  }

  isSubPageForOnboarding(): boolean {
    return this.router.url.startsWith('/onboarding/');
  }

  isSubPageForServices(): boolean {
    return this.router.url.startsWith('/services/');
  }

  isLinkForMenu(): boolean {
    return this.isSubPageForAgents() || this.isSubPageForOnboarding() || this.isSubPageForServices();
  }

  updateMenuState() {
    this.isAgentsMenuOpen = this.isSubPageForSection('/agents');
    this.isOnboardingMenuOpen = this.isSubPageForSection('/onboarding');
    this.isServiceMenuOpen = this.isSubPageForSection('/services');
  }

  isSubPageForSection(section: string): boolean {
    return this.router.url.startsWith(section);
  }

  isAnyActive(pages: string[]): boolean {
    return pages.some(page => this.router.isActive(page, true));
  }

  onAgentsMenuHover() {
    this.isAgentsMenuHovered = !this.isSmallScreen;
    this.onOnboardingMenuLeave();
    this.onServiceMenuLeave();
  }

  onAgentsMenuLeave() {
    this.isAgentsMenuHovered = false;
  }

  onOnboardingMenuHover() {
    this.isOnboardingMenuHovered = !this.isSmallScreen;
    this.onAgentsMenuLeave();
    this.onServiceMenuLeave();
  }

  onOnboardingMenuLeave() {
    this.isOnboardingMenuHovered = false;
  }

  onServiceMenuHover() {
    this.isServiceMenuHovered = !this.isSmallScreen;
    this.onAgentsMenuLeave();
    this.onOnboardingMenuLeave();
  }

  onServiceMenuLeave() {
    this.isServiceMenuHovered = false;
  }
}
