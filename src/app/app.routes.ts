import { Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { CardDetailsComponent } from './board/card-details/card-details.component';

export const appRoutes: Routes = [{
  path: '',
  component: BoardComponent,
  children: [{
    path: 'card/:id',
    component: CardDetailsComponent
  }]
}];
