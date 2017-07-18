import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IListWithCards } from '../../shared/models/list-with-cards';
import { ICard } from '../../shared/models/card';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: IListWithCards;
  @Output() onCardCreate: EventEmitter<{ listId: string, card: ICard }> = new EventEmitter();
  @Output() onListTitleChange: EventEmitter<{ listId: string, title: string }> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
