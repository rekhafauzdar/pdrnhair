import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  public routes = routes; 

  constructor(private viewportScroller: ViewportScroller ) {
    
  }
  ngAfterViewInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
