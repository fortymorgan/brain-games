import readlineSync from 'readline-sync';
import gameProcess from '..';
import { generateSimple } from '../generateNumbers';

const sumOfDigits = (number) => {
  let total = 0;
  const numToString = String(number);

  for (let i = 0; i < numToString.length; i += 1) {
    total += +numToString[i];
  }

  return total;
};

const balance = (number) => {
  let sum = sumOfDigits(number);
  const numToString = String(number);
  let balanced = '';

  for (let i = numToString.length; i > 0; i -= 1) {
    balanced += Math.floor(sum / i);
    sum -= Math.floor(sum / i);
  }

  return +balanced;
};

const question = (number) => {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  const balanced = balance(number);

  if (+answer === balanced) {
    console.log('Correct!');
    return 1;
  }
  console.log('Wrong answer!');
  return 0;
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Balance the given number.');

  gameProcess(question, generateSimple(10000), '');
};

export default game;
