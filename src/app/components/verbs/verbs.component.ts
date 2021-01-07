import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VerbService } from '../../../services/verb.service';
import { GameOptionsService } from '../../../services/game-options.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GameResultComponent } from '../game-result/game-result.component';

@Component({
  selector: 'app-verbs',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VerbsComponent implements OnInit {
  displayedColumns: string[] = ['verb', 'auxiliaryInput', 'participleInput'];
  dataSource: any;
  auxiliaryAttempts: {} = {};
  participleAttempts: {} = {};

  constructor(
    private _verbService: VerbService,
    private _gameOptionsService: GameOptionsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._gameOptionsService.gameOptions.subscribe((gameItems) => {
      this._gameOptionsService
        .getGameItems(gameItems.game, gameItems.level, gameItems.qty)
        .subscribe((data) => {
          this.dataSource = data;
          this.dataSource.forEach((verb) => {
            this.auxiliaryAttempts[verb.id] = { attempt: 1, response: false };
            this.participleAttempts[verb.id] = { attempt: 3, response: false };
          });
        });
    });
  }

  checkAuxiliary(id: number, solution: string, input: string) {
    if (input) {
      if (solution.toLocaleLowerCase() !== input.toLocaleLowerCase()) {
        id > 0 && this.auxiliaryAttempts[id].attempt > 0
          ? this.auxiliaryAttempts[id].attempt--
          : null;
        this.auxiliaryAttempts[id].response = false;
      } else {
        this.auxiliaryAttempts[id].response = true;
      }
    }
  }

  checkParticiple(id: number, solution: string, input: string) {
    if (input) {
      if (solution.toLocaleLowerCase() !== input.toLocaleLowerCase()) {
        id > 0 && this.participleAttempts[id].attempt
          ? this.participleAttempts[id].attempt--
          : null;
        this.participleAttempts[id].response = false;
      } else {
        this.participleAttempts[id].response = true;
      }
    }
  }

  showResult() {
    const perfectScore = this.dataSource.length;
    let usersScore = 0;

    this.dataSource.forEach((verb) => {
      if (
        verb.auxiliary.toLocaleLowerCase() ===
        verb.auxiliaryInput.toLocaleLowerCase()
      ) {
        usersScore += 0.5;
      }

      if (verb.participle === verb.participleInput) {
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

  checkVerb(id: number, article: string, articleInput: string, plural: string, pluralInput: string) {
    if (articleInput) {
      this.checkAuxiliary(id, article, articleInput)
    };

    if (pluralInput) {
      this.checkParticiple(id, plural, pluralInput)
    };
  }


}
