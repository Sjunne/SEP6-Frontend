import { Component, OnInit, Input } from '@angular/core';
import { Root, TmdbMovie } from '../../models/TmdbMovie';
import { MovieService } from '../../services/movie.service';

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



  constructor(private service: MovieService) {
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

    if (this.direction == "upcomming") {
      this.headline = "Upcomming Movies";
      this.service.getUpcommingMovies().subscribe((root) => {
        this.root = root;
        this.movieList = root.results
        for (let i = 0; i < this.movieList.length; i++) {
          this.movieList[i].poster_path = "https://image.tmdb.org/t/p/original/" + this.movieList[i].poster_path;
        }
      });
    }
   


  }

}
