import readlineSync from 'readline-sync';

export const askName = () => {
    const name = readlineSync.question('Tell me your name, please: ');
    console.log(`Hello, ${name}!`);
}