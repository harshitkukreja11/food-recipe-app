// Import modules
import { renderNavbar } from './navbar.js';
import { fetchRecipeByName, fetchRecipeOfTheDay, fetchRandomRecipes } from './api.js';

// Render Navbar
renderNavbar();

// Get DOM elements
const searchPage = document.getElementById('search-page');
const recipeOfTheDayPage = document.getElementById('recipe-of-the-day-page');
const randomRecipesPage = document.getElementById('random-recipes-page');
const searchButton = document.getElementById('search-button');
const randomRecipesButton = document.getElementById('random-recipes-button');

// Show search page by default
showPage('search-page');

// Event listeners for navigation
document.getElementById('search-nav').addEventListener('click', () => showPage('search-page'));
document.getElementById('recipe-of-the-day-nav').addEventListener('click', () => {
  showPage('recipe-of-the-day-page');
  fetchRecipeOfTheDay();
});
document.getElementById('random-recipes-nav').addEventListener('click', () => showPage('random-recipes-page'));

// Event listeners for buttons
searchButton.addEventListener('click', () => {
  const query = document.getElementById('search-input').value;
  fetchRecipeByName(query);
});
randomRecipesButton.addEventListener('click', fetchRandomRecipes);

// Function to show specific page
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}
