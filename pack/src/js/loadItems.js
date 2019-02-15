let thisFilm;

function setStandartListeners() {
  let itemFavoriteButtons = document.querySelectorAll(".favorite-button");
  let backButton = document.querySelector(".back");
  let enterButton = document.querySelectorAll(".enter-button");

  if (enterButton)
  enterButton.forEach(element => {
    element.addEventListener("click", (e) => {
      thisFilm = e.target.getAttribute("data-id");
      embededFilmPage(`http://www.omdbapi.com/?i=${thisFilm}&apikey=d5677312`)
    });
  });


  if (itemFavoriteButtons)
    itemFavoriteButtons.forEach(element => {
      element.addEventListener("click", toogleFavorite);
    });

  if (backButton)
    backButton.addEventListener("click", () => {
      back(document.querySelector("input").value);
    });
};

function setFavoriteListeners() {
  let itemFavoriteButtons = document.querySelectorAll(".favorite-button");
  let enterButton = document.querySelectorAll(".enter-button");
  document.querySelector("input").value = '';
  
  if (enterButton)
  enterButton.forEach(element => {
    element.addEventListener("click", (e) => {
      thisFilm = e.target.getAttribute("data-id");
      embededFilmPage(`http://www.omdbapi.com/?i=${thisFilm}&apikey=d5677312`)
    });
  });


  itemFavoriteButtons.forEach(element => {
    element.addEventListener("click", e => {
      let idFilm = e.target.getAttribute("data-id");
      localStorage.removeItem(idFilm);
      e.target.parentNode.parentNode.remove();
      if (document.querySelector(".results").innerHTML == "")
        document.querySelector(".results").innerHTML =
          "<p>У вас нет избранных фильмов</p>";
    });
  });
};

function toogleFavorite(e){
  let idFilm = e.target.getAttribute("data-id");
  if (localStorage.length) {
    if (localStorage.getItem(idFilm)) {
      e.target.src = "img/insert_favorite_button.svg";
      localStorage.removeItem(idFilm);
    } else {
      e.target.src = "img/remove_favorite_button.svg";
      localStorage.setItem(idFilm, true);
    }
  } else {
    e.target.src = "img/remove_favorite_button.svg";
    localStorage.setItem(idFilm, true);
  }
};

function back(lastUrl) {
  if (lastUrl) {
    embededSearch(
      `http://www.omdbapi.com/?s=${lastUrl
        .split(" ")
        .join("+")}&apikey=d5677312`
    );
  } else {
    embededFavorites();
  }
};




export async function embededSearch(url) {
  try {
    let result = await fetch(url);
    let movieInfo = await result.json();
    let movies = movieInfo.Search;
    if (!movies) {
      document.querySelector(".results").innerHTML = "<p>ничего не найдено</p>";
      return 0;
    }

    movies = movies.sort((a, b) => {
      return +b.Year.slice(0, 4) - +a.Year.slice(0, 4);
    });
    let div;
    let img;
    document.querySelector(".results").innerHTML = "";
    movies.forEach(element => {
      div = document.createElement("div");
      div.classList.add("res-item");
      if (localStorage.length) {
        if (localStorage.getItem(element.imdbID))
          img = "img/remove_favorite_button.svg";
        else img = "img/insert_favorite_button.svg";
      } else img = "img/insert_favorite_button.svg";

      div.innerHTML = `
          <img src="${
            element.Poster == "N/A" ? "img/black.svg" : element.Poster
          }" alt="img" class="poster">
          <div class="info-movie">
            <h2>${element.Title}</h2>
            <p>Type: <mark>${element.Type}</mark> </p>
            <p>Year: <mark>${element.Year}</mark> </p>
          </div>
          <div class="res-item-buttons">
            <img src="${img}" alt="add to Favorites" class='favorite-button' data-id='${element.imdbID}'/>
            <img src="img/enter.svg" alt="More..." class="enter-button" data-id='${element.imdbID}'>
          </div>\n`;
      document.querySelector(".results").appendChild(div);
    });
    setStandartListeners();
  } catch (error) {
    console.log(error);
  }
};

export function embededFavorites() {
  if (!localStorage.length) {
    document.querySelector(".results").innerHTML =
      "<p>У вас нет избранных фильмов</p>";
    return 0;
  }
  document.querySelector(".results").innerHTML = "";

  for (let key in localStorage) {
    if (localStorage[key] == "true") {
      loadFavorite(`http://www.omdbapi.com/?i=${key}&apikey=d5677312`);
    }
  }
  
};

async function loadFavorite(url) {
  try {
    let result = await fetch(url);
    let movie = await result.json();
    let div = document.createElement("div");
    div.classList.add("res-item");
    div.innerHTML = `
     <img src="${
       movie.Poster == "N/A" ? "img/black.svg" : movie.Poster
     }" alt="img" class="poster">
     <div class="info-movie">
       <h2>${movie.Title}</h2>
       <p>Type: <mark>${movie.Type}</mark> </p>
       <p>Year: <mark>${movie.Year}</mark> </p>
     </div>
     <div class="res-item-buttons"'>
       <img src="img/remove_favorite_button.svg" alt="add to Favorites" class='favorite-button' data-id='${movie.imdbID}'/>
       <img src="img/enter.svg" alt="More..." class="enter-button" data-id='${movie.imdbID}'>
     </div>\n`;
    document.querySelector(".results").appendChild(div);
    setFavoriteListeners();
  } catch (error) {
    console.log(error);
  }
};

async function embededFilmPage(url) {
  try {
    let result = await fetch(url);
    let movie = await result.json();
    document.querySelector(".results").innerHTML = "";
    let img;
if (localStorage.length) {
        if (localStorage.getItem(movie.imdbID))
          img = "img/remove_favorite_button.svg";
        else img = "img/insert_favorite_button.svg";
      } else img = "img/insert_favorite_button.svg";
    let div = document.createElement("div");
    div.classList.add("page-film");
    div.innerHTML = `
    <img src="img/enter.svg" alt="back" class='back'>
    <img src="${
      movie.Poster == "N/A" ? "img/black.svg" : movie.Poster
    }" alt="img" class="poster">
    <img src="${img}"
     alt="add to Favorites" class='favorite-button' data-id='${movie.imdbID}'/>
   <div class="info-movie">
     <h2>${movie.Title}</h2>
     <p>Type: <mark>${movie.Type}</mark> </p>
     <p>Year: <mark>${movie.Year}</mark> </p>
     <p>Rated: <mark>${movie.Rated}</mark> </p>
     <p>Genre: <mark>${movie.Genre}</mark> </p>
     <p>Runtime: <mark>${movie.Runtime}</mark> </p>
     <p>Plot: <mark>${movie.Plot}</mark> </p>
   </div>
</div>\n
    `;
    document.querySelector(".results").appendChild(div);
    setStandartListeners();
  } catch (error) {
    console.log(error);
  }
};
