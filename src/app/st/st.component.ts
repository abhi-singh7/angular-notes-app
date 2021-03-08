import { NotesService } from './../service/notes.service';
import { UrlService } from './../service/url.service';
import { Notes } from './../notes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-st',
  templateUrl: './st.component.html',
  styleUrls: ['./st.component.css'],
})
export class StComponent implements OnInit {


  notes: Notes[] ;
  // = [
  //   new Notes('Science and Tech', 'www.google.com', 'this is test URL'),
  //   new Notes('Science and Tech', 'timesofindia.indiatimes.com', 'this is test URL'),
  // ];

  constructor(private urlservice: UrlService, private notesService: NotesService) {

  }

  ngOnInit() {
this.notes = this.notesService.getNotes();
console.log('st notes are '+this.notes)

  }



  onClick(url: string) {
    this.urlservice.goToUrl(url);
  }
}
