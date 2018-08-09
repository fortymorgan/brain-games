# Brain games
Console-based arithmetical games in Node.js.

[![Maintainability](https://api.codeclimate.com/v1/badges/37856b13e0d836ea76f4/maintainability)](https://codeclimate.com/github/fortymorgan/project-lvl1-s256/maintainability)
[![Build Status](https://travis-ci.org/fortymorgan/brain-games.svg?branch=master)](https://travis-ci.org/fortymorgan/brain-games)

## Examples

### Game "Is number even"
```
Answer "yes" if number even otherwise answer "no".
Question: 47
Your answer: no
Correct!
Question: 15
Your answer: no
Correct!
Question: 14
Your answer: yes
Correct!
```

### Game "Calculations"
```
What is the result of the expression?
Question: 12 * 2
Your answer: 24
Correct!
Question: 18 + 20
Your answer: 38
Correct!
Question: 7 * 7
Your answer: 49
Correct!
```

### Game "Greatest common divisor"
```
Find the greatest common divisor of given numbers.
Question: 174 and 95
Your answer: 1
Correct!
Question: 181 and 142
Your answer: 1
Correct!
Question: 98 and 77
Your answer: 7
Correct!
```

### Game "Balance number"
```
Balance the given number.
Question: 6639
Your answer: 6666
Correct!
Question: 1561
Your answer: 3334
Correct!
Question: 6701
Your answer: 3344
Correct!
```

### Game "Arithmetical progression"
```
What numbers are missing in this progression?
22 32 42 .. .. 72 82 .. 102 112
Your answer: 52 62 92
Correct!
25 .. 37 43 49 55 .. 67 .. 79
Your answer: 31 61 73
Correct!
12 15 .. .. 24 27 30 .. 36 39
Your answer: 18 21 33
Correct!
```

### Game "Is number prime"
```
Answer "yes" if number prime otherwise answer "no".
Question: 127
Your answer: yes
Correct!
Question: 86
Your answer: no
Correct!
Question: 69
Your answer: no
Correct!
```

## How to develop

Fist you need to build app with:
```
npm run build
```

Then you can run games with:

### Game "Is number even"
```
dist/bin/brain-even.js
```

### Game "Calculations"
```
dist/bin/brain-calc.js
```

### Game "Greatest common divisor"
```
dist/bin/brain-gcd.js
```

### Game "Balance number"
```
dist/bin/brain-balance.js
```

### Game "Arithmetical progression"
```
dist/bin/brain-progression.js
```

### Game "Is number prime"
```
dist/bin/brain-prime.js
```

## Config

There are 3 rounds of every game by default. You can change it in `src/config.js`.  
(Remember to rebuild app with `npm run build`)
