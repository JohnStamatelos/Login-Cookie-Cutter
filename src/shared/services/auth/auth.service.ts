import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from 'src/shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  logIn(user: User): Observable<User> {
    const url = './serverResponse.json';
    return of(user);
    // TODO: hook up to mock/web service
    // return this.http.get<User[]>(url).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = err.status.toString();
    }
    return throwError(() => new Error(errorMessage));
  }
}
