import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  getCardByIdSelector, getListByCardIdSelector, getListsExcludedByCardIdSelector,
  IState
} from '../../shared/reducers/index';
import { Observable } from 'rxjs/Observable';
import { ICard } from '../../shared/models/card';
import 'rxjs/add/operator/switchMap';
import { IListWithCards } from '../../shared/models/list-with-cards';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  public card$: Observable<ICard>;
  public listForCurrentCard$: Observable<IListWithCards>;
  public otherListsForCurrentCard$: Observable<IListWithCards>;

  constructor(private activatedRoute: ActivatedRoute, private store: Store<IState>) {
    this.card$ = activatedRoute.params.switchMap((params) => store.select(getCardByIdSelector(params.id)));
    this.listForCurrentCard$ = this.card$.switchMap(card => store.select(getListByCardIdSelector(card.listId)));
    this.otherListsForCurrentCard$ = this.card$.switchMap(card => store.select(getListsExcludedByCardIdSelector(card.listId)));
  }

  ngOnInit() {
  }

}
