import Game from './classes/game.js'
import Table from './classes/table.js'
import Player from './classes/player.js'

const game = new Game('Blackjack')
const table = new Table()
const player1 = new Player('Player1', 1000)
const player2 = new Player('Player2', 1000)
table.addPlayer(player1)
table.addPlayer(player2)
game.deal(table)

game.resolve(table)