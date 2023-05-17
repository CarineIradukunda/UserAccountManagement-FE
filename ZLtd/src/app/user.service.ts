import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';  
import { UserClass } from './UserClass';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  form: any;
  constructor(private http: HttpClient) { }

  urlAdd = 'http://localhost:1452/user/v1/signup';
  createUser(user: UserClass): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<UserClass>(this.urlAdd, user, httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }

  urlLog = 'http://localhost:1452/user/v1/login';
  loginUser(user: UserClass): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<UserClass>(this.urlLog, user, httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error: any) {
    let errorMessage = '';
    // if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
      if (error.status == 500 || error.status == 403){
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        errorMessage = error.error.message;
      }
      else{
        errorMessage = error.error.message;
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      
    // } else {
    //   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    
     
    // }
    return throwError(errorMessage);
  }


}
