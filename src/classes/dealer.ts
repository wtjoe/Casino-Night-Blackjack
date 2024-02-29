import Player from './player'
import Table from './table'


class Dealer extends Player {
    constructor() {
        super('Dealer', 1000000)
    }

    // play(table: Table) {
    //     while (this.getHandValue() < 17) {
    //         this.hit(table.deck.draw(1)[0])
    //     }
    // }
}


export default Dealer