import Game from './classes/game'
import Table from './classes/table'
import Player from './classes/player'
import express, { Request, Response, NextFunction } from "express";
import path from "path";

const game = new Game('Blackjack')
const table = new Table()
const player1 = new Player('Player1', 1000)
const player2 = new Player('Player2', 1000)
table.addPlayer(player1)
table.addPlayer(player2)
game.deal(table)

game.resolve(table)

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("index.html");
  } catch (error) {
    next(error);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});