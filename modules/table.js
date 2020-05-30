import * as View from './view.js'

function Card(color, number) {
    this.color = color;
    this.number = number;
}

export let drawPile = [];
export let topCard;
export let players = [];
export let currentPlayer = 0;

let colors = ['red', 'yellow', 'blue', 'green'];
let wilds = ['plus_two', 'reverse', 'skip'];

export function setupTable(cards, ...players) {
    this.players.push(...players);

    setupDrawPile();
    shuffle();

    topCard = drawPile.pop();
}

export function setTopCard(card) {
    topCard = card;
}

export function changePlayer() {
  currentPlayer = (currentPlayer + 1) % 2;
  View.updateCurrentPlayer();
}

function setupDrawPile() {
    for (let i = 0; i < 4; i++) {
        let color = colors[i];

        // Number cards.
        for (let j = 1; j < 10; j++) {
            let card = new Card(color, j);
            drawPile.push(card);
        }

        // Wilds.
        for (let j = 0; j < 3; j++) {
            let card = new Card(color, wilds[j]);
            drawPile.push(card);
        }
    }
}

function shuffle() {

    for (let i = 0; i < drawPile.length; i++) {
        let rnd = parseInt((Math.random() * 100) % drawPile.length);
        let tmp = drawPile[i];
        drawPile[i] = drawPile[rnd];
        drawPile[rnd] = tmp;
    }
}
