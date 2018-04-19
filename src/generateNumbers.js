const generateSimple = exports.generateSimple = rate => Math.round((Math.random() * rate) + 1);

const generatePair = exports.generatePair = rate => [generateSimple(rate), generateSimple(rate)];
