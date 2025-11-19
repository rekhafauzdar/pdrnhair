import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home-1',
        loadChildren: () =>
          import('./home1/home1.module').then((m) => m.Home1Module),
      },
      {
        path: 'home-2',
        loadChildren: () =>
          import('./home2/home2.module').then((m) => m.Home2Module),
      },
      {
        path: 'home-3',
        loadChildren: () =>
          import('./home3/home3.module').then((m) => m.Home3Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
