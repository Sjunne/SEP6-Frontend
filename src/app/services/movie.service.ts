import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Movie } from '../models/Movie';
import { FullMovie } from '../models/FullMovie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
 

  apiUrl = "https://localhost:44303"

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<Movie> {
    return this.http
      .get<Movie>(this.apiUrl + "/api/v1/movie/title/Titanic")
      .pipe(retry(1), catchError(this.handleError));
  }

  public getMoviesWithPoster(title: string): Observable<Array<Movie>> {
    return this.http
      .get<Array<Movie>>(this.apiUrl + "/api/v1/movie/titleandposter/" + title)
      .pipe(retry(1), catchError(this.handleError));
  }

  public getFullMovie(movieId: string): Observable<FullMovie> {
    return this.http
      .get<FullMovie>(this.apiUrl + "/api/v1/movie/full/" + movieId)
      .pipe(retry(1), catchError(this.handleError));
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
