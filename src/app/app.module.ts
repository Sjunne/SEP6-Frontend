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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { CarouselImageComponent } from './components/carousel-image/carousel-image.component';



const routes = [
  { path: 'SearchResults/:searchText', component: SearchResultPageComponent },
  { path: 'movie/:id', component: MovieComponent }
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
    FrontPageComponent,
    CarouselImageComponent
  ],
  imports: [
    CarouselModule,
    ButtonModule,
    ToastModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
