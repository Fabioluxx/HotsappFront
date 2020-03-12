import { NgModule } from '@angular/core';
import { NbMenuModule, NbTabsetModule, NbCardModule, NbAccordionModule, NbCheckboxModule, NbListModule, NbActionsModule, NbIconModule, NbButtonModule, NbInputModule, NbUserModule, NbChatModule, NbSelectModule, NbRadioModule, NbProgressBarModule, NbStepperModule, NbSpinnerModule, NbTooltipModule, NbAlertModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteTabsetComponent } from '../@theme/components';
import { MyNumbersComponent } from './numbers/my-numbers/my-numbers.component';
import { BuyNumberComponent } from './numbers/buy-number/buy-number.component';
import { ChatComponent } from './chat/chat.component';
import { ContactListComponent } from './chat/components/contact-list/contact-list.component';
import { NumberService } from './numbers/number.service';
import { ChatService } from './chat/chat.service';
import { CampaignListComponent } from './campaign/campaign-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampaignEditorComponent } from './campaign/campaign-editor/campaign-editor.component';
import { NumberConnectorComponent } from './numbers/number-connector/number-connector.component';
import { ConnectorService } from './numbers/number-connector/connector.service';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PlansComponent } from './subscription/plans/plans.component';
import { NoActiveSubscriptionComponent } from './subscription/components/no-active-subscription/no-active-subscription.component';
import { SubscriptionService } from './subscription/subscription.service';
import { WalletComponent } from './wallet/wallet.component';
import { WalletService } from './wallet/wallet.service';
import { CampaignStatusComponent } from './campaign/campaign-status/campaign-status.component';
import { CampaignService } from './campaign/campaign.service';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbTabsetModule,
    NbCardModule,
    FormsModule,
    NbAccordionModule,
    NbCheckboxModule,
    NbListModule,
    NbActionsModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbUserModule,
    NbChatModule,
    NbSelectModule,
    NbRadioModule,
    NbProgressBarModule,
    NbStepperModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    NbTooltipModule,
    NbAlertModule
  ],
  declarations: [
    PagesComponent,
    RouteTabsetComponent,
    MyNumbersComponent,
    BuyNumberComponent,
    ChatComponent,
    ContactListComponent,
    CampaignListComponent,
    DashboardComponent,
    CampaignEditorComponent,
    NumberConnectorComponent,
    SubscriptionComponent,
    PlansComponent,
    NoActiveSubscriptionComponent,
    WalletComponent,
    CampaignStatusComponent,
  ],
  providers: [
    NumberService,
    ChatService,
    ConnectorService,
    SubscriptionService,
    WalletService,
    CampaignService
  ],
})
export class PagesModule {
}
