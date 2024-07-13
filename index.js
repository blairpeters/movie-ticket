document.addEventListener("DOMContentLoaded", () => {
  const movieDetails = {
    poster: document.getElementById("poster"),
    title: document.getElementById("title"),
    runtime: document.getElementById("runtime"),
    showtime: document.getElementById("showtime"),
    availableTickets: document.getElementById("available-tickets"),
    buyButton: document.getElementById("buy-ticket"),
  };

  fetch("http://localhost:3000/films/1")
    .then((response) => response.json())
    .then((data) => displayMovieDetails(data));

  function displayMovieDetails(movie) {
    movieDetails.poster.src = movie.poster;
    movieDetails.title.textContent = movie.title;
    movieDetails.runtime.textContent = `Runtime: ${movie.runtime} minutes`;
    movieDetails.showtime.textContent = `Showtime: ${movie.showtime}`;
    updateAvailableTickets(movie);

    movieDetails.buyButton.addEventListener("click", () => {
      if (movie.tickets_sold < movie.capacity) {
        movie.tickets_sold++;
        updateAvailableTickets(movie);
      }
    });
  }

  function updateAvailableTickets(movie) {
    const availableTickets = movie.capacity - movie.tickets_sold;
    movieDetails.availableTickets.textContent = `Available Tickets: ${availableTickets}`;
    if (availableTickets === 0) {
      movieDetails.buyButton.textContent = "Sold Out";
      movieDetails.buyButton.disabled = true;
    }
  }

  const apiUrl = "http://localhost:3000/films";
  fetch(apiUrl)
    .then((res) => res.json())
    .then((films) => {
      let list = document.querySelector("#films");
      films.forEach((films) => {
        const li = document.createElement("li");
        li.textContent = films.title;
        li.className = "film-item";
        li.addEventListener("click", () => displayMovieDetails(films));
        list.appendChild(li);
      });
    });
});

// Add event listener to the newly created button
