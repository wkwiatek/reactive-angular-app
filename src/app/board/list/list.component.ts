import { Component, Input, OnInit } from '@angular/core';
import { IListWithCards } from '../../shared/models/list-with-cards';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: IListWithCards;

  constructor() { }

  ngOnInit() {
  }

}
