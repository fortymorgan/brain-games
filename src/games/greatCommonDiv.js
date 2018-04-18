import gameProcess from '..';
import { generatePairs } from '../generateNumbers';
import { N_ROUNDS } from '.';

const greatCommonDiv = (num1, num2) => {
  const half = num1 > num2 ? Math.ceil(num1 / 2) : Math.ceil(num2 / 2);
  let divisor = 0;

  for (let i = 1; i <= half; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = i;
    }
  }

  return String(divisor);
};

const gameArray = [];
const arrayOfNumbers = generatePairs(200, N_ROUNDS);

gameArray.push('Find the greatest common divisor of given numbers.');

arrayOfNumbers.forEach((elem) => {
  gameArray.push({
    question: `Question: ${elem[0]} and ${elem[1]}`,
    answer: greatCommonDiv(elem[0], elem[1]),
  });
});

const game = () => {
  gameProcess(gameArray);
};

export default game;
