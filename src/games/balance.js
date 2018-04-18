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

const gameArray = [];
const arrayOfNumbers = generateSimple(10000, N_ROUNDS);

gameArray.push('Balance the given number.');

arrayOfNumbers.forEach((elem) => {
  gameArray.push({
    question: `Question: ${elem}`,
    answer: balance(elem),
  });
});

const game = () => {
  gameProcess(gameArray);
};

export default game;
