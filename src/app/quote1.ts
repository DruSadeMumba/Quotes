export class Quote1 {
  showDescription1: boolean;
  showDescription2: boolean;
  showDescription3: boolean;
  showDescription4: boolean;
  showDescription5: boolean;
  
  constructor(public id: number, public quote: string, public author: string, public submitDate: Date, public upvote: number, public downvote: number){
    this.id = id;
    this.quote = quote;
    this.author = author;
    this.submitDate = submitDate;
    this.upvote = upvote;
    this.downvote = downvote;
    this.showDescription1 = false;
    this.showDescription2 = false;
    this.showDescription3 = false;
    this.showDescription4 = false;
    this.showDescription5 = false;

  }
}

/* export class Quote2 {

  constructor(public id: number, public quote: string, public author: string, public submitDate: Date, public upvote: number, public downvote: number){
    this.id = id;
    this.quote = quote;
    this.author = author;
    this.submitDate = submitDate;
    this.upvote = upvote;
    this.downvote = downvote;
  }
}

export class Quote3 {

  constructor(public id: number, public quote: string, public author: string, public submitDate: Date, public upvote: number, public downvote: number){
    this.id = id;
    this.quote = quote;
    this.author = author;
    this.submitDate = submitDate;
    this.upvote = upvote;
    this.downvote = downvote;
  }
}

export class Quote4 {
  constructor(public id: number, public quote: string, public author: string, public submitDate: Date, public upvote: number, public downvote: number){
    this.id = id;
    this.quote = quote;
    this.author = author;
    this.submitDate = submitDate;
    this.upvote = upvote;
    this.downvote = downvote;
  }
}

export class Quote5 {
  constructor(public id: number, public quote: string, public author: string, public submitDate: Date, public upvote: number, public downvote: number){
    this.id = id;
    this.quote = quote;
    this.author = author;
    this.submitDate = submitDate;
    this.upvote = upvote;
    this.downvote = downvote;
  }
}
 */