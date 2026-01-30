const btn = document.getElementById("searchMovie");
const result = document.getElementById("movieResult");
const movieInput = document.getElementById("movieInput");

// Get free API key from https://www.omdbapi.com/apikey.aspx
const API_KEY = "39f192eb";

btn.addEventListener("click", async () => {
  const movie = movieInput.value.trim();

  if (!movie) {
    result.innerHTML = `
      <div class="status-card">
        <div class="empty-illustration" aria-hidden="true">🎞️</div>
        <h2>Please enter a movie name</h2>
        <p>Try something like “Interstellar” or “Parasite”.</p>
      </div>
    `;
    return;
  }

  // Loading state
  result.innerHTML = `
    <div class="status-card">
      <div class="empty-illustration" aria-hidden="true">⏳</div>
      <h2>Searching...</h2>
      <p>Fetching the best match for you.</p>
    </div>
  `;

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${API_KEY}`
    );
    const data = await res.json();

    if (data.Response === "False") {
      result.innerHTML = `
        <div class="status-card">
          <div class="empty-illustration" aria-hidden="true">🔎</div>
          <h2>Movie not found</h2>
          <p>Check the spelling or try another title.</p>
        </div>
      `;
      return;
    }

    const poster = data.Poster && data.Poster !== "N/A"
      ? data.Poster
      : "https://via.placeholder.com/400x600?text=No+Poster";

    const genres = data.Genre ? data.Genre.split(",") : [];

    result.innerHTML = `
      <div class="movie-card">
        <img src="${poster}" alt="${data.Title}" class="poster">
        <div class="movie-info">
          <h2>${data.Title}</h2>
          <div class="tag-list">
            ${genres.map((genre) => `<span class="tag">${genre.trim()}</span>`).join("")}
          </div>
          <p><strong>Year:</strong> ${data.Year}</p>
          <p><strong>Director:</strong> ${data.Director}</p>
          <p><strong>Runtime:</strong> ${data.Runtime}</p>
          <p><strong>Plot:</strong> ${data.Plot}</p>
          <span class="rating">⭐ ${data.imdbRating}/10</span>
        </div>
      </div>
    `;
  } catch (error) {
    result.innerHTML = `
      <div class="status-card">
        <div class="empty-illustration" aria-hidden="true">⚠️</div>
        <h2>Something went wrong</h2>
        <p>Please try again in a moment.</p>
      </div>
    `;
    console.error("Error fetching movie:", error);
  }
});

// Allow Enter key to search
movieInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});
