import { Component } from '@angular/core';

@Component({
  selector: 'app-company-history',
  templateUrl: './company-history.component.html',
  styleUrl: './company-history.component.css'
})
export class CompanyHistoryComponent {
timelineData = [
    {
      year: '2015',
      title: 'COMPANY.TIMELINE_DATA.TITLE_2015',
      description: 'COMPANY.TIMELINE_DATA.DESCRIPTION_2015',
      position: 'left'
    },
    {
      year: '2017',
      title: 'COMPANY.TIMELINE_DATA.TITLE_2017',
      description: 'COMPANY.TIMELINE_DATA.DESCRIPTION_2017',
      position: 'right'
    },
    {
      year: '2019',
      title: 'COMPANY.TIMELINE_DATA.TITLE_2019',
      description: 'COMPANY.TIMELINE_DATA.DESCRIPTION_2019',
      position: 'left'
    },
    {
      year: '2021',
      title: 'COMPANY.TIMELINE_DATA.TITLE_2021',
      description: 'COMPANY.TIMELINE_DATA.DESCRIPTION_2021',
      position: 'right'
    },
    {
      year: '2026',
      title: 'COMPANY.TIMELINE_DATA.TITLE_2026',
      description: 'COMPANY.TIMELINE_DATA.DESCRIPTION_2026',
      position: 'left'
    },
    {
      year: '2026',
      title: 'COMPANY.TIMELINE_DATA.TITLE_2026',
      description: 'COMPANY.TIMELINE_DATA.DESCRIPTION_2026',
      position: 'right'
    },
    {
      year: '2027',
      title: 'COMPANY.TIMELINE_DATA.TITLE_2027',
      description: 'COMPANY.TIMELINE_DATA.DESCRIPTION_2027',
      position: 'left'
    }
  ];
}
