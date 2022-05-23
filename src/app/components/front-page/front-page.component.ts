import { Component, OnInit } from '@angular/core';
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
  public hardCoded: string = '0499549';

  user!: User;
  loggedIn = false;

  constructor(private service: MovieService) {
  
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    if (this.user != null)
      this.loggedIn = true
    }

}
