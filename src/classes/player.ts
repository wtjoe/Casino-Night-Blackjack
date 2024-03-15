import { Card } from "cards";
import Hand from "./hand";


class Player {
    playerName: string;
    chips: number;
    playerHands: Array<Hand> = [];

    constructor (playerName: string, chips: number) {
        this.playerName = playerName
        this.chips = chips

    }

    addHand(hand: Hand) {
        this.playerHands.push(hand)
    }
}

export default Player