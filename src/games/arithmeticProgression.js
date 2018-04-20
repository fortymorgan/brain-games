import runGameProcess from '..';
import { generateProgression, generateSimple } from '../generateNumbers';

const generateUniqueArray = (amount, indexRange) => {
  const arrayOfIndex = [];

  for (let i = 0; i < amount; i += 1) {
    let randomIndex = generateSimple(indexRange);
    if (arrayOfIndex.indexOf(randomIndex) === -1) {
      arrayOfIndex.push(randomIndex);
      randomIndex = 0;
    } else {
      i -= 1;
    }
  }
  return arrayOfIndex;
};

const generateRoundDescription = () => {
  const progression = generateProgression(10);
  const indexToHide = generateUniqueArray(1, progression.length - 1);
  const arrayOfAnswers = [];

  const hideElementOnIndex = (elem, index) => {
    if (indexToHide.indexOf(index) !== -1) {
      arrayOfAnswers.push(elem);
      return '..';
    }
    return elem;
  };

  const withHiddenNumbers = progression.map(hideElementOnIndex);

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
