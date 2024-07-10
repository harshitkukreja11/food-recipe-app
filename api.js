const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export async function fetchRecipeByName(name) {
  try {
    const response = await fetch(`${API_URL}/search.php?s=${name}`);
    const data = await response.json();
    displaySearchResults(data.meals);
  } catch (error) {
    console.error('Error fetching recipe by name:', error);
  }
}

export async function fetchRecipeOfTheDay() {
  try {
    const response = await fetch(`${API_URL}/random.php`);
    const data = await response.json();
    displayRecipeOfTheDay(data.meals[0]);
  } catch (error) {
    console.error('Error fetching recipe of the day:', error);
  }
}

export async function fetchRandomRecipes() {
  try {
    const randomRecipes = [];
    for (let i = 0; i < 5; i++) {
      const response = await fetch(`${API_URL}/random.php`);
      const data = await response.json();
      randomRecipes.push(data.meals[0]);
    }
    displayRandomRecipes(randomRecipes);
  } catch (error) {
    console.error('Error fetching random recipes:', error);
  }
}

// Functions to display data
function displaySearchResults(meals) {
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = meals.map(meal => `
    <div>
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <p>${meal.strInstructions}</p>
    </div>
  `).join('');
}

function displayRecipeOfTheDay(meal) {
  const recipeOfTheDay = document.getElementById('recipe-of-the-day');
  recipeOfTheDay.innerHTML = `
    <div>
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <p>${meal.strInstructions}</p>
    </div>
  `;
}

function displayRandomRecipes(meals) {
  const randomRecipes = document.getElementById('random-recipes');
  randomRecipes.innerHTML = meals.map(meal => `
    <div>
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <p>${meal.strInstructions}</p>
    </div>
  `).join('');
}
