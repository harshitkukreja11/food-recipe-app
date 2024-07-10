export function renderNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
      <a href="#" id="search-nav">Search</a>
      <a href="#" id="recipe-of-the-day-nav">Recipe of the Day</a>
      <a href="#" id="random-recipes-nav">Random Recipes</a>
    `;
  }
  