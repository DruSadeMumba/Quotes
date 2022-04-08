import { Component, OnInit } from '@angular/core';
import { Quote1 } from 'src/app/quote1';

@Component({
  selector: 'app-minquote',
  templateUrl: './minquote.component.html',
  styleUrls: ['./minquote.component.css']
})
export class MinquoteComponent implements OnInit {

  quotes:Quote1[] = [
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
