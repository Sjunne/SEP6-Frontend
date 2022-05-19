import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from "../../models/Movie";
import { MovieService } from '../../services/movie.service';
import {DropdownService} from "../../services/dropdown.service";
import { User } from '../../shared/services/user';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchText: string = '';
  user!: User;
  loggedIn = false;
  category = '1';
  selectedCategory: string = "";
  categories = [
    {
      id: 1,
      name: 'Movies',
    },
    {
      id: 2,
      name: 'Actors',
    },
    {
      id: 3,
      name: 'Producers',
    },
  ];

  constructor(private router: Router, private dropdown: DropdownService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    if (this.user != null)
      this.loggedIn = true
  }
  selectCategory() {
    this.selectedCategory = this.dropdown.getDropDownText(this.category, this.categories)[0].name;
  }

  search() {
    if (this.selectedCategory == "" || this.selectedCategory == "Movies") {
      this.router.navigate(['Movies/SearchResults', this.searchText]);
    }
    else if (this.selectedCategory == "Actors") {
      this.router.navigate(['Actors/SearchResults', this.searchText]);
    }
  }

}
