import Dealer from './dealer.js'
import Player from './player.js'

class Table {
    players: Array<Player>;
    dealer: Dealer;

    constructor() {
        this.players = []
        this.dealer = new Dealer()
    }

    addPlayer(player: Player) {
        this.players.push(player)
    }
}

export default Table