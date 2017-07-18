import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-editable-header',
  templateUrl: './editable-header.component.html',
  styleUrls: ['./editable-header.component.scss']
})
export class EditableHeaderComponent implements OnInit {

  @Input() text: string;
  @Output() onChangeText: EventEmitter<string> = new EventEmitter();

  public isEditMode$: Observable<boolean>;
  public toggleEditMode$ = new BehaviorSubject(false);

  constructor() { }

  ngOnInit() {
    this.isEditMode$ = this.toggleEditMode$
      .scan(state => !state);

    this.onChangeText.subscribe(this.toggleEditMode$);
  }

}
