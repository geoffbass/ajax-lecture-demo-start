/* global $ */
$(function () {

  function createListItem (text) {
    return $(`<li>${text}</li>`);
  }

  function addToList (list, text) {
    const newListItem = createListItem(text);
    list.append(newListItem);
  }

  const $gamesList = $('#games-list');


  // add a new game when the form is submitted
  $('#game-form').submit(function (event) {
    event.preventDefault();
    const $gameInput = $('#new-game');
    const newGameName = $gameInput.val();
    $gameInput.val('');

    addToList($gamesList, newGameName);
  });

});
