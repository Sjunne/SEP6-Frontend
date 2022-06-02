import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './shared/services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SEP6-Frontend';
  webapiurl = environment.webapiurl;

  reload() {
    window.location.reload
  }
}

