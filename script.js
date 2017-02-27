const bands = ['Meat', 'Corn', 'Tomato', 'Bacon', 'Ice cream', 'Coffe', 'Watermelon', 'Strawberry', 'Blueberries', 'Garlic', 'Eggs', 'Potatoes', 'Advocado'];
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');
console.log(sortedBands);