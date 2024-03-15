import Dealer from './dealer'
import Hand from './hand';
import Player from './player'
import { Card, decks } from "cards";

class Table {
    players: Array<Player>;
    dealer: Dealer;
    deck: decks.StandardDeck;
    

    constructor() {
        this.players = []
        this.dealer = new Dealer()
        this.deck = new decks.StandardDeck()
        this.deck.shuffleAll()
    }

    addPlayer(player: Player) {
        this.players.push(player)
    }

    deal(table: Table) {
        for (let player of table.players) {
            let hand = new Hand(10, [])
            hand.cards = this.deck.draw(1)
            player.addHand(hand)
        }
        let dealerHand = new Hand(0, [])
        dealerHand.cards = this.deck.draw(1)
        table.dealer.addHand(dealerHand)
        for (let player of table.players) {
            player.playerHands[0].cards.push(...this.deck.draw(1))
        }
        table.dealer.playerHands[0].cards.push(...this.deck.draw(1))
    }

    resolve(table: Table) {
        let dealerHandValue = table.dealer.playerHands[0].getHandValue();
        for (let player of table.players) {
            let playerHandValue = player.playerHands[0].getHandValue();
            if (playerHandValue > dealerHandValue) {
                console.log("win!")
            } else if (playerHandValue == dealerHandValue) {
                console.log("push!")
            } else {
                console.log("lose!")
            }
        } 
    }

    getGameState(table: Table) {
        return JSON.stringify({
            dealer: {
                dealerHand: table.dealer.playerHands[0].cards.map(card => card.toString()),
                value: table.dealer.playerHands[0].getHandValue()[0],
                result: "placeholder BlackJack!"
            },
            players: table.players.map((player) => {
                return {
                    name: player.playerName,
                    chips: player.chips,
                    hands: player.playerHands.map((playerHand) => {
                        return {
                            bet: 10,
                            cards: player.playerHands[0].cards.map(card => card.toString()),
                            value: player.playerHands[0].getHandValue(),
                            result: "placeholder LOSE"
                        }
                    })
                }
            })
            
        })

    }
}

export default Table