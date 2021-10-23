import './scss/index.scss';

console.log('Working');

const cells = document.querySelectorAll('.cell');
let selectedElement = document.querySelectorAll('.cell.selected')[0];

cells.forEach((el) => {
  el.addEventListener('click', (e) => {
    selectedElement.classList.remove('selected');
    e.currentTarget.classList.add('selected');
    selectedElement = e.currentTarget;
  });
});
