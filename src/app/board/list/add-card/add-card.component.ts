import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import uuidv4 from 'uuid/v4';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  @Output() onCardCreate: EventEmitter<string> = new EventEmitter();

  public isEditMode$: Observable<boolean>;
  public toggleFormMode$ = new BehaviorSubject(false);
  public addCardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.isEditMode$ = this.toggleFormMode$
      .scan(state => !state);

    this.addCardForm = this.formBuilder.group({
      title: [null, Validators.required],
      id: uuidv4()
    });
  }

}
