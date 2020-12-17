import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { INoun } from 'src/interfaces/noun';
import { NounService } from '../../../services/noun.service';

@Component({
  selector: 'app-nouns',
  templateUrl: './nouns.component.html',
  styleUrls: ['./nouns.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NounsComponent implements OnInit {
  displayedColumns: string[] = ['noun', 'articleInput', 'pluralInput'];
  dataSource: INoun[];
  articleAttempts: {} = {};
  pluralAttempts: {} = {};

  constructor(private _nounService: NounService) {
  }

  ngOnInit(): void {
    this._nounService.getNouns()
      .subscribe(data => {
        this.dataSource = data;
        this.dataSource.forEach(noun => {
          this.articleAttempts[noun.id] = { attempt: 2, response: false };
          this.pluralAttempts[noun.id] = { attempt: 3, response: false };
        })
      })
  }

  checkArticle(id: number, solution: string, input: string) {
    if (input) {
      if (solution.toLocaleLowerCase() !== input.toLocaleLowerCase()) {
        id > 0 && this.articleAttempts[id].attempt > 0 ? this.articleAttempts[id].attempt-- : null;
        this.articleAttempts[id].response = false;
      } else {
        this.articleAttempts[id].response = true;
      }
    }
  }

  checkPlural(id: number, solution: string, input: string) {
    if (input) {
      if (solution.toLocaleLowerCase() !== input.toLocaleLowerCase()) {
        id > 0 && this.pluralAttempts[id].attempt ? this.pluralAttempts[id].attempt-- : null;
        this.pluralAttempts[id].response = false;
      } else {
        this.pluralAttempts[id].response = true;
      }
    }
  }

}
