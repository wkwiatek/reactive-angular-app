import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/map';
import * as cardsActions from '../actions/cards';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class CardsEffects {

  constructor(private actions$: Actions, private router: Router) {}

  @Effect({ dispatch: false }) cardRemove$: Observable<Action> = this.actions$
    .ofType(cardsActions.CARD_REMOVE)
    .map(toPayload)
    .do(() => {
      this.router.navigate(['/']);
    });
}
