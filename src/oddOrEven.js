import readlineSync from 'readline-sync';

export const generateNumbers = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    array.push(Math.round(Math.random() * 50));
  }

  return array;
};

export const question = (number) => {
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
