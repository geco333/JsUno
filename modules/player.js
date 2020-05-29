import * as Table from './table.js';
import * as View from './view.js';

export function Player(number: number) {
  this.View: View = view;
  this.hand: array = [];
  this.number: number = number;

  this.getCards = function(cards: number) {
    for (let i = 0; i < cards; i++) {
      this.hand[i] = Table.drawPile.pop();
    }
  }

  this.onClickCard = function($player, event) {
    let img = event.target;
    let i = $player.children().index(img);
    let selectedCard = this.hand[i];

    if (Table.currentPlayer == this.number &&
      (selectedCard.color == Table.topCard.color ||
        selectedCard.number == Table.topCard.number)) {
      Table.setTopCard(selectedCard);

      this.hand.splice(i, 1);
      View.removeCard(event.target)

      View.renderPiles();

      Table.changePlayer();
    }
  }
}
