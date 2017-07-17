import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableHeaderComponent } from './editable-header.component';

describe('EditableHeaderComponent', () => {
  let component: EditableHeaderComponent;
  let fixture: ComponentFixture<EditableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
