import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INoun } from '../interfaces/noun';
import { BehaviorSubject, Observable } from 'rxjs';
import { IVerb } from 'src/interfaces/verb';

@Injectable()
export class SearchService {

    private userInputSource = new BehaviorSubject<string>('');
    userInput = this.userInputSource.asObservable();

    private _nounsUrl: string = 'http://localhost:4201/search/noun/';
    private _verbsUrl: string = 'http://localhost:4201/search/verb/';

    constructor(private http: HttpClient) { }

    getNounResults(input: string): Observable<INoun[]> {
        return this.http.get<INoun[]>(`${this._nounsUrl}${input}`);
    }

    getVerbResults(input: string): Observable<IVerb[]> {
        return this.http.get<IVerb[]>(`${this._verbsUrl}${input}`);
    }

    updateUserInput(input: string) {
        this.userInputSource.next(input);
    }

};
