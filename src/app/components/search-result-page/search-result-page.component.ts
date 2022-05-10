import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.css']
})
export class SearchResultPageComponent implements OnInit {

  movies!: Array<Movie>;
  moviesSource = new MatTableDataSource<Movie>();
  searchText!: string;
  imagePath = "C:\Users\Sjunn\source\repos\SEP6-Frontend\SEP6-Frontend\src\app\images\not-found-image-15383864787lu.jpg"

  constructor(private service: MovieService , private activated: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(map => {
      const searchString = map.get('searchText')!;
      this.service.getMoviesWithPoster(searchString).subscribe(movieList => {
        this.movies = movieList;
        this.moviesSource.data = movieList;
      });
    });
  }
      

  get displayedColumns(): string[] {
    return ['poster', 'title', 'year'];
  }

  redirectToMovie(id: string) {

  }

}
