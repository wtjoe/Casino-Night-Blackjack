import { decks } from 'cards'

class Game {
    constructor(name) {
        this.name = name
        this.deck = new decks.StandardDeck()
        this.deck.shuffleAll()
        
    }

    deal(table) {
        for (let player of table.players) {
            player.playerHand = this.deck.draw(1)
        }
        table.dealer.playerHand = this.deck.draw(1)
        for (let player of table.players) {
            player.playerHand.push(...this.deck.draw(1))
        }
        table.dealer.playerHand.push(...this.deck.draw(1))
    }

    resolve(table) {
        let dealerHandValue = table.dealer.getHandValue()[0];
        for (let player of table.players) {
            let playerHandValue = player.getHandValue()[0];
            if (playerHandValue > dealerHandValue) {
                console.log("win!")
            } else if (playerHandValue == dealerHandValue) {
                console.log("push!")
            } else {
                console.log("lose!")
            }
        } 
    }


}

export default Game;