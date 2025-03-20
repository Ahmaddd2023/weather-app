import { NgModule } from '@angular/core';
import { MvpRoutingModule } from './mvp-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { Mvp1Component } from './pages/mvp-1/mvp-1.component';
import { NgxsModule } from '@ngxs/store';
import { MvpState } from './store';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

import { AgentsNavComponent } from './navigations/agents-nav/agents-nav.component';

import { OnboardingNavComponent } from './navigations/onboarding-nav/onboarding-nav.component';

import { ServicesNavComponent } from './service-menus/services-nav/services-nav.component';

import { AboutNavComponent } from './navigations/about-nav/about-nav.component';

import { ContactsNavComponent } from './navigations/contacts-nav/contacts-nav.component';

import { BlogNavComponent } from './navigations/blog-nav/blog-nav.component';

import { PopupMenuComponent } from './popup-menu/popup-menu.component';

import { BlockchainManagerComponent } from './popups/blockchain-manager/blockchain-manager.component';

import { Fan2SellComponent } from './popups/fan2-sell/fan2-sell.component';

import { Fan2ScaleComponent } from './popups/fan2-scale/fan2-scale.component';

import { AiButtlerComponent } from './popups/ai-buttler/ai-buttler.component';

import { SmsFireComponent } from './popups/sms-fire/sms-fire.component';

import { SocialMediaSellerComponent } from './popups/social-media-seller/social-media-seller.component';

import { AnyStoreComponent } from './popups/any-store/any-store.component';

import { CustomAgentDevelopmentComponent } from './popups/custom-agent-development/custom-agent-development.component';

import { AccordionComponent } from './accordion/accordion.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DataDialogerComponent } from './popups/data-dialoger/data-dialoger.component';
import { VisionVerseComponent } from './popups/vision-verse/vision-verse.component';

import { PersonapenComponent } from './popups/personapen/personapen.component';

import { FutureofsportsComponent } from './onboarding-menus/futureofsports/futureofsports.component';

import { Musicweb3Component } from './onboarding-menus/musicweb3/musicweb3.component';

import { FutureofentertainmentComponent } from './onboarding-menus/futureofentertainment/futureofentertainment.component';

import { OnboardingMenuComponent } from './onboarding-menu/onboarding-menu.component';

import { FooterComponent } from './footer/footer.component';

import { ServiceMenuComponent } from './service-menu/service-menu.component';

import { StartupComponent } from './service-menus/startup/startup.component';

import { ScalingBlockchainsComponent } from './service-menus/scaling-blockchains/scaling-blockchains.component';


import { WebComponent } from './web/web.component';

import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { TokensOpenpagerComponent } from './pages/tokens-openpager/tokens-openpager.component';
import { TokenlessPricesComponent } from './pages/tokenless-prices/tokenless-prices.component';

import { StaticLandingComponent } from './static-landing/static-landing.component';

import { Web20Component } from './web2-0/web2-0.component';
import { ModulesBlockComponent } from './modules-block/modules-block.component';
import { ChatgptComponent } from './pages/chatgpt/chatgpt.component';

import { AmbassadorComponent } from './service-menus/ambassador/ambassador.component';
import { OndesignComponent } from './ondesign/ondesign.component';
import { GoComponent } from './go/go.component';


@NgModule({
  declarations: [
    Mvp1Component, NavigationMenuComponent, AgentsNavComponent, OnboardingNavComponent, ServicesNavComponent, AboutNavComponent, ContactsNavComponent, BlogNavComponent,  PopupMenuComponent, BlockchainManagerComponent, Fan2SellComponent, Fan2ScaleComponent, AiButtlerComponent, SmsFireComponent, SocialMediaSellerComponent, AnyStoreComponent, CustomAgentDevelopmentComponent,  AccordionComponent, MainMenuComponent, DataDialogerComponent, VisionVerseComponent, FutureofsportsComponent, Musicweb3Component, FutureofentertainmentComponent, OnboardingMenuComponent, FooterComponent, ServiceMenuComponent, StartupComponent, ScalingBlockchainsComponent, PersonapenComponent, WebComponent, PrivacyPolicyComponent, TermsAndConditionsComponent, TokensOpenpagerComponent, TokenlessPricesComponent, StaticLandingComponent, Web20Component, ModulesBlockComponent, ChatgptComponent, AmbassadorComponent, OndesignComponent, GoComponent

  ],
  imports: [
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    MvpRoutingModule,
    NgxsModule.forFeature([MvpState]),
  ],
  exports: [MvpRoutingModule],
})
export class MvpModule {}
