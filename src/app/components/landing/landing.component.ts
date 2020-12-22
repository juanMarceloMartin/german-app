import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  userInput = '';

  constructor(private _searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
  }

  searchForInput() {
    this._searchService.updateUserInput(this.userInput);
    this.router.navigateByUrl('/search-result');
  }

}
