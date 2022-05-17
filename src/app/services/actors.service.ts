import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Movie} from "../models/Movie";
import {Actor} from "../models/Actor";
import {Person} from "../models/Person"
import {PersonDetail} from "../models/PersonDetail";

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  apiUrl = "https://localhost:5001"
  constructor(private http: HttpClient) { }

  public getActors(searchString: string):  Observable<Array<Actor>>  {
    return this.http
      .get<Array<Actor>>(this.apiUrl + "/api/v1/actor/nameandbirth/" + searchString)
      .pipe(retry(1), catchError(this.handleError));
  }

  public getPeople(searchString: string): Observable<Array<Person>> {
    return this.http
      .get<Array<Person>>(this.apiUrl + "/api/v1/actor/search/" + searchString)
      .pipe(retry(1), catchError(this.handleError));
  }

  public getPersonById(id: string): Observable<PersonDetail> {
    let p =  this.http
      .get<PersonDetail>(this.apiUrl + "/api/v1/actor/searchpersonbyid/" + id)
      .pipe(retry(1), catchError(this.handleError));
    return p
  }

  private handleError(error: any) {
    //evt. skal bruges i alle services. lav den importable på en måde?
    let message = '';
    if (error.error instanceof ErrorEvent) {
      message = error.error.message;
    }
    else {
      message = `errorstatus: ${error.status}. Errormessage: ${error.message}`;
    }

    window.alert(message);
    return throwError(() => message);
  }
}
