function repeat(array) {

  var resultArray = [];

  for (i = 0; i < 3; i++) {
    for (j = 0; j < array.length; j++) {
      resultArray.push(array[j]);
    }
  }

  return resultArray;
}
