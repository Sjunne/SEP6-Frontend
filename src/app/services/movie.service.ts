import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Movie } from '../models/Movie';
import { FullMovie } from '../models/FullMovie';
import { Root, TmdbMovie } from '../models/TmdbMovie';
import { RootSeries } from '../models/TmdbSeries';
import { FavoriteMovieModel } from '../models/FavoriteMovieModel';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
 


  //apiUrl = "https://sep6-movies-cloud.lm.r.appspot.com"
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

  public checkFavorite(email: string, id: string): Observable<FavoriteMovieModel> {
    console.log("HER")
    return this.http
      .get<FavoriteMovieModel>(this.apiUrl + "/api/v1/movie/checkFavorite/" + email + "/" + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  public getFavorites(userProfile: string): Observable<Array<FavoriteMovieModel>> {
    return this.http
      .get<Array<FavoriteMovieModel>>(this.apiUrl + "/api/v1/movie/getFavorites/" + userProfile)
      .pipe(retry(1), catchError(this.handleError));
  }


  public changeFavorite(favorite: boolean, username: string, movieId: string): Observable<FavoriteMovieModel> {
    return this.http
      .post<FavoriteMovieModel>(this.apiUrl + "/api/v1/movie/setFavorite",
        {
          favorite: favorite,
          username: username,
          movieId: movieId,
        });
  }


  public getFullMovie(movieId: string): Observable<FullMovie> {
    return this.http
      .get<FullMovie>(this.apiUrl + "/api/v1/movie/full/" + movieId)
      .pipe(retry(1), catchError(this.handleError));
  }

  public getMostPopularMovies(): Observable<Root> {
    return this.http
      .get<Root>(this.apiUrl + "/api/v1/movie/discovery/popularity")
      .pipe(retry(1), catchError(this.handleError));
  }

  public getUpcommingMovies(): Observable<Root> {
    return this.http
      .get<Root>(this.apiUrl + "/api/v1/movie/discovery/upcomming")
      .pipe(retry(1), catchError(this.handleError));
  }

  public getInTheaters(): Observable<Root> {
    return this.http
      .get<Root>(this.apiUrl + "/api/v1/movie/discovery/theaters")
      .pipe(retry(1), catchError(this.handleError));
  }

  public getMostPopularSeries(): Observable<RootSeries> {
    return this.http
      .get<RootSeries>(this.apiUrl + "/api/v1/movie/discovery/seriespopular")
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
