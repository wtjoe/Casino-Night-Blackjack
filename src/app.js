import { decks } from 'cards'

const deck = new decks.StandardDeck()

deck.shuffleAll()

const playerHand = deck.draw(1)
const dealerHand = deck.draw(1)
playerHand.push(...deck.draw(1))
dealerHand.push(...deck.draw(1))



console.log(playerHand[0].rank.abbrn)
console.log(playerHand[1].rank.abbrn)
console.log(dealerHand[0].rank.abbrn)
console.log(dealerHand[1].rank.abbrn)




const handValue = (hand) => {

    var hardValue = 0
    var softValue = 0
    const faceCards = ['Q', 'K', 'J']
    const aceCard = ['A']

    hand.forEach(card => {
        if (faceCards.includes(card.rank.abbrn)) {
            hardValue = hardValue + 10
        } else if (aceCard.includes(card.rank.abbrn)) { 
            hardValue = hardValue + 11
        } else { 
            hardValue = hardValue + Number(card.rank.abbrn)
        }
        
    });

    hand.forEach(card => {
        if (faceCards.includes(card.rank.abbrn)) {
            softValue = softValue + 10
        } else if (aceCard.includes(card.rank.abbrn)) { 
            softValue = softValue + 1
        } else { 
            softValue = softValue + Number(card.rank.abbrn)
        }
        
    });


    if (softValue == hardValue) {
        return [hardValue]
    } else {
        return [hardValue, softValue]
    }
    

    
}
const handResult = (playerHandValue,dealerHandValue) => {
    if (playerHandValue[0] > dealerHandValue[0]) {
        console.log("win!")
        return 1
    } else if (playerHandValue[0] == dealerHandValue[0]) {
        console.log("push!")
        return 0
    } else {
        console.log("lose!")
        return -1
    }

}

const playerHandValue = handValue(playerHand)
const dealerHandValue = handValue(dealerHand)

console.log(playerHandValue)
console.log(dealerHandValue)
console.log(handResult(playerHandValue,dealerHandValue))