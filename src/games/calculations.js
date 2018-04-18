import gameProcess from '..';
import { generatePairs } from '../generateNumbers';
import { N_ROUNDS } from '.';

const formAction = (number, action) => {
  switch (action) {
    case 'add':
      return (`Question: ${number[0]} + ${number[1]}`);
    case 'sub':
      return (`Question: ${number[0]} - ${number[1]}`);
    case 'mult':
      return (`Question: ${number[0]} * ${number[1]}`);
    default:
      throw new Error('Unknown operation');
  }
};

const answerGenerate = (number, action) => {
  if (action === 'add') {
    return String(number[0] + number[1]);
  } else if (action === 'sub') {
    return String(number[0] - number[1]);
  }

  return String(number[0] * number[1]);
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

const actionList = () => {
  const actionsArray = [];
  for (let i = 0; i < N_ROUNDS; i += 1) {
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

const gameArray = [];
const arrayOfNumbers = generatePairs(25, N_ROUNDS);
const arrayOfActions = formArrayOfActions(arrayOfNumbers, actionList());

gameArray.push('What is the result of the expression?');

arrayOfActions.forEach((elem) => {
  gameArray.push({
    question: formAction(elem.numbers, elem.action),
    answer: answerGenerate(elem.numbers, elem.action),
  });
});

const game = () => {
  gameProcess(gameArray);
};

export default game;
