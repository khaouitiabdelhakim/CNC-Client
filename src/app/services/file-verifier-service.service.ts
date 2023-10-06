import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileVerifierServiceService {

  students: any[];

  getStudentsWithInvalidFolders() : Observable<any> {
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
      return this.http.get(this.baseUrl + `folders/invalid`, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }

  getStudentsWithValidFolders() : Observable<any> {
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
      return this.http.get(this.baseUrl + `folders/valid`, { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }

  private baseUrl = 'http://localhost:8081/api/file-verifier/';

  constructor(private http: HttpClient) {}

  seeFolder(studentId: number) {
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
    return this.http.get(this.baseUrl + `ecrit/${studentId}`, options);
  }

  validateDossierEcrit(studentId: number) {
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
      return this.http.post(this.baseUrl + `ecrit/validate/${studentId}`, {}, { headers }).pipe(
        catchError((error) => {
          console.error('Error occurred:', error);
          // Handle the error here, e.g., show an error message to the user.
          return throwError(error);
        })
      );
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return throwError('Token is invalid or expired');
    }
  }
  

  validateDossierOral(studentId: number) {
    
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
    return this.http.post(this.baseUrl + `oral/validate/${studentId}`, options);
  }
}
