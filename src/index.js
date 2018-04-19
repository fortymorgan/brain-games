const readlineSync = require('readline-sync');
const { N_ROUNDS } = require('./config');

const runGameProcess = (instruction, generateRoundDescription) => {
  const playerName = readlineSync.question('Welcome to the Brain Games!\nTell me your name, please: ');

  console.log(`Let's play a game, ${playerName}!`);

  let totalCount = 0;
  // let value;

  console.log(instruction);

  for (let i = 0; i < N_ROUNDS; i += 1) {
    const roundDescription = generateRoundDescription();

    console.log(roundDescription.question);
    const answer = readlineSync.question('Your answer: ');

    if (answer === roundDescription.answer) {
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

module.exports = runGameProcess;
