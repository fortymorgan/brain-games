import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('Tell me your name, please: ');
  console.log(`Hello, ${name}!`);

  return name;
};

export default askName;
