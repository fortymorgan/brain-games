import readlineSync from 'readline-sync';

const greatCommonDiv = (num1, num2) => {
  const half = num1 > num2 ? Math.ceil(num1 / 2) : Math.ceil(num2 / 2);
  let divisor = 0;

  for (let i = 1; i <= half; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

export const generate = () => {
  const array = [];
  let subarray = [];
  for (let i = 0; i < 3; i += 1) {
    subarray = [];
    for (let j = 0; j < 2; j += 1) {
      subarray.push(Math.ceil(Math.random() * 200));
    }
    array.push(subarray);
  }

  return array;
};

const question = (number) => {
  console.log(`Question: ${number[0]} and ${number[1]}`);
  const answer = readlineSync.question('Your answer: ');

  const gcd = greatCommonDiv(number[0], number[1]);

  if (+answer === gcd) {
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
