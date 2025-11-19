import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-booking-complete-calendar',
  templateUrl: './booking-complete-calendar.component.html',
  styleUrl: './booking-complete-calendar.component.css'
})
export class BookingCompleteCalendarComponent {
  public routes = routes
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };
}
