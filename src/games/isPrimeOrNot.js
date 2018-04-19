import runGameProcess from '..';
import { generateSimple } from '../generateNumbers';

const yesIfPrime = (number) => {
  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateNumber = () => generateSimple(150);

const generateRoundDescription = () => {
  const value = generateNumber();

  return {
    question: `Question: ${value}`,
    answer: yesIfPrime(value),
  };
};

const instruction = 'Answer "yes" if number prime otherwise answer "no".';

const runGame = () => {
  runGameProcess(instruction, generateRoundDescription);
};

export default runGame;
