function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (let i=0; i < array.length; i++){
    if (array[i] === skipValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}

function findBy(array, findFn)  {
  var retVal = null;
  for (var i = 0; i < array.length; i++) {
    retVal = findFn(array[i]);
    if (retVal) { break; }
  }
  if (retVal) {return array[i]} else { return null }

}
