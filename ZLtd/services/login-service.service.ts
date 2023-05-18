import { Injectable } from '@angular/core';
import { map, catchError, throwError, Observable, tap } from 'rxjs';
import { UserClass } from '../src/app/UserClass';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  form: any;
  message = '';
  constructor(private http: HttpClient, private router: Router) { }

  urlLog = 'http://localhost:1452/user/v1/login';
  loginUser(user: UserClass): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<UserClass>(this.urlLog, user, httpOptions).pipe(

      catchError(this.errorHandler)
    )
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
