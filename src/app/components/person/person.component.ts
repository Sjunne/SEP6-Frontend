import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Person} from "../../models/Person";
import {PersonDetail} from "../../models/PersonDetail";
import {ActorsService} from "../../services/actors.service";
import {MatTableDataSource} from "@angular/material/table";


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  private id!: string;
  public person!: PersonDetail
  constructor(private activated: ActivatedRoute, private service: ActorsService) {
  }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(map => {
      this.id = map.get('id')!;
    });
    this.service.getPersonById(this.id).subscribe(person => {
      this.person = person;
    });
  }

}
