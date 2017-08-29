import { Injectable } from '@angular/core';
import {Note} from '../models/note';

@Injectable()
export class NotesService {

  notes: Note[] = [
    {
      id: 1,
      title: 'note 1',
      contents: 'my note 1'
    }, {
      id: 2,
      title: 'note 2',
      contents: 'my note 2'
    }
  ];

  constructor() { }


  addNote(note: Note) {
    const id = this.notes.length + 1;
    note.id = id;
    this.notes.push(note);
  }
  deleteNote(note: Note) {
    this.notes = this.notes.filter(n => n.id !== note.id);
  }

}
