import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote1 } from 'src/app/quote1';

@Component({
  selector: 'app-minquote-form',
  templateUrl: './minquote-form.component.html',
  styleUrls: ['./minquote-form.component.css']
})
export class MinquoteFormComponent implements OnInit {

  newQuote1 = new Quote1 (0, " ", " ", " ", new Date(), 0, 0);

  @Output() addQuote1 = new EventEmitter<Quote1>();

  submitQuote1(){
  this.addQuote1.emit(this.newQuote1);
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
