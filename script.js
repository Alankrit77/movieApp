const movies = [
  {
    title: "The Shawshank Redemption",
    poster: "/assets/Shawshank.jpeg",
    description:
      "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
  },
  {
    title: "Avenger: Endgame",
    poster: "/assets/avenger_endgame.png",
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
  },
  {
    title: "The Exorcism",
    poster: "/assets/ThePopesExorcistPoster.png",
    description:
      "A washed-up actor with a troubled past is given a second chance with a lead role in a new horror film.",
  },
  {
    title: "The Conjuring",
    poster: "/assets/the_conjuring.jpg",
    description:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
  },
  {
    title: "Interstellar",
    poster: "/assets/interstellarjpg",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const movieList = document.getElementById("movieList");
  const searchBar = document.getElementById("searchBar");
  const modal = document.getElementById("movieModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalPoster = document.getElementById("modalPoster");
  const modalDescription = document.getElementById("modalDescription");
  const closeModal = document.querySelector(".close");

  const displayMovies = (movies) => {
    if (movies.length === 0) {
      movieList.innerHTML = "<p class='no-results'>No results found</p>";
    } else {
      movieList.innerHTML = movies
        .map(
          (movie) => `
              <div class="movie-card" data-title="${movie.title}" data-description="${movie.description}" data-poster="${movie.poster}">
                  <img class="movie-poster" src="${movie.poster}" alt="${movie.title} Poster">
                  <div class="movie-details">
                      <div class="movie-title">${movie.title}</div>
                      <div class="movie-description">${movie.description}</div>
                  </div>
              </div>
          `
        )
        .join("");
    }
  };

  searchBar.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText)
    );
    displayMovies(filteredMovies);
  });

  movieList.addEventListener("click", (e) => {
    const movieCard = e.target.closest(".movie-card");
    if (movieCard) {
      modalTitle.textContent = movieCard.getAttribute("data-title");
      modalPoster.src = movieCard.getAttribute("data-poster");
      modalDescription.textContent = movieCard.getAttribute("data-description");
      modal.style.display = "block";
    }
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  displayMovies(movies);
});
