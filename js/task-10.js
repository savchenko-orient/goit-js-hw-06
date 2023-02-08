const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes')

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const createBoxes = amount => {
  let newBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement('div');

    const boxSize = 30 + (10 * i);

    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.height = `${boxSize}px`;
    box.style.width = `${boxSize}px`;

    newBoxes.push(box);
  }

  return newBoxes;
}

const destroyBoxes = () => boxes.innerHTML = '';

destroyBtn.addEventListener('click', destroyBoxes)

createBtn.addEventListener('click', () => {
  destroyBoxes();
  let newBoxes = createBoxes(input.value);

  boxes.append(...newBoxes)
})