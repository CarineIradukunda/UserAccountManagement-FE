import { Injectable } from '@angular/core';
import { map, catchError, throwError, Observable } from 'rxjs';
import { UserClass } from '../UserClass';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  form: any;
  constructor(private http: HttpClient) { }

  urlAdd = 'http://localhost:1452/user/v1/signup';
  createUser(user: UserClass): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<UserClass>(this.urlAdd, user, httpOptions).pipe(
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

