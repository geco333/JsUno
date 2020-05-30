import * as Table from './table.js';

let path = './uno_assets_2d/PNGs/small/';
let $players = [];
let $piles;
let $drawPile;
let $discardPile;
let $currentPlayer
let Cards;

export function setupTable(cards) {
  Cards = cards;

  setupGUI();
  setupPlayer(0);
  setupPiles();
  setupDrawPile();
  setupDiscardPile();
  setupPlayer(1);
}

export function renderPlayer(i, hand) {
  $('#player_' + i).children().each(function(i) {
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

  $drawPile.attr('src', cardBack)

  $discardPile.attr('src', topCard)
}

export function removeCard(img) {
  $(img).remove();
}

function setupGUI() {
  $currentPlayer = $('<span>');
  $currentPlayer.attr('id', 'currentPlayer');
  $currentPlayer.attr('class', 'currentPlayer');

  $('body').append($currentPlayer);

  updateCurrentPlayer();
}

function updateCurrentPlayer() {
  $currentPlayer.text(Table.currentPlayer);
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

  $drawPile.click(onClickDrawPile);
  $('#piles').append($drawPile);
}

function onClickDrawPile() {
  let card = Table.drawPile.pop();

  if (card != undefined) {
    Table.players[Table.currentPlayer].hand.push(card);

    let $img = $('<img>');
    let player = Table.players[0];
    let onClickCard = player.onClickCard.bind(player, $opponent);

    $img.attr('class', 'card');
    $img.click(onClickCard);

    $opponent.append($img);
    renderOpponent(Table.players[0].hand);

    Table.changePlayer();
  }
}

function setupPiles() {
  $piles = $('<div>');
  $piles.attr('id', 'piles');

  $('body').append($piles);
}

function setupPlayer(playerIndex) {
  $players[playerIndex] = $('<div>');
  $players[playerIndex].attr('id', 'player_' + playerIndex);

  for (let i = 0; i < Cards; i++) {
    let $img = $('<img>');
    let player = Table.players[1];
    let onClickCard = player.onClickCard.bind(player, $players[playerIndex]);

    $img.attr('class', 'card');
    $img.click(onClickCard);

    $players[playerIndex].append($img);
  }

  $('body').append($players[playerIndex]);
}

function addCardImg($player) {
  $player
}
