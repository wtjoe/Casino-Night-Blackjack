import Dealer from './dealer.js'

class Table {
    constructor() {
        this.players = []
        this.dealer = new Dealer()
    }

    addPlayer(player) {
        this.players.push(player)
    }
}

export default Table