import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { UserIntegrationComponent } from './user-integration/user-integration.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { UserSecurityComponent } from './user-security/user-security.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'user-integration',
        component: UserIntegrationComponent,
      },
      {
        path: 'user-preferences',
        component: UserPreferencesComponent,
      },
      {
        path: 'user-notification',
        component: UserNotificationComponent,
      },
      {
        path: 'user-security',
        component: UserSecurityComponent,
      },
      {
        path: 'user-settings',
        component: UserSettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
