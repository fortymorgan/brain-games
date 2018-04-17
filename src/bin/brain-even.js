#!/usr/bin/env node
import askName from '..';
import { generateNumbers, question } from '../oddOrEven';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const playerName = askName();

console.log(`Let's play a game, ${playerName}!`);

const numbers = generateNumbers();
let totalCount = 0;

for (let i = 1; i <= 3; i += 1) {
  totalCount += question(numbers[i - 1]);
  if (totalCount !== i) {
    console.log(`Let's try again, ${playerName}!`);
    break;
  }
}

if (totalCount === 3) {
  console.log(`Congratulations, ${playerName}!`);
}
