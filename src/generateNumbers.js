export const generateSimple = rate => Math.floor((Math.random() * rate) + 1);

export const generatePair = rate => [generateSimple(rate), generateSimple(rate)];

export const generateProgression = (length) => {
  const progression = [generateSimple(25)];
  const progressionStep = generateSimple(10);

  for (let i = 0; i < length - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }

  return progression;
};
