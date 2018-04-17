#!/usr/bin/env node
import game from '..';
import * as oddOrEven from '../oddOrEven';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

game(oddOrEven.game, oddOrEven.generate);
