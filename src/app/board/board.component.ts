import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getListsWithCardsSelector, IState } from '../shared/reducers/index';
import { Observable } from 'rxjs/Observable';
import { IListWithCards } from '../shared/models/list-with-cards';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public listsWithCards$: Observable<IListWithCards[]>;

  constructor(private store: Store<IState>) {
    this.listsWithCards$ = store.select(getListsWithCardsSelector);
  }

  ngOnInit() {
  }

}
