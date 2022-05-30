import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {HttpClient, HttpXhrBackend} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../../models/Movie";
import {ActivatedRoute, Router} from '@angular/router';
import { FullMovie } from '../../models/FullMovie';
import {ActorsService} from "../../services/actors.service";
import {ChartReadyEvent} from "ng2-google-charts";
import {RatingService} from "../../services/rating.service";
import firebase from "firebase/compat";
import { User } from 'src/app/shared/services/user';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie! :FullMovie;
  user!: User;
  private searchString!: string;
  public currentRate!: number;
  public averageRate!: number;
  public alreadyRated!: boolean;
  public notRated!: boolean;
  public id!: number;
  constructor(private service: MovieService,
              private ratingService: RatingService,
              private activated: ActivatedRoute,
              private personService: ActorsService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.activated.paramMap.subscribe(map => {
      const movieId = map.get('id')!;
      this.ratingService.averageRating(movieId).subscribe(average => {
        this.averageRate = average
      })
      this.service.getFullMovie(movieId).subscribe(movie => {
        this.movie = movie;
      });
      this.user = JSON.parse(localStorage.getItem('user')!);
      this.ratingService.getCurrentRating("my@gmail.com", movieId).subscribe(rating => {
        this.currentRate = rating;
        if (this.currentRate > 0) {
          this.alreadyRated = true;
          this.notRated = false;
        } else {
          this.alreadyRated = false;
          this.notRated = true;
        }
        console.log(this.currentRate)
      });
    });
  }

  public SelectPerson(name: string) {
    this.personService.getPeople(name).subscribe(actorList => {
      this.id = actorList[0].id;
      this.router.navigate(['Person', this.id]);
    });
  }

  public Rate() {
    this.ratingService.rate("this.user.email", this.movie.imdbID, this.currentRate).subscribe()
  }

  public UnRate() {
    this.currentRate = 0;
    this.alreadyRated = false;
    this.notRated = true;
    this.ratingService.Unrate("this.user.email", this.movie.imdbID);
  }

}
