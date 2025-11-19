import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-listing-map',
  templateUrl: './listing-map.component.html',
  styleUrl: './listing-map.component.css'
})
export class ListingMapComponent {
  public routes = routes
  showTimePicker: Array<string> = [];
  myTime: Date = new Date();
  myTime2: Date = new Date();
  toggleTimePicker(value: string): void {
    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value;
    } else {
      this.showTimePicker = [];
    }
  }
  formatTime(date: Date) {
    const selectedDate: Date = new Date(date);
    return this.datePipe.transform(selectedDate, 'h:mm a');
  }
  constructor(private datePipe: DatePipe){

  }
  public selectedValue1!: string;
  public selectedValue2!: string;
  selectedList1: data[] = [
    { value: '5' },
    { value: '10' },
    { value: '15' },
    { value: '20' },
    { value: '30' },
    
  ];
  selectedList2: data[] = [
    { value: 'Newest' },
    { value: 'Relevance' },
    { value: 'Low to High' },
    { value: 'High to Low' },
    { value: 'Best Rated' },
    { value: 'Distance' },
    { value: 'Popularity' },
    
  ];
  infowindow: any;
  bounds = new google.maps.LatLngBounds();
  map: any;
  locations =[{
    "id":"01",
    "car_brand":"Ferrai",
    "car_name":"Ferrari 458 MM Special",
    "car_image":'assets/img/car-list-1.jpg',
    "reviews":"(4.0) 160",
    "address":"Newyork, USA",
    "km":"3.0m",
    "amount":"$160",
    "lat":53.470692,
    "lng":-2.220328,
    "icons":"'assets/img/icons/car-marker-01.svg'",
    "profile_link":"listing-details.html",
    "image":'assets/img/profiles/avatar-04.jpg'
    }, {
      
    "id":"02",
    "car_brand":"BMW",
    "car_name":"BMW 640 XI Gran Turismo",
    "car_image":'assets/img/car-list-2.jpg',
    "reviews":"(4.0) 165 ",
    "address":"Pattaya, Thailand",
    "km":"3.7m",
    "amount":"$160",
    "lat":53.469189,
    "lng":-2.199262,
    "icons":"'assets/img/icons/car-marker-01.svg'",
    "profile_link":"listing-details.html",
    "image":'assets/img/profiles/avatar-03.jpg'
    }, {
    "id":"03",
    "car_brand":"Ford",
    "car_name":"Ford Mustang, Blue 2014",
    "car_image":'assets/img/car-list-3.jpg',
    "reviews":"(4.0) 165 ",
    "address":"Lasvegas, USA",
    "km":"4.0m",
    "amount":"$150",
    "lat":53.468665,
    "lng":-2.189269,
    "icons":"default",
    "profile_link":"listing-details.html",
    "image":'assets/img/profiles/avatar-06.jpg'
    }, {
    "id":"04",
    "car_brand":"Audi",
    "car_name":"Audi A3 2019 new",
    "car_image":'assets/img/car-list-5.jpg',
    "reviews":"(4.0) 150 ",
    "address":"Newyork, USA",
    "km":"3.5m",
    "amount":"$45",
    "lat":53.463894,
    "lng":-2.177880,
    "icons":"default",
    "profile_link":"listing-details.html",
    "image":'assets/img/profiles/avatar-03.jpg'
    }, {
    "id":"05",
    "car_brand":"Ford",
    "car_name":"Ford Mustang 4.0 AT",
    "car_image":'assets/img/car-list-6.jpg',
    "reviews":"(4.0) 170  ",
    "address":"Lasvegas, USA",
    "km":"4.1m",
    "amount":"$90",
    "lat":53.466359,
    "lng":-2.213314,
    "icons":"default",
    "profile_link":"listing-details.html",
    "image":'assets/img/profiles/avatar-03.jpg'
    }
    ];
  ngOnInit(): void {
    this.initilize();
  }
  initilize() {
    window.location.reload();
    window.stop();
    this.bounds = new google.maps.LatLngBounds();
    const mapOptions = {
      zoom: 14,
      center: { lat: 53.470692, lng: -2.220328 },
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );
    this.map.slide = true;

    this.setMarkers(this.map, this.locations);
    this.infowindow = new google.maps.InfoWindow({
      content: 'loading...',
    });
    // google.maps.event.addListener(this.infowindow, 'closeclick', function () {
    //   this.infowindow.close();
    // });
    // this.slider = window.setTimeout(this.show, 3000);
  }
  setInfo(marker: { profile_link: string; doc_name: string; car_image: string; address: string; car_brand: string; image: string;car_name: string;reviews: string; km:string; amount:string;}) {
    const content =
    '<div class="listing-item" style="width: 100%; display: inline-block;">'+											
    '<div class="listing-img">'+	
      '<a href="' + marker.profile_link + '">'+	
        '<img src="' + marker.car_image + '" class="img-fluid" alt="Audi">'+	
      '</a>'+	
      '<div class="fav-item justify-content-end">'+	
        '<a href="javascript:void(0)" class="fav-icon">'+	
          '<i class="feather-heart"></i>'+	
        '</a>	'+										
      '</div>'+		
      '<span class="featured-text">' + marker.car_brand + '</span>'+	
    '</div>'+											
    '<div class="listing-content">'+	
      '<div class="listing-features d-flex align-items-end justify-content-between">'+	
        '<div class="list-rating">'+	
          '<a href="javascript:void(0)" class="author-img">'+	
          '<img src="' + marker.image + '" class="img-fluid" alt="Audi">'+
          '</a>'+
          '<h3 class="listing-title">'+	
            '<a href="' + marker.profile_link + '">' + marker.car_name + '</a>'+	
          '</h3>			'+															  
          '<div class="list-rating">			'+					
          '	<i class="fas fa-star filled"></i>'+	
            '<i class="fas fa-star filled"></i>'+	
            '<i class="fas fa-star filled"></i>'+	
            '<i class="fas fa-star filled"></i>'+	
            '<i class="fas fa-star"></i>'+	
            '<span>' + marker.reviews + ' Reviews</span>'+
          '</div>'+
        '</div>'+
        '<div class="list-km">'+
          '<span class="km-count"><img src="assets/img/icons/map-pin.svg" alt="author">' + marker.km + '</span>'+
        '</div>'+
      '</div> '+
      '<div class="listing-details-group">'+
        '<ul>'+
          '<li>'+
            '<span><img src="assets/img/icons/car-parts-05.svg" alt="Manual"></span>'+
            '<p>Manual</p>'+
          '</li>'+
          '<li>'+
            '<span><img src="assets/img/icons/car-parts-02.svg" alt="10 KM"></span>'+
            '<p>10 KM</p>'+
          '</li>'+
          '<li>'+
            '<span><img src="assets/img/icons/car-parts-03.svg" alt="Petrol"></span>'+
            '<p>Petrol</p>'+
          '</li>'+
        '</ul>'+	
        '<ul>'+
          '<li>'+
            '<span><img src="assets/img/icons/car-parts-04.svg" alt="Power"></span>'+
            '<p>Power</p>'+
          '</li>'+
          '<li>'+
            '<span><img src="assets/img/icons/car-parts-05.svg" alt="2019"></span>'+	
            '<p>2019</p>'+	
          '</li>'+	
          '<li>'+	
            '<span><img src="assets/img/icons/car-parts-06.svg" alt="Persons"></span>'+	
            '<p>4 Persons</p>'+	
          '</li>'+	
        '</ul>'+	
      '</div>'+																	 
      '<div class="listing-location-details">'+	
        '<div class="listing-price">'+	
          '<span><i class="feather-map-pin"></i></span>' + marker.address + ''+	
        '</div>'+	
        '<div class="listing-price">'+	
          '<h6>' + marker.amount + '<span>/ Day</span></h6>'+	
        '</div>'+	
      '</div>'+	
      '<div class="listing-button">'+	
        '<a href="' + marker.profile_link + '" class="btn btn-order"><span><i class="feather-calendar me-2"></i></span>'+	'Rent Now</a>'+	
      '</div>'+		
    '</div>'+	
  '</div>';	
    this.infowindow.setContent(content);
  }
  setMarkers(map: any, locations: any) {
    for (let i = 0; i < locations.length; i++) {
      const item = locations[i];
      const latlng = new google.maps.LatLng(item.lat, item.lng);
      const marker = new google.maps.Marker({
        position: latlng,
        map: map,

        icon: 'assets/img/marker.png',
      });
      this.bounds.extend(latlng);

      google.maps.event.addListener(marker, 'click', () => {
        this.setInfo(item);
        this.infowindow.open(map, marker);
      });
    }
    map.fitBounds(this.bounds);
    google.maps.event.addListener(map, 'zoom_changed', function () {
      if (map.zoom > 16) map.slide = false;
    });
  }
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  public isClassAdded: boolean[] = [false];
  isPopupVisible: boolean = false;
  

  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }
  
 
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }

  
}
