import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeEntryAgentServiceService {

  getAllDashboard(): Observable<any> {
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
      return this.http.get(this.baseUrl + 'dashboard', { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }

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

  private baseUrl = 'http://localhost:8081/api/grade-entry-agent/';

  constructor(private http: HttpClient) {}

  

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

  getAllStudentsWithNotes(): Observable<any> {
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
      return this.http.get(this.baseUrl + 'students-with-notes', { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }

  getAllStudentsWithoutNotes(): Observable<any> {
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
      return this.http.get(this.baseUrl + 'students-without-notes', { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }

  getAllSubjects(): Observable<any> {
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
      return this.http.get(this.baseUrl + 'matieres', { headers });
    } else {
      console.log('Token is invalid or expired');
      // Handle token expiration or invalid token, you can return an error observable or take appropriate action.
      return new Observable<any>(); // Replace with error handling or other logic.
    }
  }

  setNotesFromCIN(cin:string,formData: any): Observable<any> {
    let token = '';
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token // Replace 'authToken' with your actual authentication token
    });

    // Assuming your Spring Boot API endpoint for submitting notes is '/api/submit-notes'
    return this.http.post(`${this.baseUrl}notes-from-cin/${cin}`, formData, { headers });
  }



  // Method to send the form data to the Spring Boot REST API
  setNotes(id:number,formData: any): Observable<any> {
    let token = '';
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token // Replace 'authToken' with your actual authentication token
    });

    // Assuming your Spring Boot API endpoint for submitting notes is '/api/submit-notes'
    return this.http.post(`${this.baseUrl}notes/${id}`, formData, { headers });
  }

  getNotes(id:number): Observable<any> {
    let token = '';
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token // Replace 'authToken' with your actual authentication token
    });

    // Assuming your Spring Boot API endpoint for submitting notes is '/api/submit-notes'
    return this.http.get(`${this.baseUrl}notes/${id}`,  { headers });
  }

  getClassment(): Observable<any> {
    let token = '';
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      token = user['token'];
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token // Replace 'authToken' with your actual authentication token
    });

    // Assuming your Spring Boot API endpoint for submitting notes is '/api/submit-notes'
    return this.http.get(`${this.baseUrl}classement`,  { headers });
  }
}
