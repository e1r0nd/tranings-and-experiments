import * as express from "express";
import { getRandomIntInRange } from "../helpers";
import Quotes from "./quotes";

class QuotesController {
  public path = "/quotes";
  public router = express.Router();
  private quotes = Quotes;

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get("/", this.getIndex);
    this.router.get(this.path, this.getAllQuotes);
  }

  public getIndex = (request: express.Request, response: express.Response) => {
    const quote = this.getRandomQuote();
    response.render("index", {
      author: quote.author,
      quote: `«${quote.quote}»`,
    });
  }

  public getAllQuotes = (
    request: express.Request,
    response: express.Response,
  ) => {
    response.send(this.quotes);
  }

  private getRandomQuote = () => {
    const index = getRandomIntInRange(0, this.quotes.length - 1);
    return this.quotes[index];
  }
}

export default QuotesController;
