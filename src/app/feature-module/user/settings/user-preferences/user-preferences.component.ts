import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.css']
})
export class UserPreferencesComponent {
  public routes = routes;
  public selectedValue1!: string;
  public selectedValue2!: string;
  selectedList1: data[] = [
    { value: 'English' },
    { value: 'Japanese' },
   
  ];
  selectedList2: data[] = [
    { value: 'United States (English)' },
    { value: 'Japan (Japanese)' },
   
  ];
}
