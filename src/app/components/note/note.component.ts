import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../../models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  @Output() onNoteDelete = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {}

}
