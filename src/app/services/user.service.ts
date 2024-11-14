import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private apiUrl = 'https://gorest.co.in/public-api/users';

  constructor(private http:HttpClient,) { }
   getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  getUsers(page: number, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', limit.toString());
    return this.http.get<any>(this.apiUrl, { params });
  
  }
}
