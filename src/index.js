import readlineSync from 'readline-sync';

const gameProcess = (gameArray) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('Tell me your name, please: ');

  console.log(`Let's play a game, ${playerName}!`);

  let totalCount = 0;

  console.log(gameArray[0]);

  for (let i = 1; i <= 3; i += 1) {
    console.log(gameArray[i].question);
    const answer = readlineSync.question('Your answer: ');

    if (answer === gameArray[i].answer) {
      console.log('Correct!');
      totalCount += 1;
    } else {
      console.log('Wrong!');
      break;
    }
  }

  if (totalCount === 3) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default gameProcess;
