document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const gameListItem = createGameListItem(event.target);
    const gameList = document.querySelector('#game-list');
    gameList.appendChild(gameListItem);

    event.target.reset();
}

const createGameListItem = function (form) {
    const gameListItem = document.createElement('li');
    gameListItem.classList.add('game-list-item');

    const character = document.createElement('h2');
    character.textContent = form.character.value;
    gameListItem.appendChild(character);

    const kart = document.createElement('h3');
    kart.textContent = form.kart.value;
    gameListItem.appendChild(kart);

    const gameChoice = document.createElement('h4');
    gameChoice.textContent = form.gameChoice.value;
    gameListItem.appendChild(gameChoice);

    const difficulty = document.createElement('p');
    difficulty.textContent = form.difficulty.value;
    gameListItem.appendChild(difficulty);

    return gameListItem;
}
 
const handleDeleteAllClick = function (event) {
    const gameList = document.querySelector('#game-list');
    gameList.textContent = '';

}