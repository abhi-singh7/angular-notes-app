import { NotesService } from './../service/notes.service';
import { Notes } from './../notes.model';
import { Component, ElementRef, OnInit, ViewChild,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @ViewChild('urlinput',{ static: false }) urlinputRef: ElementRef;
  @ViewChild('categoryinput',{ static: false }) categoryinputRef: ElementRef;
  @ViewChild('detailsinput',{ static: false }) detailsinputRef: ElementRef;

  @Output() notesAdded = new EventEmitter<Notes>();

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
  }
  onAddNotes(){
    const noteUrl = this.urlinputRef.nativeElement.value;
    console.log(noteUrl);
    const noteCategory = this.categoryinputRef.nativeElement.value;
    console.log(noteCategory);
    const noteDetails = this.detailsinputRef.nativeElement.value;
    console.log(noteDetails);
    const newNotes = new Notes(noteCategory,noteUrl,noteDetails);

    this.notesAdded.emit(newNotes);
    this.notesService.addNotes(newNotes);
  }

}
