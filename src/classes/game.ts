import { decks } from 'cards'
import Table from './table'

class Game {
    gameName: string;
    deck: decks.StandardDeck;

    constructor(gameName: string) {
        this.gameName = gameName
        this.deck = new decks.StandardDeck()
        this.deck.shuffleAll()
        
    }

    deal(table: Table) {
        for (let player of table.players) {
            player.playerHand = this.deck.draw(1)
        }
        table.dealer.playerHand = this.deck.draw(1)
        for (let player of table.players) {
            player.playerHand.push(...this.deck.draw(1))
        }
        table.dealer.playerHand.push(...this.deck.draw(1))
    }

    resolve(table: Table) {
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