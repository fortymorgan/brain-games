import readlineSync from 'readline-sync';
import gameProcess from '..';
import { generatePairs } from '../generateNumbers';

const greatCommonDiv = (num1, num2) => {
  const half = num1 > num2 ? Math.ceil(num1 / 2) : Math.ceil(num2 / 2);
  let divisor = 0;

  for (let i = 1; i <= half; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

const question = (number) => {
  console.log(`Question: ${number[0]} and ${number[1]}`);
  const answer = readlineSync.question('Your answer: ');

  const gcd = greatCommonDiv(number[0], number[1]);

  if (+answer === gcd) {
    console.log('Correct!');
    return 1;
  }
  console.log('Wrong answer!');
  return 0;
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');

  gameProcess(question, generatePairs(200), '');
};

export default game;
