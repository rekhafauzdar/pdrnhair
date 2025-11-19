import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-user-integration',
  templateUrl: './user-integration.component.html',
  styleUrls: ['./user-integration.component.css']
})
export class UserIntegrationComponent {
  public routes = routes;
}
