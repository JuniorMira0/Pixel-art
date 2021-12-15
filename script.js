// making a corlor palette
function makeColorBlock(element) {
  for (let i = 0; i < 4; i += 1) {
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

window.onload = () => {
  makeColorBlock('div');
  makeBoardPixel();
};
