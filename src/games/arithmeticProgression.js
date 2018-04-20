import runGameProcess from '..';
import { generateProgression, generateSimple } from '../generateNumbers';

const progressionPartToString = (progression, begin, end) => progression.slice(begin, end).join(' ');

const generateProgressionQuestion = (progression) => {
  const missedElementIndex = generateSimple(progression.length);
  const questionStringObject = {
    firstPart: progressionPartToString(progression, 0, missedElementIndex),
    secondPart: progressionPartToString(progression, missedElementIndex + 1),
  };
  return {
    question: `${questionStringObject.firstPart} .. ${questionStringObject.secondPart}`,
    answer: String(progression[missedElementIndex]),
  };
};

const generateRoundDescription = () => {
  const value = generateProgression(10);
  return generateProgressionQuestion(value);
};

const instruction = 'What number is missing in this progression?';

const runGame = () => {
  runGameProcess(instruction, generateRoundDescription);
};

export default runGame;
