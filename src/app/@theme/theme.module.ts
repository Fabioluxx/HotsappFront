import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbCardModule,
  NbCheckboxModule,
} from '@nebular/theme';
import { NbSecurityModule } from '@nebular/security';

import {
  FooterComponent,
  HeaderComponent,
  LayoutDirectionSwitcherComponent,
  SearchInputComponent,
  SwitcherComponent,
  ConfirmDialogComponent,
} from './components';
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
} from './pipes';
import {
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import { UserService } from '../@core/data/users.service';
import { ConfirmDialogService } from './components/confirm-dialog/confirm-dialog.service';
import { FormsModule } from '@angular/forms';
import { ImportYouTubePlaylistDialogService } from '../pages/channel/views/dialogs/import-youtube-playlist-dialog/import-youtube-playlist-dialog.service';
import { ImportYouTubePlaylistDialogComponent } from '../pages/channel/views/dialogs/import-youtube-playlist-dialog/import-youtube-playlist-dialog.component';
import { AddMediaDialogComponent } from '../pages/channel/views/dialogs/add-media-dialog/add-media-dialog.component';
import { AddMediaDialogService } from '../pages/channel/views/dialogs/add-media-dialog/add-media-dialog.service';
import { ThumbItemComponent } from './components/thumb-item/thumb-item.component';
import { RouterModule } from '@angular/router';

const NB_MODULES = [
  NbCheckboxModule,
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbCardModule,
];

const COMPONENTS = [
  SwitcherComponent,
  LayoutDirectionSwitcherComponent,
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
  ConfirmDialogComponent,
  AddMediaDialogComponent,
  ImportYouTubePlaylistDialogComponent,
  ThumbItemComponent
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

@NgModule({
  imports: [CommonModule,
    RouterModule,
    FormsModule,
    ...NB_MODULES],
  exports: [CommonModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [
    AddMediaDialogComponent,
    ConfirmDialogComponent,
    ImportYouTubePlaylistDialogComponent,
    ThumbItemComponent
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME],
        ).providers,
        UserService,
        ConfirmDialogService,
        AddMediaDialogService,
        ImportYouTubePlaylistDialogService
      ],
    };
  }
}
