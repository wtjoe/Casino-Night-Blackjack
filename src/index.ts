import Game from './classes/game'
import Table from './classes/table'
import Player from './classes/player'
import { createServer } from 'http'
import { Server } from 'socket.io'
import express, { Express, Request, Response, NextFunction } from "express"
import path from "path"

const game = new Game('Blackjack')
const table = new Table()

const player1 = new Player('Player1', 1000)

// table.addPlayer(player1)
console.log(table.players)


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
  socket.emit('gameUpdate', table.getTableState(table))
  console.log(('gameUpdate sent to all clients'))
  socket.on('join', (player, callback) => {
    console.log(('join event received'))
    console.log(("here's the new player ") + player);
    const newPlayer = new Player(player, 1000)
    table.addPlayer(newPlayer)
    callback(newPlayer.id)
    io.emit('gameUpdate', table.getTableState(table))
    console.log(('a new player joined the game and gameUpdate sent to all clients'))
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
})

httpServer.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});