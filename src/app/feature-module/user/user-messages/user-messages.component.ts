import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css'],
})
export class UserMessagesComponent {
  public routes = routes;
  public openChat = false;

  public chatOpen() {
    this.openChat = !this.openChat;
  }
}
