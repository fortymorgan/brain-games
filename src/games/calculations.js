import gameProcess from '..';

const formAction = (number) => {
  switch (number.action) {
    case 'add':
      return (`Question: ${number.numbers[0]} + ${number.numbers[1]}`);
    case 'sub':
      return (`Question: ${number.numbers[0]} - ${number.numbers[1]}`);
    case 'mult':
      return (`Question: ${number.numbers[0]} * ${number.numbers[1]}`);
    default:
      throw new Error('Unknown operation');
  }
};

const answerGenerate = (number) => {
  switch (number.action) {
    case 'add':
      return String(number.numbers[0] + number.numbers[1]);
    case 'sub':
      return String(number.numbers[0] - number.numbers[1]);
    case 'mult':
      return String(number.numbers[0] * number.numbers[1]);
    default:
      throw new Error('Unknown operation');
  }
};

const actionNumberToType = (elem) => {
  switch (elem) {
    case 0:
      return 'mult';
    case 1:
      return 'add';
    case 2:
      return 'sub';
    default:
      return 'unknown';
  }
};

const actionType = () => {
  const actionNumber = Math.floor(Math.random() * 3);

  return actionNumberToType(actionNumber);
};

const formNumbersAndAction = (array, actionToDo) => {
  const object = {
    numbers: array,
    action: actionToDo,
  };

  return object;
};

const generateNumber = () => {
  const array = [];
  for (let j = 0; j < 2; j += 1) {
    array.push(Math.round((Math.random() * 25) + 1));
  }

  return array;
};

const numbersAndAction = () => formNumbersAndAction(generateNumber(), actionType());

const gameObject = {
  instruction: 'What is the result of the expression?',
  number: numbersAndAction,
  askQuestion: formAction,
  calcAnswer: answerGenerate,
};

const game = () => {
  gameProcess(gameObject);
};

export default game;
