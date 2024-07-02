import { Card } from "cards";
import { v4 as uuidv4 } from 'uuid';
import Hand from "./hand";


class Player {
    id: string
    playerName: string;
    chips: number;
    playerHands: Array<Hand> = [];

    constructor (playerName: string, chips: number) {
        this.id = uuidv4()
        this.playerName = playerName
        this.chips = chips

    }

    addHand(hand: Hand) {
        this.playerHands.push(hand)
    }

    getHands() {
        if (this.playerHands.length > 0) {
          return this.playerHands.map(hand => ({
            bet: 10, // Replace with actual bet
            cards: hand.cards.map(card => card.toString()),
            value: hand.getHandValue(),
            result: "placeholder LOSE" // Replace with actual result
          }));
        } else {
          return []; // Or return some default value
        }
      }


}

export default Player