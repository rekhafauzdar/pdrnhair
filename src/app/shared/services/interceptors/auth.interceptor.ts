import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';


import { LoaderService } from 'src/app/loader/loader.service';
import { DataFactoryService } from '../common/data-factory.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private dataFactory: DataFactoryService, private loader: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.dataFactory.getToken();
    const userData = this.dataFactory.getCurrentUser();
    this.loader.showLoader();

    // for not null value
    const ipAddress = userData ? userData.ipAddress : null;
    const browser = userData ? userData.browser : null;
    const loggedUserId = userData ? userData.loggedUserId : null;
    const loggedUserEmail = userData ? userData.loggedUserEmail : null;
    const loggedUserType = userData ? userData.loggedUserType : null;

    const payload = { ipAddress, browser, loggedUserId, loggedUserEmail, loggedUserType };


    let headers = req.headers;
    let body = req.body;
    
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

     if(!token){
     headers = new HttpHeaders({
            "ngrok-skip-browser-warning": "true"
          });
    }

    if (userData) {
      body = { ...body, ...payload };
    }

    
    if(req.url.includes('003')) {
      headers = headers.set('gatewaykey', ' ');
    } else {
      headers = headers.set('gatewaykey', ' ');
    }
    
    if(!req.url.includes('document/uploadFile')) {
      const cloned = req.clone({ headers, body });
      return next.handle(cloned).pipe(
        finalize(() => this.loader.hideLoader())
    );
    } else {
      const header = req.clone({ headers});
      return next.handle(header).pipe(
        finalize(() => this.loader.hideLoader())
    );
    }

    
    
  }
}
