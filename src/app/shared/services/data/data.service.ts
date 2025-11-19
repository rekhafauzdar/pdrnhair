import { Injectable } from '@angular/core';
import { routes } from '../../routes/routes';
import { apiResultFormat, header } from '../model/model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) { }
  public getuserPayment() {
    return this.http.get<apiResultFormat>('assets/JSON/user-payment.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getuserReview() {
    return this.http.get<apiResultFormat>('assets/JSON/user-review.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getUserBookingCancelled() {
    return this.http
      .get<apiResultFormat>('assets/JSON/user-booking-cancelled.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getuserWallet() {
    return this.http.get<apiResultFormat>('assets/JSON/user-wallet.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getUserBookingComplete() {
    return this.http
      .get<apiResultFormat>('assets/JSON/user-booking-complete.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getUserBookingInprogress() {
    return this.http
      .get<apiResultFormat>('assets/JSON/user-booking-inprogress.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getUserBookingUpcoming() {
    return this.http
      .get<apiResultFormat>('assets/JSON/user-booking-upcoming.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }
  public getUserBookings() {
    return this.http
      .get<apiResultFormat>('assets/JSON/user-bookings.json')
      .pipe(
        map((res: apiResultFormat) => {
          return res;
        })
      );
  }



  public header: header[] = [
    {
      tittle: 'HEADER.COMPANY',
      showAsTab: false,
      separateRoute: false,
      menu: [
        { menuValue: 'HEADER.CEO_GREETING', routes: routes.CeoGreeting, hasSubRoute: false, showSubRoute: false, subMenus: [], },
        { menuValue: 'HEADER.VISION', routes: routes.Vision2030Module, hasSubRoute: false, showSubRoute: false, subMenus: [], },
        { menuValue: 'HEADER.HISTORY', routes: routes.CompanyHistory, hasSubRoute: false, showSubRoute: false, subMenus: [], },
        { menuValue: 'HEADER.SOCIAL_CONTRIBUTION', routes: routes.SocialContribution, hasSubRoute: false, showSubRoute: false, subMenus: [], },
      ],
    },
    {
      tittle: 'HEADER.BRAND',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'HEADER.LOCHE_DERMA_MICRO_9',
          routes: routes.listingGrid,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        }

      ]
    },
    {
      tittle: 'HEADER.PRODUCTS',
      showAsTab: false,
      separateRoute: false,
      menu: [
        { menuValue: 'HOME.PROMO.DERMA_PN_Eye', routes: routes.listingGrid, hasSubRoute: false, showSubRoute: false, subMenus: [], },
        { menuValue: 'HOME.PROMO.DERMA_PN_1', routes: routes.listingGrid, hasSubRoute: false, showSubRoute: false, subMenus: [], },
        { menuValue: 'HOME.PROMO.DERMA_PN_2', routes: routes.listingGrid, hasSubRoute: false, showSubRoute: false, subMenus: [], },
        { menuValue: 'HOME.PROMO.DERMA_PN_3', routes: routes.listingGrid, hasSubRoute: false, showSubRoute: false, subMenus: [], },

      ]
    },

    {
      tittle: 'HEADER.RND',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'HEADER.INDIAN_HOSPITALS',
          routes: routes.CeoGreeting,
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            { menuValue: 'HEADER.KOREA_HEALTH_CENTER', routes: routes.CeoGreeting, hasSubRoute: false, showSubRoute: false, subMenus: [], },
          ]
        },
        { menuValue: 'HEADER.RND_TECH', routes: routes.CeoGreeting, hasSubRoute: false, showSubRoute: false, subMenus: [], },
        { menuValue: 'HEADER.CLEAN_ROOM', routes: routes.CleanRoom, hasSubRoute: false, showSubRoute: false, subMenus: [], },
        { menuValue: 'HEADER.CERTIFICATIONS', routes: routes.CeoGreeting, hasSubRoute: false, showSubRoute: false, subMenus: [], },

        {
          menuValue: 'HEADER.COOPERATIVE_ORG',
          routes: routes.CeoGreeting,
          hasSubRoute: true,
          showSubRoute: false,
          subMenus: [
            { menuValue: 'HEADER.PARAS_HOSPITAL', routes: routes.CeoGreeting, hasSubRoute: false, showSubRoute: false, subMenus: [], },
            { menuValue: 'HEADER.ALL_INDIA_COLLEGE', routes: routes.CeoGreeting, hasSubRoute: false, showSubRoute: false, subMenus: [], },
            { menuValue: 'HEADER.ALPHA_DENTAL', routes: routes.CeoGreeting, hasSubRoute: false, showSubRoute: false, subMenus: [], },
            { menuValue: 'HEADER.OSONG_MEDICAL', routes: routes.CeoGreeting, hasSubRoute: false, showSubRoute: false, subMenus: [], },
            { menuValue: 'HEADER.GIMHAE_FOUNDATION', routes: routes.CeoGreeting, hasSubRoute: false, showSubRoute: false, subMenus: [], }
          ]
        }
      ]
    },

    {
      tittle: 'HEADER.CUSTOMER_CENTER',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'HEADER.AFFILIATE_INQUIRY',
          routes: routes.AffiliateInquiry,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'HEADER.QNA',
          routes: routes.CeoGreeting,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'HEADER.OEM_ODM_INQUIRIES',
          routes: routes.CeoGreeting,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        }
      ]
    },





    {
      tittle: 'HEADER.PR',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'HEADER.PRESS_RELEASE',
          routes: routes.LocheNews,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'HEADER.PROMOTIONAL_VIDEO',
          routes: routes.CeoGreeting,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        },
        {
          menuValue: 'HEADER.ADVERTISING',
          routes: routes.CeoGreeting,
          hasSubRoute: false,
          showSubRoute: false,
          subMenus: [],
        }
      ]
    },





  ];




  public carousel = [
    {
      img: 'assets/img/profiles/profile.png',
      Name: 'Himani Singh',
      rating: '(5.0)',
      para: 'Bellaluna cosmetics are top-notch! The blend of Korean and Indian ingredients works wonders for my skin. Plus, their software makes ordering and tracking so easy!',
    },
    {
      img: 'assets/img/profiles/avatar-18.jpg',
      Name: 'Ananya R',
      rating: '(5.0)',
      para: 'The best online cosmetic shopping experience! Their 24/7 support team is super helpful, and the product recommendations are spot on.',
    },
    {
      img: 'assets/img/profiles/avatar-16.jpg',
      Name: 'Priya Mishra',
      rating: '(5.0)',
      para: 'Fast delivery, great support, and amazing products! I love the free shipping and money-back guarantee—it gives me complete confidence in every purchase.',
    },
    {
      img: 'assets/img/profiles/avatar-18.jpg',
      Name: 'Neha',
      rating: '(5.0)',
      para: 'Authentic Customer Reviews – Users can share detailed feedback on product effectiveness, texture, and results.',
    },
  ];

  public testimonial = [
    {
      img: 'assets/img/profiles/avatar-02.jpg',
      Name: 'Rabien Ustoc',
      rating: '(5.0)',
      para: ' Renting a car from Dreams rent made my vacation so much smoother! The process was quick and easy, the car was clean and well-maintained, and the staff were friendly and helpful.',
    },
    {
      img: 'assets/img/profiles/avatar-03.jpg',
      Name: 'Valerie L. Ellis',
      rating: '(5.0)',
      para: 'As a frequent business traveller, I rely on Dreams rent for all my needs. Their wide selection of vehicles, convenient locations, and competitive prices make them my go-to choice every time. Plus, their customer service is top-notch!',
    },
    {
      img: 'assets/img/profiles/avatar-04.jpg',
      Name: 'Laverne Marier',
      rating: '(5.0)',
      para: 'Renting a car from Dreams rent made our family vacation unforgettable and top-notch customer service. The spacious SUV we rented comfortably fit our family and all our luggage, and it was a smooth ride throughout our trip.',
    },
    {
      img: 'assets/img/profiles/avatar-06.jpg',
      Name: 'Sydney Salmons',
      rating: '(5.0)',
      para: 'As a frequent business traveller, I rely on Dreams rent for all my needs. Their wide selection of vehicles, convenient locations, and competitive prices make them my go-to choice every time. Plus, their customer service is top-notch!',
    },
    {
      img: 'assets/img/profiles/avatar-07.jpg',
      Name: 'Lucas Moquin',
      rating: '(5.0)',
      para: 'Renting a car from Dreams rent made our family vacation unforgettable and top-notch customer service. The spacious SUV we rented comfortably fit our family and all our luggage, and it was a smooth ride throughout our trip.',
    },
  ];

  public listingGrid = [
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-01.jpg',
      img2: 'assets/img/profiles/avatar-0.jpg',
      carModel: 'Toyota Camry SE 350',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '5 Persons',
      country: 'Germany',
      price: '$400',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'KIA',
      img1: 'assets/img/cars/car-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      carModel: 'Kia Soul 2016',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Diesel',
      carDetail5: '2016',
      carDetail6: '5 Persons',
      country: 'Belgium',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Audi',
      img1: 'assets/img/cars/car-03.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      carModel: 'Audi A3 2019 new',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '4 Persons',
      country: 'Newyork, USA',
      price: '$45',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Ferrai',
      img1: 'assets/img/cars/car-04.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      carModel: 'Ferrari 458 MM Speciale',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '14 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Basic',
      carDetail5: '2022',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$160',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: '',
      img2: 'assets/img/profiles/avatar-05.jpg',
      carModel: '2018 Chevrolet Camaro',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '18 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '4 Persons',
      country: 'Germany',
      price: '$36',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Acura',
      img1: 'assets/img/cars/car-06.jpg',
      img2: 'assets/img/profiles/avatar-06.jpg',
      carModel: 'Acura Sport Version',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '12 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2013',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: 'assets/img/cars/car-07.jpg',
      img2: 'assets/img/profiles/avatar-07.jpg',
      carModel: 'Chevrolet Pick Truck 3.5L',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2012',
      carDetail6: '5 Persons',
      country: 'Spain',
      price: '$77',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Toyota',
      img1: 'assets/img/cars/car-08.jpg',
      img2: 'assets/img/profiles/avatar-08.jpg',
      carModel: 'Toyota Tacoma 4WD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 miles',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Accura',
      img1: 'assets/img/cars/car-09.jpg',
      img2: 'assets/img/profiles/avatar-10.jpg',
      carModel: 'Acura RDX FWD',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '42 miles',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2021',
      carDetail6: '5 Persons',
      country: 'Dallas, USA',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'KIA',
      img1: 'assets/img/cars/car-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      carModel: 'Kia Soul 2016',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Diesel',
      carDetail5: '2016',
      carDetail6: '5 Persons',
      country: 'Belgium',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
  ];

  public listingDetails = [
    {
      img: 'assets/img/product/product-3.avif',
    },
    {
      img: 'assets/img/product/product-3(1).avif',
    },
    {
      img: 'assets/img/product/product-3(2).avif',
    },
    {
      img: 'assets/img/product/product-3(3).avif',
    },
    // {
    //   img: 'assets/img/product/slider-05.jpg',
    // },
  ];






  public thumbnails1 = [
    {
      img: 'assets/img/profiles/avatar-11.jpg',
    },
    {
      img: 'assets/img/profiles/avatar-02.jpg',
    },
    {
      img: 'assets/img/profiles/avatar-03.jpg',
    },
    {
      img: 'assets/img/profiles/avatar-04.jpg',
    },
  ];
  public testimonials = [
    {
      name: 'Marian Hendriques',
      location: 'Dubai, Emirates',

      title: '“ From a Satisfied Business Traveler “',
      content: 'As a frequent business traveler, I rely on Dreams Rent for all my transportation needs. Their extensive fleet of vehicles, convenient locations, and competitive pricing make them my go-to choice every time. Plus, their friendly staff always go the extra mile to ensure a seamless rental experience.'
    },
    {
      name: 'Lyon Avenue',
      location: 'Derby, UK',

      title: '“ David\'s Urban Exploration “',
      content: 'As a frequent traveler, finding reliable bike rental services is crucial for me. I stumbled upon this website during my recent trip, and I\'m glad I did. The process of booking was seamless, and the prices were reasonable. The best part was the quality of the bikes; they were well-maintained and comfortable to ride.'
    },
    {
      name: 'Westfall Avenue',
      location: 'New York, USA',

      title: '“ Sarah\'s Adventure “',
      content: 'Absolutely loved my experience with Dreams Rent! Booking was a breeze; their website is user-friendly and intuitive. The bike I rented was in excellent condition, which made exploring the city a joy. What stood out the most was the exceptional customer service.'
    },
    {
      name: 'Saint Clair Street',
      location: 'Norwich, UK',

      title: '“ Edward\'s Scenic Ride “',
      content: 'From start to finish, renting a bike through this website was an absolute pleasure. The website interface was easy to navigate, and I could quickly find the perfect bike for my needs. When I arrived to pick up the bike, I was impressed by its excellent condition. It was evident that they take pride in maintaining their fleet.'
    }

  ];

  public thumbnails = [
    {
      img: 'assets/img/cars/slider-thum-01.jpg',
    },
    {
      img: 'assets/img/cars/slider-thum-02.jpg',
    },
    {
      img: 'assets/img/cars/slider-thum-03.jpg',
    },
    {
      img: 'assets/img/cars/slider-thum-04.jpg',
    },
    {
      img: 'assets/img/cars/slider-thum-05.jpg',
    },
  ];
  public gallery = [
    {
      img: 'assets/img/gallery/gallery-01.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-01.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-02.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-02.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-03.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-03.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-04.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-04.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-05.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-05.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-06.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-06.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-07.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-07.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-08.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-08.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-09.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-09.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-10.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-10.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-11.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-11.jpg',
    },
    {
      img: 'assets/img/gallery/gallery-12.jpg',
      thumbImg: 'assets/img/gallery/gallery-thum-12.jpg',
    },
  ];
  public interestedCars = [
    {
      carName: 'KIA',
      img1: 'assets/img/cars/car-02.jpg',
      img2: 'assets/img/profiles/avatar-02.jpg',
      carModel: 'Kia Soul 2016',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '22 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Diesel',
      carDetail5: '2016',
      carDetail6: '5 Persons',
      country: 'Belgium',
      price: '$80',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: '',
      img2: 'assets/img/profiles/avatar-05.jpg',
      carModel: '2018 Chevrolet Camaro',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '18 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '4 Persons',
      country: 'Germany',
      price: '$36',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Audi',
      img1: 'assets/img/cars/car-03.jpg',
      img2: 'assets/img/profiles/avatar-03.jpg',
      carModel: 'Audi A3 2019 new',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '10 KM',
      carDetail3: 'Petrol',
      carDetail4: 'Power',
      carDetail5: '2019',
      carDetail6: '4 Persons',
      country: 'Newyork, USA',
      price: '$45',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Ferrai',
      img1: 'assets/img/cars/car-04.jpg',
      img2: 'assets/img/profiles/avatar-04.jpg',
      carModel: 'Ferrari 458 MM Speciale',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '14 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Basic',
      carDetail5: '2022',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$160',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Chevrolet',
      img1: '',
      img2: 'assets/img/profiles/avatar-05.jpg',
      carModel: '2018 Chevrolet Camaro',
      rating: '(5.0)',
      carDetail1: 'Manual',
      carDetail2: '18 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2018',
      carDetail6: '4 Persons',
      country: 'Germany',
      price: '$36',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
    {
      carName: 'Acura',
      img1: 'assets/img/cars/car-06.jpg',
      img2: 'assets/img/profiles/avatar-06.jpg',
      carModel: 'Acura Sport Version',
      rating: '(5.0)',
      carDetail1: 'Auto',
      carDetail2: '12 KM',
      carDetail3: 'Diesel',
      carDetail4: 'Power',
      carDetail5: '2013',
      carDetail6: '5 Persons',
      country: 'Newyork, USA',
      price: '$30',
      heading: '/ Day',
      text: 'Rent Now',
      like: false,
    },
  ];
}
