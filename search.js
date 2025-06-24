document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const resultsContainer = document.getElementById("searchResults");

  // Don't run on wrong page
  if (!searchInput || !searchButton || !resultsContainer) {
    console.warn("Not on search.html — exiting search.js");
    return;
  }

  const allMovies = [
    {
      title: "bad lieutenant",
      image: "img/bad-lieutenant.jpg",
      page: "movies/bad-lieutenant.html",
    },
    {
      title: "color out of space",
      image: "img/color-out-of-space.jpg",
      page: "movies/color-out-of-space.html",
    },
    { title: "con air", image: "img/con-air.jpg", page: "movies/con-air.html" },
    { title: "faceoff", image: "img/faceoff.jpg", page: "movies/faceoff.html" },
    {
      title: "ghost rider",
      image: "img/ghost-rider.jpg",
      page: "movies/ghost-rider.html",
    },
    { title: "mandy", image: "img/mandy.jpg", page: "movies/mandy.html" },
    { title: "pig", image: "img/pig.jpg", page: "movies/pig.html" },
    {
      title: "unbearable",
      image: "img/unbearable.jpg",
      page: "movies/unbearable.html",
    },
    {
      title: "vampires kiss",
      image: "img/vampires-kiss.jpg",
      page: "movies/vampires-kiss.html",
    },
    {
      title: "wicker man",
      image: "img/wicker-man.jpg",
      page: "movies/wicker-man.html",
    },
    {
      title: "wild at heart",
      image: "img/wild-at-heart.jpg",
      page: "movies/wild-at-heart.html",
    },
    {
      title: "willys wonderland",
      image: "img/willys-wonderland.jpg",
      page: "movies/willys-wonderland.html",
    },
  ];

  function displayResults(query) {
    resultsContainer.innerHTML = ""; // clear previous results

    const results = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );

    if (results.length === 0) {
      resultsContainer.innerHTML =
        "<p class='no-results'>No results found.</p>";
      return;
    }

    results.forEach((movie) => {
      const link = document.createElement("a");
      link.href = movie.page;

      const img = document.createElement("img");
      img.src = movie.image;
      img.alt = movie.title;
      img.className = "movie-poster";

      link.appendChild(img);
      resultsContainer.appendChild(link);
    });
  }

  // Get query from localStorage
  const storedQuery = localStorage.getItem("searchQuery");
  if (storedQuery) {
    console.log("Running search for:", storedQuery); // Debug
    searchInput.value = storedQuery;
    displayResults(storedQuery);
    localStorage.removeItem("searchQuery");
  }

  // Allow resubmitting search from search.html
  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
      localStorage.setItem("searchQuery", query);
      location.reload();
    } else {
      alert("Please enter a search term.");
    }
  });
});
