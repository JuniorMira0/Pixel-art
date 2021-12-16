// making a corlor palette
function makeColorBlock(element) {
  for (let i = 0; i < 3; i += 1) {
    const colorPalette = document.getElementById('color-palette');
    const newDiv = document.createElement(element);
    newDiv.className = 'color';
    colorPalette.appendChild(newDiv);
  }
}
// making a pixel board
function makeBoardPixel() {
  for (let i = 0; i < 25; i += 1) {
    const pixelBoard = document.getElementById('pixel-board');
    const pixelBlock = document.createElement('div');
    pixelBlock.className = 'pixel';
    pixelBoard.appendChild(pixelBlock);
  }
}
// seleciona as cores
function selectColors() {
  const selectedColor = document.getElementsByClassName('color');
  for (let i = 0; i < selectedColor.length; i += 1) {
    selectedColor[i].addEventListener('click', () => {
      selectedColor[i].classList.add('selected');
    });
  }
}
/*
Passar pelas 4 cores, verificar se existe algum selected na lista de classes e se tiver ela apaga a classe
*/

function clearClass() {
  const selectedColor = document.getElementsByClassName('color');
  for (let i = 0; i < selectedColor.length; i += 1) {
    if (selectedColor[i].contains('selected')) {
      selectedColor[i].classList.remove();
    }
  }
}

window.onload = () => {
  makeColorBlock('div');
  makeBoardPixel();
  selectColors();
  clearClass();
};
