import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private apiUrl = 'https://7834-114-125-127-24.ngrok-free.app/api'; // Replace with your API URL
  // private apiUrl = 'http://sertifikasi-andika-backend.pustakasimpana.my.id/api'; // Replace with your API URL
  private authToken: string | null = null;

  constructor(private http: HttpClient) {}

  // Add a method to set the authentication token
  setAuthToken(token: string | null) {
    this.authToken = token;
  }

  // Add a method to get the authentication token
  getAuthToken(): string | null {
    return this.authToken;
  }

  login(credentials: any): Observable<any> {
    // Perform the login request and return the Observable
    localStorage.setItem('access_token', credentials)
    
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
    isLoggedIn = () => {
    const token = localStorage.getItem('access_token')
    return !!token
  }

  logOut(): void {
    window.localStorage.clear();
  }

  getUser(): any {
    const user = window.localStorage.getItem(this.authToken != null ? this.authToken : "");
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}