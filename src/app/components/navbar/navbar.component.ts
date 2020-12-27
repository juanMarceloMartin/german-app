import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/services/search.service';
import { Router } from '@angular/router';
import { INoun } from 'src/interfaces/noun';
import { IVerb } from 'src/interfaces/verb';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userInput = '';
  nounSearch: INoun[] = [];
  verbSearch: IVerb[] = [];
  
  constructor(private _searchService: SearchService, private router: Router) {}

  ngOnInit(): void {}

  searchForInput() {
    this._searchService.getNounResults(this.userInput).subscribe((nouns) => {
      this.nounSearch = nouns;
      this._searchService.setNounResults(this.nounSearch);
    });

    this._searchService.getVerbResults(this.userInput).subscribe((verbs) => {
      this.verbSearch = verbs;
      this._searchService.setVerbResults(this.verbSearch);
    });
    this.router.navigateByUrl('/search-result');
  }
}
