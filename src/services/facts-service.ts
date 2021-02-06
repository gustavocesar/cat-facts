import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { Fact } from 'src/models/fact';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable()
export class FactsService {
  heroesUrl = 'https://cat-fact.herokuapp.com'; // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('FactsService');
  }

  getFacts(): Observable<Fact[]> {
    return this.http
      .get<Fact[]>(`${this.heroesUrl}/facts`)
      .pipe(catchError(this.handleError('getFacts', [])));
  }
}
