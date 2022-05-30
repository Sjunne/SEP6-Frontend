import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Movie} from "../models/Movie";
import {Rating} from "../models/rating";

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  apiUrl = "https://localhost:5001"

  constructor(private http: HttpClient) {

  }

  public getCurrentRating(gmail: string, movieid: string): Observable<number> {
    return this.http
      .get<number>(this.apiUrl + "/api/v1/movie/getrating/" + movieid + "," + gmail)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: any) {
    //evt. skal bruges i alle services. lav den importable på en måde?
    let message = '';
    if (error.error instanceof ErrorEvent) {
      message = error.error.message;
    } else {
      message = `errorstatus: ${error.status}. Errormessage: ${error.message}`;
    }

    window.alert(message);
    return throwError(() => message);
  }


  public rate(gmail: string, movieid: string, rating: number): Observable<number> {
    return this.http
      .post<number>(this.apiUrl + "/api/v1/movie/rating/",
        {
          gmail: gmail,
          movieId: movieid,
          rating: rating,
        });
  }

  public Unrate(gmail: string, movieid: string) {
    return this.http
      .delete(this.apiUrl + "/api/v1/movie/deleterating/" + movieid + "," + gmail)
      .pipe(retry(1), catchError(this.handleError));
  }

  averageRating(movieId: string) {
    return this.http
      .get<number>(this.apiUrl + "/api/v1/movie/averagerating/" + movieId)
      .pipe(retry(1), catchError(this.handleError));
  }

}
