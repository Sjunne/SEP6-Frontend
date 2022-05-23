import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {HttpClient, HttpXhrBackend} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../../models/Movie";
import { ActivatedRoute } from '@angular/router';
import { FullMovie } from '../../models/FullMovie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie!: FullMovie;
  public hardCoded: string = '0499549';
  constructor(private service: MovieService, private activated: ActivatedRoute ) {
  }
  ngOnInit(): void {
    this.activated.paramMap.subscribe(map => {
      const movieId = map.get('id')!;
      this.service.getFullMovie(movieId).subscribe(movie => {
        movie.id = movie.imdbID.substring(2);
        this.movie = movie;
      });
    });
  }
}
