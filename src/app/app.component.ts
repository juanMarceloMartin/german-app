import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from 'src/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'german-app';
  userInput = '';

  constructor(
    private http: HttpClient,
    private _searchService: SearchService,
    private router: Router,
  ) {}

  searchForInput() {
    this._searchService.updateUserInput(' ');
    this._searchService.updateUserInput(this.userInput);
    this.router.navigateByUrl('/search-result');
  }
}
