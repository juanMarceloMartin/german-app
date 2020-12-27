import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  nounColumns: string[] = ['article', 'noun', 'plural', 'translation'];
  verbColumns: string[] = ['verb', 'auxiliary', 'participle', 'translation'];
  userInput: string;
  nounSource: {}[] = [];
  verbSource: {}[] = [];

  constructor(private _searchService: SearchService) {}

  ngOnInit(): void {
    this._searchService.nounSearch.subscribe(
      (nounSearch) => (this.nounSource = nounSearch)
    );
    this._searchService.verbSearch.subscribe(
      (verbSearch) => (this.verbSource = verbSearch)
    );
  }
}
