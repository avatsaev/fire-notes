import { Component } from '@angular/core';
import {Note} from './models/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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

  constructor() {

  }



}
