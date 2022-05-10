import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './components/movie/movie.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { SearchResultPageComponent } from './components/search-result-page/search-result-page.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'SearchResults', component: SearchResultPageComponent }
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
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbFormsModule,
    MdbRippleModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
