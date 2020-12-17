import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVerb } from '../interfaces/verb';
import { Observable } from 'rxjs';

@Injectable()
export class VerbService {
    
    private _url: string = 'http://localhost:4201/verbs/A1.2/10';

    constructor(private http: HttpClient) { }

    getVerbs(): Observable<IVerb[]> {
        return this.http.get<IVerb[]>(this._url);
    }
}