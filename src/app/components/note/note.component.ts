import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Note} from '../../models/note';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {

  @Input() note: Note;
  @Output() onDelete = new EventEmitter<Note>();
  @Output() onSave = new EventEmitter<Note>();

  editMode = false;
  newContent: string;

  constructor() { }

  ngOnChanges() {
    this.newContent = this.note.content;
  }

  ngOnInit() {

  }

  saveNote() {
    this.note.content = this.newContent;
    this.onSave.emit(this.note);
  }

  cancel() {
    this.newContent = this.note.content;
    this.editMode = false;
  }

}
