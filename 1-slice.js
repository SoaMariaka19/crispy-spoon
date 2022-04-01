function slice(array, start, end) {
  let slicedArray = []; //1
  for (let i = start; i < end; i++) { //5
    slicedArray.push(array[i]); //4
  }
  return slicedArray; //1
}

module.exports = { slice };

/**
 * T(1) = 1 + 5n(4) + 1
 * T(1) = 1 + 5(n) + 1
 * T(1) = 5n+2
 * T(1) = O(n)
 * 
 Complexité linéaire
 */
