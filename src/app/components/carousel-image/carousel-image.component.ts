import { Component, OnInit, Input } from '@angular/core';
import { Root, TmdbMovie } from '../../models/TmdbMovie';
import { MovieService } from '../../services/movie.service';
import {ActorsService} from "../../services/actors.service";

@Component({
  selector: 'app-carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.css']
})
export class CarouselImageComponent implements OnInit {
  headline!: string
  @Input() direction!: string
  root!: Root
  movieList!: TmdbMovie[]
  responsiveOptions: any;



  constructor(private service: MovieService,
              private actorService: ActorsService) {
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
      this.headline = "Best Ranked Movies";
      this.service.getMostPopularMovies().subscribe((root) => {
        this.root = root;
        this.movieList = root.results
        for (let i = 0; i < this.movieList.length; i++) {
          this.movieList[i].poster_path = "https://image.tmdb.org/t/p/original/" + this.movieList[i].poster_path;
        }
      });
    }

    else if (this.direction.includes("knownfor")) {
      this.headline = "Has had a role in following movies";
      let id = this.direction.split(",")[1]
      this.actorService.getFullCreditId(id).subscribe(p => {
        this.movieList = p
        for (let i = 0; i < this.movieList.length; i++) {
          this.movieList[i].poster_path = "https://image.tmdb.org/t/p/original/" + this.movieList[i].poster_path;
        }
      });
    }
  }
}
