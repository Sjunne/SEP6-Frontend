import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolBarComponent} from './components/tool-bar/tool-bar.component';
import {FooterComponent} from './components/footer/footer.component';

import {MdbRippleModule} from 'mdb-angular-ui-kit/ripple';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HttpClientModule} from '@angular/common/http';
import {MovieComponent} from './components/movie/movie.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';
import {SearchResultPageComponent} from './components/search-result-page/search-result-page.component';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {SearchResultActorsComponent} from './components/search-result-actors/search-result-actors.component';
import { PersonComponent } from './components/person/person.component';

const routes = [
  {path: 'Movies/SearchResults/:searchText', component: SearchResultPageComponent},
  {path: 'Actors/SearchResults/:searchText', component: SearchResultActorsComponent},
  {path: 'Person/:id', component: PersonComponent}
  //{ path: 'home', component: HomeComponent },
  //{ path: 'movies', component: MoviesComponent },
  //{ path: 'movies/:movieId', component: MoviesComponent },
  //{ path: '*', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    FooterComponent,
    MovieComponent,
    SearchBarComponent,
    SearchResultPageComponent,
    DropdownComponent,
    SearchResultActorsComponent,
    PersonComponent,
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    MdbFormsModule,
    MdbRippleModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
