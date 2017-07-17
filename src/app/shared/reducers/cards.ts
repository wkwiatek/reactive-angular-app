import * as cardsActions from '../actions/cards';
import { ICard } from '../models/card';

export const initialState: ICard[] = [
  {
    id: 'ed7c45ce-cef2-4320-ad0a-30ad16183356',
    title: 'Learn about the react-saga',
    listId: 'd840f829-3ee8-446a-99d9-8c86dea42366',
    user: null
  },
  {
    id: '688f0a38-81bb-4af6-af8b-e152a77f66b3',
    title: 'Find out how to optimize React for performance',
    listId: 'd840f829-3ee8-446a-99d9-8c86dea42366',
    user: null
  },
  {
    id: '5fd07f47-1394-484b-ae87-ea2b5ab6aaa8',
    title: 'Test the application',
    listId: 'd840f829-3ee8-446a-99d9-8c86dea42366',
    user: null
  },
  {
    id: '18ea1e51-51f6-496a-9795-f5d49579e79c',
    listId: '493c84c0-21b8-49c9-9861-6aa4b5729f30',
    title: 'Using side-effects in Redux',
    user: null
  },
  {
    id: '1dd33d4b-2440-45cb-892b-02ce0f18936c',
    listId: '12c1ee3d-4199-46dc-aaa8-b2176dc01e9e',
    title: 'Learn React basics',
    user: null
  }
];

export default function reducer(state = initialState, action: cardsActions.Actions): ICard[] {
  switch (action.type) {
    case cardsActions.CARD_CREATE:
      return [...state, { ...action.payload.card, listId: action.payload.listId }];

    case cardsActions.CARD_REMOVE:
      return state.filter(card => card.id !== action.payload.id);

    case cardsActions.CARD_UPDATE:
      return state.map(card => card.id === action.payload.id
        ? { ...card, ...action.payload.card }
        : card
      );

    case cardsActions.CARD_MOVE:
      return state.map(card => card.id === action.payload.id
        ? { ...card, list_id: action.payload.listId }
        : card
      );

    default: {
      return state;
    }
  }
}
