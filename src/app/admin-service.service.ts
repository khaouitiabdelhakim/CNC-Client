import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from './authentication-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  getStudent(id: number) : Observable<any> {
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
      return this.http.get(this.baseUrl + `students/${id}`, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }

  private baseUrl = 'http://localhost:8081/api/admin/';

  constructor(private http: HttpClient) {}

  getAdminDashboard() {
    var token  = ''
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
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token
    }
    return this.http.get(this.baseUrl+'dashboard', { headers });
  }

  getAllStudents(): Observable<any> {
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
      return this.http.get(this.baseUrl + 'students', { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }

  getAllValidStudents(): Observable<any> {
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
      return this.http.get(this.baseUrl + 'students/valid', { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }

  getAllInValidStudents(): Observable<any> {
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
      return this.http.get(this.baseUrl + 'students/invalid', { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }

  validate(studentId: number) {
    let token = '';
    const userString = localStorage.getItem('user');
  
    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
    }
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    // Pass the headers as options
    const options = { headers };
  
    // Send a POST request to the API
    return this.http.post(this.baseUrl + `validate/${studentId}`, {}, options);
  }

  validateFromCIN(username: string) {
    let token = '';
    const userString = localStorage.getItem('user');
  
    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
    }
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    // Pass the headers as options
    const options = { headers };
  
    // Send a POST request to the API with the username as a parameter
    return this.http.post(this.baseUrl + `validate?username=${username}`, {}, options);

}





  /*this part for file verifiers */

  getAllFileVerifiers(): Observable<any> {
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
      return this.http.get(this.baseUrl + 'file-verifiers', { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }


  /*this part for admins */

  getAllAdmins(): Observable<any> {
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
      return this.http.get(this.baseUrl + 'admins', { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }


   /*this part for system managers */

   getAllSystemManagers(): Observable<any> {
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
      return this.http.get(this.baseUrl + 'system-managers', { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }
  

   /*this part for grade entry agents */

   getAllGradeEntryAgents(): Observable<any> {
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
      return this.http.get(this.baseUrl + 'grade-entry-agents', { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }
}
