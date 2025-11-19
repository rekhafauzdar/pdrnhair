import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings.component';

const routes: Routes = [
  { path: '', component: ListingsComponent },
  {
    path: 'listing-details',
    loadChildren: () =>
      import('./listing-details/listing-details.module').then(
        (m) => m.ListingDetailsModule
      ),
  },
  {
    path: 'listing-grid',
    loadChildren: () =>
      import('./listing-grid/listing-grid.module').then(
        (m) => m.ListingGridModule
      ),
  },

   {
    path: 'listing-map',
    loadChildren: () =>
      import('./listing-map/listing-map.module').then(
        (m) => m.ListingMapModule
      ),
  },
  
  { 
    path: 'brand-products',
    loadChildren: () =>
      import('.//brand-products/breand-products.module').then(
        (m) => m.BrandProductsModule
      ),
  },
  {
    path: 'Cross-Border',
    loadChildren: () =>
      import('.//cross-border/cross-border.module').then(
        (m) => m.CrossBorderModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingsRoutingModule {}
