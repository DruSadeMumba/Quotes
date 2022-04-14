import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote1 } from 'src/app/quote1';

@Component({
  selector: 'app-minquote-details',
  templateUrl: './minquote-details.component.html',
  styleUrls: ['./minquote-details.component.css']
})
export class MinquoteDetailsComponent implements OnInit {

  @Input()
  quote1!: Quote1;
  
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  } 
   
  

  constructor() { }

  ngOnInit(): void {
  }

}
