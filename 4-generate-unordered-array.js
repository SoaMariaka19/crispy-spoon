const { arrayContain } = require('./3-array-contain');

function generateUnorderedArray(size) {
  let array = []; //1
  for (let i = 0; i < size; i++) { //5
    let number = Math.floor(Math.random() * 100); //4
    while (arrayContain(array, number)) { //1
      number = Math.floor(Math.random() * 100); //4
    }
    array.push(number); //1
  }
  return array; //1
}

module.exports = { generateUnorderedArray };

/**
 * T(4) = 1+5n(4+1+4+1)+1
 * T(4) = 1+5n(10)+1
 * T(4) = 2+50n
 * 
 Complexité linéaire
 */