import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NounsComponent } from './components/nouns/nouns.component';
import { VerbsComponent } from './components/verbs/verbs.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NounService } from '../services/noun.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VerbService } from 'src/services/verb.service';
import { LandingComponent } from './components/landing/landing.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchService } from 'src/services/search.service';

@NgModule({
  declarations: [AppComponent, NounsComponent, VerbsComponent, LandingComponent, SearchResultComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [NounService, VerbService, SearchService],
  bootstrap: [AppComponent],
})
export class AppModule { }
