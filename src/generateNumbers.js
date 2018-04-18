export const generateSimple = rate => Math.round((Math.random() * rate) + 1);

export const generatePair = rate => [generateSimple(rate), generateSimple(rate)];
