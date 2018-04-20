import runGameProcess from '..';
import { generatePair } from '../generateNumbers';

const greatestCommonDivisor = (a, b) => {
  if (a === b) {
    return a;
  }

  return a > b ? greatestCommonDivisor([b, a - b]) :
    greatestCommonDivisor([a, b - a]);
};

const generateRoundDescription = () => {
  const [a, b] = generatePair(200);

  return {
    question: `Between ${a} and ${b}`,
    answer: String(greatestCommonDivisor(a, b)),
  };
};

const instruction = 'Find the greatest common divisor of given numbers.';

const runGame = () => {
  runGameProcess(instruction, generateRoundDescription);
};

export default runGame;
