import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  getCardByIdSelector, getListByCardIdSelector, getListsExcludedByCardIdSelector,
  IState
} from '../../shared/reducers/index';
import { Observable } from 'rxjs/Observable';
import { ICard } from '../../shared/models/card';
import { IListWithCards } from '../../shared/models/list-with-cards';
import { Subject } from 'rxjs/Subject';
import { CardRemove, CardMove, CardUpdate } from '../../shared/actions/cards';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  public card$: Observable<ICard>;
  public listForCurrentCard$: Observable<IListWithCards>;
  public otherListsForCurrentCard$: Observable<IListWithCards>;
  public removeCardClick$ = new Subject();
  public moveCardClick$ = new Subject();
  public onCardTitleChange$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute, private store: Store<IState>) {}

  ngOnInit() {
    this.card$ = this.activatedRoute.params.switchMap((params) => this.store.select(getCardByIdSelector(params.id)));

    this.listForCurrentCard$ = this.card$
      .filter(card => !!card)
      .switchMap(card => this.store.select(getListByCardIdSelector(card.listId)));

    this.otherListsForCurrentCard$ = this.card$
      .filter(card => !!card)
      .switchMap(card => this.store.select(getListsExcludedByCardIdSelector(card.listId)));

    this.removeCardClick$
      .withLatestFrom(this.card$)
      .subscribe(([, card]) => {
        this.store.dispatch(new CardRemove({ id: card.id }));
      });

    this.moveCardClick$
      .withLatestFrom(this.card$)
      .subscribe(([listId, card]: [string, ICard]) => {
        this.store.dispatch(new CardMove({ id: card.id, listId }));
      });

    this.onCardTitleChange$
      .withLatestFrom(this.card$)
      .subscribe(([title, card]: [string, ICard]) => {
        this.store.dispatch(new CardUpdate({ id: card.id, card: { ...card, title } }));
      });
  }

}
