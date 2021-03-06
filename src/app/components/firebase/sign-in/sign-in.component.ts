import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../../shared/services/auth.service";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(
    public authService: AuthService, private router: Router
  ) { }
  ngOnInit() { }


  onSignIn() {
    this.authService.GoogleAuth();
    setTimeout(window.location.reload, 500)
  }
}
