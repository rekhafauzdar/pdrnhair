import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-booking-upcoming-calendar',
  templateUrl: './booking-upcoming-calendar.component.html',
  styleUrl: './booking-upcoming-calendar.component.css'
})
export class BookingUpcomingCalendarComponent {
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
