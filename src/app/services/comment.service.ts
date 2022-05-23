import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CommentModel } from '../models/CommentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiUrl = "https://localhost:44303"
  constructor(private http: HttpClient) { }

  getComments(CurrentMovie: string): Observable<CommentModel[]> {
    console.log("trying to get")
    return this.http
      .get<CommentModel[]>(this.apiUrl + "/api/v1/comments/getAll/" + CurrentMovie)
      .pipe(retry(1), catchError(this.handleError));
  }

  createComment(text: string, parentId: string | null, movieId: string, username: string): Observable<CommentModel> {
    return this.http
      .post<CommentModel>(this.apiUrl + "/api/v1/comments/CreateComment",
        {
        body: text,
        parentId,
        createdAt: new Date().toISOString(),
        userId: username,
          username: username,
          movieId: movieId
      });
  }

  updateComment(id: string, text: string): Observable<CommentModel> {
    return this.http
      .post<CommentModel>(this.apiUrl + "/api/v1/comments/updateComment/",
        {
          body: text,
          id: id
        });
  }

  deleteComment(id: string): Observable<{}> {
    return this.http.delete(this.apiUrl + '/api/v1/comments/deleteComment/' + id);
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
