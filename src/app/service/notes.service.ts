import { Notes } from './../notes.model';

export class NotesService{

  private notes: Notes[] = [
    new Notes('Science and Tech', 'www.google.com', 'this is test URL'),
    new Notes('Science and Tech', 'https://timesofindia.indiatimes.com', 'this is test URL'),
  ];

  getNotes(){
    return this.notes.slice();
  }

  addNotes(notes: Notes){

    this.notes.push(notes);
    console.log(notes);
  }

}
