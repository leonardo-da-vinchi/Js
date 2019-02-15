import {embededFavorites, embededSearch} from './loadItems.js';
// import {setStandartListeners, setFavoriteListeners} from './listeners.js';
let value;
let form = document.querySelector("form");
let favoriteButton = document.querySelector(".favorites-button");
form.addEventListener("submit", e => {
  e.preventDefault();
  value = document.querySelector("input").value;
  embededSearch(
    `http://www.omdbapi.com/?s=${value.split(" ").join("+")}&apikey=d5677312`
  );

});

favoriteButton.addEventListener("click", embededFavorites);
