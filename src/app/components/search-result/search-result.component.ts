import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  nounColumns: string[] = ['article', 'noun', 'plural', 'translation'];
  verbColumns: string[] = ['verb', 'auxiliary', 'participle', 'translation'];
  userInput: string;
  nounSource: {}[] = []
  verbSource: {}[] = []

  constructor(private _searchService: SearchService) { }

  ngOnInit(): void {
    this._searchService.userInput.subscribe(input => this.userInput = input);

    if (this.userInput) {
      this._searchService.getNounResults(this.userInput).subscribe(nouns => this.nounSource = nouns)
      this._searchService.getVerbResults(this.userInput).subscribe(verbs => this.verbSource = verbs)
    }
  }

}
