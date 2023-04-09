let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
numArray2.sort(compareNumber);
console.log(numArray2);
