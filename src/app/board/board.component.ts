import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getListsWithCardsSelector, IState } from '../shared/reducers/index';
import { Observable } from 'rxjs/Observable';
import { IListWithCards } from '../shared/models/list-with-cards';
import { Subject } from 'rxjs/Subject';
import { CardCreate } from '../shared/actions/cards';
import { ICard } from '../shared/models/card';
import { RenameList } from '../shared/actions/lists';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public listsWithCards$: Observable<IListWithCards[]>;
  public cardCreate$ = new Subject();
  public listTitleChange$ = new Subject();

  constructor(private store: Store<IState>) {}

  ngOnInit() {
    this.listsWithCards$ = this.store.select(getListsWithCardsSelector);

    this.cardCreate$.subscribe((cardWithListId: { listId: string, card: ICard }) =>
      this.store.dispatch(new CardCreate(cardWithListId)));

    this.listTitleChange$.subscribe((listWithNewTitle: { listId: string, title: string }) =>
      this.store.dispatch(new RenameList(listWithNewTitle)));
  }

}
