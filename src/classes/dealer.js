import Player from './player.js'

class Dealer extends Player {
    constructor() {
        super('Dealer', 1000000)
    }

    play(table) {
        while (this.getHandValue() < 17) {
            this.hit(table.deck.draw(1)[0])
        }
    }
}


export default Dealer