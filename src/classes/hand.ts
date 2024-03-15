import { Card } from "cards";

class Hand {
    bet: number = 0;
    cards: Array<Card> = [];

    constructor(bet: number, cards: Array<Card>) {
        this.bet = bet
        this.cards = cards
    }



    getHandValue() {

        var hardValue = 0
        var softValue = 0
        const faceCards = ['Q', 'K', 'J']
        const aceCard = ['A']

        this.cards.forEach(card => {
            if (faceCards.includes(card.rank.abbrn)) {
                hardValue = hardValue + 10
            } else if (aceCard.includes(card.rank.abbrn)) { 
                hardValue = hardValue + 11
            } else { 
                hardValue = hardValue + Number(card.rank.abbrn)
            }
            
        })

        this.cards.forEach(card => {
            if (faceCards.includes(card.rank.abbrn)) {
                softValue = softValue + 10
            } else if (aceCard.includes(card.rank.abbrn)) { 
                softValue = softValue + 1
            } else { 
                softValue = softValue + Number(card.rank.abbrn)
            }
            
        })

        if (softValue == hardValue) {
            return [hardValue]
        } else {
            return [hardValue, softValue]
        }
        
    }

    // hit() {
    //     this.playerHand.push(...this.deck.draw(1))
    // }

    // stand() {
    //     console.log("stand")
    // }

    // double() {
    //     console.log("double")
    // }

    // split() {
    //     console.log("split")
    // }

    // surrender() {
    //     console.log("surrender")
    // }

    // insurance() {
    //     console.log("insurance")
    // }


}
export default Hand;