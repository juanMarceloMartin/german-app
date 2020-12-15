import { Component, OnInit } from '@angular/core';
import { NounService } from '../../../services/noun.service';

export interface PeriodicElement {
  noun: string;
  article: string;
  articleInput: string;
  plural: string;
  pluralInput: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {noun: 'Kind', article: 'Die', articleInput: '', plural: 'Kinder', pluralInput: '' },
  {noun: 'Kind', article: 'Die', articleInput: '', plural: 'Kinder', pluralInput: '' },
  {noun: 'Kind', article: 'Die', articleInput: '', plural: 'Kinder', pluralInput: '' },
  {noun: 'Kind', article: 'Die', articleInput: '', plural: 'Kinder', pluralInput: '' },
  {noun: 'Kind', article: 'Die', articleInput: '', plural: 'Kinder', pluralInput: '' },
  {noun: 'Kind', article: 'Die', articleInput: '', plural: 'Kinder', pluralInput: '' },
  {noun: 'Kind', article: 'Die', articleInput: '', plural: 'Kinder', pluralInput: '' },
  {noun: 'Kind', article: 'Die', articleInput: '', plural: 'Kinder', pluralInput: '' },
  {noun: 'Kind', article: 'Die', articleInput: '', plural: 'Kinder', pluralInput: '' },
  {noun: 'Kind', article: 'Die', articleInput: '', plural: 'Kinder', pluralInput: '' },
  {noun: 'Kind', article: 'Die', articleInput: '', plural: 'Kinder', pluralInput: '' },
];

@Component({
  selector: 'app-nouns',
  templateUrl: './nouns.component.html',
  styleUrls: ['./nouns.component.css'],
})
export class NounsComponent implements OnInit {
  displayedColumns: string[] = ['noun', 'articleInput', 'pluralInput'];
  dataSource = ELEMENT_DATA;

  public nouns = []

  constructor(private _nounService: NounService) { }

  ngOnInit(): void {
    this._nounService.getNouns()
      .subscribe(data => {
        this.nouns = data;
        console.log(this.nouns)
      })
  }

 
  
  

}
