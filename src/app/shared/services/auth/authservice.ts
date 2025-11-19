import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../routes/routes';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataFactoryService } from '../common/data-factory.service';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = environment.apiUrl;
  // private imgUrl = environment.imgurl;

  constructor(private router: Router,
    private http: HttpClient,
    private dataFactoryService: DataFactoryService,
  ) {}


    loggedCurrentUser: any;
  loggedMobile: any;
  loggedUserId: string = '';
  loggedUserEmail: string = '';
  loggedUserType: string = '';

 userSignIn(data: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login/user-signin`, data)
      .pipe(
        map(response => {
          if (response.status === 'true') {
            this.dataFactoryService.setToken(response.data.token);
            this.dataFactoryService.setCurrentUser(response.data);
            this.loggedUserType = response.data.userType;
             this.loggedUserEmail = response.data.email;
              this.loggedCurrentUser = response.data.name;
                this.loggedMobile = response.data.mobile;

             if(this.loggedUserType==='user'){
              this.loggedUserId = response.data.userProfileId;
             }else if(this.loggedUserType==='supplier'){
              this.loggedUserId = response.data.supplierId;
             }else if(this.loggedUserType==='admin'){
              this.loggedUserId = response.data.adminId;
             }


            // this.userLoginSubject.next(true);
            // this.cartService.transferSessionCartToLoggedInCart();
            // this.cartService.updateCartData();
          }
          return response;
        })
      );
  }




   userSignUp(data: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login/user-signup`, data);
  }


    // NEW: Google sign-in (send ID token to backend)
  googleSignIn(body: { idToken: string }): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/google`, body);
  }

  public signin(): void {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate([routes.home]);
  }

  public signup(): void {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate([routes.login]);
  }
  public forgotpassword(): void {
    localStorage.setItem('authenticated', 'true');
    this.router.navigate([routes.resetPassword]);
  }





  // sendOtp(payload: any): Observable<any> {
  //     return this.http.post<any>(`https://verify.msg91.com/otp-provider.js`, payload);
  //   }


  verifyOtp(payload: any): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  return this.http.post<any>(
    'https://control.msg91.com/api/v5/widget/verifyAccessToken',
    payload,
    { headers }
  );
}

}

