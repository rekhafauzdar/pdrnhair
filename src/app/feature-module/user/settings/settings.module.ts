import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { UserSettingSidebarComponent } from '../common/user-setting-sidebar/user-setting-sidebar.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';
import { UserIntegrationComponent } from './user-integration/user-integration.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserSecurityComponent } from './user-security/user-security.component';


@NgModule({
  declarations: [
    SettingsComponent,
    UserSettingSidebarComponent,
    UserPreferencesComponent,
    UserSettingsComponent,
    UserNotificationComponent,
    UserIntegrationComponent,
    UserSecurityComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
