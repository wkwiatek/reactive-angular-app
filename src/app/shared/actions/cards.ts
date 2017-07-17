import { Action } from '@ngrx/store';
import { ICard } from '../models/card';

export const CARD_CREATE = 'CARD_CREATE';
export const CARD_UPDATE = 'CARD_UPDATE';
export const CARD_REMOVE = 'CARD_REMOVE';
export const CARD_MOVE = 'CARD_MOVE';

export class CardCreate implements Action {
  readonly type = CARD_CREATE;

  constructor(public payload: { listId: string, card: ICard }) { }
}

export class CardUpdate implements Action {
  readonly type = CARD_UPDATE;

  constructor(public payload: { id: string, card: ICard }) { }
}

export class CardRemove implements Action {
  readonly type = CARD_REMOVE;

  constructor(public payload: { id: string }) { }
}

export class CardMove implements Action {
  readonly type = CARD_MOVE;

  constructor(public payload: { id: string, listId: string }) { }
}

export type Actions
  = CardCreate
  | CardUpdate
  | CardRemove
  | CardMove;
