import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { DataFactoryService } from './data-factory.service';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public base: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public page: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public last: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public userLogin: boolean = false;

  private API_URL = environment.apiUrl;
  // private imgUrl = environment.imgurl;

  private token: string | null = null;

  loggedCurrentUser: any;
  loggedUserId: string = '';
  loggedUserEmail: string = '';
  loggedUserType: string = '';
  loggedMobile: string = '';

  // BehaviorSubject to track login state
   private userLoginSubject = new BehaviorSubject<boolean>(false);
  userLogin$: Observable<boolean> = this.userLoginSubject.asObservable();

    // Cart count observable
  private cartCountSource = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSource.asObservable();


  private wishlistCountSource = new BehaviorSubject<number>(0);
wishlistCount$ = this.wishlistCountSource.asObservable();

  constructor(private http: HttpClient,
    private dataFactoryService: DataFactoryService,

  ) {
    this.loadFromDataFactory();
  }

    // agar login success hota hai to yeh call karo
  setUserLoggedIn() {
    this.userLoginSubject.next(true);
  }

  


  private loadFromDataFactory(): void {
    const storedToken = this.dataFactoryService.getToken();
    const storedUser = this.dataFactoryService.getCurrentUser();
    if (storedToken) {
      this.token = storedToken;
    }
    if (storedUser) {
      this.loggedCurrentUser = storedUser;
    }

    this.userLoginSubject.next(!!this.token);
  }


  // login(credentials: any): Observable<any> {
  //   return this.http.post<any>(`${this.API_URL}/auth/login`, credentials)
  //     .pipe(
  //       map(response => {
  //         if (response.status === '1') {
  //           this.dataFactoryService.setToken(response.data.token);
  //           this.dataFactoryService.setCurrentUser(response.data);
  //           this.loggedUserType = response.data.loggedUserType;
  //           this.userLoginSubject.next(true);
  //           this.cartService.transferSessionCartToLoggedInCart();
  //           this.cartService.updateCartData();
  //         }
  //         return response;
  //       })
  //     );
  // }



  signin(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login/user-signin`, credentials)
      .pipe(
        map(response => {
          if (response.status === 'true') {
            this.dataFactoryService.setToken(response.data.token);
            this.dataFactoryService.setCurrentUser(response.data);

            this.loggedUserEmail = response.data.userEmail;
            this.loggedCurrentUser = response.data.name;
            this.loggedMobile = response.data.mobile;
            this.loggedUserType = response.data.userType;

            if (this.loggedUserType === 'supplier') {
              this.loggedUserId = response.data.supplierId;
            } else if (this.loggedUserType === 'user') {
              this.loggedUserId = response.data.userProfileId;
            } else if (this.loggedUserType === 'admin') {
              this.loggedUserId = response.data.adminId;
            }

            this.userLoginSubject.next(true);
          }
          return response;
        })
      );
  }

  currentLoginStatus() {
    return this.http.post<any>(`${this.API_URL}/auth/currentLoginStatus`, {})
  }

logout(): void {
  this.token = null;
  this.loggedCurrentUser = '';
  this.loggedUserType = '';
  this.loggedUserId = '';

  this.dataFactoryService.setToken('');
  this.dataFactoryService.setCurrentUser(null);

  this.userLoginSubject.next(false);

  // ✅ local storage bhi clear karo
  localStorage.clear();
  sessionStorage.clear();
}


  logoutCurrentSession(): void {
    this.logout();
  }

  signupUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/registration/userSignUp`, user)
      .pipe(
        map(response => response)
      );
  }


 



  private fatchLoggerUser() {
    this.loggedCurrentUser = this.dataFactoryService.getCurrentUser();
    if (this.loggedCurrentUser) {
      this.loggedUserEmail = this.loggedCurrentUser.loggedUserEmail;
      this.loggedUserId = this.loggedCurrentUser.loggedUserId;
      this.loggedUserType = this.loggedCurrentUser.loggedUserType;
    }
  }



  sendSignUpOTP(payload: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/registration/sendSignUpOTP`, payload);
  }

  sendOtp(payload: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/auth/sendOTP`, payload);
  }


  verifyOtp(payload: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/auth/verifyOTP`, payload);
  }

  updatePasswordByOtp(payload: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/auth/updatePasswordByOTP`, payload);
  }


  // date time conversion
  // changeInputDateFormat(inputDate: string): string {
  //   let formattedDate = '';
  //   if (inputDate) {
  //     const date = new Date(inputDate).getDate();
  //     const month = new Date(inputDate).getMonth() + 1;
  //     const Year = new Date(inputDate).getFullYear();
  //     formattedDate = ((date.toString().length == 1) ? '0' + date.toString() : date.toString()) + '/' + ((month.toString().length == 1) ? '0' + month.toString() : month.toString()) + '/' + Year.toString();
  //   }
  //   return formattedDate;
  // }

 changeInputDateFormat(inputDate: Date): string {
    if (!inputDate) return '';
    let dateObj: Date;

    // अगर input पहले से ही Date object है
    if (inputDate instanceof Date) {
      dateObj = inputDate;
    } else {
      // String को Date object में बदलें
      dateObj = new Date(inputDate);
    }

    if (isNaN(dateObj.getTime())) {
      console.error("Invalid date:", inputDate);
      return '';
    }

    const year = dateObj.getFullYear();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  // changeInputDateTimeFormat(inputDateTime: string): string {
  //   let formattedDateTime = '';
  //   let time = '';
  //   if (inputDateTime) {
  //     formattedDateTime = this.changeInputDateFormat(inputDateTime);
  //     const hours = new Date(inputDateTime).getHours();
  //     const minutes = (new Date(inputDateTime).getMinutes() > 9) ? new Date(inputDateTime).getMinutes().toString() : '0' + new Date(inputDateTime).getMinutes().toString();
  //     if (hours >= 12) {
  //       if (hours > 12) {
  //         time = (hours - 12).toString() + ':' + minutes + ' PM';
  //       } else {
  //         time = hours + ':' + minutes + ' PM';
  //       }

  //     } else if (hours == 0) {
  //       time = '12' + ':' + minutes + ' AM';
  //     } else {
  //       time = hours + ':' + minutes + ' AM';
  //     }
  //     formattedDateTime += ' ' + time;
  //   }
  //   return formattedDateTime;
  // }

  changeInputTimeFormat(inputTime: Date): string {
    let formattedTime = '';
    if (inputTime) {
      const hours = inputTime.getHours();
      const minutes = (inputTime.getMinutes() > 9) ? inputTime.getMinutes().toString() : '0' + inputTime.getMinutes().toString();
      if (hours >= 12) {
        if (hours > 12) {
          formattedTime = (hours - 12).toString() + ':' + minutes + ' PM';
        } else {
          formattedTime = hours + ':' + minutes + ' PM';
        }

      } else if (hours == 0) {
        formattedTime = '12' + ':' + minutes + ' AM';
      } else {
        formattedTime = hours + ':' + minutes + ' AM';
      }
    }
    return formattedTime;
  }

  changeHourFormatTime(timeString: string): string {
    let hourFormatTime = '';
    const currDate = new Date();
    hourFormatTime = this.MMDDYYFormat(currDate.toString());
    const [time, period] = timeString.split(' ');
    const [hour, minute] = time.split(':');
    let formattedHour = parseInt(hour);
    if (period === 'PM' && formattedHour !== 12) {
      formattedHour += 12;
    }
    if (period == 'AM' && formattedHour == 12) {
      formattedHour = 0;
    }
    return `${hourFormatTime} ${formattedHour}:${minute}`;

  }


  parseTime(timeString: string): Date {
    const [time, modifier] = timeString.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(modifier === 'PM' && hours < 12 ? hours + 12 : hours === 12 && modifier === 'AM' ? 0 : hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }


  MMDDYYFormat(inputDate: string): string {
    let formattedDate = '';
    if (inputDate) {
      const date = new Date(inputDate).getDate();
      const month = new Date(inputDate).getMonth() + 1;
      const Year = new Date(inputDate).getFullYear();
      formattedDate = month.toString() + '/' + date.toString() + '/' + Year.toString();
    }
    return formattedDate;
  }

  splitDateToTime(date: string): string {
    let dateFormat: any
    if (date) {
      if (date.includes(' ')) {
        dateFormat = date.split(' ');
      }
    }
    return dateFormat[0];
  }



  private activeTabSubject = new BehaviorSubject<number>(1);
  activeTab$ = this.activeTabSubject.asObservable();

  setActiveTab(tabIndex: number): void {
    this.activeTabSubject.next(tabIndex);
  }


  getTabIndex(tab: string): number {
    switch (tab) {
      // case 'dashboard': return 1;
      case 'profile': return 1;
      case 'appointments': return 2;
      case 'family': return 3;
      case 'labbooking': return 4;
      case 'medicalhistory': return 5;
      case 'labreports': return 6;
      case 'invoice': return 7;
      case 'medicine-reminder': return 8;
      default: return 1;
    }
  }



  getStateList() {
    return this.http.get<any>('assets/json/state.json')
      .pipe(
        map((res: any) => {
          return res;
        }));
  }





 getAllActiveProductData(): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });
  return this.http.get(`${this.API_URL}/product/get-all-active-products`, { headers });
}


 getAllActiveProductById(id: number): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.get(`${this.API_URL}/product/get-all-active-products/${id}`, { headers });
  }


  getAllProductVerifiedData(): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.get(`${this.API_URL}/product/get-all-verified-product-by-admin`, { headers });
  }



  getVerifiedProductById(id: number): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.get(`${this.API_URL}/product/get-product/${id}`, { headers });
  }




  


  addToCart(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.post(`${this.API_URL}/cart/add`, payload, { headers });
  }

   // Update cart count
  updateCartCount(count: number) {
    this.cartCountSource.next(count);
  }

  removeCart(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.post(`${this.API_URL}/cart/remove`, payload, { headers });
  }


  viewCart(userId: any): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.get(`${this.API_URL}/cart/view-cart/${userId}`, { headers });
  }




  placeOrder(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.post(`${this.API_URL}/order/place`, payload, { headers });
  }


 getAllOrders(userId: any): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.get(`${this.API_URL}/order/get-all-orders-by-userid/${userId}`, { headers });
  }

   getOrderDetails(orderId: any): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.get(`${this.API_URL}/order/detail/${orderId}`, { headers });
  }



  

  addAddress(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.post(`${this.API_URL}/address/add`, payload, { headers });
  }


getAllAddress(userProfileId: any): Observable<any> {
  const headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "true"
  });

  return this.http.get(`${this.API_URL}/address/get-address`, {
    headers,
    params: { userProfileId: userProfileId}   
  });
}


  updateUserData(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.post(`${this.API_URL}/user/update`, payload, { headers });
  }


  addReview(payload: FormData): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.post(`${this.API_URL}/review/add`, payload, { headers });
  }


  getReviewById(productId: string): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.get(`${this.API_URL}/review/${productId}`, { headers });
  }


  searhProductData(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.post(`${this.API_URL}/product/search-product`, formData,  { headers });
  }


  getImgesById(id: number): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.get(`${this.API_URL}/images/get-images/${id}`, { headers });
  }


  // Update wishlist count method
updateWishlistCount(count: number) {
  this.wishlistCountSource.next(count);
}

// Wishlist API call (example)
addToWishlist(payload: any) {
   const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
  return this.http.post(`${this.API_URL}/wishlist/add`, payload, { headers });
}


getWishListData(userId: any): Observable<any> {
    const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
    return this.http.get(`${this.API_URL}/wishlist/${userId}`, { headers });
  }

  removeFromWishlist(payload: any) {
   const headers = new HttpHeaders({
      "ngrok-skip-browser-warning": "true"
    });
  return this.http.post(`${this.API_URL}/wishlist/remove`, payload, { headers });
}




 private productData: any;
 setUserProductData(data: any) {
    this.productData = data;
  }

  getUserProductData() {
    return this.productData;
  }


}
