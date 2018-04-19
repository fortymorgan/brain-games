const runGameProcess = require('..');
const { generateSimple } = require('../generateNumbers');

const returnYesIfPositive = (value) => {
  if (value > 0) {
    return 'yes';
  }

  return 'no';
};

const generateNumber = () => generateSimple(40) - 20;

const generateRoundDescription = () => {
  const value = generateNumber();

  return {
    question: `Question: ${value}`,
    answer: returnYesIfPositive(value),
  };
};

const instruction = 'Answer "yes" if number positive otherwise answer "no".';

const runGame = () => {
  runGameProcess(instruction, generateRoundDescription);
};

exports.default = runGame;
