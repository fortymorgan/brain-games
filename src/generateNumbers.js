export const generateSimple = (rate, size) => {
  const array = [];
  for (let i = 0; i < size; i += 1) {
    array.push(Math.round(Math.random() * rate));
  }

  return array;
};

export const generatePairs = (rate, size) => {
  const array = [];
  let subarray = [];
  for (let i = 0; i < size; i += 1) {
    subarray = [];
    for (let j = 0; j < 2; j += 1) {
      subarray.push(Math.round(Math.random() * rate));
    }
    array.push(subarray);
  }

  return array;
};
