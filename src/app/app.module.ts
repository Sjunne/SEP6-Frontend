import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ToolBarComponent} from './components/tool-bar/tool-bar.component';
import {FooterComponent} from './components/footer/footer.component';

import {MdbRippleModule} from 'mdb-angular-ui-kit/ripple';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/firebase/dashboard/dashboard.component';
import { SignInComponent } from './components/firebase/sign-in/sign-in.component';
import { SignUpComponent } from './components/firebase/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/firebase/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/firebase/verify-email/verify-email.component';
import { AuthService } from "./shared/services/auth.service";

import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {FrontPageComponent} from './components/front-page/front-page.component';
import {CarouselImageComponent} from './components/carousel-image/carousel-image.component';
import {HttpClientModule} from '@angular/common/http';
import {MovieComponent} from './components/movie/movie.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {PersonComponent} from './components/person/person.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
const routes = [
  {path: 'SearchResults/:searchText', component: SearchResultPageComponent},
  {path: 'movie/:id', component: MovieComponent},
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
    FrontPageComponent,
    CarouselImageComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DropdownComponent,
    SearchResultActorsComponent,
    PersonComponent,
    CommentsComponent,
    CommentComponent,
    CommentFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    Ng2GoogleChartsModule,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTooltipModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
