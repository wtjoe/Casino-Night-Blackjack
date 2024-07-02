export interface Card {
    suit: string;
    value: string;
  }
  
export interface Hand {
    bet: number;
    cards: Card[];
    value: number;
    result: string;
  }
  
export interface PlayerState {
    name: string;
    id: string;
    chips: number;
    hands?: Hand[];
  }
  
export interface TableState {
    dealer: PlayerState;
    player?: PlayerState;
    opponents?: [PlayerState];

}