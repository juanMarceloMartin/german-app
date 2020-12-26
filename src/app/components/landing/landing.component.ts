import { Component, OnInit } from '@angular/core';
import { GameOptionsService } from 'src/services/game-options.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  match = {
    game: '',
    qty: '',
    level: '',
  };

  constructor(
    private router: Router,
    private _gameOptions: GameOptionsService
  ) { }

  ngOnInit(): void {}

  setGameOptions(choice: string, e: any) {
    this.match[choice] = e.value;
  }

  goToGame() {
    if (this.match.game && this.match.qty && this.match.level) {
      this._gameOptions.setGameOptions(this.match);
      this.router.navigateByUrl(`/${this.match.game}`);
    }
  }
}
