import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-booking-cancelled-calendar',
  templateUrl: './booking-cancelled-calendar.component.html',
  styleUrl: './booking-cancelled-calendar.component.css'
})
export class BookingCancelledCalendarComponent {
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

