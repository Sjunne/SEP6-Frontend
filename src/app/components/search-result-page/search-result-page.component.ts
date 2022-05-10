import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.css']
})
export class SearchResultPageComponent implements OnInit {

  private list!: Array<Movie>;

  constructor(private activated: ActivatedRoute) {
    this.activated.paramMap.subscribe(map => {
      const listHold = map.get('list');

     // this.list = JSON.parse(listHold);
    });
  }

  ngOnInit(): void {
  }

}
