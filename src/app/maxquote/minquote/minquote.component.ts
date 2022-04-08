import { Component, OnInit } from '@angular/core';
import { Quote1 } from 'src/app/quote1';

@Component({
  selector: 'app-minquote',
  templateUrl: './minquote.component.html',
  styleUrls: ['./minquote.component.css']
})
export class MinquoteComponent implements OnInit {

  quotes1:Quote1[] = [
    new Quote1 (1, " Take care of your body. It's the only place you have to live.", " Jim Rohn", new Date(2000,0,1), 0, 0),
    new Quote1 (2, " To enjoy the glow of good health, you must exercise.", " Gene Tunney", new Date(1995,5,14), 0, 0),
    new Quote1 (3, " The hardest thing about exercise is to start doing it. Once you are doing exercise regularly, the hardest thing is to stop it.", " Erin Gray", new Date(2013,8,7), 0, 0)
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
