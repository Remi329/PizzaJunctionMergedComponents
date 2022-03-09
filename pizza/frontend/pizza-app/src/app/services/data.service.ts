import { Pizza } from './../pizzas/pizza.model';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
//import 'rxjs/add/observable/throw';


export class DataService {
  constructor(private url: string, private http: HttpClient) { }
 
  getAll() {
    /*let x: Observable<Pizza[]>;
    x = this.http.get<Pizza[]>(this.url);
    x.subscribe((data) => {console.log(data); },
                      (error) =>{console.log(error); },
                        () => {console.log("No Further Data")}
                    );*/
    return this.http.get<Array<Pizza>>(this.url).pipe(map(response => response));
  }
 
  create(resourse) {
    return this.http.post(this.url, JSON.stringify(resourse))
      .pipe(catchError(this.handleError), map(response => response));
  }
 
  update(resourse) {
    return this.http.patch(this.url + '/' + resourse.id, JSON.stringify({ isRead : true }))
      .pipe(catchError(this.handleError), map(response => response));
  }
 
  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(catchError(this.handleError), map(response => response));
  }
 
  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error));
 
    if (error.status === 404) 
      return throwError(new NotFoundError());
 
    return throwError(new AppError(error));
  }
}
