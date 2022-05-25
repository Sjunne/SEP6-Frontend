import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoriteMovieModel } from '../../models/FavoriteMovieModel';
import { MovieService } from '../../services/movie.service';
import { User } from '../../shared/services/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: User;
  favList!: Array<FavoriteMovieModel>
  
  userProfile!: string;

  constructor(private activated: ActivatedRoute, private router: Router, private service: MovieService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.activated.paramMap.subscribe(map => {
      this.userProfile = map.get('userEmail')!;
      this.service.getFavorites(this.userProfile).subscribe((favs) =>
        this.favList = favs
        );
    });



  }

}
