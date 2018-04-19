const runGameProcess = require('..');
const { generateSimple } = require('../generateNumbers');

const returnYesIfEven = (value) => {
  if (value % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const generateNumber = () => generateSimple(50);

const generateRoundDescription = () => {
  const value = generateNumber();

  return {
    question: `Question: ${value}`,
    answer: returnYesIfEven(value),
  };
};

const instruction = 'Answer "yes" if number even otherwise answer "no".';

const runGame = () => {
  runGameProcess(instruction, generateRoundDescription);
};

exports.default = runGame;
