import Game from './classes/game'
import Table from './classes/table'
import Player from './classes/player'
import { createServer } from 'http'
import { Server } from 'socket.io'
import express, { Express, Request, Response, NextFunction } from "express"
import path from "path"

const game = new Game('Blackjack')
const table = new Table()

// const player1 = new Player('Player1', 1000)
// const player2 = new Player('Player2', 1000)
// table.addPlayer(player1)
// table.addPlayer(player2)
// game.deal(table)

// game.resolve(table)

const app: Express = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("index.html");
  } catch (error) {
    next(error);
  }
});

const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log(('New Websocket connection'))

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('join', (username, callback) => {
    try {
      const player = new Player(username, 1000);
      table.addPlayer(player);
      console.log('User joined', player.playerName);
      callback();
    } catch (error) {
      console.error('Error joining user:', error);
      callback(error);
    }
  });

})

httpServer.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});