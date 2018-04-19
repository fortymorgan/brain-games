const runGameProcess = require('..');
const { generatePair } = require('../generateNumbers');

const returnGreatCommonDivisor = (numbers) => {
  const limit = numbers[0] > numbers[1] ? numbers[0] : numbers[1];
  let divisor = 0;

  for (let i = 1; i <= limit; i += 1) {
    if (numbers[0] % i === 0 && numbers[1] % i === 0) {
      divisor = i;
    }
  }

  return String(divisor);
};

const generateNumbers = () => generatePair(200);

const generateRoundDescription = () => {
  const value = generateNumbers();

  return {
    question: `Question: ${value[0]} and ${value[1]}`,
    answer: returnGreatCommonDivisor(value),
  };
};

const instruction = 'Find the greatest common divisor of given numbers.';

const runGame = () => {
  runGameProcess(instruction, generateRoundDescription);
};

exports.default = runGame;
