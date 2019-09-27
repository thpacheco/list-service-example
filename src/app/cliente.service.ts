import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseurl = 'http://localhost:3000/api/clientes';

  constructor(public http: HttpClient) { }

  GetIssues(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/clientes')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

    // Error handling
    errorHandl(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
   }
 
}
