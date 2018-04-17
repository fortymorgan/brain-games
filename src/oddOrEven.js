import readlineSync from 'readline-sync';

export const generate = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    array.push(Math.round(Math.random() * 50));
  }

  return array;
};

const question = (number) => {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (number % 2 === 0 && answer.toLowerCase() === 'yes') {
    console.log('Correct!');
    return 1;
  } else if (number % 2 !== 0 && answer.toLowerCase() === 'no') {
    console.log('Correct!');
    return 1;
  }
  console.log('Wrong answer!');
  return 0;
};

export const game = (numbers, playerName) => {
  let totalCount = 0;
  for (let i = 1; i <= 3; i += 1) {
    totalCount += question(numbers[i - 1]);
    if (totalCount !== i) {
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }

  if (totalCount === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
};
