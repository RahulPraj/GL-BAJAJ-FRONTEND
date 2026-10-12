
let input = document.querySelector("input");
let btn = document.querySelector(".search-box button");
let list = document.getElementById("list");
let message = document.getElementById("message");
let heading = document.getElementById("heading");
let categories = document.getElementById("categories");

let genres = ["Drama", "Comedy", "Action", "Romance", "Horror"];

// Load shows when page opens
loadShows();

// Search button
btn.addEventListener("click", function () {
  let name = input.value.trim();

  if (name === "") {
    categories.style.display = "block";
    list.innerHTML = "";
    heading.style.display = "none";
    return;
  }

  searchShows(name);
  input.value = "";
});

// Search using Enter key
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") btn.click();
});


// 1. LOAD SHOWS AND CATEGORIES
function loadShows() {
  axios.get("https://api.tvmaze.com/shows?page=0")
    .then(function (response) {
      let shows = response.data;

      categories.innerHTML = "";

      genres.forEach(function (genre) {
        let section = document.createElement("section");
        section.innerHTML = `<h3>${genre}</h3><div class="track"></div>`;

        let track = section.querySelector(".track");

        shows.forEach(function (show) {
          if (show.genres.includes(genre) && show.image) {
            track.appendChild(createCard(show));
          }
        });

        categories.appendChild(section);
      });

      message.textContent = "";
    })
    .catch(function () {
      message.textContent = "Unable to load shows.";
    });
}


// 2. SEARCH SHOWS
function searchShows(name) {
  message.textContent = "Loading...";
  list.innerHTML = "";
  categories.style.display = "none";
  heading.style.display = "block";
  heading.textContent = "Search Results";

  axios.get("https://api.tvmaze.com/search/shows?q=" + encodeURIComponent(name))
    .then(function (response) {
      response.data.forEach(function (item) {
        list.appendChild(createCard(item.show));
      });

      if (response.data.length === 0) {
        message.textContent = "No shows found.";
      } else {
        message.textContent = "";
      }
    })
    .catch(function () {
      message.textContent = "Something went wrong.";
    });
}


// 3. CREATE SHOW CARD
function createCard(show) {
  let card = document.createElement("figure");

  let image = "No Image";

  if (show.image) {
    image = `<img src="${show.image.medium}" alt="${show.name}">`;
  }

  card.innerHTML = `
    ${image}
    <figcaption>
      <h3>${show.name}</h3>
      <p>${show.genres[0] || "General"}</p>
      <p>⭐ ${show.rating.average || "N/A"}</p>
    </figcaption>
  `;

  return card;
}
