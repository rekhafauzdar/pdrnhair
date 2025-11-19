import { Injectable } from '@angular/core';
import { LoginCredentials, User, UserData } from '../model/model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataFactoryService {

  private API_URL = environment.apiUrl;

  // Properties to store login data
  private token: string | null = null;
  private currentUser: UserData | null = null; 

  constructor(private http: HttpClient) { }

  createLoginCredentials(email: string, password: string): LoginCredentials {
    return {
      userName: email,
      password: password,
      ipAddress: '',
      browser: ''
    };
  }

  setToken(token: string): void {
    this.token = token;
    this.setCookie('authToken', token);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = this.getCookie('authToken');
    }
    return this.token;
  }

  setCurrentUser(userData: UserData | null): void {
    this.currentUser = userData;
    this.setCookie('authUser', JSON.stringify(userData));   
  }
  
  getCurrentUser(): UserData | null {
    if (!this.currentUser) {
      const userData = this.getCookie('authUser');
      this.currentUser = userData ? JSON.parse(userData) as UserData : null;
    }
    return this.currentUser;
  }

  private setCookie(name: string, value: string): void {
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}
  
  private getCookie(name: string): string | null {
    const value = document.cookie.split('; ').find(row => row.startsWith(name + '='));
    return value ? decodeURIComponent(value.split('=')[1]) : null;
  }
  


  signupCredentials(userName: string, mobile: string, email: string, password: string, confirmPassword: string, otp: string, userType:string): User {
    return {
      userName: userName,
      mobile: mobile,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      otp: otp,
      userType: userType
    };
  }


 



 

}

