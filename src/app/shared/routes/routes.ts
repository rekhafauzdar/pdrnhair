export class routes {
  private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }
  public static get home(): string {
    return this.baseUrl + '/home';
  }
  public static get home2(): string {
    return this.baseUrl + '/home-2';
  }
  public static get home3(): string {
    return this.baseUrl + '/home-3';
  }
  public static get listingList(): string {
    return this.baseUrl + '/listings/listing-list';
  }
  public static get listingMap(): string {
    return this.baseUrl + '/listings/listing-map';
  }
  public static get listingDetails(): string {
    return this.baseUrl + '/listings/listing-details';
  }
  public static get listingGrid(): string {
    return this.baseUrl + '/listings/listing-grid';
  }

  

  

    public static get brandsProducts(): string {
    return this.baseUrl + '/listings/brand-products';
  }
  public static get aboutUs(): string {
    return this.baseUrl + '/pages/about-us';
  }
  public static get register(): string {
    return this.baseUrl + '/authentication/register';
  }
  public static get login(): string {
    return this.baseUrl + '/authentication/login';
  }
  public static get forgotPassword(): string {
    return this.baseUrl + '/authentication/forgot-password';
  }
  public static get resetPassword(): string {
    return this.baseUrl + '/authentication/reset-password';
  }
  public static get bookingPayment(): string {
    return this.baseUrl + '/booking/booking-payment';
  }
  public static get bookingList(): string {
    return this.baseUrl + '/booking/booking-list';
  }
  public static get invoiceDetails(): string {
    return this.baseUrl + '/booking/invoice-details';
  }
  public static get error404(): string {
    return this.baseUrl + '/error/error404';
  }
  public static get error500(): string {
    return this.baseUrl + '/error/error500';
  }
  public static get pricing(): string {
    return this.baseUrl + '/pages/pricing';
  }
  public static get faq(): string {
    return this.baseUrl + '/pages/faq';
  }

  public static get B2B(): string {
    return this.baseUrl + '/pages/register-with-us';
  } 

  public static get B2BSection(): string {
    return this.baseUrl + '/pages/sell-on-bellaluna';
  }

  public static get beautyBook(): string {
    return this.baseUrl + '/pages/beauty-book';
  }
public static get allbrands(): string {
    return this.baseUrl + '/pages/all-brands';
  }

  public static get gallery(): string {
    return this.baseUrl + '/pages/gallery';
  }
  public static get ourTeam(): string {
    return this.baseUrl + '/pages/our-team';
  }
  public static get testimonial(): string {
    return this.baseUrl + '/pages/testimonial';
  }
  public static get termsCondition(): string {
    return this.baseUrl + '/pages/terms-condition';
  }
  public static get privacyPolicy(): string {
    return this.baseUrl + '/pages/privacy-policy';
  }
    public static get ReturnCancellation(): string {
    return this.baseUrl + '/pages/ReturnCancellation';
  }
  public static get maintenance(): string {
    return this.baseUrl + '/pages/maintenance';
  }
  public static get blogList(): string {
    return this.baseUrl + '/blog/blog-list';
  }
  public static get blogGrid(): string {
    return this.baseUrl + '/blog/blog-grid';
  }
  public static get blogDetails(): string {
    return this.baseUrl + '/blog/blog-details';
  }
  public static get contactUs(): string {
    return this.baseUrl + '/pages/contact-us';
  }
    public static get CeoGreeting(): string {
    return this.baseUrl + '/pages/CeoGreeting';
  }
      public static get Vision2030Module(): string {
    return this.baseUrl + '/pages/Vision2030';
  }
    public static get CompanyHistory(): string {
    return this.baseUrl + '/pages/CompanyHistory';
  }
    public static get SocialContribution(): string {
    return this.baseUrl + '/pages/SocialContribution';
  }
      public static get AffiliateInquiry(): string {
    return this.baseUrl + '/pages/AffiliateInquiry';
  }
        public static get LocheNews(): string {
    return this.baseUrl + '/pages/LocheNews';
  }
          public static get CleanRoom(): string {
    return this.baseUrl + '/pages/CleanRoom';
  }
  public static get comingSoon(): string {
    return this.baseUrl + '/pages/coming-soon';
  }
   public static get globalstore(): string {
    return this.baseUrl + '/pages/global-stores';
  }
  public static get user(): string {
    return this.baseUrl + '/user';
  }
  public static get userPayment(): string {
    return this.user + '/user-payment';
  }
  public static get userWallet(): string {
    return this.user + '/user-wallet';
  }
      public static get faquestions(): string {
    return this.user + '/faquestions';
  }
    public static get accountinfo(): string {
    return this.user + '/accountInfo';
  }
   public static get order(): string {
    return this.user + '/my-orders';
  }
  public static get userReview(): string {
    return this.user + '/user-review';
  }
  public static get userWishlist(): string {
    return this.user + '/user-wishlist';
  }
  public static get userSettings(): string {
    return this.user + '/settings/user-settings';
  }
  public static get userPreference(): string {
    return this.user + '/user-preferences';
  }

  public static get userBookingCancelled(): string {
    return this.user + '/user-booking-cancelled';
  }
  public static get userBookingComplete(): string {
    return this.user + '/user-booking-complete';
  }
  public static get userBookingInprogress(): string {
    return this.user + '/user-booking-inprogress';
  }
  public static get userBookingUpcoming(): string {
    return this.user + '/user-booking-upcoming';
  }
  public static get userBookings(): string {
    return this.user + '/user-bookings';
  }


 public static get myOrders(): string {
    return this.user + '/my-orders';
  }


   public static get trackingOrder(): string {
    return this.user + '/tracking-order';
  }

  public static get userDashboard(): string {
    return this.user + '/user-dashboard';
  }
  public static get userIntegration(): string {
    return this.user + '/settings/user-integration';
  }
  public static get userMessages(): string {
    return this.user + '/user-messages';
  }
  public static get userReviews(): string {
    return this.user + '/user-reviews';
  }
  public static get userNotification(): string {
    return this.user + '/settings/user-notification';
  }
  public static get userPreferences(): string {
    return this.user + '/settings/user-preferences';
  }
  public static get userSecurity(): string {
    return this.user + '/settings/user-security';
  }
  public static get bookingAdon(): string {
    return this.baseUrl + '/booking/booking-adon';
  }
  public static get bookingSuccess(): string {
    return this.baseUrl + '/booking/booking-success';
  }
  public static get bookingDetails(): string {
    return this.baseUrl + '/booking/booking-details';
  }
  public static get bookingCheckout(): string {
    return this.baseUrl + '/booking/booking-checkout';
  }
  public static get bookingCalendar(): string {
    return this.user + '/bookings-calendar';
  }
  public static get bookingCancelledCalendar(): string {
    return this.user + '/booking-cancelled-callendar';
  }
  public static get bookingCompletedCalendar(): string {
    return this.user + '/booking-complete-callendar';
  }
  public static get bookingUpcomingCalendar(): string {
    return this.user + '/booking-upcoming-callendar';
  }
  public static get bookingInprogressCalendar(): string {
    return this.user + '/booking-inprogress-callendar';
  }




  
}
