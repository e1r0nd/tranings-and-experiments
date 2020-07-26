import App from "./app";
import QuotesController from "./quotes/quotes.controller";

const PORT = process.env.PORT ? (+process.env.PORT as number) : 3000;

const app = new App([new QuotesController()], PORT);

app.listen();
