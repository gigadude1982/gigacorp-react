import '@testing-library/jest-dom'

HTMLCanvasElement.prototype.getContext = () => ({
  clearRect: () => {},
  beginPath: () => {},
  arc: () => {},
  fill: () => {},
  moveTo: () => {},
  lineTo: () => {},
  stroke: () => {},
  fillStyle: '',
  strokeStyle: '',
  lineWidth: 1,
})
