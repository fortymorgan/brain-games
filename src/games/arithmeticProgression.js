import runGameProcess from '..';
import { generateProgression } from '../generateNumbers';

const generateProgressionQuestion = progression => `${progression[0]} \
${progression[1]} ${progression[2]} ${progression[3]} ${progression[4]} \
.. ${progression[6]} ${progression[7]} ${progression[8]} ${progression[9]}`;


const generateRoundDescription = () => {
  const value = generateProgression();

  return {
    question: generateProgressionQuestion(value),
    answer: String(value[5]),
  };
};

const instruction = 'What number is missing in this progression?';

const runGame = () => {
  runGameProcess(instruction, generateRoundDescription);
};

export default runGame;
