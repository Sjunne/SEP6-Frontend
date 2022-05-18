import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Movie} from "../models/Movie";
import {Actor} from "../models/Actor";
import {Person} from "../models/Person"
import {Cast} from "../models/Cast"
import {Crew} from "../models/Crew";
import {KnownFor, PersonDetail} from "../models/PersonDetail";
import {GoogleChartInterface, GoogleChartType} from "ng2-google-charts";

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

  public getFullCreditId(id: string): Observable<Array<Cast>> {
    let p =  this.http
      .get<Array<Cast>>(this.apiUrl + "/api/v1/actor/fullcredits/" + id)
      .pipe(retry(1), catchError(this.handleError));
    return p
  }

  public getPopularActors(): Observable<Array<Person>> {
    let p =  this.http
      .get<Array<Person>>(this.apiUrl + "/api/v1/actor/people/popular")
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

  public getStats(known_for: KnownFor[])  {
    let GoogleChartInterface;

    let data = [['hello', 'Career'],
      [ known_for[0].original_title, known_for[0].vote_average]];

    for (let i = 1; i < known_for.length; i++) {
      console.log( known_for[i].vote_average)
      data.push([ known_for[i].original_title, known_for[i].vote_average])
    }

    return GoogleChartInterface = {
      chartType: GoogleChartType.LineChart,
      dataTable:data,
      options: {'title': 'Career Development'},
    };


  }

  public getStats2(movies: Cast[])  {
    let GoogleChartInterface;
    let median = movies[0].median;

    let data = [['Title', 'Score', 'Average'],
      [ movies[0].title, movies[0].vote_average, 7], ];

    for (let i = 1; i < movies.length; i++) {
      data.push([ movies[i].title, movies[i].vote_average, 7], )
    }

    return GoogleChartInterface = {
      chartType: GoogleChartType.LineChart,
      dataTable:data,
      options: {'title': 'Career Development'},
    };
  }

  public getFullCreditCrew(id: string): Observable<Array<Crew>> {
    let p =  this.http
      .get<Array<Crew>>(this.apiUrl + "/api/v1/actor/fullcredits/crew/" + id)
      .pipe(retry(1), catchError(this.handleError));
    return p
  }
}
