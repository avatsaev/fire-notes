import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import {Note} from '../models/note';



@Injectable()
export class NotesService {

  notes: FirebaseListObservable<Note[]>;

  constructor(private db: AngularFireDatabase) {
    this.notes = db.list('/notes');
  }

  deleteNote(note: Note) {
    this.db.object(`/notes/${note.$key}`).remove();
    // this.notes = this.notes.filter( n => n.id !== note.id);
  }


  updateNote(note: Note) {
    this.db.object(`/notes/${note.$key}`).update(note);
  }

  addNote(note: Note) {
    this.db.list('/notes').push(note);
    // note.id = this.notes.length + 1;
    // this.notes.push(note);
  }

}
