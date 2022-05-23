import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/services/user';



@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  user!: User;
  loggedIn = false;


  constructor(private router: Router, public authService: AuthService) {
    
  }

  routes = this.router.config.map((route: Route) => route?.path || 'Home');

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    if (this.user != null)
      this.loggedIn = true
  }

  logout(): void {
    this.authService.SignOut();
  }
}

