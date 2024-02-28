import { Card } from "cards";

class Player {
    playerName: string;
    chips: number;
    playerHand: Array<Card> = [];

    constructor (playerName: string, chips: number) {
        this.playerName = playerName
        this.chips = chips
        this.playerHand = []

    }

    getHandValue() {

        var hardValue = 0
        var softValue = 0
        const faceCards = ['Q', 'K', 'J']
        const aceCard = ['A']
    
        this.playerHand.forEach(card => {
            if (faceCards.includes(card.rank.abbrn)) {
                hardValue = hardValue + 10
            } else if (aceCard.includes(card.rank.abbrn)) { 
                hardValue = hardValue + 11
            } else { 
                hardValue = hardValue + Number(card.rank.abbrn)
            }
            
        })
    
        this.playerHand.forEach(card => {
            if (faceCards.includes(card.rank.abbrn)) {
                softValue = softValue + 10
            } else if (aceCard.includes(card.rank.abbrn)) { 
                softValue = softValue + 1
            } else { 
                softValue = softValue + Number(card.rank.abbrn)
            }
            
        })
    
        console.log(this.playerName + " Hand Value")
        if (softValue == hardValue) {
            console.log(hardValue)
            return [hardValue]
        } else {
            console.log(hardValue, softValue)
            return [hardValue, softValue]
        }
        
    }
    

    hit() {
        // this.playerHand.push(...this.deck.draw(1))
    }

    stand() {
        console.log("stand")
    }

    double() {
        console.log("double")
    }

    split() {
        console.log("split")
    }

    surrender() {
        console.log("surrender")
    }

    insurance() {
        console.log("insurance")
    }

    
}

export default Player