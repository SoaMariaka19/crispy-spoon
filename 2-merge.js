function merge(array1, array2) {
  let mergedArray = []; //1
  let i = 0; //1
  let j = 0; //1
  while (i < array1.length && j < array2.length) { //7
    if (array1[i] < array2[j]) { //5
      mergedArray.push(array1[i]); //4
      i++; //1
    } else {
      mergedArray.push(array2[j]); //4
      j++; //1
    }
  }
  while (i < array1.length) { //3
    mergedArray.push(array1[i]); //4
    i++; //1
  }
  while (j < array2.length) { //3
    mergedArray.push(array2[j]); //4
    j++; //1
  }
  return mergedArray; //1
}

module.exports = { merge };

/**
 * T(2) = 1+1+1+7n(5+4+1+4+1)+3n(4+1)+3n(4+1)+1
 * T(2) = 3+7n(15)+3n(5)+3n(5)+1
 * T(2) = 4+105n+15n+15n
 * T(2) = 4+135n
 * 
 * Quadratique
 *  */
