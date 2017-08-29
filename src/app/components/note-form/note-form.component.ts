import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Note} from '../../models/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Note>();
  @Output() onCancel = new EventEmitter<void>();

  note: Note = {
    contents: '',
    title: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onNoteSubmit() {
    this.onSubmit.emit({...this.note} as Note);
    this.note.title = '';
    this.note.contents = '';
  }

  onFormCancel () {
    this.note.title = '';
    this.note.contents = '';

    this.onCancel.emit();
  }

}
