import runGameProcess from '..';
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

const convertActionType = actionNumber => ['*', '+', '-'][actionNumber];

const generateActionType = () => {
  const actionNumber = Math.floor(Math.random() * 3);

  return convertActionType(actionNumber);
};

const formNumbersAndAction = (array, actionToDo) => {
  const object = {
    numbers: array,
    action: actionToDo,
  };

  return object;
};

const generateNumber = () => generatePair(25);

const generateRoundDescription = () => {
  const value = formNumbersAndAction(generateNumber(), generateActionType());

  return {
    question: `Question: ${value.numbers[0]} ${value.action} ${value.numbers[1]}`,
    answer: generateAnswer(value),
  };
};

const instruction = 'What is the result of the expression?';

const runGame = () => {
  runGameProcess(instruction, generateRoundDescription);
};

export default runGame;
