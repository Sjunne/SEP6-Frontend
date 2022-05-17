import { Component, OnInit } from '@angular/core';
import {Movie} from "../../models/Movie";
import {MatTableDataSource} from "@angular/material/table";
import {Actor} from "../../models/Actor";
import {ActivatedRoute, Router} from "@angular/router";
import {ActorsService} from "../../services/actors.service";
import {Person} from "../../models/Person"
import {getMatIconFailedToSanitizeLiteralError} from "@angular/material/icon";

@Component({
  selector: 'app-search-result-actors',
  templateUrl: './search-result-actors.component.html',
  styleUrls: ['./search-result-actors.component.css']
})
export class SearchResultActorsComponent implements OnInit {

  actors!: Array<Person>;
  actorsSource = new MatTableDataSource<Person>();
  searchText!: string;
  constructor(private service: ActorsService,
              private activated: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(map => {
      const searchString = map.get('searchText')!;
      this.service.getPeople(searchString).subscribe(actorList => {
        this.actors = actorList;
        this.actorsSource.data = actorList;
      });
    });
  }

  get displayedColumns(): string[] {
    return ['profile_path','name', 'popularity'];
  }

  redirectToActor(person: Person) {
    this.router.navigate(['Person', person.id]);
  }
}
