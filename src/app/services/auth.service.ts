import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserResponse} from '../models/DTO/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly httpHeaders = new HttpHeaders({'content-type': 'application/json',
    authorization: 'ACCESS_TOKEN'});
  // JSON.parse(localStorage.getItem('ACCESS_TOKEN') || '{}')

  private readonly options = {headers : this.httpHeaders
  };
  constructor(private readonly httpClient: HttpClient) {
  }
  public signIn(userData: UserResponse): void {
    localStorage.setItem('EMAIL', userData.email);
    localStorage.setItem('ACCESS_TOKEN', userData.token);
  }
  public isLoggedIn(): boolean {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EMAIL');
  }
  public login(user: User): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(`http://localhost:8080/user`, user, this.options);
  }
}
