import Game from "../../src/classes/game";
import Table from "../../src/classes/table";
import Player from "../../src/classes/player";
import { decks, Card } from "cards";
import { hearts, spades } from "cards/build/suits";
import { standard } from "cards/build/ranks";

describe("Game", () => {
    it("should create a game with the correct initial values", () => {
        const game = new Game("Blackjack");
        const unshuffledDeck = new decks.StandardDeck();
        const drawnFromGameDeck = game.deck.draw(52);
        const drawnFromUnshuffled = unshuffledDeck.draw(52);
        expect(game.gameName).toBe("Blackjack");
        expect(game.deck.totalLength).toBe(52);
        expect(drawnFromGameDeck).not.toEqual(drawnFromUnshuffled);
    });
});

describe("Game.deal", () => {
    it("should deal the correct number of cards to the correct players", () => {
        const game = new Game("Blackjack");
        const table = new Table();
        const player1 = new Player("Player 1", 1000);
        const player2 = new Player("Player 2", 1000);
        table.addPlayer(player1);
        table.addPlayer(player2);
        game.deal(table);
        expect(table.players[0].playerHand.length).toBe(2);
        expect(table.players[1].playerHand.length).toBe(2);
        expect(table.dealer.playerHand.length).toBe(2);
    });
});

describe("Game.resolve", () => {
    it("should resolve the game correctly", () => {
        const game = new Game("Blackjack");
        const table = new Table();
        const player1 = new Player("Player 1", 1000);
        const player2 = new Player("Player 2", 1000);
        table.addPlayer(player1);
        table.addPlayer(player2);
        player1.playerHand = [new Card(hearts, standard.ace), new Card(hearts, standard.ten)];
        player2.playerHand = [new Card(spades, standard.ace), new Card(spades, standard.ten)];
        table.dealer.playerHand = [new Card(hearts, standard.ace), new Card(hearts, standard.ten)];

        console.log = jest.fn();
        game.resolve(table);
        expect(console.log).toHaveBeenNthCalledWith(1, "Dealer Hand Value");
        expect(console.log).toHaveBeenNthCalledWith(2, 21, 11);
        expect(console.log).toHaveBeenNthCalledWith(3, "Player 1 Hand Value");
        expect(console.log).toHaveBeenNthCalledWith(4, 21, 11);
        expect(console.log).toHaveBeenNthCalledWith(5, "push!");
        expect(console.log).toHaveBeenNthCalledWith(6, "Player 2 Hand Value");
        expect(console.log).toHaveBeenNthCalledWith(7, 21, 11);
        expect(console.log).toHaveBeenNthCalledWith(8, "push!");

        player1.playerHand = [new Card(hearts, standard.two), new Card(hearts, standard.two)];
        player2.playerHand = [new Card(spades, standard.queen), new Card(spades, standard.jack)];
        table.dealer.playerHand = [new Card(hearts, standard.king), new Card(hearts, standard.eight)];

        console.log = jest.fn();
        game.resolve(table);
        expect(console.log).toHaveBeenNthCalledWith(1, "Dealer Hand Value");
        expect(console.log).toHaveBeenNthCalledWith(2, 18);
        expect(console.log).toHaveBeenNthCalledWith(3, "Player 1 Hand Value");
        expect(console.log).toHaveBeenNthCalledWith(4, 4);
        expect(console.log).toHaveBeenNthCalledWith(5, "lose!");
        expect(console.log).toHaveBeenNthCalledWith(6, "Player 2 Hand Value");
        expect(console.log).toHaveBeenNthCalledWith(7, 20);
        expect(console.log).toHaveBeenNthCalledWith(8, "win!");
    });
});