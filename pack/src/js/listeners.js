// import {embededSearch, embededFavorites, embededFilmPage} from './loadItems';
// import {value} from './start.js';
// let thisFilm;

// export const setStandartListeners = () => {
//   let itemFavoriteButtons = document.querySelectorAll(".favorite-button");
//   let backButton = document.querySelector(".back");
//   let enterButton = document.querySelectorAll(".enter-button");

//   if (enterButton)
//   enterButton.forEach(element => {
//     element.addEventListener("click", (e) => {
//       thisFilm = e.target.getAttribute("data-id");
//       embededFilmPage(`http://www.omdbapi.com/?i=${thisFilm}&apikey=d5677312`)
//     });
//   });


//   if (itemFavoriteButtons)
//     itemFavoriteButtons.forEach(element => {
//       element.addEventListener("click", toogleFavorite);
//     });

//   if (backButton)
//     backButton.addEventListener("click", () => {
//       back(value);
//     });
// };

// export const setFavoriteListeners = () => {
//   let itemFavoriteButtons = document.querySelectorAll(".favorite-button");
//   let enterButton = document.querySelectorAll(".enter-button");
//   value = "";
  
//   if (enterButton)
//   enterButton.forEach(element => {
//     element.addEventListener("click", (e) => {
//       thisFilm = e.target.getAttribute("data-id");
//       embededFilmPage(`http://www.omdbapi.com/?i=${thisFilm}&apikey=d5677312`)
//     });
//   });


//   itemFavoriteButtons.forEach(element => {
//     element.addEventListener("click", e => {
//       let idFilm = e.target.getAttribute("data-id");
//       localStorage.removeItem(idFilm);
//       e.target.parentNode.parentNode.remove();
//       if (document.querySelector(".results").innerHTML == "")
//         document.querySelector(".results").innerHTML =
//           "<p>У вас нет избранных фильмов</p>";
//     });
//   });
// };

// const toogleFavorite = e => {
//   let idFilm = e.target.getAttribute("data-id");
//   if (localStorage.length) {
//     if (localStorage.getItem(idFilm)) {
//       e.target.src = "img/insert_favorite_button.svg";
//       localStorage.removeItem(idFilm);
//     } else {
//       e.target.src = "img/remove_favorite_button.svg";
//       localStorage.setItem(idFilm, true);
//     }
//   } else {
//     e.target.src = "img/remove_favorite_button.svg";
//     localStorage.setItem(idFilm, true);
//   }
// };

// const back = lastUrl => {
//   if (lastUrl) {
//     embededSearch(
//       `http://www.omdbapi.com/?s=${lastUrl
//         .split(" ")
//         .join("+")}&apikey=d5677312`
//     );
//   } else {
//     embededFavorites();
//   }
// };
