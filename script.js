const btn = document.getElementById("searchMovie");
const result = document.getElementById("movieResult");
const movieInput = document.getElementById("movieInput");

// Get free API key from https://www.omdbapi.com/apikey.aspx
const API_KEY = "39f192eb";

btn.addEventListener("click", async () => {
  const movie = movieInput.value.trim();

  if (!movie) {
    result.textContent = "Please enter a movie name";
    return;
  }

  // Loading state
  result.textContent = "Loading...";

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${API_KEY}`
    );
    const data = await res.json();

    if (data.Response === "False") {
      result.textContent = "❌ Movie not found";
      return;
    }

    result.innerHTML = `
      <div class="movie-card">
        <img src="${data.Poster}" alt="${data.Title}" class="poster">
        <div class="movie-info">
          <h2>${data.Title}</h2>
          <p><strong>Year:</strong> ${data.Year}</p>
          <p><strong>Director:</strong> ${data.Director}</p>
          <p><strong>Genre:</strong> ${data.Genre}</p>
          <p><strong>Plot:</strong> ${data.Plot}</p>
          <p><strong>Rating:</strong> ${data.imdbRating}/10</p>
        </div>
      </div>
    `;
  } catch (error) {
    result.textContent = "❌ Something went wrong. Please try again.";
    console.error("Error fetching movie:", error);
  }
});

// Allow Enter key to search
movieInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});
