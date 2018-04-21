import runGameProcess from '..';
import { generateProgression, generateSimple } from '../generateNumbers';

const generateUniqueArray = (amount, indexRange) => {
  const arrayOfIndex = [];

  for (let i = 0; i < amount; i += 1) {
    const randomIndex = generateSimple(indexRange);
    if (arrayOfIndex.indexOf(randomIndex) === -1) {
      arrayOfIndex.push(randomIndex);
    } else {
      i -= 1;
    }
  }
  return arrayOfIndex;
};

const generateRoundDescription = () => {
  const progression = generateProgression(10);
  const indexToHide = generateUniqueArray(3, progression.length - 1);

  const hideElementOnIndex = (elem, index) => (indexToHide.includes(index) ? '..' : elem);

  const filterAnswers = (elem, index) => indexToHide.includes(index);

  const withHiddenNumbers = progression.map(hideElementOnIndex);
  const arrayOfAnswers = progression.filter(filterAnswers);

  return {
    question: withHiddenNumbers.join(' '),
    answer: arrayOfAnswers.join(' '),
  };
};

const instruction = 'What numbers are missing in this progression?';

const runGame = () => {
  runGameProcess(instruction, generateRoundDescription);
};

export default runGame;
