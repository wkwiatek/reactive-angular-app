import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import { routerReducer as router } from '@ngrx/router-store';
import { createSelector } from 'reselect';
import { localStorageSync } from 'ngrx-store-localstorage';

import cards from './cards';
import lists from './lists';
import { ICard } from '../models/card';
import { IList } from '../models/List';

const reducers = {
  cards,
  lists,
  router
};

export interface IState {
  cards: ICard[];
  lists: IList[];
}

export function reducer(state: IState, action: { type: string, payload: any }) {
  return compose(
    storeFreeze,
    // localStorageSync({
    //   keys: [
    //     { auth: ['token'] }
    //   ],
    //   rehydrate: true
    // }),
    combineReducers
  )(reducers)(state, action);
}

export const getListsWithCardsSelector = state => state.lists.map(list => ({
  ...list,
  cards: state.cards.filter(card => card.listId === list.id)
}));

export const getListByCardIdSelector = listId => state => state.lists.find(list => list.id === listId);
export const getListsExcludedByCardIdSelector = listId => state => state.lists.filter(list => list.id !== listId);
export const getCardByIdSelector = cardId => state => state.cards.find(c => c.id === cardId);
