#!/usr/bin/env node
import game from '..';
import * as calculations from '../calculations';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');

game(calculations.game, calculations.generate);
