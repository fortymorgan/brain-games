import readlineSync from 'readline-sync';
import gameProcess from '..';
import { generateSimple } from '../generateNumbers';

const question = (number) => {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (number % 2 === 0 && answer.toLowerCase() === 'yes') {
    console.log('Correct!');
    return 1;
  } else if (number % 2 !== 0 && answer.toLowerCase() === 'no') {
    console.log('Correct!');
    return 1;
  }
  console.log('Wrong answer!');
  return 0;
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  gameProcess(question, generateSimple(50), '');
};

export default game;
