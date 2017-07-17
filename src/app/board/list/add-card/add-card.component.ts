import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  public isEditMode$: Observable<boolean>;
  public toggleFormMode$ = new BehaviorSubject(false);

  constructor() {
    this.isEditMode$ = this.toggleFormMode$
      .scan(state => !state);
  }

  ngOnInit() {}

}
