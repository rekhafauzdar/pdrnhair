import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { routerlink } from 'src/app/shared/services/model/model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
 isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
  public routes = routes;
  base = '';
  page = '';
  last = '';
  customRouteBookings = false;
  customRouteSettings = false;

  constructor(private common: CommonService, public router: Router) {
    this.common.base.subscribe((res: string) => {
      this.base = res?.replaceAll('-', ' ');
    });
    this.common.page.subscribe((res: string) => {
      this.page = res?.replaceAll('-', ' ');
    });
    this.common.last.subscribe((res: string) => {
      this.last = res?.replaceAll('-', ' ');
    });
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routesActive();
      }
      if (event instanceof NavigationEnd) {
        this.routesActive();
      }
    });
  }

    ngOnInit() {
    this.routesActive();
  }

  logout() {
    // Implement logout functionality here
    this.common.logout();
    this.router.navigate([this.routes.home]);
  }
  public routesActive() {
    if (
      this.page === 'user booking upcoming' ||
      this.page === 'user booking inprogress' ||
      this.page === 'user booking complete' ||
      this.page === 'user booking cancelled' ||
      this.page === 'user bookings' ||
      this.page === 'User Bookings'
    ) {
      this.customRouteBookings = true;
      this.page = 'User Bookings';
    } else if (this.page === 'settings' || this.page === 'User Settings') {
      this.customRouteSettings = true;
      this.page = 'User Settings';
    } else {
      this.customRouteBookings = false;
      this.customRouteSettings = false;
    }
  }
}
