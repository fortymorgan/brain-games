#!/usr/bin/env node
import game from '..';
import * as greatCommonDiv from '../greatCommonDiv';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.');

game(greatCommonDiv.game, greatCommonDiv.generate);
