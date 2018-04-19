import gameProcess from '..';
import { generatePair } from '../generateNumbers';

const generateAnswer = (value) => {
  switch (value.action) {
    case '+':
      return String(value.numbers[0] + value.numbers[1]);
    case '-':
      return String(value.numbers[0] - value.numbers[1]);
    case '*':
      return String(value.numbers[0] * value.numbers[1]);
    default:
      throw new Error('Unknown operation');
  }
};

const actionNumberToType = (actionNumber) => {
  switch (actionNumber) {
    case 0:
      return '*';
    case 1:
      return '+';
    case 2:
      return '-';
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

const formAction = () => {
  const value = numbersAndAction();
  console.log(`Question: ${value.numbers[0]} ${value.action} ${value.numbers[1]}`);

  return () => generateAnswer(value);
};

const gameObject = {
  instruction: 'What is the result of the expression?',
  // generateValue: numbersAndAction,
  askQuestion: formAction,
  // calculateAnswer: generateAnswer,
};

const game = () => {
  gameProcess(gameObject);
};

export default game;
