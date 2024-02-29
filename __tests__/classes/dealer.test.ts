import Dealer from '../../src/classes/dealer';

describe('Dealer', () => {
  it('should create a dealer with the correct initial values', () => {
    const dealer = new Dealer();
    expect(dealer.playerName).toBe('Dealer');
    expect(dealer.chips).toBe(1000000);
  });
});