import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IVerb } from 'src/interfaces/verb';
import { VerbService } from '../../../services/verb.service';
import { GameOptionsService } from '../../../services/game-options.service';

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
    private _gameOptionsService: GameOptionsService
  ) {}

  ngOnInit(): void {
    this._gameOptionsService.gameOptions.subscribe((gameItems) => {
      this._gameOptionsService.getGameItems(gameItems.game, gameItems.level, gameItems.qty).subscribe((data) => {
        this.dataSource = data;
        this.dataSource.forEach((verb) => {
          this.auxiliaryAttempts[verb.id] = { attempt: 1, response: false };
          this.participleAttempts[verb.id] = { attempt: 3, response: false };
        });
      });
    });




    // this._gameOptionsService.gameOptions.subscribe((gameItems) => {
    //   this._gameOptionsService.getGameItems(gameItems.game, gameItems.level, gameItems.qty).subscribe((data) => {
    //     console.log(data)
    //     this.dataSource = data;
    //     this.dataSource.forEach((verb) => {
    //       this.auxiliaryAttempts[verb.id] = { attempt: 1, response: false };
    //       this.participleAttempts[verb.id] = { attempt: 3, response: false };
    //     });
    //   });
    // });
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
}
