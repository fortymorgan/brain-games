import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('Tell me your name, please: ');
  console.log(`Hello, ${name}!`);
};

export default askName;
