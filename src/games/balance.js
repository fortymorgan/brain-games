import gameProcess from '..';
import { generateSimple } from '../generateNumbers';
import { N_ROUNDS } from '.';

const sumOfDigits = (number) => {
  let total = 0;
  const numToString = String(number);

  for (let i = 0; i < numToString.length; i += 1) {
    total += +numToString[i];
  }

  return total;
};

const balance = (number) => {
  let sum = sumOfDigits(number);
  const numToString = String(number);
  let balanced = '';

  for (let i = numToString.length; i > 0; i -= 1) {
    balanced += Math.floor(sum / i);
    sum -= Math.floor(sum / i);
  }

  return balanced;
};

const formQuestion = number => `Question: ${number}`;

const gameObject = {
  instruction: 'Balance the given number.',
  numbers: generateSimple(10000, N_ROUNDS),
  askQuestion: formQuestion,
  calcAnswer: balance,
};

const game = () => {
  gameProcess(gameObject);
};

export default game;
