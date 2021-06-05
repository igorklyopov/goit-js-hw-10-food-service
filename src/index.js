import foodCardsTemplate from './templates/food-cards.hbs';
import menuItemsData from './menu.json';
console.log(menuItemsData);
import makeElementsMurkup from './js/make-murkup';

const foodMenuRef = document.querySelector('.js-menu');

const MenuItemsEls = makeElementsMurkup(menuItemsData, foodCardsTemplate);

foodMenuRef.insertAdjacentHTML('beforeend', MenuItemsEls);
