import { Component, OnInit } from '@angular/core';
import { Root, TmdbMovie } from '../../models/TmdbMovie';
import { MovieService } from '../../services/movie.service';


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

  constructor(private service: MovieService) {
  
  }

  ngOnInit(): void {
   
    }

}
