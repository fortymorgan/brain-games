import gameProcess from '..';

const greatCommonDiv = (number) => {
  const limit = number[0] > number[1] ? number[0] : number[1];
  let divisor = 0;

  for (let i = 1; i <= limit; i += 1) {
    if (number[0] % i === 0 && number[1] % i === 0) {
      divisor = i;
    }
  }

  return String(divisor);
};

const generateNumber = () => {
  const array = [];
  for (let j = 0; j < 2; j += 1) {
    array.push(Math.round((Math.random() * 200) + 1));
  }

  return array;
};

const formQuestion = number => `Question: ${number[0]} and ${number[1]}`;

const gameObject = {
  instruction: 'Find the greatest common divisor of given numbers.',
  number: generateNumber,
  askQuestion: formQuestion,
  calcAnswer: greatCommonDiv,
};

const game = () => {
  gameProcess(gameObject);
};

export default game;
