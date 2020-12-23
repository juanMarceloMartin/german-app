import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INoun } from '../interfaces/noun';
import { Observable } from 'rxjs';

@Injectable()
export class NounService {
    
    private _url: string = 'http://localhost:4201/nouns/beginner/10';

    constructor(private http: HttpClient) { }

    getNouns(): Observable<INoun[]> {
        return this.http.get<INoun[]>(this._url);
    }
}