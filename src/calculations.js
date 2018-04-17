import readlineSync from 'readline-sync';

export const generate = () => {
  const array = [];
  let subarray = [];
  for (let i = 0; i < 3; i += 1) {
    subarray = [];
    for (let j = 0; j < 2; j += 1) {
      subarray.push(Math.round(Math.random() * 25));
    }
    array.push(subarray);
  }

  return array;
};

const question = (number, action) => {
  switch (action) {
    case 'add':
      console.log(`Question: ${number[0]} + ${number[1]}`);
      break;
    case 'sub':
      console.log(`Question: ${number[0]} - ${number[1]}`);
      break;
    default:
      console.log(`Question: ${number[0]} * ${number[1]}`);
  }
  const answer = readlineSync.question('Your answer: ');

  if (action === 'add' && +answer === number[0] + number[1]) {
    console.log('Correct!');
    return 1;
  } else if (action === 'sub' && +answer === number[0] - number[1]) {
    console.log('Correct!');
    return 1;
  } else if (action === 'mult' && +answer === number[0] * number[1]) {
    console.log('Correct!');
    return 1;
  }
  console.log('Wrong answer!');
  return 0;
};

const actionNumbersToList = (elem) => {
  switch (elem) {
    case 0:
      return 'mult';
    case 1:
      return 'add';
    default:
      return 'sub';
  }
};

const actionList = () => {
  const actionsArray = [];
  for (let i = 0; i < 3; i += 1) {
    actionsArray.push(Math.floor(Math.random() * 3));
  }

  return actionsArray.map(actionNumbersToList);
};

export const game = (numbers, playerName) => {
  let totalCount = 0;
  const actions = actionList();
  for (let i = 1; i <= 3; i += 1) {
    totalCount += question(numbers[i - 1], actions[i - 1]);
    if (totalCount !== i) {
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }

  if (totalCount === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
};