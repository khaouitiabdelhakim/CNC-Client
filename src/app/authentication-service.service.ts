import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  

  private usersUrl: string;


  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/api/auth/';
  }

  public signUp(user: User) {
    return this.http.post<User>(this.usersUrl+'sign-up', user);
  }

  signOut(): Observable<any> {
    return this.http.post(this.usersUrl+'sign-out', {})
  }
  

  /*
  To retrieve the token when needed:
  const token = localStorage.getItem('token');*/

  // In your AuthenticationServiceService
public signIn(user: User) {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.http.post<User>(this.usersUrl + 'sign-in', user,
  httpOptions).pipe(
    tap((response: any) => {
      // Store the token in local storage
      localStorage.setItem('user', JSON.stringify(response));
      console.log("user: ", response)
    })
  );
}

}
