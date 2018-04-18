import gameProcess from '..';
import { generateSimple } from '../generateNumbers';

const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const formQuestion = number => `Question: ${number}`;

const generateNumber = () => generateSimple(50);

const gameObject = {
  instruction: 'Answer "yes" if number even otherwise answer "no".',
  generateValue: generateNumber,
  askQuestion: formQuestion,
  calculateAnswer: oddOrEven,
};

const game = () => {
  gameProcess(gameObject);
};

export default game;
