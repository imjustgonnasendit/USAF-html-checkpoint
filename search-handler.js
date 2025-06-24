const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

if (searchButton && searchInput) {
  searchButton.addEventListener("click", function () {
    const query = searchInput.value.trim().toLowerCase();

    if (query) {
      localStorage.setItem("searchQuery", query);

      // ✅ Determine correct path to search.html
      const currentPath = window.location.pathname;
      const isInSubfolder = currentPath.includes("/movies/");
      const searchPagePath = isInSubfolder ? "../search.html" : "search.html";

      alert("Query is: " + query + " — redirecting to " + searchPagePath);
      window.location.href = searchPagePath;
    } else {
      alert("Please enter a search term.");
    }
  });
}
