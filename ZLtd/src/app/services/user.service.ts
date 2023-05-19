import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';  
import { UserClass } from '../UserClass';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  form: any;
  constructor(private http: HttpClient) { }

    urlGet = 'http://localhost:1452/user/v1/one';
  createUser(user: UserClass): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<UserClass>(this.urlGet, user, httpOptions)
  }

 
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }


}
