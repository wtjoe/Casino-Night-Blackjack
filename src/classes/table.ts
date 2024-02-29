import Dealer from './dealer'
import Player from './player'

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