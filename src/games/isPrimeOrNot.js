import runGameProcess from '..';
import { generateSimple } from '../generateNumbers';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRoundDescription = () => {
  const value = generateSimple(150);

  return {
    question: `Is this number prime? ${value}`,
    answer: isPrime(value) ? 'yes' : 'no',
  };
};

const instruction = 'Answer "yes" if number prime otherwise answer "no".';

const runGame = () => {
  runGameProcess(instruction, generateRoundDescription);
};

export default runGame;
