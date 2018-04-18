import gameProcess from '..';
import { generateSimple } from '../generateNumbers';

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
const arrayOfNumbers = generateSimple(10000);

gameArray.push('Balance the given number.');

for (let i = 1; i <= 3; i += 1) {
  gameArray.push({
    question: `Question: ${arrayOfNumbers[i - 1]}`,
    answer: balance(arrayOfNumbers[i - 1]),
  });
}

const game = () => {
  gameProcess(gameArray);
};

export default game;