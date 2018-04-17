import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('Tell me your name, please: ');
  console.log(`Hello, ${name}!`);

  return name;
};

const game = (gameProcess, generateNumbers) => {
  const playerName = askName();
  console.log(`Let's play a game, ${playerName}!`);

  gameProcess(generateNumbers(), playerName);
};

export default game;
