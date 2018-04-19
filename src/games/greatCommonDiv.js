import gameProcess from '..';
import { generatePair } from '../generateNumbers';

const greatCommonDiv = (value) => {
  const limit = value[0] > value[1] ? value[0] : value[1];
  let divisor = 0;

  for (let i = 1; i <= limit; i += 1) {
    if (value[0] % i === 0 && value[1] % i === 0) {
      divisor = i;
    }
  }

  return String(divisor);
};

const generateNumbers = () => generatePair(200);

const formQuestion = () => {
  const value = generateNumbers();
  console.log(`Question: ${value[0]} and ${value[1]}`);

  return () => greatCommonDiv(value);
};

const gameObject = {
  instruction: 'Find the greatest common divisor of given numbers.',
  // generateValue: generateNumbers,
  askQuestion: formQuestion,
  // calculateAnswer: greatCommonDiv,
};

const game = () => {
  gameProcess(gameObject);
};

export default game;
