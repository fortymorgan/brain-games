import runGameProcess from '..';
import { generateSimple } from '../generateNumbers';

const yesIfEven = (value) => {
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
    answer: yesIfEven(value),
  };
};

const instruction = 'Answer "yes" if number even otherwise answer "no".';

const runGame = () => {
  runGameProcess(instruction, generateRoundDescription);
};

export default runGame;
