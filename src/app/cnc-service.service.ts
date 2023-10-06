import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CncServiceService {

  private baseUrl = 'http://localhost:8081/api/general/';

  constructor(private http: HttpClient) {}

  getAllActualities(): Observable<any> {

    return this.http.get(this.baseUrl + 'actualities');
  }

  getAllSectors(): Observable<any> {
    return this.http.get(this.baseUrl + 'sectors');
  }


  getAllCentres(): Observable<any> {
    return this.http.get(this.baseUrl + 'centres');
  }
}
