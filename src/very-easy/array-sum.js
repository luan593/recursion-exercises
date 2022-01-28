function sum(array) {
  if (array.length < 1) {
    return 0;
  }
  let firstElement = array[0];
  let result = sum(array.slice(1, array.length));
  return firstElement + result;
}

module.exports = {
  sum
}