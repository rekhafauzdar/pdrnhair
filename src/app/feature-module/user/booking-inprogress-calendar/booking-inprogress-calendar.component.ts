import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-booking-inprogress-calendar',
  templateUrl: './booking-inprogress-calendar.component.html',
  styleUrl: './booking-inprogress-calendar.component.css'
})
export class BookingInprogressCalendarComponent {
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
