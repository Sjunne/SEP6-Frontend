import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Root, TmdbMovie } from '../../models/TmdbMovie';
import { MovieService } from '../../services/movie.service';
import { User } from '../../shared/services/user';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {
  popular: string = 'popular';
  upcomming: string = 'upcomming';
  theaters: string = 'theaters';
  series: string = 'series';
  actors: string = "popular/actors";

  user!: User;
  loggedIn = false;

  constructor(private service: MovieService, private router: Router) {

  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    if (this.user != null)
      this.loggedIn = true
    }

 
}
