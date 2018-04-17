import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('Tell me your name, please: ');

  return name;
};

const gameProcess = (question, numbers, actions) => {
  const playerName = askName();
  console.log(`Let's play a game, ${playerName}!`);

  let totalCount = 0;
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

export default gameProcess;
