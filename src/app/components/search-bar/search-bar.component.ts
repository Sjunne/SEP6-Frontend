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
  searchText: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search() {
    this.router.navigate(['/SearchResults', this.searchText]);
  }

}
