import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../../models/Person";
import {KnownFor, PersonDetail} from "../../models/PersonDetail";
import {ActorsService} from "../../services/actors.service";
import {MatTableDataSource} from "@angular/material/table";
import {GoogleChartInterface, GoogleChartType, ChartSelectEvent, ChartReadyEvent, ChartErrorEvent} from "ng2-google-charts";
import {Cast} from "../../models/Cast";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public movies!: Cast[];
  public selectEvent!: ChartSelectEvent;
  public id!: string;
  public person!: PersonDetail
  lineChart!: GoogleChartInterface;
  knownfor: string = 'knownfor';

  constructor(private activated: ActivatedRoute,
              private service: ActorsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(map => {
      this.id = map.get('id')!;
      this.knownfor = this.knownfor + "," + this.id
    });
    this.service.getPersonById(this.id).subscribe(person => {
      this.person = person;
    });
    this.service.getFullCreditId(this.id).subscribe(casts => {
      console.info(casts)
      this.movies = casts;
      this.lineChart = this.service.getCarrierDevelopment(casts);
    });

  }

  public select(event: ChartSelectEvent) {
    let i = event.row
    if (i != null ) {
      console.log(this.movies[i].original_title)
      console.log(this.movies[i].imdb_id)

      this.router.navigate(['/movie', this.movies[i].imdb_id]);
    }
    this.selectEvent = event;
  }

  public ready(event: ChartReadyEvent) {
    console.log(event.message);
  }

  public error(event: ChartErrorEvent) {
    console.error('Error: ' + event);
  }

}
