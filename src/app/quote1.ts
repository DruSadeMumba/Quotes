export class Quote1 {
  constructor(public id: number, public quote: string, public author: string, public submitDate: Date, public upvote: number, public downvote: number){
    this.id = id;
    this.quote = quote;
    this.author = author;
    this.submitDate = submitDate;
    this.upvote = upvote;
    this.downvote = downvote;
  }
}
