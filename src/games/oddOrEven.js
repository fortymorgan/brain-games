import gameProcess from '..';
import { generateSimple } from '../generateNumbers';
import { N_ROUNDS } from '.';

const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const formQuestion = number => `Question: ${number}`;

const gameObject = {
  instruction: 'Answer "yes" if number even otherwise answer "no".',
  numbers: generateSimple(50, N_ROUNDS),
  askQuestion: formQuestion,
  calcAnswer: oddOrEven,
};

const game = () => {
  gameProcess(gameObject);
};

export default game;
