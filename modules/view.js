import * as Table from './table.js';

let path = './uno_assets_2d/PNGs/small/';
let $opponent;
let $player;
let $piles;
let $drawPile;
let $discardPile;

export function setupTable(cards: number) {
  setupOpponent(cards);
  setupPiles();
  setupDrawPile();
  setupDiscardPile();
  setupPlayer(cards);
}

export function renderOpponent(hand: array) {
  $('#opponent').children().each(function(i) {
    let card = path + hand[i].color + '_' + hand[i].number + '.png';

    $(this).attr('src', card);
  })
}

export function renderPlayer(hand: array) {
  $('#player').children().each(function(i) {
    let card = path + hand[i].color + '_' + hand[i].number + '.png';

    $(this).attr('src', card);
  })
}

export function renderPiles() {
  let cardBack = path + 'card_back_alt.png';
  let topCard = path +
    Table.topCard.color +
    '_' +
    Table.topCard.number +
    '.png';
  let onClickDrawPile = (() => {
    let card = Table.drawPile.pop();

    if(Table.currentPlayer == 0) {
      ///////////
    }
  });

  $drawPile.attr('src', cardBack)
  $drawPile.click(onClickDrawPile);

  $discardPile.attr('src', topCard)
}

export function removeCard(img) {
  $(img).remove();
}

function setupDiscardPile() {
  $discardPile = $('<img>');
  $discardPile.attr('id', 'discardPile');
  $discardPile.attr('class', 'card');

  $('#piles').append($discardPile);
}

function setupDrawPile() {
  $drawPile = $('<img>');
  $drawPile.attr('id', 'drawPile');
  $drawPile.attr('class', 'card');

  $('#piles').append($drawPile);
}

function setupPiles() {
  $piles = $('<div>');
  $piles.attr('id', 'piles');

  $('body').append($piles);
}

function setupPlayer(cards: number) {
  $player = $('<div>');
  $player.attr('id', 'player');

  for (let i = 0; i < cards; i++) {
    let $card = $('<img>');
    let player = Table.players[1];
    let onClickCard = player.onClickCard.bind(player, $player);

    $card.attr('class', 'card');
    $card.click(onClickCard);

    $player.append($card);
  }

  $('body').append($player);
}

function setupOpponent(cards: number) {
  $opponent = $('<div>');
  $opponent.attr('id', 'opponent');

  for (let i = 0; i < cards; i++) {
    let $card = $('<img>');
    let opponent = Table.players[0];
    let onClickCard = opponent.onClickCard.bind(opponent, $opponent);

    $card.attr('class', 'card');
    $card.click(onClickCard);

    $opponent.append($card);
  }

  $('body').append($opponent);
}
