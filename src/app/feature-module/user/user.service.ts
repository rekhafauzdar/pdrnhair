import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import { DataService } from 'src/app/shared/services/data/data.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.apiUrl;

  private token: string | null = null;
  public userLogin: boolean = false;
  currentUser: any;
  userEmail: string = '';
  userType: string = '';
  userProfileId:number=0;

  private userLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userLogin$: Observable<boolean> = this.userLoginSubject.asObservable();

  constructor(
    private http: HttpClient,
    private dataFactoryService: DataFactoryService,
    private dataService: DataService)
    {


  }

public getUserProfileById(id: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/user-profile/get-user-profile-by-id`, id);
  }

  public getAllUserProfile(): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/user-profile/get-all-user-profiles`,{});
  }


  public saveUserProfile(data: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/user-profile/save`, data);
  }

   public updateUserProfile(data: any, userProfileId:any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/user-profile/update/${userProfileId}`, data);
  }


  public saveGuestUserProfile(data: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/user-profile/save-guest-user`, data);
  }


   public saveAddress(data: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/address/add`, data);
  }




}
