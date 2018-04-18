import gameProcess from '..';
import { generatePairs } from '../generateNumbers';
import { N_ROUNDS } from '.';

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

const answerGenerate = (number) => {
  if (number.action === 'add') {
    return String(number.numbers[0] + number.numbers[1]);
  } else if (number.action === 'sub') {
    return String(number.numbers[0] - number.numbers[1]);
  }

  return String(number.numbers[0] * number.numbers[1]);
};

const actionNumbersToList = (elem) => {
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

const actionList = (size) => {
  const actionsArray = [];
  for (let i = 0; i < size; i += 1) {
    actionsArray.push(Math.floor(Math.random() * 3));
  }

  return actionsArray.map(actionNumbersToList);
};

const formArrayOfActions = (array1, array2) => {
  const joinedArray = [];

  for (let i = 0; i < array1.length; i += 1) {
    joinedArray.push({
      numbers: array1[i],
      action: array2[i],
    });
  }

  return joinedArray;
};

const arrayOfActions = formArrayOfActions(generatePairs(25, N_ROUNDS), actionList(N_ROUNDS));

const gameObject = {
  instruction: 'What is the result of the expression?',
  numbers: arrayOfActions,
  askQuestion: formAction,
  calcAnswer: answerGenerate,
};

const game = () => {
  gameProcess(gameObject);
};

export default game;
