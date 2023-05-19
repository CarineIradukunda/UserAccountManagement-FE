import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { UserClass } from '../UserClass';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  form: any;
  message = '';
  constructor(private http: HttpClient, private router: Router) { }

  urlApp = 'http://localhost:1452/user/v1/apply/verify';
  applyBadge(user: UserClass): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<UserClass>(this.urlApp, user, httpOptions).pipe(

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
