import { Component, Input, OnInit, Output } from '@angular/core';
import { Quote1 } from 'src/app/quote1';

@Component({
  selector: 'app-minquote-details',
  templateUrl: './minquote-details.component.html',
  styleUrls: ['./minquote-details.component.css']
})
export class MinquoteDetailsComponent implements OnInit {

  @Input()
  quote1!: Quote1;
  @Input()
  quote2!: Quote1;
  @Input()
  quote3!: Quote1;
  @Input()
  quote4!: Quote1;
  @Input()
  quote5!: Quote1;


  constructor() { }

  ngOnInit(): void {
  }

}
