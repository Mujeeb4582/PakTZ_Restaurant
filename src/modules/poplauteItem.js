import createItem from './createItem.js';

const mealList = document.querySelector('main');

const populateItems = (meals) => {
  mealList.innerHTML = '';
  const list = document.createElement('div');
  list.className = 'itemList';
  meals.forEach((element) => {
    createItem(list, element);
  });
  mealList.appendChild(list);
};

export default populateItems;