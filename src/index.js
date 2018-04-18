import readlineSync from 'readline-sync';
import { N_ROUNDS } from './config';

const gameProcess = (gameObject) => {
  const playerName = readlineSync.question('Welcome to the Brain Games!\nTell me your name, please: ');

  console.log(`Let's play a game, ${playerName}!`);

  let totalCount = 0;
  // let value;

  console.log(gameObject.instruction);

  for (let i = 0; i < N_ROUNDS; i += 1) {
    const askedQuestion = gameObject.askQuestion();

    // console.log(gameObject.askQuestion(value));
    const answer = readlineSync.question('Your answer: ');

    if (answer === askedQuestion()) {
      console.log('Correct!');
      totalCount += 1;
    } else {
      console.log('Wrong!');
      break;
    }
  }

  if (totalCount === N_ROUNDS) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default gameProcess;
