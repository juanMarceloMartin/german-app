import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameOptionsService } from '../../../services/game-options.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GameResultComponent } from '../game-result/game-result.component';

@Component({
  selector: 'app-nouns',
  templateUrl: './nouns.component.html',
  styleUrls: ['./nouns.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NounsComponent implements OnInit {
  displayedColumns: string[] = ['noun', 'articleInput', 'pluralInput'];
  dataSource: any;
  articleAttempts: {} = {};
  pluralAttempts: {} = {};

  constructor(
    private _gameOptionsService: GameOptionsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._gameOptionsService.gameOptions.subscribe((gameItems) => {
      this._gameOptionsService
        .getGameItems(gameItems.game, gameItems.level, gameItems.qty)
        .subscribe((data) => {
          this.dataSource = data;
          this.dataSource.forEach((noun) => {
            this.articleAttempts[noun.id] = { attempt: 2, response: false };
            this.pluralAttempts[noun.id] = { attempt: 3, response: false };
          });
        });
    });
  }

  checkArticle(id: number, solution: string, input: string) {
    if (input) {
      if (solution.toLocaleLowerCase() !== input.toLocaleLowerCase()) {
        id > 0 && this.articleAttempts[id].attempt > 0
          ? this.articleAttempts[id].attempt--
          : null;
        this.articleAttempts[id].response = false;
      } else {
        this.articleAttempts[id].response = true;
      }
    }
  }

  checkPlural(id: number, solution: string, input: string) {
    if (input) {
      if (solution.toLocaleLowerCase() !== input.toLocaleLowerCase()) {
        id > 0 && this.pluralAttempts[id].attempt
          ? this.pluralAttempts[id].attempt--
          : null;
        this.pluralAttempts[id].response = false;
      } else {
        this.pluralAttempts[id].response = true;
      }
    }
    console.log(this.pluralAttempts[id].response)
  }

  showResult() {
    const perfectScore = this.dataSource.length;
    let usersScore = 0;

    this.dataSource.forEach((noun) => {
      if (
        noun.article.toLocaleLowerCase() ===
        noun.articleInput.toLocaleLowerCase()
      ) {
        usersScore += 0.5;
      }

      if (noun.plural === noun.pluralInput) {
        usersScore += 0.5;
      }
    });

    const result = (usersScore / perfectScore) * 100;

    let message = '';
    let resultColor = { color: '' };

    if (result < 40) {
      message = 'Was ist passiert main Freund??';
      resultColor.color = 'red';
    } else if (result < 70) {
      message = 'jah, nicht so schlecht...';
      resultColor.color = 'yellow';
    } else if (result < 90) {
      message = 'Sehr Gut!!';
      resultColor.color = 'green';
    } else if (result < 100) {
      message = 'Wunderbar!!';
      resultColor.color = 'green';
    } else {
      message = 'Perfekt!!';
      resultColor.color = 'green';
    }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { result, message, resultColor };
    dialogConfig.height = '65%';
    dialogConfig.width = '30%';

    this.dialog.open(GameResultComponent, dialogConfig);
    this.ngOnInit();
  }

  check(e: any, i: any, d: any) {
    console.log(d);
    console.log(e === i)
  }

  checkNoun(id: number, article: string, articleInput: string, plural: string, pluralInput: string) {
    if (articleInput) {
      this.checkArticle(id, article, articleInput)
    };

    if (pluralInput) {
      this.checkPlural(id, plural, pluralInput)
    };
  }


}
