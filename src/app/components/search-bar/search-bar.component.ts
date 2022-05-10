import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from "../../models/Movie";
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  private list!: Array<Movie>;
  searchText: string = '';

  constructor(private service: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    this.service.getMoviesWithPoster(this.searchText).subscribe(movieList => this.list = movieList);
    console.info(this.list);
    this.router.navigate(['/SearchResults']);
  }

}
