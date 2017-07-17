import * as listsActions from '../actions/lists';
import { IList } from '../models/list';

export const initialState: IList[] = [
  {
    id: 'd840f829-3ee8-446a-99d9-8c86dea42366',
    title: 'To do'
  },
  {
    id: '493c84c0-21b8-49c9-9861-6aa4b5729f30',
    title: 'Doing'
  },
  {
    id: '12c1ee3d-4199-46dc-aaa8-b2176dc01e9e',
    title: 'Done'
  }
];

export default function reducer(state = initialState, action: listsActions.Actions): IList[] {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
