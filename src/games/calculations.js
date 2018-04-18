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
  if (number.action === 'add') {
    return String(number.numbers[0] + number.numbers[1]);
  } else if (number.action === 'sub') {
    return String(number.numbers[0] - number.numbers[1]);
  }

  return String(number.numbers[0] * number.numbers[1]);
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

const actionName = () => {
  const actionNumber = Math.floor(Math.random() * 3);

  return actionNumberToType(actionNumber);
};

const formObjectOfActions = (array, actionToDo) => {
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

const numbersAndAction = () => formObjectOfActions(generateNumber(), actionName());

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
