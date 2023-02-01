const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

ingredients.forEach(elem => {
  const listItem = document.createElement('li');

  listItem.classList.add('item');
  listItem.innerText = `${elem}`;
  listEl.append(listItem);

});