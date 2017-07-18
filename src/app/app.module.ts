import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { reducer, reducers } from './shared/reducers/index';
import { appRoutes } from './app.routes';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './board/list/list.component';
import { CardComponent } from './board/list/card/card.component';
import { CardDetailsComponent } from './board/card-details/card-details.component';
import { AddCardComponent } from './board/list/add-card/add-card.component';
import { EditableHeaderComponent } from './shared/components/editable-header/editable-header.component';
import { CardsEffects } from './shared/effects/cards';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ListComponent,
    CardComponent,
    CardDetailsComponent,
    AddCardComponent,
    EditableHeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    EffectsModule.forRoot([
      CardsEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
