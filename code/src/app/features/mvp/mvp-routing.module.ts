import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutNavComponent } from './navigations/about-nav/about-nav.component';
import { AgentsNavComponent } from './navigations/agents-nav/agents-nav.component';
import { ContactsNavComponent } from './navigations/contacts-nav/contacts-nav.component';
import { BlogNavComponent } from './navigations/blog-nav/blog-nav.component';
import { OnboardingNavComponent } from './navigations/onboarding-nav/onboarding-nav.component';
import { ServicesNavComponent } from './service-menus/services-nav/services-nav.component';
import { Mvp1Component } from './pages/mvp-1/mvp-1.component';

import { BlockchainManagerComponent } from './popups/blockchain-manager/blockchain-manager.component';

import { Fan2SellComponent } from './popups/fan2-sell/fan2-sell.component';

import { Fan2ScaleComponent } from './popups/fan2-scale/fan2-scale.component';

import { AiButtlerComponent } from './popups/ai-buttler/ai-buttler.component';

import { SmsFireComponent } from './popups/sms-fire/sms-fire.component';

import { SocialMediaSellerComponent } from './popups/social-media-seller/social-media-seller.component';

import { AnyStoreComponent } from './popups/any-store/any-store.component';

import { CustomAgentDevelopmentComponent } from './popups/custom-agent-development/custom-agent-development.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { DataDialogerComponent } from './popups/data-dialoger/data-dialoger.component';
import { VisionVerseComponent } from './popups/vision-verse/vision-verse.component';

import { PersonapenComponent } from './popups/personapen/personapen.component';

import { FutureofsportsComponent } from './onboarding-menus/futureofsports/futureofsports.component';

import { Musicweb3Component } from './onboarding-menus/musicweb3/musicweb3.component';

import { FutureofentertainmentComponent } from './onboarding-menus/futureofentertainment/futureofentertainment.component';

import { OnboardingMenuComponent } from './onboarding-menu/onboarding-menu.component';


import { ServiceMenuComponent } from './service-menu/service-menu.component';

import { StartupComponent } from './service-menus/startup/startup.component';

import { ScalingBlockchainsComponent } from './service-menus/scaling-blockchains/scaling-blockchains.component';

import { WebComponent } from './web/web.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import {TokensOpenpagerComponent} from "./pages/tokens-openpager/tokens-openpager.component";
import {TokenlessPricesComponent} from "./pages/tokenless-prices/tokenless-prices.component";


import { Web20Component } from './web2-0/web2-0.component';

import { StaticLandingComponent } from './static-landing/static-landing.component';

import { ModulesBlockComponent } from './modules-block/modules-block.component';
import {ChatgptComponent} from "./pages/chatgpt/chatgpt.component";

import { AmbassadorComponent } from './service-menus/ambassador/ambassador.component';

import { OndesignComponent } from './ondesign/ondesign.component';
  
import { GoComponent } from './go/go.component';



const routes: Routes = [

{ path: 'static-landing', component: StaticLandingComponent },
  { path: 'about', component: AboutNavComponent },


{path: 'services/ambassador', component: AmbassadorComponent}, 

{path: 'go', component: GoComponent},

{path: 'freedesign', component: OndesignComponent}, 

  { path: 'privacy-policy', component: PrivacyPolicyComponent },

  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },

  { path: 'agents/blockchain-manager', component: BlockchainManagerComponent },

  {path: 'services/scalingblockchains', component: ScalingBlockchainsComponent},

  { path: 'services/our-services', component: ServicesNavComponent },

  {path: 'services/startup-support', component: StartupComponent},


   {path: 'services/what-is-brainz', component: WebComponent},

   {path: 'services/technologies', component: Web20Component},
    { path: 'agents/fan2Sell', component: Fan2SellComponent },

    { path: 'agents/ai-datadialoger', component: DataDialogerComponent },
    { path: 'agents/ai-visionverse', component: VisionVerseComponent },

    { path: 'agents/ai-personapen', component: PersonapenComponent },

  { path: 'agents/fan2Scale', component: Fan2ScaleComponent },
  { path: 'agents/ai-buttler', component: AiButtlerComponent },
  { path: 'agents/sms-fire', component: SmsFireComponent },
  { path: 'agents/social-media-seller', component: SocialMediaSellerComponent },
  { path: 'agents/any-store', component: AnyStoreComponent },
  { path: 'agents/custom-agent-development', component: CustomAgentDevelopmentComponent },
  { path: 'contacts', component: ContactsNavComponent },
  { path: 'blog', component: BlogNavComponent },
  { path: 'onboarding/futureofsports', component: FutureofsportsComponent },
   { path: 'onboarding/musicweb3', component: Musicweb3Component },
   { path: 'onboarding/futureofentertainment', component: FutureofentertainmentComponent },
   { path: 'tokenless', component: TokensOpenpagerComponent },
   { path: 'tokenless-costs', component: TokenlessPricesComponent },
   { path: 'chatgpt', component: ChatgptComponent },
   { path: '', component: Mvp1Component },
   { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MvpRoutingModule {}
