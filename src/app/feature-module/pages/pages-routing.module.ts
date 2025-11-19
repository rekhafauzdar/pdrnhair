import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  {
    path: 'terms-condition',
    loadChildren: () =>
      import('./terms-condition/terms-condition.module').then(
        (m) => m.TermsConditionModule
      ),
  },
  {
    path: 'maintenance',
    loadChildren: () =>
      import('./maintenance/maintenance.module').then(
        (m) => m.MaintenanceModule
      ),
  },
  {
    path: 'coming-soon',
    loadChildren: () =>
      import('./coming-soon/coming-soon.module').then(
        (m) => m.ComingSoonModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },
  {
    path: 'testimonial',
    loadChildren: () =>
      import('./testimonial/testimonial.module').then(
        (m) => m.TestimonialModule
      ),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pricing/pricing.module').then((m) => m.PricingModule),
  },
  {
    path: 'user-profile',
    loadChildren: () =>
      import('./our-team/our-team.module').then((m) => m.OurTeamModule),
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
  },
  {
    path: 'register-with-us',
    loadChildren: () => import('./b2b/b2b.module').then((m) => m.B2bModule),
  },
  {
    path: 'sell-on-bellaluna',
    loadChildren: () => import('./b2b-section/b2b-section.module').then((m) => m.B2bSectionModule),
  },
  {
    path: 'beauty-book',
    loadChildren: () => import('./beauty-book/beauty-book.module').then((m) => m.BeautyBookModule),
  },
   {
    path: 'all-brands',
    loadChildren: () => import('./all-brands/all-brands.module').then((m) => m.AllBrandsModule),
  },
   {
    path: 'global-stores',
    loadChildren: () => import('./global-store/global-store.module').then((m) => m.GlobalStoreModule),
  },

     {
    path: 'ReturnCancellation',
    loadChildren: () => import('./return-cancellation/return-cancellation.module').then((m) => m.ReturnCancellationModule),
  },
    {
    path: 'CeoGreeting',
    loadChildren: () => import('./ceo-greeting/ceo-greeting.module').then( (m) => m.CeoGreetingModule),
  },
      {
    path: 'Vision2030',
    loadChildren: () => import('./vision-2030/vision-2030.module').then( (m) => m.Vision2030Module),
  },
        {
    path: 'CompanyHistory',
    loadChildren: () => import('./company-history/company-history.module').then( (m) => m.CompanyHistoryModule),
  },
          {
    path: 'SocialContribution',
    loadChildren: () => import('./social-contribution/social-contribution.module').then( (m) => m.SocialContributionModule),
  },
            {
    path: 'AffiliateInquiry',
    loadChildren: () => import('./affiliate-inquiry/affiliate-inquiry.module').then( (m) => m.AffiliateInquiryModule),
  },
      {
    path: 'LocheNews',
    loadChildren: () => import('./loche-news/loche-news.module').then( (m) => m.LocheNewsModule ),
  },
        {
    path: 'CleanRoom',
    loadChildren: () => import('./clean-room/clean-room.module').then( (m) => m.CleanRoomModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
