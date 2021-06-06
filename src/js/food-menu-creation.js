import foodCardsTemplate from '../templates/food-cards';
import menuItemsData from '../menu.json';

const foodMenuRef = document.querySelector('.js-menu');

const MenuItemsEls = foodCardsTemplate(menuItemsData);

foodMenuRef.insertAdjacentHTML('beforeend', MenuItemsEls);
