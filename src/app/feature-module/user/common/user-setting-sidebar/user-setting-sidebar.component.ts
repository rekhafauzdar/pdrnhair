import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-user-setting-sidebar',
  templateUrl: './user-setting-sidebar.component.html',
  styleUrl: './user-setting-sidebar.component.css'
})
export class UserSettingSidebarComponent {
public routes = routes
}
