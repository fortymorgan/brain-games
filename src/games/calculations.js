import gameProcess from '..';
import { generatePair } from '../generateNumbers';

const formAction = (number) => {
  switch (number.action) {
    case 'add':
      return (`Question: ${number.numbers[0]} + ${number.numbers[1]}`);
    case 'sub':
      return (`Question: ${number.numbers[0]} - ${number.numbers[1]}`);
    case 'mult':
      return (`Question: ${number.numbers[0]} * ${number.numbers[1]}`);
    default:
      throw new Error('Unknown operation');
  }
};

const generateAnswer = (number) => {
  switch (number.action) {
    case 'add':
      return String(number.numbers[0] + number.numbers[1]);
    case 'sub':
      return String(number.numbers[0] - number.numbers[1]);
    case 'mult':
      return String(number.numbers[0] * number.numbers[1]);
    default:
      throw new Error('Unknown operation');
  }
};

const actionNumberToType = (elem) => {
  switch (elem) {
    case 0:
      return 'mult';
    case 1:
      return 'add';
    case 2:
      return 'sub';
    default:
      return 'unknown';
  }
};

const actionType = () => {
  const actionNumber = Math.floor(Math.random() * 3);

  return actionNumberToType(actionNumber);
};

const formNumbersAndAction = (array, actionToDo) => {
  const object = {
    numbers: array,
    action: actionToDo,
  };

  return object;
};

const generateNumber = () => generatePair(25);

const numbersAndAction = () => formNumbersAndAction(generateNumber(), actionType());

const gameObject = {
  instruction: 'What is the result of the expression?',
  generateValue: numbersAndAction,
  askQuestion: formAction,
  calculateAnswer: generateAnswer,
};

const game = () => {
  gameProcess(gameObject);
};

export default game;
