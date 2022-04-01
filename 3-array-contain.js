function arrayContain(array, number) {
  for (let i = 0; i < array.length; i++) { //5
    if (array[i] === number) { //4
      return true; //1
    }
  }
  return false; //1
}

module.exports = { arrayContain };

/**
 * T(3) = 5n(4+1) + 1
 * T(3) = 5n(5)
 * T(3) = 25n
 * 
 => Complexité linéaire 
 */
