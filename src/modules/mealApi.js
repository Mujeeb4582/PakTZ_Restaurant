import populateItems from './poplauteItem.js';

const BASE_URL = `https://www.themealdb.com/api/json/v1/${process.env.MEAL_API_KEY}/categories.php`;

const getMealList = async () => {
  // const result = await likesArr(); // getting likes from involvement API
  await fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
      populateItems(json.categories);
    });
};

export default getMealList;