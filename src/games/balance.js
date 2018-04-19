const runGameProcess = require('..');
const { generateSimple } = require('../generateNumbers');

const sumDigits = (value) => {
  let total = 0;
  const numToString = String(value);

  for (let i = 0; i < numToString.length; i += 1) {
    total += +numToString[i];
  }

  return total;
};

const balanceNumber = (value) => {
  let sum = sumDigits(value);
  const numToString = String(value);
  let balanced = '';

  for (let i = numToString.length; i > 0; i -= 1) {
    balanced += Math.floor(sum / i);
    sum -= Math.floor(sum / i);
  }

  return balanced;
};

const generateNumber = () => generateSimple(10000);

const generateRoundDescription = () => {
  const value = generateNumber();

  return {
    question: `Question: ${value}`,
    answer: balanceNumber(value),
  };
};

const instruction = 'Balance the given number.';

const runGame = () => {
  runGameProcess(instruction, generateRoundDescription);
};

exports.default = runGame;
