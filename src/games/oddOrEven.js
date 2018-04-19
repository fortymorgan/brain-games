import gameProcess from '..';
import { generateSimple } from '../generateNumbers';

const oddOrEven = (value) => {
  if (value % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const generateNumber = () => generateSimple(50);

const formQuestion = () => {
  const value = generateNumber();
  console.log(`Question: ${value}`);

  return () => oddOrEven(value);
};

const gameObject = {
  instruction: 'Answer "yes" if number even otherwise answer "no".',
  // generateValue: generateNumber,
  askQuestion: formQuestion,
  // calculateAnswer: oddOrEven,
};

const game = () => {
  gameProcess(gameObject);
};

export default game;
