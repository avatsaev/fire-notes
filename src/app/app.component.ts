import { Component } from '@angular/core';
import {NotesService} from './services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  showNoteForm = false;

  constructor(public notesService: NotesService) {}

}

