import * as Player from './modules/player.js';
import * as Table from './modules/table.js';
import * as View from './modules/view.js';

let cards: number = 8;
let player: Player;
let opponent: Player;

let players = [
  new Player.Player(0),
  new Player.Player(1)
]

Table.setupTable(cards, ...players);

players.forEach((player, i) => {
  player.getCards(cards);
});

View.setupTable(cards);
View.renderOpponent(Table.players[0].hand);
View.renderPiles();
View.renderPlayer(Table.players[1].hand);

// Export to global namespace.
window.Table = Table;
window.player = player;
window.opponent = opponent;
