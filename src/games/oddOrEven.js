import gameProcess from '..';

const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const formQuestion = number => `Question: ${number}`;

const generateNumber = () => Math.round((Math.random() * 50) + 1);

const gameObject = {
  instruction: 'Answer "yes" if number even otherwise answer "no".',
  generateValue: generateNumber,
  askQuestion: formQuestion,
  calculateAnswer: oddOrEven,
};

const game = () => {
  gameProcess(gameObject);
};

export default game;
