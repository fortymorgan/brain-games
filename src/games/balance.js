import gameProcess from '..';
import { generateSimple } from '../generateNumbers';

const sumOfDigits = (value) => {
  let total = 0;
  const numToString = String(value);

  for (let i = 0; i < numToString.length; i += 1) {
    total += +numToString[i];
  }

  return total;
};

const balance = (value) => {
  let sum = sumOfDigits(value);
  const numToString = String(value);
  let balanced = '';

  for (let i = numToString.length; i > 0; i -= 1) {
    balanced += Math.floor(sum / i);
    sum -= Math.floor(sum / i);
  }

  return balanced;
};

const generateNumber = () => generateSimple(10000);

const formQuestion = () => {
  const value = generateNumber();
  console.log(`Question: ${value}`);

  return () => balance(value);
};

const gameObject = {
  instruction: 'Balance the given number.',
  // generateValue: generateNumber,
  askQuestion: formQuestion,
  // calculateAnswer: balance,
};

const game = () => {
  gameProcess(gameObject);
};

export default game;
