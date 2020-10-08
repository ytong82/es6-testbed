let array = [1, 2, 3, 4, 5, 6, 7, 8];

const evenArray = array.filter(item => item % 2 == 0);
console.log(evenArray);

const mappedArray = array.map(item => {
  if (item % 2 != 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(mappedArray);
console.log(mappedArray.length);