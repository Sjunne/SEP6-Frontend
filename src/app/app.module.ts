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


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbFormsModule,
    MdbRippleModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
