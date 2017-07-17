import { ICard } from './card';

export interface IListWithCards {
  id: string;
  title: string;
  cards: ICard[];
}
