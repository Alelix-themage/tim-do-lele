import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(private http: HttpClient) {}

  getLogin(data: any): Observable<any>{
    const url = 'http://localhost:8000/autenticar-login';
    return this.http.get(url, data);
  }
}
