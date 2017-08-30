import { Injectable } from '@angular/core';
import {Note} from '../models/note';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@Injectable()
export class NotesService {

  notes: FirebaseListObservable<Note[]> = this.db.list('/notes');

  constructor(private db: AngularFireDatabase) { }



  addNote(note: Note) {
    this.db.list('/notes').push(note);
  }

  deleteNote(note: Note) {
    this.db.list(`/notes/${note.$key}`).remove();
  }

}
