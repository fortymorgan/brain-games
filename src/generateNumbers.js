export const generateSimple = rate => Math.round((Math.random() * rate) + 1);

export const generatePair = (rate) => {
  const array = [];
  for (let j = 0; j < 2; j += 1) {
    array.push(generateSimple(rate));
  }

  return array;
};

