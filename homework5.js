var services = {
  'стрижка': '60 грн',
  'гоління': '80 грн',
  'Миття голови': '100 грн',
};

services.price = function () {
  let total = 0;
  for (let key in this) {
    if (typeof this[key] === 'string' && this[key].includes('грн')) {
      total += parseFloat(this[key]);
    }
  }
  return total + ' грн';
};

services.minPrice = function () {
  let min = null;

  for (let key in this) {
    if (typeof this[key] === 'string' && this[key].includes('грн')) {
      let price = parseFloat(this[key]);
      if (min === null || price < min) {
        min = price;
      }
    }
  }
  return min ? min + ' грн' : 'Послуг немає';
};

services.maxPrice = function () {
  let max = null; 

  for (let key in this) {
    if (typeof this[key] === 'string' && this[key].includes('грн')) {
      let price = parseFloat(this[key]);
      if (max === null || price > max) {
        max = price;
      }
    }
  }
  return max ? max + ' грн' : 'Послуг немає';
};

console.log('Загальна вартість:', services.price()); 
console.log('Мінімальна ціна:', services.minPrice()); 
console.log('Максимальна ціна:', services.maxPrice()); 