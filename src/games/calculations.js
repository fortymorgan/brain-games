import gameProcess from '..';
import { generatePairs } from '../generateNumbers';

const formAction = (number, action) => {
  switch (action) {
    case 'add':
      return (`Question: ${number[0]} + ${number[1]}`);
    case 'sub':
      return (`Question: ${number[0]} - ${number[1]}`);
    default:
      return (`Question: ${number[0]} * ${number[1]}`);
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
    default:
      return 'sub';
  }
};

const actionList = () => {
  const actionsArray = [];
  for (let i = 0; i < 3; i += 1) {
    actionsArray.push(Math.floor(Math.random() * 3));
  }

  return actionsArray.map(actionNumbersToList);
};

const gameArray = [];
const arrayOfNumbers = generatePairs(25);
const listOfActions = actionList();

gameArray.push('What is the result of the expression?');

for (let i = 1; i <= 3; i += 1) {
  gameArray.push({
    question: formAction(arrayOfNumbers[i - 1], listOfActions[i - 1]),
    answer: answerGenerate(arrayOfNumbers[i - 1], listOfActions[i - 1]),
  });
}

const game = () => {
  gameProcess(gameArray);
};

export default game;
