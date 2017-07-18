import { Action } from '@ngrx/store';

export const RENAME_LIST = 'RENAME_LIST';

export class RenameList implements Action {
  readonly type = RENAME_LIST;

  constructor(public payload: { listId: string, title: string }) { }
}

export type Actions
  = RenameList;
