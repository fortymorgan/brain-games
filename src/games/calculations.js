import gameProcess from '..';
import { generatePair } from '../generateNumbers';

const generateAnswer = (number) => {
  switch (number.action) {
    case '+':
      return String(number.numbers[0] + number.numbers[1]);
    case '-':
      return String(number.numbers[0] - number.numbers[1]);
    case '*':
      return String(number.numbers[0] * number.numbers[1]);
    default:
      throw new Error('Unknown operation');
  }
};

const actionNumberToType = (elem) => {
  switch (elem) {
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
  const number = numbersAndAction();
  console.log(`Question: ${number.numbers[0]} ${number.action} ${number.numbers[1]}`);

  return () => generateAnswer(number);
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
