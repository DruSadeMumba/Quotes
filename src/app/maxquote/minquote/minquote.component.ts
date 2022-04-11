import { Component, OnInit } from '@angular/core';
import { Quote1} from 'src/app/quote1';

@Component({
  selector: 'app-minquote',
  templateUrl: './minquote.component.html',
  styleUrls: ['./minquote.component.css']
})
export class MinquoteComponent implements OnInit {

  quotes1:Quote1[] = [
    new Quote1 (1, " Take care of your body. It's the only place you have to live.", " Jim Rohn", "Anonymous", new Date(2000,0,1), 0, 0),
    new Quote1 (2, " To enjoy the glow of good health, you must exercise.", " Gene Tunney", "Anonymous", new Date(2000,0,1), 0, 0),
    new Quote1 (3, " The hardest thing about exercise is to start doing it. Once you are doing exercise regularly, the hardest thing is to stop it.", " Erin Gray", "Anonymous", new Date(2000,0,1), 0, 0)
  ]

  addNewQuote1(quote: Quote1){
    let quoteLength = this.quotes1.length;
    quote.id = quoteLength + 1;
    quote.submitDate = new Date(quote.submitDate);
    this.quotes1.push(quote);
  }
  
   highestvote1() {
    let upVotes1 = []
    let highest1 : number 
    for (let j = 0; j < this.quotes1.length; j++) {
      upVotes1.push(this.quotes1[j].upvote)
    }

    upVotes1.sort(function (a, b) {
      return  a - b
    })
    highest1 = upVotes1[0]
    return highest1;
  } 
    arr1: number[] = this.quotes1.map(quote=>quote.upvote)
    highest1 = Math.max(...this.arr1)  

   upVotes1(index: number): void{
    this.quotes1[index].upvote ++;

  }  
   downVotes1(index: number): void{
    this.quotes1[index].downvote ++;
  } 

  toggleDetails1(index: number): void{
    this.quotes1[index].showDescription1 = !this.quotes1[index].showDescription1;
  }

  deleteQuote1(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete: ${this.quotes1[index].quote}?`)

      if (toDelete){
        this.quotes1.splice(index,1);
      }
    }
  }


  quotes2:Quote1[] = [
    new Quote1 (1, " Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", " Malcom X", "Anonymous", new Date(2000,0,1), 0, 0),
    new Quote1 (2, " Change is the end result of all true learning", " Leo Buscaglia", "Anonymous", new Date(2000,0,1), 0, 0),
    new Quote1 (3, " Education is what remains after one has forgotten everything he/she learned in school", " Albert Einstein", "Anonymous", new Date(2000,0,1), 0, 0)
  ]

  addNewQuote2(quote: Quote1){
    let quoteLength = this.quotes2.length;
    quote.id = quoteLength + 1;
    quote.submitDate = new Date(quote.submitDate);
    this.quotes2.push(quote);
  }

  highestvote2() {
    let upVotes2 = []
    let highest2 : number
    for (let j = 0; j < this.quotes2.length; j++ ) {
      upVotes2.push(this.quotes2[j].upvote)
    }

    upVotes2.sort(function (a, b) {
      return a - b
    })
    highest2 = upVotes2[0]
    return highest2;
  }

  upVotes2(index: number): void{
    this.quotes2[index].upvote ++;
  } 
   downVotes2(index: number): void{
    this.quotes2[index].downvote ++;
  } 

  toggleDetails2(index: number): void{
    this.quotes2[index].showDescription2 = !this.quotes2[index].showDescription2;
  }
  
  deleteQuote2(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete: ${this.quotes2[index].quote}?`)

      if (toDelete){
        this.quotes2.splice(index,1);
      }
    }
  }

  quotes3:Quote1[] = [
    new Quote1 (1, " When I do good I feel good, when I do bad I feel bad. That's my religion", " Abraham Lincoln", "Anonymous", new Date(2000,0,1), 0, 0),
    new Quote1 (2, " Be still and know that I am God", " God", "Anonymous", new Date(2000,0,1), 0, 0),
    new Quote1 (3, " Be kind to all creatures. This is the true religion", " Buddha", "Anonymous", new Date(2000,0,1), 0, 0)
  ]

  addNewQuote3(quote: Quote1){
    let quoteLength = this.quotes3.length;
    quote.id = quoteLength + 1;
    quote.submitDate = new Date(quote.submitDate);
    this.quotes3.push(quote);
  }

  highestvote3() {
    let upVotes3 = []
    let highest3 : number
    for (let j = 0; j < this.quotes3.length; j++ ) {
      upVotes3.push(this.quotes3[j].upvote)
    }

    upVotes3.sort(function (a, b) {
      return a - b
    })
    highest3 = upVotes3[1]
    return highest3;
  }

  upVotes3(index: number): void{
    this.quotes3[index].upvote ++;
  } 
   downVotes3(index: number): void{
    this.quotes3[index].downvote ++;
  } 
  toggleDetails3(index: number): void{
    this.quotes3[index].showDescription3 = !this.quotes3[index].showDescription3;
  }

  deleteQuote3(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete: ${this.quotes3[index].quote}?`)

      if (toDelete){
        this.quotes3.splice(index,1);
      }
    }
  }

  quotes4:Quote1[] = [
    new Quote1 (1, " Assumptions are the termites of relationships", " Henry Winkler", "Anonymous", new Date(2000,0,1), 0, 0),
    new Quote1 (2, " Sometimes you win, sometimes you learn.", " Anonymous", "Anonymous",new Date(2000,0,1), 0, 0),
    new Quote1 (3, " A dream you dream alone is only a dream. A dream you dream together is reality", " Yoko Ono", "Anonymous", new Date(2000,0,1), 0, 0)
  ]

  addNewQuote4(quote: Quote1){
    let quoteLength = this.quotes4.length;
    quote.id = quoteLength + 1;
    quote.submitDate = new Date(quote.submitDate);
    this.quotes4.push(quote);
  }


  highestvote4() {
    let upVotes4 = []
    let highest4 : number
    for (let i = 0; i < this.quotes4.length; i++ ) {
      upVotes4.push(this.quotes4[i].upvote)
    }

    upVotes4.sort(function (a, b) {
      return a - b
    })
    highest4 = upVotes4[1]
    return highest4;
  }

  upVotes4(index: number): void{
    this.quotes4[index].upvote ++;
  } 
   downVotes4(index: number): void{
    this.quotes4[index].downvote ++;
  } 

  toggleDetails4(index: number): void{
    this.quotes4[index].showDescription4 = !this.quotes4[index].showDescription4;
  }

  deleteQuote4(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete: ${this.quotes4[index].quote}?`)

      if (toDelete){
        this.quotes4.splice(index,1);
      }
    }
  }

  quotes5:Quote1[] = [
    new Quote1 (1, " Some people want it to happen, some wish it to happen, others make it happen", " Michael Jordan", "Anonymous", new Date(2000,0,1), 0, 0),
    new Quote1 (2, " It is not a daily increase, but a daily decrease. Hack away at the inessentials", " Bruce Lee", "Anonymous", new Date(2000,0,1), 0, 0),
    new Quote1 (3, " I choose a lazy person to do a hard job, because a lazy person will find an easy way to do it.", " Bill Gates", "Anonymous", new Date(2000,0,1), 0, 0)
  ]

  addNewQuote5(quote: Quote1){
    let quoteLength = this.quotes5.length;
    quote.id = quoteLength + 1;
    quote.submitDate = new Date(quote.submitDate);
    this.quotes5.push(quote);
  }

  highestvote5() {
    let upVotes5 = []
    let highest5 : number
    for (let i = 0; i < this.quotes5.length; i++ ) {
      upVotes5.push(this.quotes5[i].upvote)
    }

    upVotes5.sort(function (a, b) {
      return a - b
    })
    highest5 = upVotes5[1]
    return highest5;
  }

  upVotes5(index: number): void{
    this.quotes5[index].upvote ++;
  } 
   downVotes5(index: number): void{
    this.quotes5[index].downvote ++;
  } 
  toggleDetails5(index: number): void{
    this.quotes5[index].showDescription5 = !this.quotes5[index].showDescription5;
  }

  deleteQuote5(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete: ${this.quotes5[index].quote}?`)

      if (toDelete){
        this.quotes5.splice(index,1);
      }
    }
  }

  constructor() { }


  ngOnInit(): void {
  }

}
