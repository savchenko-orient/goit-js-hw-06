const bodyEl = document.querySelector('body'),
  btn = document.querySelector('.change-color'),
  spanEl = document.querySelector('.color');

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const changeColorHandler = () => {
  spanEl.innerText = `${getRandomHexColor()}`
  bodyEl.style.backgroundColor = spanEl.innerText;
}

btn.addEventListener('click', changeColorHandler)