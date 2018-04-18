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

arrayOfNumbers.forEach((elem) => {
  gameArray.push({
    question: `Question: ${elem}`,
    answer: oddOrEven(elem),
  });
});

const game = () => {
  gameProcess(gameArray);
};

export default game;
