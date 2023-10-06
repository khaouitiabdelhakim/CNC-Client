import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { Ecrit1 } from './models/ecrit-1';
import { Ecrit2 } from './models/ecrit-2';
import { Ecrit3 } from './models/ecrit-3';
import { Ecrit4 } from './models/ecrit-4';
import { Ecrit5 } from './models/ecrit-5';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

 

  private baseUrl: string;


  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8081/api/student/';
  }

  
  
  public estProfileNonValide() {
    let token = '';
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      // Add the token to the request headers and make the HTTP request
      return this.http.get(this.baseUrl + 'profile-status', { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  
}

  public postulateOne(dossier: Ecrit1) {
    let token = '';
    let id = 1;
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
      id = user['id'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      return this.http.post(this.baseUrl+`postulate-1/${id}`, dossier, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
    
  }

  public postulateTwo(dossier: Ecrit2) {
    let token = '';
    let id = 1;
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
      id = user['id'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      return this.http.post(this.baseUrl+`postulate-2/${id}`, dossier, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
    
  }

  public postulateThree(dossier: Ecrit3) {
    let token = '';
    let id = 1;
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
      id = user['id'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      return this.http.post(this.baseUrl+`postulate-3/${id}`, dossier, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
    
  }

  public postulateFour(dossier: Ecrit4) {
    let token = '';
    let id = 1;
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
      id = user['id'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      return this.http.post(this.baseUrl+`postulate-4/${id}`, dossier, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
    
  }

  public postulateFive(dossier: Ecrit5) {
    let token = '';
    let id = 1;
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
      id = user['id'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      return this.http.post(this.baseUrl+`postulate-5/${id}`, dossier, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
    
  }

  public postulateOralOne(dossier: Ecrit5) {
    let token = '';
    let id = 1;
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
      id = user['id'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      return this.http.post(this.baseUrl+`postulate-oral-1/${id}`, dossier, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
    
  }


  public getSavedInfoOfPost1() {
    let token = '';
    let id = 1;
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
      id = user['id'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      return this.http.get<any>(this.baseUrl+`postulate-1/${id}`, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
    
  }

  public getSavedInfoOfPost2() {
    let token = '';
    let id = 1;
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
      id = user['id'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      return this.http.get<any>(this.baseUrl+`postulate-2/${id}`, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
    
  }

  public getSavedInfoOfPost3() {
    let token = '';
    let id = 1;
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
      id = user['id'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      return this.http.get<any>(this.baseUrl+`postulate-3/${id}`, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
    
  }

  public getSavedInfoOfPost4() {
    let token = '';
    let id = 1;
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
      id = user['id'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      return this.http.get<any>(this.baseUrl+`postulate-4/${id}`, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
    
  }

  public getSavedInfoOfPost5() {
    let token = '';
    let id = 1;
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
      id = user['id'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      return this.http.get<any>(this.baseUrl+`postulate-5/${id}`, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
    
  }

  public getSavedInfoOfOralPost1() {
    let token = '';
    let id = 1;
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
      id = user['id'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      return this.http.get<any>(this.baseUrl+`postulate-oral-1/${id}`, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
    
  }

  public getCompleteEcrit() {
    let token = '';
    let id = 1;
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
      id = user['id'];
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const jwtHelper = new JwtHelperService();

    // Check if the token is valid and not expired
    if (token && !jwtHelper.isTokenExpired(token)) {
      console.log('Token is valid and not expired');
      return this.http.get<any>(this.baseUrl+`complete-ecrit/${id}`, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
    
  }
}
