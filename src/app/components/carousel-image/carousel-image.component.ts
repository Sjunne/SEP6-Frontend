import {Component, OnInit, Input} from '@angular/core';
import {Root, TmdbMovie} from '../../models/TmdbMovie';
import {RootSeries, TmdbSeries} from '../../models/TmdbSeries';
import {MovieService} from '../../services/movie.service';
import {ActorsService} from "../../services/actors.service";
import {Router} from "@angular/router";
import {Person} from '../../models/Person';


@Component({
  selector: 'app-carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.css']
})
export class CarouselImageComponent implements OnInit {
  headline!: string
  @Input() direction!: string
  responsiveOptions: any;

  movie = false;
  series = false;
  actors = false;

  movieList!: TmdbMovie[];
  actorList!: Person[];
  root!: Root;

  seriesList!: TmdbSeries[];
  rootSeries!: RootSeries;


  constructor(private service: MovieService,
              private actorService: ActorsService,
              private router: Router) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {

    if (this.direction == "popular") {
      this.movie = true;
      this.headline = "Best Ranked Movies";
      this.service.getMostPopularMovies().subscribe((root) => {
        this.root = root;
        this.movieList = root.results
        for (let i = 0; i < this.movieList.length; i++) {
          this.movieList[i].poster_path = "https://image.tmdb.org/t/p/original/" + this.movieList[i].poster_path;
        }
      });
    }

    if (this.direction == "upcomming") {
      this.movie = true;
      this.headline = "Upcomming Movies";
      this.service.getUpcommingMovies().subscribe((root) => {
        this.root = root;
        this.movieList = root.results
        for (let i = 0; i < this.movieList.length; i++) {
          this.movieList[i].poster_path = "https://image.tmdb.org/t/p/original/" + this.movieList[i].poster_path;
        }
      });
    }

    if (this.direction == "theaters") {
      this.movie = true;
      this.headline = "In Theaters Now";
      this.service.getUpcommingMovies().subscribe((root) => {
        this.root = root;
        this.movieList = root.results
      });
    }

    if (this.direction == "series") {
      this.series = true;
      this.headline = "Most Popular Series";
      this.service.getMostPopularSeries().subscribe((root) => {
        this.rootSeries = root;
        this.seriesList = root.results
        for (let i = 0; i < this.seriesList.length; i++) {
          this.seriesList[i].poster_path = "https://image.tmdb.org/t/p/original/" + this.seriesList[i].poster_path;
        }
      });
    }

    if (this.direction.includes("knownfor")) {
      this.movie = true
      this.headline = "Has had a role in following movies";
      let id = this.direction.split(",")[1]
      let person
      this.actorService.getPersonById(id).subscribe(p => {
        person = p
        if (person.known_for_department == "Directing") {
          this.actorService.getFullCreditCrew(id).subscribe(p => {
            this.movieList = p
            for (let i = 0; i < this.movieList.length; i++) {
              this.movieList[i].poster_path = "https://image.tmdb.org/t/p/original/" + this.movieList[i].poster_path;
            }
          });
        } else if (person.known_for_department == "Acting") {
          this.actorService.getFullCreditId(id).subscribe(p => {
            this.movieList = p
            for (let i = 0; i < this.movieList.length; i++) {
              this.movieList[i].poster_path = "https://image.tmdb.org/t/p/original/" + this.movieList[i].poster_path;
            }
          });
        }
      })
    }

    if (this.direction.includes("popular/actors")) {
      this.actors = true
      this.headline = "Popular Actors";
      this.actorService.getPopularActors().subscribe(p => {
        this.actorList = p
        for (let i = 0; i < this.movieList.length; i++) {
          this.actorList[i].profile_path = "https://image.tmdb.org/t/p/original/" + this.movieList[i].poster_path;
        }
      });
    }
  }

  public SelectMovie(image: TmdbMovie) {
    this.router.navigate(['/movie', image.imdb_id]);
  }

  SelectActor(image: Person) {
    this.router.navigate(['/Person', image.id]);
  }
}
