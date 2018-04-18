import gameProcess from '..';
import { generateSimple } from '../generateNumbers';
import { N_ROUNDS } from '.';

const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const gameArray = [];
const arrayOfNumbers = generateSimple(50, N_ROUNDS);

gameArray.push('Answer "yes" if number even otherwise answer "no".');

for (let i = 1; i <= 3; i += 1) {
  gameArray.push({
    question: `Question: ${arrayOfNumbers[i - 1]}`,
    answer: oddOrEven(arrayOfNumbers[i - 1]),
  });
}

const game = () => {
  gameProcess(gameArray);
};

export default game;
