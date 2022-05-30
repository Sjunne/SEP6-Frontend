import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {HttpClient, HttpXhrBackend} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../../models/Movie";
import {ActivatedRoute, Router} from '@angular/router';
import { FullMovie } from '../../models/FullMovie';
import {ActorsService} from "../../services/actors.service";
import {ChartReadyEvent} from "ng2-google-charts";
import { User } from '../../shared/services/user';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie! :FullMovie;
  private searchString!: string;
  public id!: number;
  public isFavorite!: boolean;
  user!: User;

  constructor(private service: MovieService,
              private activated: ActivatedRoute,
              private personService: ActorsService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
   
    this.activated.paramMap.subscribe(map => {
      const movieId = map.get('id')!;
      this.service.getFullMovie(movieId).subscribe(movie => {
        movie.id = movie.imdbID.substring(2);
        this.movie = movie;
        this.service.checkFavorite(this.user.email, this.movie.id).subscribe((FavoriteMovieModel) => {
          this.isFavorite = FavoriteMovieModel.favorite;
          console.log(this.isFavorite + "check")
        }

        );
      });
     
    });
   
  }

  public SelectPerson(name: string) {
    this.personService.getPeople(name).subscribe(actorList => {
      this.id = actorList[0].id;
      console.log(this.id)
      this.router.navigate(['Person', this.id]);
    });


  }

  public changeFavorite() {
    this.isFavorite = !this.isFavorite;
    console.log(this.isFavorite);
    this.service.changeFavorite(this.isFavorite, this.user.email, this.movie.id).subscribe();
    console.log("post done");
  }

}
