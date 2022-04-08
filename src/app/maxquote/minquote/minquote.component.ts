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
  quotes2:Quote1[] = [
    new Quote1 (1, " Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", " Malcom X", new Date(), 0, 0),
    new Quote1 (2, " Change is the end result of all true learning", " Leo Buscaglia", new Date(), 0, 0),
    new Quote1 (3, " Education is what remains after one has forgotten everything he/she learned in school", " Albert Einstein", new Date(), 0, 0)
  ]
  quotes3:Quote1[] = [
    new Quote1 (1, " When I do good I feel good, when I do bad I feel bad. That's my religion", " Abraham Lincoln", new Date(), 0, 0),
    new Quote1 (2, " Be still and know that I am God", " God", new Date(), 0, 0),
    new Quote1 (3, " Be kind to all creatures. This is the true religion", " Buddha", new Date(), 0, 0)
  ]
  quotes4:Quote1[] = [
    new Quote1 (1, " Assumptions are the termites of relationships", " Henry Winkler", new Date(), 0, 0),
    new Quote1 (2, " Sometimes you win, sometimes you learn.", " Anonymous", new Date(), 0, 0),
    new Quote1 (3, " A dream you dream alone is only a dream. A dream you dream together is reality", " Yoko Ono", new Date(), 0, 0)
  ]
  quotes5:Quote1[] = [
    new Quote1 (1, " Some people want it to happen, some wish it to happen, others make it happen", " Michael Jordan", new Date(), 0, 0),
    new Quote1 (2, " It is not a daily increase, but a daily decrease. Hack away at the inessentials", " Bruce Lee", new Date(), 0, 0),
    new Quote1 (3, " I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it.", " Bill Gates", new Date(), 0, 0)
  ]




  constructor() { }

  ngOnInit(): void {
  }

}
