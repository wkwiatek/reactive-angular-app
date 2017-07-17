import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { reducer } from './shared/reducers/index';
import { appRoutes } from './app.routes';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './board/list/list.component';
import { CardComponent } from './board/list/card/card.component';
import { CardDetailsComponent } from './board/card-details/card-details.component';
import { AddCardComponent } from './board/list/add-card/add-card.component';
import { EditableHeaderComponent } from './shared/components/editable-header/editable-header.component';

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

    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
