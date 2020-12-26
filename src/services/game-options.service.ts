import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { INoun } from '../interfaces/noun';
import { Observable } from 'rxjs';
import { IVerb } from 'src/interfaces/verb';

export interface gameOptions {
  game: string;
  qty: string;
  level: string;
}

@Injectable()
export class GameOptionsService {
  private gameOptionsSource = new BehaviorSubject<gameOptions>({
    game: '',
    qty: '',
    level: '',
  });

  gameOptions = this.gameOptionsSource.asObservable();

  private _url: string = 'http://localhost:4201/';

  constructor(private http: HttpClient) {}

  getGameItems(element: string, level: string, qty: string): Observable<INoun[] | IVerb[]> {
    const url = `${this._url}${element}/${level}/${qty}`;
    return this.http.get<INoun[] | IVerb[]>(url);
  }

  setGameOptions(options: gameOptions) {
    this.gameOptionsSource.next(options);
  }
}
