import runGameProcess from '..';
import { generatePair } from '../generateNumbers';

const greatCommonDivisor = (numbers) => {
  if (numbers[0] === numbers[1]) {
    return String(numbers[0]);
  }

  return numbers[0] > numbers[1] ? greatCommonDivisor([numbers[1], numbers[0] - numbers[1]]) :
    greatCommonDivisor([numbers[0], numbers[1] - numbers[0]]);
};


const generateNumbers = () => generatePair(200);

const generateRoundDescription = () => {
  const value = generateNumbers();

  return {
    question: `Question: ${value[0]} and ${value[1]}`,
    answer: greatCommonDivisor(value),
  };
};

const instruction = 'Find the greatest common divisor of given numbers.';

const runGame = () => {
  runGameProcess(instruction, generateRoundDescription);
};

export default runGame;
