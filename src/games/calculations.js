import readlineSync from 'readline-sync';
import gameProcess from '..';
import { generatePairs } from '../generateNumbers';

const question = (number, action) => {
  switch (action) {
    case 'add':
      console.log(`Question: ${number[0]} + ${number[1]}`);
      break;
    case 'sub':
      console.log(`Question: ${number[0]} - ${number[1]}`);
      break;
    default:
      console.log(`Question: ${number[0]} * ${number[1]}`);
  }
  const answer = readlineSync.question('Your answer: ');

  if (action === 'add' && +answer === number[0] + number[1]) {
    console.log('Correct!');
    return 1;
  } else if (action === 'sub' && +answer === number[0] - number[1]) {
    console.log('Correct!');
    return 1;
  } else if (action === 'mult' && +answer === number[0] * number[1]) {
    console.log('Correct!');
    return 1;
  }
  console.log('Wrong answer!');
  return 0;
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

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');

  gameProcess(question, generatePairs(25), actionList());
};

export default game;
